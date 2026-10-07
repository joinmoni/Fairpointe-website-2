import type { Metadata } from "next";
import Link from "next/link";
import { contactHref, cta } from "@/lib/site";
import { technologies } from "@/lib/technologies";
import { pageMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Container, Grid, Section } from "@/components/marketing/layout";
import { ArrowLink, CtaButton } from "@/components/marketing/links";
import { CtaBand, SplitSection } from "@/components/marketing/blocks";
import { ControlLoop } from "@/components/diagrams/ai-security";
import { TechnologyList, TechnologyPartnershipsSection } from "@/components/marketing/technologies";

export const metadata: Metadata = pageMetadata({
  title: "Enterprise Technology Implementation and UK Market Entry | Fairpointe",
  description:
    "Fairpointe deploys and integrates OpenAI, Microsoft Copilot, Azure, AWS, Snowflake, Databricks, Anthropic and ElevenLabs technology for UK organisations, and supports UK market entry.",
  path: "/",
});

const capabilityIndex = [
  { id: "technologies", label: "Technologies we deploy" },
  { id: "capabilities", label: "Technology capabilities" },
  { id: "uk-market-entry", label: "UK Market Entry" },
];

const capabilities = [
  {
    title: "Enterprise AI & Agents",
    body: "Production deployment of enterprise AI, agentic systems and the infrastructure required to operate them securely.",
  },
  {
    title: "Cloud & Data Platforms",
    body: "Architecture, integration and deployment across modern cloud, data and AI infrastructure.",
  },
  {
    title: "Security & Identity",
    body: "Implementation of specialist security, identity and access technologies across enterprise environments.",
  },
  {
    title: "Systems Integration",
    body: "Connect new platforms with existing applications, data, APIs, identity systems and business workflows.",
  },
];

const marketEntry = [
  { title: "UK market development", body: "Identify and develop relevant UK enterprise opportunities." },
  {
    title: "Technical evaluation",
    body: "Support customer discovery, technical evaluation and proof-of-concept work.",
  },
  { title: "Deployment", body: "Provide local technical capacity for integration and production implementation." },
  {
    title: "Customer success",
    body: "Support customers after deployment and help expand successful implementations.",
  },
];

function CapabilityLabel({ index, label, inverse = false }: { index: string; label: string; inverse?: boolean }) {
  return (
    <p className="flex items-baseline gap-4 text-[1.0625rem] font-medium tracking-[-0.01em]">
      <span className={inverse ? "numeral text-accent-on-navy" : "numeral text-accent"}>{index}</span>
      <span>{label}</span>
    </p>
  );
}

