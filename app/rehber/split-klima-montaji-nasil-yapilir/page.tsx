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
const PAGE_PATH = "/rehber/split-klima-montaji-nasil-yapilir";

export const metadata: Metadata = buildPageMetadata({
    title: "Split Klima Montajı Nasıl Yapılır? | Antalya Klima Servisi",
    description: "Split klima montajında doğru konum seçimi, boru bağlantısı ve güvenli servis adımları hakkında kapsamlı rehber.",
    path: PAGE_PATH,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
});

const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Split Klima Montajı Nasıl Yapılır?",
    description: "Split klima montajında doğru konum seçimi, boru bağlantısı, gaz dolumu ve sık yapılan hatalar hakkında kapsamlı rehber.",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    image: getAbsoluteUrl(OG_IMAGE_PATH),
    inLanguage: "tr-TR",
    articleSection: "Klima Montajı",
    keywords: ["split klima montajı", "antalya klima montaj servisi", "klima kurulum"],
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
    { name: "Split Klima Montajı Nasıl Yapılır?", path: PAGE_PATH },
]);

export default function SplitKlimaMontajiPage() {
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
                                <li className="text-white font-medium" aria-current="page">Split Klima Montajı Nasıl Yapılır?</li>
                            </ol>
                        </nav>
                        <p className="text-blue-300 text-sm font-semibold uppercase tracking-wide mb-3">5 dk okuma · 15 Ocak 2025</p>
                        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Split Klima Montajı Nasıl Yapılır?</h1>
                        <p className="text-blue-100 text-lg">Yeni aldığınız klimanın montajı, cihazın uzun ömürlü ve verimli çalışması için son derece kritiktir. Doğru konum seçiminden gaz dolumuna kadar bilinmesi gereken her şey bu rehberde.</p>
                    </div>
                </section>

                {/* Article */}
                <article className="py-12 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray prose-lg max-w-none">

                        <p>
                            Split klima, iç ünite ve dış ünite olmak üzere iki ayrı parçadan oluşan ve bu parçaların bakır boru ile birbirine bağlandığı en yaygın klima sistemidir. Ev ve iş yerlerinde kullanılan klimaların büyük çoğunluğu bu türdendir. Montaj süreci teknik bilgi, doğru ekipman ve deneyim gerektirir; yanlış yapılan montaj hem cihazın verimliliğini düşürür hem de uzun vadede telafi edilmesi güç arızalara zemin hazırlar.
                        </p>

                        <h2>Split Klima Montajından Önce Bilinmesi Gerekenler</h2>
                        <p>
                            Montaj öncesinde birkaç önemli hazırlık adımı atılması gerekir. Bunların başında odanın doğru BTU hesabının yapılması gelir. BTU (British Thermal Unit) değeri, klimanın soğutma kapasitesini ifade eder. Bir odanın ısı yükü; odanın metrekaresi, yüksekliği, pencere sayısı ve yönü, güneş maruziyeti ve ısı üreten cihazların varlığı dikkate alınarak hesaplanır. Yetersiz kapasiteli bir klima sürekli çalışır ve oda sıcaklığına hiçbir zaman tam anlamıyla ulaşamaz; gereğinden büyük bir klima ise kısa aralıklarla devreye girip çıkarak nem kontrolünü bozar.
                        </p>
                        <p>
                            Elektrik altyapısının da montaj öncesinde kontrol edilmesi gerekir. Her klima için ayrı bir sigorta hattı açılmalıdır. Klimanın plakasında belirtilen ampere göre uygun sigorta seçilmelidir; yetersiz hatta takılan klima sigorta attırır ve yangın riski oluşturabilir.
                        </p>

                        <h2>İç Ünite İçin Doğru Konum Nasıl Seçilir?</h2>
                        <p>
                            İç ünitenin yerleştirileceği konum, klimanın etkinliği üzerinde belirleyici bir rol oynar. Dikkate alınması gereken temel kriterler şunlardır:
                        </p>
                        <ul>
                            <li><strong>Yükseklik:</strong> İç ünite, yerden en az 2,2 metre yüksekliğe monte edilmelidir. Soğuk hava aşağıya iner; bu nedenle yüksek montaj, odanın daha homojen bir biçimde soğumasını sağlar.</li>
                            <li><strong>Hava akışı engeli olmamalı:</strong> İç ünitenin önünde perde, dolap ya da duvar gibi engeller bulunmamalıdır. Soğuk havanın tüm odaya serbestçe yayılması için en az 50 cm önünde açık alan olması gerekir.</li>
                            <li><strong>Güneş ışığı ve ısı kaynakları:</strong> Televizyon, bilgisayar veya ocak gibi ısı üreten cihazların yakınına monte edilmemeli; termostat sensörü bu ısı kaynaklarından etkilenerek yanlış ölçüm yapabilir.</li>
                            <li><strong>Dış üniteye mesafe:</strong> İç ve dış ünite arasındaki bakır boru uzunluğu arttıkça gaz basıncındaki kayıp da artar. Üretici kılavuzunda belirtilen maksimum boru uzunluğu aşılmamalıdır; genellikle bu değer 5 ila 15 metre arasındadır.</li>
                            <li><strong>Drenaj eğimi:</strong> İç üniteden çıkan yoğuşma suyu, bir drenaj borusu aracılığıyla dışarı taşınır. Bu borunun doğru eğimde döşenmesi gerekir; yatay veya yukarı eğimli montajda drenaj çalışmaz ve su iç üniteden dışarı akar.</li>
                        </ul>

                        <h2>Boru Bağlantısı ve Gaz Dolumu</h2>
                        <p>
                            Split klimanın iç ve dış ünitesi, soğutucu gazın aktarıldığı bakır borularla birbirine bağlanır. Bu bağlantının sızdırmaz olması hayati önem taşır; küçük bir kaçak bile zamanla gazın bitmesine yol açar.
                        </p>
                        <p>
                            Bakır borular, bükme makinesiyle kıvrılır; boyutuna uygun flanş takılır ve tork anahtarı ile belirtilen torkta sıkıştırılır. Flanş bağlantıları elle sıkıştırılırsa ya da gereğinden fazla sıkılırsa kaçak kaçınılmaz hâle gelir.
                        </p>
                        <p>
                            Boru bağlantısı tamamlandıktan sonra vakum pompasıyla sistem en az 30 dakika boyunca vakumlanır. Bu işlem, boru içindeki hava ve nemi temizler. Nemin sisteme girmiş olması kompresörü ve genişleme vanasını tahrip eder. Vakumlama atlandığında cihaz kısa sürede arızalanır; bu sık yapılan ve telafisi pahalı bir hatadır.
                        </p>
                        <p>
                            Vakum tutuyorsa (yani sızdırmazlık sağlandıysa) gaz dolumu yapılır. Klima fabrikadan belirli miktarda gazla dolu gelir; ancak boru uzunluğu standart değeri aştığında ek gaz dolumu gerekebilir. Teknik servis, manometre ile sistemi kontrol ederek gerekli miktarı hesaplar.
                        </p>

                        <h2>Montaj Sürecinde Yapılan Hatalar</h2>
                        <p>
                            Deneyimsiz ekipler tarafından sık yapılan montaj hataları ve sonuçları şöyle sıralanabilir:
                        </p>
                        <ul>
                            <li><strong>Vakumlama yapılmaması:</strong> Sisteme giren nem, kompresörü ve vanayı bozar. Cihaz birkaç ay içinde arızalanır.</li>
                            <li><strong>Yanlış tork ile flanş sıkıştırılması:</strong> Kaçak ve gaz kaybına yol açar.</li>
                            <li><strong>Drenaj borusunun yanlış eğimde döşenmesi:</strong> Su iç ünitenin önünden damlayarak duvar ve mobilyalara zarar verir.</li>
                            <li><strong>Dış ünitenin kapalı veya havasız alana yerleştirilmesi:</strong> Kondenser yeterince ısı atamaz; kompresör aşırı ısınır.</li>
                            <li><strong>Elektrik bağlantısının yanlış yapılması:</strong> Faz ve nötr iletkenlerinin karıştırılması, kontrol kartının yanmasına neden olabilir.</li>
                            <li><strong>Yetersiz duvar desteği:</strong> İç ünitenin sağlam duvara sabitlenmemesi, cihazın ilerleyen sürede düşme riskiyle birlikte yoğun titreşime yol açar.</li>
                        </ul>

                        <h2>Klima Montajı Ne Kadar Sürer?</h2>
                        <p>
                            Standart bir split klima montajı, deneyimli iki kişilik bir ekip tarafından genellikle 2 ila 4 saat arasında tamamlanır. Süreyi etkileyen başlıca faktörler şunlardır: boru uzunluğu, duvar malzemesi (beton kırma süresi), iç ve dış ünite arasındaki mesafe ve binada asansör olup olmadığı. Çok katlı binalarda dış ünite çatıya ya da yüksek bir konuma monte edilecekse ek güvenlik önlemleri ve ekipman gerekebilir; bu da süreyi uzatır.
                        </p>

                        <h2>Profesyonel Montajın Önemi ve Garanti</h2>
                        <p>
                            Klima markaları, cihazların yetkili servis veya sertifikalı teknisyen tarafından monte edilmesini garanti koşulu olarak şart koşar. Yetkisiz montajda yaşanan arızalar garanti kapsamı dışında kalır; bu da tamiri müşteriye yükler.
                        </p>
                        <p>
                            Profesyonel montaj yalnızca garantiyi korumakla kalmaz; aynı zamanda sistemin tasarım kapasitesinde çalışmasını, gaz basıncının fabrika değerinde kalmasını ve boru bağlantılarının sızdırmaz olmasını güvence altına alır. Daha düşük fiyatlı montaj tekliflerinin çoğu vakumlama ve sızdırmazlık testlerini atlamaktadır; bu kestirme yol kısa vadede kazandırır gibi görünse de uzun vadede çok daha pahalıya mal olur.
                        </p>
                        <p>
                            Antalya&apos;da uzman ekibimizle gerçekleştirilen <Link href="/hizmetler/klima-montaji" className="text-blue-700 underline font-medium">klima montajı hizmetimiz</Link> hakkında bilgi almak veya randevu oluşturmak için hemen iletişime geçin.
                        </p>
                    </div>
                </article>

                {/* CTA */}
                <section className="bg-blue-700 py-12">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-2xl font-extrabold text-white mb-3">Bu Makale Yardımcı Oldu mu? Hemen Arayın</h2>
                        <p className="text-blue-200 mb-8">Profesyonel klima montajı için ücretsiz keşif. Antalya genelinde aynı gün servis.</p>
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
