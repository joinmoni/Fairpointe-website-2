import type { Metadata } from "next";
import { cta } from "@/lib/site";
import { breadcrumbSchema, organizationId, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Grid, Section } from "@/components/marketing/layout";
import { CtaBand, PageHero, RuledList, SplitSection } from "@/components/marketing/blocks";

const path = "/about";

export const metadata: Metadata = pageMetadata({
  title: "About Fairpointe | UK Technology Company",
  description:
    "Fairpointe is a UK technology company working across enterprise technology implementation, AI, security, cloud infrastructure and UK market entry.",
  path,
});

const experience = [
  "CTO and engineering leadership",
  "Production financial infrastructure",
  "Cloud systems",
  "AI and software products",
  "Enterprise B2B technology",
  "UK and international operations",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Adebola Adeniran",
            jobTitle: "Founder",
            worksFor: { "@id": organizationId },
          },
          breadcrumbSchema([{ name: "About", path }]),
        ]}
      />

      <PageHero title="Built by operators.">
        <p>
          Fairpointe is a UK technology company working at the intersection of enterprise technology, implementation
          and market access.
        </p>
        <p>
          We work with organisations adopting emerging technology and with technology companies entering the UK
          market.
        </p>
      </PageHero>

      <SplitSection id="approach" title="Technology has to work outside the presentation.">
        <p className="type-lede text-ink">
          Our approach comes from building and operating technology in production environments.
        </p>
        <p>
          That means understanding the architecture, implementation, commercial constraints and operational reality
          around a technology decision, not simply recommending software and leaving the customer to make it work.
        </p>
      </SplitSection>

      <Section id="founder" tone="deep" aria-labelledby="founder-heading">
        <Grid className="gap-y-12">
          <h2 id="founder-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            Led by technical operators.
          </h2>
          <div className="col-span-4 md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <div className="border-t border-ink pt-6">
              <h3 className="type-h3">Adebola Adeniran</h3>
              <p className="mt-2 text-[1.0625rem] font-medium text-ink-muted">Founder</p>
            </div>
            <div className="type-body prose-flow mt-8 text-ink-soft">
              <p>
                Fairpointe is led by Adebola Adeniran, a technology executive and operator with experience building and
                leading production software, financial infrastructure, cloud systems and enterprise technology
                products.
              </p>
              <p>
                His work spans engineering leadership, cloud infrastructure, financial technology, AI and B2B software
                across the UK and international markets.
              </p>
            </div>
            <h4 className="mt-12 mb-5 text-[0.9375rem] font-medium text-ink-muted">Experience</h4>
            <RuledList items={experience} columns={2} />
          </div>
        </Grid>
      </Section>

      <CtaBand title="Work with Fairpointe." primary={cta.speak}>
        Talk to us about a technology project or your plans to enter the UK market.
      </CtaBand>
    </>
  );
}
