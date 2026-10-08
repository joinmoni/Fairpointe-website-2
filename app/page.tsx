import type { Metadata } from "next";
import { contactHref, cta } from "@/lib/site";
import { technologies } from "@/lib/technologies";
import { pageMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Container, Grid, Section } from "@/components/marketing/layout";
import { CtaButton } from "@/components/marketing/links";
import { ControlLoop } from "@/components/diagrams/ai-security";
import { TechnologyList, TechnologyPartnershipsSection } from "@/components/marketing/technologies";

export const metadata: Metadata = pageMetadata({
  title: "Enterprise AI and Technology Implementation UK | Fairpointe",
  description:
    "Fairpointe deploys AI, cloud, data and security technology into production for UK organisations, including OpenAI, Microsoft Copilot, Azure, AWS, Snowflake, Databricks and Anthropic.",
  path: "/",
});

const capabilities = [
  { title: "Enterprise AI & Agents", body: "Deploy AI applications and agents into real enterprise workflows." },
  {
    title: "Cloud & Data Platforms",
    body: "Build the infrastructure, data and integrations production systems depend on.",
  },
  {
    title: "Security & Identity",
    body: "Secure users, workloads, applications and AI systems across the environment.",
  },
  {
    title: "Systems Integration",
    body: "Connect specialist technology with the systems your organisation already runs.",
  },
];

export default function HomePage() {
  const implementation = { label: "Discuss an implementation", href: contactHref("technology-project") };

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Enterprise AI and technology implementation in the UK",
          serviceType: "Enterprise technology implementation",
          description: `Architecture, integration, production deployment, governance and ongoing technical support for ${technologies
            .map((t) => t.name)
            .join(", ")}.`,
          path: "/",
        })}
      />

      {/* Hero */}
      <section aria-labelledby="hero-heading" className="pt-16 md:pt-28 lg:pt-36">
        <Container>
          <h1 id="hero-heading" className="type-display motion-safe:animate-rise">
            Enterprise technology, <br className="hidden md:block" />
            deployed in the UK.
          </h1>
          <Grid className="mt-10 md:mt-14">
            <div
              className="col-span-4 md:col-span-8 lg:col-span-6 motion-safe:animate-rise"
              style={{ animationDelay: "90ms" }}
            >
              <p className="type-lede text-ink-soft">
                Fairpointe helps organisations deploy AI, cloud, data and security technology into production.
              </p>
              <div className="mt-10">
                <CtaButton href={cta.project.href}>{cta.project.label}</CtaButton>
              </div>
            </div>
          </Grid>
        </Container>
      </section>

      {/* Technologies */}
      <Section id="technologies" aria-labelledby="technologies-heading">
        <Grid className="gap-y-8">
          <h2 id="technologies-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            Technologies we deploy and integrate
          </h2>
          <p className="type-body col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            From enterprise AI and agents to the cloud, data and security infrastructure they depend on, Fairpointe helps
            UK organisations move specialist technology from evaluation into production.
          </p>
        </Grid>
        <TechnologyList className="mt-14 md:mt-20" />
        <Grid className="mt-12 gap-y-6 md:mt-16">
          <h3 className="type-h3 col-span-4 md:col-span-10 lg:col-span-5">Already selected your technology?</h3>
          <div className="col-span-4 md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7">
            <p className="type-body text-ink-soft">
              Fairpointe can help with architecture, integration, production deployment, governance and ongoing
              technical support.
            </p>
            <div className="mt-8">
              <CtaButton href={implementation.href}>{implementation.label}</CtaButton>
            </div>
          </div>
        </Grid>
      </Section>

      <TechnologyPartnershipsSection />

      {/* UK organisations and capabilities */}
      <Section id="uk-organisations" aria-labelledby="uk-organisations-heading">
        <Grid className="gap-y-10">
          <h2 id="uk-organisations-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            Deploy specialist technology with confidence
          </h2>
          <div className="col-span-4 md:col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <p className="type-body text-ink-soft">
              Selecting the technology is only the start. Fairpointe helps your team integrate it with existing systems,
              move it into production and operate it reliably.
            </p>
            <ol id="capabilities" aria-label="Capabilities" className="mt-12 border-t border-ink">
              {capabilities.map((item, i) => (
                <li key={item.title} className="grid gap-3 border-b border-rule py-7 md:grid-cols-7 md:gap-8">
                  <div className="flex items-baseline gap-5 md:col-span-3">
                    <span className="numeral text-[0.875rem] text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="type-h4 text-[1.3125rem]">{item.title}</h3>
                  </div>
                  <p className="type-body text-ink-soft md:col-span-4">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Grid>
      </Section>

      {/* Delivery lifecycle */}
      <Section id="lifecycle" tone="deep" rule={false} aria-labelledby="lifecycle-heading">
        <h2 id="lifecycle-heading" className="type-h2 max-w-[22ch]">
          From evaluation to production
        </h2>
        <div className="mt-14 md:mt-20">
          <ControlLoop />
        </div>
      </Section>

      {/* International technology companies */}
      <section
        id="uk-market-entry"
        aria-labelledby="uk-market-entry-heading"
        className="on-navy bg-navy py-20 text-on-navy md:py-28 lg:py-32"
      >
        <Container>
          <div className="border-t border-on-navy/60 pt-6">
            <p className="text-[1.0625rem] font-medium tracking-[-0.01em]">For technology companies</p>
          </div>
          <Grid className="mt-10 gap-y-10 md:mt-14">
            <h2 id="uk-market-entry-heading" className="type-h2-lg col-span-4 md:col-span-11 lg:col-span-8">
              Enter the UK without building the full team first.
            </h2>
            <div className="type-body prose-flow col-span-4 text-on-navy-soft md:col-span-8 lg:col-span-6">
              <p className="text-on-navy">
                Fairpointe helps international technology companies win and deliver UK opportunities by providing local
                commercial and technical capacity.
              </p>
              <p>
                From customer discovery and technical evaluation through implementation and ongoing support, we can
                work alongside your existing team as you build the UK market.
              </p>
            </div>
            <div className="col-span-4 md:col-span-4 md:col-start-9 lg:col-span-4 lg:col-start-9 lg:self-end">
              <CtaButton href="/uk-market-entry" variant="primary-inverse">
                Enter the UK market
              </CtaButton>
            </div>
          </Grid>
        </Container>
      </section>
    </>
  );
}
