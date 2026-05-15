const PHONE = "05426546113";
const PHONE_DISPLAY = "0542 654 61 13";
const WA_LINK = `https://wa.me/90${PHONE.slice(1)}?text=Merhaba,%20klima%20servisi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`;

const badges = [
    { icon: "🔧", text: "Uzman Teknisyen" },
    { icon: "💰", text: "Uygun Fiyat" },
];

export default function Hero() {
    return (
        <section
            className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden"
            aria-labelledby="hero-heading"
        >
            {/* Background pattern */}
            <div
                className="absolute inset-0 opacity-10"
                aria-hidden="true"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                }}
            />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
                <div className="max-w-3xl">
                    {/* Breadcrumb-style label */}
                    <p className="text-blue-200 text-sm font-medium mb-4 flex items-center gap-2">
                        <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Antalya Muratpaşa
                    </p>

                    <h1
                        id="hero-heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6"
                    >
                        Antalya Klima <span className="text-blue-300">Tamir, Bakım ve Servis</span>
                        <br />
                        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90">
                            + Beyaz Eşya Tamir ve Servis Hizmeti
                        </span>
                    </h1>

                    <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                        Muratpaşa ve tüm Antalya&apos;ya profesyonel klima tamir, bakım ve
                        servis hizmeti veriyoruz. Klima montajı, gaz dolumu ile buzdolabı
                        ve çamaşır makinesi servisinde de yanınızdayız.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mb-10">
                        <a
                            href={`tel:${PHONE}`}
                            className="flex items-center justify-center gap-2 bg-white text-blue-800 font-bold text-lg px-8 py-4 rounded-2xl hover:bg-blue-50 transition-colors shadow-lg"
                            aria-label={`Şimdi ara: ${PHONE_DISPLAY}`}
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
                            {PHONE_DISPLAY} — Hemen Ara
                        </a>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-colors shadow-lg"
                            aria-label="WhatsApp ile mesaj gönderin"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.544 5.875L.057 23.5l5.782-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.373l-.359-.213-3.731.979.995-3.636-.234-.373A9.818 9.818 0 1112 21.818z" />
                            </svg>
                            WhatsApp&apos;tan Yaz
                        </a>
                    </div>

                    {/* Trust badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {badges.map((badge) => (
                            <div
                                key={badge.text}
                                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2.5"
                            >
                                <span className="text-xl" aria-hidden="true">
                                    {badge.icon}
                                </span>
                                <span className="text-sm font-medium text-white">
                                    {badge.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
