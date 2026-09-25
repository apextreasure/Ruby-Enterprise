import React, { useState } from 'react';
import { PORTFOLIO_DATA, PORTFOLIO_CATEGORIES } from '../data/portfolioData';
import { Maximize2, MessageCircle, Info } from 'lucide-react';

interface PortfolioProps {
  onOpenLightbox: (index: number) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const filteredProjects =
    selectedCategory === 'Semua'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-12 lg:space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-[#0B2545] text-white py-14 lg:py-20 border-b border-amber-400/20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #FACC15 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/15 border border-amber-400/30 text-amber-300 text-sm font-bold">
            <span>Galeri Projek Sebenar</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Portfolio Kerja Tapak
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Paparan tujuh gambar pelaksanaan kerja di tapak pembinaan yang dikendalikan oleh Ruby Enterprise. Keterangan berpandukan kerja nyata yang dapat dilihat di tapak bina.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Notice on factual work descriptions */}
        <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-sm sm:text-base flex items-start gap-3">
          <Info className="w-5 h-5 text-[#133E87] flex-shrink-0 mt-0.5" />
          <p>
            Semua gambar di bawah menunjukkan proses sebenar di tapak pembinaan. Setiap kapsyen menghuraikan skop kerja yang jelas kelihatan tanpa sebarang rekaan maklumat atau nilai andaian.
          </p>
        </div>

        {/* Category Filters (Clean functional buttons, compliant with design guidelines) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white border border-slate-200 rounded-2xl shadow-sm">
          {PORTFOLIO_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all min-h-[44px] ${
                  isActive
                    ? 'bg-[#0B2545] text-amber-400 shadow-md'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Count */}
        <div className="text-sm font-semibold text-slate-500">
          Menunjukkan {filteredProjects.length} daripada {PORTFOLIO_DATA.length} projek tapak
        </div>

        {/* Gallery Grid (Spacious, preserving aspect ratio, accessible click-to-lightbox) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            // Find global index in PORTFOLIO_DATA for lightbox sync
            const globalIndex = PORTFOLIO_DATA.findIndex((p) => p.id === project.id);

            return (
              <article
                key={project.id}
                className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Box */}
                <div
                  onClick={() => onOpenLightbox(globalIndex)}
                  className="relative cursor-pointer overflow-hidden bg-slate-900 aspect-[4/3] flex items-center justify-center"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onOpenLightbox(globalIndex);
                    }
                  }}
                  aria-label={`Buka gambar bersaiz penuh untuk ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Gradient Overlay & Category Tag */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  <span className="absolute top-3 left-3 bg-[#0B2545]/90 text-amber-300 text-xs font-bold px-3 py-1 rounded-md backdrop-blur-sm">
                    {project.category}
                  </span>

                  {/* Expand Icon Button Badge */}
                  <div className="absolute bottom-3 right-3 bg-white/90 text-slate-900 p-2.5 rounded-xl shadow-lg opacity-90 group-hover:opacity-100 group-hover:bg-amber-400 transition-all flex items-center gap-1.5 text-xs font-bold">
                    <Maximize2 className="w-4 h-4" />
                    <span>Lihat Penuh</span>
                  </div>
                </div>

                {/* Content Area */}
                <div
                  onClick={() => onOpenLightbox(globalIndex)}
                  className="p-6 flex-1 flex flex-col justify-between space-y-3 cursor-pointer"
                >
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold text-[#0B2545] leading-snug group-hover:text-[#133E87] transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {project.visibleWorkDesc}
                    </p>
                  </div>

                  <div className="pt-2 text-xs font-semibold text-slate-400">
                    Klik untuk paparan penuh
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 rounded-2xl bg-[#0B2545] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-white">
              Berminat Menggunakan Servis Kami?
            </h3>
            <p className="text-slate-300 text-base">
              Hubungi 011-6834 7638 untuk perbincangan awal dan sebut harga percuma.
            </p>
          </div>

          <a
            href="https://wa.me/601168347638?text=Salam%20Ruby%20Enterprise,%20saya%20telah%20melihat%20portfolio%20anda%20dan%20ingin%20sebut%20harga."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-7 py-3.5 rounded-xl min-h-[48px] whitespace-nowrap shadow-lg"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WhatsApp Pasukan Projek</span>
          </a>
        </div>
      </div>
    </div>
  );
};
