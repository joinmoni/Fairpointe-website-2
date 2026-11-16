import type { Metadata } from "next";
import { contactHref } from "@/lib/site";
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema, webPageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Grid, Section } from "@/components/marketing/layout";
import { ArrowLink, CtaButton } from "@/components/marketing/links";
import { CtaBand, FaqSection, PageHero, RuledList, SplitSection } from "@/components/marketing/blocks";
import { OperatingModel } from "@/components/diagrams/market-entry";

const path = "/uk-market-entry";
const title = "UK Market Entry for Technology Companies | Fairpointe";
const description =
  "UK opportunity research, technical pre-sales and customer implementation for international enterprise technology companies.";

export const metadata: Metadata = pageMetadata({ title, description, path });

const enquiry = contactHref("uk-market-entry");
const discuss = { label: "Discuss your UK expansion", href: enquiry };

const navigateAreas = [
  "Enterprise account research",
  "Public-sector opportunity research",
  "Cloud ecosystem opportunities",
  "Technical evaluations",
  "Implementation planning",
  "Customer deployment",
  "Agreed local support",
];

const faqs = [
  {
    question: "Do we need a UK office before working with Fairpointe?",
    answer:
      "No. An engagement can begin with opportunity research, support for an active customer evaluation or a defined implementation. We agree the work and responsibilities with your existing team.",
  },
  {
    question: "How does an engagement start?",
    answer:
      "We discuss your product, current customers, UK activity and immediate objective. We then propose a defined scope, deliverables and responsibilities for the work that fits your stage.",
  },
  {
    question: "Can you help with public-sector opportunities?",
    answer:
      "We can research relevant opportunities, buyers, incumbent suppliers and procurement routes. Technical evaluation, bid support and delivery work are agreed according to the opportunity. Contract awards remain the buying organisation’s decision.",
  },
  {
    question: "Can you implement our product for UK customers?",
    answer:
      "We can support implementations that fit our technical capabilities, including configuration, integration, deployment and handover. We review your product and the customer’s requirements before agreeing the scope.",
  },
];

export default function UkMarketEntryPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path }),
          serviceSchema({
            name: "UK market entry for technology companies",
            serviceType: "Market entry and business development",
            description,
            path,
          }),
          faqSchema(faqs),
          breadcrumbSchema([{ name: "UK Market Entry", path }]),
        ]}
      />

      <PageHero
        title="Prove the UK before building the UK team."
        actions={<CtaButton href={discuss.href}>{discuss.label}</CtaButton>}
      >
        <p>
          Fairpointe helps international enterprise technology companies assess UK opportunities, support customer
          evaluations and deliver implementations.
        </p>
        <p>
          Start with target-account research, an active sales opportunity or a customer deployment. We agree the
          commercial and technical work around your current stage.
        </p>
      </PageHero>

      {/* Who it is for */}
      <Section id="who-it-is-for" aria-labelledby="who-it-is-for-heading">
        <Grid className="gap-y-10">
          <h2 id="who-it-is-for-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            Start with the opportunity you need to prove.
          </h2>
          <div className="type-body prose-flow col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <p className="type-lede text-ink">
              You may need to identify suitable UK accounts, support a technical evaluation or implement your product
              for a customer already signed.
            </p>
            <p>
              Fairpointe provides UK-based commercial and technical support for the agreed work, so you can assess
              demand and delivery requirements before expanding your local team.
            </p>
          </div>
        </Grid>
      </Section>

      {/* Model */}
      <Section id="model" tone="deep" rule={false} aria-labelledby="model-heading">
        <Grid className="gap-y-6">
          <h2 id="model-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-7">
            Support from market development to customer delivery.
          </h2>
        </Grid>
        <div className="mt-14 md:mt-20">
          <OperatingModel />
        </div>
      </Section>

      {/* Why Fairpointe */}
      <Section id="why-fairpointe" rule={false} aria-labelledby="why-fairpointe-heading">
        <Grid className="gap-y-10">
          <h2 id="why-fairpointe-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            Support the sale and the implementation.
          </h2>
          <div className="type-body prose-flow col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <p className="type-lede text-ink">
              Prospective customers need to understand how your product fits their systems, how it will be evaluated
              and who will implement and support it.
            </p>
            <p>
              Fairpointe connects market development with technical delivery, helping your team progress qualified
              opportunities and deliver the work that follows.
            </p>
            <p>
              <ArrowLink href="/go-live">Enterprise customer implementation</ArrowLink>
            </p>
          </div>
          <div className="col-span-4 mt-6 md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7">
            <h3 className="mb-5 text-[0.9375rem] font-medium text-ink-muted">Where we can help</h3>
            <RuledList items={navigateAreas} columns={2} />
          </div>
        </Grid>
      </Section>

      {/* Public sector */}
      <SplitSection id="public-sector" tone="deep" title="Assess relevant UK public-sector opportunities.">
        <p>
          Fairpointe researches procurement notices, buyer requirements, incumbent suppliers and procurement routes to
          help you assess whether an opportunity fits your product and delivery capability.
        </p>
        <p>
          Where you decide to proceed, we can support agreed technical evaluation and implementation work. Any bid
          support, partner approach or delivery role is defined separately.
        </p>
        <p>
          <ArrowLink href="/public-sector">Public-sector technology implementation</ArrowLink>
        </p>
      </SplitSection>

      <FaqSection rule={false} id="faq" title="Questions about UK market entry" faqs={faqs} />

      <CtaBand title="Choose the next step for your UK expansion." primary={discuss}>
        Tell us about your product, the UK opportunities you have identified and the commercial or technical support
        you need. We&rsquo;ll assess where Fairpointe can contribute and define a practical starting scope.
      </CtaBand>
    </>
  );
}