export default function HomePage() {
  const implementation = { label: "Discuss an implementation", href: contactHref("technology-project") };

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Enterprise AI and technology implementation in the UK",
          serviceType: "Enterprise technology implementation",
          description: `Architecture, integration, production deployment, governance and ongoing technical support for ${technologies
            .map((t) => `${t.name} (${t.capability})`)
            .join("; ")}.`,
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
                Fairpointe helps UK organisations evaluate, integrate and deploy specialist AI, cloud and security
                technology. We also help international technology companies enter the UK, win customers and deliver
                successfully.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <CtaButton href={cta.project.href}>{cta.project.label}</CtaButton>
                <CtaButton href="/uk-market-entry" variant="secondary">
                  Enter the UK market
                </CtaButton>
              </div>
            </div>
          </Grid>
          <nav aria-label="Capabilities" className="mt-20 md:mt-28 lg:mt-32">
            <ol className="grid border-t border-ink md:grid-cols-3">
              {capabilityIndex.map((item, i) => (
                <li key={item.id} className="border-b border-rule md:border-b-0">
                  <Link
                    href={`#${item.id}`}
                    className="group flex items-baseline gap-4 py-5 text-[1.0625rem] font-medium tracking-[-0.01em] transition-colors md:py-6"
                  >
                    <span className="numeral text-[0.9375rem] text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span className="underline decoration-transparent decoration-1 underline-offset-[6px] transition-colors group-hover:decoration-ink">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
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

      {/* UK organisations */}
      <Section id="uk-organisations" aria-labelledby="uk-organisations-heading">
        <Grid className="gap-y-8">
          <h2 id="uk-organisations-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            Deploy specialist technology with confidence.
          </h2>
          <div className="type-body prose-flow col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <p className="type-lede text-ink">
              New enterprise technology often looks straightforward in a demo. Production deployment is different.
            </p>
            <p>
              Fairpointe helps organisations evaluate the right technology, integrate it with existing systems and move
              it into production. We work across the technical path from evaluation and architecture through
              integration, deployment and ongoing support.
            </p>
            <div className="pt-4">
              <ArrowLink href={cta.project.href}>{cta.project.label}</ArrowLink>
            </div>
          </div>
        </Grid>
        <div className="mt-16 md:mt-24">
          <ControlLoop />
        </div>
      </Section>

      {/* Capabilities */}
      <section aria-labelledby="capabilities-heading">
        <Container>
          <div aria-hidden className="h-px bg-rule" />
          <h2 id="capabilities-heading" className="type-h2 pt-20 md:pt-28 lg:pt-32">
            What we deploy
          </h2>

          {/* 01 Technology capabilities */}
          <article id="capabilities" aria-labelledby="capabilities-list-heading" className="pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="border-t border-ink pt-6">
              <CapabilityLabel index="01" label="Technology capabilities" />
            </div>
            <Grid className="mt-10 gap-y-12 md:mt-14">
              <div className="col-span-4 md:col-span-12 lg:col-span-5">
                <h3 id="capabilities-list-heading" className="type-h2">
                  Specialist technology, deployed into your environment.
                </h3>
                <p className="type-body mt-8 max-w-[36rem] text-ink-soft">
                  We focus on technology where deep product understanding and hands-on implementation matter, from AI
                  agents and data platforms to identity and access.
                </p>
                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
                  <ArrowLink href="/ai-security">Explore AI & Security</ArrowLink>
                  <ArrowLink href="/cloud-infrastructure">Explore Cloud & Infrastructure</ArrowLink>
                </div>
              </div>
              <ol className="col-span-4 border-t border-ink md:col-span-12 lg:col-span-6 lg:col-start-7">
                {capabilities.map((item, i) => (
                  <li key={item.title} className="grid gap-3 border-b border-rule py-8 md:grid-cols-7 md:gap-8">
                    <div className="flex items-baseline gap-5 md:col-span-3">
                      <span className="numeral text-[0.875rem] text-accent">{String(i + 1).padStart(2, "0")}</span>
                      <h4 className="type-h4 text-[1.3125rem]">{item.title}</h4>
                    </div>
                    <p className="type-body text-ink-soft md:col-span-4">{item.body}</p>
                  </li>
                ))}
              </ol>
            </Grid>
          </article>
        </Container>

        {/* 02 UK Market Entry: given full-width prominence */}
        <article
          id="uk-market-entry"
          aria-labelledby="uk-market-entry-heading"
          className="on-navy bg-navy py-20 text-on-navy md:py-28 lg:py-32"
        >
          <Container>
            <div className="border-t border-on-navy/60 pt-6">
              <CapabilityLabel index="02" label="UK Market Entry" inverse />
            </div>
            <Grid className="mt-10 gap-y-10 md:mt-14">
              <h3 id="uk-market-entry-heading" className="type-h2-lg col-span-4 md:col-span-11 lg:col-span-8">
                Enter the UK without building the full team first.
              </h3>
              <div className="type-body prose-flow col-span-4 text-on-navy-soft md:col-span-8 lg:col-span-6">
                <p>
                  Fairpointe helps international enterprise technology companies establish commercial and technical
                  delivery capacity in the UK.
                </p>
                <p>
                  We can support the path from market development and customer evaluation through technical pre-sales,
                  integration, deployment and ongoing customer support.
                </p>
              </div>
              <div className="col-span-4 md:col-span-4 md:col-start-9 lg:col-span-4 lg:col-start-9 lg:self-end">
                <CtaButton href="/uk-market-entry" variant="primary-inverse">
                  Enter the UK market
                </CtaButton>
              </div>
            </Grid>
            <ol className="mt-16 grid grid-cols-1 border-t border-rule-navy sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
              {marketEntry.map((item, i) => (
                <li
                  key={item.title}
                  className={
                    "border-b border-rule-navy py-6 lg:border-b-0 lg:pr-6" + (i > 0 ? " lg:border-l lg:pl-6" : "")
                  }
                >
                  <span className="numeral block text-[0.875rem] text-accent-on-navy">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-2 text-[1.0625rem] font-semibold tracking-[-0.015em] text-on-navy">{item.title}</h4>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-on-navy-soft sm:pr-6 lg:pr-0">{item.body}</p>
                </li>
              ))}
            </ol>
          </Container>
        </article>
      </section>

      {/* Public sector */}
      <SplitSection id="public-sector" tone="deep" title="Specialist technology for UK public services.">
        <p>
          Fairpointe combines procurement intelligence with hands-on technical delivery, helping technology companies
          and public-sector organisations move from opportunity and procurement through to working technology.
        </p>
        <div className="pt-4">
          <ArrowLink href="/public-sector">Explore Public Sector</ArrowLink>
        </div>
      </SplitSection>

      <CtaBand
        title="What are you trying to deploy?"
        primary={cta.project}
        secondary={{ label: "Enter the UK market", href: "/uk-market-entry" }}
      >
        Whether you are deploying specialist technology or bringing your technology into the UK, start with a
        conversation about the environment, the requirement and what successful deployment looks like.
      </CtaBand>
    </>
  );
}
