import SectionHeader from "./section-header";

const info = {
    title: "/ 007 — Engineering Pipeline",
    subtitle: (
        <>
            A Streamlined Workflow <br/>
            That Delivers
        </>
    ),
};

type Step = {
    number: string;
    title: string;
    description: string;
}

const steps: Step[] = [
    {
        number: "01",
        title: "Discovery",
        description: "Requirements, constraints, and technical scope defined before a single line of code is written.",
    },
    {
        number: "02",
        title: "Architecture",
        description: "System design, component structure, and data flow mapped out before implementation begins.",
    },
    {
        number: "03",
        title: "Engineering",
        description: "Iterative builds with regular checkpoints, tested against real devices and real data.",
    },
    {
        number: "04",
        title: "Deployment",
        description: "Shipped, monitored, and handed off with documentation your team can actually use.",
    },
];

function StepItem({ number, title, description }: Step) {
    return (
        <div className="flex flex-row sm:flex-col justify-start items-start w-full h-fit gap-x-6">
            <div className="block items-center w-fit h-fit">
                <span className="relative z-20 flex items-center justify-center w-10 h-10 rounded-full border border-border bg-surface font-mono text-sm text-foreground">
                    {number}
                </span>
            </div>
            <div className="flex flex-col items-start w-full h-fit">
                <h3 className="mt-1.5 sm:mt-6 text-lg font-mono font-semibold tracking-tighter text-foreground">{
                    title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default function EngineeringPipeline() {
    return (
        <section className="w-full h-fit px-6 md:px-10 py-16 border-b border-border">
            <div className="flex flex-col justify-center items-start text-left gap-y-12 left-0 right-0 max-w-8xl mx-auto">
                {/* Section heading */}
                <SectionHeader info={info} />
                {/* Stepper */}
                <div className="relative grid grid-cols-1 sm:grid-cols-4 gap-y-12 sm:gap-y-0 sm:gap-x-6">
                    {/* Connecting line (desktop only) */}
                    <span className="hidden sm:block absolute top-5 left-0 right-0 h-px w-full bg-border z-10"></span>
                    <span className="block sm:hidden absolute left-5 top-0 bottom-0 h-full w-px bg-border z-10"></span>
                    {steps.map((step) => (
                        <StepItem key={step.number} {...step} />
                    ))}
                </div>
            </div>
        </section>
    );
}