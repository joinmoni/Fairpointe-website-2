/** Indexable pages. Used by sitemap.xml and Open Graph images. */
export const pages = [
  { path: "/", title: "Enterprise technology, deployed in the UK.", priority: 1 },
  { path: "/ai-security", title: "Give your AI agents the access they need to work securely.", priority: 0.9 },
  { path: "/go-live", title: "Get your next enterprise customer into production.", priority: 0.9 },
  { path: "/uk-market-entry", title: "Build UK momentum with commercial and technical delivery.", priority: 0.9 },
  { path: "/cloud-infrastructure", title: "Build the cloud foundation for your next production launch.", priority: 0.7 },
  { path: "/public-sector", title: "Put technology to work for public services.", priority: 0.8 },
  { path: "/about", title: "Engineering expertise. Clear delivery ownership.", priority: 0.6 },
  { path: "/privacy", title: "Privacy Policy", priority: 0.3 },
  { path: "/contact", title: "Let’s move your project forward.", priority: 0.6 },
] as const;
