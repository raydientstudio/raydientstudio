"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../components/ui/accordion";
import SectionHeader from "./section-header";

const info = {
    title: "/ 010 — FAQ's",
    subtitle: (
        <>
            Frequently Asked <br/>
            Questions
        </>
    ),
};

const faqItems = [
    {
        idx: "01",
        question: "What design services do you offer?",
        answer: "We offer branding, UI/UX design, web design, mobile app design, illustration, and creative consulting tailored to your business needs.",
    },
    {
        idx: "02",
        question: "How does your design process work?",
        answer: "Our process includes discovery, research, ideation, design, feedback, and final delivery. We keep you involved at every stage to ensure the best results.",
    },
    {
        idx: "03",
        question: "What is your typical project timeline?",
        answer: "Timelines vary by project scope, but most projects take 2–6 weeks. We’ll provide a detailed schedule after understanding your requirements.",
    },
    {
        idx: "04",
        question: "How do you handle revisions?",
        answer: "We include a set number of revision rounds in every project to ensure you’re happy with the final result. Additional revisions can be arranged if needed.",
    },
    {
        idx: "05",
        question: "Can you work with my existing brand guidelines?",
        answer: "Absolutely! We can design within your current brand guidelines or help you refresh and evolve your brand identity.",
    },
    {
        idx: "06",
        question: "What do you need from me to get started?",
        answer: "We’ll need your project goals, any existing assets or inspiration, and your feedback throughout the process. We’ll guide you through every step!",
    },
];

export default function FAQ() {
    return (
        <section className="w-full h-fit px-6 md:px-10 py-16">
            <div className="flex flex-col w-full h-full gap-y-6 max-w-8xl mx-auto">
                <SectionHeader info={info} />
                <Accordion type="single" collapsible className="">
                    {faqItems.map((item, idx) => (
                        <AccordionItem value={`item-${idx + 1}`} key={item.question}>
                            <AccordionTrigger>
                                <span className="flex flex-row justify-start items-start gap-4">
                                  <span className="text-muted font-normal font-mono">{item.idx}</span>
                                  <span className="text-foreground font-medium">{item.question}</span>
                                </span>
                            </AccordionTrigger>
                            <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}