import type { Metadata } from "next";
import Link from "next/link";
import { company, cta, site } from "@/lib/site";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { isEnquirySlug } from "@/lib/enquiry/schema";
import { JsonLd } from "@/components/json-ld";
import { Container, Grid } from "@/components/marketing/layout";
import { EnquiryForm } from "@/components/contact/enquiry-form";

const path = "/contact";

const title = "Contact Fairpointe | Discuss Your Project";
const description =
  "Discuss a technology implementation, customer deployment, cloud project, AI access requirement or UK market-entry opportunity with Fairpointe.";

export const metadata: Metadata = pageMetadata({ title, description, path });

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { enquiry } = await searchParams;
  const defaultEnquiry = isEnquirySlug(enquiry) ? enquiry : undefined;

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ type: "ContactPage", name: title, description, path }),
          breadcrumbSchema([{ name: "Contact", path }]),
        ]}
      />
      <section aria-labelledby="contact-heading" className="pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
        <Container>
          <Grid className="gap-y-14">
            <div className="col-span-4 md:col-span-10 lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <h1 id="contact-heading" className="type-h1">
                  Tell us what you&rsquo;re working on.
                </h1>
                <p className="type-lede mt-8 max-w-[26rem] text-ink-soft">
                  Share the technology, customer requirement or UK opportunity you need help with, along with your
                  target timeline.
                </p>
              </div>
            </div>
            <div className="col-span-4 md:col-span-12 lg:col-span-6 lg:col-start-7">
              <EnquiryForm key={defaultEnquiry ?? "none"} defaultEnquiry={defaultEnquiry} />
              <div className="mt-16 border-t border-rule pt-8">
                <h2 className="text-[1.0625rem] font-semibold tracking-[-0.01em]">Prefer email?</h2>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 inline-block text-[1.0625rem] font-medium text-ink underline decoration-ink/30 underline-offset-[6px] transition-colors hover:decoration-ink"
                >
                  {site.email}
                </a>
                <h2 className="mt-10 text-[1.0625rem] font-semibold tracking-[-0.01em]">Prefer to talk?</h2>
                <p className="mt-2 text-[0.9375rem] text-ink-muted">
                  Book a 20-minute call to discuss your project, customer deployment or UK expansion.
                </p>
                <div className="mt-4 flex flex-col items-start gap-3">
                  <a
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[1.0625rem] font-medium text-ink underline decoration-ink/30 underline-offset-[6px] transition-colors hover:decoration-ink"
                  >
                    {cta.bookCall.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
                <p className="mt-6 text-[0.9375rem] text-ink-muted">
                  Read our{" "}
                  <Link
                    href={company.privacyPolicyHref}
                    className="underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
                  >
                    Privacy Policy
                  </Link>{" "}
                  to see how we handle your enquiry.
                </p>
              </div>
            </div>
          </Grid>
        </Container>
      </section>
    </>
  );
}
