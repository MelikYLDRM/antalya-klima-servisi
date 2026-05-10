const PHONE = "05426546113";
const PHONE_DISPLAY = "0542 654 61 13";
const WA_LINK = `https://wa.me/90${PHONE.slice(1)}?text=Merhaba,%20klima%20servisi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`;

const services = [
    { label: "Antalya Klima Tamiri", href: "/hizmetler/klima-tamiri" },
    { label: "Klima Montajı", href: "/hizmetler/klima-montaji" },
    { label: "Klima Bakımı", href: "/hizmetler/klima-bakimi" },
    { label: "Buzdolabı Tamiri", href: "/hizmetler/buzdolabi-tamiri" },
    { label: "Çamaşır Makinesi Tamiri", href: "/hizmetler/camasir-makinesi-tamiri" },
];

const areas = [
    { label: "Muratpaşa", href: "/hizmet-bolgesi/muratpasa" },
    { label: "Kepez", href: "/hizmet-bolgesi/kepez" },
    { label: "Konyaaltı", href: "/hizmet-bolgesi/konyaalti" },
    { label: "Döşemealtı", href: "/hizmet-bolgesi/dosemealti" },
    { label: "Aksu", href: "/hizmet-bolgesi/aksu" },
];

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
                            Hemen arayın, profesyonel çözüm sunalım.
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
                        <address className="not-italic text-sm text-gray-400 mb-5">
                            Tahılpazarı Mah. 452 Sokak No:3
                            <br />
                            Muratpaşa / Antalya
                        </address>
                        {/* Social Media */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/share/16mdssMdfE/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook sayfamız"
                                className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                            >
                                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33V21.878C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/erlerteknik_07?igsh=MWs4OHpoNzFqbnhobg=="
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram sayfamız"
                                className="w-9 h-9 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                            >
                                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">
                            Hizmetlerimiz
                        </h3>
                        <ul className="space-y-2">
                            {services.map((s) => (
                                <li key={s.href}>
                                    <a
                                        href={s.href}
                                        className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        {s.label}
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
                                <li key={a.href}>
                                    <a
                                        href={a.href}
                                        className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        {a.label} Klima Servisi
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
