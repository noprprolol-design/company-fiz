"use client";

import Image from "next/image";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

function KontakContent() {
  const { lang } = useLanguage();
  const [headerSlide, setHeaderSlide] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    projectType: "",
    budget: "",
    timeline: "",
    date: "",
    message: "",
    additionalMessage: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | null; text: string }>({
    type: null,
    text: '',
  });

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

  const whatsappNumber = "6281316053333";

  // Auto-slide header background
  useEffect(() => {
    if (backgroundImages.length === 0) return;
    const interval = setInterval(() => {
      setHeaderSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (statusMessage.type) {
      setStatusMessage({ type: null, text: '' });
    }
  };

  // ============= HANDLE SUBMIT =============
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage({ type: null, text: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage({ type: 'success', text: 'Pesan berhasil dikirim! Kami akan segera merespons.' });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          service: '',
          projectType: '',
          budget: '',
          timeline: '',
          date: '',
          message: '',
          additionalMessage: '',
        });
      } else {
        setStatusMessage({ type: 'error', text: result.message || 'Gagal mengirim pesan. Silakan coba lagi.' });
      }
    } catch {
      setStatusMessage({ type: 'error', text: 'Terjadi kesalahan. Silakan coba lagi.' });
    } finally {
      setIsLoading(false);
    }
  };

  const translations = {
    id: {
      title: "Hubungi Kami",
      subtitle: "Solusi Teknologi Informasi yang kreatif dan terbaik",
      office: "Kantor",
      address: "The Boulevard Lt. 6 Unit B2",
      address2: "Jalan Fachrudin No. 5, Kampung Bali",
      address3: "Tanah Abang 10250, Jakarta, Indonesia",
      phone: "+62-21 2274-1521",
      email: "info@firmusindo.co.id",
      openMaps: "Buka di Google Maps",
      formTitle: "Konsultasi",
      formSubtitle: "Isi formulir di bawah ini, dan kami akan merespons via email atau WhatsApp",
      fullName: "Full Name",
      fullNamePlaceholder: "Masukkan nama lengkap Anda",
      emailLabel: "Active Email",
      emailPlaceholder: "Masukkan email aktif Anda",
      phoneNumber: "Nomor Telepon",
      phonePlaceholder: "Masukkan nomor telepon Anda",
      service: "Layanan yang Dibutuhkan",
      serviceOptions: {
        infrastructure: "IT Infrastructure",
        support: "24 x 7 Services Solution",
        security: "Security and Surveillance",
        software: "Software House & Micro Controller",
        continuity: "Business Continuity",
        smart: "Smart Building & Parking System",
        other: "Lainnya",
      },
      projectType: "Tipe Proyek",
      projectTypeOptions: {
        new: "Proyek Baru",
        redesign: "Redesign",
        maintenance: "Maintenance",
        migration: "Migrasi Sistem",
      },
      budget: "Estimasi Budget",
      budgetOptions: {
        small: "Rp 5 - 15 Juta",
        medium: "Rp 15 - 50 Juta",
        large: "Rp 50 - 100 Juta",
        enterprise: "Rp 100 Juta+",
        discuss: "Perlu Diskusi",
      },
      timeline: "Timeline Proyek",
      timelineOptions: {
        urgent: "Urgent (1-2 minggu)",
        normal: "Normal (1-3 bulan)",
        relaxed: "Flexible (3-6 bulan)",
        long: "Long Term (6+ bulan)",
      },
      subject: "Subjek",
      subjectPlaceholder: "Judul pesan Anda",
      date: "Tanggal",
      message: "Deskripsi Proyek (fitur, tujuan, dll.)",
      messagePlaceholder: "Jelaskan proyek Anda secara detail...",
      additionalMessage: "Pesan tambahan atau pertanyaan",
      additionalPlaceholder: "Tulis pesan tambahan...",
      required: "*",
      send: "Kirim Pesan",
      sending: "Mengirim...",
      or: "atau",
      whatsapp: "Kirim Permintaan melalui WhatsApp",
      selectOption: "Pilih...",
      businessHours: "Jam Operasional",
      monFri: "Senin - Jumat: 08.00 - 17.00 WIB",
      satSun: "Sabtu - Minggu: Tutup",
    },
    en: {
      title: "Contact Us",
      subtitle: "Creative and Best Information Technology Solutions",
      office: "Office",
      address: "The Boulevard 6th Floor Unit B2",
      address2: "Jalan Fachrudin No. 5, Kampung Bali",
      address3: "Tanah Abang 10250, Jakarta, Indonesia",
      phone: "+62-21 2274-1521",
      email: "info@firmusindo.co.id",
      openMaps: "Open in Google Maps",
      formTitle: "Consultation",
      formSubtitle: "Fill out the form below, and we will respond via email or WhatsApp",
      fullName: "Full Name",
      fullNamePlaceholder: "Enter your full name",
      emailLabel: "Active Email",
      emailPlaceholder: "Enter your active email",
      phoneNumber: "Phone Number",
      phonePlaceholder: "Enter your phone number",
      service: "Service Needed",
      serviceOptions: {
        infrastructure: "IT Infrastructure",
        support: "24 x 7 Services Solution",
        security: "Security and Surveillance",
        software: "Software House & Micro Controller",
        continuity: "Business Continuity",
        smart: "Smart Building & Parking System",
        other: "Other",
      },
      projectType: "Project Type",
      projectTypeOptions: {
        new: "New Project",
        redesign: "Redesign",
        maintenance: "Maintenance",
        migration: "System Migration",
      },
      budget: "Budget Estimate",
      budgetOptions: {
        small: "Rp 5 - 15 Million",
        medium: "Rp 15 - 50 Million",
        large: "Rp 50 - 100 Million",
        enterprise: "Rp 100 Million+",
        discuss: "Need Discussion",
      },
      timeline: "Project Timeline",
      timelineOptions: {
        urgent: "Urgent (1-2 weeks)",
        normal: "Normal (1-3 months)",
        relaxed: "Flexible (3-6 months)",
        long: "Long Term (6+ months)",
      },
      subject: "Subject",
      subjectPlaceholder: "Your message subject",
      date: "Date",
      message: "Project Description (features, goals, etc.)",
      messagePlaceholder: "Describe your project in detail...",
      additionalMessage: "Additional message or questions",
      additionalPlaceholder: "Write additional message...",
      required: "*",
      send: "Send Message",
      sending: "Sending...",
      or: "or",
      whatsapp: "Send Request via WhatsApp",
      selectOption: "Select...",
      businessHours: "Business Hours",
      monFri: "Monday - Friday: 08.00 - 17.00 WIB",
      satSun: "Saturday - Sunday: Closed",
    }
  };

  const t = translations[lang] || translations.id;

  const getWhatsAppMessage = () => {
    const serviceLabels: Record<string, string> = {
      infrastructure: t.serviceOptions.infrastructure,
      support: t.serviceOptions.support,
      security: t.serviceOptions.security,
      software: t.serviceOptions.software,
      continuity: t.serviceOptions.continuity,
      smart: t.serviceOptions.smart,
      other: t.serviceOptions.other,
    };

    const projectTypeLabels: Record<string, string> = {
      new: t.projectTypeOptions.new,
      redesign: t.projectTypeOptions.redesign,
      maintenance: t.projectTypeOptions.maintenance,
      migration: t.projectTypeOptions.migration,
    };

    const budgetLabels: Record<string, string> = {
      small: t.budgetOptions.small,
      medium: t.budgetOptions.medium,
      large: t.budgetOptions.large,
      enterprise: t.budgetOptions.enterprise,
      discuss: t.budgetOptions.discuss,
    };

    const timelineLabels: Record<string, string> = {
      urgent: t.timelineOptions.urgent,
      normal: t.timelineOptions.normal,
      relaxed: t.timelineOptions.relaxed,
      long: t.timelineOptions.long,
    };

    const message = `
*Request Project - FIRMUSINDO INFOTAMA*

*${t.fullName}:* ${formData.fullName || '-'}
*${t.emailLabel}:* ${formData.email || '-'}
*${t.phoneNumber}:* ${formData.phone || '-'}
*${t.service}:* ${serviceLabels[formData.service] || '-'}
*${t.projectType}:* ${projectTypeLabels[formData.projectType] || '-'}
*${t.budget}:* ${budgetLabels[formData.budget] || '-'}
*${t.timeline}:* ${timelineLabels[formData.timeline] || '-'}
*${t.subject}:* ${formData.subject || '-'}
*${t.message}:* ${formData.message || '-'}
*${t.additionalMessage}:* ${formData.additionalMessage || '-'}
*${t.date}:* ${formData.date || '-'}
    `.trim();

    return encodeURIComponent(message);
  };

  return (
    <>
      {/* HEADER BACKGROUND SLIDESHOW */}
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
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* KONTEN 2 KOLOM */}
      <section className="py-16 px-4 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* KOLOM KIRI: Info Kontak */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-5">{t.office}</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-600 text-lg mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {t.address}<br />
                      {t.address2}<br />
                      {t.address3}
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=The+Boulevard+Office+Jl.+H.+Fachrudin+No.5+Jakarta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-xs hover:underline mt-1 inline-block"
                    >
                      {t.openMaps}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-blue-600 text-lg flex-shrink-0" />
                  <div>
                    <a href="tel:+622122741521" className="text-gray-700 text-sm hover:text-blue-600 transition-colors font-medium">
                      {t.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-600 text-lg flex-shrink-0" />
                  <div>
                    <a href="mailto:info@firmusindo.co.id" className="text-gray-700 text-sm hover:text-blue-600 transition-colors font-medium">
                      {t.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {t.businessHours}
                </h3>
                <div className="space-y-1 text-gray-700 text-sm">
                  <p>{t.monFri}</p>
                  <p>{t.satSun}</p>
                </div>
              </div>
            </div>

            {/* KOLOM KANAN: Google Maps */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg border border-gray-100 h-[350px] relative">
              <iframe
                src="https://www.google.com/maps?q=The+Boulevard+Office,+Jl.+H.+Fachrudin+No.5,+Kampung+Bali,+Tanah+Abang,+Jakarta&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                title={lang === "id" ? "Peta lokasi kantor PT. Firmusindo Infotama" : "PT. Firmusindo Infotama office location map"}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=The+Boulevard+Office+Jl.+H.+Fachrudin+No.5+Jakarta"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/95 px-3 py-1.5 text-[10px] font-semibold text-gray-700 shadow-md backdrop-blur-sm transition-colors hover:bg-white hover:text-blue-600"
              >
                <FaMapMarkerAlt className="text-blue-600" />
                {t.openMaps}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FORM */}
      <section id="form-section" className="py-12 px-4 md:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {t.formTitle}
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              {t.formSubtitle}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
            {statusMessage.type && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${statusMessage.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {statusMessage.text}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold text-sm mb-1.5">
                    {t.fullName} <span className="text-red-500">{t.required}</span>
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50 hover:bg-white"
                      placeholder={t.fullNamePlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold text-sm mb-1.5">
                    {t.emailLabel} <span className="text-red-500">{t.required}</span>
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50 hover:bg-white"
                      placeholder={t.emailPlaceholder}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold text-sm mb-1.5">
                  {t.phoneNumber}
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50 hover:bg-white"
                    placeholder={t.phonePlaceholder}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold text-sm mb-1.5">
                    {t.service}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50 hover:bg-white"
                  >
                    <option value="">{t.selectOption}</option>
                    <option value="infrastructure">{t.serviceOptions.infrastructure}</option>
                    <option value="support">{t.serviceOptions.support}</option>
                    <option value="security">{t.serviceOptions.security}</option>
                    <option value="software">{t.serviceOptions.software}</option>
                    <option value="continuity">{t.serviceOptions.continuity}</option>
                    <option value="smart">{t.serviceOptions.smart}</option>
                    <option value="other">{t.serviceOptions.other}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold text-sm mb-1.5">
                    {t.projectType}
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50 hover:bg-white"
                  >
                    <option value="">{t.selectOption}</option>
                    <option value="new">{t.projectTypeOptions.new}</option>
                    <option value="redesign">{t.projectTypeOptions.redesign}</option>
                    <option value="maintenance">{t.projectTypeOptions.maintenance}</option>
                    <option value="migration">{t.projectTypeOptions.migration}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold text-sm mb-1.5">
                    {t.budget}
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50 hover:bg-white"
                  >
                    <option value="">{t.selectOption}</option>
                    <option value="small">{t.budgetOptions.small}</option>
                    <option value="medium">{t.budgetOptions.medium}</option>
                    <option value="large">{t.budgetOptions.large}</option>
                    <option value="enterprise">{t.budgetOptions.enterprise}</option>
                    <option value="discuss">{t.budgetOptions.discuss}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold text-sm mb-1.5">
                    {t.timeline}
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50 hover:bg-white"
                  >
                    <option value="">{t.selectOption}</option>
                    <option value="urgent">{t.timelineOptions.urgent}</option>
                    <option value="normal">{t.timelineOptions.normal}</option>
                    <option value="relaxed">{t.timelineOptions.relaxed}</option>
                    <option value="long">{t.timelineOptions.long}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold text-sm mb-1.5">
                  {t.subject}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50 hover:bg-white"
                  placeholder={t.subjectPlaceholder}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold text-sm mb-1.5">
                  {t.message} <span className="text-red-500">{t.required}</span>
                </label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50 hover:bg-white resize-y"
                  placeholder={t.messagePlaceholder}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold text-sm mb-1.5">
                  {t.date}
                </label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50 hover:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold text-sm mb-1.5">
                  {t.additionalMessage}
                </label>
                <textarea
                  name="additionalMessage"
                  value={formData.additionalMessage}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50 hover:bg-white resize-y"
                  placeholder={t.additionalPlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
              >
                <FaEnvelope className="text-sm" />
                {isLoading ? t.sending : t.send}
              </button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white text-gray-500 text-xs">{t.or}</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
              >
                <FaWhatsapp className="text-lg" />
                {t.whatsapp}
              </a>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-white">
      <KontakContent />
      <Footer />
    </main>
  );
}
