"use client"; // Wajib ditambahkan karena menggunakan Context

import Link from "next/link";
import Partners from "@/components/Partners"; 
import Clients from "@/components/Clients";
import QualityService from "@/components/QualityService";
import About from "@/components/About";
import LayananKami from "@/components/LayananKami";
import Hero from "@/components/Hero"; 
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/context/LanguageContext"; // <--- TAMBAHKAN IMPORT INI

export default function Home() {
  return (
    <LanguageProvider> {/* <--- BUNGKUS SELURUH KONTEN DI SINI */}
      <main className="min-h-screen bg-white">
        {/* NAVBAR BARU */}
        <Navbar />

        {/* HERO */}
        <Hero />

        {/* LAYANAN KAMI */}
        <LayananKami />

        {/* ABOUT */}
        <About />

        {/* QUALITY AND SERVICE */}
        <QualityService />

        {/* PARTNER KAMI */}
        <Partners />

        {/* KLIEN KAMI */}
        <Clients />

        {/* FOOTER / CONTACT */}
        <Footer />
      </main>
    </LanguageProvider>
  );
}