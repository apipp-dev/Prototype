import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { Check, Info, Sparkles, Send, Sliders, DollarSign, ListFilter, HelpCircle, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const { t, lang, setCurrentPage } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Interactive budget estimator calculator state
  const [graduantsCount, setGraduantsCount] = useState<number>(5);
  const [shootingDays, setShootingDays] = useState<number>(1);
  const [includeDrone, setIncludeDrone] = useState<boolean>(false);
  const [droneType, setDroneType] = useState<'standard' | 'fpv'>('standard');
  const [postAddons, setPostAddons] = useState({
    colorGrading: false,
    soundDesign: false,
    fastDelivery: false,
    rawFootage: false
  });

  // Filters for Packages: Graduation, Event, Travel, Commercial, Drone, Post Production
  const filtersList = [
    { id: 'all', label: lang === 'en' ? 'All Packages' : 'Semua Paket' },
    { id: 'graduation', label: lang === 'en' ? 'Graduation' : 'Wisuda' },
    { id: 'event', label: lang === 'en' ? 'Event' : 'Acara' },
    { id: 'travel', label: lang === 'en' ? 'Travel' : 'Perjalanan' },
    { id: 'commercial', label: lang === 'en' ? 'Commercial' : 'Komersial' }
  ];

  // Dynamic packages mapping based on selected filter
  const allPackages = t.pricing.packages;
  const filteredPackages = activeCategory === 'all'
    ? allPackages
    : allPackages.filter(pkg => {
        if (activeCategory === 'graduation') return pkg.id === 'pr-grad';
        if (activeCategory === 'event') return pkg.id === 'pr-event';
        if (activeCategory === 'travel') return pkg.id === 'pr-travel';
        if (activeCategory === 'commercial') return pkg.id === 'pr-ads';
        return true;
      });

  // Calculate dynamic custom project draft budget estimates
  const baseDayRate = 4500000; // Rp 4.5M base day rate for video crew
  const calculateEstimate = () => {
    let price = shootingDays * baseDayRate;
    
    // Graduant scaling if any
    if (graduantsCount > 5) {
      price += (graduantsCount - 5) * 150000; // Rp 150k add-on per graduant
    }
    
    // Add drone flights
    if (includeDrone) {
      if (droneType === 'fpv') {
        price += 3500000; // Rp 3.5M high risk FPV pilot rate
      } else {
        price += 1800000; // Rp 1.8M standard aerial
      }
    }
    
    // Add post add-ons
    if (postAddons.colorGrading) price += 1500000;
    if (postAddons.soundDesign) price += 1000000;
    if (postAddons.fastDelivery) price += 2000000;
    if (postAddons.rawFootage) price += 1200000;

    return price;
  };

  const formattedEstimate = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-[#090909] overflow-hidden border-t border-white/5">
      
      {/* Background spot spotlights */}
      <div className="absolute top-1/4 left-1/10 w-[250px] h-[250px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[200px] h-[200px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-10 h-[1.5px] bg-brand-orange"></span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-orange font-mono">
              {lang === 'en' ? 'TRANSPARENT VALUE' : 'NILAI TRANSPARAN'}
            </span>
          </div>
          <h2 className="font-display font-[900] text-4xl sm:text-5xl uppercase tracking-tight text-white">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-sm text-neutral-400 font-sans tracking-wide">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* PACKAGE FILTER CATEGORY BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 max-w-2xl mx-auto p-1.5 bg-neutral-950 rounded-xl border border-white/5">
          {filtersList.map((f) => {
            const isActive = activeCategory === f.id;
            return (
              <button
                id={`price-filter-${f.id}`}
                key={f.id}
                onClick={() => setActiveCategory(f.id)}
                className={`px-4 py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'bg-brand-orange text-white shadow-[0_0_15px_rgba(255,107,0,0.35)]'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* PRICING CARDS MAPPING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pkg) => {
              const isPopular = pkg.isPopular;
              return (
                <motion.div
                  id={`pricing-card-${pkg.id}`}
                  layout
                  key={pkg.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`relative p-6 rounded-xl bg-neutral-950 border flex flex-col justify-between group transition-all duration-300 ${
                    isPopular
                      ? 'border-brand-orange/60 shadow-[0_0_30px_rgba(255,107,0,0.15)] scale-102 lg:-translate-y-2'
                      : 'border-white/5 hover:border-white/10'
                  }`}
                >
                  {/* Popular Floating Tag */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-white" />
                      <span>{t.pricing.mostPopular}</span>
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Header info */}
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block tracking-wider">
                        // {lang === 'en' ? 'PRODUCTION PLAN' : 'RENCANA PRODUKSI'}
                      </span>
                      <h3 className="font-display font-black text-lg text-white uppercase tracking-tight mt-1">
                        {pkg.name}
                      </h3>
                      <p className="text-[11px] text-neutral-400 mt-2 font-sans font-light leading-relaxed line-clamp-2">
                        {pkg.description}
                      </p>
                    </div>

                    {/* Price Label */}
                    <div className="border-y border-white/5 py-4">
                      <span className="font-display font-black text-3xl text-brand-orange tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-[9px] font-mono text-neutral-500 uppercase block mt-1">
                        {pkg.priceDetail}
                      </span>
                    </div>

                    {/* Bullet features */}
                    <ul className="space-y-3 font-sans">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300 font-light">
                          <Check className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing Book Action CTA */}
                  <div className="pt-8 space-y-3">
                    <button
                      id={`book-pack-btn-${pkg.id}`}
                      onClick={() => setCurrentPage('contact')}
                      className={`w-full py-3 rounded text-center text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                        isPopular
                          ? 'bg-brand-orange text-white hover:bg-brand-orange/90 shadow-[0_0_15px_rgba(255,107,0,0.3)]'
                          : 'bg-neutral-900 text-neutral-200 hover:bg-neutral-850 border border-white/5 hover:border-white/10'
                      }`}
                    >
                      {lang === 'en' ? 'ENQUIRE PACKAGE' : 'PESAN PAKET INI'}
                    </button>
                    <span className="block text-[9px] font-mono text-neutral-500 text-center uppercase tracking-widest">
                      {t.pricing.idealFor}: {pkg.idealFor}
                    </span>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* DYNAMIC RETRO/LINEAR STYLE BUDGET CALCULATOR (Aesthetic interactive element) */}
        <div className="p-8 md:p-12 rounded-xl bg-neutral-950 border border-white/5 shadow-2xl space-y-8 relative">
          
          {/* Subtle logo vector watermark */}
          <div className="absolute top-8 right-8 font-mono text-[9px] text-[#222222] select-none tracking-widest hidden md:block">
            SANTT // DYNAMIC ESTIMATOR V4.0
          </div>

          <div>
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest block">
              // Custom Spec Configurator
            </span>
            <h3 className="font-display font-[900] text-xl md:text-2xl uppercase tracking-tight text-white mt-1">
              {lang === 'en' ? 'INTERACTIVE BUDGET ESTIMATOR' : 'KALKULATOR ESTIMASI ANGGARAN'}
            </h3>
            <p className="text-xs text-neutral-400 font-sans tracking-wide mt-1">
              {lang === 'en' 
                ? 'Scale your workforce, equipment payload, and delivery pace to get instant estimated budgets transparently.'
                : 'Sesuaikan jumlah kru, paket drone, dan kecepatan draf untuk mendapatkan estimasi anggaran instan secara transparan.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 border-t border-white/5">
            
            {/* Left sliders and selections (8 columns width) */}
            <div className="lg:col-span-8 space-y-6 font-sans">
              
              {/* Slider 1: Shooting Days */}
              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-300 font-medium uppercase font-mono tracking-wider">
                    {lang === 'en' ? '1. Shooting Days Coverage' : '1. Durasi Liputan Pengambilan Gambar'}
                  </span>
                  <span className="text-brand-orange font-bold font-mono">
                    {shootingDays} {shootingDays === 1 ? (lang === 'en' ? 'DAY' : 'HARI') : (lang === 'en' ? 'DAYS' : 'HARI')}
                  </span>
                </div>
                <input
                  id="budget-calc-days-slider"
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={shootingDays}
                  onChange={(e) => setShootingDays(parseInt(e.target.value))}
                  className="w-full accent-brand-orange h-1.5 bg-neutral-900 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 2: Graduants scaling if any */}
              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-300 font-medium uppercase font-mono tracking-wider">
                    {lang === 'en' ? '2. Total Graduants/Grup Size (Wisuda Only Addon)' : '2. Jumlah Peserta Grup Wisuda (Tambahan)'}
                  </span>
                  <span className="text-brand-orange font-bold font-mono">
                    {graduantsCount} {lang === 'en' ? 'PEOPLE' : 'ORANG'}
                  </span>
                </div>
                <input
                  id="budget-calc-people-slider"
                  type="range"
                  min="3"
                  max="35"
                  step="1"
                  value={graduantsCount}
                  onChange={(e) => setGraduantsCount(parseInt(e.target.value))}
                  className="w-full accent-brand-orange h-1.5 bg-neutral-900 rounded-lg cursor-pointer"
                />
              </div>

              {/* Toggle 1: Include Drone Flight */}
              <div className="p-4 rounded-lg bg-neutral-900/60 border border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <div className="sm:col-span-1">
                  <label className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-neutral-300 cursor-pointer">
                    <input
                      id="budget-calc-drone-toggle"
                      type="checkbox"
                      checked={includeDrone}
                      onChange={(e) => setIncludeDrone(e.target.checked)}
                      className="accent-brand-orange w-4 h-4 rounded cursor-pointer"
                    />
                    <span>{lang === 'en' ? '3. Aerial Drone' : '3. Penerbangan Drone'}</span>
                  </label>
                </div>

                {includeDrone && (
                  <div className="sm:col-span-2 flex gap-2">
                    <button
                      id="drone-type-standard"
                      onClick={() => setDroneType('standard')}
                      className={`flex-1 py-1.5 text-[9px] font-bold uppercase rounded border transition-all cursor-pointer ${
                        droneType === 'standard'
                          ? 'bg-brand-orange/15 border-brand-orange text-brand-orange'
                          : 'bg-neutral-950 border-white/5 text-neutral-400'
                      }`}
                    >
                      {lang === 'en' ? 'Standard UHD Drone' : 'Drone Udara Standar'}
                    </button>
                    <button
                      id="drone-type-fpv"
                      onClick={() => setDroneType('fpv')}
                      className={`flex-1 py-1.5 text-[9px] font-bold uppercase rounded border transition-all cursor-pointer ${
                        droneType === 'fpv'
                          ? 'bg-brand-orange/15 border-brand-orange text-brand-orange'
                          : 'bg-neutral-950 border-white/5 text-neutral-400'
                      }`}
                    >
                      {lang === 'en' ? 'Kinetic FPV Chase' : 'Penerbangan FPV Kecepatan'}
                    </button>
                  </div>
                )}
              </div>

              {/* Checkboxes: Post Production Addons */}
              <div className="space-y-3">
                <span className="text-neutral-400 font-medium uppercase font-mono text-[10px] tracking-wider block">
                  {lang === 'en' ? '4. Atmospheric Post-Production Addons' : '4. Tambahan Pasca-Produksi'}
                </span>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <label className="p-3 bg-neutral-900/40 border border-white/5 hover:border-brand-orange/20 rounded flex items-center gap-2.5 text-xs text-neutral-300 cursor-pointer transition-colors">
                    <input
                      id="addon-color-grading"
                      type="checkbox"
                      checked={postAddons.colorGrading}
                      onChange={(e) => setPostAddons({ ...postAddons, colorGrading: e.target.checked })}
                      className="accent-brand-orange w-3.5 h-3.5"
                    />
                    <span>{lang === 'en' ? 'DaVinci Color' : 'DaVinci Color'}</span>
                  </label>

                  <label className="p-3 bg-neutral-900/40 border border-white/5 hover:border-brand-orange/20 rounded flex items-center gap-2.5 text-xs text-neutral-300 cursor-pointer transition-colors">
                    <input
                      id="addon-sound-design"
                      type="checkbox"
                      checked={postAddons.soundDesign}
                      onChange={(e) => setPostAddons({ ...postAddons, soundDesign: e.target.checked })}
                      className="accent-brand-orange w-3.5 h-3.5"
                    />
                    <span>{lang === 'en' ? 'Foley & SFX' : 'Foley & SFX'}</span>
                  </label>

                  <label className="p-3 bg-neutral-900/40 border border-white/5 hover:border-brand-orange/20 rounded flex items-center gap-2.5 text-xs text-neutral-300 cursor-pointer transition-colors">
                    <input
                      id="addon-fast-delivery"
                      type="checkbox"
                      checked={postAddons.fastDelivery}
                      onChange={(e) => setPostAddons({ ...postAddons, fastDelivery: e.target.checked })}
                      className="accent-brand-orange w-3.5 h-3.5"
                    />
                    <span>{lang === 'en' ? 'Express Delivery' : 'Express 5 Hari'}</span>
                  </label>

                  <label className="p-3 bg-neutral-900/40 border border-white/5 hover:border-brand-orange/20 rounded flex items-center gap-2.5 text-xs text-neutral-300 cursor-pointer transition-colors">
                    <input
                      id="addon-raw-footage"
                      type="checkbox"
                      checked={postAddons.rawFootage}
                      onChange={(e) => setPostAddons({ ...postAddons, rawFootage: e.target.checked })}
                      className="accent-brand-orange w-3.5 h-3.5"
                    />
                    <span>{lang === 'en' ? 'Raw Clips Supply' : 'Akses File Mentah'}</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Estimator Outcome Panel (4 columns width) */}
            <div className="lg:col-span-4 p-6 rounded-lg bg-neutral-900/40 border border-brand-orange/20 text-center space-y-6">
              
              <div>
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                  // {lang === 'en' ? 'ESTIMATED TOTAL' : 'TOTAL ESTIMASI'}
                </span>
                <div className="font-display font-[900] text-3xl sm:text-4xl text-brand-orange tracking-tight block mt-1">
                  {formattedEstimate(calculateEstimate())}
                </div>
                <span className="text-[10px] font-mono text-neutral-400 mt-2 block">
                  {lang === 'en' ? '*Subject to project complexity' : '*Disesuaikan dengan kesulitan lapangan'}
                </span>
              </div>

              <div className="space-y-4 border-t border-white/5 pt-4 text-left">
                <div className="flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-neutral-400 leading-normal">
                    {lang === 'en' 
                      ? 'Features premium LUTs grading, optimized sound synchronization, and private digital downloads as standard.'
                      : 'Sudah termasuk grading warna LUTs premium, sinkronisasi suara teroptimasi, dan akses galeri digital sebagai standar.'}
                  </p>
                </div>

                <button
                  id="estimator-submit-btn"
                  onClick={() => setCurrentPage('contact')}
                  className="w-full py-3 bg-brand-orange hover:bg-brand-orange/95 text-white text-[10px] font-bold uppercase tracking-widest rounded transition-all cursor-pointer shadow-[0_0_15px_rgba(255,107,0,0.25)] flex items-center justify-center gap-2"
                >
                  <span>{lang === 'en' ? 'SUBMIT THIS SPEC CONFIGURE' : 'KIRIM KONFIGURASI SPESIFIKASI'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
