"use client";

import * as React from "react";
import { useActionState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { enquiryTypes, site, type EnquirySlug } from "@/lib/site";
import { submitEnquiry } from "@/lib/enquiry/actions";
import { initialEnquiryState, type EnquiryField, type EnquiryState } from "@/lib/enquiry/schema";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const fieldLabels: Record<EnquiryField, string> = {
  enquiry: "What would you like to discuss?",
  name: "Name",
  email: "Work email",
  company: "Company",
  message: "Message",
};

const EmailLink = () => (
  <a href={`mailto:${site.email}`} className="font-medium underline underline-offset-4">
    {site.email}
  </a>
);

function errorMessage(state: Extract<EnquiryState, { status: "error" }>) {
  switch (state.reason) {
    case "rate_limited":
      return (
        <>
          Several enquiries have already been sent from this connection. Please try again later or email{" "}
          <EmailLink /> directly.
        </>
      );
    case "too_fast":
      return <>Please take a moment to review your enquiry, then send it again.</>;
    default:
      return (
        <>
          We could not send your enquiry. Please try again or email <EmailLink /> directly.
        </>
      );
  }
}

/**
 * Reusable enquiry form. Every instance posts to the same server action, so
 * forms placed elsewhere on the site share validation, spam protection and delivery.
 */
export function EnquiryForm({ defaultEnquiry, id = "enquiry" }: { defaultEnquiry?: EnquirySlug; id?: string }) {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialEnquiryState);

  const values = state.status === "invalid" || state.status === "error" ? state.values : undefined;
  const fieldErrors = state.status === "invalid" ? state.fieldErrors : {};

  const [selected, setSelected] = React.useState<string>(values?.enquiry || defaultEnquiry || "");
  const [syncedSubmission, setSyncedSubmission] = React.useState(state.submissionId);
  if (state.submissionId !== syncedSubmission) {
    setSyncedSubmission(state.submissionId);
    if (values) setSelected(values.enquiry);
  }

  const startedAt = React.useRef(0);
  React.useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const summaryRef = React.useRef<HTMLDivElement>(null);
  const successRef = React.useRef<HTMLHeadingElement>(null);
  React.useEffect(() => {
    if (state.status === "invalid" || state.status === "error") summaryRef.current?.focus();
    if (state.status === "success") successRef.current?.focus();
  }, [state]);

  const hint =
    enquiryTypes.find((t) => t.slug === selected)?.hint ?? "Tell us what you are working on.";

  const fieldId = (field: string) => `${id}-${field}`;
  const describedBy = (field: EnquiryField, extra?: string) =>
    [extra, fieldErrors[field] ? fieldId(`${field}-error`) : undefined].filter(Boolean).join(" ") || undefined;

  const errorEntries = Object.entries(fieldErrors) as [EnquiryField, string][];

  return (
    <AnimatePresence mode="wait" initial={false}>
      {state.status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.2, 0.7, 0.1, 1] }}
          role="status"
          className="border-t border-ink pt-8"
        >
          <h2 ref={successRef} tabIndex={-1} className="type-h3 outline-none">
            Thanks. Your enquiry has been sent to Fairpointe.
          </h2>
          <p className="type-body mt-4 text-ink-soft">We will be in touch.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={false}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          action={formAction}
          onSubmit={(event) => {
            const form = event.currentTarget;
            (form.elements.namedItem("page") as HTMLInputElement).value = window.location.href;
            (form.elements.namedItem("elapsed") as HTMLInputElement).value = startedAt.current
              ? String(Date.now() - startedAt.current)
              : "";
          }}
          noValidate
          aria-describedby={errorEntries.length || state.status === "error" ? `${id}-summary` : undefined}
          className="space-y-10"
        >
          {/* Remount fields after each submission so they pick up the returned values */}
          <React.Fragment key={state.submissionId}>
          {errorEntries.length > 0 ? (
            <div
              ref={summaryRef}
              id={`${id}-summary`}
              tabIndex={-1}
              role="alert"
              className="border-l-2 border-danger bg-white/60 py-4 pr-4 pl-5 outline-none"
            >
              <p className="font-semibold text-danger">Check the following and send your enquiry again.</p>
              <ul className="mt-2 space-y-1 text-[0.9375rem]">
                {errorEntries.map(([field, message]) => (
                  <li key={field}>
                    <a
                      href={`#${field === "enquiry" ? fieldId("enquiry-0") : fieldId(field)}`}
                      className="text-ink underline underline-offset-4"
                    >
                      {message}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {state.status === "error" ? (
            <div
              ref={summaryRef}
              id={`${id}-summary`}
              tabIndex={-1}
              role="alert"
              className="border-l-2 border-danger bg-white/60 py-4 pr-4 pl-5 text-[0.9375rem] leading-relaxed text-ink outline-none"
            >
              {errorMessage(state)}
            </div>
          ) : null}

          <fieldset aria-describedby={describedBy("enquiry")}>
            <legend className="text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink">
              {fieldLabels.enquiry}
            </legend>
            {fieldErrors.enquiry ? (
              <p id={fieldId("enquiry-error")} className="mt-2 text-[0.9375rem] font-medium text-danger">
                {fieldErrors.enquiry}
              </p>
            ) : null}
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {enquiryTypes.map((type, i) => (
                <label
                  key={type.slug}
                  htmlFor={fieldId(`enquiry-${i}`)}
                  className={cn(
                    "flex cursor-pointer items-center gap-3.5 rounded-[2px] border bg-white/40 px-4 py-3.5 text-[0.9375rem] font-medium transition-colors hover:border-ink/60",
                    "has-[:checked]:border-ink has-[:checked]:bg-white has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent",
                    fieldErrors.enquiry ? "border-danger" : "border-rule-strong",
                  )}
                >
                  <input
                    id={fieldId(`enquiry-${i}`)}
                    type="radio"
                    name="enquiry"
                    value={type.slug}
                    checked={selected === type.slug}
                    onChange={() => setSelected(type.slug)}
                    required
                    className="peer grid size-[18px] shrink-0 appearance-none place-content-center rounded-full border border-rule-strong bg-white before:size-2 before:scale-0 before:rounded-full before:bg-ink before:transition-transform checked:border-ink checked:before:scale-100 focus-visible:outline-none"
                  />
                  {type.label}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-8 sm:grid-cols-2">
            <Field id={fieldId("name")} label={fieldLabels.name} error={fieldErrors.name}>
              <Input
                id={fieldId("name")}
                name="name"
                autoComplete="name"
                required
                maxLength={120}
                defaultValue={values?.name}
                aria-invalid={fieldErrors.name ? true : undefined}
                aria-describedby={describedBy("name")}
              />
            </Field>
            <Field id={fieldId("company")} label={fieldLabels.company} error={fieldErrors.company}>
              <Input
                id={fieldId("company")}
                name="company"
                autoComplete="organization"
                required
                maxLength={160}
                defaultValue={values?.company}
                aria-invalid={fieldErrors.company ? true : undefined}
                aria-describedby={describedBy("company")}
              />
            </Field>
            <Field
              id={fieldId("email")}
              label={fieldLabels.email}
              error={fieldErrors.email}
              className="sm:col-span-2"
            >
              <Input
                id={fieldId("email")}
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                spellCheck={false}
                required
                maxLength={254}
                defaultValue={values?.email}
                aria-invalid={fieldErrors.email ? true : undefined}
                aria-describedby={describedBy("email")}
              />
            </Field>
            <Field
              id={fieldId("message")}
              label={fieldLabels.message}
              error={fieldErrors.message}
              hint={hint}
              hintId={fieldId("message-hint")}
              className="sm:col-span-2"
            >
              <Textarea
                id={fieldId("message")}
                name="message"
                required
                rows={7}
                maxLength={5000}
                defaultValue={values?.message}
                aria-invalid={fieldErrors.message ? true : undefined}
                aria-describedby={describedBy("message", fieldId("message-hint"))}
              />
            </Field>
          </div>

          {/* Spam protection: hidden from people and assistive technology */}
          <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor={fieldId("website")}>Leave this field empty</label>
            <input id={fieldId("website")} type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>
          <input type="hidden" name="page" defaultValue="" />
          <input type="hidden" name="elapsed" defaultValue="" />

          <div className="flex flex-col gap-4 border-t border-rule pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" disabled={pending} aria-disabled={pending} className="w-full sm:w-auto">
              {pending ? (
                <>
                  <LoaderCircle aria-hidden className="animate-spin" strokeWidth={1.75} />
                  Sending enquiry
                </>
              ) : (
                <>
                  Send enquiry
                  <ArrowRight
                    aria-hidden
                    strokeWidth={1.75}
                    className="transition-transform duration-200 group-hover/button:translate-x-0.5"
                  />
                </>
              )}
            </Button>
            <p aria-live="polite" className="sr-only">
              {pending ? "Sending your enquiry" : ""}
            </p>
          </div>
          </React.Fragment>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({
  id,
  label,
  error,
  hint,
  hintId,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  hintId?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      {hint ? (
        <p id={hintId} className="mt-1.5 text-[0.9375rem] leading-snug text-ink-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-[0.9375rem] font-medium text-danger">
          {error}
        </p>
      ) : null}
      <div className="mt-2.5">{children}</div>
    </div>
  );
}
