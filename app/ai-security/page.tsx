import type { Metadata } from "next";
import { contactHref } from "@/lib/site";
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Grid, Section } from "@/components/marketing/layout";
import { CtaButton } from "@/components/marketing/links";
import { CtaBand, FaqSection, PageHero } from "@/components/marketing/blocks";
import { AccessPaths, ControlLoop, EnvironmentCoverage, StageIndex } from "@/components/diagrams/ai-security";

const path = "/ai-security";
const description =
  "Secure AI agents and non-human identities across AWS, Azure, Entra, GitHub, Kubernetes and SaaS. Discover, govern, control and monitor machine access.";

export const metadata: Metadata = pageMetadata({
  title: "AI Agent & Non-Human Identity Security UK | Fairpointe",
  description,
  path,
});

const discussEnvironment = { label: "Discuss your environment", href: contactHref("ai-security") };

const useCases = [
  {
    title: "Enterprise AI agents",
    body: "Understand which systems autonomous agents can reach and which identities they use to get there.",
  },
  {
    title: "Machine identities",
    body: "Discover and govern service accounts, API credentials, workload identities and other non-human access.",
  },
  {
    title: "Cloud and DevOps",
    body: "Understand machine access across cloud infrastructure, CI/CD systems, repositories and Kubernetes environments.",
  },
  {
    title: "MCP and AI infrastructure",
    body: "Apply security controls to the emerging infrastructure connecting AI models and agents to tools, data and enterprise systems.",
  },
];

const faqs = [
  {
    question: "What is AI agent security?",
    answer:
      "AI agent security is the practice of protecting autonomous and semi-autonomous AI systems, including the identities, credentials, permissions, applications and data they use to perform actions.",
  },
  {
    question: "What is a non-human identity?",
    answer:
      "A non-human identity is a digital identity used by software rather than a person. Examples include service accounts, API keys, access tokens, workload identities and credentials used by automated systems or AI agents.",
  },
  {
    question: "Why do AI agents create identity risk?",
    answer:
      "AI agents can interact with multiple systems and perform actions autonomously. If their credentials have excessive permissions, are poorly managed or become compromised, an attacker or malfunctioning agent may gain access to sensitive systems or data.",
  },
  {
    question: "Can Fairpointe work across AWS and Microsoft Azure?",
    answer:
      "Yes. Fairpointe’s approach is designed for multi-cloud and mixed technology environments, including AWS, Microsoft Azure, Microsoft Entra, GitHub, Kubernetes and SaaS applications.",
  },
];

export default function AiSecurityPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "AI agent and non-human identity security",
            serviceType: "AI agent security",
            description,
            path,
          }),
          faqSchema(faqs),
          breadcrumbSchema([{ name: "AI & Security", path }]),
        ]}
      />

      <PageHero
        title={
          <>
            Your AI agents have identities. <span className="block">Secure them.</span>
          </>
        }
        actions={<CtaButton href={discussEnvironment.href}>{discussEnvironment.label}</CtaButton>}
        aside={<StageIndex />}
      >
        <p>
          AI agents connect to applications, databases, cloud infrastructure and sensitive company information using
          service accounts, API keys, tokens and other machine identities.
        </p>
        <p>
          Fairpointe helps organisations discover these identities, understand what they can access and control what
          autonomous systems are allowed to do.
        </p>
      </PageHero>

      {/* Problem */}
      <Section id="problem" aria-labelledby="problem-heading">
        <Grid className="gap-y-10">
          <h2 id="problem-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            AI creates a new identity problem.
          </h2>
          <div className="type-body prose-flow col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <p className="type-lede text-ink">Traditional identity security was designed primarily around people.</p>
            <p>
              AI agents and automated workloads operate differently. They authenticate to systems, call APIs, access
              data, trigger workflows and take actions without a person signing in each time.
            </p>
            <p>Every credential creates a potential path to company systems and information.</p>
            <p>
              As organisations deploy more AI, understanding these non-human identities becomes part of securing the AI
              infrastructure itself.
            </p>
          </div>
          <div className="col-span-4 mt-10 md:col-span-12 md:mt-16">
            <AccessPaths />
          </div>
        </Grid>
      </Section>

      {/* Approach */}
      <Section id="approach" tone="deep" rule={false} aria-labelledby="approach-heading">
        <h2 id="approach-heading" className="type-h2 max-w-[22ch]">
          Control the identities behind your AI systems.
        </h2>
        <div className="mt-14 md:mt-20">
          <ControlLoop />
        </div>
      </Section>

      {/* Environments */}
      <Section id="environments" rule={false} aria-labelledby="environments-heading">
        <Grid className="gap-y-10">
          <div className="col-span-4 md:col-span-10 lg:col-span-5">
            <h2 id="environments-heading" className="type-h2">
              Secure agents across your environment.
            </h2>
            <p className="type-body mt-8 max-w-[30rem] text-ink-soft">
              AI rarely operates inside a single platform. Fairpointe takes an environment-wide approach to the
              identities and infrastructure connecting agents to company systems.
            </p>
          </div>
          <div className="col-span-4 md:col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <EnvironmentCoverage />
          </div>
        </Grid>
      </Section>

      {/* Use cases */}
      <Section id="use-cases" aria-labelledby="use-cases-heading">
        <h2 id="use-cases-heading" className="type-h2 max-w-[22ch]">
          Where AI agent security matters.
        </h2>
        <div className="mt-14 grid border-t border-ink md:mt-20 md:grid-cols-2">
          {useCases.map((useCase, i) => (
            <article
              key={useCase.title}
              className={
                "border-b border-rule py-10 md:py-12 " +
                (i % 2 === 0 ? "md:pr-10 lg:pr-16" : "md:border-l md:pl-10 lg:pl-16")
              }
            >
              <h3 className="type-h4 text-[1.375rem]">{useCase.title}</h3>
              <p className="type-body mt-4 max-w-[30rem] text-ink-soft">{useCase.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <FaqSection id="faq" title="AI agent security questions" faqs={faqs} />

      <CtaBand title="Understand what your AI agents can access." primary={discussEnvironment}>
        Talk to Fairpointe about your AI, cloud and machine identity environment.
      </CtaBand>
    </>
  );
}
