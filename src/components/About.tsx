import React, { useState } from 'react';
import { equipmentList } from '../data';
import { Sliders, Award, Layers, Sparkles, Check, ChevronRight, Compass, Shield, Zap, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';

export default function About() {
  const { t, lang } = useApp();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const stats = [
    { value: '250+', label: lang === 'en' ? 'Projects Delivered' : 'Proyek Selesai' },
    { value: '8K', label: 'UHD Raw Resolution' },
    { value: '3', label: 'Coverage Hubs' },
    { value: '100%', label: lang === 'en' ? 'Client Trust' : 'Kepercayaan Klien' },
  ];

  // Map icons to corresponding value pillars
  const valueIcons = [
    <Sliders className="w-5 h-5 text-brand-orange" />,
    <Sparkles className="w-5 h-5 text-brand-orange" />,
    <Compass className="w-5 h-5 text-brand-orange" />
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#090909] overflow-hidden border-t border-white/5">
      
      {/* Background radial spotlight */}
      <div className="absolute top-1/4 right-1/10 w-[300px] h-[300px] bg-brand-orange/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-[200px] h-[200px] bg-white/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UPPER HEADLINE */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-10 h-[1.5px] bg-brand-orange"></span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-orange font-mono">
              {lang === 'en' ? 'CREATIVE MINDSET' : 'POLA PIKIR KREATIF'}
            </span>
          </div>
          <h2 className="font-display font-[900] text-4xl sm:text-5xl uppercase tracking-tight text-white leading-none">
            {t.about.title}
          </h2>
          <p className="mt-4 text-sm text-neutral-400 font-sans tracking-wide">
            {t.about.subtitle}
          </p>
        </div>

        {/* SECTION 1: WHO WE ARE (APPLE / SONY STYLE TWO-COLUMN GRID) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight">
              {t.about.whoWeAre.title}
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed font-light whitespace-pre-line">
              {t.about.whoWeAre.desc}
            </p>

            {/* Vision & Mission Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="p-6 rounded-lg bg-neutral-950 border border-white/5">
                <span className="text-[10px] font-mono text-brand-orange uppercase block mb-1">
                  // {t.about.vision.title}
                </span>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {t.about.vision.desc}
                </p>
              </div>

              <div className="p-6 rounded-lg bg-neutral-950 border border-white/5">
                <span className="text-[10px] font-mono text-brand-orange uppercase block mb-1">
                  // {t.about.mission.title}
                </span>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed whitespace-pre-line">
                  {t.about.mission.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Stats Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-lg bg-neutral-950 border border-white/5 relative overflow-hidden group hover:border-brand-orange/30 transition-all duration-300 shadow-xl"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-orange/15 transition-colors duration-300" />
                <span className="font-display font-[900] text-3xl sm:text-5xl text-brand-orange tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mt-2 leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}

            {/* Coverage Dispatch */}
            <div className="col-span-2 p-6 rounded-lg bg-gradient-to-r from-neutral-950 to-neutral-900 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span className="text-[10px] font-mono text-brand-orange uppercase tracking-wider">
                  {lang === 'en' ? 'ACTIVE GEOGRAPHY' : 'GEOGRAFI AKTIF'}
                </span>
              </div>
              <h4 className="text-xs font-display font-extrabold text-white uppercase mb-2">
                {t.about.coverage.title}
              </h4>
              <p className="text-xs text-neutral-400 font-sans mb-3">{t.about.coverage.desc}</p>
              <ul className="space-y-1.5">
                {t.about.coverage.locations.map((loc, i) => (
                  <li key={i} className="text-xs text-neutral-300 flex items-center gap-2 font-sans font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* SECTION 2: VALUES / PILLARS */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-wider block mb-2">
              // {lang === 'en' ? 'OUR STANDARD' : 'STANDAR KAMI'}
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase">
              {t.about.values.title}
            </h3>
            <p className="text-xs text-neutral-400 mt-2">
              {t.about.values.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.values.items.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg bg-neutral-950 border border-white/5 hover:border-brand-orange/20 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded bg-brand-orange/10 border border-brand-orange/20 mb-6">
                  {valueIcons[idx] || <Shield className="w-5 h-5 text-brand-orange" />}
                </div>
                <h4 className="text-sm font-display font-extrabold text-white uppercase tracking-wider mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: THE SPEC INVENTORY VAULT (SONY / DJI THEME) */}
        <div className="p-8 md:p-12 rounded-xl bg-neutral-950 border border-white/5 shadow-2xl">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-6 border-b border-white/5">
            <div>
              <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest block">
                The Vault Specs //
              </span>
              <h3 className="font-display font-extrabold text-xl md:text-2xl uppercase tracking-tight text-white mt-1">
                {lang === 'en' ? 'STUDIO CAMERA & LENS INVENTORY' : 'PERSENTASI KAMERA & DESAIN OPTIK'}
              </h3>
            </div>

            {/* Spec selector tabs */}
            <div className="flex flex-wrap gap-1.5 bg-[#090909] p-1.5 rounded-lg border border-white/5">
              {equipmentList.map((eq, idx) => (
                <button
                  key={eq.category}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded transition-all duration-300 cursor-pointer ${
                    activeCategoryIndex === idx
                      ? 'bg-brand-orange text-white shadow-[0_0_12px_rgba(255,107,0,0.4)]'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {eq.category}
                </button>
              ))}
            </div>
          </div>

          {/* Active spec items grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="wait">
              {equipmentList[activeCategoryIndex].items.map((item, idx) => (
                <motion.div
                  key={`${activeCategoryIndex}-${idx}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, delay: idx * 0.05 }}
                  className="p-5 rounded-lg bg-[#0F0F0F] border border-white/5 flex items-center justify-between hover:border-white/10 transition-colors"
                >
                  <span className="text-xs text-neutral-250 font-sans font-light leading-tight">
                    {item}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-brand-orange shrink-0 ml-2" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
