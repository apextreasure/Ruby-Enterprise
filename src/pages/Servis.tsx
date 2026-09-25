import React from 'react';
import { SERVICES_DATA, buildWhatsAppLink } from '../data/servicesData';
import {
  Sun,
  CheckCircle2,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import solarHeroImg from '../assets/images/solar_clean_malay_1790311516702.jpg';

export const Servis: React.FC = () => {
  const solarService = SERVICES_DATA.find((s) => s.id === 'cuci-solar')!;
  const constructionServices = SERVICES_DATA.filter((s) => s.id !== 'cuci-solar');

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
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
            <span>Perkhidmatan Pembinaan &amp; Cuci Solar</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Perkhidmatan Kami
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Dari penyelenggaraan panel solar berkala sehingga pembinaan dan renovasi kediaman menyeluruh. Dilaksanakan dengan amanah, berkualiti, dan mengikut peraturan keselamatan.
          </p>
        </div>
      </section>

      {/* 1. FEATURED CUCI PANEL SOLAR TOP SECTION */}
      <section id="solar" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0B2545] via-[#133E87] to-[#0B2545] text-white p-6 sm:p-10 lg:p-14 shadow-2xl border-2 border-amber-400">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-sm uppercase">
                <Sun className="w-5 h-5 fill-current" />
                <span>Servis Pilihan Utama</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                {solarService.title}
              </h2>

              <p className="text-amber-200 font-semibold text-lg">
                {solarService.shortDesc}
              </p>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                {solarService.fullDesc}
              </p>

              {/* Scope of Work */}
              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-bold text-amber-300 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-400" />
                  <span>Skop Kerja Cuci Solar:</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm sm:text-base text-slate-200">
                  {solarService.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Factual Solar Maintenance Note (avoiding unsupported performance claims) */}
              <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm text-slate-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Penjagaan Berkala Bertanggungjawab</strong>
                  Pembersihan panel solar menyingkirkan lapisan halangan kotoran persekitaran (habuk, kotoran haiwan, daun kering) untuk membolehkan penyerapan cahaya matahari berjalan optimum mengikut kapasiti sistem sedia ada anda.
                </div>
              </div>

              {/* Direct Enquiry Button */}
              <div className="pt-2">
                <a
                  href={buildWhatsAppLink('Cuci Panel Solar', 'Perak / Kedah / Pulau Pinang')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-lg px-8 py-4 rounded-xl shadow-xl shadow-amber-400/20 min-h-[52px] transition-transform active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Tempah Servis Cuci Solar via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Visual Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-2xl bg-slate-900">
                <img
                  src={solarHeroImg}
                  alt="Ilustrasi perkhidmatan cuci panel solar Ruby Enterprise oleh juruteknik Malaysia dengan peralatan berus teleskopik dan pakaian keselamatan"
                  className="w-full h-80 sm:h-[420px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-slate-950/95 border-t border-slate-800 text-xs sm:text-sm text-slate-300 space-y-1">
                  <div className="flex items-center justify-between text-amber-300 font-bold">
                    <span>Peralatan Profesional Selamat</span>
                    <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded text-slate-300">
                      Ilustrasi perkhidmatan
                    </span>
                  </div>
                  <p className="text-slate-300">
                    Juruteknik dilengkapi abah-abah keselamatan bumbung, berus khas mikrofiber lembut, dan air ditapis tanpa asid.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OTHER SERVICES LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-base font-bold uppercase tracking-wider text-[#133E87]">
            Kontraktor Berdaftar CIDB G1–G4
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Perkhidmatan Pembinaan, Ubah Suai &amp; Fasiliti
          </h2>
          <p className="text-slate-600 text-lg mt-1">
            Setiap servis diselia secara terperinci dengan sebut harga telus dan berpatutan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {constructionServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image banner with clear "Ilustrasi perkhidmatan" label as strictly required */}
              <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={`Ilustrasi perkhidmatan ${service.title}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#0B2545]/90 text-amber-300 text-xs font-bold px-3 py-1 rounded-md backdrop-blur-sm">
                  {service.tag}
                </span>
                <span className="absolute bottom-3 left-3 text-xs text-slate-300 bg-slate-950/80 px-2.5 py-1 rounded backdrop-blur-sm">
                  {service.illustrationNote || 'Ilustrasi perkhidmatan'}
                </span>
              </div>

              {/* Service Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[#0B2545]">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#133E87] mb-2">
                      Skop Kerja Termasuk:
                    </h4>
                    <ul className="space-y-1.5 text-sm sm:text-base text-slate-700">
                      {service.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Service-Specific WhatsApp Action Button */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={buildWhatsAppLink(service.title, 'Perak / Kedah / Pulau Pinang')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl min-h-[50px] shadow-md transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Tanya Sebut Harga: {service.title}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Prompt */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="p-8 rounded-2xl bg-[#0B2545] text-white space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Mempunyai Projek Khas yang Tidak Tersenarai di Atas?
          </h3>
          <p className="text-slate-200 text-base sm:text-lg">
            Sila hubungi kami untuk perbincangan awal. Kami sedia menilai keperluan tapak anda.
          </p>
          <a
            href="https://wa.me/601168347638?text=Salam%20Ruby%20Enterprise,%20saya%20ada%20pertanyaan%20tentang%20projek%20khas."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-3.5 rounded-xl min-h-[48px]"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Hubungi Melalui WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
};
