import { cn } from "@/lib/utils";

type Lane = "commercial" | "technical";

export const phases: {
  title: string;
  body: string;
  workstreams: string[];
  lanes: Lane[];
}[] = [
  {
    title: "Market Development",
    body: "Identify target accounts, buying signals, relevant partners and opportunities across the UK enterprise and public sectors.",
    workstreams: ["Target accounts", "Buying signals", "Partners", "Public-sector opportunities"],
    lanes: ["commercial"],
  },
  {
    title: "Technical Pre-sales",
    body: "Support discovery, technical conversations, demonstrations and customer evaluations with UK-based capability.",
    workstreams: ["Discovery", "Technical conversations", "Demonstrations", "Evaluations"],
    lanes: ["commercial", "technical"],
  },
  {
    title: "Proof of Concept",
    body: "Work with customers and your product team to validate the technology against real requirements and environments.",
    workstreams: ["Requirements", "Validation", "Customer environment"],
    lanes: ["commercial", "technical"],
  },
  {
    title: "Deployment & Integration",
    body: "Implement and integrate your product within the customer’s existing cloud, identity, security, data and engineering environment.",
    workstreams: ["Implementation", "Integration", "Cloud and identity", "Security and data"],
    lanes: ["technical"],
  },
  {
    title: "Customer Engineering",
    body: "Work directly with customer technical teams to resolve deployment challenges and move successful implementations into production.",
    workstreams: ["Customer technical teams", "Deployment challenges", "Production"],
    lanes: ["technical"],
  },
  {
    title: "Ongoing Support",
    body: "Provide local technical continuity after go-live and help identify opportunities for expansion.",
    workstreams: ["Local support", "Technical continuity", "Expansion"],
    lanes: ["commercial", "technical"],
  },
];

const laneLabels: Record<Lane, string> = { commercial: "Commercial", technical: "Technical" };

function LaneBar({ active, lane, first, last }: { active: boolean; lane: Lane; first: boolean; last: boolean }) {
  return (
    <div className="relative flex justify-center" aria-hidden>
      {active ? (
        <span
          className={cn(
            "absolute w-[3px]",
            lane === "commercial" ? "bg-ink" : "bg-accent",
            first ? "top-9" : "-top-px",
            last ? "bottom-9" : "-bottom-px",
          )}
        />
      ) : (
        <span className="absolute inset-y-0 w-px bg-rule" />
      )}
    </div>
  );
}

/**
 * The six-phase UK operating model as a matrix. The two right-hand lanes show
 * where commercial and technical work run, and where they overlap.
 */
export function OperatingModel() {
  return (
    <div>
      <div className="hidden grid-cols-12 gap-x-8 border-b border-ink pb-3.5 lg:grid">
        <span className="col-span-4 text-[0.875rem] font-medium text-ink-muted">Phase</span>
        <span className="col-span-4 text-[0.875rem] font-medium text-ink-muted">What happens</span>
        <span className="col-span-2 text-[0.875rem] font-medium text-ink-muted">Workstreams</span>
        <span className="col-span-2 grid grid-cols-2 text-center text-[0.875rem] font-medium text-ink-muted">
          <span>Commercial</span>
          <span>Technical</span>
        </span>
      </div>
      <ol className="border-t border-ink lg:border-t-0">
        {phases.map((phase, i) => {
          const isFirst = (lane: Lane) => phase.lanes.includes(lane) && !phases[i - 1]?.lanes.includes(lane);
          const isLast = (lane: Lane) => phase.lanes.includes(lane) && !phases[i + 1]?.lanes.includes(lane);
          return (
            <li
              key={phase.title}
              id={`phase-${i + 1}`}
              className="grid grid-cols-4 gap-x-5 gap-y-5 border-b border-rule py-9 md:grid-cols-12 md:gap-x-6 lg:gap-x-8 lg:py-0"
            >
              <div className="col-span-4 flex items-baseline gap-5 md:col-span-5 lg:col-span-4 lg:py-9">
                <span className="numeral text-[0.9375rem] text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="type-h3">{phase.title}</h3>
              </div>
              <p className="type-body col-span-4 text-ink-soft md:col-span-7 lg:col-span-4 lg:py-9">{phase.body}</p>
              <ul className="col-span-4 flex flex-wrap gap-x-4 gap-y-1.5 md:col-span-7 md:col-start-6 lg:col-span-2 lg:col-start-auto lg:block lg:space-y-1.5 lg:py-9">
                {phase.workstreams.map((w) => (
                  <li key={w} className="text-[0.9375rem] font-medium text-ink">
                    {w}
                  </li>
                ))}
              </ul>
              <p className="col-span-4 text-[0.875rem] font-medium text-ink-muted md:col-span-7 md:col-start-6 lg:hidden">
                {phase.lanes.map((l, j) => (j === 0 ? laneLabels[l] : laneLabels[l].toLowerCase())).join(" and ")}
              </p>
              <div className="hidden lg:col-span-2 lg:grid lg:grid-cols-2">
                <LaneBar
                  lane="commercial"
                  active={phase.lanes.includes("commercial")}
                  first={isFirst("commercial")}
                  last={isLast("commercial")}
                />
                <LaneBar
                  lane="technical"
                  active={phase.lanes.includes("technical")}
                  first={isFirst("technical")}
                  last={isLast("technical")}
                />
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/** Compact horizontal sequence for the homepage, on a navy band. */
export function MarketEntrySequence() {
  return (
    <ol className="grid grid-cols-1 border-t border-rule-navy sm:grid-cols-2 md:grid-cols-6">
      {phases.map((phase, i) => (
        <li
          key={phase.title}
          className={cn(
            "flex items-baseline gap-4 border-b border-rule-navy py-4 sm:block md:border-b-0 md:py-6 md:pr-6",
            i > 0 && "md:border-l md:pl-6",
          )}
        >
          <span className="numeral block text-[0.875rem] text-accent-on-navy">{String(i + 1).padStart(2, "0")}</span>
          <span className="block text-[1.0625rem] sm:mt-2 font-semibold tracking-[-0.015em] text-on-navy">
            {phase.title}
          </span>
        </li>
      ))}
    </ol>
  );
}
