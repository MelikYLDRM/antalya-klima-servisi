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
const PAGE_PATH = "/rehber/camasir-makinesi-bakimi";

export const metadata: Metadata = buildPageMetadata({
    title: "Çamaşır Makinesi Bakımı ve Arızaları | Antalya Beyaz Eşya Servisi",
    description: "Çamaşır makinesi bakım ipuçları, hata kodları ve profesyonel tamir-servis çözümleri hakkında kapsamlı rehber.",
    path: PAGE_PATH,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
});

const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Çamaşır Makinesi Bakımı ve Arızaları",
    description: "Çamaşır makinenizi uzun ömürlü kullanmak için bakım ipuçları, yaygın arızalar ve hata kodları hakkında kapsamlı rehber.",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    image: getAbsoluteUrl(OG_IMAGE_PATH),
    inLanguage: "tr-TR",
    articleSection: "Beyaz Eşya Servisi",
    keywords: ["çamaşır makinesi tamiri", "çamaşır makinesi bakım", "antalya beyaz eşya servisi"],
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
    { name: "Çamaşır Makinesi Bakımı ve Arızaları", path: PAGE_PATH },
]);

export default function CamasirMakinesiPage() {
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
                                <li className="text-white font-medium" aria-current="page">Çamaşır Makinesi Bakımı ve Arızaları</li>
                            </ol>
                        </nav>
                        <p className="text-blue-300 text-sm font-semibold uppercase tracking-wide mb-3">5 dk okuma · 15 Ocak 2025</p>
                        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Çamaşır Makinesi Bakımı ve Arızaları</h1>
                        <p className="text-blue-100 text-lg">Çamaşır makinenizi düzenli bakımla uzun yıllar sorunsuz kullanabilirsiniz. Bu rehberde bakım ipuçlarını, sık karşılaşılan arızaları ve hata kodlarını bulacaksınız.</p>
                    </div>
                </section>

                {/* Article */}
                <article className="py-12 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray prose-lg max-w-none">

                        <p>
                            Çamaşır makinesi, günlük hayatın en sık kullanılan beyaz eşyalarından biridir. Ortalama bir hane yılda 200 ila 300 yıkama yapar; bu da makinenin motorundan pompasına, rulmanından kapı contasına kadar pek çok parçasının yıpranmasına yol açar. Düzenli ve doğru bakım bu yıpranmayı en aza indirir, beklenmedik arızaların önüne geçer ve cihazın ömrünü önemli ölçüde uzatır. Bakımsız bir makine ise erken dönemde ciddi arızalar üretir ve yüksek tamir maliyetlerine neden olur.
                        </p>

                        <h2>Çamaşır Makinesi Bakımı Neden Önemlidir?</h2>
                        <p>
                            Düzenli bakımın birkaç somut faydası vardır:
                        </p>
                        <ul>
                            <li><strong>Uzun ömür:</strong> Bakımlı bir çamaşır makinesi 10 ila 15 yıl sorunsuz çalışabilirken, bakımsız bir cihaz 5-7 yılda büyük arızalar üretmeye başlayabilir.</li>
                            <li><strong>Enerji tasarrufu:</strong> Kirli filtreler ve tıkalı pompalar makinenin daha uzun süre çalışmasına ve daha çok enerji tüketmesine neden olur.</li>
                            <li><strong>Hijyen:</strong> Nem ve deterjan kalıntısı içinde küf ve kötü koku oluşur. Bu durum hem çamaşırlara hem de makineye zarar verir.</li>
                            <li><strong>Yıkama kalitesi:</strong> Tıkalı filtre ve kirli tambur, deterjanın ve suyun çamaşıra eşit ulaşmasını engeller; bu da temizlik kalitesini düşürür.</li>
                        </ul>

                        <h2>Çamaşır Makinesi Nasıl Temizlenir?</h2>
                        <p>
                            Düzenli temizlik için aşağıdaki adımları uygulayın:
                        </p>
                        <ol>
                            <li>
                                <strong>Filtre temizliği (ayda bir):</strong> Ön yüklemeli makinelerde kapının alt kısmındaki pompaya ulaşmanızı sağlayan bir kapak bulunur. Filtreyi çıkarın; içinde biriken kıl, bez parçası ve yabancı cisimleri temizleyin. Tıkalı filtre suyun tahliyesini engeller; bu hata koduna ve makinenin durmasına neden olur.
                            </li>
                            <li>
                                <strong>Deterjan çekmecesi temizliği (ayda bir):</strong> Çekmeceyi çıkarın ve sıcak suyla yıkayın. Kanalların içinde biriken deterjan kalıntısı ve kireç temizlenmeli; aksi hâlde çekmece tıkanır ve deterjan tanka geçemez.
                            </li>
                            <li>
                                <strong>Kapı contası temizliği (haftada bir):</strong> Ön yüklemeli makinelerin kauçuk kapı contası neme bağlı küf için ideal ortamdır. Nemi emecek bez veya mendille kurulayın; ayda bir sirke veya özel conta temizleyici ile silin.
                            </li>
                            <li>
                                <strong>Boş yıkama programı (ayda bir):</strong> Makinenin içini temizlemek için yüksek sıcaklık programında (60-90°C) boş çalıştırın. Deterjan haznesi yerine tambura bir fincan beyaz sirke veya makine temizleyici tableti ekleyin. Bu işlem kireç ve bakteri birikimini önler.
                            </li>
                            <li>
                                <strong>Dış yüzey ve kontrol paneli:</strong> Nemli bez ile silin; çamaşır suyu veya aşındırıcı temizleyici kullanmayın.
                            </li>
                        </ol>

                        <h2>En Sık Karşılaşılan Hata Kodları</h2>
                        <p>
                            Modern çamaşır makineleri arıza durumunda ekranda hata kodu gösterir. Markadan markaya farklılık gösterseler de bazı genel hata kategorileri şöyle özetlenebilir:
                        </p>
                        <ul>
                            <li><strong>E1 / F1 (Su alma hatası):</strong> Makine yeterli suyu belirli sürede alamıyor. Musluk kapanmış, hortum kıvrılmış veya filtre tıkalı olabilir.</li>
                            <li><strong>E2 / F2 (Su tahliye hatası):</strong> Kirli su tahliye edilemiyor. Pompa filtresi tıkalı veya tahliye hortumu kıvrılmıştır.</li>
                            <li><strong>E3 / OE (Taşma hatası):</strong> Makine içinde su seviyesi normalin üzerine çıktı. Basınç sensörü veya su giriş valfi arızalı olabilir.</li>
                            <li><strong>E4 / UE (Dengesizlik hatası):</strong> Çamaşırlar tambura dengesiz yüklenmiş. Makinenin durduğunu görürseniz kapağı açın, yükü yeniden düzenleyin ve programı yeniden başlatın.</li>
                            <li><strong>E5 / TE (Isıtma hatası):</strong> Isıtma elemanı veya termistor arızası. Bu kod her zaman teknisyen müdahalesi gerektirir.</li>
                            <li><strong>E6 / dE (Kapı hatası):</strong> Kapı tam kapanmamış ya da kapı kilidi arızalıdır. Kilidi kontrol edin; sorun devam ediyorsa servis gerekir.</li>
                        </ul>
                        <p>
                            Hata kodu gördüğünüzde önce cihazı kapatıp fişini çekin; birkaç dakika bekledikten sonra yeniden deneyin. Kod tekrarlanıyorsa kullanım kılavuzunu inceleyin; kılavuzda açıklama yoksa veya sorun devam ediyorsa servis çağırmanın zamanı gelmiş demektir.
                        </p>

                        <h2>Çamaşır Makinesi Arızaları: Ne Zaman Servis Çağırmalısınız?</h2>
                        <p>
                            Aşağıdaki durumlarda vakit kaybetmeden servis talep edin:
                        </p>
                        <ul>
                            <li>Makine çalışmıyor, ekranda hata kodu var ve basit kontroller sorunu çözmüyor.</li>
                            <li>Yıkama sırasında su tahliye edilemiyor; programın sonunda tambur sulu kalıyor.</li>
                            <li>Makineden yanık kokusu geliyor ya da dumanlanma oluyor.</li>
                            <li>Makine çalışırken zıplıyor, aşırı titreşiyor veya yürüyor; dengeleme denemeleri de işe yaramıyor.</li>
                            <li>Kapı kilidi açılmıyor ve içeride çamaşır sıkışık durumda.</li>
                            <li>Tambur elle döndürüldüğünde aşırı direnç var ya da ses geliyor (bu rulman arızasına işaret eder).</li>
                            <li>Su girişi ya da tahliye hortumundan sızıntı var.</li>
                        </ul>

                        <h2>Çamaşır Makinesi Ömrünü Uzatmak İçin İpuçları</h2>
                        <p>
                            Küçük alışkanlık değişiklikleri cihazınızın ömrünü belirgin biçimde uzatabilir:
                        </p>
                        <ul>
                            <li><strong>Aşırı yüklemekten kaçının:</strong> Tamburu kapasitesinin üzerinde doldurmak rulmanları, tamburun desteklerini ve motoru yorar. Çamaşırların tamburu serbestçe döndürebileceği kadar alan bırakın.</li>
                            <li><strong>Doğru miktarda deterjan kullanın:</strong> Fazla deterjan köpük birikintisi yaratır, filtre ve pompayı tıkar. Makineye ve suya uygun dozaj her zaman tercih edilmeli; ölçeği aşmamalısınız.</li>
                            <li><strong>Yıkama bittikten sonra kapağı açık bırakın:</strong> Bu, tamburdaki nemin buharlaşmasını ve küf oluşumunun önlenmesini sağlar.</li>
                            <li><strong>Cepleri kontrol edin:</strong> Metal para, çakmak veya anahtarlar tambura ciddi zarar verebilir. Her yıkama öncesinde cepleri boşaltma alışkanlığı edinin.</li>
                            <li><strong>Su yumuşatıcı kullanın:</strong> Sert su bölgelerinde kireç birikimi ısıtma elemanını ve su yollarını tahrip eder. Aylık boş yıkamalar ve su yumuşatıcı kullanımı bu riski azaltır.</li>
                            <li><strong>Makinenin seviyesini kontrol edin:</strong> Eğik zemin titreşimi artırır ve rulmanlara erken aşınma getirir. Ayak vidalarıyla dengeleme yapın.</li>
                        </ul>

                        <h2>Antalya&apos;da Çamaşır Makinesi Tamiri</h2>
                        <p>
                            Antalya&apos;da Muratpaşa, Kepez, Konyaaltı, Döşemealtı ve Aksu&apos;da çamaşır makinesi tamir hizmeti veriyoruz. Tüm marka ve modellere, özellikle Arçelik, Beko, Bosch, Samsung, LG, Vestel ve Siemens gibi yaygın markalara bakım ve tamir yapıyoruz.
                        </p>
                        <p>
                            Keşif ücreti almıyoruz; teknisyenimiz adresinize gelir, arızayı tespit eder ve net fiyat bildirir. <Link href="/hizmetler/camasir-makinesi-tamiri" className="text-blue-700 underline font-medium">Çamaşır makinesi tamiri hizmetimiz</Link> hakkında daha fazla bilgi alabilir ya da hemen iletişime geçebilirsiniz.
                        </p>
                    </div>
                </article>

                {/* CTA */}
                <section className="bg-blue-700 py-12">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-2xl font-extrabold text-white mb-3">Bu Makale Yardımcı Oldu mu? Hemen Arayın</h2>
                        <p className="text-blue-200 mb-8">Çamaşır makinesi tamiri için ücretsiz keşif. Antalya genelinde aynı gün servis.</p>
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
