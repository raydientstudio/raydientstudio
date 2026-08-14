import CrosshairCorner from "./crosshair-corners";
import SectionHeader from "./section-header";

const info = {
    title: "/ 005 — Why Choose Us?",
    subtitle: (
        <>
            The Design Partner You’ve <br/>
            Been Looking For
        </>
    ),
};

export default function WhyChooseUs() {
    const items = [
        {
            id: "[01 / COPY]",
            title: "Conversion Copy",
            description: "Every word earns its place. We write for clarity first, so the message lands before the design does.",
        },
        {
            id: "[02 / ENGINEERING]",
            title: "Engineering First",
            description: "One team, fully committed to your build — not split across a dozen accounts at once.",
        },
        {
            id: "[03 / MOTION]",
            title: "Motion Design",
            description: "Movement with intent. Every transition is placed to guide attention, never to decorate.",
        },
        {
            id: "[04 / CRAFT]",
            title: "Pixel-Precision",
            description: "Spacing, alignment, and detail checked line by line. Nothing ships until it holds up under scrutiny.",
        },
    ];

    return (
        <section className="w-full h-fit px-6 md:px-10 py-16 border-b border-border">
            <div className="flex flex-col justify-center items-start text-left gap-y-12 left-0 right-0 max-w-8xl mx-auto">          
                {/* Section header */}
                <SectionHeader info={info} />
                {/* Pillar grid */}
                <div className="relative isolate grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-surface border-t border-l border-border">
                    {/* True crosshair corners */}
                    <CrosshairCorner />
                    {/* Card */}
                    {items.map((item, idx) => (
                        <div key={idx} className="border-r border-b border-border p-6 sm:p-10 flex flex-col">
                            <span className="font-mono text-xs tracking-wide text-muted">{item.id}</span>
                            <h3 className="mt-6 text-lg font-semibold font-mono tracking-tighter text-foreground">{item.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}