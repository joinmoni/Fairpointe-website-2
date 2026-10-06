import "server-only";
import { Resend } from "resend";
import { site } from "@/lib/site";
import { enquiryLabel, type Enquiry } from "./schema";

const DEFAULT_FROM = "Fairpointe Website <website@fairpointe.co.uk>";

function oneLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export function formatSubmittedAt(date: Date) {
  const london = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    dateStyle: "long",
    timeStyle: "long",
  }).format(date);
  return `${london} (${date.toISOString()})`;
}

export function buildEnquiryEmail(enquiry: Enquiry, meta: { pageUrl: string; submittedAt: Date }) {
  const type = enquiryLabel(enquiry.enquiry);
  const subject = oneLine(`Fairpointe website enquiry: ${enquiry.company} | ${type}`);
  const text = [
    "New Fairpointe website enquiry",
    "",
    `Name: ${enquiry.name}`,
    `Work email: ${enquiry.email}`,
    `Company: ${enquiry.company}`,
    `Enquiry type: ${type}`,
    "",
    "Message:",
    enquiry.message,
    "",
    `Page submitted from: ${meta.pageUrl}`,
    `Submitted at: ${formatSubmittedAt(meta.submittedAt)}`,
  ].join("\n");

  return { subject, text };
}

/** Sends the enquiry to Fairpointe. Throws if the provider is unavailable or rejects the message. */
export async function sendEnquiryEmail(enquiry: Enquiry, meta: { pageUrl: string; submittedAt: Date }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured");

  const resend = new Resend(apiKey);
  const { subject, text } = buildEnquiryEmail(enquiry, meta);

  const { data, error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
    to: process.env.CONTACT_TO_EMAIL || site.email,
    replyTo: enquiry.email,
    subject,
    text,
  });

  if (error || !data?.id) {
    throw new Error(`Resend rejected the enquiry: ${error?.name ?? "unknown"} ${error?.message ?? ""}`.trim());
  }

  return data.id;
}
