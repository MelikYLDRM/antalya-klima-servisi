import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

const SITE_URL = "https://www.antalyaklimabeyazesyatamiri.com.tr";

export const metadata: Metadata = {
    title: "Aksu Klima Servisi | Antalya Klima Tamiri — 0542 654 61 13",
    description: "Aksu'da klima tamiri, montajı ve bakımı. Düden, Çandır, Serik yolu bölgelerinde servis.",
    alternates: { canonical: `${SITE_URL}/hizmet-bolgesi/aksu` },
    openGraph: {
        title: "Aksu Klima Servisi",
        description: "Aksu'da klima tamiri, montajı ve bakımı. Aynı gün servis.",
        url: `${SITE_URL}/hizmet-bolgesi/aksu`,
    },
};

export default function AksuPage() {
    return (
        <AreaPageTemplate
            areaName="Aksu"
            slug="aksu"
            neighborhoods={["Düden", "Çandır", "Serik yolu", "Karaöz", "Perge", "Atatürk"]}
            introText="Antalya'nın doğu kapısı Aksu'ya da servis veriyoruz. Havalimanı yakını, Lara koridoru ve Serik yolu boyunca tüm noktalara ulaşıyoruz."
            bodyText="Aksu'da hem konut hem de ticari alanlara klima ve beyaz eşya tamir hizmeti sunuyoruz. Havalimanı bölgesindeki yoğun turizm yapılarına özel hizmet deneyimimiz var."
            distanceNote="Aksu'ya ortalama 25-40 dakika içinde ulaşıyoruz."
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
