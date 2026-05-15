import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Döşemealtı Klima Tamiri, Bakım ve Servis | Antalya | 0542 654 61 13",
    description: "Döşemealtı'nda klima tamiri, bakım ve servis hizmeti. Çıplaklı, Hacılar, Işıklar ve tüm Döşemealtı mahallelerine aynı gün klima servisi. Ücretsiz keşif.",
    path: "/hizmet-bolgesi/dosemealti",
    keywords: [
        "döşemealtı klima tamiri",
        "döşemealtı klima servisi",
        "döşemealtı klima bakımı",
        "döşemealtı klima montajı",
        "antalya döşemealtı klima tamiri",
        "döşemealtı klima arıza servisi",
        "döşemealtı klima teknik servis",
        "çıplaklı klima tamiri",
        "hacılar klima servisi",
        "ışıklar klima tamiri",
        "döşemealtı klima tamir fiyatları",
        "döşemealtı buzdolabı tamiri",
        "döşemealtı çamaşır makinesi tamiri",
    ],
});

export default function DosemealtiPage() {
    return (
        <AreaPageTemplate
            areaName="Döşemealtı"
            slug="dosemealti"
            neighborhoods={["Çıplaklı", "Hacılar", "Işıklar", "Kepez Burnu", "Kızılcadağ", "Sarılar", "Pınarlı", "Bademağacı"]}
            introText="Döşemealtı ilçesindeki tüm mahallelere klima tamiri, bakım ve montaj hizmeti veriyoruz. Çıplaklı, Hacılar ve Işıklar başta olmak üzere Döşemealtı'nın her noktasına ulaşıyoruz. Şehir merkezinden biraz uzak olsa bile aynı gün servis imkânı sunuyoruz."
            bodyText="Döşemealtı'nın dağlık ve geniş coğrafyasında hem konut hem de yazlık villalara klima ve beyaz eşya tamir hizmeti sunuyoruz. Bölgenin yaz aylarındaki yüksek sıcaklığı klimaları yoğun çalıştırır; düzenli bakım yapılmayan cihazlarda arıza riski artar. Döşemealtı'nda klima tamiri, montajı, gaz dolumu ve yıllık bakım hizmetleri için bizi arayın."
            distanceNote="Döşemealtı'na ortalama 30-40 dakika içinde ulaşıyoruz. Önceden randevu almanız daha hızlı servis almanızı sağlar."
            specialNote="Döşemealtı'nda toz ve kır havasına maruz kalan klimaların filtreleri daha hızlı kirlenir. Yılda en az bir kez bakım yaptırmanızı öneririz."
            whyUsNote="Döşemealtı'nın geniş coğrafyasında çalışan deneyimli ekibimiz, randevu bazlı çalışarak bekletmeden hizmet verir. Uzak mahalleler için ekstra servis ücretimiz yoktur."
            faqs={[
                {
                    q: "Döşemealtı'nda klima tamiri alabilir miyim?",
                    a: "Evet, Döşemealtı'nın Çıplaklı, Hacılar, Işıklar ve diğer tüm mahallelerine klima tamiri hizmeti veriyoruz. Randevu almanızı öneririz; aynı gün veya ertesi gün servis sağlıyoruz.",
                },
                {
                    q: "Döşemealtı'na servis ücreti alıyor musunuz?",
                    a: "Hayır, Döşemealtı dahil tüm hizmet bölgelerimizde ek servis ücreti almıyoruz. Keşif ücretsizdir, işe başlamadan önce net fiyat bildiriyoruz.",
                },
                {
                    q: "Döşemealtı'nda klima bakımı ne zaman yaptırmalıyım?",
                    a: "Döşemealtı'nın kuru ve sıcak ikliminde klimalar yoğun çalışır. Yaz öncesi (Nisan-Mayıs) ve kış öncesi (Eylül-Ekim) bakım yaptırmanızı öneririz. Kirli filtreler hem enerji tüketimini artırır hem de cihaz ömrünü kısaltır.",
                },
                {
                    q: "Döşemealtı'nda klima montajı yapıyor musunuz?",
                    a: "Evet, Döşemealtı'nın tüm mahallelerinde split, inverter ve kaset tipi klima montajı yapıyoruz. Randevu gününde montaj ekibimiz adresinize gelir.",
                },
                {
                    q: "Döşemealtı'nda buzdolabı ve çamaşır makinesi tamiri de yapıyor musunuz?",
                    a: "Evet, Döşemealtı'nda beyaz eşya tamiri de veriyoruz. Buzdolabı, çamaşır makinesi ve bulaşık makinesi arızalarını yerinde çözüyoruz.",
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
