import Link from "next/link";

const areas = [
    {
        name: "Muratpaşa",
        slug: "muratpasa",
        description: "Tahılpazarı, Kışla, Sinan, Fener, Şirinyalı, Lara",
        primary: true,
    },
    { name: "Kepez", slug: "kepez", description: "Altınova, Gürsu, Varsak, Santral Mahallesi" },
    { name: "Konyaaltı", slug: "konyaalti", description: "Uncalı, Sarısu, Hurma, Liman Mahallesi" },
    { name: "Döşemealtı", slug: "dosemealti", description: "Çıplaklı, Hacılar, Işıklar" },
    { name: "Antalya Merkez", slug: "muratpasa", description: "Tüm merkez mahalleler" },
    { name: "Aksu", slug: "aksu", description: "Düden, Çandır, Serik Yolu" },
];

export default function ServiceAreas() {
    return (
        <section
            id="bolgeler"
            className="py-16 md:py-20 bg-blue-900 text-white"
            aria-labelledby="areas-heading"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                    <p className="text-blue-300 font-semibold text-sm uppercase tracking-wide mb-2">
                        Hizmet Bölgelerimiz
                    </p>
                    <h2
                        id="areas-heading"
                        className="text-3xl md:text-4xl font-extrabold mb-4"
                    >
                        Antalya&apos;nın Her Noktasına Klima Servisi
                    </h2>
                    <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                        Muratpaşa merkezimizden Antalya&apos;nın tüm ilçelerine hızlı
                        ulaşım sağlıyoruz. Bulunduğunuz noktadan bağımsız olarak aynı
                        gün servis verebiliyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
                    {areas.map((area) => (
                        <Link
                            key={area.name}
                            href={`/hizmet-bolgesi/${area.slug}`}
                            className={`rounded-xl p-4 text-center transition-opacity hover:opacity-90 ${area.primary
                                ? "bg-blue-500 border-2 border-blue-300"
                                : "bg-blue-800/60 border border-blue-700"
                                }`}
                        >
                            {area.primary && (
                                <span className="inline-block text-xs font-bold bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded-full mb-2">
                                    Merkezimiz
                                </span>
                            )}
                            <p className="font-bold text-white mb-1">{area.name}</p>
                            <p className="text-xs text-blue-200 leading-snug">
                                {area.description}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Map placeholder / address highlight */}
                <div className="bg-blue-800/40 border border-blue-700 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shrink-0">
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </div>
                    <div>
                        <p className="font-bold text-white text-lg">Servis Adresimiz</p>
                        <p className="text-blue-200">
                            Tahılpazarı Mahallesi 452 Sokak No:3, Muratpaşa / Antalya
                        </p>
                    </div>
                    <a
                        href="https://maps.google.com/?q=Muratpaşa+Tahılpazarı+Mahallesi+452+Sokak+No:3+Antalya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm:ml-auto shrink-0 flex items-center gap-2 bg-white text-blue-800 font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
                        aria-label="Google Maps'te yol tarifi al"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                            />
                        </svg>
                        Yol Tarifi Al
                    </a>
                </div>
            </div>
        </section>
    );
}
