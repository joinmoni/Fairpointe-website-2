import type { Metadata } from "next";
import { contactHref } from "@/lib/site";
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Grid, Section } from "@/components/marketing/layout";
import { CtaButton } from "@/components/marketing/links";
import { CtaBand, FaqSection, PageHero, RuledList, SplitSection } from "@/components/marketing/blocks";
import { OperatingModel } from "@/components/diagrams/market-entry";

const path = "/uk-market-entry";
const description =
  "Fairpointe helps international B2B technology companies enter the UK through market intelligence, enterprise sales, public-sector procurement and implementation.";

export const metadata: Metadata = pageMetadata({
  title: "UK Market Entry for Technology Companies | Fairpointe",
  description,
  path,
});

const enquiry = contactHref("uk-market-entry");

const navigateAreas = [
  "Enterprise buyers",
  "UK public sector",
  "AWS ecosystem",
  "Microsoft ecosystem",
  "Procurement",
  "Technical implementation",
  "Local support",
];

const faqs = [
  {
    question: "Does a technology company need a UK office before working with Fairpointe?",
    answer:
      "No. The model is specifically designed to help international technology companies validate and develop the UK opportunity before building a full local team.",
  },
  {
    question: "Can Fairpointe help with UK public-sector opportunities?",
    answer:
      "Yes. Fairpointe can help identify relevant public-sector opportunities, research buyers and incumbent suppliers, understand procurement routes and support the commercial and technical process.",
  },
  {
    question: "Does Fairpointe provide technical implementation?",
    answer:
      "Yes. Fairpointe combines market development with technical delivery, including architecture, implementation and integration for technologies within our areas of expertise.",
  },
  {
    question: "Can Fairpointe work with AWS and Microsoft Azure customers?",
    answer:
      "Yes. Fairpointe works across AWS and Microsoft Azure environments and can support opportunities involving either cloud ecosystem.",
  },
];

export default function UkMarketEntryPage() {
  return (
    <>
      <JsonLd
        data={[
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
        title="Prove the UK before hiring the UK."
        actions={<CtaButton href={enquiry}>Discuss UK expansion</CtaButton>}
      >
        <p>
          Fairpointe acts as a UK commercial and technical partner for international enterprise technology companies.
        </p>
        <p>
          We help you validate demand, build pipeline, navigate procurement, win customers, deploy your technology and
          support UK customers.
        </p>
      </PageHero>

      {/* Who it is for */}
      <Section id="who-it-is-for" aria-labelledby="who-it-is-for-heading">
        <Grid className="gap-y-10">
          <h2 id="who-it-is-for-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            A UK route for international technology companies.
          </h2>
          <div className="type-body prose-flow col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <p>
              You may already have customers in the United States, Europe or another international market and believe
              the UK should be next.
            </p>
            <p className="type-lede text-ink">The challenge is deciding where to start.</p>
            <p>
              Hiring salespeople before validating the market is expensive. Lead-generation agencies rarely provide
              technical implementation. Distributors may prioritise established vendors. Public-sector procurement
              introduces another set of buying routes.
            </p>
            <p>
              Fairpointe provides a focused way to test and build the market before creating the entire UK operation
              yourself.
            </p>
          </div>
        </Grid>
      </Section>

      {/* Model */}
      <Section id="model" tone="deep" rule={false} aria-labelledby="model-heading">
        <Grid className="gap-y-6">
          <h2 id="model-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-7">
            From market intelligence to local delivery.
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
            Commercial access backed by technical delivery.
          </h2>
          <div className="type-body prose-flow col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <p className="type-lede text-ink">
              Enterprise technology is difficult to sell through market development alone.
            </p>
            <p>
              Customers want to know who will deploy the technology, how it fits their environment, how it will be
              supported and whether the supplier understands the way UK organisations buy.
            </p>
            <p>
              Fairpointe combines market development with technical capability so the UK proposition can extend from
              the first conversation through to implementation.
            </p>
          </div>
          <div className="col-span-4 mt-6 md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7">
            <h3 className="mb-5 text-[0.9375rem] font-medium text-ink-muted">Where Fairpointe helps you navigate</h3>
            <RuledList items={navigateAreas} columns={2} />
          </div>
        </Grid>
      </Section>

      {/* Public sector */}
      <SplitSection id="public-sector" tone="deep" title="Navigate UK public-sector opportunities.">
        <p>
          The UK public sector is a substantial technology buyer, but entering it requires an understanding of
          procurement notices, frameworks, incumbent suppliers, technical requirements and buying cycles.
        </p>
        <p>
          Fairpointe helps technology companies identify relevant public-sector opportunities, understand the buying
          environment and determine the appropriate route to market.
        </p>
      </SplitSection>

      <FaqSection rule={false} id="faq" title="Entering the UK technology market" faqs={faqs} />

      <CtaBand title="Is the UK your next market?" primary={{ label: "Enter the UK market", href: enquiry }}>
        Tell us about your technology, your existing customers and what you want to achieve in the UK.
      </CtaBand>
    </>
  );
}
