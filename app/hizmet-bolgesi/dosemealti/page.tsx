import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

const SITE_URL = "https://www.antalyaklimabeyazesyatamiri.com.tr";

export const metadata: Metadata = {
    title: "Döşemealtı Klima Servisi | Antalya Klima Tamiri — 0542 654 61 13",
    description: "Döşemealtı'nda klima tamiri, montajı ve bakımı. Çıplaklı, Hacilar, Işıklar mahallelerinde servis.",
    alternates: { canonical: `${SITE_URL}/hizmet-bolgesi/dosemealti` },
    openGraph: {
        title: "Döşemealtı Klima Servisi",
        description: "Döşemealtı'nda klima tamiri, montajı ve bakımı. Aynı gün servis.",
        url: `${SITE_URL}/hizmet-bolgesi/dosemealti`,
    },
};

export default function DosemealtiPage() {
    return (
        <AreaPageTemplate
            areaName="Döşemealtı"
            slug="dosemealti"
            neighborhoods={["Çıplaklı", "Hacilar", "Işıklar", "Kepez Burnu", "Kızılcadağ", "Sarılar"]}
            introText="Döşemealtı ilçesine de düzenli servis veriyoruz. Şehir merkezinden biraz uzak olsa da aynı gün servis imkânı sunuyoruz."
            bodyText="Döşemealtı'nın kırsal yapısındaki evler ve yazlıklar için de klima hizmeti veriyoruz. Bölgenin sıcak yazları ve klimalar için zorlu koşulları nedeniyle düzenli bakım önerilir."
            distanceNote="Döşemealtı'na ortalama 30-40 dakika içinde ulaşıyoruz. Önceden randevu almanızı öneririz."
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
