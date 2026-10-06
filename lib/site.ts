export const site = {
  name: "Fairpointe",
  url: "https://fairpointe.co.uk",
  email: "hello@fairpointe.co.uk",
  tagline: "Enterprise technology, delivered in the UK.",
  description:
    "Fairpointe is a UK technology company helping organisations adopt specialist cloud, security and AI technology and helping international technology companies enter the UK market.",
  locale: "en_GB",
} as const;

/** Enquiry types offered on the contact form. Slugs are used in `/contact?enquiry=`. */
export const enquiryTypes = [
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
        description: "AI agent and non-human identity security",
      },
      {
        label: "Cloud & Infrastructure",
        href: "/cloud-infrastructure",
        description: "Architecture and operations across AWS and Microsoft Azure",
      },
    ],
  },
  { label: "Public Sector", href: "/public-sector" },
  {
    label: "Technology Companies",
    items: [
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
