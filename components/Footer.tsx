const PHONE = "05426546113";
const PHONE_DISPLAY = "0542 654 61 13";
const WA_LINK = `https://wa.me/90${PHONE.slice(1)}?text=Merhaba,%20klima%20servisi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`;

const services = [
    "Antalya Klima Tamiri",
    "Klima Montajı",
    "Klima Bakımı",
    "Buzdolabı Tamiri",
    "Çamaşır Makinesi Tamiri",
];

const areas = ["Muratpaşa", "Kepez", "Konyaaltı", "Döşemealtı", "Antalya Merkez"];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300" aria-label="Sayfa altı">
            {/* Pre-footer CTA */}
            <div className="bg-blue-700 py-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-white font-bold text-xl mb-1">
                            Klima veya Beyaz Eşya Arızanız mı Var?
                        </p>
                        <p className="text-blue-200">
                            Hemen arayın, aynı gün çözüm sağlayalım.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a
                            href={`tel:${PHONE}`}
                            className="flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
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
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            {PHONE_DISPLAY}
                        </a>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.544 5.875L.057 23.5l5.782-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.373l-.359-.213-3.731.979.995-3.636-.234-.373A9.818 9.818 0 1112 21.818z" />
                            </svg>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">Antalya Klima</p>
                                <p className="text-gray-400 text-xs">Beyaz Eşya Servis</p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400 mb-4">
                            Antalya Muratpaşa&apos;da profesyonel klima tamiri, montajı,
                            bakımı ve beyaz eşya tamir servisi. 10+ yıllık deneyim.
                        </p>
                        <address className="not-italic text-sm text-gray-400">
                            Tahılpazarı Mah. 452 Sokak No:3
                            <br />
                            Muratpaşa / Antalya
                        </address>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">
                            Hizmetlerimiz
                        </h3>
                        <ul className="space-y-2">
                            {services.map((s) => (
                                <li key={s}>
                                    <a
                                        href="#hizmetler"
                                        className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        {s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Areas */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">
                            Hizmet Bölgelerimiz
                        </h3>
                        <ul className="space-y-2">
                            {areas.map((a) => (
                                <li key={a}>
                                    <a
                                        href="#bolgeler"
                                        className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        {a} Klima Servisi
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Quick */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">
                            İletişim
                        </h3>
                        <div className="space-y-3">
                            <a
                                href={`tel:${PHONE}`}
                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                <svg
                                    className="w-4 h-4 shrink-0"
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
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                            >
                                <svg
                                    className="w-4 h-4 shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.544 5.875L.057 23.5l5.782-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.373l-.359-.213-3.731.979.995-3.636-.234-.373A9.818 9.818 0 1112 21.818z" />
                                </svg>
                                WhatsApp: {PHONE_DISPLAY}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p>
                        © {currentYear} Antalya Klima Beyaz Eşya Tamir Servisi. Tüm hakları
                        saklıdır.
                    </p>
                    <p>
                        Antalya Muratpaşa Tahılpazarı Mah. 452 Sokak No:3 |{" "}
                        <a
                            href={`tel:${PHONE}`}
                            className="hover:text-blue-400 transition-colors"
                        >
                            {PHONE_DISPLAY}
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
