import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const SITE_URL = "https://www.antalyaklimabeyazesyatamiri.com.tr";
const PHONE = "05426546113";
const PHONE_DISPLAY = "0542 654 61 13";

export const metadata: Metadata = {
    title: "Klima ve Beyaz Eşya Rehberi | Antalya Klima Servisi",
    description: "Klima bakımı, montajı, gaz dolumu ve beyaz eşya tamiri hakkında bilgi edinmek için rehber makalelerimizi inceleyin.",
    alternates: { canonical: `${SITE_URL}/rehber` },
};

const articles = [
    {
        slug: "klima-bakimi-ne-zaman-yapilir",
        title: "Klima Bakımı Ne Zaman Yapılır?",
        description: "Yaz ve kış sezonu öncesinde klima bakımını ne zaman, nasıl yaptırmalısınız? Periyodik bakımın önemi ve enerji tasarrufu hakkında kapsamlı rehber.",
        readTime: "5 dk okuma",
    },
    {
        slug: "klima-gaz-dolumu-rehberi",
        title: "Klima Gaz Dolumu: Bilmeniz Gerekenler",
        description: "R32, R410A, R22 gazları arasındaki fark nedir? Gaz kaçağını nasıl anlarsınız? Dolum fiyatları ve dikkat etmeniz gerekenler.",
        readTime: "6 dk okuma",
    },
    {
        slug: "split-klima-montaji-nasil-yapilir",
        title: "Split Klima Montajı Nasıl Yapılır?",
        description: "Split klima montajında doğru konum seçimi, boru bağlantısı ve gaz dolumu nasıl yapılır? Montaj sürecinde dikkat edilmesi gerekenler.",
        readTime: "5 dk okuma",
    },
    {
        slug: "buzdolabi-arizalari-ve-cozumleri",
        title: "Buzdolabı Arızaları ve Çözümleri",
        description: "Buzdolabınız soğutmuyor, buz yapıyor, ses çıkarıyor veya su akıtıyor mu? En yaygın buzdolabı arızaları ve çözümleri hakkında rehber.",
        readTime: "6 dk okuma",
    },
    {
        slug: "camasir-makinesi-bakimi",
        title: "Çamaşır Makinesi Bakımı ve Arızaları",
        description: "Çamaşır makinenizi uzun ömürlü kullanmak için bakım ipuçları. Yaygın arızalar, hata kodları ve ne zaman servis çağırmalısınız.",
        readTime: "5 dk okuma",
    },
];

export default function RehberPage() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-14 md:py-20">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <nav aria-label="Breadcrumb" className="mb-6">
                            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-blue-200">
                                <li><Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link></li>
                                <li aria-hidden="true" className="text-blue-400">/</li>
                                <li className="text-white font-medium" aria-current="page">Rehber</li>
                            </ol>
                        </nav>
                        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Klima ve Beyaz Eşya Rehberi</h1>
                        <p className="text-blue-100 text-lg max-w-2xl">Klima bakımı, montajı, gaz dolumu ve beyaz eşya tamiri hakkında merak ettiğiniz her şey bu rehberlerde.</p>
                    </div>
                </section>

                <section className="py-14 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {articles.map((article) => (
                                <Link
                                    key={article.slug}
                                    href={`/rehber/${article.slug}`}
                                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group"
                                >
                                    <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-3">{article.readTime}</p>
                                    <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{article.title}</h2>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.description}</p>
                                    <span className="text-blue-600 text-sm font-medium group-hover:underline">Devamını Oku →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-blue-700 py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-2xl font-extrabold text-white mb-3">Sorunuzu Doğrudan Sorun</h2>
                        <p className="text-blue-200 mb-6">Ücretsiz keşif, aynı gün servis.</p>
                        <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-bold text-lg px-8 py-4 rounded-2xl hover:bg-blue-50 transition-colors">
                            {PHONE_DISPLAY} — Hemen Ara
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
