/** Fairpointe positioned between technology suppliers and public-sector buyers. */
export function TwoSidedDiagram() {
  const sides = [
    { title: "Technology suppliers", body: "Opportunity research and delivery support" },
    { title: "Public-sector organisations", body: "Evaluation and implementation support" },
  ];

  return (
    <figure aria-label="Fairpointe supports technology suppliers and public-sector organisations within an agreed scope">
      <div className="grid items-stretch gap-0 md:grid-cols-[1fr_auto_1fr]">
        <Side {...sides[0]} />
        <div className="flex flex-col items-center md:flex-row">
          <span aria-hidden className="h-8 w-px bg-ink/50 md:h-px md:w-10 lg:w-16" />
          <div className="bg-ink px-6 py-4 text-center text-paper">
            <p className="text-[1.0625rem] font-semibold tracking-[-0.015em]">Fairpointe</p>
            <p className="mt-1 text-[0.875rem] leading-snug text-paper/75">Agreed commercial and technical scope</p>
          </div>
          <span aria-hidden className="h-8 w-px bg-ink/50 md:h-px md:w-10 lg:w-16" />
        </div>
        <Side {...sides[1]} />
      </div>
    </figure>
  );
}

function Side({ title, body }: { title: string; body: string }) {
  return (
    <div className="border border-ink bg-paper px-6 py-6 md:py-8">
      <p className="text-[1.125rem] font-semibold tracking-[-0.015em]">{title}</p>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}
