import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Kepez Klima Tamir, Bakım ve Servis | Antalya | 0542 654 61 13",
    description: "Kepez'de klima tamir, bakım ve servis hizmeti. Altınova, Gürsu, Varsak ve Santral başta olmak üzere ilçede aynı gün servis desteği.",
    path: "/hizmet-bolgesi/kepez",
});

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
