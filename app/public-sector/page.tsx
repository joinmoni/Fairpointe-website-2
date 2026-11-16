import type { Metadata } from "next";
import { contactHref } from "@/lib/site";
import { breadcrumbSchema, pageMetadata, serviceSchema, webPageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Grid, Section } from "@/components/marketing/layout";
import { ArrowLink, CtaButton } from "@/components/marketing/links";
import { CtaBand, PageHero } from "@/components/marketing/blocks";
import { CredentialsSection } from "@/components/marketing/credentials";
import { TwoSidedDiagram } from "@/components/diagrams/public-sector";

const path = "/public-sector";
const title = "UK Public-Sector Technology Implementation | Fairpointe";
const description =
  "Technical evaluation, systems integration and deployment support for public-sector organisations, plus opportunity research and delivery support for suppliers.";

export const metadata: Metadata = pageMetadata({ title, description, path });

const discuss = { label: "Discuss your requirement", href: contactHref("public-sector") };

const capabilities = [
  {
    title: "Cloud & infrastructure",
    body: "Architecture, migration, deployment automation and infrastructure configuration across AWS, Microsoft Azure and hybrid environments.",
  },
  {
    title: "AI & automation",
    body: "Evaluate defined use cases and integrate AI or automation tools with existing data, applications and workflows.",
  },
  {
    title: "Security & identity",
    body: "Configure access controls for users, applications and automated workloads within an agreed implementation scope.",
  },
  {
    title: "Data integration",
    body: "Connect data sources and platforms, with the access controls and operational processes the implementation requires.",
  },
  {
    title: "Software implementation",
    body: "Configure specialist software, integrate existing systems and support testing, launch and technical handover.",
  },
];

const faq = {
  question: "How does Fairpointe support public-sector technology projects?",
  answer:
    "Fairpointe supports technical evaluation, systems integration and deployment for public-sector requirements. For technology suppliers, it can also research relevant opportunities and support agreed evaluation and implementation work. Its role and deliverables are defined for each engagement.",
};

export default function PublicSectorPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path }),
          serviceSchema({
            name: "Public-sector technology implementation",
            serviceType: "Public-sector technology evaluation and implementation",
            description,
            path,
          }),
          breadcrumbSchema([{ name: "Public Sector", path }]),
        ]}
      />

      <PageHero
        title="Technical delivery for UK public-sector requirements."
        actions={<CtaButton href={discuss.href}>{discuss.label}</CtaButton>}
      >
        <p>
          Fairpointe supports public-sector organisations implementing specialist technology and technology suppliers
          assessing and delivering public-sector opportunities.
        </p>
      </PageHero>

      {/* Capabilities */}
      <Section id="capabilities" aria-labelledby="capabilities-heading">
        <Grid className="gap-y-12">
          <div className="col-span-4 md:col-span-10 lg:col-span-4">
            <h2 id="capabilities-heading" className="type-h2">
              Implementation support across your technology environment.
            </h2>
            <div className="mt-10 border-t border-rule pt-6">
              <h3 className="type-h4">{faq.question}</h3>
              <p className="type-body mt-3 text-ink-soft">{faq.answer}</p>
            </div>
          </div>
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
            Clear support for buyers and suppliers.
          </h2>
          <div className="type-body prose-flow col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2 [&>h3]:mt-8 [&>h3+p]:mt-2">
            <p className="type-lede text-ink">
              The work depends on which side of the opportunity you are on. We agree Fairpointe&rsquo;s
              responsibilities, deliverables and delivery role before an engagement begins.
            </p>
            <h3 className="type-h4 text-ink">For public-sector organisations</h3>
            <p>
              Support for technical evaluation, implementation planning, systems integration and deployment. Tell us
              about the requirement, existing environment and procurement stage.
            </p>
            <h3 className="type-h4 text-ink">For technology suppliers</h3>
            <p>
              Research into relevant notices, buyer requirements, incumbent suppliers and procurement routes, with
              technical evaluation or implementation support agreed where appropriate.
            </p>
            <p>
              <ArrowLink href="/uk-market-entry">UK market entry for technology companies</ArrowLink>
            </p>
          </div>
          <div className="col-span-4 mt-6 md:col-span-12 md:mt-12">
            <TwoSidedDiagram />
          </div>
        </Grid>
      </Section>

      {/* Renders only once verified credentials exist in lib/proof.ts */}
      <CredentialsSection title="Procurement and credentials" />

      <CtaBand title="Discuss a public-sector technology requirement." primary={discuss}>
        Tell us whether you are buying or supplying technology, the requirement you are working on and the stage you
        have reached.
      </CtaBand>
    </>
  );
}
