import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
    OG_IMAGE_PATH,
    SITE_URL,
    buildBreadcrumbSchema,
    buildPageMetadata,
    getAbsoluteUrl,
} from "@/utils/seo";

const PHONE = "05426546113";
const PHONE_DISPLAY = "0542 654 61 13";
const WHATSAPP = "https://wa.me/905426546113";
const PUBLISHED = "2025-01-15";
const MODIFIED = "2026-05-15";
const PAGE_PATH = "/rehber/klima-bakimi-ne-zaman-yapilir";

export const metadata: Metadata = buildPageMetadata({
    title: "Klima Bakımı Ne Zaman Yapılır? | Antalya Klima Servisi",
    description: "Yaz ve kış sezonu öncesinde klima bakımını ne zaman yaptırmalısınız? Periyodik bakımın önemi ve enerji tasarrufu rehberi.",
    path: PAGE_PATH,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
});

const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Klima Bakımı Ne Zaman Yapılır?",
    description: "Yaz ve kış sezonu öncesinde klima bakımını ne zaman yaptırmalısınız? Periyodik bakımın önemi ve enerji tasarrufu rehberi.",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    image: getAbsoluteUrl(OG_IMAGE_PATH),
    inLanguage: "tr-TR",
    articleSection: "Klima Bakımı",
    keywords: ["klima bakımı", "antalya klima servisi", "periyodik bakım"],
    mainEntityOfPage: getAbsoluteUrl(PAGE_PATH),
    author: { "@type": "Organization", name: "Antalya Klima Servisi" },
    publisher: {
        "@type": "Organization",
        name: "Antalya Klima Servisi",
        url: SITE_URL,
        logo: {
            "@type": "ImageObject",
            url: getAbsoluteUrl(OG_IMAGE_PATH),
        },
    },
    url: getAbsoluteUrl(PAGE_PATH),
};

const jsonLdBreadcrumb = buildBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: "Rehber", path: "/rehber" },
    { name: "Klima Bakımı Ne Zaman Yapılır?", path: PAGE_PATH },
]);

export default function KlimaBakimiNezamanPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
            <Header />
            <main>
                {/* Hero */}
                <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-14 md:py-20">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6">
                        <nav aria-label="Breadcrumb" className="mb-6">
                            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-blue-200">
                                <li><Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link></li>
                                <li aria-hidden="true" className="text-blue-400">/</li>
                                <li><Link href="/rehber" className="hover:text-white transition-colors">Rehber</Link></li>
                                <li aria-hidden="true" className="text-blue-400">/</li>
                                <li className="text-white font-medium" aria-current="page">Klima Bakımı Ne Zaman Yapılır?</li>
                            </ol>
                        </nav>
                        <p className="text-blue-300 text-sm font-semibold uppercase tracking-wide mb-3">5 dk okuma · 15 Ocak 2025</p>
                        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Klima Bakımı Ne Zaman Yapılır?</h1>
                        <p className="text-blue-100 text-lg">Yıllık periyodik bakım, klimanızın hem ömrünü uzatır hem de enerji tüketimini önemli ölçüde azaltır. Peki hangi mevsimde, hangi sıklıkla bakım yaptırmalısınız?</p>
                    </div>
                </section>

                {/* Article */}
                <article className="py-12 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray prose-lg max-w-none">

                        <p>
                            Klimalar modern yaşamın vazgeçilmez parçalarından biri hâline geldi. Ancak pek çok ev ve işyeri sahibi, klimasının performansını korumak için düzenli bakım yaptırmanın ne denli önemli olduğunu göz ardı eder. Yıllık periyodik klima bakımı; cihazın soğutma ve ısıtma kapasitesini en üst düzeyde tutarken enerji faturasını da kayda değer biçimde düşürür. Araştırmalar, bakımsız bir klimanın bakımlı bir klimaya kıyasla yüzde on beş ile yüzde yirmi beş arasında daha fazla enerji tükettiğini ortaya koymaktadır. Bu fark, uzun vadede ciddi bir maliyet anlamına gelir.
                        </p>

                        <h2>Klima Bakımı Hangi Mevsimde Yapılmalı?</h2>
                        <p>
                            Klima bakımı için en doğru zaman, yoğun kullanım sezonundan birkaç hafta önce yapılmasıdır. Türkiye&apos;nin Akdeniz ikliminin hâkim olduğu Antalya&apos;da bu iki dönem öne çıkar:
                        </p>
                        <ul>
                            <li>
                                <strong>Nisan – Mayıs (Yaz Sezonu Öncesi):</strong> Havaların ısınmaya başladığı bu dönemde klimalara olan talep henüz zirveye ulaşmamıştır. Teknisyen randevu bulmak kolaylaşır ve klimanızı yaz aylarının bunaltıcı sıcağına hazır hâle getirirsiniz. Temizlenen filtreler ve yıkanan serpantinler, sezon boyunca verimli soğutma yapmanızı sağlar.
                            </li>
                            <li>
                                <strong>Eylül – Ekim (Kış Sezonu Öncesi):</strong> Klimanızı ısıtma modunda kullanıyorsanız —ki ısı pompası teknolojisi artık yaygınlaştı— kış aylarına girmeden önce ikinci bir bakım yaptırmanız önerilir. Eylül sonu ya da Ekim ayı bu bakım için idealdir.
                            </li>
                        </ul>
                        <p>
                            Yılda bir kez bakım yaptırmak asgari standarttır; ancak yoğun kullanım, tuzlu deniz havası ya da tozlu çevre koşullarında yılda iki kez bakım çok daha sağlıklı sonuçlar verir. Antalya&apos;nın sahil kesimleri için yılda iki kez bakım kesinlikle tavsiye edilir.
                        </p>

                        <h2>Klimanızın Bakım Zamanı Geldiğini Nasıl Anlarsınız?</h2>
                        <p>
                            Bazı belirtiler, klimanızın bakıma ihtiyaç duyduğunun açık sinyalleridir. Aşağıdaki beş belirtiyi yakından takip edin:
                        </p>
                        <ol>
                            <li><strong>Enerji faturasında ani artış:</strong> Klimanız eskisinden daha uzun süre çalışarak aynı sıcaklığa ulaşmaya çalışıyorsa enerji tüketimi yükselir. Bu durum çoğunlukla kirli filtrelerden kaynaklanır.</li>
                            <li><strong>Soğutma veya ısıtma kapasitesinin düşmesi:</strong> Ayar ettiğiniz sıcaklığa uzun sürede ulaşılıyorsa veya hiç ulaşılamıyorsa, iç ünite evaporatörü ya da dış ünite kondenseri kirlenmiş olabilir.</li>
                            <li><strong>Kötü koku:</strong> Klimayı ilk çalıştırdığınızda küf, yanık ya da kükürtlü bir koku hissediyorsanız iç ünite büyük olasılıkla bakteriyel kirlilik barındırıyordur. Bu hem performansı düşürür hem de sağlık riski oluşturur.</li>
                            <li><strong>Sesli veya titreşimli çalışma:</strong> Fan palasına yapışan toz ve pislik dengesiz dönüşe yol açar. Sallanma, vızıltı veya tıkırtı sesleri fan veya rulman aşınmasına işaret eder.</li>
                            <li><strong>Su akıtma:</strong> Drenaj borusunun tıkanması sonucunda yoğuşma suyu iç üniteden damlamaya başlar. Mevsim beklenmeden müdahale edilmesi gereken bir durumdur.</li>
                        </ol>

                        <h2>Klima Bakımında Neler Yapılır?</h2>
                        <p>
                            Profesyonel klima bakımı birden fazla adımdan oluşur ve her birinin performans üzerinde doğrudan etkisi vardır:
                        </p>
                        <ul>
                            <li><strong>Filtre temizliği:</strong> İç ünitenin hava filtreleri çıkarılarak yıkanır veya değiştirilir. Bu adım bile başlı başına verimliliği belirgin biçimde artırır.</li>
                            <li><strong>İç ünite yıkama:</strong> Evaporatör serpantin ve fan üzerindeki kir, basınçlı su ve uygun kimyasal ile temizlenir. Bakteri ve küf oluşumu önlenir.</li>
                            <li><strong>Dış ünite temizliği:</strong> Kondenser serpantin tıkandığında ısı transferi zorlaşır; kompresör aşırı ısınır. Basınçlı su ile yıkama bu riski ortadan kaldırır.</li>
                            <li><strong>Gaz seviyesi kontrolü:</strong> Soğutucu gaz basıncı manometre ile ölçülür. Eksiklik tespit edilirse kaçak kontrolü yapılır ve gerekiyorsa gaz dolumu uygulanır.</li>
                            <li><strong>Elektrik bağlantılarının kontrolü:</strong> Gevşek veya yıpranmış kablolar tespit edilerek sıkıştırılır. Bu kontrol, hem arıza hem de yangın riskini azaltır.</li>
                            <li><strong>Drenaj borusu temizliği:</strong> Su akışı test edilir, tıkanıklıklar açılır.</li>
                            <li><strong>Termostat ve sensör testi:</strong> Cihazın doğru sıcaklıkta devreye girip çıktığı kontrol edilir.</li>
                        </ul>

                        <h2>Klima Bakımını Neden Kendiniz Yapmamalısınız?</h2>
                        <p>
                            Filtreyi kendiniz temizleyebilirsiniz; bu işlem güvenlidir ve kullanım kılavuzunda tarif edilir. Ancak kapsamlı bakımın geri kalanı mutlaka yetkili teknisyen tarafından yapılmalıdır. Bunun başlıca nedenleri şunlardır:
                        </p>
                        <ul>
                            <li><strong>Gaz sistemi:</strong> Soğutucu gaz dolumu ve kaçak tespiti uzmanlık gerektirir. Yanlış müdahale hem sisteme zarar verir hem de çevreye zarar veren gaz sızıntısına yol açar. R32 ve R410A gazları basınçlı sistemlerde bulunur; uygunsuz müdahale tehlikelidir.</li>
                            <li><strong>Elektrik tehlikeleri:</strong> Klima, şebeke voltajında çalışan bir cihazdır. Elektrik bağlantı kontrolü için gerekli güvenlik önlemleri alınmadan yapılan müdahaleler ciddi yaralanmalara neden olabilir.</li>
                            <li><strong>Yanlış kimyasal kullanımı:</strong> İç ünite temizliğinde yanlış deterjan seçimi, serpantin lamalarına kalıcı hasar verebilir.</li>
                            <li><strong>Garanti kaybı:</strong> Yetkisiz müdahale cihaz garantisini geçersiz kılabilir.</li>
                        </ul>

                        <h2>Antalya&apos;da Klima Bakımı Fiyatları</h2>
                        <p>
                            Klima bakım ücreti; cihaz türüne, iç ünite sayısına ve temizlik gereksiniminin boyutuna göre değişir. Tek bir split klima için standart bakım fiyatları Antalya&apos;da 500 TL ile 1.200 TL arasında değişmektedir. Çoklu iç ünite veya kaset tipi klimalar için fiyat ayrıca belirlenir.
                        </p>
                        <p>
                            Servisimiz keşif ücreti almamaktadır. Teknisyenimiz cihazınızı yerinde inceleyerek size net bir fiyat sunar; onay vermeniz durumunda bakıma başlanır. Gaz dolumu gerekiyorsa bu ücret ayrıca bildirilir.
                        </p>
                        <p>
                            Klima bakımınızı zamanında yaptırmak, olası büyük arızaların önüne geçmenin en etkili yoludur. Kompresör arızası gibi büyük tamirler bakım maliyetinin çok üzerinde giderlere neden olur. Düzenli bakım bu masrafı baştan engeller.
                        </p>

                        <p>
                            Klimanızın bakımını Antalya&apos;nın uzman ekibine bırakın. <Link href="/hizmetler/klima-bakimi" className="text-blue-700 underline font-medium">Klima bakımı hizmetimiz</Link> hakkında daha fazla bilgi alabilir ya da aşağıdan randevu oluşturabilirsiniz.
                        </p>
                    </div>
                </article>

                {/* CTA */}
                <section className="bg-blue-700 py-12">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-2xl font-extrabold text-white mb-3">Bu Makale Yardımcı Oldu mu? Hemen Arayın</h2>
                        <p className="text-blue-200 mb-8">Ücretsiz keşif, aynı gün servis. Antalya genelinde yerinde klima bakımı.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`tel:${PHONE}`}
                                className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-bold text-lg px-8 py-4 rounded-2xl hover:bg-blue-50 transition-colors"
                            >
                                {PHONE_DISPLAY} — Hemen Ara
                            </a>
                            <a
                                href={WHATSAPP}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-2xl hover:bg-green-600 transition-colors"
                            >
                                WhatsApp ile Yaz
                            </a>
                        </div>
                    </div>
                </section>

                {/* Back link */}
                <div className="bg-gray-50 py-8">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6">
                        <Link href="/rehber" className="text-blue-700 font-medium hover:underline">← Tüm Rehber Makalelerine Dön</Link>
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
