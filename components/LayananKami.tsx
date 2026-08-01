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

export default function LayananKami() {
  const { lang } = useLanguage();

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

  return (
    <section id="services" className="py-16 px-4 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            {t.title}
          </h2>
          {/* GARIS BIRU DI BAWAH INI SUDAH SAYA HAPUS */}
        </div>

        <p className="text-center text-gray-600 text-sm md:text-base mb-12 max-w-2xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col items-center justify-center min-h-[140px] md:min-h-[160px] cursor-pointer"
            >
              <div className="flex items-center justify-center w-full h-[60px] md:h-[70px] mb-2">
                <div className="text-5xl text-gray-900">
                  {item.icon}
                </div>
              </div>
              
              <p className="font-bold text-gray-800 text-xs md:text-sm text-center leading-tight">
                {item.title}
              </p>
              
              <p className="text-[11px] md:text-sm text-gray-500 mt-1 text-center leading-relaxed">
                {lang === "id" ? item.id_desc : item.en_desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}