import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { Phone, Instagram, Mail, MapPin, Send, HelpCircle, ChevronDown, Check, Globe, Map } from 'lucide-react';

export default function Contact() {
  const { t, lang } = useApp();
  
  // Inquiry form states
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    projectType: 'graduation',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  // FAQs translation dictionaries
  const faqData = lang === 'en' ? [
    {
      q: "Which exact geographic regions do you cover?",
      a: "Our core team is based in Banda Aceh. We regularly carry out on-location photography, cinematic video shoots, and certified drone operations across the entire Banda Aceh municipality, Aceh Besar coastal clifftops, and Pulau Weh (Sabang) nature sanctuaries."
    },
    {
      q: "How long does a cinematic videography project take from shoot to finish?",
      a: "Usually, small recap recaps or menus (such as Graduation or UMKM blocks) are delivered in 5 to 7 business days. Complex narrative ads or company profiles require detailed storyboard drafting and DaVinci resolve color grading loops, which take 3 to 5 weeks from contract start."
    },
    {
      q: "Do you supply unedited raw footage or original log records?",
      a: "Yes! While we take deep pride in our customized, finished story-led color grades, you can choose raw supply addons on any of our packages to receive complete camera records (ProRes/Log)."
    }
  ] : [
    {
      q: "Wilayah geografis mana saja yang Anda cakupi secara lokal?",
      a: "Tim inti kami berpusat di Banda Aceh. Kami secara rutin melakukan dokumentasi foto, video sinematik, serta drone bersertifikat sipil di seluruh Kotamadya Banda Aceh, pesisir tebing Aceh Besar, hingga Pulau Weh (Sabang)."
    },
    {
      q: "Berapa lama pengerjaan proyek dari rekam gambar hingga hasil akhir?",
      a: "Biasanya, rekap kelulusan atau menu UMKM yang ringkas dikirimkan dalam 5 hingga 7 hari kerja. Namun, kampanye komersial brand atau profil korporat yang kompleks membutuhkan naskah matang serta gradasi warna khusus, yang memakan waktu 3 hingga 5 minggu."
    },
    {
      q: "Apakah Anda menyediakan rekaman mentah (raw footage) asli?",
      a: "Ya! Meskipun kami bangga dengan hasil gradasi warna garapan akhir kami, Anda dapat menambahkan opsi 'Akses File Mentah' pada paket apa pun untuk menerima file tangkapan asli kamera penuh."
    }
  ];

  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name.trim() || !formData.contact.trim()) {
      setFormError(t.contact.form.error);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        contact: '',
        projectType: 'graduation',
        message: ''
      });
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0D0D0D] overflow-hidden border-t border-white/5">
      
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UPPER TITLE */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-10 h-[1.5px] bg-brand-orange"></span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-orange font-mono">
              {lang === 'en' ? 'DIRECT COLLABORATION' : 'KOLABORASI LANGSUNG'}
            </span>
          </div>
          <h2 className="font-display font-[900] text-4xl sm:text-5xl uppercase tracking-tight text-white leading-none">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-sm text-neutral-400 font-sans tracking-wide">
            {t.contact.subtitle}
          </p>
        </div>

        {/* LAYOUT: FORM VS CONTACT METADATA (Bento style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-stretch">
          
          {/* LEFT: INQUIRY FORM COLUMN (7 columns width) */}
          <div className="lg:col-span-7 bg-neutral-950 border border-white/5 p-6 sm:p-8 rounded-xl shadow-2xl relative flex flex-col justify-between">
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Your Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                    {t.contact.form.name}
                  </label>
                  <input
                    id="contact-form-name-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Afif Muhammad"
                    className="w-full bg-[#0D0D0D] border border-white/5 focus:border-brand-orange hover:border-white/10 p-3 text-xs text-white rounded outline-none transition-all"
                  />
                </div>

                {/* Your Contact */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                    {t.contact.form.email}
                  </label>
                  <input
                    id="contact-form-email-input"
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="e.g. +62 821-XXXX-XXXX"
                    className="w-full bg-[#0D0D0D] border border-white/5 focus:border-brand-orange hover:border-white/10 p-3 text-xs text-white rounded outline-none transition-all"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                  {t.contact.form.projectType}
                </label>
                <select
                  id="contact-form-project-type"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-[#0D0D0D] border border-white/5 focus:border-brand-orange hover:border-white/10 p-3 text-xs text-white rounded outline-none transition-all cursor-pointer"
                >
                  <option value="graduation">{lang === 'en' ? 'Graduation & Milestone Documentation' : 'Dokumentasi Wisuda & Kelompok'}</option>
                  <option value="event">{lang === 'en' ? 'Event & Music Festival coverage' : 'Cakupan Acara / Event'}</option>
                  <option value="travel">{lang === 'en' ? 'Travel Open-Trip & Landscape' : 'Perjalanan Liburan & Alam'}</option>
                  <option value="umkm">{lang === 'en' ? 'UMKM Content block compilation' : 'Pembuatan Konten Lokal UMKM'}</option>
                  <option value="product">{lang === 'en' ? 'Premium Product Ad & Commercial' : 'Iklan Produk & Komersial'}</option>
                  <option value="drone">{lang === 'en' ? 'Drone FPV mapping flight' : 'Penerbangan Drone FPV Udara'}</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                  {lang === 'en' ? 'PRODUCER MISSION DETAILS' : 'RINCIAN MISI PRODUKSI'}
                </label>
                <textarea
                  id="contact-form-message-input"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.form.message}
                  className="w-full bg-[#0D0D0D] border border-white/5 focus:border-brand-orange hover:border-white/10 p-3 text-xs text-white rounded outline-none transition-all font-sans"
                />
              </div>

              {/* Form Error message if any */}
              {formError && (
                <div className="text-[11px] font-mono text-brand-orange p-3 bg-brand-orange/5 border border-brand-orange/20 rounded">
                  {formError}
                </div>
              )}

              {/* Submit CTA */}
              <button
                id="contact-form-submit-btn"
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className="w-full py-4 bg-brand-orange hover:bg-brand-orange/90 disabled:bg-neutral-800 text-white rounded text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <span>{t.contact.form.submitting}</span>
                ) : submitSuccess ? (
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-white" />
                    <span>{lang === 'en' ? 'Brief Synced' : 'Pesan Sinkron'}</span>
                  </div>
                ) : (
                  <>
                    <span>{t.contact.form.submit}</span>
                    <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>

            </form>

            {/* Success animations info */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-6 p-4 rounded bg-brand-orange/10 border border-brand-orange/20 flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase text-brand-orange">
                      {lang === 'en' ? 'TRANSMISSION COMPLETE' : 'PENGIRIMAN SELESAI'}
                    </h4>
                    <p className="text-xs text-neutral-300 font-sans mt-1">
                      {t.contact.form.submitted}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* RIGHT: CONTACT STATS CARD LIST (5 columns width) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Social linkages block */}
            <div className="p-6 rounded-xl bg-neutral-950 border border-white/5 space-y-6">
              
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block border-b border-white/5 pb-2">
                // {lang === 'en' ? 'Official Dispatches' : 'Hubungi Produser'}
              </span>

              {/* WhatsApp direct desk */}
              <a
                id="contact-card-whatsapp-link"
                href="https://wa.me/6282361111620"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded bg-neutral-900/60 border border-white/5 hover:border-brand-orange/30 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded bg-brand-orange/10 border border-brand-orange/20 text-brand-orange">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-neutral-400 block">// {t.contact.info.whatsapp}</span>
                    <span className="text-xs font-bold text-white uppercase group-hover:text-brand-orange transition-colors">
                      +62 823 6111 1620
                    </span>
                  </div>
                </div>
                <Send className="w-3.5 h-3.5 text-neutral-600 group-hover:text-brand-orange transition-colors" />
              </a>

              {/* Instagram link */}
              <a
                id="contact-card-instagram-link"
                href="https://instagram.com/santtpro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded bg-neutral-900/60 border border-white/5 hover:border-brand-orange/30 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded bg-brand-orange/10 border border-brand-orange/20 text-brand-orange">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-neutral-400 block">// {t.contact.info.instagram}</span>
                    <span className="text-xs font-bold text-white uppercase group-hover:text-brand-orange transition-colors">
                      {t.meta.instagram}
                    </span>
                  </div>
                </div>
                <Send className="w-3.5 h-3.5 text-neutral-600 group-hover:text-brand-orange transition-colors" />
              </a>

              {/* Email link */}
              <a
                id="contact-card-email-link"
                href="mailto:afifm192@gmail.com"
                className="flex items-center justify-between p-4 rounded bg-neutral-900/60 border border-white/5 hover:border-brand-orange/30 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded bg-brand-orange/10 border border-brand-orange/20 text-brand-orange">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-neutral-400 block">// {t.contact.info.email}</span>
                    <span className="text-xs font-bold text-white uppercase group-hover:text-brand-orange transition-colors">
                      contact@santtproduction.com
                    </span>
                  </div>
                </div>
                <Send className="w-3.5 h-3.5 text-neutral-600 group-hover:text-brand-orange transition-colors" />
              </a>

            </div>

            {/* Premium Google Maps Dark representation container */}
            <div className="p-6 rounded-xl bg-neutral-950 border border-white/5 flex flex-col justify-between flex-1 min-h-[220px] relative overflow-hidden group">
              
              {/* Graphic line artwork representing dynamic grid map coordinates */}
              <div className="absolute inset-0 z-0 opacity-15 bg-[radial-gradient(#2D2D2D_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Map className="w-4 h-4 text-brand-orange" />
                  <span className="text-[10px] font-mono text-brand-orange uppercase tracking-wider">
                    {t.contact.info.location} //
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-display font-bold text-white uppercase tracking-tight">
                  {t.contact.info.locationDesc}
                </h4>
                <p className="text-[11px] text-neutral-400 mt-2 font-sans font-light">
                  {lang === 'en' 
                    ? 'Our logistics coordinates cover direct dispatch boat times to Sabang Island within 2 hours from Banda Aceh port.'
                    : 'Koordinasi pengiriman langsung kru ke Pulau Sabang memakan waktu kurang dari 2 jam menggunakan kapal cepat uap dari pelabuhan Ulee Lheue.'}
                </p>
              </div>

              {/* Stylized visual mini-map mockup */}
              <div className="mt-4 h-24 rounded bg-neutral-900 border border-white/5 relative overflow-hidden flex items-center justify-center text-[10px] font-mono text-neutral-400 uppercase tracking-widest z-10 group-hover:border-brand-orange/30 transition-all">
                <MapPin className="w-4 h-4 text-brand-orange animate-bounce absolute top-6" />
                <span className="absolute bottom-4 font-mono text-[9px] text-brand-orange opacity-80">
                  BANDA ACEH OFFICE
                </span>
                <span className="text-[8px] text-neutral-600">
                  LAT: 5.54829 / LNG: 95.32375
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* STUDY INTELLIGENT ACCORDION SYSTEM (FAQs) */}
        <div className="max-w-4xl mx-auto pt-12 border-t border-white/5">
          <div className="text-center mb-10">
            <HelpCircle className="w-6 h-6 text-brand-orange mx-auto mb-2" />
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest block">
              Frequently Asked Briefings //
            </span>
            <h3 className="font-display font-extrabold text-xl sm:text-2.5xl uppercase tracking-tight text-white">
              {lang === 'en' ? 'COMMON PRODUCTION FAQS' : 'PERTANYAAN UMUM PRODUKSI'}
            </h3>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  id={`faq-accordion-${idx}`}
                  key={idx}
                  className="bg-neutral-950 border border-white/5 rounded-lg overflow-hidden transition-colors"
                >
                  <button
                    id={`faq-btn-${idx}`}
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-display font-extrabold text-white uppercase tracking-wide">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-brand-orange transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="p-5 pt-0 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed border-t border-white/5 whitespace-pre-line font-light">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
