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

export const metadata: Metadata = {
  title: "Francesco Fera",
  description:
    "Software developer and entrepreneur building digital products across Europe.",
  authors: [{ name: "Francesco Fera" }],
  openGraph: {
    title: "Francesco Fera",
    description:
      "Software developer and entrepreneur building digital products across Europe.",
    url: "https://francescofera.com",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Francesco Fera",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${ibmPlexMono.variable}`}>
        {children}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="e1189031-ee4f-4d36-9fae-ea3f58ed96b6"
        />
      </body>
    </html>
  );
}
