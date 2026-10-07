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
    "Fairpointe is a UK enterprise technology company bringing specialist AI, cloud and security technology into real customer environments, and supporting UK market entry.",
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

const principles = [
  {
    title: "Commercial and technical",
    body: "We understand that successful technology adoption requires both a strong commercial case and successful technical delivery.",
  },
  {
    title: "Built for emerging technology",
    body: "We focus on specialist technologies where deep product understanding and hands-on implementation matter.",
  },
  {
    title: "Cloud agnostic",
    body: "We work across AWS, Microsoft Azure and hybrid environments based on the customer’s existing technology estate.",
  },
  {
    title: "UK focused",
    body: "We provide international technology companies with local knowledge, customer access and technical delivery capability.",
  },
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
            jobTitle: "Founder & Technology Lead",
            worksFor: { "@id": organizationId },
          },
          breadcrumbSchema([{ name: "About", path }]),
        ]}
      />

      <PageHero title="Built by operators.">
        <p>
          Fairpointe is a UK enterprise technology company focused on bringing specialist technology into real customer
          environments.
        </p>
        <p>
          We work with organisations adopting emerging AI, cloud and security technology, and with international
          technology companies expanding into the UK.
        </p>
        <p>
          Our model combines commercial execution with hands-on technical delivery. That means we can support the
          journey from identifying an opportunity and evaluating the technology through to integration, deployment and
          ongoing support.
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
        <div className="border-t border-rule">
          {principles.map((principle) => (
            <article key={principle.title} className="grid gap-3 border-b border-rule py-8">
              <h3 className="type-h4">{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </SplitSection>

      <Section id="founder" tone="deep" aria-labelledby="founder-heading">
        <Grid className="gap-y-12">
          <h2 id="founder-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            Leadership
          </h2>
          <div className="col-span-4 md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <div className="border-t border-ink pt-6">
              <h3 className="type-h3">Adebola Adeniran</h3>
              <p className="mt-2 text-[1.0625rem] font-medium text-ink-muted">Founder &amp; Technology Lead</p>
            </div>
            <div className="type-body prose-flow mt-8 text-ink-soft">
              <p>
                Adebola is a technology operator with experience building and scaling software, cloud infrastructure and
                financial technology products across the UK and international markets.
              </p>
              <p>
                At Fairpointe, he leads technology strategy and the development of specialist enterprise implementation
                capabilities.
              </p>
            </div>
            <h4 className="mt-12 mb-5 text-[0.9375rem] font-medium text-ink-muted">Experience</h4>
            <RuledList items={experience} columns={2} />
          </div>
        </Grid>
      </Section>

      <CtaBand title="Work with Fairpointe." primary={cta.speak}>
        Talk to us about the technology you want to deploy or your plans to enter the UK market.
      </CtaBand>
    </>
  );
}
