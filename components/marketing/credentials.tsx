import { credentials, type Credential } from "@/lib/proof";
import { Grid, Section } from "./layout";

/**
 * Renders verified credentials only. Returns nothing until real entries are
 * added to `lib/proof.ts`.
 */
export function CredentialsSection({
  kinds,
  title = "Credentials",
}: {
  kinds?: Credential["kind"][];
  title?: string;
}) {
  const items = credentials.filter((c) => c.verified && (!kinds || kinds.includes(c.kind)));
  if (items.length === 0) return null;

  return (
    <Section id="credentials" aria-labelledby="credentials-heading">
      <Grid className="gap-y-10">
        <h2 id="credentials-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
          {title}
        </h2>
        <ul className="col-span-4 border-t border-ink md:col-span-12 lg:col-span-6 lg:col-start-7">
          {items.map((item) => (
            <li key={item.name} className="flex items-baseline justify-between gap-6 border-b border-rule py-5">
              <span className="text-[1.0625rem] font-semibold tracking-[-0.01em]">
                {item.verificationUrl ? (
                  <a href={item.verificationUrl} className="underline decoration-ink/30 underline-offset-[6px] hover:decoration-ink">
                    {item.name}
                  </a>
                ) : (
                  item.name
                )}
              </span>
              <span className="text-[0.9375rem] text-ink-muted">{item.issuer}</span>
            </li>
          ))}
        </ul>
      </Grid>
    </Section>
  );
}
