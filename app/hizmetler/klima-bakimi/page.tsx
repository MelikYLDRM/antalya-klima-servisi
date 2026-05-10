import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const SITE_URL = "https://www.antalyaklimabeyazesyatamiri.com.tr";

export const metadata: Metadata = {
    title: "Antalya Klima Bakımı | Periyodik Temizlik ve Kontrol | 0542 654 61 13",
    description: "Antalya'da yıllık klima bakımı: filtre temizliği, dış ünite yıkama, gaz kontrolü. Cihaz ömrünü uzatın, enerji faturasını düşürün. Ücretsiz keşif: 0542 654 61 13",
    alternates: { canonical: `${SITE_URL}/hizmetler/klima-bakimi` },
    openGraph: {
        title: "Antalya Klima Bakımı | Periyodik Temizlik ve Kontrol",
        description: "Antalya'da yıllık klima bakımı. Filtre temizliği, gaz kontrolü, dış ünite yıkama. 0542 654 61 13",
        url: `${SITE_URL}/hizmetler/klima-bakimi`,
    },
};

export default function KlimaBakimiPage() {
    return (
        <ServicePageTemplate
            title="Klima Bakımı"
            slug="klima-bakimi"
            h1="Antalya Klima Bakımı"
            heroSubtitle="Yıllık periyodik klima bakımı ile cihazınızın ömrünü uzatın, enerji faturalarınızı düşürün. Filtre temizliği, gaz seviyesi kontrolü ve dış ünite yıkama dahildir. Antalya genelinde yerinde bakım hizmeti."
            serviceItems={[
                "Filtre ve iç ünite temizliği",
                "Dış ünite yıkama",
                "Gaz seviyesi kontrolü",
                "Elektrik bağlantı kontrolü",
                "Sezon öncesi hazırlık",
                "Enerji verimlilik testi",
            ]}
            contentSections={[
                {
                    heading: "Düzenli Klima Bakımı Neden Bu Kadar Önemlidir?",
                    body: "Klima bakımı yaptırmamak, zamanla hem cihazın performansının düşmesine hem de enerji tüketiminin artmasına neden olur. Kirli filtreler klimanın daha fazla güç harcamasına, kompresörün erken yıpranmasına ve iç ortam havasının kirlenmesine yol açar. Antalya'nın tuzlu ve nemli iklimi dış ünitelerin daha hızlı paslanmasına zemin hazırlar. Yıllık bakım ile bu sorunların önüne geçer, olası büyük arızaları başlamadan durdurursunuz.",
                },
                {
                    heading: "Klima Bakımı Ne Zaman Yapılmalıdır?",
                    body: "Yoğun kullanım öncesinde, yani Nisan-Mayıs aylarında yaz sezonu bakımı yapılması önerilir. Kışın ısıtma amaçlı kullanacaksanız Ekim ayında ikinci bir bakım faydalı olur. Bunların yanı sıra klimanızın verimliliği gözle görülür biçimde düştüyse, sesli çalışmaya başladıysa veya kötü koku veriyorsa mevsim beklemeden bakım yaptırmanız gerekir. Yıllık iki bakım, Antalya iklimine göre ideal frekanstır.",
                },
                {
                    heading: "Klima Bakımı Neleri Kapsar?",
                    body: "İç ünite filtrelerinin temizlenmesi ve dezenfekte edilmesi, evaporatör serpantinin basınçlı su ile yıkanması, drenaj borusunun temizlenmesi ve akış kontrolü, dış ünite kondenser serpantininin temizlenmesi, elektrik bağlantılarının sıkıştırılması ve kontrol edilmesi, gaz basıncının ölçülmesi ile gerekirse dolum yapılması ve termostat ile sensörlerin kalibrasyonu bakımın temel adımlarını oluşturur. İşlem sonunda cihaz soğutma-ısıtma kapasitesi açısından test edilir.",
                },
                {
                    heading: "Klima Bakımı Enerji Tasarrufu Sağlar mı?",
                    body: "Evet, yapılan araştırmalar düzenli bakımlı bir klimanın bakımsız bir klimaya kıyasla yüzde on beş ile yüzde yirmi beş arasında daha az enerji tükettiğini ortaya koymaktadır. Temiz filtreler ve serpantinler, klimanın belirlenen sıcaklığa daha kısa sürede ulaşmasını sağlar; kompresörün uzun süre çalışması önlenir. Bu sayede hem faturanız düşer hem de cihazınızın ömrü uzar. Bakım maliyeti, kaçınılan arıza ve enerji masraflarıyla kısa sürede kendini amorti eder.",
                },
            ]}
            faqs={[
                {
                    question: "Klima bakımı ne kadar sürer?",
                    answer: "Standart bir split klimanın bakımı 45 dakika ile 1,5 saat arasında tamamlanır. Birden fazla iç ünite varsa ya da dış ünite kapsamlı temizlik gerektiriyorsa süre uzayabilir. Bakım sırasında evinizde bulunmanız yeterlidir.",
                },
                {
                    question: "Klima bakım fiyatı ne kadar?",
                    answer: "Bakım ücreti, cihaz sayısı ve tipine göre belirlenir. Tek split klima bakımı için sabit fiyatımız mevcuttur. Çoklu cihaz veya ticari sistemlerde fiyat görüşme ile netleşir. Keşif ücreti almıyoruz.",
                },
                {
                    question: "Klimam kaç yılda bir bakım yaptırmalıyım?",
                    answer: "Antalya'nın iklim koşulları göz önüne alındığında yılda en az bir kez, yoğun kullanıyorsanız yılda iki kez bakım önerilir. Konut kullanımında sezon öncesi (Nisan-Mayıs) bakım en pratik zamandır.",
                },
                {
                    question: "Klima bakımı yapılmazsa ne olur?",
                    answer: "Kirli filtreler ve serpantinler nedeniyle enerji tüketimi artar, soğutma kapasitesi düşer. Uzun vadede kompresör aşırı yüklenip bozulabilir; bu tür onarımlar genellikle yeni bir klima almanın maliyetine yaklaşır. Ayrıca tıkanan drenaj borusu su akıtma sorununa yol açar.",
                },
                {
                    question: "Bakım için hangi ay randevu almalıyım?",
                    answer: "Yaz sezonu öncesi için Nisan veya Mayıs ayı idealdir. Kış hazırlığı için Eylül sonu ya da Ekim önerilir. Yaz sezonunda (Haziran-Ağustos) teknisyen talebinin yoğunlaştığını göz önünde bulundurarak önceden randevu almanızı tavsiye ederiz.",
                },
            ]}
            image="/images/klimabakim.jpg"
            imageAlt="Antalya klima bakımı — filtre temizliği ve dış ünite yıkama"
            relatedServices={[
                { title: "Klima Tamiri", slug: "klima-tamiri" },
                { title: "Klima Montajı", slug: "klima-montaji" },
            ]}
        />
    );
}
