import type { Metadata } from "next";
import { contactHref } from "@/lib/site";
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema, webPageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Grid, Section } from "@/components/marketing/layout";
import { CtaButton } from "@/components/marketing/links";
import { CtaBand, FaqSection, PageHero, RuledList } from "@/components/marketing/blocks";
import {
  AccessPaths,
  ControlLoop,
  EnvironmentCoverage,
  StageIndex,
  accessReviewStages,
} from "@/components/diagrams/ai-security";

const path = "/ai-security";
const title = "AI Agent & Non-Human Identity Security UK | Fairpointe";
const description =
  "AI agent and non-human identity security across AWS, Azure, Microsoft Entra, GitHub, Kubernetes and SaaS. Fairpointe maps agent access and implements the right controls.";

export const metadata: Metadata = pageMetadata({ title, description, path });

const environmentAreas = [
  "AWS",
  "Microsoft Azure",
  "Microsoft Entra",
  "GitHub",
  "Kubernetes",
  "SaaS applications",
  "MCP infrastructure",
];

const discussAccess = { label: "Discuss your AI security priorities", href: contactHref("ai-security") };

const useCases = [
  {
    title: "Enterprise AI agents",
    body: "Map the applications and data each agent can access, and check whether its permissions match its purpose.",
  },
  {
    title: "Service and workload identities",
    body: "Identify owners and review access for the software accounts used by applications, integrations and automated jobs.",
  },
  {
    title: "Cloud and developer tools",
    body: "Review permissions across cloud infrastructure, deployment pipelines, repositories and Kubernetes.",
  },
  {
    title: "MCP connections",
    body: "Review the credentials and permissions connecting AI tools to enterprise systems through Model Context Protocol servers.",
  },
];

const faqs = [
  {
    question: "What does this service cover?",
    answer:
      "We review the identities, credentials and permissions used by AI agents and automated workloads within an agreed scope. We then prioritise findings and implement the access and monitoring changes included in the engagement.",
  },
  {
    question: "What is a non-human identity?",
    answer:
      "A non-human identity is a digital identity used by software rather than a person, such as a service account, service principal or workload identity. It may authenticate using a key, token, certificate or another credential.",
  },
  {
    question: "What will our team receive?",
    answer:
      "Deliverables are agreed before work starts. They can include an identity and access inventory, ownership mapping, prioritised findings, implemented control changes and documentation for your team.",
  },
  {
    question: "Which environments can be included?",
    answer:
      "The scope can include AWS, Microsoft Azure, Microsoft Entra, GitHub, Kubernetes, SaaS applications and MCP infrastructure. We confirm platform coverage and the access needed during scoping.",
  },
];

export default function AiSecurityPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path }),
          serviceSchema({
            name: "AI agent and non-human identity security",
            serviceType: "AI agent and non-human identity security",
            description,
            path,
          }),
          faqSchema(faqs),
          breadcrumbSchema([{ name: "AI & Security", path }]),
        ]}
      />

      <PageHero
        title="Give your AI agents the access they need to work securely."
        actions={<CtaButton href={discussAccess.href}>{discussAccess.label}</CtaButton>}
        aside={<StageIndex stages={accessReviewStages} />}
      >
        <p>
          Fairpointe implements access controls for AI agents and automated workloads across cloud platforms and
          business systems. We map the identities and permissions behind each workflow, then help your team put the
          right controls in place.
        </p>
        <p>
          Focused AI agent and non-human identity security across AWS, Azure, Microsoft Entra, GitHub, Kubernetes and
          SaaS applications.
        </p>
      </PageHero>

      {/* Approach */}
      <Section id="approach" tone="deep" rule={false} aria-labelledby="approach-heading">
        <h2 id="approach-heading" className="type-h2 max-w-[22ch]">
          Understand access. Put controls into practice.
        </h2>
        <div className="mt-14 md:mt-20">
          <ControlLoop stages={accessReviewStages} />
        </div>
        <Grid className="mt-16 md:mt-20">
          <div className="col-span-4 md:col-span-9 lg:col-span-6">
            <h3 className="mb-5 text-[0.9375rem] font-medium text-ink-muted">Platforms and environments in scope</h3>
            <RuledList items={environmentAreas} columns={2} />
          </div>
        </Grid>
      </Section>

      {/* Identity explanation and illustrative access examples */}
      <Section id="problem" rule={false} aria-labelledby="problem-heading">
        <Grid className="gap-y-10">
          <h2 id="problem-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            Make every agent&rsquo;s access clear and accountable.
          </h2>
          <div className="type-body prose-flow col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <p className="type-lede text-ink">
              AI agents create useful connections between business systems. Knowing which identity each agent uses,
              what it can access and who owns that access gives your team a stronger foundation for deployment.
            </p>
            <p>
              Fairpointe turns that understanding into practical changes: permissions aligned with the task, clearer
              ownership and monitoring of the access that matters.
            </p>
          </div>
          <div className="col-span-4 mt-10 md:col-span-12 md:mt-16">
            <AccessPaths />
          </div>
        </Grid>
      </Section>

      {/* Environments */}
      <Section id="environments" aria-labelledby="environments-heading">
        <Grid className="gap-y-10">
          <div className="col-span-4 md:col-span-10 lg:col-span-5">
            <h2 id="environments-heading" className="type-h2">
              Review access across the systems agents use.
            </h2>
            <p className="type-body mt-8 max-w-[30rem] text-ink-soft">
              The review scope can include cloud platforms, developer tools and business applications. We agree the
              environments and access required before work starts.
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
          Where this work helps.
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

      <FaqSection id="faq" title="AI agent access questions" faqs={faqs} />

      <CtaBand title="Build stronger access controls into your AI deployment." primary={discussAccess}>
        Talk to us about the agents you are deploying and the systems they need to use. We&rsquo;ll help define the
        access review and implementation work around your environment.
      </CtaBand>
    </>
  );
}
