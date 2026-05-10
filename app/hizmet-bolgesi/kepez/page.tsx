import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

const SITE_URL = "https://www.antalyaklimabeyazesyatamiri.com.tr";

export const metadata: Metadata = {
    title: "Kepez Klima Servisi | Antalya Klima Tamiri — 0542 654 61 13",
    description: "Kepez'de klima tamiri, montajı ve bakımı. Altınova, Gürsu, Varsak, Santral mahallelerinde aynı gün servis.",
    alternates: { canonical: `${SITE_URL}/hizmet-bolgesi/kepez` },
    openGraph: {
        title: "Kepez Klima Servisi",
        description: "Kepez'de klima tamiri, montajı ve bakımı. Aynı gün servis.",
        url: `${SITE_URL}/hizmet-bolgesi/kepez`,
    },
};

export default function KepezPage() {
    return (
        <AreaPageTemplate
            areaName="Kepez"
            slug="kepez"
            neighborhoods={["Altınova", "Gürsu", "Varsak", "Santral", "Şafak", "Şelale", "Yeşildere", "Yıldırım", "Kışla", "Uncalı Sanayi"]}
            introText="Kepez, Antalya'nın en büyük ilçelerinden biri. Merkez servis noktamızdan Kepez'e kolay ulaşım sağlıyor, aynı gün servis veriyoruz."
            bodyText="Kepez'in geniş mahalle yapısı nedeniyle her noktasına ulaşabilen teknisyen kadromuzla hizmet veriyoruz."
            distanceNote="Kepez'e ortalama 20-35 dakika içinde ulaşıyoruz."
            services={[
                { title: "Klima Tamiri", slug: "klima-tamiri", description: "Tüm marka klimalar için arıza tespiti ve tamir" },
                { title: "Klima Montajı", slug: "klima-montaji", description: "Split, inverter, kaset tipi klima kurulumu" },
                { title: "Klima Bakımı", slug: "klima-bakimi", description: "Periyodik bakım, filtre temizliği, gaz kontrolü" },
                { title: "Buzdolabı Tamiri", slug: "buzdolabi-tamiri", description: "Yerinde buzdolabı tamir hizmeti" },
                { title: "Çamaşır Makinesi Tamiri", slug: "camasir-makinesi-tamiri", description: "Elektronik kart, pompa ve rulman tamiri" },
            ]}
        />
    );
}
