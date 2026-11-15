export const site = {
  name: "Fairpointe",
  url: "https://fairpointe.co.uk",
  email: "hello@fairpointe.co.uk",
  /** Founder's direct address, shown alongside the booking link. */
  directEmail: "adebola@fairpointe.co.uk",
  /** Intro call booking page. Opens in a new tab. */
  bookingUrl: "https://cal.com/fairpointe/intro",
  tagline: "Enterprise technology, deployed in the UK.",
  description:
    "Fairpointe helps UK organisations evaluate and deploy specialist enterprise technology, and helps international technology companies enter, sell and deliver in the UK.",
  locale: "en_GB",
} as const;

/**
 * Registered company details for the footer, privacy policy and JSON-LD. Add
 * only verified values (for example from Companies House). Empty values are
 * not rendered. No postal address is published, so `registeredOffice` stays
 * empty and nothing renders it.
 */
export const company: {
  legalName: string;
  companyNumber: string;
  registeredOffice: string;
  linkedinUrl: string;
  privacyPolicyHref: string;
} = {
  legalName: "Fairpointe Ltd",
  companyNumber: "17430888",
  registeredOffice: "",
  linkedinUrl: "",
  privacyPolicyHref: "/privacy",
};

/** Enquiry types offered on the contact form. Slugs are used in `/contact?enquiry=`. */
export const enquiryTypes = [
  {
    slug: "go-live",
    label: "Go-Live Sprint / FDE",
    hint: "Tell us about your product, the enterprise customer you need live and your target go-live date.",
  },
  {
    slug: "technology-project",
    label: "Technology project",
    hint: "Tell us about the problem, the environment and what success looks like.",
  },
  {
    slug: "uk-market-entry",
    label: "UK market entry",
    hint: "Tell us about your technology, your existing customers and what you want to achieve in the UK.",
  },
  {
    slug: "public-sector",
    label: "Public sector",
    hint: "Tell us about the organisation, requirement and outcome you are working towards.",
  },
  {
    slug: "ai-security",
    label: "AI & security",
    hint: "Tell us about your AI, cloud and machine identity environment.",
  },
  {
    slug: "cloud-infrastructure",
    label: "Cloud & infrastructure",
    hint: "Tell us about your cloud environment and what you are trying to build or improve.",
  },
  {
    slug: "something-else",
    label: "Something else",
    hint: "Tell us what you are working on.",
  },
] as const;

export type EnquirySlug = (typeof enquiryTypes)[number]["slug"];

export function contactHref(enquiry?: EnquirySlug) {
  return enquiry ? `/contact?enquiry=${enquiry}` : "/contact";
}

/** Primary calls to action. Keep wording consistent across the site. */
export const cta = {
  project: { label: "Discuss a project", href: contactHref("technology-project") },
  ukMarket: { label: "Enter the UK market", href: contactHref("uk-market-entry") },
  speak: { label: "Speak to Fairpointe", href: "/contact" },
  goLive: { label: "Get a customer live", href: "/go-live" },
  bookCall: { label: "Book a 20-minute call", href: site.bookingUrl },
} as const;

export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = { label: string; items: NavLink[] };
export type NavEntry = NavLink | NavGroup;

/**
 * Global navigation. New sections (Technology Partners, Customer Stories,
 * Procurement, Insights) are added here and appear in the header, mobile menu
 * and footer without layout changes.
 */
export const navigation: NavEntry[] = [
  {
    label: "Solutions",
    items: [
      {
        label: "AI & Security",
        href: "/ai-security",
        description: "Evaluate and deploy emerging AI and security technology",
      },
      {
        label: "Cloud & Infrastructure",
        href: "/cloud-infrastructure",
        description: "Cloud foundations across AWS, Microsoft Azure and hybrid environments",
      },
    ],
  },
  { label: "Public Sector", href: "/public-sector" },
  {
    label: "Technology Companies",
    items: [
      {
        label: "FDEaaS",
        href: "/go-live",
        description: "FDE as a service: forward-deployed engineers to get your enterprise customers live",
      },
      {
        label: "UK Market Entry",
        href: "/uk-market-entry",
        description: "A UK commercial and technical partner for international technology companies",
      },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: "/about", description: "Built by operators" },
      { label: "Contact", href: "/contact", description: "Speak to Fairpointe" },
    ],
  },
];

export function isGroup(entry: NavEntry): entry is NavGroup {
  return "items" in entry;
}
