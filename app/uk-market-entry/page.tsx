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
  "UK market entry for international technology companies: market development, technical pre-sales, proof of concept, deployment and local customer support.";

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
      "No. The model is specifically designed to help international technology companies prove the UK opportunity, win customers and deliver successfully before building a full local team.",
  },
  {
    question: "Can Fairpointe help with UK public-sector opportunities?",
    answer:
      "Yes. Fairpointe can help identify relevant public-sector opportunities, research buyers and incumbent suppliers, understand procurement routes, technical requirements and buying cycles, and support the commercial and technical process. Contract awards remain the decision of the buying organisation.",
  },
  {
    question: "Does Fairpointe provide technical implementation?",
    answer:
      "Yes. Fairpointe combines UK market development with technical delivery, including technical pre-sales, proof of concept, deployment, integration, customer engineering and post-go-live support for technologies within our areas of expertise.",
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
        title="Prove the UK before building the UK team."
        actions={<CtaButton href={enquiry}>Enter the UK market</CtaButton>}
      >
        <p>
          Fairpointe helps international enterprise technology companies enter the UK with local commercial and
          technical capability.
        </p>
        <p>
          We help you identify opportunities, engage customers, support technical evaluations, deploy your product into
          customer environments and support customers after go-live.
        </p>
      </PageHero>

      {/* Who it is for */}
      <Section id="who-it-is-for" aria-labelledby="who-it-is-for-heading">
        <Grid className="gap-y-10">
          <h2 id="who-it-is-for-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            Enter the UK without building everything from day one.
          </h2>
          <div className="type-body prose-flow col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <p className="type-lede text-ink">
              Expanding into the UK can mean hiring salespeople, solutions engineers, implementation engineers and
              customer success teams before the market has been proven.
            </p>
            <p>
              Fairpointe provides local commercial and technical capability so you can test demand, win customers and
              deliver successfully before making that investment.
            </p>
          </div>
        </Grid>
      </Section>

      {/* Model */}
      <Section id="model" tone="deep" rule={false} aria-labelledby="model-heading">
        <Grid className="gap-y-6">
          <h2 id="model-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-7">
            From first opportunity to ongoing customer support.
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
              Customers want to know how the technology fits their environment, who will support the evaluation, who
              can deploy it and what happens after go-live.
            </p>
            <p>
              Fairpointe combines UK market development with technical delivery so your UK proposition can extend from
              the first opportunity through proof of concept, implementation and ongoing customer support.
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
          Fairpointe helps technology companies identify relevant public-sector opportunities, understand the buyers,
          incumbent suppliers, procurement routes, technical requirements and buying cycles, and determine the
          appropriate route to market.
        </p>
        <p>
          Where an opportunity progresses, we can support the technical evaluation, deployment and support that follow.
        </p>
      </SplitSection>

      <FaqSection rule={false} id="faq" title="Entering the UK technology market" faqs={faqs} />

      <CtaBand title="Your UK commercial and technical partner." primary={{ label: "Enter the UK market", href: enquiry }}>
        Fairpointe is designed for enterprise technology companies that have proven technology and strong customer
        outcomes but do not yet need a full UK organisation. Whether the opportunity comes directly, through a cloud
        marketplace, through a technology partner or through public-sector procurement, we can help turn UK demand into
        successful deployments.
      </CtaBand>
    </>
  );
}
