import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
    "Antalya Klima Tamir, Bakım ve Servis — 0542 654 61 13";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background:
                        "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #0369a1 100%)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: "60px 80px",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Konum etiketi */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        background: "rgba(255,255,255,0.15)",
                        borderRadius: 50,
                        padding: "8px 24px",
                        marginBottom: 32,
                    }}
                >
                    <span
                        style={{ color: "#93c5fd", fontSize: 26, fontWeight: 600 }}
                    >
                        Antalya · Muratpasa
                    </span>
                </div>

                {/* Ana başlık */}
                <div
                    style={{
                        color: "white",
                        fontSize: 76,
                        fontWeight: 900,
                        lineHeight: 1.05,
                        margin: "0 0 12px 0",
                    }}
                >
                    Klima Tamir,
                </div>
                <div
                    style={{
                        color: "#93c5fd",
                        fontSize: 76,
                        fontWeight: 900,
                        lineHeight: 1.05,
                        margin: "0 0 28px 0",
                    }}
                >
                    Bakim &amp; Servis
                </div>

                {/* Alt başlık */}
                <div
                    style={{
                        color: "#bfdbfe",
                        fontSize: 30,
                        margin: "0 0 52px 0",
                        fontWeight: 500,
                    }}
                >
                    + Buzdolabi &amp; Camasir Makinesi Tamiri
                </div>

                {/* Telefon CTA */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        background: "white",
                        borderRadius: 18,
                        padding: "18px 44px",
                    }}
                >
                    <span
                        style={{
                            color: "#1d4ed8",
                            fontSize: 44,
                            fontWeight: 900,
                            letterSpacing: 1,
                        }}
                    >
                        0542 654 61 13
                    </span>
                </div>
            </div>
        ),
        { ...size }
    );
}
