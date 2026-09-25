import React from 'react';
import { X, MessageCircle, Phone, MapPin, CheckCircle, Shield, Home, Wrench, Zap, Sun, ShieldCheck } from 'lucide-react';
import roofFramingImg from '../assets/images/roof_truss_framing_1790311530930.jpg';

interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PosterModal: React.FC<PosterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="poster-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-amber-400 my-auto animate-in fade-in duration-200">
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2.5 rounded-full bg-slate-900/80 hover:bg-amber-400 text-white hover:text-slate-950 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-lg"
          aria-label="Tutup Poster"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Poster Content Recreating image(2).png in SVG/HTML with Navy & Bold Yellow */}
        <div className="bg-[#0B2545] text-white flex flex-col font-sans select-none">
          {/* Top Yellow Ribbon Header */}
          <div className="bg-[#FACC15] text-[#0B2545] px-4 py-3 sm:py-4 text-center font-black tracking-wide text-lg sm:text-2xl shadow-md border-b-2 border-amber-500">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-6 h-6 text-[#0B2545] fill-current" />
              <h2 id="poster-title" className="uppercase font-black">
                Kontraktor Berdaftar CIDB Untuk Pembinaan
              </h2>
            </div>
          </div>

          {/* Subheader: CIDB Card & Bumiputera Badge */}
          <div className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#0B2545]/90 border-b border-amber-400/20">
            <div className="flex items-center gap-3 bg-white text-[#0B2545] px-4 py-2 rounded-xl shadow-sm border border-slate-200">
              <ShieldCheck className="w-7 h-7 text-[#133E87]" />
              <div className="leading-tight">
                <span className="block font-black text-lg tracking-wider text-[#0B2545]">CIDB</span>
                <span className="text-[10px] uppercase font-bold text-slate-500">Malaysia</span>
              </div>
            </div>

            <div className="bg-[#133E87] border border-amber-400/50 text-white px-4 py-2 rounded-xl text-center sm:text-right shadow-sm">
              <span className="block text-amber-300 font-extrabold text-sm sm:text-base">
                Kontraktor Bumiputera
              </span>
              <span className="text-xs text-slate-200 font-semibold">
                Berdaftar CIDB G1–G4
              </span>
            </div>
          </div>

          {/* Title Section */}
          <div className="py-4 text-center bg-gradient-to-b from-[#0B2545] to-[#133E87] px-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-wider uppercase">
              Perkhidmatan Kami
            </h3>
            <p className="text-amber-300 text-sm sm:text-base font-semibold">
              Kediaman &amp; Komersial Kecil
            </p>
          </div>

          {/* Service Buttons Grid */}
          <div className="px-4 sm:px-8 py-2">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2.5 bg-[#1E3A8A] hover:bg-[#1e40af] border border-blue-400/30 p-2.5 sm:p-3 rounded-xl text-sm sm:text-base font-bold text-white shadow-sm">
                <Sun className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>Cuci Panel Solar</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#1E3A8A] hover:bg-[#1e40af] border border-blue-400/30 p-2.5 sm:p-3 rounded-xl text-sm sm:text-base font-bold text-white shadow-sm">
                <Home className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>Bina Rumah</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#1E3A8A] hover:bg-[#1e40af] border border-blue-400/30 p-2.5 sm:p-3 rounded-xl text-sm sm:text-base font-bold text-white shadow-sm">
                <Wrench className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>Ubahsuai Rumah</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#1E3A8A] hover:bg-[#1e40af] border border-blue-400/30 p-2.5 sm:p-3 rounded-xl text-sm sm:text-base font-bold text-white shadow-sm">
                <Shield className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>Kerja Besi &amp; Gril</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#1E3A8A] hover:bg-[#1e40af] border border-blue-400/30 p-2.5 sm:p-3 rounded-xl text-sm sm:text-base font-bold text-white shadow-sm">
                <Zap className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>Wiring Elektrik</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#1E3A8A] hover:bg-[#1e40af] border border-blue-400/30 p-2.5 sm:p-3 rounded-xl text-sm sm:text-base font-bold text-white shadow-sm">
                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>Pagar &amp; Tembok</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#1E3A8A] hover:bg-[#1e40af] border border-blue-400/30 p-2.5 sm:p-3 rounded-xl text-sm sm:text-base font-bold text-white shadow-sm">
                <Wrench className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>Paip Air &amp; Sanitari</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#1E3A8A] hover:bg-[#1e40af] border border-blue-400/30 p-2.5 sm:p-3 rounded-xl text-sm sm:text-base font-bold text-white shadow-sm">
                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>Sistem Longkang</span>
              </div>
            </div>
          </div>

          {/* Construction Site Photo Preview */}
          <div className="px-4 sm:px-8 py-3">
            <div className="relative rounded-xl overflow-hidden border border-amber-400/40 shadow-inner h-36 sm:h-44">
              <img
                src={roofFramingImg}
                alt="Tapak pembinaan rumah Ruby Enterprise"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs text-amber-300 font-semibold bg-[#0B2545]/80 px-2 py-1 rounded">
                  Kerja Struktur &amp; Kekuda di Tapak
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Yellow Highlight Ribbon */}
          <div className="bg-[#FACC15] text-[#0B2545] py-2.5 px-4 text-center font-black tracking-wide text-base sm:text-lg border-y border-amber-600">
            <span>HARGA BERPATUTAN • SEBUTHARGA PERCUMA</span>
          </div>

          {/* Footer Call & Location Block */}
          <div className="bg-[#0B2545] p-4 sm:p-6 text-center space-y-3">
            <div className="space-y-1">
              <span className="text-xs sm:text-sm text-slate-300 uppercase tracking-widest font-semibold">
                Hubungi Kami Sekarang
              </span>
              <div className="text-2xl sm:text-4xl font-black text-amber-400 tracking-wider">
                011-6834 7638
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-slate-200">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="font-semibold">Batu Gajah | Ipoh | Perak</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-amber-200 pt-1">
              <span className="bg-white/10 px-2.5 py-1 rounded-md">Berlesen &amp; Berpengalaman</span>
              <span className="bg-white/10 px-2.5 py-1 rounded-md">Kerja Berkualiti</span>
              <span className="bg-white/10 px-2.5 py-1 rounded-md">Tepat Masa</span>
              <span className="bg-white/10 px-2.5 py-1 rounded-md">Amanah</span>
            </div>

            <p className="text-xs text-slate-300">
              Siap sedia untuk projek kediaman &amp; komersial kecil seluruh Perak, Kedah dan Pulau Pinang.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href="https://wa.me/601168347638?text=Salam%20Ruby%20Enterprise,%20saya%20melihat%20poster%20perkhidmatan%20dan%20ingin%20sebut%20harga%20percuma."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl min-h-[48px] shadow-lg transition-transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp Terus Untuk Sebut Harga</span>
              </a>

              <a
                href="tel:01168347638"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-5 rounded-xl min-h-[48px] border border-white/20"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Panggilan Telefon</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
