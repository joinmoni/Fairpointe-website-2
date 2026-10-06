/**
 * Verified proof points. Every list here is intentionally empty.
 *
 * Add an entry only once it is genuine and verifiable (for example a
 * certificate number, a framework listing or a signed reference). Components
 * that read these lists render nothing while they are empty, so no page needs
 * to change when proof is added.
 */

export type Credential = {
  /** e.g. "Cyber Essentials Plus", "ISO 27001", "G-Cloud 14" */
  name: string;
  kind: "certification" | "framework" | "cloud-partner" | "accreditation";
  /** Issuer or framework owner, e.g. "IASME", "Crown Commercial Service" */
  issuer: string;
  /** Public verification link where one exists */
  verificationUrl?: string;
  verified: true;
};

export type TechnologyPartner = {
  name: string;
  /** Where the technology fits, e.g. "Non-human identity security" */
  area: string;
  url: string;
  verified: true;
};

export type CustomerStory = {
  slug: string;
  customer: string;
  title: string;
  summary: string;
  sector: "enterprise" | "public-sector" | "technology-company";
  approvedForPublication: true;
};

export const credentials: Credential[] = [];
export const technologyPartners: TechnologyPartner[] = [];
export const customerStories: CustomerStory[] = [];
