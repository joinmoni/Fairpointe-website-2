import type { Metadata } from "next";
import Link from "next/link";
import { cta } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { Container, Grid, Section } from "@/components/marketing/layout";
import { ArrowLink, CtaButton } from "@/components/marketing/links";
import { CtaBand, RuledList, SplitSection } from "@/components/marketing/blocks";
import { MultiCloudStack } from "@/components/diagrams/cloud";
import { MarketEntrySequence } from "@/components/diagrams/market-entry";

export const metadata: Metadata = pageMetadata({
  title: "Fairpointe | Enterprise Technology and UK Market Entry",
  description:
    "Fairpointe helps organisations adopt specialist AI, security and cloud technology, and helps international technology companies enter the UK market.",
  path: "/",
});

const capabilityIndex = [
  { id: "ai-security", label: "AI & Security" },
  { id: "cloud-infrastructure", label: "Cloud & Infrastructure" },
  { id: "uk-market-entry", label: "UK Market Entry" },
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
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="pt-16 md:pt-28 lg:pt-36">
        <Container>
          <h1 id="hero-heading" className="type-display motion-safe:animate-rise">
            Enterprise technology, <br className="hidden md:block" />
            delivered in the UK.
          </h1>
          <Grid className="mt-10 md:mt-14">
            <div
              className="col-span-4 md:col-span-8 lg:col-span-6 motion-safe:animate-rise"
              style={{ animationDelay: "90ms" }}
            >
              <p className="type-lede text-ink-soft">
                Fairpointe helps organisations adopt specialist cloud, security and AI technology, and helps
                international technology companies enter the UK market.
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

      {/* Introduction */}
      <SplitSection id="introduction" title="Technology is changing faster than most organisations can adopt it.">
        <p className="type-lede text-ink">
          Fairpointe works at the point where emerging technology meets real-world implementation.
        </p>
        <p>
          We help organisations evaluate, deploy and operate specialist technology across AI, security and cloud
          infrastructure.
        </p>
        <p>
          For international technology companies, we provide a route into the UK market, combining market
          intelligence, enterprise sales, public-sector procurement and local technical delivery.
        </p>
      </SplitSection>

      {/* Capabilities */}
      <section aria-labelledby="capabilities-heading">
        <Container>
          <div aria-hidden className="h-px bg-rule" />
          <h2 id="capabilities-heading" className="type-h2 pt-20 md:pt-28 lg:pt-32">
            Where we work
          </h2>

          {/* 01 AI & Security */}
          <article id="ai-security" aria-labelledby="ai-security-heading" className="pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="border-t border-ink pt-6">
              <CapabilityLabel index="01" label="AI & Security" />
            </div>
            <Grid className="mt-10 gap-y-12 md:mt-14">
              <div className="col-span-4 md:col-span-12 lg:col-span-6">
                <h3 id="ai-security-heading" className="type-h2">
                  Secure the systems behind modern AI.
                </h3>
                <div className="type-body prose-flow mt-8 max-w-[36rem] text-ink-soft">
                  <p>
                    AI agents, automated workloads and cloud applications increasingly operate using machine identities,
                    service accounts, API keys and tokens.
                  </p>
                  <p>
                    Fairpointe helps organisations understand these non-human identities, what they can access and how
                    they should be controlled.
                  </p>
                </div>
                <ArrowLink href="/ai-security" className="mt-10">
                  Explore AI & Security
                </ArrowLink>
              </div>
              <div className="col-span-4 md:col-span-8 lg:col-span-5 lg:col-start-8">
                <h4 className="sr-only">AI & Security capabilities</h4>
                <RuledList
                  numbered
                  items={[
                    "AI agent security",
                    "Non-human identity security",
                    "Machine identity discovery",
                    "Access governance",
                    "Secrets and credential security",
                    "AI governance",
                  ]}
                />
              </div>
            </Grid>
          </article>

          {/* 02 Cloud & Infrastructure */}
          <article
            id="cloud-infrastructure"
            aria-labelledby="cloud-infrastructure-heading"
            className="pb-20 md:pb-28 lg:pb-32"
          >
            <div className="border-t border-ink pt-6">
              <CapabilityLabel index="02" label="Cloud & Infrastructure" />
            </div>
            <Grid className="mt-10 gap-y-12 md:mt-14">
              <div className="col-span-4 md:col-span-12 lg:col-span-6">
                <h3 id="cloud-infrastructure-heading" className="type-h2">
                  Cloud infrastructure built for critical workloads.
                </h3>
                <div className="type-body prose-flow mt-8 max-w-[36rem] text-ink-soft">
                  <p>
                    Fairpointe helps organisations design, implement and improve cloud infrastructure across Amazon Web
                    Services and Microsoft Azure.
                  </p>
                  <p>
                    We work across architecture, cloud security, platform engineering, automation, migration and the
                    infrastructure required to operate modern applications and AI systems reliably.
                  </p>
                </div>
                <ArrowLink href="/cloud-infrastructure" className="mt-10">
                  Explore Cloud & Infrastructure
                </ArrowLink>
              </div>
              <div className="col-span-4 md:col-span-8 lg:col-span-5 lg:col-start-8">
                <h4 className="sr-only">Cloud & Infrastructure capabilities</h4>
                <MultiCloudStack />
              </div>
            </Grid>
          </article>
        </Container>

        {/* 03 UK Market Entry: given full-width prominence */}
        <article
          id="uk-market-entry"
          aria-labelledby="uk-market-entry-heading"
          className="on-navy bg-navy py-20 text-on-navy md:py-28 lg:py-32"
        >
          <Container>
            <div className="border-t border-on-navy/60 pt-6">
              <CapabilityLabel index="03" label="UK Market Entry" inverse />
            </div>
            <Grid className="mt-10 gap-y-10 md:mt-14">
              <h3 id="uk-market-entry-heading" className="type-h2-lg col-span-4 md:col-span-11 lg:col-span-8">
                Build your UK business without building a UK team first.
              </h3>
              <div className="type-body prose-flow col-span-4 text-on-navy-soft md:col-span-8 lg:col-span-6">
                <p>Fairpointe helps international enterprise technology companies enter and grow in the UK.</p>
                <p>
                  We identify where demand exists, build enterprise and public-sector opportunities, support technical
                  sales, navigate procurement, implement technology and provide local support after the sale.
                </p>
              </div>
              <div className="col-span-4 md:col-span-4 md:col-start-9 lg:col-span-4 lg:col-start-9 lg:self-end">
                <CtaButton href="/uk-market-entry" variant="primary-inverse">
                  Enter the UK market
                </CtaButton>
              </div>
            </Grid>
            <div className="mt-16 md:mt-24">
              <h4 className="mb-5 text-[0.9375rem] font-medium text-on-navy-muted">
                How a UK market entry engagement runs
              </h4>
              <MarketEntrySequence />
            </div>
          </Container>
        </article>
      </section>

      {/* Technology companies */}
      <Section id="technology-companies" aria-labelledby="technology-companies-heading" rule={false}>
        <Grid className="gap-y-10">
          <h2 id="technology-companies-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            A commercial and technical partner for the UK.
          </h2>
          <div className="type-body prose-flow col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <p className="type-lede text-ink">Entering the UK requires more than generating leads.</p>
            <p>
              Enterprise customers need technical confidence. Public-sector buyers have specific procurement routes.
              Cloud marketplaces and channel partners influence how technology is purchased. Customers also need
              someone capable of implementing what has been sold.
            </p>
            <p>Fairpointe brings these functions together.</p>
            <p>
              From the first market assessment through to implementation and customer expansion, we help technology
              companies establish a credible UK presence before committing to a full local team.
            </p>
            <div className="pt-4">
              <ArrowLink href="/uk-market-entry">See how UK Market Entry works</ArrowLink>
            </div>
          </div>
        </Grid>
      </Section>

      {/* Public sector */}
      <SplitSection id="public-sector" tone="deep" title="Technology delivery for UK public services.">
        <p>
          Fairpointe helps public-sector organisations evaluate and implement modern technology across cloud
          infrastructure, security, AI, automation, data and software.
        </p>
        <p>
          We also help international technology companies understand UK public-sector demand and navigate the routes
          through which technology is researched, procured and delivered.
        </p>
        <div className="pt-4">
          <ArrowLink href="/public-sector">Explore Public Sector</ArrowLink>
        </div>
      </SplitSection>

      <CtaBand
        title="What are you trying to build?"
        primary={cta.project}
        secondary={{ label: "Enter the UK market", href: "/uk-market-entry" }}
      >
        Whether you are adopting new technology or bringing technology into the UK, start with a conversation about
        the problem, the environment and what success looks like.
      </CtaBand>
    </>
  );
}
