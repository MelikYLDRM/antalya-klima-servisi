import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const SITE_URL = "https://www.antalyaklimabeyazesyatamiri.com.tr";

export const metadata: Metadata = {
    title: "Antalya Çamaşır Makinesi Tamiri | Hata Kodu ve Arıza | 0542 654 61 13",
    description: "Antalya'da çamaşır makinesi tamiri: çalışmıyor, su sızdırıyor, hata kodu veriyor, sıkmıyor? Yerinde aynı gün servis, ücretsiz keşif. 0542 654 61 13",
    alternates: { canonical: `${SITE_URL}/hizmetler/camasir-makinesi-tamiri` },
    openGraph: {
        title: "Antalya Çamaşır Makinesi Tamiri | Hata Kodu ve Arıza",
        description: "Antalya'da çamaşır makinesi tamiri. Hata kodu, su sızıntısı, sıkmıyor? Yerinde aynı gün servis. 0542 654 61 13",
        url: `${SITE_URL}/hizmetler/camasir-makinesi-tamiri`,
    },
};

export default function CamasirMakinesiTamiriPage() {
    return (
        <ServicePageTemplate
            title="Çamaşır Makinesi Tamiri"
            slug="camasir-makinesi-tamiri"
            h1="Antalya Çamaşır Makinesi Tamiri"
            heroSubtitle="Çamaşır makineniz çalışmıyor, su sızdırıyor, hata kodu veriyor veya sıkmıyor mu? Antalya'da yerinde çamaşır makinesi tamiri yapıyoruz — ücretsiz keşif, aynı gün servis, orijinal yedek parça."
            serviceItems={[
                "Elektronik kart tamiri",
                "Kapı kilidi değişimi",
                "Tahliye pompası",
                "Drum/kazan rulman",
                "Hata kodu teşhisi",
                "Su alma sorunu",
            ]}
            contentSections={[
                {
                    heading: "Yaygın Çamaşır Makinesi Arızaları ve Hata Kodları",
                    body: "Çalışmıyor veya başlamıyor: Kapı kilidi, elektronik kart veya güç modülü arızası olabilir. E1 / F1 gibi hata kodları: Çoğu markada su alma sorununa işaret eder; vana veya süzgeç kontrolü yapılır. Su sızdırıyor: Körük contası, kapı contası veya hortum bağlantıları incelenir. Sıkmıyor: Rulman yıpranması, fren sistemi veya kart arızası olabilir. Aşırı titreşim yapıyor: Amortisör veya yay arızası ya da yük dengesizliği araştırılır. Tahliye etmiyor: Pompa tıkanması veya arızası kontrol edilir. Tüm bu arızalar için teknisyenimiz adresinize gelerek profesyonel teşhis uygular.",
                },
                {
                    heading: "Hangi Çamaşır Makinesi Markalarına Servis Veriyoruz?",
                    body: "Arçelik, Beko, Bosch, Samsung, LG, Siemens, Vestel, Altus, Grundig, Profilo, Miele, Electrolux, Indesit, Whirlpool ve diğer tüm marka çamaşır makinelerinin tamirini yapıyoruz. Ön yüklemeli ve üst yüklemeli modellerin yanı sıra kurutma özellikli kombi makinelerde de hizmet veriyoruz. Cihazınızın model yılı veya üretici markası ne olursa olsun arızanıza çözüm buluyoruz.",
                },
                {
                    heading: "Yerinde Çamaşır Makinesi Tamirinin Avantajları",
                    body: "Çamaşır makinesini servise taşımak hem ağır hem de zaman kaybettirici bir işlemdir. Teknisyenimiz, adresinize gelerek yerinde teşhis ve tamir yapmasıyla bu zorluğu tamamen ortadan kaldırır. Çoğu arıza, teknisyenin yanında getirdiği kapsamlı yedek parça stokuyla aynı gün çözülür. Özel sipariş gerektiren parçalar söz konusu olduğunda en geç 1-2 iş günü içinde tekrar gelerek işlemi tamamlıyoruz.",
                },
                {
                    heading: "Çamaşır Makinesi Tamirinde Fiyat ve Garanti",
                    body: "Keşif ücreti almıyoruz; teknisyenimiz gelir, arızayı inceler ve işçilik ile yedek parça bedelini içeren net fiyatı bildirir. Onaylamanız durumunda çalışmaya başlanır; onaylamazsanız hiçbir ücret talep etmiyoruz. Kullandığımız yedek parçalar orijinal veya OEM kalite eşdeğeridir. İşçilik garantisi veriyoruz; tamir sonrası aynı sorun tekrarlanırsa ücretsiz müdahale yapılır. Cihazınız 10 yaşın üstündeyse teknisyenimiz tamir mi yoksa yeni makine mi daha mantıklı olduğunu sizinle dürüstçe değerlendirir.",
                },
            ]}
            faqs={[
                {
                    question: "Çamaşır makinesi hata kodları ne anlama gelir?",
                    answer: "Her marka farklı kodlar kullanır; ancak genel olarak E1/F1 su alma, E2/F2 tahliye, E3/F3 kapı kilidi, E4/F4 termal koruma sorununu ifade eder. Teknisyenimiz tüm markalara özgü hata kodlarını okuyup yorumlayabilir ve ilgili bileşeni test ederek kesin teşhis koyar.",
                },
                {
                    question: "Çamaşır makinesini tamir ettirmek mi, yenisini almak mı daha mantıklı?",
                    answer: "Makineniz 8 yaşın altındaysa ve arıza elektronik kart veya rulman gerektirmiyorsa tamir çoğunlukla daha ekonomiktir. Rulman veya kart değişimi söz konusuysa maliyet analizi yapılması gerekir. Teknisyenimiz yerinde değerlendirerek size net bir öneri sunar.",
                },
                {
                    question: "Çamaşır makinesi tamiri kaç saatte tamamlanır?",
                    answer: "Kapı kilidi veya pompa değişimi gibi işlemler genellikle 1-2 saat içinde biter. Rulman değişimi ise 3-4 saate kadar sürebilir. Yedek parça gerekiyorsa sipariş verilerek en geç 1-2 iş günü içinde işlem tamamlanır.",
                },
                {
                    question: "Tamir sonrası garanti veriyor musunuz?",
                    answer: "Evet. İşçilik garantisi veriyoruz; değiştirilen yedek parçalar için üretici garantisi uygulanır. Tamir sonrası aynı sorun tekrarlanırsa ücretsiz müdahale yapıyoruz. Garanti koşulları tamir anında bildirilir.",
                },
                {
                    question: "Çamaşır makinesi tamiri için yerinde servis mi veriyorsunuz?",
                    answer: "Evet, tüm tamir hizmetlerimiz adresinizde yerinde gerçekleştirilir. Muratpaşa, Kepez, Konyaaltı, Döşemealtı ve Aksu dahil Antalya genelinde servis veriyoruz. Makineyi taşımanıza gerek yoktur.",
                },
            ]}
            image="/images/camasirtamir.png"
            imageAlt="Antalya çamaşır makinesi tamiri — yerinde hızlı servis"
            relatedServices={[
                { title: "Buzdolabı Tamiri", slug: "buzdolabi-tamiri" },
                { title: "Klima Tamiri", slug: "klima-tamiri" },
            ]}
        />
    );
}
