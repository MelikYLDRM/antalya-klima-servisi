import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

const SITE_URL = "https://www.antalyaklimabeyazesyatamiri.com.tr";

export const metadata: Metadata = {
    title: "Konyaaltı Klima Servisi | Antalya Klima Tamiri — 0542 654 61 13",
    description: "Konyaaltı'nda klima tamiri, montajı ve bakımı. Uncalı, Sarısu, Hurma, Liman mahallelerinde aynı gün servis.",
    alternates: { canonical: `${SITE_URL}/hizmet-bolgesi/konyaalti` },
    openGraph: {
        title: "Konyaaltı Klima Servisi",
        description: "Konyaaltı'nda klima tamiri, montajı ve bakımı. Aynı gün servis.",
        url: `${SITE_URL}/hizmet-bolgesi/konyaalti`,
    },
};

export default function KonyaaltiPage() {
    return (
        <AreaPageTemplate
            areaName="Konyaaltı"
            slug="konyaalti"
            neighborhoods={["Uncalı", "Sarısu", "Hurma", "Liman", "Siteler", "Arapsuyu", "Gürsu", "Zeytinköy"]}
            introText="Konyaaltı'nın sahil şeridindeki yoğun otel ve residence yapıları klimaları yoğun çalıştırır. Deniz tuzlu havası klimalar için ekstra yıpranmaya neden olur — bu yüzden düzenli bakım ve hızlı tamir kritik önem taşır."
            bodyText="Deniz kıyısı boyunca uzanan Konyaaltı'nın tüm mahallelerine hizmet veriyoruz. Sahil şeridindeki iklim koşulları nedeniyle klimalar daha sık servis gerektirir; bu konuda deneyimliyiz."
            distanceNote="Konyaaltı'na ortalama 20-30 dakika içinde ulaşıyoruz."
            specialNote="Deniz iklimine maruz kalan dış ünitelerde korozyon ve kir birikimi hızlanır. Yıllık bakımı aksatmayın."
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
