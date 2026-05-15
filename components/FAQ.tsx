"use client";

import { useState } from "react";

const faqItems = [
    {
        question: "Antalya'da klima tamiri ne kadar sürer?",
        answer:
            "Klima arızaları genellikle kısa sürede çözülmektedir. Sabah yapılan çağrılar genellikle öğleden önce veya öğleden sonra tamamlanır. Yedek parça gerektiren durumlarda parça temin süresine göre 1-2 gün içinde bitirilir.",
    },
    {
        question: "Klima bakımı ne zaman yapılmalıdır?",
        answer:
            "Klimanızın yaz sezonunda verimli çalışması için her yıl Nisan-Mayıs aylarında, kış için ise Eylül-Ekim aylarında bakım yaptırmanızı öneririz. Düzenli bakım enerji tasarrufu sağlar ve cihaz ömrünü uzatır.",
    },
    {
        question: "Antalya'da klima gaz dolumu kaça mal olur?",
        answer:
            "Gaz dolumu fiyatı klimanın türüne (R32, R410A, R22) ve gerekli gaz miktarına göre değişir. Keşif sonrasında net fiyat bildiriyoruz. Keşif ücreti almıyoruz, işe başlamadan fiyatı öğrenebilirsiniz.",
    },
    {
        question: "Hangi klima markalarına bakım ve tamir yapıyorsunuz?",
        answer:
            "Daikin, Mitsubishi, Samsung, LG, Bosch, Arçelik, Vestel, Baymak, Alarko, Gree, Midea, Fujitsu ve diğer tüm marka klimaların tamir, bakım ve montajını yapıyoruz.",
    },
    {
        question: "Buzdolabı tamiri yerinde mi yapılıyor?",
        answer:
            "Evet, buzdolabı tamiri adresinizde yerinde yapılmaktadır. Teknisyenimiz kapınıza gelir, arızayı teşhis eder ve çoğu durumda aynı ziyarette tamir tamamlanır. Cihazı taşımanıza gerek yoktur.",
    },
    {
        question: "Klima montajı için hangi bölgelere hizmet veriyorsunuz?",
        answer:
            "Muratpaşa, Kepez, Konyaaltı, Döşemealtı, Aksu ve Antalya merkezdeki tüm mahallelere klima montajı ve tamir hizmeti veriyoruz. Servis bölgesi hakkında bilgi almak için bizi arayabilirsiniz.",
    },
    {
        question: "Klima tamiri için keşif ücreti alıyor musunuz?",
        answer:
            "Hayır, keşif ücreti almıyoruz. Teknisyenimiz adresinize gelir, cihazı inceler ve tamir fiyatını bildirir. Tamir için onay vermeniz durumunda işe başlanır. Tamir yapılmaması durumunda herhangi bir ücret talep edilmez.",
    },
    {
        question: "Klima tamiri için garanti veriyor musunuz?",
        answer:
            "Evet, gerçekleştirdiğimiz tamirlerde işçilik garantisi sunuyoruz. Değiştirilen orijinal yedek parçalar için üretici garantisi geçerlidir. Tamir sonrası aynı arıza tekrarlanırsa ücretsiz müdahale yapıyoruz.",
    },
    {
        question: "Klima montajında kaç kişi gelir ve ne kadar sürer?",
        answer:
            "Standart split klima montajı 2-3 saat sürer, genellikle 2 teknisyen ile yapılır. Kaset tipi veya multi-split sistemlerde süre uzayabilir. Montaj öncesi sizi bilgilendiriyoruz.",
    },
    {
        question: "Çamaşır makinesi hata kodu veriyorsa ne yapmalıyım?",
        answer:
            "Hata kodu çoğunlukla bir sensör, elektronik kart veya mekanik parça arızasını işaret eder. Cihazı kapatıp birkaç dakika bekledikten sonra yeniden başlatın; hata devam ediyorsa teknisyen çağırın. Hata kodunu not alarak bizi aradığınızda teşhisi hızlandırabilirsiniz.",
    },
    {
        question: "Klima neden su akıtır?",
        answer:
            "Klimanın su akıtmasının en yaygın nedeni drenaj borusunun tıkanması veya yanlış eğimli kurulmasıdır. Bunun dışında filtre kirliliği ve gaz eksikliği de su birikmesine yol açabilir. Teknisyenimiz sorunu yerinde teşhis edip çözer.",
    },
    {
        question: "Buzdolabı soğutmuyorsa ne yapmalıyım?",
        answer:
            "Önce arka ızgaranın ve kapı contasının temiz ve sağlam olduğunu kontrol edin. Termostat ayarını kontrol edin. Kompresör sesinin gelip gelmediğine bakın. Bunlar sorun değilse gaz kaçağı veya kompresör arızası olabilir; servis çağırmanız gerekir.",
    },
    {
        question: "Klima kokuyor, ne yapabilirim?",
        answer:
            "Klima kokusu genellikle kirli filtre veya iç ünitede küf oluşumundan kaynaklanır. Filtreyi temizleyin; koku devam ederse iç ünite derinlemesine temizliği için servis çağırın. Düzenli bakım bu problemi önler.",
    },
    {
        question: "Klima inverter mi yoksa on/off mı almalıyım?",
        answer:
            "İnverter klimalar yüzde 30-50 daha az enerji tüketir ve uzun süre çalışacak mekânlar için idealdir. On/off klimalar başlangıç maliyeti düşük olmakla birlikte enerji faturanıza daha fazla yansır. Kullanım sıklığınıza göre öneri için bizi arayabilirsiniz.",
    },
    {
        question: "Antalya'da acil klima tamiri için ne kadar beklerim?",
        answer:
            "Çalışma saatlerimiz içinde (Pazartesi–Cumartesi 09:30–19:00) yaptığınız başvurularda aynı gün servis vermeye çalışıyoruz. Yoğun sezonlarda sabah erken aranmanızı öneririz. Pazar günleri acil çağrılar alınır.",
    },
];

// FAQ Schema - will be injected via script tag in page
export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
        },
    })),
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="sss"
            className="py-16 md:py-24 bg-gray-50"
            aria-labelledby="faq-heading"
        >
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
                        Sık Sorulan Sorular
                    </p>
                    <h2
                        id="faq-heading"
                        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
                    >
                        Klima Tamir, Bakım ve Servis Hakkında Her Şey
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Müşterilerimizin en çok merak ettiği sorular ve cevapları.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-3">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                                id={`faq-button-${index}`}
                            >
                                <span className="font-semibold text-gray-900 pr-4">
                                    {item.question}
                                </span>
                                <svg
                                    className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            <div
                                id={`faq-answer-${index}`}
                                role="region"
                                aria-labelledby={`faq-button-${index}`}
                                className={`transition-all duration-200 ease-in-out ${openIndex === index
                                    ? "max-h-96 opacity-100"
                                    : "max-h-0 opacity-0 overflow-hidden"
                                    }`}
                            >
                                <p className="px-5 pb-5 text-gray-600 leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
