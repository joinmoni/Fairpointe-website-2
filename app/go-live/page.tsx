import type { Metadata } from "next";
import { cta, site } from "@/lib/site";
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Grid, Section } from "@/components/marketing/layout";
import { CtaButton } from "@/components/marketing/links";
import { FaqSection, PageHero, RuledList, SplitSection } from "@/components/marketing/blocks";

const path = "/go-live";
const description =
  "Forward-deployed engineering for AI and SaaS vendors. Fairpointe gets your enterprise customers live in 6 weeks without a full-time FDE hire, then hands the code, runbooks and knowledge back to your team.";

export const metadata: Metadata = pageMetadata({
  title: "Forward-Deployed Engineering for AI and SaaS Vendors | Fairpointe",
  description,
  path,
});

const email = { label: "Email us", href: `mailto:${site.email}` };

const offers = [
  {
    name: "Go-Live Sprint",
    term: "6 weeks",
    price: "From £24,000",
    body: "One enterprise customer taken from signed contract to live in production.",
    includes: ["Integrations", "Deployment", "Security review support", "Go-live", "Handover"],
    note: "Founding-client offer: £18,000 for the first two clients, in exchange for a case study.",
  },
  {
    name: "Fractional FDE",
    term: "Three-month minimum",
    price: "From £6,000 a month",
    body: "A forward-deployed engineer embedded with your team on an ongoing basis.",
    includes: ["2 days a week: from £6,000 a month", "3 days a week: £9,000–£11,000 a month"],
  },
  {
    name: "Pilot-to-Production Rescue",
    term: "Review, then fix",
    price: "£6,000–£8,000 review",
    body: "For a pilot that has stalled before production. We review what is blocking it, then fix it for a fixed price.",
    includes: ["Technical and delivery review", "Written findings and plan", "Fixed-price fix"],
  },
];

const weeks = [
  {
    title: "Discovery",
    body: "Map the customer’s environment, systems, security requirements and the definition of live. Agree the scope and the go-live date.",
  },
  {
    title: "Build",
    body: "Build the integrations, configuration and customer-specific work your product needs to run in their environment.",
  },
  {
    title: "Integrate",
    body: "Connect to the customer’s identity, data and line-of-business systems, and test end to end with their team.",
  },
  {
    title: "Harden",
    body: "Support the security review, close findings, and add monitoring, alerting and the runbooks to operate it.",
  },
  {
    title: "Go-live",
    body: "Release to production with the customer, run the cutover and stay close while real usage starts.",
  },
  {
    title: "Handover",
    body: "Hand the code, runbooks and knowledge to your team, walk them through it and confirm they can run it without us.",
  },
];

const reasons = [
  {
    title: "One named UK lead",
    body: "The person scoping the work is the person delivering it, and the single point of contact for you and your customer.",
  },
  {
    title: "Fixed scope",
    body: "A written scope, a fixed price and a go-live date agreed before work starts.",
  },
  {
    title: "Built-in handover",
    body: "Every engagement ends with the code, runbooks and knowledge back with your team, so you are never dependent on us.",
  },
  {
    title: "Capacity that scales",
    body: "When an engagement needs more hands, we bring in extra engineers under the same lead and the same scope.",
  },
];

const faqs = [
  {
    question: "How much does it cost?",
    answer:
      "The Go-Live Sprint is 6 weeks from £24,000, or £18,000 for the first two founding clients in exchange for a case study. Fractional FDE starts at £6,000 a month for 2 days a week, or £9,000–£11,000 a month for 3 days a week, with a three-month minimum. Pilot-to-Production Rescue starts with a £6,000–£8,000 review, followed by a fixed-price fix.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do. The client owns all code we write during the engagement, along with the runbooks and documentation that come with it.",
  },
  {
    question: "What is out of scope?",
    answer:
      "Anything not in the written scope we agree at the start. That typically includes changes to your core product roadmap, selling to the customer, and ongoing operational support after handover. If the scope needs to change, we agree it in writing before doing the work.",
  },
  {
    question: "How do you work alongside our team?",
    answer:
      "We work inside your tools and processes, alongside your engineering, product and customer teams, and in front of your customer where you want us to be. Your team stays involved throughout so the handover is a continuation, not a restart.",
  },
  {
    question: "Do you work remotely or on site?",
    answer:
      "Most of the work is remote. Where the customer needs people in the room, on-site days in the UK or EU can be agreed as part of the scope.",
  },
];

export default function GoLivePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Go-Live Sprint: forward-deployed engineering for AI and SaaS vendors",
            serviceType: "Forward-deployed engineering",
            description,
            path,
          }),
          faqSchema(faqs),
          breadcrumbSchema([{ name: "Go-Live Sprint", path }]),
        ]}
      />

      <PageHero
        title="Your next enterprise customer, live in 6 weeks."
        actions={
          <>
            <CtaButton href={cta.bookCall.href} newTab>
              {cta.bookCall.label}
            </CtaButton>
            <CtaButton href={email.href} variant="secondary">
              {email.label}
            </CtaButton>
          </>
        }
      >
        <p>
          Fairpointe is a London forward-deployed engineering practice. We get AI and SaaS vendors&rsquo; enterprise
          customers live without the vendor hiring a full-time FDE, then hand the code, runbooks and knowledge back to
          the vendor&rsquo;s team.
        </p>
      </PageHero>

      {/* Offers */}
      <Section id="offers" aria-labelledby="offers-heading">
        <Grid className="gap-y-8">
          <h2 id="offers-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            Three ways to work with us.
          </h2>
          <p className="type-body col-span-4 text-ink-soft md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2">
            Fixed prices, written scopes and a handover at the end of every engagement.
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
          <h2 id="how-it-works-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
            How the <span className="whitespace-nowrap">Go-Live</span> Sprint works.
          </h2>
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
      <SplitSection id="why-fairpointe" rule={false} title="Why Fairpointe.">
        <p className="type-lede text-ink">
          Forward-deployed engineering without the full-time hire, and without becoming dependent on us.
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

      <FaqSection id="faq" title="Go-Live Sprint questions" faqs={faqs} />

      {/* Closing call to action */}
      <Section id="next-step" tone="navy" aria-labelledby="next-step-heading" className="py-24 md:py-32 lg:py-40">
        <Grid className="gap-y-10">
          <h2 id="next-step-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-7">
            Get your next enterprise customer live.
          </h2>
          <div className="col-span-4 md:col-span-8 lg:col-span-4 lg:col-start-9 lg:pt-2">
            <p className="type-body text-on-navy-soft">
              Tell us about the customer, the product and the date you need to hit. A 20-minute call is enough to tell
              whether the Go-Live Sprint fits.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaButton href={cta.bookCall.href} variant="primary-inverse" newTab>
                {cta.bookCall.label}
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
