import type { Metadata } from "next";
import { contactHref } from "@/lib/site";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Grid, Section } from "@/components/marketing/layout";
import { ArrowLink, CtaButton } from "@/components/marketing/links";
import { CtaBand, PageHero, RuledList, SplitSection } from "@/components/marketing/blocks";
import { MultiCloudStack } from "@/components/diagrams/cloud";

const path = "/cloud-infrastructure";
const description =
  "Fairpointe designs, implements and improves cloud infrastructure across AWS and Microsoft Azure, including architecture, cloud security, platform engineering, automation and migration.";

export const metadata: Metadata = pageMetadata({
  title: "Cloud & Infrastructure on AWS and Microsoft Azure | Fairpointe",
  description,
  path,
});

const discuss = { label: "Discuss a project", href: contactHref("cloud-infrastructure") };

export default function CloudInfrastructurePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Cloud architecture and infrastructure on AWS and Microsoft Azure",
            serviceType: "Cloud infrastructure",
            description,
            path,
          }),
          breadcrumbSchema([{ name: "Cloud & Infrastructure", path }]),
        ]}
      />

      <PageHero
        title="Cloud infrastructure built for critical workloads."
        actions={<CtaButton href={discuss.href}>{discuss.label}</CtaButton>}
      >
        <p>
          Fairpointe helps organisations design, implement and improve cloud infrastructure across Amazon Web Services
          and Microsoft Azure.
        </p>
        <p>
          We work across architecture, cloud security, platform engineering, automation, migration and the
          infrastructure required to operate modern applications and AI systems reliably.
        </p>
      </PageHero>

      <Section id="capabilities" aria-labelledby="capabilities-heading">
        <Grid className="gap-y-12">
          <div className="col-span-4 md:col-span-12 lg:col-span-5">
            <h2 id="capabilities-heading" className="type-h2">
              One discipline across AWS and Microsoft Azure.
            </h2>
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
          </div>
          <div className="col-span-4 md:col-span-9 lg:col-span-6 lg:col-start-7 lg:pt-3">
            <MultiCloudStack />
          </div>
        </Grid>
      </Section>

      <SplitSection id="cloud-identity" tone="deep" title="Cloud security includes the identities inside it.">
        <p>
          Service accounts, workload identities, access keys and tokens connect applications, pipelines and AI agents
          to cloud infrastructure.
        </p>
        <p>
          Fairpointe&rsquo;s AI &amp; Security work covers these non-human identities across AWS, Microsoft Azure,
          Microsoft Entra, GitHub and Kubernetes.
        </p>
        <div className="pt-4">
          <ArrowLink href="/ai-security">Explore AI & Security</ArrowLink>
        </div>
      </SplitSection>

      <CtaBand title="Discuss your cloud infrastructure." primary={discuss}>
        Tell us about your cloud environment and what you are trying to build or improve.
      </CtaBand>
    </>
  );
}
