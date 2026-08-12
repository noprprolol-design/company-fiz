import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://firmusindo.co.id"),
  title: {
    default: "Firmusindo Infotama - Solusi Teknologi Informasi",
    template: "%s | Firmusindo Infotama",
  },
  description:
    "PT. Firmusindo Infotama - Perusahaan handal dan profesional dalam pengembangan teknologi informasi, IT infrastructure, security, dan software development di Indonesia.",
  keywords: [
    "Firmusindo Infotama",
    "IT Infrastructure",
    "Security and Surveillance",
    "Software House",
    "Smart Building",
    "Business Continuity",
    "Teknologi Informasi",
    "Solusi IT",
    "Perusahaan IT Indonesia",
  ],
  authors: [{ name: "PT. Firmusindo Infotama" }],
  creator: "PT. Firmusindo Infotama",
  publisher: "PT. Firmusindo Infotama",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Firmusindo Infotama - Solusi Teknologi Informasi",
    description:
      "Handal dan Profesional dalam pengembangan teknologi secara tepat guna untuk pusat bisnis dan kegiatan di seluruh Indonesia.",
    url: "https://firmusindo.co.id",
    siteName: "Firmusindo Infotama",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Firmusindo Infotama - Solusi Teknologi Informasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firmusindo Infotama - Solusi Teknologi Informasi",
    description:
      "Handal dan Profesional dalam pengembangan teknologi secara tepat guna untuk pusat bisnis dan kegiatan di seluruh Indonesia.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a1628",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <LanguageProvider>
          
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-blue-900 focus:p-4 focus:rounded-lg focus:shadow-lg"
          >
            Skip to main content
          </a>

          <Navbar />

          <div id="main-content" className="pt-20">
            {children}
          </div>

          {/* ================================================================ */}
          {/* FLOATING BUTTONS - MOBILE HORIZONTAL, DESKTOP VERTIKAL DI KANAN */}
          {/* ================================================================ */}
          <div className="fixed bottom-6 left-4 right-4 z-50 flex flex-row md:flex-col justify-center items-center gap-3 md:items-end md:right-8 md:left-auto md:bottom-8 md:max-w-none md:w-auto">
            
            {/* 1. Tombol Brief Proyek */}
            <a 
              href="/kontak#form-section"
              className="w-full md:w-auto flex-1 md:flex-initial flex items-center justify-center gap-2 py-3.5 px-4 md:px-6 md:py-3 bg-black text-white border border-gray-600 rounded-full shadow-xl hover:bg-gray-900 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="font-bold tracking-wide text-sm uppercase text-nowrap">Brief Proyek</span>
            </a>

            {/* 2. Tombol WhatsApp */}
            <a 
              href="https://wa.me/6281316053333" // GANTI NOMOR WA ANDA
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto flex-1 md:flex-initial flex items-center justify-center gap-2 py-3.5 px-4 md:px-6 md:py-3 bg-black text-white border border-gray-600 rounded-full shadow-xl hover:bg-gray-900 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span className="font-bold tracking-wide text-sm uppercase text-nowrap">WhatsApp</span>
            </a>

          </div>
          {/* ================================================================ */}

          {/* Structured Data - JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "PT. Firmusindo Infotama",
                description:
                  "Perusahaan handal dan profesional dalam pengembangan teknologi informasi di Indonesia.",
                url: "https://firmusindo.co.id",
                logo: "https://firmusindo.co.id/logo.png",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+62-21-2274-1521",
                  contactType: "sales",
                  email: "info@firmusindo.co.id",
                  availableLanguage: ["Indonesian", "English"],
                },
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "The Boulevard Lt. 6 Unit B2, Jalan Fachrudin No. 5",
                  addressLocality: "Kampung Bali, Tanah Abang",
                  addressRegion: "Jakarta",
                  postalCode: "10250",
                  addressCountry: "Indonesia",
                },
                sameAs: [
                  "https://www.linkedin.com/company/firmusindo-infotama",
                  "https://www.instagram.com/firmusindo",
                ],
              }),
            }}
          />
          
        </LanguageProvider>
      </body>
    </html>
  );
}