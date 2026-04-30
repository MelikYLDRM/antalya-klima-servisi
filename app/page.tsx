import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ, { faqSchema } from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
    return (
        <>
            {/* FAQ Schema — injected here so it's close to the FAQ section */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Header />

            <main id="main-content">
                <Hero />
                <Services />
                <WhyUs />
                <ServiceAreas />
                <FAQ />
                <Contact />
            </main>

            <Footer />
            <WhatsAppButton />
        </>
    );
}
