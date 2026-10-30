"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();

  const menuItems = {
    id: [
      { name: "Beranda", href: "/" },
      { name: "Tentang Kami", href: "/tentang" },
      { name: "Produk", href: "/produk" },
      { name: "Layanan", href: "/#services" },
      { name: "Partner", href: "/#partners" },
      { name: "Klien", href: "/#clients" },
      { name: "Kontak", href: "/kontak" },
    ],
    en: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/tentang" },
      { name: "Products", href: "/produk" },
      { name: "Services", href: "/#services" },
      { name: "Partners", href: "/#partners" },
      { name: "Clients", href: "/#clients" },
      { name: "Contact", href: "/kontak" },
    ],
  };

  const currentMenu = lang === "id" ? menuItems.id : menuItems.en;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.includes("#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-3" onClick={scrollToTop}>
            <Link href="/" scroll={false} className="flex items-center gap-3">
              <Image
                src="/m/firmus1.png"
                alt="Logo Firmusindo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <h1 className="text-lg lg:text-2xl font-bold tracking-tight whitespace-nowrap">
                <span className="text-[#10a000]">FIRMUSINDO</span>
                <span className="text-yellow-500"> INFOTAMA</span>
              </h1>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-5 xl:space-x-6">
            {currentMenu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                scroll={item.href === "/" ? false : undefined}
                onClick={item.href === "/" ? scrollToTop : undefined}
                className={`font-medium transition-colors text-sm whitespace-nowrap ${
                  isActive(item.href)
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex items-center gap-1 ml-2 border-l border-gray-300 pl-4">
              <button
                onClick={() => setLang("id")}
                className={`px-2 py-1 text-xs font-semibold rounded transition-colors ${
                  lang === "id"
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 text-xs font-semibold rounded transition-colors ${
                  lang === "en"
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 text-2xl"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {currentMenu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                scroll={item.href === "/" ? false : undefined}
                onClick={() => {
                  if (item.href === "/") scrollToTop();
                  setIsOpen(false);
                }}
                className={`block font-medium py-2 border-b border-gray-50 ${
                  isActive(item.href)
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex items-center gap-3 pt-3 border-t border-gray-200 mt-2">
              <button
                onClick={() => setLang("id")}
                className={`px-3 py-1 text-sm font-semibold rounded transition-colors ${
                  lang === "id"
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 text-sm font-semibold rounded transition-colors ${
                  lang === "en"
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

