/** Indexable pages. Used by sitemap.xml and Open Graph images. */
export const pages = [
  { path: "/", title: "Enterprise technology, deployed in the UK.", priority: 1 },
  { path: "/ai-security", title: "Deploy emerging AI and security technology with confidence.", priority: 0.9 },
  { path: "/uk-market-entry", title: "Prove the UK before building the UK team.", priority: 0.9 },
  { path: "/cloud-infrastructure", title: "Cloud infrastructure built for critical workloads.", priority: 0.7 },
  { path: "/public-sector", title: "Specialist technology for the UK public sector.", priority: 0.8 },
  { path: "/about", title: "Built by operators.", priority: 0.6 },
  { path: "/contact", title: "Let’s discuss what you’re trying to deploy or bring to the UK.", priority: 0.6 },
] as const;
