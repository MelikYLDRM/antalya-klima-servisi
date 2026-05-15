import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Kepez Klima Tamiri, Bakım ve Servis | Antalya | 0542 654 61 13",
    description: "Kepez'de klima tamiri, bakım ve servis hizmeti. Altınova, Gürsu, Varsak, Şafak, Şelale ve tüm Kepez mahallelerine aynı gün profesyonel klima servisi. Ücretsiz keşif.",
    path: "/hizmet-bolgesi/kepez",
    keywords: [
        "kepez klima tamiri",
        "kepez klima servisi",
        "kepez klima bakımı",
        "kepez klima montajı",
        "antalya kepez klima tamiri",
        "kepez klima arıza servisi",
        "kepez klima teknik servis",
        "varsak klima tamiri",
        "altınova klima servisi",
        "gürsu klima tamiri",
        "kepez klima tamir fiyatları",
        "kepez buzdolabı tamiri",
        "kepez çamaşır makinesi tamiri",
    ],
});

export default function KepezPage() {
    return (
        <AreaPageTemplate
            areaName="Kepez"
            slug="kepez"
            neighborhoods={["Altınova", "Gürsu", "Varsak", "Santral", "Şafak", "Şelale", "Yeşildere", "Yıldırım", "Kışla", "Uncalı Sanayi", "Güzeloba", "Doyran", "Kepez Burnu"]}
            introText="Kepez, Antalya'nın en kalabalık ilçesi. Altınova, Varsak ve Gürsu başta olmak üzere tüm Kepez mahallelerine aynı gün klima tamiri ve bakım hizmeti veriyoruz. Geniş servis ağımız sayesinde Kepez'in her noktasına ulaşıyoruz."
            bodyText="Kepez'in büyük konut sitelerinde, apartman bloklarında ve ticari işletmelerde klima arızaları çok sık yaşanır. Yoğun sezonlarda bile en kısa sürede adresinize ulaşan teknisyenlerimiz her marka klimaya müdahale eder. Kepez'de klima tamiri, montajı, gaz dolumu ve periyodik bakım hizmetlerini ücretsiz keşif garantisiyle sunuyoruz."
            distanceNote="Kepez'e ortalama 20-35 dakika içinde ulaşıyoruz. Varsak ve Altınova bölgelerine daha hızlı servis sağlıyoruz."
            specialNote="Kepez'deki yoğun nüfus yoğunluğu nedeniyle yaz aylarında erken randevu almanızı öneririz. Aynı gün servis için sabah aramanız yeterli."
            whyUsNote="Kepez'deki müşterilerimiz son 3 yılda ortalama %95 memnuniyet oranıyla hizmet aldı. Klima tamiri, montajı ve bakımında Kepez'in güvenilir servisi olarak bilinen ekibimiz kapınızda."
            faqs={[
                {
                    q: "Kepez'de klima tamiri ne kadar sürer?",
                    a: "Kepez'deki çağrılarda teknisyenimiz genellikle 20-35 dakika içinde adresinize ulaşır. Standart arızalar (gaz dolumu, kart arızası, filtre temizliği) aynı ziyarette tamamlanır. Yedek parça gerekirse 1-2 iş günü içinde biter.",
                },
                {
                    q: "Varsak'ta klima servisi alabilir miyim?",
                    a: "Evet, Varsak ve Kepez'in tüm mahallelerine klima tamiri, bakımı ve montajı hizmeti veriyoruz. Varsak'a servis süremiz yaklaşık 20-30 dakikadır.",
                },
                {
                    q: "Kepez'de klima bakımı ne zaman yaptırmalıyım?",
                    a: "Antalya'nın sıcak iklimine bağlı olarak Kepez'deki klimaların yoğun çalışması nedeniyle yılda en az bir kez bakım öneriyoruz. İdeal dönem yaz öncesi Nisan-Mayıs ve kış öncesi Eylül-Ekim aylarıdır.",
                },
                {
                    q: "Kepez'de klima montajı kaça mal olur?",
                    a: "Kepez'de klima montajı fiyatı, cihazın tipine ve kurulum yerine göre değişir. Ücretsiz keşif sonrası net fiyat bildiriyoruz. Gizli maliyet yoktur.",
                },
                {
                    q: "Kepez'de hangi marka klimaları tamir ediyorsunuz?",
                    a: "Daikin, Mitsubishi, Samsung, LG, Arçelik, Bosch, Vestel, Baymak, Alarko, Gree, Midea ve diğer tüm marka klimaları Kepez'de tamir ediyoruz.",
                },
                {
                    q: "Kepez'de acil klima arızasında ne yapmalıyım?",
                    a: "0542 654 61 13 numaralı hattı arayın veya WhatsApp'tan mesaj gönderin. Kepez'deki acil çağrılara çalışma saatleri içinde (Pazartesi–Cumartesi 09:30–19:00) aynı gün müdahale ediyoruz.",
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
