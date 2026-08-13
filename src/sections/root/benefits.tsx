import CrosshairCorner from "./crosshair-corners";
import SectionHeader from "./section-header";

const info = {
    title: "/ 004 — Benefits of Us",
    subtitle: (
        <>
            Benefits Driving Results <br/>
            Consistently
        </>
    ),
};

type GridCellData = {
    label: string;
    number: string;
    large?: boolean;
    stat?: string;
    statUnit?: string;
    heading: string;
    description?: string;
    subtext?: string;
    decoration?: boolean;
}

const cells: GridCellData[] = [
    {
        label: "ENGINEERING",
        number: "01",
        large: true,
        stat: "99.9",
        statUnit: "%",
        heading: "Fast, and built to stay fast",
        description: "Speed isn't a final check-box — we watch it at every stage, not just before launch.",
    },
    {
        label: "SPEED",
        number: "02",
        stat: "<100ms",
        heading: "Feels instant to use",
    },
    {
        label: "VELOCITY",
        number: "03",
        stat: "24H",
        heading: "Avg. response time",
    },
    {
        label: "SCALE",
        number: "04",
        heading: "Built to grow with you",
        subtext: "No rewrites. No surprises.",
        decoration: true,
    },
    {
        label: "UI/UX",
        number: "05",
        stat: "1px",
        heading: "Precise, down to the pixel",
    },
];

function GridDecoration() {
    return (
        <svg className="absolute -right-4 -bottom-4 text-primary opacity-[0.06]" width="140" height="140" viewBox="0 0 140 140" fill="none">
            {[35, 70, 105].map((pos) => (
                <line key={`h-${pos}`} x1="0" y1={pos} x2="140" y2={pos} stroke="currentColor" strokeWidth="1" />
            ))}
            {[35, 70, 105].map((pos) => (
                <line key={`v-${pos}`} x1={pos} y1="0" x2={pos} y2="140" stroke="currentColor" strokeWidth="1" />
            ))}
        </svg>
    );
}

function GridCell({ label, number, large, stat, statUnit, heading, description, subtext, decoration }: GridCellData) {
    return (
        <div className={`relative not-last:border-b border-border bg-surface p-6 sm:p-10 flex flex-col justify-between ${large ? "lg:col-span-2 lg:row-span-2 min-h-70" : "min-h-45"}`}>
            <div className="flex items-start justify-between relative">
                <span className="font-mono text-[11px] px-2 py-1 rounded-full border border-border text-muted">
                    [{label}]
                </span>
                <span className="font-mono text-[13px] text-muted">{number}</span>
            </div>

            <div className="relative">
                {stat && (
                    <div className={`font-mono tracking-[-0.03em] text-foreground ${large ? "text-6xl sm:text-7xl" : "text-4xl"}`}>
                        {stat}
                        {statUnit && <span className="text-3xl align-top">{statUnit}</span>}
                    </div>
                )}

                <h3 className={`tracking-[-0.01em] text-foreground font-medium ${large ? "mt-4 text-lg" : "mt-2 text-[15px]"}`}>
                    {heading}
                </h3>

                {description && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-sm">{description}</p>
                )}
                {subtext && <p className="mt-1 font-mono text-xs text-muted">{subtext}</p>}
            </div>

            {decoration && <GridDecoration />}
        </div>
    );
}

export default function Benefits() {
    return (
        <section className="w-full h-fit px-10 py-16 border-b border-border">
            <div className="flex flex-col justify-center items-start text-left gap-y-12 left-0 right-0 max-w-8xl mx-auto">
                <SectionHeader info={info} />
                <div className="relative isolate grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 w-full h-fit bg-surface border border-border">
                    {/* True crosshair corners */}
                    <CrosshairCorner />
                    {cells.map((cell) => (
                        <GridCell key={cell.number} {...cell} />
                    ))}
                </div>
            </div>
        </section>
    );
}