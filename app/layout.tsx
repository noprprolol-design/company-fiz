import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// ============================================
// FONT CONFIG - Professional & Readable
// ============================================
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Font untuk heading (opsional, lebih elegan)
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

// ============================================
// METADATA - SEO & Social Media
// ============================================
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

// ============================================
// VIEWPORT - Responsive & Mobile Friendly
// ============================================
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a1628",
};

// ============================================
// ROOT LAYOUT
// ============================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        {/* Skip to main content - Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-blue-900 focus:p-4 focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>

        {/* Main Content */}
        <div id="main-content">{children}</div>

        {/* Structured Data - JSON-LD (SEO) */}
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
      </body>
    </html>
  );
}