import type { Metadata } from "next";
import { cta } from "@/lib/site";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Grid, Section } from "@/components/marketing/layout";
import { CtaBand, PageHero, RuledList, SplitSection } from "@/components/marketing/blocks";

const path = "/about";

const title = "About Fairpointe | Enterprise Technology Implementation";
const description =
  "Fairpointe is a UK enterprise technology company combining hands-on engineering with commercial delivery: technical evaluation, integration, deployment and handover.";

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
    title: "Commercial understanding",
    body: "Connect the business objective with a clear, achievable implementation.",
  },
  {
    title: "Hands-on engineering",
    body: "Work directly on the configuration, integrations and deployment that bring the solution into use.",
  },
  {
    title: "Clear delivery ownership",
    body: "Keep responsibilities, decisions and progress visible throughout the engagement.",
  },
  {
    title: "Practical handover",
    body: "Give customer teams the documentation and knowledge to operate and maintain the result.",
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

      <PageHero title="Engineering expertise. Clear delivery ownership.">
        <p>
          Fairpointe is a UK enterprise technology company combining hands-on engineering with commercial delivery. We
          implement specialist technology for organisations and help international vendors develop and deliver UK
          opportunities.
        </p>
      </PageHero>

      <SplitSection id="approach" title="Technology has to work outside the presentation.">
        <p className="type-lede text-ink">
          The real value comes when a product fits the customer&rsquo;s environment, supports the intended workflow and
          can be operated by the team using it.
        </p>
        <p>
          Fairpointe brings those pieces together: technical evaluation, architecture, integration, deployment and
          practical handover.
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

      <CtaBand title="Put your next technology decision into action." primary={{ label: "Discuss your project", href: cta.speak.href }}>
        Talk to Fairpointe about the system you want to implement, the customer you want to launch or the UK opportunity
        you want to develop.
      </CtaBand>
    </>
  );
}
