import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const SITE_URL = "https://www.antalyaklimabeyazesyatamiri.com.tr";

export const metadata: Metadata = {
    title: "Antalya Klima Tamiri | 0542 654 61 13 — Aynı Gün Servis",
    description: "Antalya'da klima tamiri. Tüm marka ve modeller — soğutmuyor, sesli çalışıyor, su akıtıyor? Ücretsiz keşif, aynı gün servis: 0542 654 61 13",
    alternates: { canonical: `${SITE_URL}/hizmetler/klima-tamiri` },
    openGraph: {
        title: "Antalya Klima Tamiri | Aynı Gün Servis",
        description: "Antalya'da klima tamiri. Tüm marka ve modeller, ücretsiz keşif. 0542 654 61 13",
        url: `${SITE_URL}/hizmetler/klima-tamiri`,
    },
};

export default function KlimaTamiriPage() {
    return (
        <ServicePageTemplate
            title="Klima Tamiri"
            slug="klima-tamiri"
            h1="Antalya Klima Tamiri"
            heroSubtitle="Klimanız soğutmuyor, sesli çalışıyor ya da su mu akıtıyor? Antalya Muratpaşa'dan tüm ilçelere klima tamir hizmeti veriyoruz. Ücretsiz keşif, aynı gün servis, orijinal yedek parça."
            serviceItems={[
                "Soğutma ve ısıtma problemi çözümü",
                "Kompresör tamiri ve değişimi",
                "Gaz kaçağı tespiti ve dolumu",
                "Elektronik kart arızası",
                "Su akıtma sorunu",
                "Tüm marka ve modeller",
            ]}
            contentSections={[
                {
                    heading: "Antalya Klima Tamirinde 10 Yıllık Deneyim",
                    body: "Antalya'nın sıcak iklimiyle birlikte klimalar mevsim boyunca yoğun çalışır. Bu yoğun kullanım zamanla çeşitli arızalara zemin hazırlar. Muratpaşa merkezli servis noktamızdan Kepez, Konyaaltı, Döşemealtı ve Aksu'ya uzanan geniş hizmet ağımızla, 10 yıllık deneyimimizi ve uzman teknisyen kadromuzla her arızaya hızlıca müdahale ediyoruz. Klima tamirinde kalite standartlarımızdan ödün vermiyoruz; işe başlamadan önce arızayı tespit edip size net bir fiyat sunuyoruz.",
                },
                {
                    heading: "Hangi Klima Markalarına Bakım ve Tamir Yapıyoruz?",
                    body: "Daikin, Mitsubishi Electric, Samsung, LG, Bosch, Arçelik, Vestel, Baymak, Alarko, Gree, Midea, Fujitsu, Toshiba, Panasonic ve diğer tüm marka klimaların tamirini yapıyoruz. Split klima, inverter klima, kaset tipi klima, VRF sistemler ve multi-split sistemlerde de hizmet veriyoruz. Markanız ne olursa olsun, arızanıza çözüm buluyoruz.",
                },
                {
                    heading: "En Sık Karşılaşılan Klima Arızaları",
                    body: "Soğutmuyor veya ısıtmıyor: En yaygın arızalardan biri, genellikle gaz kaçağından ya da kompresör sorunlarından kaynaklanır. Sesli çalışıyor: Fan palası, rulman veya titreşim kaynağı incelenerek giderilir. Su akıtıyor: Drenaj borusunun tıkanması veya yanlış montajdan kaynaklanır. Hata kodu veriyor: Elektronik kart veya sensör arızası incelenir. Kapanıyor, yeniden açılıyor: Termistor veya kart sorunu olabilir. Tüm bu arızalar için teknisyenimiz adresinize gelir, teşhis koyar ve bilginiz dahilinde tamir uygular.",
                },
                {
                    heading: "Klima Tamirinde Fiyat Politikamız",
                    body: "Antalya klima tamirinde şeffaf fiyat politikası uyguluyoruz. Keşif ücreti almıyoruz; teknisyenimiz gelir, arızayı inceler ve işçilik ile yedek parça maliyetini içeren net fiyatı bildirir. Onay vermeniz durumunda çalışmaya başlanır; onay vermezseniz herhangi bir ücret talep etmiyoruz. Kullandığımız yedek parçalar orijinal veya OEM kalite eşdeğeri parçalardır, böylece cihazınızın performansını koruyoruz.",
                },
            ]}
            faqs={[
                {
                    question: "Klima tamiri ne kadar sürer?",
                    answer: "Arızanın türüne göre değişmekle birlikte, çoğu tamir aynı gün tamamlanır. Sabah yapılan başvurular genellikle öğleden sonra bitirilir. Yedek parça gerekiyorsa en geç 1-2 iş günü içinde işlem tamamlanır.",
                },
                {
                    question: "Klima tamir ücreti ne kadar?",
                    answer: "Tamir ücreti, arızanın türüne ve gerekli parçaya göre değişir. Keşif ücreti almıyoruz; teknisyenimiz gelir, arızayı inceler ve net fiyatı bildirir. Onay vermeniz durumunda işe başlanır.",
                },
                {
                    question: "Klima tamirinde garanti veriyor musunuz?",
                    answer: "Evet, işçilik garantisi veriyoruz. Değiştirilen yedek parçalar için üretici garantisi uygulanır. Tamir sonrası aynı arıza tekrarlanırsa ücretsiz müdahale yapıyoruz.",
                },
                {
                    question: "Klima tamiri için adresime gelir misiniz?",
                    answer: "Evet, tüm tamir hizmetlerimiz adresinizde yerinde yapılmaktadır. Muratpaşa, Kepez, Konyaaltı, Döşemealtı ve Aksu'ya servis veriyoruz. Cihazınızı taşımanıza gerek yoktur.",
                },
                {
                    question: "Klima tamiri mi yoksa yeni klima almak mı daha mantıklı?",
                    answer: "Klimanız 10 yaşın altındaysa ve arıza kompresör değişimi gerektirmiyorsa, tamir genellikle daha ekonomiktir. Teknisyenimiz yerinde değerlendirme yaparak size dürüst bir öneri sunar.",
                },
            ]}
            image="/images/klimatamir.jpg"
            imageAlt="Antalya klima tamiri — uzman teknisyen servis"
            relatedServices={[
                { title: "Klima Montajı", slug: "klima-montaji" },
                { title: "Klima Bakımı", slug: "klima-bakimi" },
                { title: "Buzdolabı Tamiri", slug: "buzdolabi-tamiri" },
            ]}
        />
    );
}
