"use client";

import Image from 'next/image';
import { useLanguage } from "@/context/LanguageContext";

const partners = [
  { 
    name: "RUCKUS", 
    sub: "an ARRIS company",
    logo: "/company/ruckus.jpg" 
  },
  { 
    name: "SOPHOS", 
    sub: "",
    logo: "/company/sophos.jpg" 
  },
  { 
    name: "UNIFI", 
    sub: "",
    logo: "/company/unify-logo.png"
  },
  { 
    name: "acunetix", 
    sub: "",
    logo: "/company/acunetix.jpg" 
  },
  { 
    name: "NetApp", 
    sub: "",
    logo: "/company/netaapp.jpg"
  },
  { 
    name: "vmware", 
    sub: "ENTERPRISE SOLUTION PROVIDER",
    logo: "/company/vmware.jpg" 
  },
  { 
    name: "Gigamon", 
    sub: "",
    logo: "/company/gigamon.jpg" 
  },
  { 
    name: "Cisco", 
    sub: "Registered Partner",
    logo: "/company/cisco.jpg" 
  },
  { 
    name: "Nirax", 
    sub: "1st RACK ENCLOSURES",
    logo: "/company/mirax.jpg" 
  },
  { 
    name: "EMC2", 
    sub: "VELOCITY PARTNER",
    logo: "/company/emc.jpg"
  },
  { 
    name: "AXIS", 
    sub: "AUTHORISED PARTNER",
    logo: "/company/axis.jpg" 
  },
  { 
    name: "Hewlett Packard Enterprise", 
    sub: "",
    logo: "/company/hewlett.jpg"
  },
  { 
    name: "Palo Alto", 
    sub: "NETWORKS",
    logo: "/company/paloalto.jpg" 
  },
  { 
    name: "zyrex", 
    sub: "the #1 Indonesian PC",
    logo: "/company/zyrex.jpg" 
  },
  { 
    name: "DOLL", 
    sub: "",
    logo: "/company/dell.jpg" 
  },
  { 
    name: "acer", 
    sub: "",
    logo: "/company/acer.jpg" 
  },
];

export default function Partners() {
  const { lang } = useLanguage();

  const content = {
    id: {
      title: "Partner Kami",
    },
    en: {
      title: "Our Partners",
    }
  };

  const t = content[lang];

  return (
    <section id="partners" className="py-16 px-4 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            {t.title}
          </h2>
          {/* GARIS BIRU DI BAWAH INI SUDAH SAYA HAPUS */}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col items-center justify-center min-h-[140px] md:min-h-[160px] cursor-pointer"
            >
              <div className="flex items-center justify-center w-full h-[60px] md:h-[70px] mb-2">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={70}
                  className="w-auto h-full max-w-full object-contain"
                />
              </div>
              
              <p className="font-bold text-gray-800 text-xs md:text-sm text-center leading-tight">
                {partner.name}
              </p>
              
              {partner.sub && (
                <p className="text-[8px] md:text-[10px] text-gray-400 mt-1 text-center leading-tight uppercase tracking-wider">
                  {partner.sub}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}