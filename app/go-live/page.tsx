import type { Metadata } from "next";
import { cta, site } from "@/lib/site";
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema, webPageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Grid, Section } from "@/components/marketing/layout";
import { CtaButton } from "@/components/marketing/links";
import { FaqSection, PageHero, RuledList, SplitSection } from "@/components/marketing/blocks";

const path = "/go-live";
const title = "FDEaaS | Forward-Deployed Engineering | Fairpointe";
const description =
  "Forward-deployed engineering for AI and SaaS vendors. Deliver enterprise customer integrations, production deployments and handover with Fairpointe.";
const socialTitle = "Get your next enterprise customer into production.";
const socialDescription =
  "Forward-Deployed Engineering as a Service for AI and SaaS vendors. A clear path from signed contract to working software, with customer integrations, deployment and handover.";

const baseMetadata = pageMetadata({
  title,
  description,
  path,
});

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: { ...baseMetadata.openGraph, title: socialTitle, description: socialDescription },
  twitter: { ...baseMetadata.twitter, title: socialTitle, description: socialDescription },
};

const email = { label: "Email us", href: `mailto:${site.email}` };

const offers = [
  {
    name: "Go-Live Sprint",
    term: "6 weeks",
    price: "From £24,000",
    body: "Launch one enterprise customer with a dedicated delivery lead, customer-specific integrations and a structured production handover.",
    includes: [
      "Customer systems and requirements review",
      "Integrations and deployment",
      "Security review support",
      "Production launch and monitoring",
      "Code, documentation and team handover",
    ],
  },
  {
    name: "Fractional FDE",
    term: "Three-month minimum",
    price: "From £6,000 a month",
    body: "Add dedicated forward-deployed engineering capacity to deliver customer integrations, guide technical onboarding and move implementations into production.",
    includes: ["2 days a week: from £6,000 a month", "3 days a week: £9,000–£11,000 a month"],
  },
  {
    name: "Pilot-to-Production Rescue",
    term: "Review, then implementation",
    price: "£6,000–£8,000 for the review",
    body: "Get a clear route from pilot to production. We assess the implementation, identify the work required and provide a prioritised delivery plan.",
    includes: [
      "Review of the implementation and technical blockers",
      "Written findings, dependencies and recommended actions",
      "Separate fixed-price proposal for agreed implementation work",
    ],
    note: "Implementation is scoped and priced separately from the review.",
  },
];

const weeks = [
  {
    title: "Confirm the scope",
    body: "Review the customer’s systems, data, access and security requirements. Agree the deliverables, responsibilities and acceptance criteria for launch.",
  },
  {
    title: "Build the implementation",
    body: "Build the integrations, configuration and customer-specific workflows needed to use your product in the customer’s environment.",
  },
  {
    title: "Test with the customer",
    body: "Connect the required systems and test the complete workflow with the customer’s team. Resolve integration issues and confirm the implementation meets the agreed requirements.",
  },
  {
    title: "Prepare for production",
    body: "Address outstanding technical and security findings. Set up monitoring, document operating procedures and confirm the launch and rollback plans.",
  },
  {
    title: "Launch and stabilise",
    body: "Release to production once the agreed approvals are in place. Monitor real usage, resolve launch issues and check the implementation against the acceptance criteria.",
  },
  {
    title: "Hand over to your team",
    body: "Deliver the code, configuration and runbooks. Walk your team through the implementation, confirm ownership and document any remaining actions.",
  },
];

const reasons = [
  {
    title: "One accountable delivery lead",
    body: "Your main technical contact stays responsible from scoping through launch, bringing customer requirements and engineering delivery together.",
  },
  {
    title: "A clear delivery commitment",
    body: "Scope, deliverables, price and responsibilities are established upfront, giving everyone a shared plan to work towards.",
  },
  {
    title: "A team equipped to operate",
    body: "Your team receives the implementation code, runbooks and walkthroughs needed to maintain what has been delivered.",
  },
  {
    title: "Expertise matched to the work",
    body: "Additional engineers and specialist skills are brought into the delivery plan where the scope requires them.",
  },
];

const faqs = [
  {
    question: "How much does it cost?",
    answer:
      "The six-week Go-Live Sprint starts at £24,000. Fractional FDE starts at £6,000 a month for two days a week, or £9,000–£11,000 a month for three days a week, with a three-month minimum. A Pilot-to-Production Rescue review costs £6,000–£8,000. Any implementation following the review is scoped and priced separately.",
  },
  {
    question: "Can you get our customer live in six weeks?",
    answer:
      "The Go-Live Sprint is designed for an implementation that fits an agreed six-week scope. Before kickoff, we confirm customer access, technical dependencies, responsibilities and the approvals needed for launch. If the work needs a longer timeline, we will explain that before you commit.",
  },
  {
    question: "Who owns the work, and what is included?",
    answer:
      "Your company owns the code we write for your engagement and receives the associated configuration, runbooks and documentation. Deliverables and exclusions are set out in the written scope. Core product development, sales activity, third-party fees and ongoing support after handover are excluded unless explicitly included.",
  },
  {
    question: "How do you work with our team and our customer?",
    answer:
      "We work in your existing tools and processes, alongside your engineering, product and customer teams. We can join customer calls, lead technical implementation discussions and coordinate with the customer’s technical team. Responsibilities and communication are agreed at kickoff.",
  },
  {
    question: "Do you work remotely or on site?",
    answer:
      "Most work is delivered remotely. UK or EU on-site days can be included where useful, with travel arrangements and costs agreed in advance.",
  },
];

