import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Muratpaşa Klima Tamir, Bakım ve Servis | Antalya | 0542 654 61 13",
    description: "Muratpaşa'da klima tamir, bakım ve servis hizmeti. Tahılpazarı, Kışla, Fener, Lara ve Şirinyalı mahallelerinde aynı gün profesyonel destek.",
    path: "/hizmet-bolgesi/muratpasa",
});

export default function MuratpasaPage() {
    return (
        <AreaPageTemplate
            areaName="Muratpaşa"
            slug="muratpasa"
            neighborhoods={["Tahılpazarı", "Kışla", "Sinan", "Fener", "Şirinyalı", "Lara", "Güzeloba", "Çağlayan", "Memurevleri", "Balbey"]}
            introText="Servis merkezimiz Muratpaşa Tahılpazarı Mahallesi'nde bulunuyor. Bu sayede Muratpaşa'nın tüm mahallelerine en hızlı şekilde ulaşabiliyoruz. Klima tamiri, montajı, bakımı ve beyaz eşya tamirinde Muratpaşa'nın en yakın servisi biziz."
            bodyText="Muratpaşa ilçemizin tüm mahallelerine hizmet veriyoruz. Tahılpazarı'ndan Lara'ya, Fener'den Şirinyalı'ya kadar adresinize gelip arızanızı çözüyoruz. Çağrınızı aldıktan sonra en kısa sürede teknisyenimiz kapınızda oluyor."
            distanceNote="Servis noktamız Muratpaşa'da. Mahalle içi ulaşım süresi genellikle 15-30 dakikadır."
            specialNote="Muratpaşa sakinleri olarak bizim komşumuz sayılırsınız — servis önceliği tanıyoruz."
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
