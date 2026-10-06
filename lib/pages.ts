/** Indexable pages. Used by sitemap.xml and Open Graph images. */
export const pages = [
  { path: "/", title: "Enterprise technology, delivered in the UK.", priority: 1 },
  { path: "/ai-security", title: "Your AI agents have identities. Secure them.", priority: 0.9 },
  { path: "/uk-market-entry", title: "Prove the UK before hiring the UK.", priority: 0.9 },
  { path: "/cloud-infrastructure", title: "Cloud infrastructure built for critical workloads.", priority: 0.7 },
  { path: "/public-sector", title: "Technology delivery for UK public services.", priority: 0.8 },
  { path: "/about", title: "Built by operators.", priority: 0.6 },
  { path: "/contact", title: "Speak to Fairpointe.", priority: 0.6 },
] as const;
