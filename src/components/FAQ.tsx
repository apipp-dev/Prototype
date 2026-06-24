import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { HelpCircle, ChevronDown, CheckCircle2, ShieldAlert, FileText, Info } from 'lucide-react';

export default function FAQ() {
  const { lang } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // FAQ Items translation (English and Indonesian)
  const faqItems = lang === 'en' ? [
    {
      q: "How do I confirm a booking?",
      a: "Bookings are officially confirmed after a minimum 50% down payment (DP) is received. The remaining payment must be completed before the final unwatermarked files are delivered.",
      category: "Payment"
    },
    {
      q: "Are raw files included in the package?",
      a: "Yes! Raw photo and video files are provided for free as part of your package. Deliveries are made securely via Google Drive or other agreed storage media.",
      category: "Deliverables"
    },
    {
      q: "How long will my files be stored?",
      a: "Your files are stored for 30 days starting from the delivery date. After 30 days, files may be permanently removed from Santt Production's storage systems. We highly recommend downloading and backing up your assets immediately upon receipt.",
      category: "Storage"
    },
    {
      q: "What is your revision policy?",
      a: "Minor revisions are included based on the selected package. Major changes such as replacing the main music track, changing the creative concept, or a complete re-edit will incur additional fees starting from Rp 150,000.",
      category: "Revisions"
    },
    {
      q: "Which service areas do you cover?",
      a: "Our standard rates apply for the Banda Aceh and Aceh Besar regions. For productions in Sabang or other locations, additional transport and accommodation costs will apply based on the production scale.",
      category: "Coverage"
    },
    {
      q: "Do you offer custom packages?",
      a: "Absolutely! We understand every project is unique. You can fully customize your production requirements through our Form Request on the Contact page, and our production directors will craft a tailored quote for you.",
      category: "Customization"
    }
  ] : [
    {
      q: "Bagaimana cara melakukan konfirmasi pemesanan?",
      a: "Booking atau pemesanan baru akan dikonfirmasi secara resmi setelah kami menerima pembayaran uang muka (DP) minimal 50%. Pelunasan wajib dilakukan secara penuh sebelum file final tanpa watermark dikirimkan kepada Anda.",
      category: "Pembayaran"
    },
    {
      q: "Apakah file mentah (raw files) akan diberikan?",
      a: "Ya! Raw foto dan video hasil seleksi diberikan secara gratis sesuai dengan paket yang Anda pilih. Semua file mentah akan dikirim melalui Google Drive atau media penyimpanan digital lain yang disepakati bersama.",
      category: "File Hasil"
    },
    {
      q: "Berapa lama batas penyimpanan file hasil produksi?",
      a: "File Anda akan kami simpan dengan aman selama 30 hari sejak tanggal pengiriman tautan. Setelah melewati batas 30 hari tersebut, file dapat dihapus secara permanen dari server penyimpanan Santt Production untuk efisiensi ruang server.",
      category: "Penyimpanan"
    },
    {
      q: "Bagaimana ketentuan mengenai revisi video/foto?",
      a: "Revisi minor (seperti memotong klip pendek, mengganti teks typo) sudah termasuk gratis sesuai paket. Namun, pergantian musik utama, perubahan konsep besar, atau proses edit ulang mayor akan dikenakan biaya tambahan mulai dari Rp 150.000.",
      category: "Revisi"
    },
    {
      q: "Di mana saja area jangkauan layanan Santt Production?",
      a: "Harga paket standar yang tertera berlaku penuh untuk wilayah Banda Aceh dan Aceh Besar. Layanan untuk wilayah Sabang, Pulau Weh, atau area lainnya akan dikenakan biaya akomodasi & transportasi tambahan sesuai kebutuhan produksi di lapangan.",
      category: "Area Jangkauan"
    },
    {
      q: "Apakah saya bisa memesan paket kustom di luar daftar?",
      a: "Sangat bisa! Kami memahami bahwa setiap kebutuhan proyek visual itu unik. Anda dapat berkonsultasi mengenai kebutuhan khusus Anda melalui formulir permintaan di halaman Kontak kami.",
      category: "Kustomisasi"
    }
  ];

  return (
    <section id="faq" className="relative py-20 bg-[#0D0D0D] overflow-hidden min-h-[80vh]">
      {/* Background Ornaments in line with the colors */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-[#FF6B00]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[250px] h-[250px] bg-[#FF8C42]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header section with brand colors */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-[#FF6B00]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B00] font-mono">
              FAQ & TERMS OF SERVICE
            </span>
          </div>
          <h2 className="font-display font-[900] text-3xl sm:text-4xl uppercase tracking-tight text-[#FFFFFF]">
            {lang === 'en' ? 'Frequently Asked Questions' : 'Pertanyaan yang Sering Diajukan'}
          </h2>
          <p className="mt-3 text-sm text-[#F5F5F5]/60 font-sans">
            {lang === 'en' 
              ? 'Find quick answers regarding our booking rules, file delivery, revision clauses, and operational boundaries.' 
              : 'Temukan jawaban cepat seputar ketentuan pemesanan, pengiriman berkas, klausul revisi, serta batasan operasional kami.'}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-[#2D2D2D]/40 border border-[#2D2D2D] hover:border-[#FF6B00]/30 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <span className="text-xs font-mono font-bold text-[#FF6B00] bg-[#FF6B00]/10 px-2.5 py-1 rounded-md shrink-0">
                      {item.category}
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-[#FFFFFF] group-hover:text-[#FF8C42] transition-colors leading-snug">
                      {item.q}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#FF6B00] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-[#2D2D2D]/50 text-xs sm:text-sm text-[#F5F5F5]/80 font-sans leading-relaxed space-y-3">
                        <p>{item.a}</p>
                        
                        {/* Highlights regarding specific terms */}
                        {idx === 0 && (
                          <div className="flex items-center gap-2 p-3 rounded-lg bg-[#FF6B00]/5 border border-[#FF6B00]/15 mt-2">
                            <ShieldAlert className="w-4 h-4 text-[#FF6B00] shrink-0" />
                            <span className="text-[11px] font-mono text-[#FF8C42] uppercase tracking-wider">
                              {lang === 'en' ? '50% DP required for date block' : 'DP 50% wajib untuk mengunci tanggal jadwal'}
                            </span>
                          </div>
                        )}
                        {idx === 2 && (
                          <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/5 border border-red-500/15 mt-2">
                            <Info className="w-4 h-4 text-red-400 shrink-0" />
                            <span className="text-[11px] font-mono text-red-400 uppercase tracking-wider">
                              {lang === 'en' ? 'Files are auto-cleaned after 30 days' : 'File dihapus otomatis setelah 30 hari'}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Help Card with Palette styling */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#2D2D2D] to-[#0D0D0D] border border-[#FF6B00]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-base text-[#FFFFFF]">
              {lang === 'en' ? 'Still have other visual needs?' : 'Masih memiliki kebutuhan visual lainnya?'}
            </h4>
            <p className="text-xs text-[#F5F5F5]/60 font-sans">
              {lang === 'en' 
                ? 'We offer tailored corporate packages, additional FPV drone sets, and high-tempo edits.' 
                : 'Kami menyediakan kustomisasi profil bisnis, kebutuhan terbang FPV udara ekstrem, dan edit cepat.'}
            </p>
          </div>
          <button
            onClick={() => {
              // Trigger Contact page navigation
              const contactBtn = document.getElementById('vertical-sidebar-container');
              if (contactBtn) {
                const clickTarget = contactBtn.querySelector('[title="Contact"], [title="Hubungi Kami"]');
                if (clickTarget) (clickTarget as HTMLButtonElement).click();
              }
            }}
            className="px-5 py-3 rounded-xl bg-[#FF6B00] hover:bg-[#FF8C42] text-[#FFFFFF] text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-[0_4px_15px_rgba(255,107,0,0.3)] shrink-0"
          >
            {lang === 'en' ? 'Consult Custom Brief' : 'Konsultasikan Kebutuhan'}
          </button>
        </div>

      </div>
    </section>
  );
}
