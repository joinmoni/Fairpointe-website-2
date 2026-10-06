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
  "Fairpointe supports UK public-sector organisations across cloud infrastructure, AI, automation, cybersecurity, data and software implementation.";

export const metadata: Metadata = pageMetadata({
  title: "UK Public Sector Technology & Cloud Services | Fairpointe",
  description,
  path,
});

const capabilities = [
  {
    title: "Cloud & infrastructure",
    body: "Architecture, migration, platform engineering and infrastructure across AWS and Microsoft Azure.",
  },
  {
    title: "AI & automation",
    body: "Practical implementation of AI and automation where it can improve services, operations and internal workflows.",
  },
  {
    title: "Security",
    body: "Security across cloud infrastructure, identities, machine access and emerging AI environments.",
  },
  {
    title: "Data",
    body: "Infrastructure and software required to make organisational data accessible, useful and secure.",
  },
  {
    title: "Software implementation",
    body: "Technical integration and implementation of specialist software within existing organisational environments.",
  },
];

export default function PublicSectorPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Technology delivery for UK public services",
            serviceType: "Public-sector technology implementation",
            description,
            path,
          }),
          breadcrumbSchema([{ name: "Public Sector", path }]),
        ]}
      />

      <PageHero
        title="Technology delivery for UK public services."
        actions={<CtaButton href={contactHref("public-sector")}>Discuss a requirement</CtaButton>}
      >
        <p>
          Fairpointe helps public-sector organisations evaluate, implement and operate modern technology across cloud,
          security, AI, automation, data and software.
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
            Bringing specialist technology into the UK public sector.
          </h2>
          <div className="type-body prose-flow col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <p>
              Fairpointe also works with international technology companies seeking to understand and serve UK
              public-sector organisations.
            </p>
            <p>
              This gives us a perspective across both sides of technology adoption: what suppliers can provide and what
              buyers need to procure, implement and operate successfully.
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
