import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { buildBreadcrumbSchema, getAbsoluteUrl, OG_IMAGE_PATH, PHONE, PHONE_DISPLAY, SITE_URL } from "@/utils/seo";
const WA_LINK = `https://wa.me/90${PHONE.slice(1)}?text=Merhaba,%20klima%20servisi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`;

export interface AreaService {
    title: string;
    slug: string;
    description: string;
}

export interface AreaPageProps {
    areaName: string;
    slug: string;
    neighborhoods: string[];
    introText: string;
    bodyText: string;
    services: AreaService[];
    distanceNote: string;
    specialNote?: string;
}

export default function AreaPageTemplate({
    areaName,
    slug,
    neighborhoods,
    introText,
    bodyText,
    services,
    distanceNote,
    specialNote,
}: AreaPageProps) {
    const breadcrumbSchema = buildBreadcrumbSchema([
        { name: "Ana Sayfa", path: "/" },
        { name: `${areaName} Klima Servisi`, path: `/hizmet-bolgesi/${slug}` },
    ]);

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "@id": `${SITE_URL}/#business`,
        name: "Antalya Klima ve Beyaz Eşya Servisi",
        url: SITE_URL,
        telephone: "+905426546113",
        image: getAbsoluteUrl(OG_IMAGE_PATH),
        areaServed: [
            { "@type": "City", name: "Antalya" },
            { "@type": "AdministrativeArea", name: areaName },
        ],
        address: {
            "@type": "PostalAddress",
            streetAddress: "Tahılpazarı Mahallesi 452 Sokak No:3",
            addressLocality: "Muratpaşa",
            addressRegion: "Antalya",
            postalCode: "07100",
            addressCountry: "TR",
        },
    };
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}/hizmet-bolgesi/${slug}#service`,
        name: `${areaName} Klima Tamiri, Bakımı ve Servisi`,
        description: `${areaName} bölgesinde yerinde klima tamiri, periyodik bakım ve teknik servis hizmeti.`,
        serviceType: "Klima tamiri, bakımı ve teknik servis",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "AdministrativeArea", name: areaName },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${areaName} hizmetleri`,
            itemListElement: services.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: service.title,
                    description: service.description,
                },
            })),
        },
        url: `${SITE_URL}/hizmet-bolgesi/${slug}`,
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

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
                                <li className="text-white font-medium" aria-current="page">{areaName}</li>
                            </ol>
                        </nav>

                        <div className="max-w-3xl">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5">
                                <span className="text-blue-300">{areaName}</span> Klima Servisi
                            </h1>
                            <p className="text-blue-100 text-lg leading-relaxed mb-6">{introText}</p>
                            <p className="text-blue-200 text-sm mb-8">{distanceNote}</p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href={`tel:${PHONE}`}
                                    className="flex items-center justify-center gap-2 bg-white text-blue-800 font-bold text-lg px-6 py-3.5 rounded-2xl hover:bg-blue-50 transition-colors shadow-lg"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    {PHONE_DISPLAY} — Hemen Ara
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
                    </div>
                </section>

                {/* Neighborhoods */}
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    {areaName}&apos;da Hizmet Verdiğimiz Mahalleler
                                </h2>
                                <p className="text-gray-600 text-lg mb-6">{bodyText}</p>
                                {specialNote && (
                                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-blue-800 text-sm font-medium">
                                        {specialNote}
                                    </div>
                                )}
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Hizmet Verilen Mahalleler</p>
                                <div className="flex flex-wrap gap-2">
                                    {neighborhoods.map((n) => (
                                        <span key={n} className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-lg">
                                            {n}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services in this area */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            {areaName}&apos;da Verdiğimiz Hizmetler
                        </h2>
                        <p className="text-gray-600 mb-8">Klima ve beyaz eşya arızanız ne olursa olsun, {areaName}&apos;da yerinde ve hızlı çözüm sunuyoruz.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {services.map((service) => (
                                <Link
                                    key={service.slug}
                                    href={`/hizmetler/${service.slug}`}
                                    className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group"
                                >
                                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                                        {areaName} {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.description}</p>
                                    <span className="text-blue-600 text-sm font-medium group-hover:underline">Detaylı Bilgi →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-blue-700 py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                            {areaName}&apos;da Klima Arızanız mı Var?
                        </h2>
                        <p className="text-blue-200 mb-6 text-lg">Aynı gün tamir, bakım ve servis. Ücretsiz keşif. Net fiyat garantisi.</p>
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
