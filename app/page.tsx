import type { Metadata } from "next";
import { contactHref, cta } from "@/lib/site";
import { pageMetadata, serviceSchema, webPageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Container, Grid, Section } from "@/components/marketing/layout";
import { ArrowLink, CtaButton } from "@/components/marketing/links";
import { ControlLoop, deploymentStages } from "@/components/diagrams/ai-security";
import { TechnologyList, TechnologyPartnershipsSection } from "@/components/marketing/technologies";

const title = "Enterprise Technology Implementation UK | Fairpointe";
const description =
  "Fairpointe implements AI, cloud, data and security technology for UK organisations and supports international vendors with UK customer delivery.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/" });

const capabilities: { title: string; body: string; link?: { label: string; href: string } }[] = [
  {
    title: "Enterprise AI & Agents",
    body: "Connect AI applications and agents to business data, tools and workflows, with access controls and monitoring.",
  },
  {
    title: "Cloud & Data Platforms",
    body: "Build and configure the infrastructure, data connections and deployment processes your application needs.",
    link: { label: "AWS and Azure implementation", href: "/cloud-infrastructure" },
  },
  {
    title: "Security & Identity",
    body: "Configure access controls for users, applications and automated workloads across the deployment.",
    link: { label: "AI agent and non-human identity security", href: "/ai-security" },
  },
  {
    title: "Systems Integration",
    body: "Connect APIs, business applications and data sources so the complete workflow works across your existing systems.",
  },
];

const faq = {
  question: "What does Fairpointe do?",
  answer:
    "Fairpointe is a UK enterprise technology company that helps organisations evaluate, integrate and deploy AI, cloud, data and security technology. It also supports international technology vendors with UK market development, technical evaluations and customer implementations.",
};

export default function HomePage() {
  const implementation = { label: "Discuss your implementation", href: contactHref("technology-project") };

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path: "/" }),
          serviceSchema({
            name: "Enterprise technology implementation in the UK",
            serviceType: "Enterprise technology implementation",
            description:
              "Fairpointe integrates AI, cloud, data and security platforms with existing systems, prepares them for production and supports teams through launch.",
            path: "/",
          }),
        ]}
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
                Fairpointe integrates AI, cloud, data and security platforms with your existing systems, prepares them
                for production and supports your team through launch.
              </p>
              <div className="mt-10">
                <CtaButton href={cta.project.href}>Discuss your project</CtaButton>
              </div>
            </div>
          </Grid>
        </Container>
      </section>

      {/* Go-Live Sprint teaser */}
      <Section id="go-live" tone="deep" rule={false} spacing="compact" aria-labelledby="go-live-heading" className="mt-16 md:mt-24">
        <Grid className="gap-y-8">
          <div className="col-span-4 md:col-span-10 lg:col-span-5">
            <p className="text-[0.9375rem] font-medium text-accent">For AI and SaaS vendors</p>
            <h2 id="go-live-heading" className="type-h2 mt-4">
              Get your next enterprise customer into production.
            </h2>
          </div>
          <div className="col-span-4 md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <p className="type-body text-ink-soft">
              Customer-specific integrations and deployment, delivered alongside your engineering team. Six-week Go-Live
              Sprints from £24,000, with scope, access and dependencies agreed before kickoff.
            </p>
            <div className="mt-8">
              <CtaButton href={cta.goLive.href}>Explore the Go-Live Sprint</CtaButton>
            </div>
          </div>
        </Grid>
      </Section>

      {/* Technologies */}
      <Section id="technologies" aria-labelledby="technologies-heading">
        <Grid className="gap-y-8">
          <h2 id="technologies-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            Technologies we deploy and integrate
          </h2>
          <p className="type-body col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            Implementation support for the AI, cloud, data and security platforms your organisation uses.
          </p>
        </Grid>
        <TechnologyList className="mt-14 md:mt-20" />
        <Grid className="mt-12 gap-y-6 md:mt-16">
          <h3 className="type-h3 col-span-4 md:col-span-10 lg:col-span-5">Already selected your technology?</h3>
          <div className="col-span-4 md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7">
            <p className="type-body text-ink-soft">
              We can help define the architecture, connect existing systems, prepare the deployment and hand it over to
              your team.
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
          <div className="col-span-4 md:col-span-10 lg:col-span-5">
            <h2 id="uk-organisations-heading" className="type-h2">
              The engineering work behind a production deployment.
            </h2>
            <div className="mt-10 border-t border-rule pt-6 lg:max-w-[30rem]">
              <h3 className="type-h4">{faq.question}</h3>
              <p className="type-body mt-3 text-ink-soft">{faq.answer}</p>
            </div>
          </div>
          <div className="col-span-4 md:col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <p className="type-body text-ink-soft">
              From customer workflows to the infrastructure beneath them, we help turn a technology decision into a
              working implementation.
            </p>
            <ol id="capabilities" aria-label="Capabilities" className="mt-12 border-t border-ink">
              {capabilities.map((item, i) => (
                <li key={item.title} className="grid gap-3 border-b border-rule py-7 md:grid-cols-7 md:gap-8">
                  <div className="flex items-baseline gap-5 md:col-span-3">
                    <span className="numeral text-[0.875rem] text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="type-h4 text-[1.3125rem]">{item.title}</h3>
                  </div>
                  <div className="md:col-span-4">
                    <p className="type-body text-ink-soft">{item.body}</p>
                    {item.link ? (
                      <ArrowLink href={item.link.href} className="mt-4 text-[0.9375rem]">
                        {item.link.label}
                      </ArrowLink>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Grid>
      </Section>

      {/* Delivery lifecycle */}
      <Section id="lifecycle" tone="deep" rule={false} aria-labelledby="lifecycle-heading">
        <h2 id="lifecycle-heading" className="type-h2 max-w-[22ch]">
          From evaluation to production.
        </h2>
        <div className="mt-14 md:mt-20">
          <ControlLoop stages={deploymentStages} />
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
              Build your UK presence around real opportunities.
            </h2>
            <div className="type-body prose-flow col-span-4 text-on-navy-soft md:col-span-8 lg:col-span-6">
              <p className="text-on-navy">
                Fairpointe helps international technology companies assess UK opportunities, support customer
                evaluations and deliver implementations.
              </p>
              <p>
                Start with market development, an active customer opportunity or a deployment that needs local
                technical support. Agree the work before committing to a larger UK team.
              </p>
            </div>
            <div className="col-span-4 md:col-span-4 md:col-start-9 lg:col-span-4 lg:col-start-9 lg:self-end">
              <div className="flex flex-wrap gap-3">
                <CtaButton href={cta.goLive.href} variant="primary-inverse">
                  Deliver a customer implementation
                </CtaButton>
                <CtaButton href="/uk-market-entry" variant="secondary-inverse">
                  Explore UK market entry
                </CtaButton>
              </div>
            </div>
          </Grid>
        </Container>
      </section>
    </>
  );
}
