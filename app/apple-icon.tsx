import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(135deg, #1e3a8a, #1d4ed8)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 36,
                    fontFamily: "sans-serif",
                }}
            >
                <span
                    style={{ color: "white", fontSize: 96, fontWeight: 900 }}
                >
                    K
                </span>
            </div>
        ),
        { ...size }
    );
}
