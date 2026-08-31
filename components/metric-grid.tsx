import type { Metric } from "@/src/data/projects";

export function MetricGrid({ metrics, compact = false }: { metrics: Metric[]; compact?: boolean }) {
  return (
    <dl className={compact ? "metric-grid metric-grid-compact" : "metric-grid"}>
      {metrics.map((metric) => (
        <div className="metric" key={`${metric.value}-${metric.label}`}>
          <dt>{metric.label}</dt>
          <dd>{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}
