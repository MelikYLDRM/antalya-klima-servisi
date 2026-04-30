"use client";

import { useState } from "react";

const faqItems = [
    {
        question: "Antalya'da klima tamiri ne kadar sürer?",
        answer:
            "Çoğu klima arızası aynı gün içinde çözülmektedir. Sabah yapılan çağrılar genellikle öğleden önce veya öğleden sonra tamamlanır. Yedek parça gerektiren durumlarda parça temin süresine göre 1-2 gün içinde bitirilir.",
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
        question: "Çamaşır makinesi tamirinde garanti veriyor musunuz?",
        answer:
            "Evet, tüm tamir işlemlerimiz garantilidir. Yapılan onarım için garantimiz kapsamında aynı arıza tekrarlanırsa ücretsiz müdahale sağlıyoruz. Kullanılan yedek parçalar için de tedarikçi garantisi geçerlidir.",
    },
    {
        question: "Klima tamiri için keşif ücreti alıyor musunuz?",
        answer:
            "Hayır, keşif ücreti almıyoruz. Teknisyenimiz adresinize gelir, cihazı inceler ve tamir fiyatını bildirir. Tamir için onay vermeniz durumunda işe başlanır. Tamir yapılmaması durumunda herhangi bir ücret talep edilmez.",
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
                        Klima Servisi Hakkında Her Şey
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
