import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Konyaaltı Klima Tamiri, Bakım ve Servis | Antalya | 0542 654 61 13",
    description: "Konyaaltı'nda klima tamiri, bakım ve servis hizmeti. Uncalı, Sarısu, Hurma, Liman ve tüm Konyaaltı mahallelerine aynı gün profesyonel klima servisi. Ücretsiz keşif.",
    path: "/hizmet-bolgesi/konyaalti",
    keywords: [
        "konyaaltı klima tamiri",
        "konyaaltı klima servisi",
        "konyaaltı klima bakımı",
        "konyaaltı klima montajı",
        "antalya konyaaltı klima tamiri",
        "konyaaltı klima arıza servisi",
        "konyaaltı klima teknik servis",
        "uncalı klima tamiri",
        "sarısu klima servisi",
        "hurma klima tamiri",
        "konyaaltı klima tamir fiyatları",
        "konyaaltı buzdolabı tamiri",
        "konyaaltı çamaşır makinesi tamiri",
    ],
});

export default function KonyaaltiPage() {
    return (
        <AreaPageTemplate
            areaName="Konyaaltı"
            slug="konyaalti"
            neighborhoods={["Uncalı", "Sarısu", "Hurma", "Liman", "Siteler", "Arapsuyu", "Gürsu", "Zeytinköy", "Kırcami", "Çakırlar"]}
            introText="Konyaaltı'nın sahil şeridindeki konutlar, oteller ve residence yapılarına klima tamiri, bakım ve montaj hizmeti veriyoruz. Uncalı'dan Sarısu'ya, Hurma'dan Liman'a kadar Konyaaltı'nın tüm mahallelerine aynı gün servis."
            bodyText="Deniz kıyısındaki tuzlu hava, klimaların dış ünitelerini daha hızlı aşındırır. Konyaaltı'nda düzenli klima bakımı hem cihaz ömrünü uzatır hem de enerji tasarrufu sağlar. Teknisyenlerimiz sahil bölgelerindeki klima sorunlarında deneyimlidir; korozyon, kir birikimi ve gaz kayıplarına hızlı çözüm üretir."
            distanceNote="Konyaaltı'na ortalama 20-30 dakika içinde ulaşıyoruz. Uncalı ve Sarısu bölgelerine daha hızlı erişim sağlıyoruz."
            specialNote="Deniz iklimine maruz kalan dış ünitelerde korozyon ve kir birikimi hızlanır. Konyaaltı'nda yıllık bakımı aksatmayın — ömrü yıllarca uzatır."
            whyUsNote="Konyaaltı'ndaki onlarca site ve rezidansta düzenli bakım hizmeti veriyoruz. Deniz iklimine dayanıklı montaj teknikleri ve bakım yöntemleri konusunda deneyimli teknisyen ekibimiz."
            faqs={[
                {
                    q: "Konyaaltı'nda klima tamiri ne kadar sürer?",
                    a: "Konyaaltı'ndaki çağrılarda teknisyenimiz genellikle 20-30 dakika içinde adresinize ulaşır. Çoğu arıza aynı ziyarette çözülür; yedek parça gereken durumlarda 1-2 iş günü içinde tamamlanır.",
                },
                {
                    q: "Uncalı ve Sarısu'da klima servisi alabilir miyim?",
                    a: "Evet, Uncalı ve Sarısu başta olmak üzere Konyaaltı'nın tüm mahallelerine klima tamiri, bakımı ve montajı hizmeti veriyoruz.",
                },
                {
                    q: "Deniz kıyısındaki klimam neden çabuk bozuluyor?",
                    a: "Tuzlu deniz havası, klima dış ünitesindeki metal parçaları aşındırır ve filtreler daha hızlı kirlenir. Konyaaltı ve Sarısu bölgesindeki klimaların yılda en az bir kez temizlik ve kontrol yaptırması önerilir.",
                },
                {
                    q: "Konyaaltı'nda klima montajı yaptırabilir miyim?",
                    a: "Evet, tüm Konyaaltı mahallelerinde split, inverter ve kaset tipi klima montajı yapıyoruz. Sahil bölgesine uygun montaj materyalleri kullanıyoruz.",
                },
                {
                    q: "Konyaaltı'nda klima bakımı kaça mal olur?",
                    a: "Bakım fiyatı cihaz tipine ve durumuna göre değişir. Ücretsiz keşif sonrası net fiyat veriyoruz. Konyaaltı'nda düzenli bakım yaptıranlar için avantajlı paketlerimiz mevcuttur.",
                },
                {
                    q: "Konyaaltı'nda acil klima arızasında ne yapmalıyım?",
                    a: "0542 654 61 13 numaralı hattı arayın veya WhatsApp üzerinden mesaj gönderin. Çalışma saatlerimiz içinde Konyaaltı'nda aynı gün servis sağlıyoruz.",
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
