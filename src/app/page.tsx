import Main from "@/components/main";
import {
    Hero,
    Services,
    Benefits,
    FeaturedProjects,
    WhyChooseUs,
    PricingCards,
    Testimonial,
    FAQ,
    CTA,
    PerformanceMetrics,
    EngineeringPipeline
} from "@/sections/root";

export default function Page() {
    return (
        <Main> {/* Main */}
            <Hero /> {/* Hero */}
            <Services /> {/* Services */}
            <FeaturedProjects /> {/* Featured Projects */}
            <Benefits /> {/* Value Proposition */}
            <WhyChooseUs /> {/* Why Choose Us */}
            <PerformanceMetrics /> {/* Performance Metrics */}
            <EngineeringPipeline /> {/* Engineering Pipeline */}
            <Testimonial /> {/* Testimonials */}
            <PricingCards /> {/* Pricing Cards */}
            <FAQ /> {/* Frequently Asked Questions */}
            <CTA /> {/* Call to Action */}
        </Main>
    );
};