import Image from "next/image";
import Link from "next/link";

const PHONE = "05426546113";
const PHONE_DISPLAY = "0542 654 61 13";

const services = [
    {
        id: "klima-tamiri",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Klima Tamiri",
        image: "/images/klimatamir.jpg",
        description:
            "Her marka ve model klimanızın arızasını hızlıca tespit ederiz. Soğutmuyor, sesli çalışıyor, su akıtıyor? Hemen arayın.",
        items: [
            "Soğutma / Isıtma Problemi",
            "Kompresör Tamiri",
            "Gaz Kaçağı ve Dolumu",
            "Elektronik Kart Arızası",
            "Su Akıtma Sorunu",
        ],
        color: "blue",
    },
    {
        id: "klima-montaji",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
        title: "Klima Montajı",
        image: "/images/klima-montaji-yeni.jpg",
        description:
            "Split, inverter, kaset tipi klimaların profesyonel montajı. Doğru konumlama, sızdırmaz boru bağlantısı, tam gaz dolumu ile eksiksiz kurulum.",
        items: [
            "Split Klima Montajı",
            "Inverter Klima Kurulumu",
            "Kaset Tipi Klima",
            "Çoklu Sistem (Multi Split)",
            "Deplasman / Söküp Takma",
        ],
        color: "indigo",
    },
    {
        id: "klima-bakimi",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Klima Bakımı",
        image: "/images/klimabakim.jpg",
        description:
            "Yıllık periyodik bakım ile klimanızın ömrünü uzatın, enerji tüketimini azaltın. Temizlik, kontrol ve gaz seviyesi ölçümü dahildir.",
        items: [
            "Filtre ve İç Ünite Temizliği",
            "Dış Ünite Yıkama",
            "Gaz Seviyesi Kontrolü",
            "Elektrik Bağlantı Kontrolü",
            "Sezon Öncesi Hazırlık",
        ],
        color: "cyan",
    },
    {
        id: "buzdolabi-tamiri",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "Buzdolabı Tamiri",
        image: "/images/buzdolabitamir.webp",
        description:
            "Buzdolabınız soğutmuyor, buz yapıyor, ses çıkarıyor veya su akıtıyor mu? Yerinde ve hızlı tamir ile yeniden soğutuyor.",
        items: [
            "Soğutma Problemi",
            "Kompresör Değişimi",
            "Termostat Arızası",
            "Kapı Contası Değişimi",
            "Dondurucu Bölmesi Tamiri",
        ],
        color: "sky",
    },
    {
        id: "camasir-makinesi-tamiri",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
        title: "Çamaşır Makinesi Tamiri",
        image: "/images/camasirtamir.png",
        description:
            "Çamaşır makineniz çalışmıyor, sızdırıyor, hata kodu mu veriyor? Elektronik kart, kapı kilidi, pompa tamirlerinde hızlı çözüm.",
        items: [
            "Elektronik Kart Tamiri",
            "Kapı Kilidi Değişimi",
            "Tahliye Pompası",
            "Drum/Kazan Rulman",
            "Hata Kodu Teşhisi",
        ],
        color: "blue",
    },
];

const colorMap: Record<string, string> = {
    blue: "bg-blue-600",
    indigo: "bg-indigo-600",
    cyan: "bg-cyan-600",
    sky: "bg-sky-600",
};

const borderMap: Record<string, string> = {
    blue: "border-blue-200 hover:border-blue-400",
    indigo: "border-indigo-200 hover:border-indigo-400",
    cyan: "border-cyan-200 hover:border-cyan-400",
    sky: "border-sky-200 hover:border-sky-400",
};

const textMap: Record<string, string> = {
    blue: "text-blue-600",
    indigo: "text-indigo-600",
    cyan: "text-cyan-600",
    sky: "text-sky-600",
};

export default function Services() {
    return (
        <section
            id="hizmetler"
            className="py-16 md:py-24 bg-gray-50"
            aria-labelledby="services-heading"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
                        Hizmetlerimiz
                    </p>
                    <h2
                        id="services-heading"
                        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
                    >
                        Klima ve Beyaz Eşya Tamir, Bakım ve Servis Hizmetleri
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Antalya Muratpaşa&apos;da tüm marka ve modellere yetkili servis
                        kalitesinde, uygun fiyatla hizmet veriyoruz.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {services.map((service) => (
                        <article
                            key={service.id}
                            id={service.id}
                            className={`bg-white rounded-2xl border-2 ${borderMap[service.color]} overflow-hidden transition-all duration-200 hover:shadow-lg`}
                        >
                            {service.image && (
                                <div className="relative w-full h-48">
                                    <Image
                                        src={service.image}
                                        alt={`Antalya ${service.title} — profesyonel servis hizmeti`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <div
                                    className={`inline-flex items-center justify-center w-12 h-12 ${colorMap[service.color]} text-white rounded-xl mb-4`}
                                >
                                    {service.icon}
                                </div>
                                <h3
                                    className={`text-xl font-bold text-gray-900 mb-2`}
                                >
                                    Antalya {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <ul className="space-y-1.5 mb-5">
                                    {service.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-2 text-sm text-gray-700"
                                        >
                                            <svg
                                                className={`w-4 h-4 ${textMap[service.color]} shrink-0`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/hizmetler/${service.id}`}
                                    className={`inline-flex items-center gap-1 text-sm font-semibold ${textMap[service.color]} hover:underline`}
                                >
                                    Detaylı Bilgi →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <p className="text-gray-600 mb-4">
                        Hangi cihazınız arızalı olursa olsun, tek numarayı arayın:
                    </p>
                    <a
                        href={`tel:${PHONE}`}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-colors shadow-md"
                        aria-label={`Servis için ara: ${PHONE_DISPLAY}`}
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        {PHONE_DISPLAY}
                    </a>
                </div>
            </div>
        </section>
    );
}
