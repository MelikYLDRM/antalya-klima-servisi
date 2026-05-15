import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
    BRAND_NAME,
    OG_IMAGE_PATH,
    PHONE,
    SITE_URL,
    buildBreadcrumbSchema,
    getAbsoluteUrl,
} from "@/utils/seo";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-sans",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default:
            "Antalya Klima Tamir, Bakım ve Servis | Muratpaşa Klima Montajı | 0542 654 61 13",
        template: "%s | Antalya Klima Servisi",
    },
    description:
        "Antalya Muratpaşa'da profesyonel klima tamir, bakım ve servis hizmetleri. Klima montajı, buzdolabı ve çamaşır makinesi servis çözümleri için hemen arayın: 0542 654 61 13",
    keywords: [
        "antalya klima tamiri",
        "antalya klima tamir bakım servis",
        "antalya klima bakımı",
        "antalya klima servisi",
        "antalya klima montajı",
        "muratpaşa klima tamiri",
        "muratpaşa klima bakımı",
        "kepez klima tamiri",
        "kepez klima servisi",
        "kepez klima bakımı",
        "konyaaltı klima tamiri",
        "konyaaltı klima servisi",
        "konyaaltı klima bakımı",
        "döşemealtı klima tamiri",
        "döşemealtı klima servisi",
        "aksu klima tamiri",
        "aksu klima servisi",
        "klima bakımı antalya",
        "klima arıza servisi antalya",
        "antalya buzdolabı tamiri",
        "antalya çamaşır makinesi tamiri",
        "antalya beyaz eşya tamiri",
        "antalya klima arıza servis",
        "tahılpazarı klima servisi",
        "varsak klima tamiri",
        "uncalı klima tamiri",
        "lara klima tamiri",
    ],
    authors: [{ name: BRAND_NAME }],
    creator: BRAND_NAME,
    publisher: BRAND_NAME,
    formatDetection: {
        email: false,
        address: false,
        telephone: true,
    },
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        type: "website",
        locale: "tr_TR",
        url: SITE_URL,
        siteName: BRAND_NAME,
        title:
            "Antalya Klima Tamir, Bakım ve Servis | Muratpaşa Klima Montajı | 0542 654 61 13",
        description:
            "Antalya Muratpaşa'da profesyonel klima tamir, bakım ve servis hizmetleri. Klima montajı ve beyaz eşya servis desteği.",
        images: [
            {
                url: getAbsoluteUrl(OG_IMAGE_PATH),
                width: 1200,
                height: 630,
                alt: "Antalya Klima Tamir, Bakım ve Servis",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Antalya Klima Tamir, Bakım ve Servis | 0542 654 61 13",
        description:
            "Antalya Muratpaşa'da profesyonel klima tamir, bakım ve servis. Buzdolabı ve çamaşır makinesi servis çözümleri.",
        images: [getAbsoluteUrl(OG_IMAGE_PATH)],
    },
    other: {
        "geo.region": "TR-07",
        "geo.placename": "Antalya, Muratpaşa",
        "geo.position": "36.8969;30.7133",
        ICBM: "36.8969, 30.7133",
        "revisit-after": "7 days",
        rating: "general",
        language: "Turkish",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export const viewport: Viewport = {
    themeColor: "#1d4ed8",
    width: "device-width",
    initialScale: 1,
};

// LocalBusiness JSON-LD Schema
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BRAND_NAME,
    alternateName: "Antalya Klima Tamir Bakım Servisi",
    url: SITE_URL,
    telephone: `+90${PHONE.slice(1)}`,
    image: getAbsoluteUrl(OG_IMAGE_PATH),
    logo: getAbsoluteUrl(OG_IMAGE_PATH),
    address: {
        "@type": "PostalAddress",
        streetAddress: "Tahılpazarı Mahallesi 452 Sokak No:3",
        addressLocality: "Muratpaşa",
        addressRegion: "Antalya",
        postalCode: "07100",
        addressCountry: "TR",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 36.8969,
        longitude: 30.7133,
    },
    hasMap: "https://maps.google.com/?q=Muratpaşa+Tahılpazarı+Mahallesi+452+Sokak+No:3+Antalya",
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ],
            opens: "08:00",
            closes: "20:00",
        },
    ],
    priceRange: "₺₺",
    currenciesAccepted: "TRY",
    paymentAccepted: "Nakit, Kredi Kartı",
    areaServed: [
        { "@type": "City", name: "Antalya" },
        { "@type": "AdministrativeArea", name: "Muratpaşa" },
        { "@type": "AdministrativeArea", name: "Kepez" },
        { "@type": "AdministrativeArea", name: "Konyaaltı" },
        { "@type": "AdministrativeArea", name: "Döşemealtı" },
    ],
    serviceType: [
        "Klima Tamir Hizmeti",
        "Klima Bakım Hizmeti",
        "Klima Servis Hizmeti",
        "Klima Montajı",
        "Buzdolabı Tamir ve Servis",
        "Çamaşır Makinesi Tamir ve Servis",
    ],
    knowsAbout: [
        "Klima Arıza Tespiti",
        "Split Klima Montajı",
        "Klima Gaz Dolumu",
        "Klima Filtre Temizliği",
        "Buzdolabı Kompresör Tamiri",
        "Çamaşır Makinesi Elektronik Arıza",
    ],
    sameAs: [
        `https://wa.me/90${PHONE.slice(1)}`,
    ],
    contactPoint: {
        "@type": "ContactPoint",
        telephone: `+90${PHONE.slice(1)}`,
        contactType: "customer service",
        availableLanguage: "Turkish",
        areaServed: "TR",
    },
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND_NAME,
    url: SITE_URL,
    logo: getAbsoluteUrl(OG_IMAGE_PATH),
    telephone: `+90${PHONE.slice(1)}`,
    address: localBusinessSchema.address,
    sameAs: localBusinessSchema.sameAs,
    contactPoint: localBusinessSchema.contactPoint,
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BRAND_NAME,
    description:
        "Antalya Muratpaşa'da klima tamir, bakım ve servis hizmetleri ile beyaz eşya servis çözümleri",
    inLanguage: "tr-TR",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/rehber?q={search_term_string}`,
        "query-input": "required name=search_term_string",
    },
};

const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Ana Sayfa", path: "/" }]);

// Service Schemas
const serviceSchemas = [
    {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}/#service-klima-tamiri`,
        name: "Klima Tamir, Bakım ve Servis",
        description:
            "Antalya Muratpaşa'da tüm marka ve model klimalar için profesyonel tamir, bakım ve servis hizmeti.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "City", name: "Antalya" },
        serviceType: "Klima Tamir Bakım Servis",
        url: SITE_URL,
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}/#service-klima-montaji`,
        name: "Klima Montajı",
        description:
            "Split, inverter ve kaset tipi klimaların Antalya'da profesyonel montaj hizmeti.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "City", name: "Antalya" },
        serviceType: "Klima Montajı",
        url: SITE_URL,
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}/#service-klima-bakimi`,
        name: "Klima Bakımı",
        description:
            "Yıllık periyodik klima bakımı, filtre temizliği, gaz seviyesi kontrolü ve sezon öncesi hazırlık.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "City", name: "Antalya" },
        serviceType: "Klima Bakımı",
        url: SITE_URL,
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}/#service-buzdolabi-tamiri`,
        name: "Buzdolabı Tamiri",
        description:
            "Antalya'da yerinde buzdolabı tamiri. Soğutma problemi, kompresör, dondurucu arızaları.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "City", name: "Antalya" },
        serviceType: "Buzdolabı Tamiri",
        url: SITE_URL,
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}/#service-camasir-makinesi-tamiri`,
        name: "Çamaşır Makinesi Tamiri",
        description:
            "Antalya'da yerinde çamaşır makinesi tamiri. Su almıyor, sıkıyor, dönmüyor sorunları.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "City", name: "Antalya" },
        serviceType: "Çamaşır Makinesi Tamiri",
        url: SITE_URL,
    },
];

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr" className={inter.variable}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(localBusinessSchema),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationSchema),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(websiteSchema),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbSchema),
                    }}
                />
                {serviceSchemas.map((schema) => (
                    <script
                        key={schema["@id"]}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(schema),
                        }}
                    />
                ))}
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
