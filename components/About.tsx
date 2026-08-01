"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { lang } = useLanguage();

  const content = {
    id: {
      title: "Tentang Kami",
      desc: "Kerja keras PT. Firmusindo Infotama selama kurang dari 2 tahun dapat dilihat dengan dipercayanya kami sebagai rekanan berbagai perusahaan terutama dengan perusahaan tambang minyak Oil Company, baik swasta murni maupun BUMN.",
      vision: {
        title: "VISI",
        text: "Menumbuhkan kepercayaan dan kredibilitas pelanggan dengan memberikan solusi teknologi informasi yang kreatif dan terbaik.",
      },
      mission: {
        title: "MISI",
        text: "PT Firmusindo Infotama dibentuk untuk menjadi salah satu perusahaan handal, profesional dan berperan dalam pengembangan teknologi secara tepat guna serta bermanfaat untuk pusat-pusat bisnis dan kegiatan yang ada di Indonesia.",
      },
    },
    en: {
      title: "About Us",
      desc: "The hard work of PT. Firmusindo Infotama in less than 2 years can be seen by our trust as partners of various companies, especially with oil mining companies, both private and state-owned.",
      vision: {
        title: "VISION",
        text: "To grow customer trust and credibility by providing creative and best information technology solutions.",
      },
      mission: {
        title: "MISSION",
        text: "PT Firmusindo Infotama was formed to become a reliable, professional company and play a role in the development of appropriate technology and beneficial for business centers and activities in Indonesia.",
      },
    },
  };

  const t = content[lang];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            {t.title}
          </h2>
          {/* GARIS BIRU DI BAWAH INI SUDAH SAYA HAPUS */}
        </div>

        <p className="text-center text-gray-600 text-sm md:text-base max-w-4xl mx-auto mb-10 leading-relaxed">
          {t.desc}
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          
          <div
            className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col items-start justify-center min-h-[140px] md:min-h-[160px] cursor-pointer"
          >
            <h3 className="font-bold text-gray-900 text-xl md:text-2xl mb-2">
              {t.vision.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed text-left">
              {t.vision.text}
            </p>
          </div>

          <div
            className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col items-start justify-center min-h-[140px] md:min-h-[160px] cursor-pointer"
          >
            <h3 className="font-bold text-gray-900 text-xl md:text-2xl mb-2">
              {t.mission.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed text-left">
              {t.mission.text}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}