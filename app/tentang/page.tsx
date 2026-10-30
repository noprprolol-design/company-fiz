"use client";

import Image from "next/image";
import { FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

function TentangContent() {
  const { lang } = useLanguage();
  const [openAccordion, setOpenAccordion] = useState<string | null>("visi");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [headerSlide, setHeaderSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const translations = {
    id: {
      title: "Tentang Kami",
      headerSubtitle: "Kerja keras PT. Firmusindo Infotama selama kurang dari 2 tahun",
      companyLabel: "Tentang Perusahaan",
      companyDesc: "Kerja keras PT. Firmusindo Infotama selama kurang dari 2 tahun dapat dilihat dengan dipercayanya kami sebagai rekanan berbagai perusahaan terutama dengan perusahaan tambang minyak Oil Company, baik swasta murni maupun BUMN.",
      accordion: {
        visi: "VISI",
        misi: "MISI",
        motto: "Motto Perusahaan",
        mottoText: "AKURAT, BERKUALITAS, CEPAT",
        visiText: "Menumbuhkan kepercayaan dan kredibilitas pelanggan dengan memberikan solusi teknologi informasi yang kreatif dan terbaik.",
        misiText: "PT Firmusindo Infotama dibentuk untuk menjadi salah satu perusahaan handal, profesional dan berperan dalam pengembangan teknologi secara tepat guna serta bermanfaat untuk pusat-pusat bisnis dan kegiatan yang ada di Indonesia."
      },
      layanan: "Layanan Kami",
      galleryTitle: "Galeri Proyek",
    },
    en: {
      title: "About Us",
      headerSubtitle: "The hard work of PT. Firmusindo Infotama in less than 2 years",
      companyLabel: "About the Company",
      companyDesc: "The hard work of PT. Firmusindo Infotama in less than 2 years can be seen by our trust as partners of various companies, especially with oil mining companies, both private and state-owned.",
      accordion: {
        visi: "VISION",
        misi: "MISSION",
        motto: "Company Motto",
        mottoText: "ACCURATE, QUALITY, FAST",
        visiText: "To grow customer trust and credibility by providing creative and best information technology solutions.",
        misiText: "PT Firmusindo Infotama was formed to become a reliable, professional company and play a role in the development of appropriate technology and beneficial for business centers and activities in Indonesia."
      },
      layanan: "Our Services",
      galleryTitle: "Project Gallery",
    }
  };

  const t = translations[lang] || translations.id;

  const serviceImages = [
    { src: "/project/layanan1.jpg", alt: "Layanan 1" },
    { src: "/project/layanan2.jpg", alt: "Layanan 2" },
    { src: "/project/layanan3.jpg", alt: "Layanan 3" },
    { src: "/project/layanan4.jpg", alt: "Layanan 4" },
    { src: "/project/layanan5.jpg", alt: "Layanan 5" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === serviceImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? serviceImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(nextSlide, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isHovered]);

  useEffect(() => {
    if (backgroundImages.length === 0) return;
    const interval = setInterval(() => {
      setHeaderSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const projectImages = Array.from({ length: 16 }, (_, i) => ({
    src: `/m/${i + 1}.jpg`,
    alt: `Proyek ${i + 1}`,
  }));

  return (
    <>
      <section className="relative py-28 md:py-40 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full">
          {backgroundImages.map((img, index) => (
            <div
              key={img.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === headerSlide ? "opacity-100" : "opacity-0"
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

        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
            {t.title}
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light">
            {t.headerSubtitle}
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg cursor-pointer">
              <h2 className="text-xl font-bold text-center text-gray-900 mb-5">
                {t.companyLabel}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-sm text-justify leading-relaxed">
                  {t.companyDesc}
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg cursor-pointer h-[350px] relative group">
              <Image src="/project/lol.jpg" alt="Gambar Perusahaan" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-3 border border-gray-100">
            <div className="space-y-0">
              {[
                { id: "visi", label: t.accordion.visi },
                { id: "misi", label: t.accordion.misi },
                { id: "motto", label: t.accordion.motto },
              ].map((item) => (
                <div key={item.id} className="border-b border-gray-200 last:border-0">
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex justify-between items-center py-2 text-left group"
                  >
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {item.label}
                    </span>
                    <span className="text-gray-400 group-hover:text-blue-600 transition-colors text-xs">
                      {openAccordion === item.id ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </button>
                  {openAccordion === item.id && (
                    <div className="pb-2 text-gray-600 text-[10px] text-justify leading-relaxed animate-fade-in-up">
                      {item.id === "visi" && t.accordion.visiText}
                      {item.id === "misi" && t.accordion.misiText}
                      {item.id === "motto" && (
                        <div className="text-blue-600 font-bold text-xs">
                          {t.accordion.mottoText}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {t.layanan}
            </h2>
          </div>

          <div
            className="relative bg-white rounded-2xl shadow-lg p-4 md:p-6 border border-gray-100 overflow-hidden group mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative h-[260px] md:h-[340px] w-full overflow-hidden rounded-xl border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg cursor-pointer">
              {serviceImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 translate-x-0 scale-100 z-10"
                      : "opacity-0 translate-x-10 scale-95 z-0"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-blue-600 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl border border-gray-200"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-blue-600 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl border border-gray-200"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
              {serviceImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-blue-600 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {t.galleryTitle}
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {projectImages.map((img, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg cursor-pointer group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-white">
      <TentangContent />
      <Footer />
    </main>
  );
}
