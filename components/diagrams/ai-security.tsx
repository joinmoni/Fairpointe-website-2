import { cn } from "@/lib/utils";

export const deploymentStages = [
  {
    title: "Evaluate",
    body: "Validate the technology against the real business and technical requirement.",
  },
  {
    title: "Integrate",
    body: "Connect it with your existing applications, data, identity and infrastructure.",
  },
  {
    title: "Deploy",
    body: "Move the solution into a secure, production-ready environment.",
  },
  {
    title: "Operate",
    body: "Support, optimise and extend the deployment as requirements evolve.",
  },
] as const;

/** Compact vertical index of the four stages, used beside the AI & Security hero. */
export function StageIndex() {
  return (
    <ol aria-label="Approach" className="relative border-l border-rule-strong pl-8">
      {deploymentStages.map((stage, i) => (
        <li key={stage.title} className="relative py-3.5">
          <span
            aria-hidden
            className={cn(
              "absolute top-1/2 -left-[37px] size-[9px] -translate-y-1/2 border border-ink bg-paper",
              i === 0 && "bg-ink",
            )}
          />
          <span className="flex items-baseline gap-4">
            <span className="numeral text-[0.875rem] text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-[1.375rem] font-semibold tracking-[-0.02em]">{stage.title}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 8 8" aria-hidden className={cn("size-2 shrink-0", className)}>
      <path d="M0 0 L8 4 L0 8 Z" fill="currentColor" />
    </svg>
  );
}

/** Evaluate → Integrate → Deploy → Operate, drawn as a continuous loop. */
export function ControlLoop() {
  return (
    <figure>
      {/* Desktop and tablet: horizontal track with return path */}
      <div className="hidden md:block">
        {/* Return path from Operate back to Evaluate */}
        <div aria-hidden className="relative h-8">
          <div className="absolute top-0 right-0 -bottom-[10px] left-[5.5px] border-t border-r border-l border-dashed border-ink/45" />
          <svg viewBox="0 0 8 8" className="absolute -bottom-[2px] left-[2px] z-10 size-2 rotate-90 text-ink/60">
            <path d="M0 0 L8 4 L0 8 Z" fill="currentColor" />
          </svg>
        </div>
        <ol className="grid grid-cols-4 gap-x-6 lg:gap-x-8">
          {deploymentStages.map((stage, i) => (
            <li key={stage.title} className="relative">
              <div aria-hidden className="relative z-10 flex h-5 items-center">
                <span className={cn("size-3 shrink-0 border border-ink", i === 0 ? "bg-ink" : "bg-paper")} />
                <span className="h-px flex-1 bg-ink/70" />
                {i < deploymentStages.length - 1 ? (
                  <Arrow className="-ml-px text-ink/70" />
                ) : (
                  <span className="h-px w-0" />
                )}
              </div>
              <p className="numeral mt-8 text-[0.875rem] text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="type-h3 mt-3">{stage.title}</h3>
              <p className="type-body mt-4 max-w-[17rem] text-ink-soft">{stage.body}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Mobile: vertical sequence */}
      <ol className="relative md:hidden">
        <span aria-hidden className="absolute top-2 bottom-2 left-[5.5px] w-px bg-ink/40" />
        {deploymentStages.map((stage, i) => (
          <li key={stage.title} className="relative pb-10 pl-10 last:pb-0">
            <span
              aria-hidden
              className={cn("absolute top-[0.45rem] left-0 size-3 border border-ink", i === 0 ? "bg-ink" : "bg-paper")}
            />
            <p className="numeral text-[0.875rem] text-accent">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="type-h3 mt-2">{stage.title}</h3>
            <p className="type-body mt-3 text-ink-soft">{stage.body}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}

const accessPaths = [
  {
    workload: "Customer support agent",
    identity: "OAuth token",
    system: "CRM",
    access: "Read and write, every record",
  },
  {
    workload: "Coding agent",
    identity: "GitHub App token",
    system: "Source repositories",
    access: "Write, every repository",
  },
  {
    workload: "Data pipeline",
    identity: "Service account key",
    system: "Data warehouse",
    access: "Project owner",
  },
  {
    workload: "MCP server",
    identity: "Long-lived API key",
    system: "Payments API",
    access: "Unrestricted scope",
  },
] as const;

const pathColumns = [
  { key: "workload", label: "Agent or workload" },
  { key: "identity", label: "Identity used" },
  { key: "system", label: "System reached" },
  { key: "access", label: "Effective access" },
] as const;

/** Illustrative access paths: how each credential connects an autonomous system to company data. */
export function AccessPaths() {
  return (
    <figure>
      <div role="table" aria-label="Illustrative access paths" className="border-t border-ink">
        <div role="rowgroup" className="hidden md:block">
          <div role="row" className="grid grid-cols-4 gap-x-6 border-b border-rule py-3.5">
            {pathColumns.map((col) => (
              <span key={col.key} role="columnheader" className="text-[0.875rem] font-medium text-ink-muted">
                {col.label}
              </span>
            ))}
          </div>
        </div>
        <div role="rowgroup">
          {accessPaths.map((path) => (
            <div
              key={path.workload}
              role="row"
              className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-b border-rule py-5 md:grid-cols-4 md:gap-x-6"
            >
              {pathColumns.map((col, i) => (
                <div
                  key={col.key}
                  role="cell"
                  className="col-span-2 grid grid-cols-subgrid items-center md:col-span-1 md:flex md:items-center md:gap-3"
                >
                  <span className="text-[0.8125rem] font-medium text-ink-muted md:hidden">{col.label}</span>
                  <span
                    className={cn(
                      "flex min-w-0 items-center gap-3 text-[0.9375rem] font-medium tracking-[-0.01em] md:flex-1",
                      col.key === "access" ? "text-accent" : "text-ink",
                    )}
                  >
                    <span className="min-w-0">{path[col.key]}</span>
                    {i < pathColumns.length - 1 ? (
                      <span aria-hidden className="ml-auto hidden flex-1 items-center md:flex">
                        <span className="h-px min-w-4 flex-1 bg-ink/35" />
                        <Arrow className="-ml-px text-ink/45" />
                      </span>
                    ) : null}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-5 text-[0.9375rem] text-ink-muted">
        Illustrative access paths. Each credential is a route from an autonomous system to company data.
      </figcaption>
    </figure>
  );
}

export const environments = [
  { name: "AWS", identities: "IAM roles, access keys, instance and function roles" },
  { name: "Microsoft Azure", identities: "Managed identities, service principals, Key Vault secrets" },
  { name: "Microsoft Entra", identities: "App registrations, service principals, OAuth consent grants" },
  { name: "GitHub", identities: "GitHub Apps, Actions tokens, deploy keys, personal access tokens" },
  { name: "Kubernetes", identities: "Service accounts, workload identity bindings, mounted secrets" },
  { name: "SaaS applications", identities: "OAuth integrations, API tokens, connected applications" },
  { name: "MCP infrastructure", identities: "MCP server credentials, tool permissions, delegated tokens" },
] as const;

export function EnvironmentCoverage() {
  return (
    <table className="w-full border-collapse text-left">
      <caption className="sr-only">Environments and the non-human identities examined in each</caption>
      <thead className="hidden md:table-header-group">
        <tr className="border-t border-ink">
          <th scope="col" className="w-[38%] py-3.5 pr-6 text-[0.875rem] font-medium text-ink-muted">
            Environment
          </th>
          <th scope="col" className="py-3.5 text-[0.875rem] font-medium text-ink-muted">
            Non-human identities in scope
          </th>
        </tr>
      </thead>
      <tbody className="border-t border-ink md:border-t-0">
        {environments.map((env) => (
          <tr key={env.name} className="block border-t border-rule py-5 md:table-row md:py-0">
            <th
              scope="row"
              className="block text-[1.1875rem] font-semibold tracking-[-0.015em] md:table-cell md:py-5 md:pr-6 md:align-baseline"
            >
              {env.name}
            </th>
            <td className="mt-1.5 block text-[0.9375rem] leading-relaxed text-ink-soft md:mt-0 md:table-cell md:py-5 md:align-baseline">
              {env.identities}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
