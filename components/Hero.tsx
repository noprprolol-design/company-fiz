"use client";

import { FaEnvelope, FaPhone } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();

  const content = {
    id: {
      subtitle: "Solusi Teknologi Informasi yang kreatif dan terbaik",
      desc: "Handal dan Profesional dalam pengembangan teknologi secara tepat guna dan bermanfaat untuk pusat bisnis dan kegiatan di seluruh wilayah Indonesia.",
    },
    en: {
      subtitle: "Creative and best Information Technology Solutions",
      desc: "Reliable and Professional in developing appropriate technology and beneficial for business centers and activities throughout Indonesia.",
    }
  };

  const t = content[lang];

  return (
    <section className="min-h-screen flex items-center relative text-white pt-20 pb-12 overflow-hidden">
      
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/firmus.mp4" type="video/mp4" />
        <div className="absolute inset-0 bg-orange-900/80 z-0" />
      </video>

      {/* OVERLAY GELAP */}
      <div className="absolute inset-0 bg-black/50 z-1"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtitle */}
        <p className="text-white text-sm md:text-base tracking-[0.2em] uppercase mb-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          {t.subtitle}
        </p>

        {/* Judul Utama */}
        <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
          <span className="block opacity-0 animate-[slideUp_0.8s_ease-out_0.1s_forwards] text-white">
            FIRMUSINDO
          </span>

          <div className="relative inline-block w-full">
            <span className="absolute inset-0 block opacity-0 animate-[slideUp_0.8s_ease-out_0.3s_forwards] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white bg-[length:200%_200%]">
              INFOTAMA
            </span>
            
            <span className="block opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white bg-[length:200%_200%] animate-shimmer">
              INFOTAMA
            </span>
          </div>
        </h1>

        {/* Deskripsi */}
        <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]">
          {t.desc}
        </p>

        {/* Kontak - Hanya Email & Telepon */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.7s_forwards]">
          <a
            href="mailto:info@firmusindo.co.id"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/30 text-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            <FaEnvelope className="text-white" />
            <span className="text-white">info@firmusindo.co.id</span>
          </a>

          <a
            href="tel:+622122741521"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/30 text-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            <FaPhone className="text-white" />
            <span className="text-white">+62-21 2274-1521</span>
          </a>
        </div>
      </div>
    </section>
  );
}