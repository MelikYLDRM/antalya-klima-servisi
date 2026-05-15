import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Antalya Klima Montajı ve Servisi | Split Inverter Kaset Tipi | 0542 654 61 13",
    description: "Antalya'da profesyonel klima montaj ve servis hizmeti. Split, inverter ve kaset tipinde doğru konumlama, sızdırmaz bağlantı ve güvenli kurulum.",
    path: "/hizmetler/klima-montaji",
    keywords: ["antalya klima montajı", "klima kurulum servisi antalya", "split klima montaj"],
});

export default function KlimaMontajiPage() {
    return (
        <ServicePageTemplate
            title="Klima Montajı"
            slug="klima-montaji"
            h1="Antalya Klima Montajı"
            heroSubtitle="Yeni klima aldınız ve profesyonel montaj mı arıyorsunuz? Split, inverter ve kaset tipi klimaların doğru konumlama, sızdırmaz boru bağlantısı ve tam gaz dolumu ile montajını yapıyoruz. Antalya genelinde aynı gün kurulum imkânı."
            serviceItems={[
                "Split klima montajı",
                "İnverter klima kurulumu",
                "Kaset tipi klima",
                "Multi-split sistem",
                "Söküp takma / deplasman",
                "Gaz dolumu dahil",
            ]}
            contentSections={[
                {
                    heading: "Profesyonel Klima Montaj Süreci Nasıl İşler?",
                    body: "Klima montajı yalnızca cihazı duvara asmaktan ibaret değildir. Doğru bir montaj; iç ve dış ünite için en uygun konumun belirlenmesi, bakır boruların sızdırmaz biçimde bağlanması, elektrik tesisatının güvenli yapılması ve sistemin vakum çekilerek gaz basıncının kontrol edilmesini kapsar. Teknisyenlerimiz bu adımların tamamını eksiksiz uygular; montaj sonrası çalışma testini de sizin gözünüzün önünde gerçekleştirir.",
                },
                {
                    heading: "Hangi Klima Tipini Seçmelisiniz?",
                    body: "Split klima, tek odalar için en yaygın tercih olup kurulumu pratiktir. İnverter teknolojisi, sabit devirli modellere kıyasla yüzde kırka kadar enerji tasarrufu sağlar; uzun vadede fatura avantajı sunar. Kaset tipi klimalar ticari alanlarda tavana monte edilerek 360 derece hava dağılımı sağlar. Multi-split sistemler ise tek dış üniteye birden fazla iç ünite bağlayarak çok odalı çözümler sunar. Hangi tipin size uygun olduğunu belirlemek için ücretsiz keşif hizmetimizden yararlanabilirsiniz.",
                },
                {
                    heading: "Doğru Konum Seçimi Neden Önemlidir?",
                    body: "İç ünitenin yanlış konumlandırılması, soğuk havanın odaya eşit dağılmamasına, drenaj sorunlarına ve gürültüye yol açar. Dış ünite ise yeterli hava sirkülasyonu olan, doğrudan güneş ışığına maruz kalmayan ve bakım için erişilebilir bir yere yerleştirilmelidir. Teknisyenlerimiz, yerinde yaptıkları keşifle bu kriterleri değerlendirir ve en verimli konumu belirler. Daire, villa, iş yeri veya ticari alan fark etmeksizin standartlarımızdan ödün vermiyoruz.",
                },
                {
                    heading: "Klima Montajında Fiyat ve Garanti",
                    body: "Montaj ücreti; cihaz tipi, iç-dış ünite arası mesafe, kaç metre boru kullanılacağı ve elektrik bağlantısı durumuna göre belirlenir. Keşif sırasında tüm bu faktörler değerlendirilerek size net bir fiyat sunulur; gizli ücret yoktur. Montaj işçiliğimize garanti veriyoruz: montaj kaynaklı herhangi bir sorun yaşamanız hâlinde ücretsiz müdahale yapıyoruz. Kullandığımız boru ve fitting malzemeleri sektör standartlarına uygun, uzun ömürlü ürünlerdir.",
                },
            ]}
            faqs={[
                {
                    question: "Klima montajı ne kadar sürer?",
                    answer: "Standart bir split klima montajı ortalama 2-3 saat içinde tamamlanır. Kaset tipi veya multi-split sistemlerde bu süre 4-6 saate uzayabilir. Aynı gün servis için sabah erken saatte randevu almanızı öneririz.",
                },
                {
                    question: "Klima montajı fiyatı ne kadar?",
                    answer: "Montaj ücreti; cihaz tipi, boru mesafesi ve elektrik altyapısına göre değişir. Keşif ücreti almıyoruz; teknisyenimiz adresinize gelir, yerinde inceleyerek net fiyat bildirir. Onay vermeden işe başlanmaz.",
                },
                {
                    question: "Klimayı hangi kata veya hangi duvara monte edebilirsiniz?",
                    answer: "Bodrum katından en üst kata kadar her katta montaj yapıyoruz. İç ünite için ideal yükseklik zeminden 1,8-2,2 metredir; dış ünite ise zemin, balkon veya çatı üstüne güvenli biçimde sabitlenir. Zorunlu hâllerde konsol ve özel brakete ile çözüm üretiyoruz.",
                },
                {
                    question: "Eski klimayı da söküp yeni yere takabilir misiniz?",
                    answer: "Evet, söküp takma (deplasman) hizmeti veriyoruz. Eski klimanızı dikkatlice söküyor, gazını koruyarak yeni adresinize veya farklı bir odaya monte ediyoruz. İşlem öncesinde gaz basıncı ve sistem durumu kontrol edilir.",
                },
                {
                    question: "Kaç iş günü içinde gelirsiniz?",
                    answer: "Genellikle aynı gün veya ertesi gün randevu verebiliyoruz. Yoğun sezonlarda (Mayıs-Eylül) 1-2 iş günü bekleyebilirsiniz. Acil montaj taleplerinizde bizi arayın, programımıza göre en erken tarihi belirliyoruz.",
                },
            ]}
            image="/images/klima-montaji-yeni.jpg"
            imageAlt="Antalya klima montajı — split inverter uzman kurulum"
            relatedServices={[
                { title: "Klima Tamiri", slug: "klima-tamiri" },
                { title: "Klima Bakımı", slug: "klima-bakimi" },
            ]}
        />
    );
}
