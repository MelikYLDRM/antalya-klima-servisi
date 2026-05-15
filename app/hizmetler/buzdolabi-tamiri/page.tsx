import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Antalya Buzdolabı Tamir ve Servis | Yerinde Hızlı Destek | 0542 654 61 13",
    description: "Antalya'da buzdolabı tamir ve servis hizmeti: soğutmuyor, buz yapıyor, su akıtıyor sorunlarında yerinde aynı gün destek ve ücretsiz keşif.",
    path: "/hizmetler/buzdolabi-tamiri",
    keywords: ["antalya buzdolabı tamiri", "buzdolabı servis antalya", "yerinde beyaz eşya servisi"],
});

export default function BuzdolabiTamiriPage() {
    return (
        <ServicePageTemplate
            title="Buzdolabı Tamiri"
            slug="buzdolabi-tamiri"
            h1="Antalya Buzdolabı Tamiri"
            heroSubtitle="Buzdolabınız soğutmuyor, aşırı buz yapıyor, su akıtıyor veya motor sesi çıkarıyor mu? Antalya'da yerinde buzdolabı tamiri yapıyoruz — ücretsiz keşif, aynı gün servis, orijinal yedek parça."
            serviceItems={[
                "Soğutma problemi",
                "Kompresör tamiri ve değişimi",
                "Termostat arızası",
                "Kapı contası değişimi",
                "Dondurucu bölmesi tamiri",
                "Elektronik kart arızası",
            ]}
            contentSections={[
                {
                    heading: "Buzdolabında En Sık Karşılaşılan Arızalar",
                    body: "Soğutmuyor: Gazın bitmesi, kompresör arızası veya termostat bozukluğu en yaygın nedenlerdir. Aşırı buz yapıyor: Defrost (çözündürme) sistemi veya kapı contası sorununa işaret eder. Su akıtıyor: Buzlanma nedeniyle tıkanan drenaj kanalı veya hasarlı conta kaynaklı olabilir. Motor sesi çıkarıyor: Kompresörün yıpranması ya da klimatik sistemdeki titreşimden kaynaklanır. Işık yanmıyor veya hata kodu veriyor: Elektronik kart, kapı şalteri veya sensör arızası incelenir. Tüm bu arızalar için teknisyenimiz adresinize gelerek yerinde teşhis koyar.",
                },
                {
                    heading: "Hangi Buzdolabı Markalarına Servis Veriyoruz?",
                    body: "Arçelik, Beko, Bosch, Samsung, LG, Siemens, Vestel, Altus, Grundig, Profilo, Miele, Electrolux, Liebherr, Whirlpool ve diğer tüm marka buzdolaplarının tamirini yapıyoruz. Tek kapılı, çift kapılı, Amerikan tipi, alttan donduruculu (no-frost) ve statik modellerin tamamında hizmet veriyoruz. Cihazınızın modeli veya yaşı ne olursa olsun arızanıza çözüm buluyoruz.",
                },
                {
                    heading: "Yerinde Buzdolabı Tamirinin Avantajları",
                    body: "Buzdolabını servise taşımak hem yorucu hem de zaman kaybettiricidir; üstelik taşıma sırasında hasar riski de bulunur. Teknisyenimiz adresinize gelerek yerinde teşhis ve tamir yapmasıyla bu tüm zahmetler ortadan kalkar. Çoğu arıza, aynı gün teknisyenin yanında getirdiği yedek parçalarla çözülür. Yedek parça özel sipariş gerektirdiğinde en geç 1-2 iş günü içinde geri dönüş sağlıyoruz.",
                },
                {
                    heading: "Buzdolabı Tamirinde Fiyat Politikamız",
                    body: "Keşif ücreti almıyoruz; teknisyenimiz gelir, arızayı inceler ve işçilik ile yedek parça bedelini kapsayan net fiyatı bildirir. Fiyatı onaylamanız durumunda tamire başlanır, onaylamazsanız hiçbir ücret talep etmiyoruz. Kullandığımız parçalar orijinal veya OEM kalitesinde olup uygun şartlarda garanti kapsamındadır. Tamir işçiliğine de garanti veriyoruz; aynı arızanın tekrarlanması durumunda ücretsiz müdahale yapılır.",
                },
            ]}
            faqs={[
                {
                    question: "Buzdolabı tamiri kaç saatte tamamlanır?",
                    answer: "Arızanın türüne göre değişmekle birlikte termostat değişimi, kapı contası takılması veya drenaj temizliği gibi işlemler genellikle 1-2 saat içinde tamamlanır. Kompresör değişimi gibi daha kapsamlı işlemler yarım gün sürebilir. Yedek parça gerekiyorsa en geç 1-2 iş günü içinde tekrar gelinir.",
                },
                {
                    question: "Buzdolabı tamiri için yerime gelir misiniz?",
                    answer: "Evet, tüm tamir hizmetlerimiz adresinizde yerinde yapılır. Muratpaşa, Kepez, Konyaaltı, Döşemealtı ve Aksu dahil Antalya genelinde servis veriyoruz. Buzdolabınızı taşımanıza gerek yoktur.",
                },
                {
                    question: "Tamir sonrası garanti veriyor musunuz?",
                    answer: "Evet. İşçilik garantisi veriyoruz; değiştirilen yedek parçalar için üretici garantisi uygulanır. Tamir sonrası aynı sorun tekrarlanırsa ücretsiz müdahale yapıyoruz. Garanti süresini tamir anında sözlü ve istek hâlinde yazılı olarak bildiriyoruz.",
                },
                {
                    question: "Kompresör değişimi ne kadar tutar?",
                    answer: "Kompresör değişimi, buzdolabı tamiri içindeki en maliyetli işlemdir. Fiyat; marka, model ve kompresör kapasitesine göre değişir. Cihazınız 10 yaşın üstündeyse kompresör yatırımı yerine yeni cihaz almak daha ekonomik olabilir. Teknisyenimiz yerinde değerlendirerek size dürüst bir öneri sunar.",
                },
                {
                    question: "Buzdolabını taşımak gerekiyor mu?",
                    answer: "Hayır. Tüm tamir işlemlerimiz adresinizde yerinde gerçekleştirilir. Buzdolabını taşımak hem zahmetli hem de gaz sistemi için risklidir. Teknisyenimiz gerekli tüm ekipman ve yedek parçalarla adresinize gelir.",
                },
            ]}
            image="/images/buzdolabitamir.webp"
            imageAlt="Antalya buzdolabı tamiri — yerinde hızlı servis"
            relatedServices={[
                { title: "Çamaşır Makinesi Tamiri", slug: "camasir-makinesi-tamiri" },
                { title: "Klima Tamiri", slug: "klima-tamiri" },
            ]}
        />
    );
}
