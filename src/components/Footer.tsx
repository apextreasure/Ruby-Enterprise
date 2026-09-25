import React from 'react';
import { PageRoute } from '../types';
import { Logo } from './Logo';
import { Phone, MessageCircle, MapPin, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onOpenPoster?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPoster }) => {
  return (
    <footer className="bg-[#0B2545] text-slate-200 border-t border-amber-400/30">
      {/* Upper banner from poster */}
      <div className="bg-[#133E87] border-b border-amber-400/20 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 rounded-full bg-amber-400 animate-pulse" />
            <p className="font-bold text-base sm:text-lg text-white">
              HARGA BERPATUTAN • SEBUTHARGA PERCUMA
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm sm:text-base font-medium text-amber-200">
            <span>Kerja Berkualiti</span>
            <span aria-hidden="true">•</span>
            <span>Tepat Masa</span>
            <span aria-hidden="true">•</span>
            <span>Amanah</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Profile & Logo */}
          <div className="space-y-4">
            <Logo variant="light" size="md" />
            <p className="text-slate-300 text-base leading-relaxed">
              Ruby Enterprise merupakan kontraktor berdaftar yang komited menyediakan servis pembinaan kediaman berkualiti tinggi dan penyelenggaraan cuci panel solar profesional di utara Semenanjung Malaysia.
            </p>
            {/* Poster reference link */}
            {onOpenPoster && (
              <button
                onClick={onOpenPoster}
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4 focus:outline-none focus:ring-1 focus:ring-amber-400 rounded py-1"
              >
                <span>Lihat Poster Rasmi Perkhidmatan</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white tracking-wide uppercase border-b border-slate-700/80 pb-2">
              Navigasi Laman
            </h3>
            <ul className="space-y-2.5 text-base">
              <li>
                <button
                  onClick={() => {
                    onNavigate('utama');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-300 hover:text-amber-400 transition-colors py-1 block text-left"
                >
                  Laman Utama
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('servis');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-300 hover:text-amber-400 transition-colors py-1 block text-left"
                >
                  Semua Servis &amp; Cuci Solar
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('portfolio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-300 hover:text-amber-400 transition-colors py-1 block text-left"
                >
                  Portfolio Projek Sebenar
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('hubungi');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-300 hover:text-amber-400 transition-colors py-1 block text-left"
                >
                  Hubungi Kami &amp; Sebut Harga
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Kawasan Liputan */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white tracking-wide uppercase border-b border-slate-700/80 pb-2">
              Kawasan Liputan
            </h3>
            <ul className="space-y-2 text-base text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Perak (Pangkalan Utama)</strong>
                  <p className="text-sm text-slate-300">Batu Gajah, Ipoh, Taiping, Teluk Intan, Kampar, Manjung, dll.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Kedah</strong>
                  <p className="text-sm text-slate-300">Sungai Petani, Kulim, Alor Setar, Baling, Jitra, dll.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Pulau Pinang</strong>
                  <p className="text-sm text-slate-300">Seberang Perai, Butterworth, Bukit Mertajam &amp; Pulau.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Maklumat Perhubungan & Pendaftaran */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white tracking-wide uppercase border-b border-slate-700/80 pb-2">
              Hubungi Kami
            </h3>
            <div className="space-y-3 text-base text-slate-300">
              <a
                href="https://wa.me/601168347638"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 font-bold py-1 min-h-[40px]"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0 fill-current" />
                <span>011-6834 7638 (WhatsApp)</span>
              </a>

              <a
                href="tel:01168347638"
                className="flex items-center gap-3 text-slate-200 hover:text-white py-1 min-h-[40px]"
              >
                <Phone className="w-5 h-5 flex-shrink-0 text-amber-400" />
                <span>011-6834 7638 (Panggilan)</span>
              </a>

              <div className="flex items-start gap-3 py-1">
                <MapPin className="w-5 h-5 flex-shrink-0 text-amber-400 mt-1" />
                <span>Pangkalan Operasi: Batu Gajah | Ipoh | Perak</span>
              </div>

              {/* CIDB statement accurately backed by company poster */}
              <div className="mt-4 p-3 rounded-lg bg-white/5 border border-amber-400/20 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2 font-bold text-amber-400 mb-1">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                  <span>Kontraktor Bumiputera Berdaftar CIDB G1–G4</span>
                </div>
                <p>
                  Berlesen &amp; berpengalaman untuk kerja-kerja pembinaan kediaman dan komersial kecil.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Ruby Enterprise. Hak Cipta Terpelihara.</p>
          <p className="text-slate-400">
            Perkhidmatan Pembinaan Kediaman &amp; Servis Cuci Panel Solar
          </p>
        </div>
      </div>
    </footer>
  );
};
