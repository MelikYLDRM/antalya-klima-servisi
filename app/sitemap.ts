import { MetadataRoute } from "next";
import { getAbsoluteUrl } from "@/utils/seo";

type SitemapEntry = {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    contentType: "core" | "service" | "area" | "guide-index" | "guide-article";
    lastModified?: string;
};

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModifiedByType: Record<SitemapEntry["contentType"], string> = {
        core: "2026-05-10",
        service: "2026-05-12",
        area: "2026-05-11",
        "guide-index": "2026-05-13",
        "guide-article": "2026-05-15",
    };

    const routes: SitemapEntry[] = [
        { path: "/", priority: 1, changeFrequency: "weekly", contentType: "core" },
        { path: "/hizmetler/klima-tamiri", priority: 0.95, changeFrequency: "monthly", contentType: "service" },
        { path: "/hizmetler/klima-bakimi", priority: 0.95, changeFrequency: "monthly", contentType: "service" },
        { path: "/hizmetler/klima-montaji", priority: 0.92, changeFrequency: "monthly", contentType: "service" },
        { path: "/hizmetler/buzdolabi-tamiri", priority: 0.9, changeFrequency: "monthly", contentType: "service" },
        { path: "/hizmetler/camasir-makinesi-tamiri", priority: 0.9, changeFrequency: "monthly", contentType: "service" },
        { path: "/hizmet-bolgesi/muratpasa", priority: 0.86, changeFrequency: "monthly", contentType: "area" },
        { path: "/hizmet-bolgesi/kepez", priority: 0.84, changeFrequency: "monthly", contentType: "area" },
        { path: "/hizmet-bolgesi/konyaalti", priority: 0.84, changeFrequency: "monthly", contentType: "area" },
        { path: "/hizmet-bolgesi/dosemealti", priority: 0.82, changeFrequency: "monthly", contentType: "area" },
        { path: "/hizmet-bolgesi/aksu", priority: 0.82, changeFrequency: "monthly", contentType: "area" },
        { path: "/rehber", priority: 0.8, changeFrequency: "weekly", contentType: "guide-index" },
        {
            path: "/rehber/klima-bakimi-ne-zaman-yapilir",
            priority: 0.72,
            changeFrequency: "monthly",
            contentType: "guide-article",
            lastModified: "2026-05-10",
        },
        {
            path: "/rehber/klima-gaz-dolumu-rehberi",
            priority: 0.72,
            changeFrequency: "monthly",
            contentType: "guide-article",
            lastModified: "2026-05-12",
        },
        {
            path: "/rehber/split-klima-montaji-nasil-yapilir",
            priority: 0.7,
            changeFrequency: "monthly",
            contentType: "guide-article",
            lastModified: "2026-05-14",
        },
        {
            path: "/rehber/buzdolabi-arizalari-ve-cozumleri",
            priority: 0.7,
            changeFrequency: "monthly",
            contentType: "guide-article",
            lastModified: "2026-05-09",
        },
        {
            path: "/rehber/camasir-makinesi-bakimi",
            priority: 0.7,
            changeFrequency: "monthly",
            contentType: "guide-article",
            lastModified: "2026-05-08",
        },
    ];

    return routes.map((route) => ({
        url: getAbsoluteUrl(route.path),
        lastModified: new Date(route.lastModified ?? lastModifiedByType[route.contentType]),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
