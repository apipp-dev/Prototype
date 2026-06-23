import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { useApp } from './context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Award, MessageSquare, ArrowRight, Check, Anchor, Video } from 'lucide-react';

export default function App() {
  const { currentPage, setCurrentPage, lang, t } = useApp();

  // Testimonials with accurate language alignment
  const testimonials = lang === 'en' ? [
    {
      id: 't-1',
      name: 'Aditya Herlambang',
      role: 'Head of Student Senate',
      company: 'Unsyiah Student Union',
      feedback: 'Santt Production turned our graduation farewell festival into cinematic art. The drone chases over Masjid Raya and campus landscapes were high-caliber, and delivery was incredibly fast!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: 't-2',
      name: 'Nadia Az-Zahra',
      role: 'Director of Marketing',
      company: 'Weh Resort & Spa Sabang',
      feedback: 'Absolutely magical over-water FPV drone chases! Their crew took full creative charge, aligned the lighting with golden sunrise hours, and delivered breathtaking visual assets.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop'
    }
  ] : [
    {
      id: 't-1',
      name: 'Aditya Herlambang',
      role: 'Ketua Senat Mahasiswa',
      company: 'Himpunan Alumni Unsyiah',
      feedback: 'Santt Production mengubah rekap festival pelepasan kelulusan kami menjadi karya seni sinematik. Rekaman drone di atas Masjid Raya dan kampus luar biasa megah!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: 't-2',
      name: 'Nadia Az-Zahra',
      role: 'Direktur Pemasaran',
      company: 'Resort Pulau Weh Sabang',
      feedback: 'Penerbangan drone FPV di atas laut yang luar bisa ajaib! Kru mereka sangat kreatif, mencocokkan cahaya fajar secara presisi, lalu mengirimkan file rekap petualangan yang luar biasa indah.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#0D0D0D] text-white selection:bg-brand-orange selection:text-white min-h-screen relative font-sans">
      
      {/* PREMIUM BACKGROUND STRUCTURAL DOTS WATERMARK */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02] select-none">
        <div className="w-full h-full bg-[radial-gradient(#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        
        {/* SHARED TRADITIONAL PREMIUM NAV & MOBILE BOTTOM PILLBAR */}
        <Navbar />

        {/* SITE VIEWS ROUTER */}
        <main className="flex-grow pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              
              {/* HOME PAGE ROUTE VIEW */}
              {currentPage === 'home' && (
                <div className="space-y-0">
                  
                  {/* Hero Slider section */}
                  <Hero />

                  {/* 1. WHY CHOOSE US PRESENTATION (APPLE / SONY STYLE) */}
                  <section className="py-24 bg-[#090909] overflow-hidden border-t border-b border-white/5 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-3 bg-brand-orange/10 border border-brand-orange/20 px-3 py-1 rounded-full text-[9px] font-mono tracking-widest text-brand-orange uppercase">
                          <Award className="w-3.5 h-3.5" />
                          <span>{lang === 'en' ? 'OUR STANDARD' : 'STANDAR KAMI'}</span>
                        </div>
                        <h2 className="font-display font-[900] text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white mt-1">
                          {t.whyChooseUs.title}
                        </h2>
                        <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-sans tracking-wide">
                          {t.whyChooseUs.subtitle}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.whyChooseUs.items.map((item, i) => (
                          <div key={i} className="p-6 rounded-lg bg-neutral-950 border border-white/5 hover:border-brand-orange/30 transition-all duration-300">
                            <span className="font-mono text-xs text-brand-orange font-bold font-mono">0{i+1}//</span>
                            <h3 className="text-sm font-display font-black text-white uppercase mt-4 mb-2 tracking-wider">
                              {item.title}
                            </h3>
                            <p className="text-xs text-neutral-400 leading-relaxed font-sans font-light">
                              {item.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* 2. FEATURED SERVICES SNAPSHOT (Slide menu with redirect CTAs) */}
                  <section className="py-24 bg-[#0D0D0D] border-b border-white/5 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                        <div>
                          <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest block">
                            // {lang === 'en' ? 'Premium Capabilities' : 'Kapabilitas Premium'}
                          </span>
                          <h2 className="font-display font-[900] text-3xl sm:text-4xl uppercase text-white mt-1.5">
                            {lang === 'en' ? 'Featured Visual Solutions' : 'Pilihan Solusi Visual'}
                          </h2>
                        </div>
                        <button
                          id="home-explore-services-btn"
                          onClick={() => setCurrentPage('services')}
                          className="px-5 py-2.5 bg-neutral-950 hover:bg-neutral-900 border border-white/10 hover:border-brand-orange/50 rounded-lg text-xs font-bold uppercase tracking-widest text-[#FFFFFF] cursor-pointer shrink-0"
                        >
                          {lang === 'en' ? 'Explore All Services' : 'Jelajahi Semua Layanan'}
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {t.services.items.slice(0, 3).map((srv) => (
                          <div key={srv.id} className="p-6 rounded-xl bg-neutral-950 border border-white/5 flex flex-col justify-between hover:border-brand-orange/20 transition-all group aspect-[5/4]">
                            <div className="space-y-4">
                              <span className="text-[9px] font-mono text-brand-orange uppercase tracking-wider block font-bold">
                                // {srv.title.split(' ')[0]}
                              </span>
                              <h3 className="text-lg font-display font-black text-white uppercase tracking-tight group-hover:text-brand-orange transition-colors">
                                {srv.title}
                              </h3>
                              <p className="text-xs text-neutral-400 font-sans tracking-wide leading-relaxed line-clamp-3">
                                {srv.description}
                              </p>
                            </div>
                            <button
                              id={`srv-home-enq-${srv.id}`}
                              onClick={() => setCurrentPage('services')}
                              className="mt-6 text-[10px] font-mono font-bold uppercase tracking-widest text-brand-orange flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer"
                            >
                              <span>{lang === 'en' ? 'View Details' : 'Lihat Detail'}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* 3. FEATURED WORKS ARCHIVE LIGHTBOXES WITH TAB-LINK */}
                  <section className="py-24 bg-[#090909] border-b border-white/5 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                        <div>
                          <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest block">
                            // {lang === 'en' ? 'Cinematic Archive' : 'Arsip Sinematik'}
                          </span>
                          <h2 className="font-display font-[900] text-3xl sm:text-4xl uppercase text-white mt-1.5">
                            {lang === 'en' ? 'Selected Directures Records' : 'Karya Pilihan Direktur'}
                          </h2>
                        </div>
                        <button
                          id="home-view-works-btn"
                          onClick={() => setCurrentPage('works')}
                          className="px-5 py-2.5 bg-neutral-950 hover:bg-neutral-900 border border-white/10 hover:border-brand-orange/50 rounded-lg text-xs font-bold uppercase tracking-widest text-[#FFFFFF] cursor-pointer shrink-0"
                        >
                          {lang === 'en' ? 'View Full Portfolio' : 'Lihat Portofolio Lengkap'}
                        </button>
                      </div>

                      {/* Displaying 3 premium highlight items */}
                      <Portfolio />
                    </div>
                  </section>

                  {/* 4. METICULOUS PRODUCTION PROCESS FLOW */}
                  <section className="py-24 bg-[#0D0D0D] border-b border-white/5 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest block font-bold">
                          // {lang === 'en' ? 'Prsitine Standards' : 'Standar Kerja'}
                        </span>
                        <h2 className="font-display font-[900] text-3xl sm:text-4xl uppercase text-white tracking-tight mt-1">
                          {t.process.title}
                        </h2>
                        <p className="mt-2 text-xs text-neutral-400 font-sans tracking-wide">
                          {t.process.subtitle}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {t.process.steps.map((step, idx) => (
                          <div   key={idx} className="relative p-7 rounded-lg bg-neutral-950 border border-white/5 flex flex-col justify-between">
                            <span className="font-display font-black text-4xl text-neutral-800 tracking-tight block border-b border-white/5 pb-3 font-mono">
                              {step.phase}
                            </span>
                            <div className="mt-6 space-y-2">
                              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
                                {step.title}
                              </h3>
                              <p className="text-xs text-neutral-400 font-sans leading-relaxed tracking-wide">
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* 5. PRICING PREVIEW ACTION */}
                  <section className="py-24 bg-[#090909] border-b border-white/5 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 p-8 md:p-12 rounded-xl bg-neutral-950 border border-white/5 shadow-2xl">
                        <div className="space-y-4 max-w-xl">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-orange/15 border border-brand-orange/30 text-[9px] font-mono text-brand-orange uppercase font-bold tracking-widest">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{lang === 'en' ? 'Package Highlight' : 'Sorotan Paket'}</span>
                          </div>
                          <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase leading-none tracking-tight">
                            {lang === 'en' ? 'Cinematic Event Mastery Signature Package' : 'Paket Penguasaan Acara Masterpiece'}
                          </h3>
                          <p className="text-xs text-neutral-400 font-sans leading-relaxed tracking-wide">
                            {lang === 'en'
                              ? "Our highly requested comprehensive coverage plan. Features full-day footage, cinematic vertical recaps, edited documentary portrait files, and professional licensed UHD aerial static mapping."
                              : "Rencana layanan komprehensif kami yang paling banyak diminati. Menampilkan video liputan satu hari penuh, rekap vertikal media sosial, foto potret pendukung, serta rekap drone udara UHD berlisensi."}
                          </p>
                        </div>

                        <div className="text-center bg-[#090909] p-6 rounded-lg border border-white/5 min-w-[240px] space-y-4 shrink-0">
                          <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block">
                            {lang === 'en' ? 'PLAN STARTS AT' : 'PAKET MULAI DARI'}
                          </span>
                          <span className="font-display font-[900] text-3xl sm:text-4xl text-brand-orange tracking-tight block">
                            Rp 7.5M
                          </span>
                          <button
                            id="home-pricing-direct-btn"
                            onClick={() => setCurrentPage('pricing')}
                            className="w-full py-3 bg-brand-orange hover:bg-brand-orange/95 text-white text-[10px] font-bold uppercase tracking-widest rounded transition-all cursor-pointer shadow-[0_0_12px_rgba(255,107,0,0.3)] flex items-center justify-center gap-1.5"
                          >
                            <span>{lang === 'en' ? 'View Pricing Plans' : 'Lihat Daftar Harga'}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 6. TESTIMONIALS (Apple/DJI style slider) */}
                  <section className="py-24 bg-[#0D0D0D] border-b border-white/5 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center max-w-xl mx-auto mb-16">
                        <MessageSquare className="w-6 h-6 text-brand-orange mx-auto mb-2" />
                        <span className="text-[10px] font-mono text-brand-orange block uppercase tracking-widest">
                          // {lang === 'en' ? 'Client Trust' : 'Testimoni Klien'}
                        </span>
                        <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase text-white mt-1">
                          {lang === 'en' ? 'Trusted by Local Communities' : 'Dipercaya oleh Komunitas Lokal'}
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto font-sans">
                        {testimonials.map((test) => (
                          <div key={test.id} className="p-6 rounded-lg bg-neutral-950 border border-white/5 space-y-6 relative">
                            <p className="text-xs sm:text-sm text-neutral-300 italic font-light leading-relaxed">
                              "{test.feedback}"
                            </p>
                            <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                              <img
                                src={test.image}
                                alt={test.name}
                                className="w-10 h-10 rounded-full object-cover border border-brand-orange/30"
                                referrerPolicy="no-referrer"
                              />
                              <div>
                                <h4 className="text-xs font-display font-extrabold text-white uppercase tracking-wide">
                                  {test.name}
                                </h4>
                                <span className="text-[9px] font-mono text-neutral-500 uppercase">
                                  {test.role} // {test.company}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* 7. CONTACT CTA BLOCK (Simple clean exit banner) */}
                  <section className="py-24 bg-gradient-to-r from-black to-neutral-950 border-t border-white/5 text-center relative overflow-hidden">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                      <span className="text-[10px] font-mono text-brand-orange uppercase block tracking-widest">
                        // {lang === 'en' ? 'SYNC TRANSMISSION NOW' : 'KIRIM INKUIRI SEKARANG'}
                      </span>
                      <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase leading-none">
                        {lang === 'en' ? 'Ready to Document Your Legacy?' : 'Siap Mengabadikan Warisan Visual Anda?'}
                      </h2>
                      <p className="text-xs text-neutral-400 max-w-lg mx-auto font-sans font-light leading-relaxed">
                        {lang === 'en'
                          ? 'Get in touch with Santt Productions director nodes across Banda Aceh, Aceh Besar, and Sabang peaks for a direct pricing brief.'
                          : 'Hubungi produser Santt Production yang tersebar di Banda Aceh, Aceh Besar, dan Sabang untuk inkuiri harga spesifik secara langsung.'}
                      </p>
                      <button
                        id="home-contact-cta-btn"
                        onClick={() => setCurrentPage('contact')}
                        className="px-8 py-3.5 bg-brand-orange hover:bg-brand-orange/90 text-white rounded text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(255,107,0,0.3)] cursor-pointer"
                      >
                        {lang === 'en' ? 'Enquire Project Desk' : 'Konsultasikan Proyek'}
                      </button>
                    </div>
                  </section>

                </div>
              )}

              {/* WORKS TAB PAGE VIEW */}
              {currentPage === 'works' && <Portfolio />}

              {/* SERVICES TAB PAGE VIEW */}
              {currentPage === 'services' && <Services />}

              {/* PRICING TAB PAGE VIEW */}
              {currentPage === 'pricing' && <Pricing />}

              {/* ABOUT TAB PAGE VIEW */}
              {currentPage === 'about' && <About />}

              {/* CONTACT TAB PAGE VIEW */}
              {currentPage === 'contact' && <Contact />}

            </motion.div>
          </AnimatePresence>
        </main>

        {/* INTEGRATED SHARED FOOTER & RESPONSIVE TELEPHONE SUPPORT */}
        <Footer />
        <WhatsAppButton />

      </div>

    </div>
  );
}
