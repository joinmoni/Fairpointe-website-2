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
  "Cloud architecture, migration, deployment automation and operational handover for production applications across AWS, Microsoft Azure and hybrid environments.";

export const metadata: Metadata = pageMetadata({ title, description, path });

const discuss = { label: "Discuss your cloud project", href: contactHref("cloud-infrastructure") };

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
        title="Cloud infrastructure built for production workloads."
        actions={<CtaButton href={discuss.href}>{discuss.label}</CtaButton>}
      >
        <p>
          Fairpointe designs and implements AWS, Microsoft Azure and hybrid infrastructure for production applications.
        </p>
        <p>
          We help with migrations, deployment automation, access controls, monitoring and operational handover,
          whether you are launching a new application or improving an existing environment.
        </p>
      </PageHero>

      <Section id="capabilities" aria-labelledby="capabilities-heading">
        <Grid className="gap-y-12">
          <div className="col-span-4 md:col-span-12 lg:col-span-5">
            <h2 id="capabilities-heading" className="type-h2">
              What we deliver across AWS and Azure.
            </h2>
            <p className="type-body mt-8 text-ink-soft">
              Agree the architecture, implementation work and operational requirements before making changes to your
              environment.
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

      <SplitSection id="cloud-identity" tone="deep" title="Review the access inside your cloud environment.">
        <p>
          Applications, deployment pipelines and AI agents use service accounts, workload identities and credentials to
          reach cloud resources. Our AI &amp; Security service helps review that access and implement agreed controls.
        </p>
        <div className="pt-4">
          <ArrowLink href="/ai-security">Explore AI agent and identity access</ArrowLink>
        </div>
      </SplitSection>

      <CtaBand title="Discuss the infrastructure your application needs." primary={discuss}>
        Tell us about your current environment, the workload you need to launch or migrate and the problems you need
        to resolve. We&rsquo;ll help define the implementation and handover, with any ongoing support agreed
        separately.
      </CtaBand>
    </>
  );
}
