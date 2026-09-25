import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="Tindakan Pantas WhatsApp dan Panggilan" className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Tooltip hint on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#0B2545] text-white text-sm font-medium py-2 px-3.5 rounded-xl shadow-xl border border-amber-400/40 animate-bounce duration-1000">
          <span>Tanya Sebut Harga Percuma</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 rounded focus:outline-none"
            aria-label="Tutup pemberitahuan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-2">
        {/* Click to Call quick pill for mobile */}
        <a
          href="tel:01168347638"
          className="flex sm:hidden items-center justify-center w-12 h-12 rounded-full bg-[#0B2545] text-amber-400 border border-amber-400/50 shadow-lg active:scale-95 transition-transform"
          aria-label="Buat panggilan ke 011-6834 7638"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp primary floating button */}
        <a
          href="https://wa.me/601168347638?text=Salam%20Ruby%20Enterprise,%20saya%20ingin%20bertanyakan%20sebut%20harga%20percuma."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 sm:px-5 rounded-full shadow-2xl shadow-emerald-950/40 hover:shadow-emerald-500/30 transition-all transform hover:scale-105 active:scale-95 min-h-[52px] border-2 border-white/30 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          aria-label="WhatsApp Ruby Enterprise: 011-6834 7638"
        >
          <MessageCircle className="w-6 h-6 fill-current flex-shrink-0" />
          <span className="hidden sm:inline text-base font-bold">WhatsApp: 011-6834 7638</span>
          <span className="sm:hidden text-sm font-bold">WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
