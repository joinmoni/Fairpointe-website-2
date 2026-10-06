import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/** Typographic Open Graph card: wordmark, page headline, domain. */
export async function renderOgImage(headline: string) {
  const [medium, semibold] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/manrope-latin-500-normal.woff")),
    readFile(join(process.cwd(), "assets/fonts/manrope-latin-600-normal.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f3ee",
          color: "#0e1626",
          padding: "72px 80px",
          fontFamily: "Manrope",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ position: "relative", width: 34, height: 34, border: "3px solid #0e1626", display: "flex" }}>
            <div style={{ position: "absolute", right: -3, bottom: -3, width: 17, height: 17, background: "#a33f1b" }} />
          </div>
          <div style={{ fontSize: 38, fontWeight: 600, letterSpacing: -1.2 }}>Fairpointe</div>
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 600, lineHeight: 1.04, letterSpacing: -2.8, maxWidth: 980 }}>
          {headline}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid #0e1626",
            paddingTop: 26,
            fontSize: 26,
            fontWeight: 500,
            color: "#3b4354",
          }}
        >
          <div>Enterprise technology, deployed in the UK.</div>
          <div>fairpointe.co.uk</div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Manrope", data: medium, weight: 500, style: "normal" },
        { name: "Manrope", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
