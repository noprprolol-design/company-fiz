"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { IconType } from "react-icons";
import {
  FaArrowRight,
  FaBoxOpen,
  FaBuilding,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaHeadset,
  FaLaptopCode,
  FaMicrochip,
  FaSearch,
  FaSortAmountDown,
  FaTimes,
  FaTools,
  FaWhatsapp,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import productsData from "@/data/products.json";

type Product = {
  id: string;
  name: string;
  slug: string;
  image: string;
  images: string[];
  price: number;
  priceWithTax: number;
  available: boolean;
  preOrder: boolean;
  labels: string[];
  unitSold: number;
  category: string;
  brand: string;
};

const products = productsData.items as Product[];
const PAGE_SIZE = 12;
const WHATSAPP_NUMBER = "6281316053333";
const currencyFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

const CATEGORY_META: { name: string; id: string; en: string; icon: IconType }[] = [
  { name: "Perangkat Lunak/Software", id: "Software", en: "Software", icon: FaLaptopCode },
  { name: "Peralatan Elektronik", id: "Peralatan Elektronik", en: "Electronic Equipment", icon: FaMicrochip },
  { name: "Peralatan Kantor", id: "Peralatan Kantor", en: "Office Equipment", icon: FaBuilding },
  { name: "Peralatan Pendidikan", id: "Peralatan Pendidikan", en: "Educational Equipment", icon: FaGraduationCap },
  { name: "Perkakas", id: "Perkakas", en: "Tools", icon: FaTools },
  { name: "Jasa Layanan", id: "Jasa Layanan", en: "Services", icon: FaHeadset },
];

const categoryCounts = products.reduce<Record<string, number>>((counts, product) => {
  counts[product.category] = (counts[product.category] || 0) + 1;
  return counts;
}, {});

const translations = {
  id: {
    titleTop: "PRODUK",
    titleBottom: "FIRMUSINDO",
    subtitle:
      "Temukan produk dan solusi teknologi PT. Firmusindo Infotama, mulai dari perangkat TI, software, peralatan kantor, hingga layanan teknologi.",
    statProducts: "Produk",
    statCategories: "Kategori",
    categoryTitle: "Kategori Produk",
    allProducts: "Semua Produk",
    searchPlaceholder: "Cari nama produk, brand, atau kategori...",
    sortLabel: "Urutkan",
    sortRelevance: "Paling Relevan",
    sortNameAsc: "Nama A-Z",
    sortPriceAsc: "Harga Terendah",
    sortPriceDesc: "Harga Tertinggi",
    results: "produk ditemukan",
    showing: "Menampilkan",
    of: "dari",
    detail: "Lihat Detail",
    whatsapp: "Tanya via WhatsApp",
    priceLabel: "Harga",
    contactPrice: "Hubungi Kami",
    available: "Tersedia",
    preOrder: "Pre-Order",
    reset: "Reset Filter",
    emptyTitle: "Produk tidak ditemukan",
    emptyDesc: "Coba gunakan kata kunci lain atau pilih kategori yang berbeda.",
    previous: "Sebelumnya",
    next: "Selanjutnya",
    page: "Halaman",
    helpTitle: "Butuh bantuan memilih produk?",
    helpDesc:
      "Tim kami siap membantu Anda memilih produk yang tepat, menyusun spesifikasi, hingga mendukung implementasi dan pemeliharaan.",
    helpCta: "Konsultasi dengan Tim Kami",
    supportTitle: "Butuh rekomendasi?",
    supportDesc: "Diskusikan kebutuhan Anda langsung dengan tim Firmusindo.",
    supportCta: "Hubungi Kami",
  },
  en: {
    titleTop: "FIRMUSINDO",
    titleBottom: "PRODUCTS",
    subtitle:
      "Discover PT. Firmusindo Infotama technology products and solutions, from IT hardware and software to office equipment and technology services.",
    statProducts: "Products",
    statCategories: "Categories",
    categoryTitle: "Product Categories",
    allProducts: "All Products",
    searchPlaceholder: "Search product name, brand, or category...",
    sortLabel: "Sort",
    sortRelevance: "Most Relevant",
    sortNameAsc: "Name A-Z",
    sortPriceAsc: "Lowest Price",
    sortPriceDesc: "Highest Price",
    results: "products found",
    showing: "Showing",
    of: "of",
    detail: "View Detail",
    whatsapp: "Ask via WhatsApp",
    priceLabel: "Price",
    contactPrice: "Contact Us",
    available: "Available",
    preOrder: "Pre-Order",
    reset: "Reset Filters",
    emptyTitle: "No products found",
    emptyDesc: "Try another keyword or choose a different category.",
    previous: "Previous",
    next: "Next",
    page: "Page",
    helpTitle: "Need help choosing a product?",
    helpDesc:
      "Our team can help you select the right product, prepare specifications, and support implementation and maintenance.",
    helpCta: "Consult with Our Team",
    supportTitle: "Need a recommendation?",
    supportDesc: "Discuss your requirements directly with the Firmusindo team.",
    supportCta: "Contact Us",
  },
};

const catalogUrl = (slug: string) =>
  `https://katalog.inaproc.id/pt-firmusindo-infotama/${slug}`;

const whatsappUrl = (productName: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Halo Firmusindo, saya ingin bertanya tentang produk ${productName}.`,
  )}`;

export default function ProdukPage() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const t = translations[lang];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const getCategoryLabel = (category: string) => {
    const meta = CATEGORY_META.find((item) => item.name === category);
    return meta ? meta[lang] : category;
  };

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const matchesSearch =
        !query ||
        [product.name, product.brand, product.category, product.slug].some((value) =>
          value.toLowerCase().includes(query),
        );

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "nameAsc") {
      return [...filtered].sort((a, b) => a.name.localeCompare(b.name, "id"));
    }

    if (sortBy === "priceAsc") {
      return [...filtered].sort((a, b) => {
        const first = a.price > 0 ? a.price : Number.MAX_SAFE_INTEGER;
        const second = b.price > 0 ? b.price : Number.MAX_SAFE_INTEGER;
        return first - second;
      });
    }

    if (sortBy === "priceDesc") {
      return [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [activeCategory, search, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const firstItem = filteredProducts.length === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1;
  const lastItem = Math.min(safePage * PAGE_SIZE, filteredProducts.length);
  const visibleProducts = filteredProducts.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  const pageNumbers = useMemo(() => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const pages: (number | string)[] = [1];
    const start = Math.max(2, safePage - 1);
    const end = Math.min(totalPages - 1, safePage + 1);

    if (start > 2) pages.push("start-ellipsis");
    for (let page = start; page <= end; page += 1) pages.push(page);
    if (end < totalPages - 1) pages.push("end-ellipsis");
    pages.push(totalPages);

    return pages;
  }, [safePage, totalPages]);

  const changePage = (page: number) => {
    setCurrentPage(page);
    document.getElementById("katalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const resetFilters = () => {
    setActiveCategory("all");
    setSearch("");
    setSortBy("relevance");
    setCurrentPage(1);
  };

  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#081a33] pb-16 pt-12 text-white">
        <div className="absolute inset-0 z-0 h-full w-full">
          {backgroundImages.map((img, index) => (
            <div
              key={img.id}
              className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="100vw"
                quality={90}
                preload={index === 0}
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 z-10 bg-black/50" />

        <div className="relative z-20 mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            <span className="text-white">Produk </span>
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Firmusindo</span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white md:text-xl">
            {t.subtitle}
          </p>
        </div>
      </section>

      <section id="katalog" className="scroll-mt-24 bg-[#f5f7fa] py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            <aside className="w-full flex-shrink-0 lg:w-64">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
                <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500">
                  {t.categoryTitle}
                </h2>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory("all");
                      setCurrentPage(1);
                    }}
                    aria-pressed={activeCategory === "all"}
                    className={`flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                      activeCategory === "all"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <FaBoxOpen className="flex-shrink-0" />
                      {t.allProducts}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] ${
                        activeCategory === "all"
                          ? "bg-white/20 text-white"
                          : "bg-white text-slate-500"
                      }`}
                    >
                      {products.length}
                    </span>
                  </button>

                  {CATEGORY_META.map((category) => {
                    const Icon = category.icon;
                    const isActive = activeCategory === category.name;

                    return (
                      <button
                        key={category.name}
                        type="button"
                        onClick={() => {
                          setActiveCategory(category.name);
                          setCurrentPage(1);
                        }}
                        aria-pressed={isActive}
                        className={`flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Icon className="flex-shrink-0" />
                          {category[lang]}
                        </span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-white text-slate-500"
                          }`}
                        >
                          {categoryCounts[category.name] || 0}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-xl bg-[#0b2545] p-4 text-white">
                  <p className="text-sm font-bold">{t.supportTitle}</p>
                  <p className="mt-1 text-xs leading-relaxed text-blue-100/75">
                    {t.supportDesc}
                  </p>
                  <Link
                    href="/kontak#form-section"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-blue-200 transition-colors hover:text-white"
                  >
                    {t.supportCta}
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>
            </aside>

            <div className="min-w-0 flex-1">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
                <div className="flex flex-col gap-3 md:flex-row md:items-center">
                  <div className="relative flex-1">
                    <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />
                    <input
                      type="search"
                      value={search}
                      onChange={(event) => {
                        setSearch(event.target.value);
                        setCurrentPage(1);
                      }}
                      placeholder={t.searchPlaceholder}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-10 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                    {search && (
                      <button
                        type="button"
                        onClick={() => {
                          setSearch("");
                          setCurrentPage(1);
                        }}
                        aria-label={t.reset}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                      >
                        <FaTimes className="text-xs" />
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaSortAmountDown className="hidden text-sm text-slate-400 sm:block" />
                    <select
                      value={sortBy}
                      onChange={(event) => {
                        setSortBy(event.target.value);
                        setCurrentPage(1);
                      }}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-medium text-slate-700 outline-none transition-colors focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 md:w-48"
                      aria-label={t.sortLabel}
                    >
                      <option value="relevance">{t.sortRelevance}</option>
                      <option value="nameAsc">{t.sortNameAsc}</option>
                      <option value="priceAsc">{t.sortPriceAsc}</option>
                      <option value="priceDesc">{t.sortPriceDesc}</option>
                    </select>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                  <p>
                    <span className="font-semibold text-slate-700">
                      {filteredProducts.length}
                    </span>{" "}
                    {t.results}
                  </p>
                  {(search || activeCategory !== "all") && (
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="inline-flex items-center gap-1 font-semibold text-blue-600 transition-colors hover:text-blue-700"
                    >
                      <FaTimes className="text-[10px]" />
                      {t.reset}
                    </button>
                  )}
                </div>
              </div>

              {visibleProducts.length > 0 ? (
                <>
                  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {visibleProducts.map((product, index) => {
                      const categoryLabel = getCategoryLabel(product.category);

                      return (
                        <article
                          key={product.id}
                          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                        >
                          <a
                            href={catalogUrl(product.slug)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block aspect-[4/3] overflow-hidden bg-white p-4"
                          >
                            {product.image ? (
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                                loading={index < 3 ? "eager" : "lazy"}
                                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center">
                                <FaBoxOpen className="text-5xl text-slate-200" />
                              </div>
                            )}
                            <span className="absolute left-3 top-3 rounded-full bg-slate-900/90 px-2.5 py-1 text-[10px] font-semibold text-white">
                              {categoryLabel}
                            </span>
                            {product.preOrder && (
                              <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-semibold text-amber-700">
                                <FaClock className="text-[9px]" />
                                {t.preOrder}
                              </span>
                            )}
                          </a>

                          <div className="flex flex-1 flex-col border-t border-slate-100 p-5">
                            {product.brand && (
                              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600">
                                {product.brand}
                              </p>
                            )}
                            <h3 className="line-clamp-2 min-h-[2.75rem] text-sm font-bold leading-snug text-slate-900">
                              <a
                                href={catalogUrl(product.slug)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-blue-700"
                              >
                                {product.name}
                              </a>
                            </h3>

                            <div className="mt-auto pt-5">
                              <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                                {t.priceLabel}
                              </p>
                              <p className="mt-0.5 text-lg font-bold text-slate-900">
                                {product.price > 0
                                  ? currencyFormatter.format(product.price)
                                  : t.contactPrice}
                              </p>

                              <div className="mt-3 flex items-center justify-between gap-2">
                                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
                                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                  {t.available}
                                </span>
                                <a
                                  href={catalogUrl(product.slug)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700"
                                >
                                  {t.detail}
                                  <FaExternalLinkAlt className="text-[9px]" />
                                </a>
                              </div>

                              <a
                                href={whatsappUrl(product.name)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 transition-colors hover:border-emerald-300 hover:bg-emerald-100"
                              >
                                <FaWhatsapp />
                                {t.whatsapp}
                              </a>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>

                  <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm sm:flex-row">
                    <p className="text-xs text-slate-500">
                      {t.showing}{" "}
                      <span className="font-semibold text-slate-700">
                        {firstItem}-{lastItem}
                      </span>{" "}
                      {t.of}{" "}
                      <span className="font-semibold text-slate-700">
                        {filteredProducts.length}
                      </span>
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => changePage(safePage - 1)}
                        disabled={safePage === 1}
                        className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                        aria-label={t.previous}
                      >
                        <FaChevronLeft className="text-[9px]" />
                        <span className="hidden sm:inline">{t.previous}</span>
                      </button>

                      {pageNumbers.map((page) =>
                        typeof page === "number" ? (
                          <button
                            key={page}
                            type="button"
                            onClick={() => changePage(page)}
                            aria-current={page === safePage ? "page" : undefined}
                            className={`h-8 min-w-8 rounded-lg px-2 text-xs font-semibold transition-colors ${
                              page === safePage
                                ? "bg-blue-600 text-white"
                                : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            {page}
                          </button>
                        ) : (
                          <span key={page} className="px-1 text-xs text-slate-400">
                            ...
                          </span>
                        ),
                      )}

                      <button
                        type="button"
                        onClick={() => changePage(safePage + 1)}
                        disabled={safePage === totalPages}
                        className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                        aria-label={t.next}
                      >
                        <span className="hidden sm:inline">{t.next}</span>
                        <FaChevronRight className="text-[9px]" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                    <FaSearch className="text-xl text-slate-400" />
                  </div>
                  <h2 className="mt-5 text-lg font-bold text-slate-900">
                    {t.emptyTitle}
                  </h2>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
                    {t.emptyDesc}
                  </p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                  >
                    <FaTimes className="text-xs" />
                    {t.reset}
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#0a1a2f] px-6 py-10 md:px-12 md:py-12">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
            <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full border border-white/5" />

            <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                  <FaHeadset />
                  <span>Firmusindo Infotama</span>
                </div>
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  {t.helpTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
                  {t.helpDesc}
                </p>
              </div>

              <Link
                href="/kontak#form-section"
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
              >
                {t.helpCta}
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
