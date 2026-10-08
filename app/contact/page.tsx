import type { Metadata } from "next";
import Link from "next/link";
import { company, site } from "@/lib/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { isEnquirySlug } from "@/lib/enquiry/schema";
import { JsonLd } from "@/components/json-ld";
import { Container, Grid } from "@/components/marketing/layout";
import { EnquiryForm } from "@/components/contact/enquiry-form";

const path = "/contact";

export const metadata: Metadata = pageMetadata({
  title: "Contact Fairpointe | Discuss a Technology Project",
  description:
    "Contact Fairpointe about evaluating or deploying AI, security and cloud technology, UK public-sector technology or entering the UK technology market.",
  path,
});

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { enquiry } = await searchParams;
  const defaultEnquiry = isEnquirySlug(enquiry) ? enquiry : undefined;

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Fairpointe",
            url: new URL(path, site.url).toString(),
            about: { "@id": `${site.url}/#organization` },
          },
          breadcrumbSchema([{ name: "Contact", path }]),
        ]}
      />
      <section aria-labelledby="contact-heading" className="pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
        <Container>
          <Grid className="gap-y-14">
            <div className="col-span-4 md:col-span-10 lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <h1 id="contact-heading" className="type-h1">
                  Let&rsquo;s discuss what you&rsquo;re trying to deploy or bring to the UK.
                </h1>
                <p className="type-lede mt-8 max-w-[26rem] text-ink-soft">
                  Whether you&rsquo;re evaluating specialist technology, planning a deployment or looking to establish
                  your technology company in the UK, tell us what you&rsquo;re working on.
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
                <p className="mt-6 text-[0.9375rem] text-ink-muted">
                  See our{" "}
                  <Link
                    href={company.privacyPolicyHref}
                    className="underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
                  >
                    Privacy Policy
                  </Link>{" "}
                  for how we handle enquiries.
                </p>
              </div>
            </div>
          </Grid>
        </Container>
      </section>
    </>
  );
}
