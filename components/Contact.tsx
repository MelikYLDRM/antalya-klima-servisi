const PHONE = "05426546113";
const PHONE_DISPLAY = "0542 654 61 13";
const WA_LINK = `https://wa.me/90${PHONE.slice(1)}?text=Merhaba,%20klima%20servisi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`;
const MAPS_EMBED =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.9!2d30.7133!3d36.8969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39!2sMuratpa%C5%9Fa%2C+Antalya!5e0!3m2!1str!2str!4v1";

const contactMethods = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        label: "Telefon",
        value: PHONE_DISPLAY,
        href: `tel:${PHONE}`,
        cta: "Şimdi Ara",
        color: "blue",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.544 5.875L.057 23.5l5.782-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.373l-.359-.213-3.731.979.995-3.636-.234-.373A9.818 9.818 0 1112 21.818z" />
            </svg>
        ),
        label: "WhatsApp",
        value: PHONE_DISPLAY,
        href: WA_LINK,
        cta: "Mesaj Gönder",
        color: "green",
        external: true,
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        label: "Adres",
        value: "Tahılpazarı Mah. 452 Sokak No:3, Muratpaşa / Antalya",
        href: "https://maps.google.com/?q=Muratpaşa+Tahılpazarı+Mahallesi+452+Sokak+No:3+Antalya",
        cta: "Yol Tarifi",
        color: "indigo",
        external: true,
    },
];

const colorBg: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    indigo: "bg-indigo-100 text-indigo-700",
};

const colorBtn: Record<string, string> = {
    blue: "bg-blue-600 hover:bg-blue-700 text-white",
    green: "bg-green-500 hover:bg-green-600 text-white",
    indigo: "bg-indigo-600 hover:bg-indigo-700 text-white",
};

export default function Contact() {
    return (
        <section
            id="iletisim"
            className="py-16 md:py-24 bg-white"
            aria-labelledby="contact-heading"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
                        Bize Ulaşın
                    </p>
                    <h2
                        id="contact-heading"
                        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
                    >
                        Antalya Klima Servisi — İletişim
                    </h2>
                    <p className="text-gray-600 text-lg max-w-xl mx-auto">
                        Arıza bildirimi, fiyat teklifi veya randevu almak için bizi arayın
                        ya da WhatsApp&apos;tan yazın.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Contact Cards */}
                    <div className="space-y-4">
                        {contactMethods.map((method) => (
                            <div
                                key={method.label}
                                className="bg-gray-50 rounded-2xl p-5 flex items-start gap-4 border border-gray-100"
                            >
                                <div
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${colorBg[method.color]}`}
                                >
                                    {method.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-500 mb-0.5">
                                        {method.label}
                                    </p>
                                    <p className="font-semibold text-gray-900 break-words">
                                        {method.value}
                                    </p>
                                </div>
                                <a
                                    href={method.href}
                                    target={method.external ? "_blank" : undefined}
                                    rel={method.external ? "noopener noreferrer" : undefined}
                                    className={`shrink-0 text-sm font-semibold px-4 py-2 rounded-xl transition-colors ${colorBtn[method.color]}`}
                                    aria-label={`${method.cta}: ${method.value}`}
                                >
                                    {method.cta}
                                </a>
                            </div>
                        ))}

                        {/* Working hours */}
                        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5 text-blue-700"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <p className="font-bold text-gray-900">Çalışma Saatleri</p>
                            </div>
                            <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Pazartesi – Cumartesi</span>
                                    <span className="font-semibold text-gray-900">
                                        09:30 – 19:00
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Pazar</span>
                                    <span className="font-semibold text-gray-900">
                                        Kapalı (Acil çağrılar alınır)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-[420px]">
                        <iframe
                            src={MAPS_EMBED}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Antalya Klima Servisi — Muratpaşa Tahılpazarı Mah. 452 Sokak No:3"
                            aria-label="Harita: Servis konumumuz Muratpaşa Tahılpazarı Mah."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
