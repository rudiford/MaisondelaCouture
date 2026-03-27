import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://maisondelacouture.com";

export const metadata: Metadata = {
  metadataBase: new URL("https://maisondelacouture.com"),
  title: "Maison de la Couture — Your Closet Deserves Its Own Address",
  description:
    "The digital closet for luxury fashion. Catalog your collection. Track its value. Show it off.",
  keywords: [
    "luxury fashion",
    "digital closet",
    "wardrobe app",
    "fashion catalog",
    "haute couture",
    "luxury wardrobe",
  ],
  openGraph: {
    title: "Maison de la Couture",
    description:
      "The digital closet for luxury fashion. Catalog your collection. Track its value. Show it off.",
    type: "website",
    locale: "en_US",
    siteName: "Maison de la Couture",
    images: [
      {
        url: "/logo.png",
        width: 600,
        height: 450,
        alt: "Maison de la Couture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison de la Couture",
    description:
      "The digital closet for luxury fashion. Catalog your collection. Track its value. Show it off.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable}`}
    >
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-T4Y0G07XDV"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T4Y0G07XDV');
        `}
      </Script>
      <body>{children}</body>
    </html>
  );
}
