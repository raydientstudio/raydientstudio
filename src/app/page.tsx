import FAQ from "@/components/(home)/faq";
import FeaturedProjects from "@/components/(home)/featured-projects";
import Hero from "@/components/(home)/hero";
import PricingCards from "@/components/(home)/pricing-cards";
import RecentProjects from "@/components/recent-projects";
import Services from "@/components/(home)/services";
import WhyChooseUs from "@/components/(home)/why-choose-us";
import Newsletter from "@/components/newsletter";
import Testimonial from "@/components/(home)/testimonials";
import TrustedBrands from "@/components/(home)/trusted-brands";
import Benefits from "@/components/(home)/benefits";

export default function HomePage() {
    return (
        <>  {/* Root */}
            {/* Header */}
            {/* Main */}
            <Hero /> {/* Hero */}
            <TrustedBrands />
            <Services /> {/* Services */}
            <Benefits /> {/* Strategic Edge We’ve */}
            <FeaturedProjects /> {/* Featured Projects */}
            <RecentProjects /> {/* Recent Projects */}
            <WhyChooseUs /> {/* Why Choose Us */}
            <PricingCards /> {/* Pricing Cards */}
            <Testimonial />
            <FAQ /> {/* FAQ */}
            <Newsletter /> {/* Newsletter */}
            {/* Footer */}
        </>
    );
}