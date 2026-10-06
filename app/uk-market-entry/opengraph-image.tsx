import { pages } from "@/lib/pages";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

const page = pages.find((p) => p.path === "/uk-market-entry")!;

export const alt = page.title;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage(page.title);
}
