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
  description: "Custom apparel, hats, drinkware, and branded merch — screen printed and embroidered. Serving businesses from Houston, TX. T-shirts from $6.49/unit.",
  metadataBase: new URL("https://wearmill.com"),
  keywords: [
    "custom t-shirts Houston",
    "screen printing Houston TX",
    "embroidered hats",
    "promotional products",
    "branded merchandise",
    "custom apparel for business",
    "bulk t-shirt printing",
    "corporate merch",
  ],
  openGraph: {
    title: "Wearmill — Custom Printed Products for Your Business",
    description: "Screen printing, embroidery, and branded merch for businesses. T-shirts from $6.49/unit. Houston, TX.",
    siteName: "Wearmill",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wearmill — Custom Printed Products",
    description: "Screen printing, embroidery, branded merch. T-shirts from $6.49/unit. Houston, TX.",
  },
  alternates: {
    canonical: "https://wearmill.com",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Wearmill",
  description: "Custom printed apparel, hats, drinkware, and branded merchandise for businesses. Screen printing and embroidery services.",
  url: "https://wearmill.com",
  email: "hello@wearmill.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Houston",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  priceRange: "$$",
  knowsAbout: [
    "Screen Printing",
    "Embroidery",
    "Custom T-Shirts",
    "Promotional Products",
    "Branded Merchandise",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the minimum order quantity for custom printed products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most products start at 24 units. Some items like stadium cups and tote bags can go lower. Reach out with your project details and we'll find the right fit.",
      },
    },
    {
      "@type": "Question",
      name: "How long does shipping take for custom printed shirts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard orders ship in 5 to 7 business days after proof approval. Rush orders (under 7 days) are available for a 15% surcharge.",
      },
    },
    {
      "@type": "Question",
      name: "Can I see a proof before production starts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every order includes a free digital proof. We won't start printing or embroidering until you approve it.",
      },
    },
    {
      "@type": "Question",
      name: "Are there setup fees for screen printing or embroidery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Screen printing has a $25 setup per color, waived at 144+ units. Embroidery has a one-time $35 digitizing fee, waived at 96+ units. DTG printing has no setup fee.",
      },
    },
    {
      "@type": "Question",
      name: "What file formats do you accept for logos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vector files work best: .AI, .EPS, .SVG, or high-resolution .PDF. We can also work with high-res .PNG or .JPG files (300 DPI minimum).",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer free shipping on custom printed products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Orders over $500 ship free. For smaller orders, shipping is calculated based on weight and destination.",
      },
    },
    {
      "@type": "Question",
      name: "Can I mix sizes and colors in one order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can mix sizes and colors within the same product. The total unit count across all variations determines your price tier.",
      },
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
