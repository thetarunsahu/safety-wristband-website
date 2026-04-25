import { Inter, Outfit } from "next/font/google";
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

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  metadataBase: new URL("https://smartsafetyband.vercel.app"), // Placeholder to be replaced with actual domain
  title: "Smart Safety Wristband — Safety. Reinvented.",
  description:
    "An intelligent IoT wearable that combines real-time health monitoring, GPS tracking, and instant SOS alerts to keep you safe. Built by Tarun Kumar Sahu.",
  keywords: [
    "smart wristband",
    "safety wearable",
    "IoT",
    "ESP32",
    "SOS alert",
    "GPS tracking",
    "health monitoring",
  ],
  authors: [{ name: "Tarun Kumar Sahu" }],
  openGraph: {
    title: "Smart Safety Wristband — Safety. Reinvented.",
    description:
      "An intelligent IoT wearable for real-time safety monitoring and emergency alerts.",
    type: "website",
    siteName: "Smart Safety Wristband",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Safety Wristband — Safety. Reinvented.",
    description:
      "An intelligent IoT wearable for real-time safety monitoring and emergency alerts.",
    creator: "@thetarunsahu",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
