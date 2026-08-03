"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  const menuItems = {
    id: [
      { name: "Beranda", href: "/" },
      { name: "Tentang Kami", href: "/tentang" },
      { name: "Layanan", href: "/#services" },
      { name: "Partner", href: "/#partners" },
      { name: "Klien", href: "/#clients" },
      { name: "Kontak", href: "/kontak" },
    ],
    en: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/tentang" },
      { name: "Services", href: "/#services" },
      { name: "Partners", href: "/#partners" },
      { name: "Clients", href: "/#clients" },
      { name: "Contact", href: "/kontak" },
    ],
  };

  const currentMenu = lang === "id" ? menuItems.id : menuItems.en;

  // Fungsi untuk memaksa scroll ke atas (diubah ke instan)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth", // <- Dihapus agar langsung instan
    });
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LOGO - SCROLL KE ATAS */}
          <div className="flex-shrink-0 cursor-pointer" onClick={scrollToTop}>
            <Link href="/" scroll={false}>
              <h1 className="text-xl md:text-2xl font-bold text-blue-900 tracking-tight">
                FIRMUSINDO
                <span className="text-blue-600"> INFOTAMA</span>
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {currentMenu.map((item) => {
              // Jika item adalah Beranda/Home
              if (item.name === "Beranda" || item.name === "Home") {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    scroll={false}
                    onClick={scrollToTop}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                );
              }
              // Untuk item lainnya
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
                >
                  {item.name}
                </Link>
              );
            })}

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
            className="md:hidden text-gray-700 text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {currentMenu.map((item) => {
              if (item.name === "Beranda" || item.name === "Home") {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    scroll={false}
                    onClick={() => {
                      scrollToTop();
                      setIsOpen(false);
                    }}
                    className="block text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-50"
                  >
                    {item.name}
                  </Link>
                );
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}

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