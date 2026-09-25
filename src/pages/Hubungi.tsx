import React, { useState } from 'react';
import { ContactFormData } from '../types';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';

export const Hubungi: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nama: '',
    telefon: '',
    servis: 'Cuci Panel Solar',
    negeri: 'Perak',
    daerah: '',
    mesej: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submittedLink, setSubmittedLink] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.nama.trim()) {
      newErrors.nama = 'Sila masukkan nama penuh anda.';
    }

    if (!formData.telefon.trim()) {
      newErrors.telefon = 'Sila masukkan nombor telefon yang sah.';
    } else if (formData.telefon.replace(/[^0-9]/g, '').length < 8) {
      newErrors.telefon = 'Nombor telefon terlalu pendek. Contoh: 012-3456789.';
    }

    if (!formData.daerah.trim()) {
      newErrors.daerah = 'Sila masukkan nama daerah atau bandar anda (cth: Batu Gajah, Ipoh, Sungai Petani).';
    }

    if (!formData.mesej.trim()) {
      newErrors.mesej = 'Sila nyatakan ringkasan pertanyaan atau saiz projek anda.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Build properly formatted Malaysian WhatsApp enquiry
    const message = `Salam Ruby Enterprise,\n\nSaya ingin bertanyakan tentang sebut harga perkhidmatan:\n\n• Nama: ${formData.nama.trim()}\n• Telefon: ${formData.telefon.trim()}\n• Pilihan Servis: ${formData.servis}\n• Lokasi / Negeri: ${formData.daerah.trim()}, ${formData.negeri}\n• Keterangan Projek: ${formData.mesej.trim()}\n\nBolehkah pihak Ruby Enterprise membuat semakan dan memberi anggaran sebut harga? Terima kasih.`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/601168347638?text=${encoded}`;

    setSubmittedLink(waUrl);

    // Open WhatsApp in new tab/app
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-14 lg:space-y-20 pb-20">
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
            <span>Perhubungan &amp; Sebut Harga Percuma</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Hubungi Ruby Enterprise
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Kongsi keperluan pembinaan, renovasi atau cuci panel solar anda. Kami sedia berbincang dan menyediakan sebut harga percuma.
          </p>
        </div>
      </section>

      {/* Main Grid: Form on Left, Contact Cards on Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B2545]">
                Borang Pertanyaan WhatsApp
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mt-1">
                Isi butiran di bawah. Apabila anda klik butang hantar, aplikasi WhatsApp anda akan dibuka bersama teks yang telah siap diformatkan.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Nama Penuh */}
              <div>
                <label
                  htmlFor="nama"
                  className="block text-base font-bold text-slate-800 mb-1.5"
                >
                  Nama Penuh <span className="text-red-500">*</span>
                </label>
                <input
                  id="nama"
                  type="text"
                  value={formData.nama}
                  onChange={(e) => {
                    setFormData({ ...formData, nama: e.target.value });
                    if (errors.nama) setErrors({ ...errors, nama: undefined });
                  }}
                  placeholder="Contoh: Ahmad Firdaus"
                  className={`w-full px-4 py-3 rounded-xl border text-base min-h-[50px] transition-colors focus:outline-none focus:ring-2 ${
                    errors.nama
                      ? 'border-red-500 focus:ring-red-200 bg-red-50/20'
                      : 'border-slate-300 focus:border-[#133E87] focus:ring-blue-100'
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.nama}
                />
                {errors.nama && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.nama}</span>
                  </p>
                )}
              </div>

              {/* Nombor Telefon */}
              <div>
                <label
                  htmlFor="telefon"
                  className="block text-base font-bold text-slate-800 mb-1.5"
                >
                  Nombor Telefon (WhatsApp) <span className="text-red-500">*</span>
                </label>
                <input
                  id="telefon"
                  type="tel"
                  value={formData.telefon}
                  onChange={(e) => {
                    setFormData({ ...formData, telefon: e.target.value });
                    if (errors.telefon) setErrors({ ...errors, telefon: undefined });
                  }}
                  placeholder="Contoh: 012-345 6789"
                  className={`w-full px-4 py-3 rounded-xl border text-base min-h-[50px] transition-colors focus:outline-none focus:ring-2 ${
                    errors.telefon
                      ? 'border-red-500 focus:ring-red-200 bg-red-50/20'
                      : 'border-slate-300 focus:border-[#133E87] focus:ring-blue-100'
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.telefon}
                />
                {errors.telefon && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.telefon}</span>
                  </p>
                )}
              </div>

              {/* Pilihan Servis */}
              <div>
                <label
                  htmlFor="servis"
                  className="block text-base font-bold text-slate-800 mb-1.5"
                >
                  Pilihan Servis <span className="text-red-500">*</span>
                </label>
                <select
                  id="servis"
                  value={formData.servis}
                  onChange={(e) => setFormData({ ...formData, servis: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-base min-h-[50px] focus:outline-none focus:border-[#133E87] focus:ring-2 focus:ring-blue-100"
                >
                  <option value="Cuci Panel Solar">Cuci Panel Solar (Servis Khusus)</option>
                  <option value="Bina Rumah Baharu">Bina Rumah Baharu</option>
                  <option value="Ubah Suai Rumah (Renovasi)">Ubah Suai Rumah (Renovasi)</option>
                  <option value="Kerja Bumbung & Kekuda">Kerja Bumbung &amp; Kekuda</option>
                  <option value="Kerja Besi & Gril Keselamatan">Kerja Besi &amp; Gril Keselamatan</option>
                  <option value="Pembinaan Pagar & Tembok">Pembinaan Pagar &amp; Tembok</option>
                  <option value="Sistem Longkang & Perparitan">Sistem Longkang &amp; Perparitan</option>
                  <option value="Pendawaian Elektrik (Wiring)">Pendawaian Elektrik (Wiring)</option>
                  <option value="Kerja Perpaipan & Sanitari">Kerja Perpaipan &amp; Sanitari</option>
                  <option value="Lain-lain Servis Binaan">Lain-lain Servis Binaan</option>
                </select>
              </div>

              {/* Negeri & Daerah */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="negeri"
                    className="block text-base font-bold text-slate-800 mb-1.5"
                  >
                    Negeri <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="negeri"
                    value={formData.negeri}
                    onChange={(e) => setFormData({ ...formData, negeri: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-base min-h-[50px] focus:outline-none focus:border-[#133E87] focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="Perak">Perak (Pangkalan Utama)</option>
                    <option value="Kedah">Kedah</option>
                    <option value="Pulau Pinang">Pulau Pinang</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="daerah"
                    className="block text-base font-bold text-slate-800 mb-1.5"
                  >
                    Daerah / Bandar <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="daerah"
                    type="text"
                    value={formData.daerah}
                    onChange={(e) => {
                      setFormData({ ...formData, daerah: e.target.value });
                      if (errors.daerah) setErrors({ ...errors, daerah: undefined });
                    }}
                    placeholder="Cth: Batu Gajah, Ipoh, SP"
                    className={`w-full px-4 py-3 rounded-xl border text-base min-h-[50px] transition-colors focus:outline-none focus:ring-2 ${
                      errors.daerah
                        ? 'border-red-500 focus:ring-red-200 bg-red-50/20'
                        : 'border-slate-300 focus:border-[#133E87] focus:ring-blue-100'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.daerah}
                  />
                  {errors.daerah && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.daerah}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Mesej / Keterangan Projek */}
              <div>
                <label
                  htmlFor="mesej"
                  className="block text-base font-bold text-slate-800 mb-1.5"
                >
                  Mesej / Keterangan Keperluan Projek <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="mesej"
                  rows={4}
                  value={formData.mesej}
                  onChange={(e) => {
                    setFormData({ ...formData, mesej: e.target.value });
                    if (errors.mesej) setErrors({ ...errors, mesej: undefined });
                  }}
                  placeholder="Sila nyatakan butiran seperti anggaran saiz rumah, jenis kerosakan bumbung, bilangan kepingan solar, atau kerja ubah suai yang diinginkan..."
                  className={`w-full px-4 py-3 rounded-xl border text-base transition-colors focus:outline-none focus:ring-2 ${
                    errors.mesej
                      ? 'border-red-500 focus:ring-red-200 bg-red-50/20'
                      : 'border-slate-300 focus:border-[#133E87] focus:ring-blue-100'
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.mesej}
                />
                {errors.mesej && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.mesej}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-lg py-4 px-6 rounded-xl min-h-[52px] shadow-lg shadow-emerald-950/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  <span>Hantar ke WhatsApp</span>
                </button>
              </div>

              {/* Important clarification per prompt requirement: Do not claim the message was sent automatically */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Perhatian:</strong> Menekan butang di atas akan membuka aplikasi WhatsApp anda bersama teks pertanyaan yang telah siap diisi. Anda mempunyai peluang untuk menyemak mesej terlebih dahulu sebelum menekan butang kirim di WhatsApp.
                </p>
              </div>

              {submittedLink && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Pautan WhatsApp sedia dibuka. Sekiranya tidak terbuka, klik pautan di sebelah:</span>
                  </div>
                  <a
                    href={submittedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline text-emerald-900 whitespace-nowrap min-h-[36px] flex items-center"
                  >
                    Buka WhatsApp
                  </a>
                </div>
              )}
            </form>
          </div>

          {/* Contact Details & Pangkalan Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone Card */}
            <div className="rounded-3xl bg-[#0B2545] text-white p-6 sm:p-8 space-y-5 border-2 border-amber-400 shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                  Talian Khidmat Pelanggan
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  011-6834 7638
                </h3>
              </div>

              <div className="space-y-3">
                <a
                  href="https://wa.me/601168347638?text=Salam%20Ruby%20Enterprise,%20saya%20ingin%20bertanyakan%20sebut%20harga%20percuma."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-4 rounded-xl min-h-[50px] shadow-md transition-colors"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>WhatsApp Terus Sekarang</span>
                </a>

                <a
                  href="tel:01168347638"
                  className="w-full flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl min-h-[48px] border border-white/25 transition-colors"
                >
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>Panggilan Suara Terus</span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-700/80 space-y-3 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Pangkalan Operasi Utama:</strong>
                    <span>Batu Gajah &amp; Ipoh, Perak</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Pendaftaran:</strong>
                    <span>Kontraktor Berdaftar CIDB G1–G4 Bumiputera</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Summary Box */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#0B2545]">
                Liputan Tiga Negeri Utara
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Kami menyediakan tinjauan tapak dan sebut harga bagi kerja pembinaan serta servis cuci solar di:
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B2545]">Perak:</strong> Batu Gajah, Ipoh, Kampar, Gopeng, Taiping, Teluk Intan, Manjung, dll.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B2545]">Kedah:</strong> Sungai Petani, Kulim, Alor Setar, Bandar Baharu, Baling, dll.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B2545]">Pulau Pinang:</strong> Seberang Perai, Butterworth, Bukit Mertajam &amp; Pulau Pinang.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
