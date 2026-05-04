/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        formats: ["image/avif", "image/webp"],
    },
    async headers() {
        return [
            // HTML sayfaları — her seferinde doğrula
            {
                source: "/(.*)",
                headers: [
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "X-Frame-Options", value: "DENY" },
                    { key: "X-XSS-Protection", value: "1; mode=block" },
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                    { key: "Cache-Control", value: "no-cache, must-revalidate" },
                ],
            },
            // Next.js hash'li statik dosyalar — sonsuza kadar önbellek
            {
                source: "/_next/static/(.*)",
                headers: [
                    { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
                ],
            },
            // Görseller — 7 gün
            {
                source: "/images/(.*)",
                headers: [
                    { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" },
                ],
            },
        ];
    },
};

export default nextConfig;
