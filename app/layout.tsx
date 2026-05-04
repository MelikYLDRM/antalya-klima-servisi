import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-sans",
});

const SITE_URL = "https://www.antalyaklimabeyazesyatamiri.com.tr";
const PHONE = "05426546113";
const PHONE_DISPLAY = "0542 654 61 13";
const ADDRESS = "Tahılpazarı Mahallesi 452 Sokak No:3, Muratpaşa, Antalya";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default:
            "Antalya Klima Tamiri | Muratpaşa Klima Montaj Bakım Servisi | 0542 654 61 13",
        template: "%s | Antalya Klima Servisi",
    },
    description:
        "Antalya Muratpaşa'da profesyonel klima tamiri, montajı ve bakımı. Buzdolabı ve çamaşır makinesi tamiri. Hemen arayın: 0542 654 61 13",
    keywords: [
        "antalya klima tamiri",
        "antalya klima servisi",
        "muratpaşa klima tamiri",
        "antalya klima montajı",
        "klima bakımı antalya",
        "antalya buzdolabı tamiri",
        "antalya çamaşır makinesi tamiri",
        "antalya beyaz eşya tamiri",
        "antalya klima arıza",
        "antalya klima servisi muratpaşa",
        "tahılpazarı klima servisi",
    ],
    authors: [{ name: "Antalya Klima Beyaz Eşya Servis" }],
    creator: "Antalya Klima Beyaz Eşya Servis",
    publisher: "Antalya Klima Beyaz Eşya Servis",
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
        siteName: "Antalya Klima Beyaz Eşya Servis",
        title:
            "Antalya Klima Tamiri | Muratpaşa Klima Montaj Bakım Servisi | 0542 654 61 13",
        description:
            "Antalya Muratpaşa'da profesyonel klima tamiri, montajı ve bakımı. Buzdolabı ve çamaşır makinesi tamiri.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Antalya Klima Tamiri | 0542 654 61 13",
        description:
            "Antalya Muratpaşa'da profesyonel klima tamiri, montajı, bakımı. Buzdolabı ve çamaşır makinesi tamiri.",
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
    name: "Antalya Klima Beyaz Eşya Tamir Servisi",
    alternateName: "Antalya Klima Servisi",
    url: SITE_URL,
    telephone: `+90${PHONE.slice(1)}`,
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
        "Klima Tamiri",
        "Klima Montajı",
        "Klima Bakımı",
        "Buzdolabı Tamiri",
        "Çamaşır Makinesi Tamiri",
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

// Website Schema
const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Antalya Klima Beyaz Eşya Tamir Servisi",
    description:
        "Antalya Muratpaşa'da klima tamiri, montajı, bakımı ve beyaz eşya tamir servisi",
    inLanguage: "tr-TR",
};

// BreadcrumbList Schema
const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: SITE_URL,
        },
    ],
};

// Service Schemas
const serviceSchemas = [
    {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}/#service-klima-tamiri`,
        name: "Klima Tamiri",
        description:
            "Antalya Muratpaşa'da tüm marka ve model klimalar için profesyonel arıza tespiti ve tamir hizmeti.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "City", name: "Antalya" },
        serviceType: "Klima Tamiri",
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
