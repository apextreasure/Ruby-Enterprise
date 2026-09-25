import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { Logo } from './Logo';
import { Menu, X, MessageCircle, Phone, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems: { id: PageRoute; label: string }[] = [
    { id: 'utama', label: 'Utama' },
    { id: 'servis', label: 'Servis' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'hubungi', label: 'Hubungi' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'glass-nav shadow-lg shadow-black/20 py-2.5'
            : 'bg-[#0B2545] border-b border-amber-400/25 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('utama')}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1 transition-opacity hover:opacity-95"
              aria-label="Kembali ke Laman Utama Ruby Enterprise"
            >
              <Logo variant="light" size="md" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Navigasi Utama">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 text-base lg:text-lg font-semibold rounded-md transition-all duration-200 relative ${
                      isActive
                        ? 'text-amber-400 font-bold bg-white/10'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-amber-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop CTA WhatsApp Button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://wa.me/601168347638?text=Salam%20Ruby%20Enterprise,%20saya%20ingin%20bertanyakan%20tentang%20sebut%20harga."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-[#0B2545] font-bold text-base lg:text-lg px-5 py-3 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5 min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400"
              >
                <MessageCircle className="w-5 h-5 text-[#0B2545] fill-current" />
                <span>WhatsApp Kami</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="https://wa.me/601168347638"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-white p-2.5 rounded-lg flex items-center justify-center min-h-[48px] min-w-[48px] focus:outline-none focus:ring-2 focus:ring-emerald-300"
                aria-label="WhatsApp Ruby Enterprise"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-100 hover:text-white p-2.5 rounded-lg bg-white/10 hover:bg-white/15 min-h-[48px] min-w-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Modal */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-slate-950/80 backdrop-blur-md flex flex-col">
          <div className="flex items-center justify-between p-4 bg-[#0B2545] border-b border-amber-400/30">
            <Logo variant="light" size="sm" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-white p-2 rounded-lg bg-white/10 min-h-[48px] min-w-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Tutup Menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <nav className="space-y-3" aria-label="Menu Navigasi Mudah Alih">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-5 py-4 text-xl font-bold rounded-xl transition-colors min-h-[52px] ${
                      isActive
                        ? 'bg-amber-400 text-[#0B2545] shadow-md'
                        : 'text-white hover:bg-white/10 bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-5 h-5 opacity-70" />
                  </button>
                );
              })}
            </nav>

            {/* Mobile Contact Actions */}
            <div className="pt-8 border-t border-slate-700/60 space-y-3">
              <a
                href="https://wa.me/601168347638?text=Salam%20Ruby%20Enterprise,%20saya%20ingin%20bertanyakan%20tentang%20sebut%20harga."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg py-4 px-6 rounded-xl min-h-[52px] shadow-lg shadow-emerald-950/40"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <span>WhatsApp: 011-6834 7638</span>
              </a>

              <a
                href="tel:01168347638"
                className="w-full flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg py-3.5 px-6 rounded-xl min-h-[48px] border border-white/20"
              >
                <Phone className="w-5 h-5" />
                <span>Panggilan Terus</span>
              </a>

              <p className="text-center text-sm text-slate-300 pt-2">
                Pangkalan: Batu Gajah &amp; Ipoh | Perak, Kedah, Pulau Pinang
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
