import type { Metadata } from "next";
import { Playfair_Display, Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Wearmill — Screen Printing & Embroidery | Custom Merch from $6.49/unit",
  description: "Custom t-shirts, embroidered hats, tote bags, and branded merch for businesses. Quote in 24 hours, ships in 5-7 days. Houston, TX.",
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
    title: "Wearmill — Screen Printing & Embroidery | Custom Merch from $6.49/unit",
    description: "Custom t-shirts, embroidered hats, and branded merch. Quote in 24 hours, ships in a week. Houston, TX.",
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
  founder: {
    "@type": "Person",
    name: "Rasheed Omar",
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

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Order Custom Printed Merch from Wearmill",
  description: "Order custom screen printed or embroidered merchandise for your business in three steps.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Send us your logo",
      text: "Tell us the product, quantity, and upload your logo or design. We'll send back an itemized quote within 24 hours.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Approve your proof",
      text: "Every order includes a free digital proof. You see exactly how your logo will look before we print a single shirt.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Get it delivered",
      text: "Printed, quality-checked, and shipped to your door in 5-7 business days. Orders over $500 ship free.",
    },
  ],
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Screen Printed T-Shirts",
  description: "Custom screen printed t-shirts for businesses. 1-color imprint on Gildan Heavy Cotton. Volume pricing from $6.49/unit at 576+ units.",
  brand: { "@type": "Brand", name: "Wearmill" },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "6.49",
    highPrice: "11.99",
    priceCurrency: "USD",
    offerCount: 5,
    availability: "https://schema.org/InStock",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rasheed Omar",
  jobTitle: "Founder",
  worksFor: { "@type": "Organization", name: "Wearmill" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Houston",
    addressRegion: "TX",
    addressCountry: "US",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
