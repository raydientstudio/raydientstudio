import CrosshairCorner from "./crosshair-corners";
import SectionHeader from "./section-header";

const info = {
    title: "/ 006 — Performance Metrics",
    subtitle: (
        <>
            Performance Powered by <br/>
            Data Insights
        </>
    ),
};

type Metric = {
    value: string;
    unit?: string;
    label: string;
}

const metrics: Metric[] = [
    {
        value: ">90",
        unit: "/100",
        label: "Lighthouse performance score",
    },
    {
        value: "<1",
        unit: "ms",
        label: "Median interaction latency",
    },
    {
        value: "0",
        label: "Unhandled runtime errors, on average",
    },
];

function MetricCard({ value, unit, label }: Metric) {
    return (
        <div className="p-6 sm:p-10 flex flex-col justify-start items-start text-left w-full h-fit not-last:border-b border-border">
            <span className="font-mono text-5xl sm:text-6xl tracking-tighter text-foreground">
                {value}
                {unit && <span className="text-2xl align-top">{unit}</span>}
            </span>
            <span className="mt-4 text-sm text-muted-foreground leading-relaxed">{label}</span>
        </div>
    );
}

export default function PerformanceMetrics() {
    return (
        <section className="w-full h-fit px-6 md:px-10 py-16 border-b border-border">
            <div className="flex flex-col justify-center items-start text-left gap-y-12 left-0 right-0 max-w-8xl mx-auto">
                {/* Section heading */}
                <SectionHeader info={info} />
                {/* Metrics grid with corner accents */}
                <div className="relative isolate border border-border bg-surface grid grid-cols-1 sm:grid-cols-3 w-full">
                    {/* True crosshair corners */}
                    <CrosshairCorner />
                    {metrics.map((metric) => (
                        <MetricCard key={metric.label} {...metric} />
                    ))}
                </div>
            </div>
        </section>
    );
}