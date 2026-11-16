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
  "UK market entry for international enterprise technology companies: market development, technical pre-sales and customer implementation, from first opportunity to customer launch.";

export const metadata: Metadata = pageMetadata({ title, description, path });

const enquiry = contactHref("uk-market-entry");
const discuss = { label: "Explore your UK opportunity", href: enquiry };

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
        title="Build UK momentum with commercial and technical delivery."
        actions={<CtaButton href={discuss.href}>{discuss.label}</CtaButton>}
      >
        <p>
          Fairpointe helps international enterprise technology companies develop UK opportunities and deliver for UK
          customers. Combine local market development, technical pre-sales and implementation expertise around your
          next stage of growth.
        </p>
      </PageHero>

      {/* Who it is for */}
      <Section id="who-it-is-for" aria-labelledby="who-it-is-for-heading">
        <Grid className="gap-y-10">
          <h2 id="who-it-is-for-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            Prove the UK before building the UK team.
          </h2>
          <div className="type-body prose-flow col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <p className="type-lede text-ink">
              Start with the opportunity in front of you: a target market to assess, a customer evaluation to progress
              or an implementation to deliver. Fairpointe provides the commercial and technical capacity to move that
              work forward alongside your existing team.
            </p>
          </div>
        </Grid>
      </Section>

      {/* Model */}
      <Section id="model" tone="deep" rule={false} aria-labelledby="model-heading">
        <Grid className="gap-y-6">
          <h2 id="model-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-7">
            From first opportunity to customer launch.
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
            Give UK customers confidence from evaluation to implementation.
          </h2>
          <div className="type-body prose-flow col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <p className="type-lede text-ink">
              Show customers how your product fits their environment, how it will be deployed and who will guide the
              implementation. Fairpointe brings commercial development and technical delivery into the same customer
              journey.
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

      <CtaBand title="Take the next step in your UK expansion." primary={discuss}>
        Tell us about your product, current UK activity and growth priorities. We&rsquo;ll identify where local
        commercial and technical delivery can move your plans forward.
      </CtaBand>
    </>
  );
}
