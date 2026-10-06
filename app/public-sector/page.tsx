import type { Metadata } from "next";
import { contactHref, cta } from "@/lib/site";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Grid, Section } from "@/components/marketing/layout";
import { CtaButton } from "@/components/marketing/links";
import { CtaBand, PageHero } from "@/components/marketing/blocks";
import { CredentialsSection } from "@/components/marketing/credentials";
import { TwoSidedDiagram } from "@/components/diagrams/public-sector";

const path = "/public-sector";
const description =
  "Fairpointe helps technology companies and UK public-sector organisations move from procurement opportunity through technical evaluation, integration and deployment.";

export const metadata: Metadata = pageMetadata({
  title: "Specialist Technology for the UK Public Sector | Fairpointe",
  description,
  path,
});

const capabilities = [
  {
    title: "Cloud & infrastructure",
    body: "Architecture, migration, platform engineering and the infrastructure required to deploy specialist technology across AWS, Microsoft Azure and hybrid environments.",
  },
  {
    title: "AI & automation",
    body: "Evaluation and deployment of AI and automation technology where it can improve services, operations and internal workflows.",
  },
  {
    title: "Security",
    body: "Deployment of security technology across cloud infrastructure, identities, machine access and emerging AI environments.",
  },
  {
    title: "Data",
    body: "Integration of the data platforms and software required to make organisational data accessible, useful and secure.",
  },
  {
    title: "Software implementation",
    body: "Technical evaluation, integration and implementation of specialist software within existing organisational environments.",
  },
];

export default function PublicSectorPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Specialist technology for the UK public sector",
            serviceType: "Public-sector technology evaluation and deployment",
            description,
            path,
          }),
          breadcrumbSchema([{ name: "Public Sector", path }]),
        ]}
      />

      <PageHero
        title="Specialist technology for the UK public sector."
        actions={<CtaButton href={contactHref("public-sector")}>Discuss a requirement</CtaButton>}
      >
        <p>
          Fairpointe helps technology companies and public-sector organisations navigate the path from opportunity and
          procurement through to technical delivery.
        </p>
      </PageHero>

      {/* Capabilities */}
      <Section id="capabilities" aria-labelledby="capabilities-heading">
        <Grid className="gap-y-12">
          <h2 id="capabilities-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-4">
            Specialist technology capability.
          </h2>
          <ol className="col-span-4 border-t border-ink md:col-span-12 lg:col-span-7 lg:col-start-6">
            {capabilities.map((item, i) => (
              <li key={item.title} className="grid gap-3 border-b border-rule py-8 md:grid-cols-7 md:gap-8">
                <div className="flex items-baseline gap-5 md:col-span-3">
                  <span className="numeral text-[0.875rem] text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="type-h4 text-[1.3125rem]">{item.title}</h3>
                </div>
                <p className="type-body text-ink-soft md:col-span-4">{item.body}</p>
              </li>
            ))}
          </ol>
        </Grid>
      </Section>

      {/* Technology suppliers */}
      <Section id="technology-suppliers" tone="deep" aria-labelledby="technology-suppliers-heading">
        <Grid className="gap-y-10">
          <h2 id="technology-suppliers-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            From procurement opportunity to working technology.
          </h2>
          <div className="type-body prose-flow col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <p className="type-lede text-ink">
              Winning a public-sector opportunity is only part of the challenge. Technology still needs to meet the
              organisation&rsquo;s requirements, integrate with existing environments and be deployed successfully.
            </p>
            <p>
              Fairpointe combines procurement intelligence with hands-on technical delivery to help specialist technology
              reach UK public-sector organisations.
            </p>
            <p>
              Working with both technology suppliers and public-sector organisations gives us a perspective across both
              sides of technology adoption: what suppliers can provide and what buyers need to procure, deploy and
              operate successfully.
            </p>
          </div>
          <div className="col-span-4 mt-6 md:col-span-12 md:mt-12">
            <TwoSidedDiagram />
          </div>
        </Grid>
      </Section>

      {/* Renders only once verified credentials exist in lib/proof.ts */}
      <CredentialsSection title="Procurement and credentials" />

      <CtaBand title="Discuss a public-sector technology requirement." primary={{ label: cta.speak.label, href: contactHref("public-sector") }}>
        Tell us about the organisation, requirement and outcome you are working towards.
      </CtaBand>
    </>
  );
}
