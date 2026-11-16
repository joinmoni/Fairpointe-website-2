import type { Metadata } from "next";
import { contactHref } from "@/lib/site";
import { breadcrumbSchema, pageMetadata, serviceSchema, webPageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Grid, Section } from "@/components/marketing/layout";
import { ArrowLink, CtaButton } from "@/components/marketing/links";
import { CtaBand, PageHero, RuledList, SplitSection } from "@/components/marketing/blocks";
import { MultiCloudStack } from "@/components/diagrams/cloud";

const path = "/cloud-infrastructure";
const title = "AWS & Azure Cloud Implementation | Fairpointe";
const description =
  "AWS, Microsoft Azure and hybrid cloud implementation for business applications and AI systems: architecture, migration, deployment automation and operational handover.";

export const metadata: Metadata = pageMetadata({ title, description, path });

const discuss = { label: "Plan your cloud deployment", href: contactHref("cloud-infrastructure") };

const faq = {
  question: "What does a cloud implementation engagement include?",
  answer:
    "Depending on the agreed scope, an engagement can include architecture, infrastructure configuration, deployment automation, migration, access controls, monitoring and technical handover. Ongoing support is agreed separately.",
};

export default function CloudInfrastructurePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path }),
          serviceSchema({
            name: "AWS and Azure cloud implementation",
            serviceType: "Cloud infrastructure implementation",
            description,
            path,
          }),
          breadcrumbSchema([{ name: "Cloud & Infrastructure", path }]),
        ]}
      />

      <PageHero
        title="Build the cloud foundation for your next production launch."
        actions={<CtaButton href={discuss.href}>{discuss.label}</CtaButton>}
      >
        <p>
          Fairpointe designs and implements AWS, Microsoft Azure and hybrid infrastructure for business applications and
          AI systems. Launch new workloads, modernise existing environments and give your team a repeatable way to
          deploy and operate them.
        </p>
      </PageHero>

      <Section id="capabilities" aria-labelledby="capabilities-heading">
        <Grid className="gap-y-12">
          <div className="col-span-4 md:col-span-12 lg:col-span-5">
            <h2 id="capabilities-heading" className="type-h2">
              From architecture to an environment your team can run.
            </h2>
            <p className="type-body mt-8 text-ink-soft">
              Bring infrastructure, deployment automation, access controls and monitoring together in a practical
              implementation.
            </p>
            <RuledList
              className="mt-12"
              numbered
              items={[
                "AWS",
                "Microsoft Azure",
                "Cloud architecture",
                "Platform engineering",
                "Cloud security",
                "Infrastructure automation",
                "Migration and modernisation",
              ]}
            />
            <div className="mt-12 border-t border-rule pt-6">
              <h3 className="type-h4">{faq.question}</h3>
              <p className="type-body mt-3 text-ink-soft">{faq.answer}</p>
            </div>
          </div>
          <div className="col-span-4 md:col-span-9 lg:col-span-6 lg:col-start-7 lg:pt-3">
            <MultiCloudStack />
          </div>
        </Grid>
      </Section>

      <SplitSection id="cloud-identity" tone="deep" title="Build clear workload access into your cloud environment.">
        <p>
          Applications, pipelines and AI agents depend on identities and credentials. Fairpointe helps your team review
          that access and implement controls alongside the infrastructure it serves.
        </p>
        <div className="pt-4">
          <ArrowLink href="/ai-security">Explore AI agent and identity security</ArrowLink>
        </div>
      </SplitSection>

      <CtaBand title="Move your cloud project towards production." primary={discuss}>
        Bring us your current environment, workload and target timeline. We&rsquo;ll define the architecture,
        implementation priorities and handover your team needs.
      </CtaBand>
    </>
  );
}
