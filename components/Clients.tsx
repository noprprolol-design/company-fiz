"use client";

import Image from 'next/image';
import { useLanguage } from "@/context/LanguageContext";

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: "BMKG", logo: "/klien/bmkg.jpg" },
  { name: "BNPB", logo: "/klien/bnpb.jpg" },
  { name: "ConocoPhillips", logo: "/klien/conoco.jpg" },
  { name: "DPD RI", logo: "/klien/dpd.jpg" },
  { name: "Fairmont Jakarta", logo: "/klien/fairmont.jpg" },
  { name: "Gasnet", logo: "/klien/gasnet.jpg" },
  { name: "Kementerian PPN/Bappenas", logo: "/klien/kementerian.jpg" },
  { name: "KPK", logo: "/klien/kpk.jpg" },
  { name: "Lintas Marga Sedaya", logo: "/klien/lintas.jpg" },
  { name: "Medco Energi", logo: "/klien/medco.jpg" },
  { name: "Millenium", logo: "/klien/millenium.jpg" },
  { name: "OJK", logo: "/klien/ojk.jpg" },
  { name: "Pertamina", logo: "/klien/pertamina.jpg" },
  { name: "Pertamina Hulu Sanga Sanga", logo: "/klien/pertaminahulu.jpg" },
  { name: "PetroChina", logo: "/klien/petro.jpg" },
  { name: "PGASCOM", logo: "/klien/pga.jpg" },
  { name: "PGN", logo: "/klien/pgn.jpg" },
  { name: "PPN", logo: "/klien/ppn.jpg" },
  { name: "Premier Oil", logo: "/klien/premieroil.jpg" },
  { name: "Pusat Jantung Nasional", logo: "/klien/pusatjantung.jpg" },
  { name: "Telkom Akses", logo: "/klien/telkom.jpg" },
  { name: "Telkomsel", logo: "/klien/telkomsel.jpg" },
  { name: "VICO Indonesia", logo: "/klien/vico.jpg" },
  { name: "Harapan Kita", logo: "/klien/harapankita.jpg" },
];

export default function Clients() {
  const { lang } = useLanguage();

  const content = {
    id: {
      title: "KLIEN KAMI",
      desc: "SEJAK BERDIRI HINGGA SAAT INI PT. FIRMUSINDO INFOTAMA TELAH MENDETEKSI DIRI DALAM MELAYANI CUSTOMER KAMI DENGAN KUALITAS PRIMA. DENGAN PENGALAMAN YANG KAMI MILIKI SEBAGAI PENYEDIA KEBUTUHAN IT DARI KLIEN-KLIEN DENGAN BERAGAM INDUSTRI BAIK PERUSAHAAN NASIONAL MAUPUN MULTI-NASIONAL, KAMI TELAH MEMBUKTIKAN BAHWA KAMI MEMANG PANTAS SEBAGAI PARTNER YANG DIPERHITUNGKAN.",
    },
    en: {
      title: "OUR CLIENTS",
      desc: "SINCE ITS ESTABLISHMENT UNTIL NOW, PT. FIRMUSINDO INFOTAMA HAS PROVEN ITSELF IN SERVING OUR CUSTOMERS WITH PRIME QUALITY. WITH THE EXPERIENCE WE HAVE AS AN IT SERVICE PROVIDER FROM CLIENTS WITH VARIOUS INDUSTRIES, BOTH NATIONAL AND MULTINATIONAL COMPANIES, WE HAVE PROVEN THAT WE ARE TRULY WORTHY AS A PARTNER TO BE RECKONED WITH.",
    }
  };

  const t = content[lang];

  return (
    <section id="clients" className="py-16 px-4 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          {t.title}
        </h2>
        <p className="text-center text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl mx-auto mb-12">
          {t.desc}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col items-center justify-center min-h-[140px] md:min-h-[160px] cursor-pointer"
            >
              <div className="flex items-center justify-center w-full h-[60px] md:h-[70px] mb-2">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={70}
                  className="w-auto h-full max-w-full object-contain"
                />
              </div>
              <p className="font-bold text-gray-800 text-xs md:text-sm text-center leading-tight">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}