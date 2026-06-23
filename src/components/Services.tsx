import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { Check, ArrowRight, Play, Camera, Film, Send, Sparkles, Layers, ListFilter } from 'lucide-react';

export default function Services() {
  const { t, lang, setCurrentPage } = useApp();
  const [selectedServiceId, setSelectedServiceId] = useState<string>('serv-grad');

  // Let's retrieve current selected service data
  const currentService = t.services.items.find(item => item.id === selectedServiceId) || t.services.items[0];

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#0D0D0D] overflow-hidden border-t border-white/5">
      
      {/* Dynamic colored background light */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-10 h-[1.5px] bg-brand-orange"></span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-orange font-mono">
              {lang === 'en' ? 'OUR CAPABILITIES' : 'KEMAMPUAN UTAMA'}
            </span>
          </div>
          <h2 className="font-display font-[900] text-4xl sm:text-5xl uppercase tracking-tight text-white">
            {t.services.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans tracking-wide">
            {t.services.subtitle}
          </p>
        </div>

        {/* TWO COLUMN INTERACTIVE ARCHITECTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDEBAR: SERVICES NAVIGATION RAIL (30% width) */}
          <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-28 z-20">
            <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 mb-4 text-neutral-500 font-mono text-[10px] uppercase">
              <ListFilter className="w-3.5 h-3.5 text-brand-orange" />
              <span>{lang === 'en' ? 'Select Service Overview' : 'Pilih Detail Layanan'}</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {t.services.items.map((srv, idx) => {
                const isSelected = selectedServiceId === srv.id;
                return (
                  <button
                    id={`service-rail-${srv.id}`}
                    key={srv.id}
                    onClick={() => setSelectedServiceId(srv.id)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-neutral-950 border-brand-orange/60 text-white shadow-[0_0_15px_rgba(255,107,0,0.15)]'
                        : 'bg-neutral-950/40 border-white/5 text-neutral-400 hover:border-white/15 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-[10px] font-bold ${isSelected ? 'text-brand-orange' : 'text-neutral-600'}`}>
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                      <span className="text-xs sm:text-sm font-display font-bold uppercase tracking-wider">
                        {srv.title}
                      </span>
                    </div>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? 'text-brand-orange translate-x-1' : 'text-neutral-600 group-hover:translate-x-0.5'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT PANELS: DETAILED ACTIVE BREAKDOWN CARD (70% width) */}
          <div className="lg:col-span-8 bg-neutral-950 border border-white/5 rounded-xl overflow-hidden shadow-2xl relative">
            
            {/* Visual Header Spotlight */}
            <div className="h-1 bg-gradient-to-r from-brand-orange/45 via-brand-orange to-brand-orange/45" />

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedServiceId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 lg:p-10 space-y-8"
              >
                
                {/* Header Title with simple visual representation */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight">
                      {currentService.title}
                    </h3>
                    <p className="text-xs font-mono text-brand-orange uppercase tracking-wider mt-1.5">
                      SANTT PRODUCTION // {lang === 'en' ? 'SERVICE CODEX' : 'KODE LAYANAN'}
                    </p>
                  </div>

                  <button
                    id="service-cta-book-direct"
                    onClick={() => setCurrentPage('contact')}
                    className="self-start sm:self-center px-5 py-3 bg-brand-orange/10 hover:bg-brand-orange text-brand-orange hover:text-white text-[10px] font-bold uppercase tracking-widest rounded border border-brand-orange/30 transition-all cursor-pointer flex items-center gap-2 active:scale-95 shadow-[0_0_15px_rgba(255,107,0,0.1)]"
                  >
                    <span>{t.services.cta}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* OVERVIEW SECTION & IMAGE CONTAINER */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                      // {lang === 'en' ? 'Core Overview' : 'Tinjauan Utama'}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 font-sans tracking-wide leading-relaxed font-light">
                      {currentService.overview}
                    </p>
                  </div>

                  <div className="relative aspect-video rounded-lg overflow-hidden border border-white/5 bg-neutral-900 group shadow-md">
                    <img
                      src={currentService.sampleWork}
                      alt={currentService.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#0D0D0D]/20" />
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded text-[9px] font-mono tracking-widest uppercase text-brand-orange flex items-center gap-1.5">
                      <Camera className="w-3 h-3 text-brand-orange" />
                      <span>{lang === 'en' ? 'SAMPLE HARVEST' : 'PORTFOLIO UTAMA'}</span>
                    </div>
                  </div>
                </div>

                {/* DELIVERABLES BENTO BULLETINS */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    // {lang === 'en' ? 'Guaranteed Deliverables' : 'Aset Hasil Keluaran (Deliverables)'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentService.deliverables.map((del, i) => (
                      <div key={i} className="p-4 rounded bg-neutral-900/60 border border-white/5 flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                        <span className="text-xs text-neutral-300 font-sans leading-relaxed">
                          {del}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* STEP-BY-STEP SERVICE PRODUCTION PROCESS */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    // {lang === 'en' ? 'Specialized Process' : 'Alur Kerja Spesialis'}
                  </h4>
                  <div className="space-y-3.5">
                    {currentService.process.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="font-mono text-xs text-brand-orange font-bold px-2 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded h-fit shrink-0">
                          {lang === 'en' ? 'PHASE' : 'TAHAP'} 0{i + 1}
                        </div>
                        <p className="text-xs text-neutral-400 font-sans tracking-wide leading-relaxed">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
