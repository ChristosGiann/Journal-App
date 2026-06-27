import { theme } from "../styles/theme";
import { formatMinutes } from "../utils/time";
import { buildStats } from "../utils/stats";

type StatCardsProps = {
  stats: ReturnType<typeof buildStats>;
};

export function StatCards({ stats }: StatCardsProps) {
  const cards = [
    {
      label: "Tasks",
      value: stats.totalTasks,
      detail: "Total items",
    },
    {
      label: "Done",
      value: stats.doneTasks,
      detail: "Completed",
    },
    {
      label: "Logged Time",
      value: formatMinutes(stats.totalMinutes),
      detail: "Focus time",
    },
    {
      label: "Completion",
      value: `${stats.completionRate}%`,
      detail: "Daily progress",
    },
  ];

  return (
    <section className="mb-8 grid gap-4 md:grid-cols-4">
      {cards.map((card) => (
        <div key={card.label} className={`${theme.card} relative overflow-hidden`}>
          <div className="absolute right-4 top-4 h-14 w-14 rounded-full border border-neutral-300 opacity-40" />
          <div className="absolute right-7 top-7 h-8 w-8 rounded-full bg-neutral-950/10" />

          <p className={theme.muted}>{card.label}</p>
          <p className="mt-2 text-3xl font-bold text-neutral-950">
            {card.value}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
            {card.detail}
          </p>
        </div>
      ))}
    </section>
  );
}