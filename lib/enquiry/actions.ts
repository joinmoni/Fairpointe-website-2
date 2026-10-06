"use server";

import { headers } from "next/headers";
import { site } from "@/lib/site";
import { sendEnquiryEmail } from "./email";
import { rateLimit } from "./rate-limit";
import { enquiryFields, enquirySchema, type EnquiryField, type EnquiryState, type EnquiryValues } from "./schema";

/** Submissions faster than this are almost certainly automated. */
const MIN_FILL_TIME_MS = 2000;

function readValues(formData: FormData): EnquiryValues {
  const values = {} as EnquiryValues;
  for (const field of enquiryFields) {
    const raw = formData.get(field);
    values[field] = typeof raw === "string" ? raw.slice(0, 6000) : "";
  }
  return values;
}

async function clientKey() {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || h.get("x-real-ip") || "unknown";
}

async function resolvePageUrl(formData: FormData) {
  const candidates = [formData.get("page"), (await headers()).get("referer")];
  for (const candidate of candidates) {
    if (typeof candidate !== "string" || !candidate) continue;
    try {
      const url = new URL(candidate);
      if (url.protocol === "https:" || url.protocol === "http:") return url.toString().slice(0, 500);
    } catch {
      // Ignore malformed values and fall through.
    }
  }
  return `${site.url}/contact`;
}

/**
 * Shared server action for every enquiry form on the site.
 * Validates input, applies spam protection and only reports success once the
 * email provider has accepted the message.
 */
export async function submitEnquiry(prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const submissionId = prev.submissionId + 1;
  const values = readValues(formData);

  // Honeypot: real visitors never see or fill this field.
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    console.warn("[enquiry] honeypot triggered, submission discarded");
    return { status: "success", submissionId };
  }

  // Timing check: only applied when the client recorded a start time.
  const elapsed = Number(formData.get("elapsed"));
  if (Number.isFinite(elapsed) && elapsed > 0 && elapsed < MIN_FILL_TIME_MS) {
    return { status: "error", reason: "too_fast", submissionId, values };
  }

  const parsed = enquirySchema.safeParse(values);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<EnquiryField, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as EnquiryField;
      if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    return { status: "invalid", fieldErrors, submissionId, values };
  }

  if (!rateLimit(await clientKey()).allowed) {
    return { status: "error", reason: "rate_limited", submissionId, values };
  }

  try {
    const id = await sendEnquiryEmail(parsed.data, {
      pageUrl: await resolvePageUrl(formData),
      submittedAt: new Date(),
    });
    console.info(`[enquiry] sent ${id}`);
    return { status: "success", submissionId };
  } catch (error) {
    console.error("[enquiry] failed to send", error);
    return { status: "error", reason: "send_failed", submissionId, values };
  }
}
