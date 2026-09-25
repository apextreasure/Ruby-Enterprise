import React, { useEffect, useCallback } from 'react';
import { PortfolioItem } from '../types';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

interface LightboxProps {
  items: PortfolioItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  const whatsappMessage = `Salam Ruby Enterprise, saya berminat dengan projek '${currentItem.title}'. Bolehkah saya dapatkan maklumat lanjut dan sebut harga bagi kerja serupa?`;
  const whatsappUrl = `https://wa.me/601168347638?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-slate-950/95 backdrop-blur-md p-3 sm:p-6"
    >
      {/* Top Bar with counter, category and close button */}
      <div className="flex items-center justify-between text-white border-b border-slate-800 pb-3 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold px-3 py-1 rounded bg-amber-400 text-slate-950">
            Foto {currentIndex + 1} daripada {items.length}
          </span>
          <span className="hidden sm:inline text-sm text-slate-300 font-medium">
            {currentItem.category}
          </span>
        </div>

        <button
          onClick={onClose}
          className="flex items-center gap-2 text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label="Tutup Paparan Penuh"
        >
          <span className="text-sm font-semibold hidden sm:inline">Tutup</span>
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative flex-1 flex items-center justify-center py-4 px-2 max-w-6xl mx-auto w-full overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-slate-900/80 hover:bg-amber-400 text-white hover:text-slate-950 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-xl"
          aria-label="Foto Sebelumnya"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        {/* The Image itself - preserves natural aspect ratio without cropping */}
        <div className="relative max-h-[72vh] max-w-full flex items-center justify-center">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[72vh] max-w-full w-auto h-auto object-contain rounded-lg shadow-2xl border border-slate-800"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-slate-900/80 hover:bg-amber-400 text-white hover:text-slate-950 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-xl"
          aria-label="Foto Seterusnya"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>

      {/* Bottom Caption & WhatsApp Action */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-5 max-w-4xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              {currentItem.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {currentItem.visibleWorkDesc}
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm sm:text-base px-5 py-3 rounded-lg min-h-[48px] whitespace-nowrap shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Tanya Kerja Ini</span>
          </a>
        </div>
      </div>
    </div>
  );
};
