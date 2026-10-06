import { z } from "zod";
import { enquiryTypes, type EnquirySlug } from "@/lib/site";

const slugs = enquiryTypes.map((t) => t.slug) as [EnquirySlug, ...EnquirySlug[]];

export const enquiryFields = ["enquiry", "name", "email", "company", "message"] as const;
export type EnquiryField = (typeof enquiryFields)[number];
export type EnquiryValues = Record<EnquiryField, string>;

const singleLine = (label: string, max: number) =>
  z
    .string()
    .trim()
    .min(1, `Enter your ${label}.`)
    .max(max, `Your ${label} must be ${max} characters or fewer.`)
    .refine((v) => !/[\r\n]/.test(v), `Your ${label} must be on a single line.`);

export const enquirySchema = z.object({
  enquiry: z.enum(slugs, { error: "Select what you would like to discuss." }),
  name: singleLine("name", 120),
  email: z
    .string()
    .trim()
    .min(1, "Enter your work email address.")
    .max(254, "Your email address must be 254 characters or fewer.")
    .pipe(z.email("Enter a valid email address, like name@company.com.")),
  company: singleLine("company name", 160),
  message: z
    .string()
    .trim()
    .min(1, "Enter a message.")
    .max(5000, "Your message must be 5,000 characters or fewer."),
});

export type Enquiry = z.infer<typeof enquirySchema>;

export function enquiryLabel(slug: EnquirySlug) {
  return enquiryTypes.find((t) => t.slug === slug)?.label ?? slug;
}

export function isEnquirySlug(value: unknown): value is EnquirySlug {
  return typeof value === "string" && (slugs as string[]).includes(value);
}

export type EnquiryState =
  | { status: "idle"; submissionId: number }
  | { status: "success"; submissionId: number }
  | {
      status: "invalid";
      submissionId: number;
      fieldErrors: Partial<Record<EnquiryField, string>>;
      values: EnquiryValues;
    }
  | {
      status: "error";
      submissionId: number;
      reason: "send_failed" | "rate_limited" | "too_fast";
      values: EnquiryValues;
    };

export const initialEnquiryState: EnquiryState = { status: "idle", submissionId: 0 };
