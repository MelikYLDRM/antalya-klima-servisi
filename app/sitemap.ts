import { MetadataRoute } from "next";
import { getAbsoluteUrl } from "@/utils/seo";

type SitemapEntry = {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    lastModified?: string;
};

export default function sitemap(): MetadataRoute.Sitemap {
    const updatedAt = new Date();

    const routes: SitemapEntry[] = [
        { path: "/", priority: 1, changeFrequency: "weekly" },
        { path: "/hizmetler/klima-tamiri", priority: 0.95, changeFrequency: "monthly" },
        { path: "/hizmetler/klima-bakimi", priority: 0.95, changeFrequency: "monthly" },
        { path: "/hizmetler/klima-montaji", priority: 0.92, changeFrequency: "monthly" },
        { path: "/hizmetler/buzdolabi-tamiri", priority: 0.9, changeFrequency: "monthly" },
        { path: "/hizmetler/camasir-makinesi-tamiri", priority: 0.9, changeFrequency: "monthly" },
        { path: "/hizmet-bolgesi/muratpasa", priority: 0.9, changeFrequency: "weekly" },
        { path: "/hizmet-bolgesi/kepez", priority: 0.88, changeFrequency: "weekly" },
        { path: "/hizmet-bolgesi/konyaalti", priority: 0.88, changeFrequency: "weekly" },
        { path: "/hizmet-bolgesi/dosemealti", priority: 0.86, changeFrequency: "weekly" },
        { path: "/hizmet-bolgesi/aksu", priority: 0.86, changeFrequency: "weekly" },
        { path: "/rehber", priority: 0.8, changeFrequency: "weekly" },
        {
            path: "/rehber/klima-bakimi-ne-zaman-yapilir",
            priority: 0.72,
            changeFrequency: "monthly",
            lastModified: "2026-05-15",
        },
        {
            path: "/rehber/klima-gaz-dolumu-rehberi",
            priority: 0.72,
            changeFrequency: "monthly",
            lastModified: "2026-05-15",
        },
        {
            path: "/rehber/split-klima-montaji-nasil-yapilir",
            priority: 0.7,
            changeFrequency: "monthly",
            lastModified: "2026-05-15",
        },
        {
            path: "/rehber/buzdolabi-arizalari-ve-cozumleri",
            priority: 0.7,
            changeFrequency: "monthly",
            lastModified: "2026-05-15",
        },
        {
            path: "/rehber/camasir-makinesi-bakimi",
            priority: 0.7,
            changeFrequency: "monthly",
            lastModified: "2026-05-15",
        },
    ];

    return routes.map((route) => ({
        url: getAbsoluteUrl(route.path),
        lastModified: route.lastModified ? new Date(route.lastModified) : updatedAt,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
