import type { TechnologyMarkId } from "@/components/marketing/technology-marks";

/**
 * Technologies Fairpointe deploys and integrates. These identify implementation
 * capability only. They are not partners: confirmed partnerships belong in
 * `technologyPartners` in lib/proof.ts and render in their own section.
 *
 * `showMark` controls whether the owner's logo mark is shown beside the name.
 * Only enable it where the owner's brand guidelines permit this use.
 */
export type Technology = {
  id: TechnologyMarkId;
  name: string;
  /** Short capability line shown under the name. */
  capability: string;
  showMark: boolean;
};

export const technologies: Technology[] = [
  {
    id: "openai",
    name: "OpenAI",
    capability: "ChatGPT Enterprise, API integration and agents",
    showMark: true,
  },
  {
    id: "microsoft-azure",
    name: "Microsoft Azure",
    capability: "Azure AI Foundry and enterprise AI infrastructure",
    showMark: true,
  },
  {
    id: "microsoft-copilot",
    name: "Microsoft Copilot",
    capability: "Copilot Studio agents, integrations and governance",
    showMark: true,
  },
  {
    id: "aws",
    name: "AWS",
    capability: "Amazon Bedrock and AI cloud infrastructure",
    showMark: true,
  },
  {
    id: "snowflake",
    name: "Snowflake",
    capability: "Snowflake Cortex and enterprise data implementation",
    showMark: true,
  },
  {
    id: "databricks",
    name: "Databricks",
    capability: "Mosaic AI and enterprise GenAI deployment",
    showMark: true,
  },
  {
    id: "anthropic",
    name: "Anthropic",
    capability: "Claude Enterprise, Claude API and agents",
    showMark: true,
  },
];
