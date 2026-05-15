import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Aksu Klima Tamiri, Bakım ve Servis | Antalya | 0542 654 61 13",
    description: "Aksu'da klima tamiri, bakım ve servis hizmeti. Düden, Çandır, Perge, Lara ve tüm Aksu mahallelerine aynı gün profesyonel klima servisi. Ücretsiz keşif.",
    path: "/hizmet-bolgesi/aksu",
    keywords: [
        "aksu klima tamiri",
        "aksu klima servisi",
        "aksu klima bakımı",
        "aksu klima montajı",
        "antalya aksu klima tamiri",
        "aksu klima arıza servisi",
        "aksu klima teknik servis",
        "düden klima tamiri",
        "perge klima servisi",
        "lara aksu klima tamiri",
        "aksu klima tamir fiyatları",
        "aksu buzdolabı tamiri",
        "aksu çamaşır makinesi tamiri",
    ],
});

export default function AksuPage() {
    return (
        <AreaPageTemplate
            areaName="Aksu"
            slug="aksu"
            neighborhoods={["Düden", "Çandır", "Serik Yolu", "Karaöz", "Perge", "Atatürk", "Yenigöl", "Göksu", "Turunçlu"]}
            introText="Antalya'nın doğu kapısı Aksu'ya da klima tamiri, bakım ve montaj hizmeti veriyoruz. Düden Şelalesi bölgesinden Perge'ye, Lara koridorundan Serik yoluna kadar Aksu'nun tüm noktalarına ulaşıyoruz."
            bodyText="Aksu'da hem konut hem de ticari alanlara klima ve beyaz eşya tamir hizmeti sunuyoruz. Havalimanı yakınındaki otel ve konutlara özel hizmet deneyimimiz var. Aksu'da klima tamiri, bakımı, gaz dolumu ve montajı için ücretsiz keşif yapıyoruz; işe başlamadan net fiyat bildiriyoruz."
            distanceNote="Aksu'ya ortalama 25-40 dakika içinde ulaşıyoruz. Düden ve Perge bölgelerine daha kısa sürede erişim sağlıyoruz."
            specialNote="Havalimanı bölgesine yakın Aksu'daki turizm tesisleri ve konutlarda yoğun klima kullanımı yaşanır. Yaz sezonunda erken randevu almanızı öneririz."
            whyUsNote="Aksu'daki otel, apart ve konutlara yıllarca düzenli bakım hizmeti veren ekibimiz, bölgenin iklim koşullarını ve yapı özelliklerini iyi tanır."
            faqs={[
                {
                    q: "Aksu'da klima tamiri alabilir miyim?",
                    a: "Evet, Aksu'nun Düden, Çandır, Perge ve tüm mahallelerine klima tamiri, bakımı ve montajı hizmeti veriyoruz. Genellikle aynı gün servis sağlıyoruz.",
                },
                {
                    q: "Düden bölgesinde klima servisi veriyor musunuz?",
                    a: "Evet, Düden ve çevresine klima tamiri, bakımı ve montajı yapıyoruz. Düden bölgesine ulaşım süremiz yaklaşık 25-35 dakikadır.",
                },
                {
                    q: "Aksu'da klima bakımı ne zaman yaptırmalıyım?",
                    a: "Turizm sezonunun yoğun olduğu Aksu'da yaz öncesi (Nisan-Mayıs) bakım yaptırmanızı kesinlikle öneririz. Klimanızın sezon boyunca sorunsuz çalışması için düzenli bakım şarttır.",
                },
                {
                    q: "Aksu'da hangi marka klimaları tamir ediyorsunuz?",
                    a: "Daikin, Mitsubishi, Samsung, LG, Arçelik, Bosch, Vestel, Baymak, Alarko, Gree ve tüm markalarda Aksu'da klima tamiri yapıyoruz.",
                },
                {
                    q: "Aksu'da buzdolabı ve çamaşır makinesi tamiri de yapıyor musunuz?",
                    a: "Evet, Aksu'da beyaz eşya tamiri de sunuyoruz. Buzdolabı, çamaşır makinesi arızalarını yerinde çözüyoruz.",
                },
                {
                    q: "Aksu'da acil klima arızasında nasıl ulaşabilirim?",
                    a: "0542 654 61 13 numaralı hattı arayın veya WhatsApp'tan mesaj gönderin. Aksu'daki acil çağrılara çalışma saatlerimiz içinde aynı gün müdahale ediyoruz.",
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
