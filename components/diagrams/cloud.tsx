import { cn } from "@/lib/utils";

const layers = [
  "Cloud architecture",
  "Platform engineering",
  "Cloud security",
  "Infrastructure automation",
  "Migration and modernisation",
] as const;

/**
 * One discipline across two clouds: each engineering layer spans both AWS and
 * Microsoft Azure, beneath the applications and AI systems that depend on it.
 */
export function MultiCloudStack({ tone = "paper" }: { tone?: "paper" | "deep" }) {
  return (
    <figure>
      <div
        className="border border-dashed border-ink/40 px-4 py-3.5 text-[0.9375rem] font-medium text-ink-soft sm:px-5"
      >
        Applications and AI systems
      </div>
      <ul aria-label="Capabilities that span both clouds" className="mt-2 border border-ink">
        {layers.map((layer, i) => (
          <li
            key={layer}
            className={cn(
              "px-4 py-3.5 text-[0.9375rem] font-medium tracking-[-0.01em] sm:px-5",
              i > 0 && "border-t border-rule",
              tone === "deep" ? "bg-paper" : "bg-white/50",
            )}
          >
            {layer}
          </li>
        ))}
      </ul>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {["Amazon Web Services", "Microsoft Azure"].map((cloud) => (
          <div key={cloud} className="bg-ink px-4 py-4 text-[0.9375rem] font-semibold tracking-[-0.01em] text-paper sm:px-5">
            {cloud}
          </div>
        ))}
      </div>
      <figcaption className="mt-4 text-[0.9375rem] text-ink-muted">
        The same engineering disciplines applied across both cloud platforms.
      </figcaption>
    </figure>
  );
}
