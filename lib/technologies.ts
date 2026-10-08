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
  showMark: boolean;
};

export const technologies: Technology[] = [
  {
    id: "openai",
    name: "OpenAI",
    showMark: true,
  },
  {
    id: "microsoft-azure",
    name: "Microsoft Azure",
    showMark: true,
  },
  {
    id: "microsoft-copilot",
    name: "Microsoft Copilot",
    showMark: true,
  },
  {
    id: "aws",
    name: "AWS",
    showMark: true,
  },
  {
    id: "snowflake",
    name: "Snowflake",
    showMark: true,
  },
  {
    id: "databricks",
    name: "Databricks",
    showMark: true,
  },
  {
    id: "anthropic",
    name: "Anthropic",
    showMark: true,
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    showMark: true,
  },
];
