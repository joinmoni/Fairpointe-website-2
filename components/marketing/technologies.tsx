import { cn } from "@/lib/utils";
import { technologies } from "@/lib/technologies";
import { technologyPartners } from "@/lib/proof";
import { technologyMarks } from "./technology-marks";
import { Grid, Section } from "./layout";
import { RuledList } from "./blocks";

function TechnologyMark({ id }: { id: keyof typeof technologyMarks }) {
  const mark = technologyMarks[id];
  return (
    <svg
      aria-hidden
      viewBox={mark.viewBox}
      fill="currentColor"
      fillRule="evenodd"
      className="h-7 w-auto max-w-8 shrink-0 text-ink"
      dangerouslySetInnerHTML={{ __html: mark.body }}
    />
  );
}

/**
 * Technologies Fairpointe deploys and integrates. Each name is real text, so
 * the mark beside it is decorative.
 */
export function TechnologyList({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ul
        aria-label="Technologies we deploy and integrate"
        className="grid grid-cols-2 border-t border-ink sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
      >
        {technologies.map((tech) => (
          <li
            key={tech.id}
            className="border-b border-rule py-6 pr-4 lg:border-b-0 lg:pr-5 lg:not-first:border-l lg:not-first:pl-5"
          >
            {tech.showMark ? <TechnologyMark id={tech.id} /> : null}
            <p className={cn("text-[1.0625rem] font-semibold tracking-[-0.015em] text-ink", tech.showMark && "mt-4")}>
              {tech.name}
            </p>
            <p className="mt-1.5 text-[0.875rem] leading-snug text-ink-muted">{tech.capability}</p>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-[0.8125rem] text-ink-muted">
        Product names and logos are trademarks of their respective owners. They identify technologies Fairpointe works
        with and do not indicate a partnership or endorsement.
      </p>
    </div>
  );
}

/**
 * Confirmed technology partnerships only. Renders nothing until verified
 * entries are added to `technologyPartners` in lib/proof.ts.
 */
export function TechnologyPartnershipsSection() {
  const partners = technologyPartners.filter((p) => p.verified);
  if (partners.length === 0) return null;

  return (
    <Section id="technology-partnerships" aria-labelledby="technology-partnerships-heading">
      <Grid className="gap-y-10">
        <h2 id="technology-partnerships-heading" className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
          Technology Partnerships
        </h2>
        <div className="col-span-4 md:col-span-12 lg:col-span-6 lg:col-start-7">
          <RuledList items={partners.map((p) => `${p.name}: ${p.area}`)} />
        </div>
      </Grid>
    </Section>
  );
}
