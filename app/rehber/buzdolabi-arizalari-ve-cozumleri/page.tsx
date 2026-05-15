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
const PAGE_PATH = "/rehber/buzdolabi-arizalari-ve-cozumleri";

export const metadata: Metadata = buildPageMetadata({
    title: "Buzdolabı Arızaları ve Çözümleri | Antalya Beyaz Eşya Servisi",
    description: "Buzdolabı soğutmama, buzlanma ve su akıtma arızalarının nedenleri ile profesyonel tamir ve servis çözümleri.",
    path: PAGE_PATH,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
});

const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Buzdolabı Arızaları ve Çözümleri",
    description: "En yaygın buzdolabı arızaları, nedenleri ve çözümleri hakkında kapsamlı rehber.",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    image: getAbsoluteUrl(OG_IMAGE_PATH),
    inLanguage: "tr-TR",
    articleSection: "Beyaz Eşya Servisi",
    keywords: ["buzdolabı tamiri", "buzdolabı servis", "antalya beyaz eşya servisi"],
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
    { name: "Buzdolabı Arızaları ve Çözümleri", path: PAGE_PATH },
]);

export default function BuzdolabiArizalariPage() {
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
                                <li className="text-white font-medium" aria-current="page">Buzdolabı Arızaları ve Çözümleri</li>
                            </ol>
                        </nav>
                        <p className="text-blue-300 text-sm font-semibold uppercase tracking-wide mb-3">6 dk okuma · 15 Ocak 2025</p>
                        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Buzdolabı Arızaları ve Çözümleri</h1>
                        <p className="text-blue-100 text-lg">Buzdolabı arızaları günlük hayatı ciddi biçimde aksatır. Bu rehberde en yaygın arızaları, olası nedenlerini ve ne zaman servis çağırmanız gerektiğini öğrenebilirsiniz.</p>
                    </div>
                </section>

                {/* Article */}
                <article className="py-12 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray prose-lg max-w-none">

                        <p>
                            Buzdolabı, evdeki beyaz eşyalar arasında en uzun süre çalışan ve en az dinlendirilen cihazdır. Günde 24 saat, yılın 365 günü kesintisiz çalışan bu cihazın zamanla arıza vermesi kaçınılmazdır. Ancak her arıza pahalı bir tamir ya da yeni cihaz alımı gerektirmez. Bazı sorunlar kullanıcı müdahalesiyle çözülebilirken, bazıları uzman desteği gerektirir. Bu rehberde buzdolabı arızalarının hangi belirtilerle kendini gösterdiğini, ne anlama geldiğini ve nasıl yaklaşılması gerektiğini açıklayacağız.
                        </p>

                        <h2>En Yaygın Buzdolabı Arızaları</h2>
                        <p>
                            Servis çağrılarının büyük çoğunluğu birkaç temel arıza kategorisinden kaynaklanmaktadır:
                        </p>
                        <ul>
                            <li><strong>Soğutmama:</strong> İçerideki sıcaklık normal değerin üzerinde kalır; yiyecekler hızla bozulur.</li>
                            <li><strong>Aşırı buz yapma:</strong> Dondurucu bölmesinde veya arka duvarda gereğinden fazla buz birikmesi.</li>
                            <li><strong>Anormal ses:</strong> Çalışırken tıkırtı, vızıltı, çarpma ya da motor gürültüsü.</li>
                            <li><strong>Su akıtma:</strong> İçeriden veya arkadan su sızması.</li>
                            <li><strong>Aşırı tüketim:</strong> Faturada açıklanamayan artış; kompresörün sürekli çalışması.</li>
                            <li><strong>Kapı conta sorunları:</strong> Kapı tam kapanmıyor ya da conta yerinden çıkmış durumdadır.</li>
                        </ul>

                        <h2>Buzdolabı Soğutmuyorsa Ne Yapmalısınız?</h2>
                        <p>
                            Buzdolabının soğutmaması en ciddi arıza belirtisidir ve birden fazla nedeni olabilir:
                        </p>
                        <ol>
                            <li><strong>Termostat ayarını kontrol edin:</strong> Termostat düğmesi yanlışlıkla kapalıya alınmış ya da en düşük konuma getirilmiş olabilir. Termostatı orta konuma alarak cihazın birkaç saat çalışmasını bekleyin.</li>
                            <li><strong>Kapı contasını kontrol edin:</strong> Conta yıpranmış veya kirlenmiş olduğunda soğuk hava dışarı kaçar ve cihaz sürekli çalışmasına rağmen sıcaklık hedefine ulaşamaz. Kağıt testi: kapıya bir kağıt sıkıştırın; kapayı kapattığınızda kağıt kolayca kayıyorsa conta değişimi gereklidir.</li>
                            <li><strong>Kondenser bobinlerini kontrol edin:</strong> Buzdolabının arka ya da alt kısmındaki bobinler aşırı tozlanırsa ısı transferi engellenir. Yumuşak bir fırçayla dikkatli temizlik cihazın performansını iyileştirebilir.</li>
                            <li><strong>Gaz kaçağı:</strong> Kompresör çalışıyor ama soğutma yoksa soğutucu gaz kaçağı söz konusu olabilir. Bu durum kesinlikle profesyonel müdahale gerektirir.</li>
                            <li><strong>Kompresör arızası:</strong> Kompresör hiç çalışmıyorsa veya çalışırken anlık kapanıyorsa elektrik kartı, röle ya da kompresörün kendisi arızalı olabilir.</li>
                        </ol>
                        <p>
                            Yukarıdaki basit kontrollerde sorun bulamazsanız servisi aramak gerekir; gıda güvenliği için vakit kaybetmemek önemlidir.
                        </p>

                        <h2>Buzdolabı Aşırı Buz Yapıyorsa</h2>
                        <p>
                            Modern no-frost buzdolaplarında dondurucu bölmesinde buz birikmemesi gerekir. Buzlanma görülüyorsa birkaç olası neden araştırılmalıdır:
                        </p>
                        <ul>
                            <li><strong>Defrost (çözme) sistemi arızası:</strong> No-frost buzdolapları belirli aralıklarla ısıtma elemanı devreye sokarak birikerek donmuş nemi eritir. Isıtma elemanı, defrost termostadı veya defrost zamanlayıcısı arızalıysa buz birikimi devam eder. Bu arızanın giderilmesi için ilgili bileşenin değiştirilmesi gerekir.</li>
                            <li><strong>Kapı contası hasarı:</strong> Dışarıdan içeriye giren nemli hava dondurucuda birikerek aşırı buzlanmaya yol açar.</li>
                            <li><strong>Fan motoru arızası:</strong> Soğuk hava fanı çalışmıyorsa soğutma eşit dağılmaz; bazı bölgelerde aşırı donma, bazı bölgelerde ise yetersiz soğuma yaşanır.</li>
                        </ul>
                        <p>
                            Kendiniz yapabileceğiniz geçici çözüm: cihazı kapatarak manüel çözme (defrost) uygulamak. Buzu çözdükten sonra cihazı yeniden çalıştırın; sorun devam ediyorsa servis gereklidir.
                        </p>

                        <h2>Buzdolabından Anormal Ses Geliyor</h2>
                        <p>
                            Buzdolapları çalışırken belirli düzeyde ses çıkarır; bu normaldir. Ancak bazı sesler arıza işareti olabilir:
                        </p>
                        <ul>
                            <li><strong>Tıkırtı veya çarpma sesi:</strong> Fan palası buz ya da yabancı cisimle temas ediyordur. Defrost işlemi sırasında iç plastik parçaların genleşme sesi de bu şekilde duyulabilir; bu normal bir sestir.</li>
                            <li><strong>Yüksek vızıltı veya uğultu:</strong> Kompresör aşırı yük altında çalışıyorsa ya da voltaj dalgalanması varsa bu ses duyulabilir. Sabit bir yüksek ses kompresör sorununa işaret edebilir.</li>
                            <li><strong>Su akıntısı sesi:</strong> Defrost sistemi çalışırken buz erimesi sesi normaldir. Ancak bu ses saatlerce devam ediyorsa drenaj borusu tıkanmış olabilir.</li>
                            <li><strong>Çarpma ve sarsıntı:</strong> Buzdolabı zemine düzgün oturmuyor olabilir. Ayak vidalarını ayarlayarak dengeleme deneyin.</li>
                        </ul>

                        <h2>Buzdolabı Su Akıtıyorsa</h2>
                        <p>
                            Buzdolabının içinden veya arkasından su sızması yaygın bir şikâyettir ve çoğunlukla şu nedenlerden kaynaklanır:
                        </p>
                        <ul>
                            <li><strong>Drenaj borusunun tıkanması:</strong> Defrost sırasında eriyen su, buzdolabının arkasında bulunan bir drenaj deliğinden toplanma tepsisine akar. Bu delik yiyecek artıkları veya buz parçasıyla tıkandığında su iç bölmeye taşar. Deliği yumuşak bir bez veya pipet yardımıyla temizleyebilirsiniz.</li>
                            <li><strong>Toplanma tepsisinin taşması:</strong> Drenaj tepsisi aşırı dolar ya da yanlış konumdaysa su zemine akar. Tepsinin yerinde ve temiz olduğunu kontrol edin.</li>
                            <li><strong>Su bağlantısı kaçağı (buz yapıcılı modellerde):</strong> Buz makinesi veya su sebili bulunan modellerde su giriş hattı veya bağlantı noktası sızıyor olabilir. Bu durumda mutlaka servis gereklidir.</li>
                            <li><strong>Kapı contasından sızma:</strong> Dışarıdan giren hava içeride yoğuşarak damlayabilir.</li>
                        </ul>

                        <h2>Ne Zaman Servisi Aramalısınız?</h2>
                        <p>
                            Aşağıdaki durumların herhangi birinde servisi bekletmeden aramanız önerilir:
                        </p>
                        <ul>
                            <li>Buzdolabı tamamen soğutmuyor ve basit kontroller sorunu çözmüyor.</li>
                            <li>Kompresör hiç çalışmıyor ya da çalışıp anlık kapanıyor.</li>
                            <li>Cihaz elektrik kokusu veriyor veya arka yüzeyi aşırı ısınıyor.</li>
                            <li>Defrost sistemi arızası nedeniyle dondurucu tamamen buz tutmuş durumda.</li>
                            <li>Su sızıntısı drenaj temizliğine rağmen devam ediyor.</li>
                            <li>Cihaz anormal seslerle çalışıyor ve ses zaman içinde artıyor.</li>
                        </ul>
                        <p>
                            Buzdolabı tamirini bekletmek; bozulan gıdalar, artan enerji faturası ve daha büyük arızalar açısından ek maliyet anlamına gelir. <Link href="/hizmetler/buzdolabi-tamiri" className="text-blue-700 underline font-medium">Buzdolabı tamiri hizmetimiz</Link> hakkında bilgi alabilir ya da hemen arayabilirsiniz.
                        </p>
                    </div>
                </article>

                {/* CTA */}
                <section className="bg-blue-700 py-12">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-2xl font-extrabold text-white mb-3">Bu Makale Yardımcı Oldu mu? Hemen Arayın</h2>
                        <p className="text-blue-200 mb-8">Buzdolabı tamiri için ücretsiz keşif. Antalya genelinde aynı gün servis.</p>
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
