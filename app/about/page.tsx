import type { Metadata } from "next";
import { cta } from "@/lib/site";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Grid, Section } from "@/components/marketing/layout";
import { CtaBand, PageHero, RuledList, SplitSection } from "@/components/marketing/blocks";

const path = "/about";

const title = "About Fairpointe | Enterprise Technology Implementation";
const description =
  "Fairpointe combines technical evaluation, enterprise integration and production deployment with UK commercial and customer delivery support.";

export const metadata: Metadata = pageMetadata({ title, description, path });

const experience = [
  "Engineering and technical leadership",
  "Enterprise software integrations",
  "Production financial infrastructure",
  "Cloud infrastructure and deployment",
  "Customer-facing technical delivery",
  "UK and international operations",
];

const principles = [
  {
    title: "Commercial and technical",
    body: "Connect the business requirement with the engineering work needed to deliver it.",
  },
  {
    title: "Hands-on delivery",
    body: "Work through configuration, integration, testing and launch alongside the people responsible for the product and its use.",
  },
  {
    title: "Your existing environment",
    body: "Design the implementation around your applications, data, identity and cloud infrastructure.",
  },
  {
    title: "UK delivery capability",
    body: "Support UK implementations and provide international vendors with agreed local commercial and technical capacity.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ type: "AboutPage", name: title, description, path }),
          breadcrumbSchema([{ name: "About", path }]),
        ]}
      />

      <PageHero title="Built around implementation.">
        <p>
          Fairpointe is a UK enterprise technology company. We help organisations implement specialist technology and
          help international vendors develop and deliver UK opportunities.
        </p>
        <p>
          Our work combines technical evaluation, systems integration, production deployment and the commercial
          coordination needed to move an implementation forward.
        </p>
      </PageHero>

      <SplitSection id="approach" title="Technology has to work outside the presentation.">
        <p className="type-lede text-ink">
          A successful implementation needs more than a product demonstration. It needs a clear use case, access to the
          right systems, agreed responsibilities and a team prepared to operate it.
        </p>
        <p>
          Fairpointe works alongside customer and vendor teams to define those requirements and deliver the agreed
          implementation.
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

      <Section id="experience" tone="deep" aria-labelledby="experience-heading">
        <Grid className="gap-y-12">
          <h2 id="experience-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            Relevant experience
          </h2>
          <div className="col-span-4 md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <div className="type-body border-t border-ink pt-6 text-ink-soft">
              <p>
                Fairpointe&rsquo;s approach draws on experience in engineering leadership, enterprise integrations,
                cloud infrastructure and production financial systems.
              </p>
            </div>
            <RuledList items={experience} columns={2} className="mt-12" />
          </div>
        </Grid>
      </Section>

      <CtaBand title="Discuss the work you need to deliver." primary={{ label: "Discuss your project", href: cta.speak.href }}>
        Talk to us about an implementation, a customer deployment or a UK opportunity that needs commercial and
        technical support.
      </CtaBand>
    </>
  );
}
