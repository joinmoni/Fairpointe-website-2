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
  "Public-sector technology implementation: technical evaluation, integration and deployment for UK public-sector requirements, plus opportunity research and technical delivery for suppliers.";

export const metadata: Metadata = pageMetadata({ title, description, path });

const discuss = { label: "Discuss your public-sector project", href: contactHref("public-sector") };

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
        title="Put technology to work for public services."
        actions={<CtaButton href={discuss.href}>{discuss.label}</CtaButton>}
      >
        <p>
          Fairpointe provides technical evaluation, integration and implementation for UK public-sector requirements. We
          also work with technology suppliers to assess opportunities and deliver the technical work behind them.
        </p>
      </PageHero>

      {/* Capabilities */}
      <Section id="capabilities" aria-labelledby="capabilities-heading">
        <Grid className="gap-y-12">
          <div className="col-span-4 md:col-span-10 lg:col-span-4">
            <h2 id="capabilities-heading" className="type-h2">
              Practical delivery across cloud, AI, security and data.
            </h2>
            <p className="type-body mt-8 text-ink-soft">
              Connect specialist technology with existing systems and give teams a clear path through evaluation,
              implementation and handover.
            </p>
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
            The right expertise for your side of the project.
          </h2>
          <div className="type-body prose-flow col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2 [&>h3]:mt-8 [&>h3+p]:mt-2">
            <p className="type-lede text-ink">
              The work depends on which side of the opportunity you are on. We agree Fairpointe&rsquo;s
              responsibilities, deliverables and delivery role before an engagement begins.
            </p>
            <h3 className="type-h4 text-ink">For public-sector organisations</h3>
            <p>
              Bring your requirements, existing environment and delivery priorities. Fairpointe helps evaluate the
              technology, plan the implementation and connect it with the systems your teams use.
            </p>
            <h3 className="type-h4 text-ink">For technology suppliers</h3>
            <p>
              Build your approach around relevant opportunities and clear buyer requirements. Fairpointe combines
              opportunity research with technical evaluation and implementation support.
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

      <CtaBand title="Move your public-sector technology project forward." primary={discuss}>
        Tell us what you are buying or supplying, the stage you have reached and the technical work ahead.
      </CtaBand>
    </>
  );
}
