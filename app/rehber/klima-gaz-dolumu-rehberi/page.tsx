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
const PAGE_PATH = "/rehber/klima-gaz-dolumu-rehberi";

export const metadata: Metadata = buildPageMetadata({
    title: "Klima Gaz Dolumu: Bilmeniz Gerekenler | Antalya Klima Servisi",
    description: "R32, R410A ve R22 gaz farkları, gaz kaçağı belirtileri ve dolum süreci hakkında kapsamlı rehber.",
    path: PAGE_PATH,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
});

const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Klima Gaz Dolumu: Bilmeniz Gerekenler",
    description: "R32, R410A ve R22 gazları arasındaki fark, gaz kaçağı belirtileri, dolum süreci ve fiyatları hakkında kapsamlı rehber.",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    image: getAbsoluteUrl(OG_IMAGE_PATH),
    inLanguage: "tr-TR",
    articleSection: "Klima Servisi",
    keywords: ["klima gaz dolumu", "antalya klima servisi", "r32 r410a"],
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
    { name: "Klima Gaz Dolumu: Bilmeniz Gerekenler", path: PAGE_PATH },
]);

export default function KlimaGazDolumuPage() {
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
                                <li className="text-white font-medium" aria-current="page">Klima Gaz Dolumu: Bilmeniz Gerekenler</li>
                            </ol>
                        </nav>
                        <p className="text-blue-300 text-sm font-semibold uppercase tracking-wide mb-3">6 dk okuma · 15 Ocak 2025</p>
                        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Klima Gaz Dolumu: Bilmeniz Gerekenler</h1>
                        <p className="text-blue-100 text-lg">Klimanız yeterince soğutmuyorsa soğutucu gaz eksikliği en yaygın nedenlerden biridir. Gaz türleri, kaçak belirtileri ve dolum süreci hakkında bilmeniz gereken her şey bu rehberde.</p>
                    </div>
                </section>

                {/* Article */}
                <article className="py-12 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray prose-lg max-w-none">

                        <p>
                            Klima sistemleri, soğutucu gaz (soğutucu akışkan) adı verilen özel kimyasal madde aracılığıyla ısı transferi yapar. Bu gaz, kapalı bir devre içinde sürekli dönerek iç mekânı soğutur ya da ısıtır. Gaz seviyesi düştüğünde sistem verimini yitirir; ciddi eksiklikte ise kompresör hasar görerek çok daha büyük bir arızaya zemin hazırlar. Bu nedenle klima gaz dolumu, sıradan bir bakım adımı değil; cihazın sağlığını doğrudan etkileyen kritik bir müdahaledir.
                        </p>

                        <h2>Klima Gazı Nedir ve Neden Önemlidir?</h2>
                        <p>
                            Soğutucu gaz, klimanın iç ve dış ünitesi arasındaki bakır borularda döngüsel olarak sıvı ve gaz fazı arasında geçiş yapar. İç ünitede ısıyı absorbe ederek buharlaşır; dış ünitede ise yoğunlaşarak ısıyı dışarı atar. Bu döngü sayesinde evin içi serinler. Gaz miktarı düştüğünde ısı transferi yetersiz kalır; kompresör gereğinden çok çalışır ve ısınır. Uzun vadede kompresör sargıları yanabilir; bu da klimanın en pahalı parçasının değişimini gerektiren ciddi bir arızadır.
                        </p>
                        <p>
                            Klima sistemi doğru kurulduğunda gaz kaybı yaşanmaması gerekir. Gaz eksilmesi neredeyse her zaman bir kaçaktan kaynaklanır. Bu nedenle yalnızca gaz dolumu değil, kaçak tespiti de yapılmalı ve kaçak noktası tamir edilmelidir; aksi hâlde dolan gaz kısa süre içinde yeniden eksilir.
                        </p>

                        <h2>Klima Gaz Kaçağını Nasıl Anlarsınız?</h2>
                        <p>
                            Gaz kaçağını profesyonel ekipman olmadan tespit etmek güçtür; ancak aşağıdaki beş belirti şüphe uyandırmalı ve bir teknisyen çağırmanızı gerektirmelidir:
                        </p>
                        <ol>
                            <li><strong>Yetersiz soğutma:</strong> Termostatı en düşük seviyeye çektiğinizde dahi oda yeterince serinlemiyorsa gaz basıncı düşük olabilir. Bu en yaygın ve en net belirtidir.</li>
                            <li><strong>İç ünitede buz oluşumu:</strong> Gaz basıncı düşünce evaporatör serpantinin sıcaklığı normalin altına iner ve nem buz tutmaya başlar. Cihaz çalışırken iç ünitede buz görüyorsanız hemen kapatın ve teknisyen çağırın.</li>
                            <li><strong>Dış ünitenin aşırı ısınması:</strong> Gaz eksikliğinde kompresör kendini daha çok zorlar. Dış ünitenin normalden çok daha sıcak olması bu durumun işaretidir.</li>
                            <li><strong>Enerji faturasında açıklanamayan artış:</strong> Kompresör daha uzun süre çalışmak zorunda kaldığından enerji tüketimi yükselir. Kullanım alışkanlıkları değişmemişken fatura belirgin biçimde artıyorsa gaz seviyesini kontrol ettirin.</li>
                            <li><strong>Islık veya tıslama sesi:</strong> Ciddi gaz kaçaklarında borulardaki basınç farkından kaynaklanan ıslık benzeri sesler duyulabilir. Bu belirti acil müdahale gerektiren bir işarettir.</li>
                        </ol>

                        <h2>Klima Gaz Türleri: R32, R410A ve R22 Arasındaki Fark</h2>
                        <p>
                            Piyasada kullanılan başlıca soğutucu gazlar ve aralarındaki temel farklar şöyle özetlenebilir:
                        </p>
                        <ul>
                            <li>
                                <strong>R22 (Freon):</strong> Eski nesil klimaların büyük çoğunluğunda kullanılan bu gaz, ozon tabakasına zararlı olduğu için Avrupa'da 2015 yılında yasaklanmıştır. Türkiye'de de kullanımı aşamalı olarak kısıtlanmaktadır. Eğer klimanız 2010 öncesine aitse R22 kullanıyor olabilir. Bu gaz artık çok sınırlı temin edilmekte olup yüksek maliyetlidir. R22 kullanan eski klimaların yeni nesil cihazlarla değiştirilmesi tavsiye edilir.
                            </li>
                            <li>
                                <strong>R410A:</strong> 2000'li yılların ortasından itibaren yaygınlaşan ve ozon tabakasına zarar vermeyen bu gaz, uzun yıllar standart olarak kullanıldı. Küresel ısınmaya etkisi (GWP) görece yüksek olduğundan yeni nesil düzenlemelerle kullanımı kısıtlanma sürecindedir. Mevcut birçok klimada hâlâ kullanılmaktadır.
                            </li>
                            <li>
                                <strong>R32:</strong> Günümüzde yeni üretilen klimaların büyük çoğunluğu R32 ile çalışır. R410A'ya kıyasla küresel ısınmaya etkisi yaklaşık üçte bir oranında düşüktür ve enerji verimliliği daha yüksektir. Hafif yanıcı özelliği nedeniyle uygun taşıma ve depolama koşulları gerektirir; bu nedenle dolumu mutlaka sertifikalı teknisyen tarafından yapılmalıdır.
                            </li>
                        </ul>
                        <p>
                            Her gaz tipi için farklı ekipman ve prosedür gerektiğinden, gaz dolumunu kendi başınıza yapmak hem teknik hem de yasal açıdan doğru değildir.
                        </p>

                        <h2>Klima Gaz Dolumu Nasıl Yapılır?</h2>
                        <p>
                            Profesyonel gaz dolumu birkaç kritik adımdan oluşur:
                        </p>
                        <ol>
                            <li><strong>Kaçak tespiti:</strong> Teknisyen öncelikle kaçak dedektörü veya sızdırmazlık testi ile kaçak noktasını belirler.</li>
                            <li><strong>Kaçağın tamiri:</strong> Tespit edilen kaçak noktası lehimlenerek veya bağlantı elemanı değiştirilerek giderilir.</li>
                            <li><strong>Mevcut gazın boşaltılması:</strong> Sistemde kalan gaz çevre mevzuatına uygun biçimde geri kazanım tüpüne alınır. Gazın atmosfere salınması hem çevre suçu hem de sağlık riskidir.</li>
                            <li><strong>Vakumlama:</strong> Sistem vakum pompasıyla boşaltılır. Bu adım, sistem içindeki nem ve havanın tamamen giderilmesini sağlar; atlandığında kompresör ömrü kısalır.</li>
                            <li><strong>Gaz dolumu:</strong> Doğru gaz türü, basınç göstergesi (manometre) kontrolüyle sisteme doldurulur. Fazla ya da eksik dolum cihaza zarar verir.</li>
                            <li><strong>Sistem testi:</strong> Doldurma sonrası cihaz çalıştırılarak soğutma kapasitesi ve basınç değerleri kontrol edilir.</li>
                        </ol>

                        <h2>Gaz Dolumu Fiyatları</h2>
                        <p>
                            Klima gaz dolumu fiyatı; kullanılan gaz türüne, klimanın kapasitesine (BTU) ve ne kadar gaz eksildiğine göre değişir. R32 ve R410A gazları için Antalya'da genel fiyat aralıkları şöyle özetlenebilir: küçük kapasiteli bir ev kliması için kaçak tamiri dahil gaz dolumu 800 TL ile 2.000 TL arasında değişmektedir. R22 gaz fiyatları ise gazın azalan arzı nedeniyle daha yüksektir.
                        </p>
                        <p>
                            Servisimiz keşif ücreti almaz. Teknisyenimiz gelir, kaçak tespitini yapar ve gaz dolumu ile kaçak tamiri için net fiyat bildirir. <Link href="/hizmetler/klima-tamiri" className="text-blue-700 underline font-medium">Klima tamiri ve gaz dolumu hizmetimiz</Link> hakkında detaylı bilgi alabilirsiniz.
                        </p>

                        <h2>Kendi Kendinize Gaz Dolumu Yapabilir misiniz?</h2>
                        <p>
                            Kısaca: hayır. Klima gaz dolumu lisanslı teknisyenler tarafından yapılması zorunlu bir işlemdir. Bunun birkaç temel nedeni vardır:
                        </p>
                        <ul>
                            <li><strong>Yasal zorunluluk:</strong> Soğutucu gazların taşınması, depolanması ve kullanımı yasal düzenlemelere tabidir. Yetkisiz kullanım idari yaptırıma yol açabilir.</li>
                            <li><strong>Ekipman gereksinimi:</strong> Doğru dolum için manifold manometre seti, vakum pompası ve gaz tüpü gibi pahalı ekipmanlar gerekir. Bu ekipmanlar ev kullanıcısı için erişilmez ve tehlikelidir.</li>
                            <li><strong>Güvenlik riski:</strong> R32 hafif yanıcı özelliktedir. Yanlış taşıma veya kullanım yangın ve patlama riski doğurur. R410A ise yüksek basınçlı bir gazdır; uygunsuz müdahale ciddi yaralanmalara neden olabilir.</li>
                            <li><strong>Hatalı dolum:</strong> Fazla ya da eksik gaz doldurulması kompresörü hızla tahrip eder. Doğru miktarı belirleyebilmek için basınç-sıcaklık eğrilerini okuyabilmek gerekir.</li>
                        </ul>
                        <p>
                            Gaz dolumunu mutlaka yetkili bir servis teknisyenine yaptırın. Bu şekilde hem cihazınızın güvenliğini hem de çevreyi koruma altına almış olursunuz.
                        </p>
                    </div>
                </article>

                {/* CTA */}
                <section className="bg-blue-700 py-12">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-2xl font-extrabold text-white mb-3">Bu Makale Yardımcı Oldu mu? Hemen Arayın</h2>
                        <p className="text-blue-200 mb-8">Gaz kaçağı tespiti ve dolumu için ücretsiz keşif. Antalya genelinde aynı gün servis.</p>
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
