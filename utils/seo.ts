import type { Metadata } from "next";

export const SITE_URL = "https://www.antalyaklimabeyazesyatamiri.com.tr";
export const BRAND_NAME = "Antalya Klima Beyaz Eşya Servisi";
export const PHONE = "05426546113";
export const PHONE_DISPLAY = "0542 654 61 13";
export const ADDRESS = "Tahılpazarı Mahallesi 452 Sokak No:3, Muratpaşa, Antalya";
export const OG_IMAGE_PATH = "/opengraph-image";
export const DEFAULT_LOCALE = "tr_TR";

type MetadataInput = {
    title: string;
    description: string;
    path?: string;
    keywords?: string[];
    type?: "website" | "article";
    publishedTime?: string;
    modifiedTime?: string;
};

export function getAbsoluteUrl(path = "/"): string {
    return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function buildPageMetadata({
    title,
    description,
    path = "/",
    keywords,
    type = "website",
    publishedTime,
    modifiedTime,
}: MetadataInput): Metadata {
    const url = getAbsoluteUrl(path);
    const imageUrl = getAbsoluteUrl(OG_IMAGE_PATH);

    return {
        title,
        description,
        keywords,
        alternates: { canonical: url },
        openGraph: {
            type,
            locale: DEFAULT_LOCALE,
            url,
            siteName: BRAND_NAME,
            title,
            description,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            ...(publishedTime ? { publishedTime } : {}),
            ...(modifiedTime ? { modifiedTime } : {}),
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [imageUrl],
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
}

export function buildBreadcrumbSchema(
    items: Array<{ name: string; path: string }>
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: getAbsoluteUrl(item.path),
        })),
    };
}
