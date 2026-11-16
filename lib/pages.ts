/** Indexable pages. Used by sitemap.xml and Open Graph images. */
export const pages = [
  { path: "/", title: "Enterprise technology, deployed in the UK.", priority: 1 },
  { path: "/ai-security", title: "AI agent security across your cloud and business systems.", priority: 0.9 },
  { path: "/go-live", title: "Get your next enterprise customer into production.", priority: 0.9 },
  { path: "/uk-market-entry", title: "Prove the UK before building the UK team.", priority: 0.9 },
  { path: "/cloud-infrastructure", title: "Cloud infrastructure built for production workloads.", priority: 0.7 },
  { path: "/public-sector", title: "Technical delivery for UK public-sector requirements.", priority: 0.8 },
  { path: "/about", title: "Built around implementation.", priority: 0.6 },
  { path: "/privacy", title: "Privacy Policy", priority: 0.3 },
  { path: "/contact", title: "Tell us what you’re working on.", priority: 0.6 },
] as const;
