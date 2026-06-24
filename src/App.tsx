import React, { lazy, Suspense } from 'react';
import VerticalSidebar from './components/VerticalSidebar';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import SEO from './components/SEO';
import { useApp } from './context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Award, MessageSquare, ArrowRight, Check, Anchor, Video } from 'lucide-react';

// Lazy loading the page views to optimize bundle chunking & load speed
const Portfolio = lazy(() => import('./components/Portfolio'));
const Services = lazy(() => import('./components/Services'));
const Pricing = lazy(() => import('./components/Pricing'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const FAQ = lazy(() => import('./components/FAQ'));
const DroneHUD = lazy(() => import('./components/DroneHUD'));

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
      {/* SEO & Document Head Metadata Manager */}
      <SEO />
      
      {/* PREMIUM BACKGROUND STRUCTURAL DOTS WATERMARK */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02] select-none">
        <div className="w-full h-full bg-[radial-gradient(#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        
        {/* GLASSMORPHISM VERTICAL FLOATING SIDEBAR (MD/LG SCREEN PREFERENCE) */}
        <VerticalSidebar />

        {/* SITE VIEWS ROUTER */}
        <main className="flex-grow pt-4 pb-24 px-4 md:pt-6 md:pb-6 md:pl-24 md:pr-8 transition-all duration-300">
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

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: "1000px" }}>
                        {t.whyChooseUs.items.map((item, i) => (
                          <motion.div 
                            key={i} 
                            whileHover={{ 
                              y: -8, 
                              scale: 1.03, 
                              borderColor: "rgba(255,107,0,0.35)", 
                              boxShadow: "0 22px 45px rgba(0,0,0,0.55), 0 0 25px rgba(255,107,0,0.06)" 
                            }}
                            transition={{ type: "spring", stiffness: 350, damping: 20 }}
                            className="p-6 rounded-lg bg-neutral-950 border border-white/5 cursor-pointer"
                          >
                            <span className="font-mono text-xs text-brand-orange font-bold font-mono">0{i+1}//</span>
                            <h3 className="text-sm font-display font-black text-white uppercase mt-4 mb-2 tracking-wider">
                              {item.title}
                            </h3>
                            <p className="text-xs text-neutral-400 leading-relaxed font-sans font-light">
                              {item.desc}
                            </p>
                          </motion.div>
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

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1200px" }}>
                        {t.services.items.slice(0, 3).map((srv) => (
                          <motion.div 
                            key={srv.id} 
                            whileHover={{ 
                              y: -10, 
                              scale: 1.035, 
                              rotateX: 2,
                              rotateY: -2,
                              borderColor: "rgba(255,107,0,0.4)", 
                              boxShadow: "0 25px 50px rgba(0,0,0,0.65), 0 0 25px rgba(255,107,0,0.12)" 
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 18 }}
                            style={{ transformStyle: "preserve-3d" }}
                            className="p-6 rounded-xl bg-neutral-950 border border-white/5 flex flex-col justify-between cursor-pointer group aspect-[5/4]"
                          >
                            <div className="space-y-4" style={{ transform: "translateZ(30px)" }}>
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
                              className="mt-6 text-[10px] font-mono font-bold uppercase tracking-widest text-brand-orange flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer self-start"
                              style={{ transform: "translateZ(40px)" }}
                            >
                              <span>{lang === 'en' ? 'View Details' : 'Lihat Detail'}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* INTERACTIVE FPV DRONE RADAR & SIMULATOR PORT (Apple / DJI high fidelity) */}
                  <section className="py-24 bg-[#090909] border-b border-white/5 relative overflow-hidden">
                    {/* Glowing background grid ambient effects */}
                    <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-[9px] font-mono tracking-widest text-brand-orange uppercase font-bold">
                          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                          {lang === 'en' ? 'INTERACTIVE FLIGHT SIMULATION' : 'SIMULASI PENERBANGAN INTERAKTIF'}
                        </span>
                        <h2 className="font-display font-[900] text-3xl sm:text-4xl lg:text-5xl uppercase text-white mt-3 leading-none tracking-tight">
                          {lang === 'en' ? 'FPV LIVE FLIGHT DECK' : 'FLIGHT DECK DRONE INTERAKTIF'}
                        </h2>
                        <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                          {lang === 'en' 
                            ? 'Test our actual drone camera controls, altitude grids, ISO nodes, and live telemetry directly from your browser. Our crafts are built for extreme cinematic storytelling.'
                            : 'Uji langsung kontrol kamera drone, kisi ketinggian, modul ISO, dan telemetri penerbangan langsung dari browser Anda. Armada kami dirancang khusus untuk penceritaan ekstrem.'}
                        </p>
                      </div>

                      <Suspense fallback={
                        <div className="w-full h-[500px] flex items-center justify-center bg-neutral-950/40 rounded-3xl border border-white/5">
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-8 h-8 rounded-full border-2 border-brand-orange border-t-transparent animate-spin" />
                            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">// BOOTING DRONE HUD TELEMETRY...</span>
                          </div>
                        </div>
                      }>
                        <DroneHUD />
                      </Suspense>
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
                      <Portfolio isPreview={true} />
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

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
                        {t.process.steps.map((step, idx) => (
                          <motion.div 
                            key={idx} 
                            whileHover={{ 
                              y: -8, 
                              scale: 1.03, 
                              borderColor: "rgba(255,107,0,0.35)", 
                              boxShadow: "0 20px 40px rgba(0,0,0,0.55), 0 0 20px rgba(255,107,0,0.05)" 
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative p-7 rounded-lg bg-neutral-950 border border-white/5 flex flex-col justify-between cursor-pointer"
                          >
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
                          </motion.div>
                        ))}
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto font-sans" style={{ perspective: "1000px" }}>
                        {testimonials.map((test) => (
                          <motion.div 
                            key={test.id} 
                            whileHover={{ 
                              y: -8, 
                              scale: 1.025, 
                              borderColor: "rgba(255,107,0,0.35)", 
                              boxShadow: "0 22px 45px rgba(0,0,0,0.55), 0 0 22px rgba(255,107,0,0.06)" 
                            }}
                            transition={{ type: "spring", stiffness: 320, damping: 20 }}
                            className="p-6 rounded-lg bg-neutral-950 border border-white/5 space-y-6 relative cursor-pointer"
                          >
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
                          </motion.div>
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

              <Suspense fallback={
                <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
                  <div className="w-10 h-10 rounded-full border-2 border-[#2D2D2D] border-t-[#FF6B00] animate-spin shadow-[0_0_15px_rgba(255,107,0,0.2)]" />
                  <p className="text-[10px] font-mono tracking-widest text-[#FF8C42] uppercase animate-pulse">
                    {lang === 'en' ? '// SYNCING SECURE NODE...' : '// MENYELARASKAN PORTAL...'}
                  </p>
                </div>
              }>
                {/* ABOUT TAB PAGE VIEW */}
                {currentPage === 'about' && <About />}

                {/* SERVICES TAB PAGE VIEW */}
                {currentPage === 'services' && <Services />}

                {/* WORKS TAB PAGE VIEW */}
                {currentPage === 'works' && <Portfolio />}

                {/* PRICING TAB PAGE VIEW */}
                {currentPage === 'pricing' && <Pricing />}

                {/* FAQ TAB PAGE VIEW */}
                {currentPage === 'faq' && <FAQ />}

                {/* CONTACT TAB PAGE VIEW */}
                {currentPage === 'contact' && <Contact />}
              </Suspense>

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
