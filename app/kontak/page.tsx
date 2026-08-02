"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaWhatsapp, FaCalendarAlt, FaGlobe } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

function KontakContent() {
  const { lang } = useLanguage();
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

  // NOMOR WHATSAPP ANDA
  const whatsappNumber = "6287826907056";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
      website: "firmusindo.co.id",
      openMaps: "📍 Buka di Google Maps",
      formTitle: "Request Project",
      formSubtitle: "Isi formulir di bawah ini, dan saya akan merespons via WhatsApp",
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
      date: "dd/mm/yyyy --:--",
      message: "Deskripsi Proyek (fitur, tujuan, dll.)",
      messagePlaceholder: "Jelaskan proyek Anda secara detail...",
      additionalMessage: "Pesan tambahan atau pertanyaan",
      additionalPlaceholder: "Tulis pesan tambahan...",
      required: "*",
      send: "Kirim Pesan",
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
      website: "firmusindo.co.id",
      openMaps: "📍 Open in Google Maps",
      formTitle: "Request Project",
      formSubtitle: "Fill out the form below, and I will respond via WhatsApp",
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
      date: "dd/mm/yyyy --:--",
      message: "Project Description (features, goals, etc.)",
      messagePlaceholder: "Describe your project in detail...",
      additionalMessage: "Additional message or questions",
      additionalPlaceholder: "Write additional message...",
      required: "*",
      send: "Send Message",
      or: "or",
      whatsapp: "Send Request via WhatsApp",
      selectOption: "Select...",
      businessHours: "Business Hours",
      monFri: "Monday - Friday: 08.00 - 17.00 WIB",
      satSun: "Saturday - Sunday: Closed",
    }
  };

  const t = translations[lang] || translations.id;

  // Buat pesan WhatsApp dengan data form
  const getWhatsAppMessage = () => {
    // Map value ke label yang sesuai dengan bahasa
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
      {/* HEADER VIDEO BACKGROUND */}
      <section className="relative py-28 md:py-40 flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/video/firmus.mp4" type="video/mp4" />
          <div className="absolute inset-0 bg-blue-900/80 z-0" />
        </video>

        <div className="absolute inset-0 bg-black/50 z-1"></div>

        <div className="relative z-10 text-center px-4">
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
                
                {/* ALAMAT */}
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-600 text-lg mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {t.address}<br />
                      {t.address2}<br />
                      {t.address3}
                    </p>
                    <a
                      href="https://www.google.com/maps/place/The+Boulevard+Office/@-6.1882955,106.8171483,17z/data=!4m6!3m5!1s0x2e69f5305e7c6f1b:0x1a0b2b3c4d5e6f7a!8m2!3d-6.1882955!4d106.8171483!16s%2Fg%2F11c2f5g7h1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-xs hover:underline mt-1 inline-block"
                    >
                      {t.openMaps}
                    </a>
                  </div>
                </div>
                
                {/* TELEPON */}
                <div className="flex items-center gap-3">
                  <FaPhone className="text-blue-600 text-lg flex-shrink-0" />
                  <div>
                    <a href="tel:+622122741521" className="text-gray-700 text-sm hover:text-blue-600 transition-colors font-medium">
                      {t.phone}
                    </a>
                  </div>
                </div>
                
                {/* EMAIL */}
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-600 text-lg flex-shrink-0" />
                  <div>
                    <a href="mailto:info@firmusindo.co.id" className="text-gray-700 text-sm hover:text-blue-600 transition-colors font-medium">
                      {t.email}
                    </a>
                  </div>
                </div>

                {/* WEBSITE */}
                <div className="flex items-center gap-3">
                  <FaGlobe className="text-blue-600 text-lg flex-shrink-0" />
                  <div>
                    <a href="https://firmusindo.co.id" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-sm hover:text-blue-600 transition-colors font-medium">
                      {t.website}
                    </a>
                  </div>
                </div>

              </div>

              {/* JAM OPERASIONAL */}
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
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg border border-gray-100 h-[350px] relative group">
              <a
                href="https://www.google.com/maps/place/The+Boulevard+Office/@-6.1882955,106.8171483,17z/data=!4m6!3m5!1s0x2e69f5305e7c6f1b:0x1a0b2b3c4d5e6f7a!8m2!3d-6.1882955!4d106.8171483!16s%2Fg%2F11c2f5g7h1"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.322116435304!2d106.8930059!3d-6.2225841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4b68c6384d9%3A0x3b523bc5aa8b0d7b!2sJl.%20H.%20Jaelani%20No.39B%2C%20Pd.%20Bambu%2C%20Kec.%20Duren%20Sawit%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013430!5e0!3m2!1sid!2sid!4v1723456789012!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </a>

              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md text-[10px] font-semibold text-gray-700 border border-gray-200 pointer-events-none group-hover:bg-white transition-colors">
                {t.openMaps}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION FORM - DENGAN PILIHAN & TANGGAL */}
      <section className="py-12 px-4 md:py-16 bg-gray-50">
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
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              
              {/* NAMA LENGKAP & EMAIL - 2 KOLOM */}
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

              {/* TELEPON */}
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

              {/* LAYANAN & TIPE PROYEK - 2 KOLOM */}
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

              {/* BUDGET & TIMELINE - 2 KOLOM */}
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

              {/* SUBJEK */}
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

              {/* DESKRIPSI PROYEK */}
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

              {/* TANGGAL */}
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

              {/* PESAN TAMBAHAN */}
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

              {/* TOMBOL KIRIM */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
              >
                <FaEnvelope className="text-sm" />
                {t.send}
              </button>

              {/* ATAU HUBUNGI VIA WHATSAPP */}
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
    <LanguageProvider>
      <main className="min-h-screen bg-white">
        <Navbar />
        <KontakContent />
        <Footer />
      </main>
    </LanguageProvider>
  );
}