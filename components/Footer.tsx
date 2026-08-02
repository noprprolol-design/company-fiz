"use client";

import { FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  const translations = {
    id: {
      company: "Firmusindo Infotama",
      tagline: "Solusi IT handal dan profesional untuk berbagai bisnis di Indonesia.",
      contact: "Hubungi Kami",
      email: "info@firmusindo.co.id",
      phone: "+62-21 2274-1521",
      website: "firmusindo.co.id",
      services: "Layanan",
      service1: "IT INFRASTRUCTURE",
      service2: "24 x 7 SERVICES SOLUTION",
      service3: "SECURITY AND SURVEILLANCE",
      service4: "SOFTWARE HOUSE",
      service5: "BUSINESS CONTINUITY",
      service6: "SMART BUILDING",
      rights: "Hak Cipta Dilindungi.",
    },
    en: {
      company: "Firmusindo Infotama",
      tagline: "Reliable and professional IT solutions for various businesses in Indonesia.",
      contact: "Contact Us",
      email: "info@firmusindo.co.id",
      phone: "+62-21 2274-1521",
      website: "firmusindo.co.id",
      services: "Services",
      service1: "IT INFRASTRUCTURE",
      service2: "24 x 7 SERVICES SOLUTION",
      service3: "SECURITY AND SURVEILLANCE",
      service4: "SOFTWARE HOUSE",
      service5: "BUSINESS CONTINUITY",
      service6: "SMART BUILDING",
      rights: "All Rights Reserved.",
    }
  };

  const t = translations[lang] || translations.id;

  return (
    <footer className="bg-[#0a1a2f] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12 items-start">
          
          {/* KOLOM 1 */}
          <div className="flex-1 flex flex-col items-start text-left">
            <h3 className="text-lg font-bold text-white mb-3">{t.company}</h3>
            <p className="text-white text-sm leading-relaxed">
              {t.tagline}
            </p>
          </div>

          {/* KOLOM 2 */}
          <div className="flex-1 flex flex-col items-start text-left">
            <h3 className="text-lg font-bold text-white mb-3">{t.contact}</h3>
            <div className="space-y-2 text-sm text-white">
              
              {/* Email - Bisa Diklik */}
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-white text-lg" />
                <a 
                  href="mailto:info@firmusindo.co.id" 
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.email}
                </a>
              </p>

              {/* Telepon - Bisa Diklik */}
              <p className="flex items-center gap-2">
                <FaPhone className="text-white text-lg" />
                <a 
                  href="tel:+622122741521" 
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.phone}
                </a>
              </p>

              {/* Website - Bisa Diklik */}
              <p className="flex items-center gap-2">
                <FaGlobe className="text-white text-lg" />
                <a 
                  href="https://firmusindo.co.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.website}
                </a>
              </p>

            </div>
          </div>

          {/* KOLOM 3 */}
          <div className="flex-1 flex flex-col items-start text-left">
            <h3 className="text-lg font-bold text-white mb-3">{t.services}</h3>
            <ul className="space-y-1 text-sm text-white">
              <li>{t.service1}</li>
              <li>{t.service2}</li>
              <li>{t.service3}</li>
              <li>{t.service4}</li>
              <li>{t.service5}</li>
              <li>{t.service6}</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} PT. Firmusindo Infotama. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}