export default function GoLivePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path }),
          serviceSchema({
            name: "FDEaaS: Forward-Deployed Engineering as a Service",
            alternateName: "FDEaaS",
            serviceType: "Forward-deployed engineering",
            description: socialDescription,
            path,
          }),
          faqSchema(faqs),
          breadcrumbSchema([{ name: "FDEaaS", path }]),
        ]}
      />

      <PageHero
        eyebrow="FDEaaS · Forward-Deployed Engineering as a Service"
        title="Get your next enterprise customer into production."
        actions={
          <>
            <CtaButton href={cta.bookCall.href} newTab>
              Discuss your customer deployment
            </CtaButton>
            <CtaButton href="#offers" variant="secondary">
              Explore the options
            </CtaButton>
            <p className="mt-3 basis-full text-[0.9375rem] text-ink-muted">
              Six-week Go-Live Sprints from £24,000, with scope, customer access and dependencies confirmed before
              kickoff.
            </p>
          </>
        }
      >
        <p>
          Give your enterprise customers a clear path from signed contract to working software. Fairpointe&rsquo;s
          forward-deployed engineers lead customer-specific integrations and deployment, working directly with your
          customer and product team through launch and handover.
        </p>
        <p>
          Forward-deployed engineering means working directly with your customer and product team to adapt, integrate
          and deploy your software in the customer&rsquo;s environment.
        </p>
      </PageHero>

      {/* Offers */}
      <Section id="offers" aria-labelledby="offers-heading">
        <Grid className="gap-y-8">
          <h2 id="offers-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            The right delivery model for your next customer.
          </h2>
          <p className="type-body col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            Choose a focused customer implementation, dedicated engineering capacity or a practical route from pilot to
            production.
          </p>
        </Grid>
        <ul aria-label="Offers" className="mt-14 grid border-t border-ink md:mt-20 lg:grid-cols-3">
          {offers.map((offer) => (
            <li
              key={offer.name}
              className="flex flex-col border-b border-rule py-10 lg:border-b-0 lg:px-8 lg:first:pl-0 lg:last:pr-0 lg:not-first:border-l"
            >
              <p className="text-[0.9375rem] font-medium text-ink-muted">{offer.term}</p>
              <h3 className="type-h3 mt-3">{offer.name}</h3>
              <p className="mt-5 text-[1.3125rem] font-semibold tracking-[-0.02em] text-ink">{offer.price}</p>
              <p className="type-body mt-5 text-ink-soft">{offer.body}</p>
              <RuledList items={offer.includes} className="mt-8" />
              {offer.note ? (
                <p className="mt-8 border-l-2 border-accent pl-4 text-[0.9375rem] leading-relaxed text-ink">
                  {offer.note}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      {/* How it works */}
      <Section id="how-it-works" tone="deep" rule={false} aria-labelledby="how-it-works-heading">
        <Grid className="gap-y-10">
          <div className="col-span-4 md:col-span-10 lg:col-span-5">
            <h2 id="how-it-works-heading" className="type-h2">
              Six weeks built around your customer launch.
            </h2>
            <p className="type-body mt-8 text-ink-soft lg:max-w-[30rem]">
              Start with a clear definition of success and a delivery plan shaped around your customer&rsquo;s
              environment. Integration, security requirements, testing and handover are addressed throughout.
            </p>
          </div>
          <ol aria-label="Weeks 1 to 6" className="col-span-4 border-t border-ink md:col-span-12 lg:col-span-6 lg:col-start-7">
            {weeks.map((week, i) => (
              <li key={week.title} className="grid gap-3 border-b border-rule py-7 md:grid-cols-7 md:gap-8">
                <div className="flex items-baseline gap-5 md:col-span-3">
                  <span className="numeral w-14 shrink-0 text-[0.875rem] text-accent">Week {i + 1}</span>
                  <h3 className="type-h4 text-[1.3125rem]">{week.title}</h3>
                </div>
                <p className="type-body text-ink-soft md:col-span-4">{week.body}</p>
              </li>
            ))}
          </ol>
        </Grid>
      </Section>

      {/* Why Fairpointe */}
      <SplitSection id="why-fairpointe" rule={false} title="Clear ownership. Practical delivery. A team ready to take over.">
        <p className="type-lede text-ink">
          A named technical lead coordinates the implementation, keeps your customer and product team aligned and
          carries the work through to handover.
        </p>
        <div className="border-t border-rule">
          {reasons.map((reason) => (
            <article key={reason.title} className="grid gap-3 border-b border-rule py-8">
              <h3 className="type-h4">{reason.title}</h3>
              <p>{reason.body}</p>
            </article>
          ))}
        </div>
      </SplitSection>

      <FaqSection id="faq" title="Questions about working with Fairpointe." faqs={faqs} />

      {/* Closing call to action */}
      <Section id="next-step" tone="navy" aria-labelledby="next-step-heading" className="py-24 md:py-32 lg:py-40">
        <Grid className="gap-y-10">
          <h2 id="next-step-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-7">
            Plan your next enterprise customer launch.
          </h2>
          <div className="col-span-4 md:col-span-8 lg:col-span-4 lg:col-start-9 lg:pt-2">
            <p className="type-body text-on-navy-soft">
              Bring us your product, customer requirements and target date. In a 20-minute call, we&rsquo;ll identify the
              delivery priorities and assess the right engagement.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaButton href={cta.bookCall.href} variant="primary-inverse" newTab>
                Discuss your customer launch
              </CtaButton>
              <CtaButton href={email.href} variant="secondary-inverse">
                {email.label}
              </CtaButton>
            </div>
          </div>
        </Grid>
      </Section>
    </>
  );
}
