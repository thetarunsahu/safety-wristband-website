import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://safety-wristband-website.vercel.app"),
  title: "Smart Safety Wristband — Safety. Reinvented.",
  description:
    "An intelligent IoT wearable combining GPS tracking, heart rate monitoring, and instant SOS alerts. Press once — your family knows where you are in under 2 seconds. Built on ESP32 by Tarun Kumar Sahu.",
  keywords:
    "smart wristband, safety wearable, IoT, ESP32, SOS alert, GPS tracking, women safety, fall detection, health monitoring, Tarun Kumar Sahu",
  authors: [
    { name: "Tarun Kumar Sahu", url: "https://twitter.com/thetarunsahu" },
  ],
  openGraph: {
    title: "Smart Safety Wristband — Safety. Reinvented.",
    description:
      "One press. GPS location sent to 3 emergency contacts in under 2 seconds.",
    type: "website",
    siteName: "Smart Safety Wristband",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@thetarunsahu",
    title: "Smart Safety Wristband — Safety. Reinvented.",
    description:
      "One press. GPS location sent to 3 emergency contacts in under 2 seconds.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Smart Safety Wristband",
              description:
                "IoT safety wristband with GPS tracking and SOS alerts",
              author: {
                "@type": "Person",
                name: "Tarun Kumar Sahu",
                sameAs: ["https://twitter.com/thetarunsahu"],
              },
              applicationCategory: "IoT / Wearable",
              operatingSystem: "Embedded (ESP32)",
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-black text-white antialiased font-[family-name:var(--font-inter)]">
        <noscript>
          <div style={{ padding: "2rem", textAlign: "center", color: "#fff" }}>
            <h1>Smart Safety Wristband — Safety. Reinvented.</h1>
            <p>
              Please enable JavaScript for the full experience. An intelligent
              IoT wearable combining GPS tracking, heart rate monitoring, and
              instant SOS alerts.
            </p>
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
