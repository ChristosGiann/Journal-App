import { theme } from "../styles/theme";
import { formatMinutes } from "../utils/time";
import { buildStats } from "../utils/stats";

type CategoryStatsProps = {
  stats: ReturnType<typeof buildStats>;
};

export function CategoryStats({ stats }: CategoryStatsProps) {
  return (
    <div className={theme.card}>
      <h3 className={`${theme.sectionTitle} ${theme.brushUnderline}`}>
        Ώρες ανά κατηγορία
      </h3>

      <div className="mt-5 space-y-4">
        {stats.minutesByCategory.map((item) => (
          <div key={item.category}>
            <div className="mb-1 flex justify-between text-sm font-semibold text-neutral-700">
              <span>{item.category}</span>
              <span>{formatMinutes(item.total)}</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full border border-neutral-300 bg-stone-200">
              <div
                className="h-full rounded-full bg-neutral-950"
                style={{
                  width: `${Math.min((item.total / 480) * 100, 100)}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}