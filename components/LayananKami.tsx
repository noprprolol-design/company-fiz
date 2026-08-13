"use client";

import { 
  FaServer, 
  FaPuzzlePiece, 
  FaVideo, 
  FaLaptopCode, 
  FaChartLine, 
  FaHome 
} from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function LayananKami() {
  const { lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null); // ✅ FIX
  const [offset, setOffset] = useState(0);

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
      title: "Layanan Kami",
      subtitle: "Kami menyediakan berbagai layanan teknologi informasi untuk mendukung bisnis Anda.",
    },
    en: {
      title: "Our Services",
      subtitle: "We provide various information technology services to support your business.",
    }
  };

  const t = content[lang];

  const services = [
    {
      icon: <FaServer />,
      title: "IT INFRASTRUCTURE",
      id_desc: "Solusi infrastruktur TI yang handal dan terintegrasi.",
      en_desc: "Reliable and integrated IT infrastructure solutions.",
    },
    {
      icon: <FaPuzzlePiece />,
      title: "24 x 7 SERVICES SOLUTION",
      id_desc: "Layanan support 24 jam penuh untuk kebutuhan bisnis Anda.",
      en_desc: "Full 24-hour support services for your business needs.",
    },
    {
      icon: <FaVideo />,
      title: "SECURITY AND SURVEILLANCE",
      id_desc: "Keamanan sistem dan pengawasan profesional.",
      en_desc: "Professional system security and surveillance.",
    },
    {
      icon: <FaLaptopCode />,
      title: "SOFTWARE HOUSE AND MICRO CONTROLLER",
      id_desc: "Pengembangan software dan mikrocontroller sesuai kebutuhan.",
      en_desc: "Software and microcontroller development according to needs.",
    },
    {
      icon: <FaChartLine />,
      title: "BUSINESS CONTINUITY",
      id_desc: "Menjamin kelangsungan bisnis dengan solusi continuity.",
      en_desc: "Ensuring business continuity with continuity solutions.",
    },
    {
      icon: <FaHome />,
      title: "SMART BUILDING AND PARKING SYSTEM",
      id_desc: "Sistem gedung pintar dan parkir terintegrasi.",
      en_desc: "Integrated smart building and parking system.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // ✅ FIX: Tambahin optional chaining
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visibleRatio = Math.max(0, Math.min(1, 
          (viewportHeight - rect.top) / (viewportHeight + rect.height)
        ));
        const parallaxOffset = visibleRatio * 30;
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative w-full min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 z-0 w-full h-full">
        {backgroundImages.map((img, index) => (
          <div
            key={img.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="100vw"
                quality={90}
                priority={index === 0}
                className="object-cover object-center"
                style={{
                  transform: `scale(${1 + offset * 0.001})`,
                  transition: 'transform 0.3s ease-out'
                }}
              />
            </div>
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4 tracking-tight">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </div>

        <p className="text-center text-gray-200 text-base md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-xl p-5 md:p-6 lg:p-8 border border-white/20 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center justify-center min-h-[160px] md:min-h-[180px] lg:min-h-[200px] cursor-pointer group"
            >
              <div className="flex items-center justify-center w-full h-[70px] md:h-[80px] lg:h-[90px] mb-3">
                <div className="text-5xl md:text-6xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              
              <p className="font-bold text-gray-800 text-xs md:text-sm lg:text-base text-center leading-tight">
                {item.title}
              </p>
              
              <p className="text-[10px] md:text-xs lg:text-sm text-gray-600 mt-2 text-center leading-relaxed">
                {lang === "id" ? item.id_desc : item.en_desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}