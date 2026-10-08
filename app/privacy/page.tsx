import type { Metadata } from "next";
import type { ReactNode } from "react";
import { company, site } from "@/lib/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Grid, Section } from "@/components/marketing/layout";
import { PageHero } from "@/components/marketing/blocks";

const path = "/privacy";
const lastUpdated = "8 October 2026";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Fairpointe",
  description:
    "How Fairpointe UK Limited collects, uses and protects personal information submitted through fairpointe.co.uk.",
  path,
});

const sections: { title: string; body: ReactNode }[] = [
  {
    title: "Who we are",
    body: (
      <>
        <p>
          {company.legalName} (&ldquo;Fairpointe&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates {site.url.replace("https://", "")}.
          We are the controller of the personal information described in this policy.
        </p>
        <p>
          For any question about this policy or your personal information, email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </>
    ),
  },
  {
    title: "Information we collect",
    body: (
      <>
        <p>When you send an enquiry through our contact form, we collect:</p>
        <ul>
          <li>your name, work email address and company</li>
          <li>the type of enquiry you select and the message you write</li>
          <li>the page you submitted the form from and the time of submission</li>
        </ul>
        <p>
          When you email us directly, we receive your email address and anything you include in your message.
        </p>
        <p>
          To protect the form from spam and abuse, our server briefly uses your IP address to limit repeated
          submissions. It is held in memory for up to 15 minutes and is not stored with your enquiry.
        </p>
        <p>
          Like most websites, our hosting provider may record standard server logs, such as IP address, browser type
          and the pages requested, for security and to keep the site running.
        </p>
      </>
    ),
  },
  {
    title: "How we use your information",
    body: (
      <>
        <p>We use the information you send us to:</p>
        <ul>
          <li>respond to your enquiry and discuss how we might work together</li>
          <li>prepare for and enter into a contract with you or your organisation, where that follows</li>
          <li>keep a record of our correspondence</li>
          <li>protect our website and services from misuse</li>
        </ul>
        <p>We do not sell your personal information or use it for automated decision-making.</p>
      </>
    ),
  },
  {
    title: "Our legal basis",
    body: (
      <p>
        Under UK data protection law, we rely on our legitimate interests in responding to business enquiries and
        developing our business, and, where you or your organisation want to work with us, on taking steps at your
        request before entering into a contract. We rely on legitimate interests to keep our website secure.
      </p>
    ),
  },
  {
    title: "Who we share it with",
    body: (
      <>
        <p>
          We share personal information only with service providers that help us run our business, under contracts
          that require them to protect it. These include our email provider, Google, which delivers and stores enquiry
          emails, and our website hosting provider.
        </p>
        <p>
          We may also disclose information where the law requires it, or to protect our rights, property or safety.
        </p>
      </>
    ),
  },
  {
    title: "International transfers",
    body: (
      <p>
        Some of our service providers may process information outside the UK. Where they do, we rely on safeguards
        recognised under UK data protection law, such as UK adequacy regulations or the International Data Transfer
        Agreement.
      </p>
    ),
  },
  {
    title: "How long we keep it",
    body: (
      <p>
        We keep enquiry correspondence for as long as needed to deal with your enquiry and any resulting relationship,
        and normally for no longer than 24 months after our last contact, unless we need to keep it longer for legal,
        accounting or contractual reasons.
      </p>
    ),
  },
  {
    title: "Cookies",
    body: (
      <p>
        This website does not use cookies for analytics, advertising or tracking. If that changes, we will update
        this policy and ask for your consent where the law requires it.
      </p>
    ),
  },
  {
    title: "Your rights",
    body: (
      <>
        <p>Under UK data protection law, you have the right to:</p>
        <ul>
          <li>access the personal information we hold about you</li>
          <li>ask us to correct or delete it</li>
          <li>object to or ask us to restrict how we use it</li>
          <li>ask us to transfer it to you or another organisation</li>
        </ul>
        <p>
          To exercise any of these rights, email <a href={`mailto:${site.email}`}>{site.email}</a>. We will respond
          within one month.
        </p>
        <p>
          If you are unhappy with how we have handled your information, you can complain to the Information
          Commissioner&rsquo;s Office at <a href="https://ico.org.uk/make-a-complaint/">ico.org.uk</a>. We would
          appreciate the chance to resolve your concern first.
        </p>
      </>
    ),
  },
  {
    title: "Changes to this policy",
    body: <p>We may update this policy from time to time. The latest version will always be on this page.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Privacy Policy", path }])} />

      <PageHero title="Privacy Policy">
        <p>Last updated {lastUpdated}.</p>
      </PageHero>

      <Section id="policy" aria-label="Privacy Policy">
        <Grid>
          <div className="col-span-4 md:col-span-10 lg:col-span-8">
            {sections.map((section) => (
              <section key={section.title} className="border-t border-rule py-10 first:border-t-0 first:pt-0">
                <h2 className="type-h3">{section.title}</h2>
                <div className="type-body prose-flow mt-5 text-ink-soft [&_a]:text-ink [&_a]:underline [&_a]:decoration-ink/30 [&_a]:underline-offset-4 [&_a:hover]:decoration-ink [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
                  {section.body}
                </div>
              </section>
            ))}
          </div>
        </Grid>
      </Section>
    </>
  );
}
