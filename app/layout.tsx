import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const siteUrl = "https://francescofera.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Francesco Fera — Software Developer & Entrepreneur",
  description:
    "Software developer and entrepreneur building digital products — SaaS platforms, APIs, and web applications across Europe.",
  authors: [{ name: "Francesco Fera" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Francesco Fera — Software Developer & Entrepreneur",
    description:
      "Software developer and entrepreneur building digital products — SaaS platforms, APIs, and web applications across Europe.",
    url: siteUrl,
    siteName: "Francesco Fera",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Francesco Fera — Software Developer & Entrepreneur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Francesco Fera — Software Developer & Entrepreneur",
    description:
      "Software developer and entrepreneur building digital products — SaaS platforms, APIs, and web applications across Europe.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Francesco Fera",
  url: siteUrl,
  email: "me@francescofera.com",
  jobTitle: "Software Developer",
  description:
    "Software developer and entrepreneur building digital products across Europe.",
  sameAs: [
    "https://linkedin.com/in/francesco-fera-87097b232",
    "https://github.com/Francesco-Fera",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0d0d0d" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${cormorant.variable} ${ibmPlexMono.variable}`}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4D0KZ3Z8XS"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4D0KZ3Z8XS');
          `}
        </Script>
      </body>
    </html>
  );
}
