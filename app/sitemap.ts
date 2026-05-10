import { MetadataRoute } from "next";

const SITE_URL = "https://www.antalyaklimabeyazesyatamiri.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        // Ana sayfa
        {
            url: SITE_URL,
            lastModified: new Date("2025-05-10"),
            changeFrequency: "weekly",
            priority: 1,
        },

        // Servis sayfaları
        {
            url: `${SITE_URL}/hizmetler/klima-tamiri`,
            lastModified: new Date("2025-05-10"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/hizmetler/klima-montaji`,
            lastModified: new Date("2025-05-10"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/hizmetler/klima-bakimi`,
            lastModified: new Date("2025-05-10"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/hizmetler/buzdolabi-tamiri`,
            lastModified: new Date("2025-05-10"),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/hizmetler/camasir-makinesi-tamiri`,
            lastModified: new Date("2025-05-10"),
            changeFrequency: "monthly",
            priority: 0.8,
        },

        // Bölge sayfaları
        {
            url: `${SITE_URL}/hizmet-bolgesi/muratpasa`,
            lastModified: new Date("2025-05-10"),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/hizmet-bolgesi/kepez`,
            lastModified: new Date("2025-05-10"),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/hizmet-bolgesi/konyaalti`,
            lastModified: new Date("2025-05-10"),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/hizmet-bolgesi/dosemealti`,
            lastModified: new Date("2025-05-10"),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/hizmet-bolgesi/aksu`,
            lastModified: new Date("2025-05-10"),
            changeFrequency: "monthly",
            priority: 0.7,
        },

        // Blog / Rehber
        {
            url: `${SITE_URL}/rehber`,
            lastModified: new Date("2025-05-10"),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/rehber/klima-bakimi-ne-zaman-yapilir`,
            lastModified: new Date("2025-01-15"),
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/rehber/klima-gaz-dolumu-rehberi`,
            lastModified: new Date("2025-01-15"),
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/rehber/split-klima-montaji-nasil-yapilir`,
            lastModified: new Date("2025-01-15"),
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/rehber/buzdolabi-arizalari-ve-cozumleri`,
            lastModified: new Date("2025-01-15"),
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/rehber/camasir-makinesi-bakimi`,
            lastModified: new Date("2025-01-15"),
            changeFrequency: "yearly",
            priority: 0.6,
        },
    ];
}
