import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Muratpaşa Klima Tamiri, Bakım ve Servis | Antalya | 0542 654 61 13",
    description: "Muratpaşa'da klima tamiri, bakım ve servis hizmeti. Tahılpazarı, Kışla, Fener, Lara ve Şirinyalı mahallelerinde aynı gün profesyonel klima servisi.",
    path: "/hizmet-bolgesi/muratpasa",
    keywords: [
        "muratpaşa klima tamiri",
        "muratpaşa klima servisi",
        "muratpaşa klima bakımı",
        "muratpaşa klima montajı",
        "antalya muratpaşa klima tamiri",
        "muratpaşa klima arıza servisi",
        "tahılpazarı klima servisi",
        "lara klima tamiri",
        "fener klima servisi",
        "şirinyalı klima tamiri",
        "muratpaşa klima tamir fiyatları",
        "muratpaşa buzdolabı tamiri",
        "muratpaşa çamaşır makinesi tamiri",
    ],
});

export default function MuratpasaPage() {
    return (
        <AreaPageTemplate
            areaName="Muratpaşa"
            slug="muratpasa"
            neighborhoods={["Tahılpazarı", "Kışla", "Sinan", "Fener", "Şirinyalı", "Lara", "Güzeloba", "Çağlayan", "Memurevleri", "Balbey", "Bahçelievler", "Altındağ"]}
            introText="Servis merkezimiz Muratpaşa Tahılpazarı Mahallesi'nde bulunuyor. Bu sayede Muratpaşa'nın tüm mahallelerine en hızlı şekilde ulaşabiliyoruz. Klima tamiri, montajı, bakımı ve beyaz eşya tamirinde Muratpaşa'nın en yakın ve güvenilir servisi biziz."
            bodyText="Muratpaşa ilçemizin tüm mahallelerine hizmet veriyoruz. Tahılpazarı'ndan Lara'ya, Fener'den Şirinyalı'ya kadar adresinize gelip arızanızı çözüyoruz. Çağrınızı aldıktan sonra en kısa sürede teknisyenimiz kapınızda oluyor. Muratpaşa'da klima tamiri, gaz dolumu, yıllık bakım ve yeni klima montajı için ücretsiz keşif sunuyoruz."
            distanceNote="Servis noktamız Muratpaşa'da. Mahalle içi ulaşım süresi genellikle 15-30 dakikadır."
            specialNote="Muratpaşa sakinleri olarak bizim komşumuz sayılırsınız — servis önceliği tanıyoruz. Tahılpazarı, Kışla ve Sinan mahallelerine 15 dakika içinde ulaşabiliyoruz."
            whyUsNote="Servis merkezimiz Muratpaşa'da olduğundan klima tamiri için en kısa sürede kapınızdayız. Mahalle içi çağrılarda genellikle 1 saat içinde müdahale ediyoruz."
            faqs={[
                {
                    q: "Muratpaşa'da klima tamiri ne kadar sürer?",
                    a: "Muratpaşa'daki çağrılara teknisyenimiz genellikle 15-30 dakika içinde ulaşır; çünkü servis merkezimiz Tahılpazarı'nda bulunuyor. Standart arızalar aynı ziyarette tamamlanır.",
                },
                {
                    q: "Lara ve Şirinyalı'da klima servisi alabilir miyim?",
                    a: "Evet, Lara ve Şirinyalı başta olmak üzere Muratpaşa'nın tüm mahallelerine klima tamiri, bakımı ve montajı hizmeti veriyoruz.",
                },
                {
                    q: "Muratpaşa'da klima bakımı kaça mal olur?",
                    a: "Bakım fiyatı cihazın tipine ve durumuna göre değişir. Ücretsiz keşif sonrası net fiyat bildiriyoruz. Gizli maliyet yoktur.",
                },
                {
                    q: "Muratpaşa'da acil klima arızasında ne yapmalıyım?",
                    a: "0542 654 61 13 numaralı hattı arayın veya WhatsApp'tan mesaj gönderin. Muratpaşa'daki acil çağrılarda çalışma saatleri içinde aynı gün, çoğunlukla 1-2 saat içinde müdahale ediyoruz.",
                },
            ]}
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
