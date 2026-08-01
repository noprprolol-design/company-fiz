"use client";

import { FaCheck, FaClock, FaFileAlt, FaHandHoldingHeart, FaHeadset } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function QualityService() {
  const { lang } = useLanguage();

  const content = {
    id: {
      title: "Kualitas Dan Pelayanan",
      subtitle: "Komitmen kami dalam memberikan layanan terbaik untuk kepuasan pelanggan",
      cards: [
        {
          title: "Jaminan Ketersediaan dan Keaslian Barang",
          desc: "Kami menjamin setiap produk yang kami tawarkan adalah produk asli dan bukan tiruan, berasal dari vendor/produsen resmi.",
        },
        {
          title: "Jaminan Ketepatan Waktu Pengiriman Produk",
          desc: "Dengan tenaga pengiriman yang berpengalaman, produk dikirim tepat pada waktunya.",
        },
        {
          title: "Jaminan Ketersediaan dan Keaslian Barang",
          desc: "Menjamin produk asli yang merupakan simbol kualitas prima untuk kepuasan pelanggan kami.",
        },
        {
          title: "Jaminan Purna Jual",
          desc: "PT Firmusindo Infotama tidak hanya memberikan layanan terhadap produk saat pembelian, tapi juga menjamin pelayanan secara prima setelah produk kami kirimkan ke konsumen kami.",
        },
        {
          title: "Jaminan Pemeliharaan Layanan",
          desc: "Petugas Customer Service PT. Firmusindo Infotama siap melayani konsumen kami setiap saat, baik melayani konsultasi ringan maupun menyangkut hal yang bersifat teknis.",
        },
      ],
    },
    en: {
      title: "Quality and Service",
      subtitle: "Our commitment to providing the best service for customer satisfaction",
      cards: [
        {
          title: "Guarantee of Availability and Authenticity of Goods",
          desc: "We guarantee that every product we offer is genuine and not counterfeit, sourced from official vendors/producers.",
        },
        {
          title: "Guarantee of On-Time Product Delivery",
          desc: "With experienced delivery personnel, products are delivered on time.",
        },
        {
          title: "Guarantee of Availability and Authenticity of Goods",
          desc: "Guaranteeing original products which are a symbol of prime quality for our customer satisfaction.",
        },
        {
          title: "After-Sales Guarantee",
          desc: "PT Firmusindo Infotama not only provides services during purchase but also guarantees prime service after the products are sent to our consumers.",
        },
        {
          title: "Service Maintenance Guarantee",
          desc: "PT Firmusindo Infotama Customer Service is ready to serve our consumers at any time, both serving light consultations and technical matters.",
        },
      ],
    },
  };

  const t = content[lang];
  const icons = [<FaCheck />, <FaClock />, <FaFileAlt />, <FaHandHoldingHeart />, <FaHeadset />];

  return (
    <section className="py-16 px-4 md:py-24 bg-gray-50">
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
          {t.cards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col items-center justify-center min-h-[140px] md:min-h-[160px] cursor-pointer"
            >
              <div className="flex items-center justify-center w-full h-[60px] md:h-[70px] mb-2">
                <div className="text-5xl text-gray-900">
                  {icons[index]}
                </div>
              </div>
              
              <p className="font-bold text-gray-800 text-xs md:text-sm text-center leading-tight">
                {item.title}
              </p>
              
              <p className="text-[11px] md:text-sm text-gray-500 mt-1 text-center leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}