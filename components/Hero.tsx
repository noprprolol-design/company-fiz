"use client";

import { FaEnvelope, FaPhone } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const { lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = [
    { id: 1, src: "/m/1.jpg", alt: "Background 1" },
    { id: 2, src: "/m/2.jpg", alt: "Background 2" },
    { id: 3, src: "/m/3.jpg", alt: "Background 3" },
    { id: 4, src: "/m/4.jpg", alt: "Background 4" },
    { id: 5, src: "/m/5.jpg", alt: "Background 5" },
    { id: 6, src: "/m/6.jpg", alt: "Background 6" },
    { id: 7, src: "/m/7.jpg", alt: "Background 7" },
    { id: 8, src: "/m/8.jpg", alt: "Background 8" },
  ];

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

  useEffect(() => {
    if (backgroundImages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id="home" className="min-h-screen flex items-center relative text-white pt-20 pb-12 overflow-hidden">

      {/* BACKGROUND SLIDESHOW */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {backgroundImages.map((img, index) => (
          <div
            key={img.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="100vw"
              quality={90}
              priority={index === 0}
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* OVERLAY GELAP */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

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

        {/* Kontak */}
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