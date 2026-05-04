import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://www.antalyaklimabeyazesyatamiri.com.tr/sitemap.xml",
    };
}
