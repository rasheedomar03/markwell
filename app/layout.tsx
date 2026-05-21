import type { Metadata } from "next";
import { Playfair_Display, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wearmill — Custom Printed Products for Your Business",
  description: "Custom apparel, hats, drinkware, and branded merch — screen printed and embroidered. Better quality and pricing than you're paying now.",
  metadataBase: new URL("https://wearmill.com"),
  openGraph: {
    title: "Wearmill — Custom Printed Products for Your Business",
    description: "Custom apparel, hats, drinkware, and branded merch — screen printed and embroidered. Better quality and pricing.",
    siteName: "Wearmill",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wearmill — Custom Printed Products",
    description: "Screen printing, embroidery, branded merch. Better quality, better pricing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
