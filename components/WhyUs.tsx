const reasons = [
    {
        icon: "⚡",
        title: "Aynı Gün Servis",
        description:
            "Sabah aradığınız arızayı çoğunlukla aynı gün çözüyoruz. Acil durumlar için en kısa sürede yanınızdayız.",
    },
    {
        icon: "🛡️",
        title: "Garantili İşçilik",
        description:
            "Tüm tamir ve montaj işlemlerimiz garantilidir. Yapılan işlemin aynı sorunla dönmesi durumunda ücretsiz müdahale ederiz.",
    },
    {
        icon: "👨‍🔧",
        title: "Uzman Teknisyen",
        description:
            "Yılların deneyimine sahip, sertifikalı teknisyenlerimiz her marka ve model cihazınıza müdahale edebilir.",
    },
    {
        icon: "💰",
        title: "Şeffaf ve Uygun Fiyat",
        description:
            "Keşif ücreti almıyoruz. İş başlamadan önce net fiyat bildiriyoruz, gizli maliyet yok.",
    },
    {
        icon: "🔩",
        title: "Orijinal Yedek Parça",
        description:
            "Yedek parça gereken durumlarda orijinal veya OEM kalite parça kullanıyoruz. Ucuz parça ile kısa ömürlü tamir yapmıyoruz.",
    },
    {
        icon: "📍",
        title: "Yerinde Tamir",
        description:
            "Cihazınızı taşımanıza gerek yok. Adresinize gelerek yerinde teşhis ve tamir yapıyoruz.",
    },
];

const stats = [
    { value: "10+", label: "Yıl Deneyim" },
    { value: "5000+", label: "Mutlu Müşteri" },
    { value: "% 98", label: "Memnuniyet Oranı" },
    { value: "Aynı Gün", label: "Servis Garantisi" },
];

export default function WhyUs() {
    return (
        <section
            id="neden-biz"
            className="py-16 md:py-24 bg-white"
            aria-labelledby="why-us-heading"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
                        Neden Biz?
                    </p>
                    <h2
                        id="why-us-heading"
                        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
                    >
                        Antalya&apos;nın Güvenilir Klima ve Beyaz Eşya Servisi
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        10 yılı aşkın tecrübemiz ve binlerce mutlu müşterimizle Antalya
                        Muratpaşa&apos;nın tercih edilen teknik servisi olarak hizmet
                        veriyoruz.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="text-center bg-blue-50 rounded-2xl py-6 px-4"
                        >
                            <p className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-1">
                                {stat.value}
                            </p>
                            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason) => (
                        <div
                            key={reason.title}
                            className="flex gap-4 p-5 rounded-2xl hover:bg-blue-50 transition-colors"
                        >
                            <span
                                className="text-3xl shrink-0 mt-0.5"
                                aria-hidden="true"
                            >
                                {reason.icon}
                            </span>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1.5">
                                    {reason.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
