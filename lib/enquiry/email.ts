import "server-only";
import nodemailer from "nodemailer";
import { site } from "@/lib/site";
import { enquiryLabel, type Enquiry } from "./schema";


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

/**
 * Sends the enquiry to Fairpointe through Gmail SMTP using an app password.
 * Throws if credentials are missing or Gmail does not accept the message.
 */
export async function sendEnquiryEmail(enquiry: Enquiry, meta: { pageUrl: string; submittedAt: Date }) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
  if (!user || !pass) throw new Error("GMAIL_USER and GMAIL_APP_PASSWORD must be configured");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
  const { subject, text } = buildEnquiryEmail(enquiry, meta);

  const info = await transporter.sendMail({
    from: process.env.CONTACT_FROM_EMAIL || `Fairpointe Website <${user}>`,
    to: process.env.CONTACT_TO_EMAIL || site.email,
    replyTo: enquiry.email,
    subject,
    text,
  });

  if (info.accepted.length === 0) {
    throw new Error(`Gmail rejected the enquiry: ${info.response}`);
  }

  return info.messageId;
}
