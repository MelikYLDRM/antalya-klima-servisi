"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { buildBreadcrumbSchema, getAbsoluteUrl, OG_IMAGE_PATH, PHONE, PHONE_DISPLAY, SITE_URL } from "@/utils/seo";
const WA_LINK = `https://wa.me/90${PHONE.slice(1)}?text=Merhaba,%20klima%20servisi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`;

export interface ServiceFaq {
    question: string;
    answer: string;
}

export interface ContentSection {
    heading: string;
    body: string;
}

export interface ServicePageProps {
    title: string;
    slug: string;
    h1: string;
    heroSubtitle: string;
    serviceItems: string[];
    contentSections: ContentSection[];
    faqs: ServiceFaq[];
    image: string;
    imageAlt: string;
    relatedServices: { title: string; slug: string }[];
}

function FaqAccordion({ faqs }: { faqs: ServiceFaq[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <div className="space-y-3">
            {faqs.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                        aria-expanded={openIndex === index}
                    >
                        <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                        <svg
                            className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div className={`transition-all duration-200 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                        <p className="px-5 pb-5 text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function ServicePageTemplate({
    title,
    slug,
    h1,
    heroSubtitle,
    serviceItems,
    contentSections,
    faqs,
    image,
    imageAlt,
    relatedServices,
}: ServicePageProps) {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}/hizmetler/${slug}#service`,
        name: `Antalya ${title}`,
        description: heroSubtitle,
        provider: { "@id": `${SITE_URL}/#business` },
        image: getAbsoluteUrl(OG_IMAGE_PATH),
        offers: {
            "@type": "Offer",
            priceCurrency: "TRY",
            availability: "https://schema.org/InStock",
            areaServed: "Antalya",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${title} hizmet kapsamı`,
            itemListElement: serviceItems.map((item) => ({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: item,
                },
            })),
        },
        areaServed: { "@type": "City", name: "Antalya" },
        serviceType: title,
        url: `${SITE_URL}/hizmetler/${slug}`,
    };

    const breadcrumbSchema = buildBreadcrumbSchema([
        { name: "Ana Sayfa", path: "/" },
        { name: "Hizmetler", path: "/#hizmetler" },
        { name: `Antalya ${title}`, path: `/hizmetler/${slug}` },
    ]);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <Header />
            <main>
                {/* Hero */}
                <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-14 md:py-20">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="mb-6">
                            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-blue-200">
                                <li><Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link></li>
                                <li aria-hidden="true" className="text-blue-400">/</li>
                                <li><Link href="/#hizmetler" className="hover:text-white transition-colors">Hizmetler</Link></li>
                                <li aria-hidden="true" className="text-blue-400">/</li>
                                <li className="text-white font-medium" aria-current="page">{title}</li>
                            </ol>
                        </nav>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5">
                                    Antalya <span className="text-blue-300">{title}</span>
                                </h1>
                                <p className="text-blue-100 text-lg leading-relaxed mb-8">{heroSubtitle}</p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <a
                                        href={`tel:${PHONE}`}
                                        className="flex items-center justify-center gap-2 bg-white text-blue-800 font-bold text-lg px-6 py-3.5 rounded-2xl hover:bg-blue-50 transition-colors shadow-lg"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {PHONE_DISPLAY}
                                    </a>
                                    <a
                                        href={WA_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-6 py-3.5 rounded-2xl transition-colors shadow-lg"
                                    >
                                        WhatsApp&apos;tan Yaz
                                    </a>
                                </div>
                            </div>

                            {/* Service items card */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <p className="text-blue-200 text-sm font-semibold uppercase tracking-wide mb-4">Hizmet Kapsamı</p>
                                <ul className="space-y-2.5">
                                    {serviceItems.map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-white">
                                            <svg className="w-5 h-5 text-blue-300 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="py-14 md:py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="prose prose-lg max-w-none">
                            {contentSections.map((section) => (
                                <div key={section.heading} className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                                    <p className="text-gray-600 leading-relaxed text-lg">{section.body}</p>
                                </div>
                            ))}
                        </div>

                        {/* Trust bar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-gray-100">
                            {[
                                { stat: "10+", label: "Yıl Deneyim" },
                                { stat: "5000+", label: "Müşteri" },
                                { stat: "Aynı Gün", label: "Servis" },
                                { stat: "Ücretsiz", label: "Keşif" },
                            ].map((item) => (
                                <div key={item.label} className="text-center bg-blue-50 rounded-2xl p-5">
                                    <p className="text-2xl font-extrabold text-blue-700 mb-1">{item.stat}</p>
                                    <p className="text-sm text-gray-600 font-medium">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-14 md:py-20 bg-gray-50">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-10">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Sık Sorulan Sorular</p>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                                {title} Hakkında Merak Edilenler
                            </h2>
                        </div>
                        <FaqAccordion faqs={faqs} />
                    </div>
                </section>

                {/* Related Services */}
                {relatedServices.length > 0 && (
                    <section className="py-12 bg-white">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Diğer Hizmetlerimiz</h2>
                            <div className="flex flex-wrap gap-3">
                                {relatedServices.map((s) => (
                                    <Link
                                        key={s.slug}
                                        href={`/hizmetler/${s.slug}`}
                                        className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium text-sm px-4 py-2.5 rounded-xl transition-colors border border-blue-200"
                                    >
                                        {s.title} →
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className="bg-blue-700 py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                            {title} İçin Hemen Arayın
                        </h2>
                        <p className="text-blue-200 mb-6 text-lg">Ücretsiz keşif, net fiyat. Aynı gün tamir, bakım ve servis.</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href={`tel:${PHONE}`}
                                className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-bold text-lg px-8 py-4 rounded-2xl hover:bg-blue-50 transition-colors"
                            >
                                {PHONE_DISPLAY} — Hemen Ara
                            </a>
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-colors"
                            >
                                WhatsApp ile Yaz
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
