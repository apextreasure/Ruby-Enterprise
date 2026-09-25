/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Lightbox } from './components/Lightbox';
import { PosterModal } from './components/PosterModal';
import { Utama } from './pages/Utama';
import { Servis } from './pages/Servis';
import { Portfolio } from './pages/Portfolio';
import { Hubungi } from './pages/Hubungi';
import { PORTFOLIO_DATA } from './data/portfolioData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('utama');
  const [posterOpen, setPosterOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Sync with URL hash for browser back/forward and direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (['utama', 'servis', 'portfolio', 'hubungi'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % PORTFOLIO_DATA.length);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + PORTFOLIO_DATA.length) % PORTFOLIO_DATA.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'utama' && (
          <Utama
            onNavigate={navigateTo}
            onOpenPoster={() => setPosterOpen(true)}
            onOpenLightbox={handleOpenLightbox}
          />
        )}
        {currentPage === 'servis' && <Servis />}
        {currentPage === 'portfolio' && (
          <Portfolio onOpenLightbox={handleOpenLightbox} />
        )}
        {currentPage === 'hubungi' && <Hubungi />}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} onOpenPoster={() => setPosterOpen(true)} />

      {/* Persistent Floating WhatsApp & Call Buttons */}
      <FloatingWhatsApp />

      {/* Expandable Promotional Poster Modal */}
      <PosterModal isOpen={posterOpen} onClose={() => setPosterOpen(false)} />

      {/* Accessible Fullscreen Lightbox for Portfolio Images */}
      <Lightbox
        items={PORTFOLIO_DATA}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
      />
    </div>
  );
}
