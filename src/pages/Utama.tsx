import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SERVICES_DATA, STATE_COVERAGE_DATA, WORK_PROCESS_STEPS, FAQ_DATA } from '../data/servicesData';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Sun,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  ChevronDown,
  Sparkles,
  MapPin,
  Clock,
  Award,
  Layers,
  FileText,
  Hammer,
} from 'lucide-react';

// Hero images: Distinct solar closeup action image & construction image
import solarCloseupImg from '../assets/images/solar_closeup_spray_1790319627127.jpg';
import newSolarHeroImg from '../assets/images/solar_clean_hero_1790318898175.jpg';
import constructionHeroImg from '../assets/images/roof_truss_framing_1790311530930.jpg';

interface UtamaProps {
  onNavigate: (page: PageRoute) => void;
  onOpenPoster: () => void;
  onOpenLightbox: (index: number) => void;
}

export const Utama: React.FC<UtamaProps> = ({ onNavigate, onOpenPoster, onOpenLightbox }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const featuredSolar = SERVICES_DATA.find((s) => s.id === 'cuci-solar');
  const previewProjects = PORTFOLIO_DATA.slice(0, 3);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. HERO SECTION WITH 2 DUAL IMAGES (CONSTRUCTION & SOLAR) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B2545] via-[#103366] to-[#0B2545] text-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-amber-400/20">
        {/* Subtle decorative grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #FACC15 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Headlines & Call to Actions (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* CIDB & Bumiputera Announcement Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-amber-400/15 border border-amber-400/40 text-amber-300 text-sm sm:text-base font-bold shadow-sm">
                <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>Kontraktor Berdaftar CIDB G1–G4 Bumiputera</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5.5xl font-black text-white leading-[1.15] tracking-tight">
                Kontraktor Binaan &amp;{' '}
                <span className="text-amber-400 underline decoration-amber-400/40 decoration-4 underline-offset-8">
                  Servis Cuci Solar
                </span>
              </h1>

              {/* Coverage Subtitle */}
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal">
                Perkhidmatan pembinaan rumah, ubah suai berkualiti dan pencucian panel solar profesional dengan liputan di{' '}
                <span className="font-bold text-white">seluruh Perak, Kedah dan Pulau Pinang</span>. Pangkalan operasi di{' '}
                <span className="text-amber-300 font-semibold">Batu Gajah &amp; Ipoh</span>.
              </p>

              {/* Brand Pillars */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm sm:text-base text-amber-200 font-medium pt-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Harga Berpatutan</span>
                </div>
                <span aria-hidden="true" className="text-slate-500">•</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Sebut Harga Percuma</span>
                </div>
                <span aria-hidden="true" className="text-slate-500">•</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Kerja Berkualiti &amp; Amanah</span>
                </div>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <button
                  onClick={() => {
                    onNavigate('hubungi');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-[#0B2545] font-extrabold text-lg px-8 py-4 rounded-xl shadow-lg shadow-amber-400/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[52px] focus:outline-none focus:ring-4 focus:ring-amber-300"
                >
                  <span>Dapatkan Sebut Harga</span>
                  <ArrowRight className="w-5 h-5 text-[#0B2545]" />
                </button>

                <button
                  onClick={() => {
                    onNavigate('portfolio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-7 py-4 rounded-xl border border-white/25 transition-all min-h-[52px] focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <span>Lihat Projek Sebenar</span>
                  <Layers className="w-5 h-5 opacity-80" />
                </button>
              </div>

              {/* Poster Trigger Link */}
              <div className="pt-1">
                <button
                  onClick={onOpenPoster}
                  className="inline-flex items-center gap-2 text-sm sm:text-base text-amber-300 hover:text-amber-200 underline underline-offset-4 focus:outline-none"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Lihat poster rasmi perkhidmatan &amp; lesen CIDB</span>
                </button>
              </div>
            </div>

            {/* Right Column: 2 HERO SHOWCASE IMAGES (CONSTRUCTION & SOLAR) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {/* Image 1: Pembinaan & Tapak (Construction) */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/40 bg-slate-900 group flex flex-col justify-between">
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={constructionHeroImg}
                    alt="Pembinaan rumah dan struktur kekuda bumbung oleh kontraktor Ruby Enterprise"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/20 to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#0B2545]/90 text-amber-300 text-xs font-bold px-2.5 py-1 rounded-md backdrop-blur-sm border border-amber-400/30 flex items-center gap-1.5">
                    <Hammer className="w-3.5 h-3.5 text-amber-400" />
                    <span>Pembinaan &amp; Tapak</span>
                  </div>
                </div>

                <div className="p-4 bg-[#0B2545] space-y-2 border-t border-amber-400/20">
                  <h3 className="font-bold text-white text-base leading-snug">
                    Bina Rumah, Kekuda &amp; Renovasi
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    Struktur kukuh, dinding bata, kekuda keluli ringan dan kemasan berkualiti berdaftar CIDB.
                  </p>
                  <button
                    onClick={() => {
                      onNavigate('portfolio');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 pt-1"
                  >
                    <span>Lihat Projek Tapak</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Image 2: Servis Cuci Panel Solar (Action closeup spray image) */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/40 bg-slate-900 group flex flex-col justify-between">
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={solarCloseupImg}
                    alt="Servis cuci panel solar profesional Ruby Enterprise menggunakan semburan air dan berus khas"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/20 to-transparent" />
                  <div className="absolute top-3 left-3 bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-1 rounded-md backdrop-blur-sm flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5 fill-current" />
                    <span>Cuci Panel Solar</span>
                  </div>
                </div>

                <div className="p-4 bg-[#0B2545] space-y-2 border-t border-amber-400/20">
                  <h3 className="font-bold text-amber-300 text-base leading-snug">
                    Pembersihan Fotovoltaik Selamat
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    Berus lembut teleskopik &amp; air bersih bertekanan rendah tanpa mencalarkan permukaan kaca.
                  </p>
                  <a
                    href="https://wa.me/601168347638?text=Salam%20Ruby%20Enterprise,%20saya%20ingin%20sebut%20harga%20cuci%20panel%20solar."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 pt-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Tempah Cuci Solar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RINGKASAN PROFIL SYARIKAT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#133E87]">
                Mengenai Ruby Enterprise
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2545] leading-tight">
                Rakan Binaan &amp; Penjagaan Solar Anda yang Amanah
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                Ruby Enterprise beroperasi dengan fokus memberikan mutu pembinaan dan pembaikan yang berkualiti untuk pemilik kediaman serta perniagaan kecil di utara Semenanjung. Dari pembinaan rumah baharu di atas tanah lot sendiri, renovasi dapur dan bumbung, sehinggalah servis penjagaan modul photovoltaic (solar panel), kami mengutamakan kekemasan kerja, keselamatan tapak dan ketepatan masa.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Award className="w-6 h-6 text-[#133E87] mb-2" />
                  <h3 className="font-bold text-[#0B2545] text-base">Berlesen CIDB</h3>
                  <p className="text-sm text-slate-600">Kontraktor Bumiputera G1-G4 berdaftar rasmi.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Clock className="w-6 h-6 text-[#133E87] mb-2" />
                  <h3 className="font-bold text-[#0B2545] text-base">Tepat Masa</h3>
                  <p className="text-sm text-slate-600">Jadual pelaksanaan kerja yang tersusun dan jelas.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-6 h-6 text-[#133E87] mb-2" />
                  <h3 className="font-bold text-[#0B2545] text-base">Pangkalan Tempatan</h3>
                  <p className="text-sm text-slate-600">Batu Gajah &amp; Ipoh sedia melawat ke lokasi anda.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#0B2545] text-white p-6 sm:p-8 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-amber-400">
                Hubungi Terus Pengurus Projek
              </h3>
              <p className="text-slate-300 text-base">
                Perlukan pandangan teknikal atau ingin dapatkan anggaran kos tanpa bayaran?
              </p>
              <div className="space-y-3 pt-2">
                <a
                  href="https://wa.me/601168347638"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-4 rounded-xl min-h-[48px] shadow-md transition-colors"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>WhatsApp: 011-6834 7638</span>
                </a>
                <a
                  href="tel:01168347638"
                  className="w-full flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl min-h-[48px] border border-white/20"
                >
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>Panggilan: 011-6834 7638</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROMINENT CUCI PANEL SOLAR FEATURE */}
      {featuredSolar && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#0B2545] via-[#133E87] to-[#0B2545] text-white p-8 sm:p-12 shadow-xl border-2 border-amber-400/40 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 text-[#0B2545] font-extrabold text-sm uppercase">
                  <Sun className="w-4 h-4 fill-current" />
                  <span>Servis Khusus Kami</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  Pembersihan Panel Solar Profesional
                </h2>

                <p className="text-slate-200 text-lg sm:text-xl leading-relaxed">
                  Menyingkirkan habuk tebal, kulat, lumut dan kotoran burung dari permukaan kaca photovoltaic. Penyelenggaraan berjadual mengekalkan kadar penyerapan cahaya matahari maksimum serta melindungi jaminan panel anda.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {featuredSolar.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-base text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  <a
                    href="https://wa.me/601168347638?text=Salam%20Ruby%20Enterprise,%20saya%20ingin%20dapatkan%20sebut%20harga%20cuci%20panel%20solar."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-[#0B2545] font-black text-lg px-8 py-4 rounded-xl min-h-[50px] shadow-lg shadow-amber-400/20 transition-transform active:scale-95"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Dapatkan Sebut Harga Cuci Solar</span>
                  </a>

                  <button
                    onClick={() => {
                      onNavigate('servis');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-2 text-white hover:text-amber-300 text-base font-bold py-3 px-5 underline underline-offset-4"
                  >
                    <span>Baca Skop Servis Penuh</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400 shadow-2xl bg-slate-900">
                  <img
                    src={newSolarHeroImg}
                    alt="Juruteknik Malaysia sedang mencuci panel solar dengan berus teleskopik dan pakaian keselamatan"
                    className="w-full h-80 sm:h-96 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-4 bg-slate-950/90 text-xs sm:text-sm text-slate-300">
                    <p className="font-semibold text-amber-400 mb-1">
                      Keselamatan Bumbung &amp; Kualiti Terpelihara
                    </p>
                    <p>
                      Peralatan berus mikrofiber/nilon lembut dan penggunaan abah-abah keselamatan penuh di tapak bumbung.
                    </p>
                    <span className="block mt-2 text-[11px] text-slate-400 italic">
                      * Ilustrasi perkhidmatan pembersihan solar.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. OVERVIEW OF CORE SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-base font-bold uppercase tracking-wider text-[#133E87]">
              Skop Perkhidmatan Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Penyelesaian Lengkap Rumah &amp; Premis
            </h2>
          </div>
          <button
            onClick={() => {
              onNavigate('servis');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-base font-bold text-[#133E87] hover:text-[#0B2545] underline underline-offset-4"
          >
            <span>Lihat Semua 9 Perkhidmatan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl p-6 transition-all duration-200 border flex flex-col justify-between ${
                service.isSolar
                  ? 'bg-[#0B2545] text-white border-amber-400/50 shadow-md'
                  : 'bg-white text-slate-900 border-slate-200 hover:border-amber-400/60 hover:shadow-md'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                      service.isSolar
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-slate-100 text-[#133E87]'
                    }`}
                  >
                    {service.tag || 'Servis Binaan'}
                  </span>
                </div>

                <h3
                  className={`text-xl font-bold ${
                    service.isSolar ? 'text-amber-400' : 'text-[#0B2545]'
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-base leading-relaxed ${
                    service.isSolar ? 'text-slate-200' : 'text-slate-600'
                  }`}
                >
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100/20 flex items-center justify-between">
                <a
                  href={`https://wa.me/601168347638?text=${encodeURIComponent(
                    `Salam Ruby Enterprise, saya ingin bertanyakan tentang servis: ${service.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-bold py-2 min-h-[44px] ${
                    service.isSolar
                      ? 'text-amber-300 hover:text-white'
                      : 'text-emerald-700 hover:text-emerald-900'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Sebut Harga via WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    onNavigate('servis');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-xs font-semibold underline underline-offset-4 py-2 min-h-[44px] ${
                    service.isSolar ? 'text-slate-300' : 'text-slate-500'
                  }`}
                >
                  Info Lanjut
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SELECTED REAL PROJECT SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-base font-bold uppercase tracking-wider text-[#133E87]">
              Galeri Kerja Nyata
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Projek Tapak Binaan Sebenar
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-1">
              Foto pelaksanaan pembinaan rumah, struktur kekuda bumbung, dan kerja tapak oleh pasukan kami.
            </p>
          </div>
          <button
            onClick={() => {
              onNavigate('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-base font-bold text-[#133E87] hover:text-[#0B2545] underline underline-offset-4"
          >
            <span>Buka Semua 7 Foto Projek</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onOpenLightbox(idx)}
              className="group cursor-pointer rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                <span className="absolute top-3 left-3 bg-[#0B2545]/90 text-amber-300 text-xs font-bold px-3 py-1 rounded-md backdrop-blur-sm">
                  {project.category}
                </span>
                <span className="absolute bottom-3 right-3 bg-white/90 text-slate-900 text-xs font-bold px-2.5 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Klik untuk Zoom
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-[#0B2545] group-hover:text-[#133E87] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                    {project.visibleWorkDesc}
                  </p>
                </div>
                <div className="pt-2 text-xs font-semibold text-slate-400">
                  Foto kerja tapak sebenar Ruby Enterprise
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. COVERAGE CARDS FOR ALL THREE STATES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-base font-bold uppercase tracking-wider text-[#133E87]">
            Liputan Operasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545]">
            Perak, Kedah &amp; Pulau Pinang
          </h2>
          <p className="text-slate-600 text-lg">
            Dengan pangkalan utama di Batu Gajah dan Ipoh, kami bersedia menggerakkan tenaga kerja dan jentera ke seluruh tiga negeri utara Semenanjung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATE_COVERAGE_DATA.map((stateItem) => (
            <div
              key={stateItem.state}
              className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between ${
                stateItem.isBaseState
                  ? 'bg-gradient-to-b from-[#0B2545] to-[#133E87] text-white border-amber-400/60 shadow-xl'
                  : 'bg-white text-slate-900 border-slate-200 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-2xl font-black ${
                      stateItem.isBaseState ? 'text-amber-400' : 'text-[#0B2545]'
                    }`}
                  >
                    Negeri {stateItem.state}
                  </h3>
                  {stateItem.isBaseState && (
                    <span className="bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-1 rounded">
                      Pangkalan Utama
                    </span>
                  )}
                </div>

                <p
                  className={`text-sm sm:text-base font-medium ${
                    stateItem.isBaseState ? 'text-slate-200' : 'text-slate-600'
                  }`}
                >
                  {stateItem.tagline}
                </p>

                <div className="pt-2">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider block mb-2 ${
                      stateItem.isBaseState ? 'text-amber-300' : 'text-[#133E87]'
                    }`}
                  >
                    Daerah &amp; Kawasan Diliputi:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {stateItem.districts.map((district, dIdx) => (
                      <span
                        key={dIdx}
                        className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                          stateItem.isBaseState
                            ? 'bg-white/15 text-white'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {district}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/20">
                <a
                  href={`https://wa.me/601168347638?text=${encodeURIComponent(
                    `Salam Ruby Enterprise, saya ingin bertanya tentang servis untuk lokasi di negeri ${stateItem.state}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm sm:text-base min-h-[48px] ${
                    stateItem.isBaseState
                      ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md'
                      : 'bg-[#0B2545] hover:bg-[#133E87] text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Semak Servis di {stateItem.state}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. ENQUIRY PROCESS (4 STEPS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-base font-bold uppercase tracking-wider text-[#133E87]">
              Langkah Mudah
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545]">
              Proses Urusan Kerja Kami
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Dari perbualan awal sehingga kerja disiapkan mengikut kepuasan anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORK_PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-3xl font-black text-amber-500 font-mono">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-[#0B2545]">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-base font-bold uppercase tracking-wider text-[#133E87]">
            Soalan Lazim
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545]">
            Pertanyaan yang Kerap Diajukan
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Jawapan jelas mengenai perkhidmatan, pendaftaran CIDB dan sebut harga.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 min-h-[56px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-bold text-[#0B2545] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#133E87] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-amber-500' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-slate-700 text-base sm:text-lg leading-relaxed border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. FINAL WHATSAPP CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0B2545] via-[#103366] to-[#0B2545] text-white p-8 sm:p-14 text-center space-y-6 shadow-2xl border-2 border-amber-400">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Sedia Membantu Anda</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white max-w-3xl mx-auto leading-tight">
            Ingin Mulakan Projek Binaan atau Cuci Panel Solar?
          </h2>

          <p className="text-slate-200 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Dapatkan nasihat awal dan sebut harga percuma hari ini. Pasukan Ruby Enterprise sedia melayani anda di Perak, Kedah dan Pulau Pinang.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/601168347638?text=Salam%20Ruby%20Enterprise,%20saya%20ingin%20dapatkan%20sebut%20harga%20percuma."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-lg sm:text-xl px-9 py-4 rounded-xl min-h-[52px] shadow-xl shadow-emerald-950/40 transition-transform active:scale-95"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>WhatsApp: 011-6834 7638</span>
            </a>

            <button
              onClick={() => {
                onNavigate('hubungi');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl min-h-[52px] border border-white/20"
            >
              <span>Isi Borang Pertanyaan</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="pt-2 text-sm text-slate-300">
            Pangkalan Operasi: Batu Gajah &amp; Ipoh, Perak • Berdaftar CIDB G1–G4 Bumiputera
          </div>
        </div>
      </section>
    </div>
  );
};
