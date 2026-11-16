import { cn } from "@/lib/utils";

const layers = [
  {
    title: "Cloud architecture",
    body: "Define environments, networking, deployment patterns and operational requirements.",
  },
  {
    title: "Platform engineering",
    body: "Create repeatable environments and deployment processes for your application teams.",
  },
  {
    title: "Cloud security",
    body: "Configure workload access, secrets handling and infrastructure controls within the agreed scope.",
  },
  {
    title: "Infrastructure automation",
    body: "Manage infrastructure and configuration through version-controlled, repeatable processes.",
  },
  {
    title: "Migration and modernisation",
    body: "Plan and implement workload changes, including testing, cutover and rollback arrangements.",
  },
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
            key={layer.title}
            className={cn(
              "px-4 py-3.5 sm:px-5",
              i > 0 && "border-t border-rule",
              tone === "deep" ? "bg-paper" : "bg-white/50",
            )}
          >
            <p className="text-[0.9375rem] font-medium tracking-[-0.01em]">{layer.title}</p>
            <p className="mt-1 text-[0.875rem] leading-snug text-ink-soft">{layer.body}</p>
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
        The implementation is designed around your workloads, existing systems and operational requirements.
      </figcaption>
    </figure>
  );
}
