import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { Play, X, Calendar, User, Clock, Compass, HelpCircle, Film, Camera } from 'lucide-react';

export default function Portfolio() {
  const { t, lang } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeVideoItem, setActiveVideoItem] = useState<any | null>(null);

  // High end portfolio works with specific Aceh and Sabang focal points
  const items = [
    {
      id: 'work-grad-1',
      title: lang === 'en' ? 'Unsyiah Pride Milestone' : 'Wisuda Kebanggaan Unsyiah',
      category: 'graduation',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-supercar-driving-through-the-city-at-night-42289-large.mp4',
      client: 'Unsyiah Graduate Collective',
      duration: '02:15',
      year: '2026',
      description: lang === 'en' 
        ? 'A pristine high-contrast graduation film set against historical landmarks in Banda Aceh, detailing genuine celebration, high-fives and emotional family hugs.'
        : 'Film kelulusan kontras tinggi berlatar belakang landmark bersejarah di Banda Aceh, menceritakan tawa tulus serta pelukan keluarga yang emosional.'
    },
    {
      id: 'work-travel-1',
      title: lang === 'en' ? 'Sumatra Ocean Odyssey: Sabang' : 'Petualangan Samudra: Sabang',
      category: 'travel',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-forest-and-mountains-in-winter-3559-large.mp4',
      client: 'Aceh Tourism Board',
      duration: '03:30',
      year: '2026',
      description: lang === 'en' 
        ? 'A dynamic FPV flight documentary detailing white sands in Iboih beach, spectacular over-water drone runs, and tropical sunset visuals in Pulau Weh peaks.'
        : 'Dokumenter penerbangan FPV dinamis yang merinci pasir putih di pantai Iboih, lintasan drone di atas air, dan visual matahari terbenam tropis di Pulau Weh.'
    },
    {
      id: 'work-event-1',
      title: lang === 'en' ? 'Aceh Cultural Summit Highlights' : 'Sorotan Aceh Cultural Summit',
      category: 'event',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-rock-band-performing-on-stage-with-smoky-lights-42296-large.mp4',
      client: 'Banda Aceh Arts Department',
      duration: '04:10',
      year: '2025',
      description: lang === 'en'
        ? 'Multi-angle high-paced coverage capturing the opening night performance, immersive traditional sounds, and vibrant crowds with cinematic styling.'
        : 'Liputan multi-sudut berkecepatan tinggi yang menangkap pertunjukan malam pembukaan, suara tradisional, dan kerumunan pengunjung yang bersemangat.'
    },
    {
      id: 'work-comm-1',
      title: lang === 'en' ? 'Sapan Espresso Campaign' : 'Kampanye Kopi Sapan Espresso',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-playing-retro-arcade-games-with-neon-lights-40097-large.mp4',
      client: 'Sapan Coffee House',
      duration: '01:00',
      year: '2026',
      description: lang === 'en'
        ? 'An Apple-inspired product advertisement featuring macro close-ups, steam flow in dark contrast, and precise orange color grades showcasing quality coffee beans.'
        : 'Iklan produk yang terinspirasi dari Apple dengan detail makro, kepulan asap kopi dalam nuansa kontras gelap, dan gradasi warna jingga presisi.'
    },
    {
      id: 'work-drone-1',
      title: lang === 'en' ? 'Weh Island FPV Reef Run' : 'FPV Lintasan Terumbu Pulau Weh',
      category: 'drone',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-forest-and-mountains-in-winter-3559-large.mp4',
      client: 'Ocean Conservations Sumatra',
      duration: '02:45',
      year: '2025',
      description: lang === 'en'
        ? 'Extreme low-altitude high-speed drone chases cutting centimeter-close to reefs, cliffs and active blue currents.'
        : 'Penerbangan drone FPV kecepatan ekstrem di ketinggian sangat rendah, melaju tipis di atas terumbu karang, tebing pulau, dan arus laut biru.'
    },
    {
      id: 'work-comm-2',
      title: lang === 'en' ? 'Aceh Besar Agro-Core Profiler' : 'Profil Agro-Core Aceh Besar',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-working-with-glow-in-the-dark-glass-41716-large.mp4',
      client: 'AgroCore Corporation Sumatra',
      duration: '03:00',
      year: '2026',
      description: lang === 'en'
        ? 'A high-impact corporate documentary highlighting smart agribusiness installations, local employment circles, and automated drone land-mapping.'
        : 'Dokumenter korporat berdampak tinggi yang menonjolkan instalasi agribisnis pintar, ketenagakerjaan lokal, dan pemetaan lahan drone otomatis.'
    }
  ];

  // Filter items based on active click category
  const filteredItems = selectedCategory === 'all'
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <section id="works" className="relative py-24 md:py-32 bg-[#0D0D0D] overflow-hidden">
      
      {/* Background spot */}
      <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-10 h-[1.5px] bg-brand-orange"></span>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-orange font-mono">
                {lang === 'en' ? 'PORTFOLIO ARCHIVE' : 'ARSIP PORTOFOLIO'}
              </span>
            </div>
            <h2 className="font-display font-[900] text-4xl sm:text-5xl uppercase tracking-tight text-white leading-none">
              {t.works.title}
            </h2>
            <p className="mt-3 text-sm text-neutral-400 font-sans tracking-wide">
              {t.works.subtitle}
            </p>
          </div>

          {/* DYNAMIC CATEGORY BUTTON RAIL (All, Graduation, Event, Travel, Commercial, Drone) */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-neutral-950 rounded-lg border border-white/5 self-start">
            {Object.entries(t.works.categories).map(([key, label]) => {
              const isActive = selectedCategory === key;
              return (
                <button
                  id={`cat-btn-${key}`}
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                    isActive
                      ? 'bg-brand-orange text-white'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* MASONRY INTERACTIVE GALLERY GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                id={`portfolio-card-${item.id}`}
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveVideoItem(item)}
                className="group relative rounded-xl overflow-hidden bg-neutral-950 border border-white/5 hover:border-brand-orange/45 hover:shadow-[0_0_25px_rgba(255,107,0,0.15)] transition-all cursor-pointer aspect-[4/3] flex flex-col justify-end"
              >
                {/* Image backdrop */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                </div>

                {/* Interactive Play/Expand Badge */}
                <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Play className="w-4 h-4 fill-white text-white translate-x-0.5" />
                </div>

                {/* Text specs on the bottom */}
                <div className="relative z-20 p-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded border border-brand-orange/20">
                      {item.category}
                    </span>
                    <span className="font-mono text-[9px] text-neutral-400">
                      {item.duration} MINS
                    </span>
                  </div>
                  <h3 className="font-display font-black text-lg text-white uppercase tracking-tight group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-400 font-sans line-clamp-1 font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LIGHTBOX MODAL WITH VIDEO SIMULATION */}
        <AnimatePresence>
          {activeVideoItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-md flex items-center justify-center p-4"
            >
              {/* Tap backdrop to close */}
              <div
                className="absolute inset-0 z-0 cursor-pointer"
                onClick={() => setActiveVideoItem(null)}
              />

              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative z-10 w-full max-w-4xl bg-neutral-950 border border-white/10 rounded-xl overflow-hidden shadow-2xl space-y-6"
              >
                {/* Close Button top right */}
                <button
                  id="lightbox-close-btn"
                  onClick={() => setActiveVideoItem(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-neutral-800 border border-white/10 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Looping Cinema Player Container */}
                <div className="relative aspect-video w-full bg-black border-b border-white/5">
                  <video
                    autoPlay
                    loop
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                    src={activeVideoItem.videoUrl}
                    poster={activeVideoItem.image}
                  />
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 flex items-center gap-2 text-[10px] font-mono uppercase text-brand-orange">
                    <Film className="w-3.5 h-3.5" />
                    <span>8K ARRI LOG WORKFLOW IN MOTION</span>
                  </div>
                </div>

                {/* Narrative Details Info */}
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
                  
                  {/* Left Specs Description Column */}
                  <div className="md:col-span-2 space-y-3">
                    <span className="font-mono text-[9px] text-brand-orange uppercase tracking-wider block font-bold">
                      // {lang === 'en' ? 'DIRECTORS SUMMARY' : 'KAIL PINJAUAN DIREKTUR'}
                    </span>
                    <h3 className="font-display font-[900] text-2xl text-white uppercase tracking-tight">
                      {activeVideoItem.title}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed font-light font-sans tracking-wide">
                      {activeVideoItem.description}
                    </p>
                  </div>

                  {/* Right Technical Specs Column */}
                  <div className="p-4 rounded bg-[#090909] border border-white/5 space-y-3 font-mono text-[10px]">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-neutral-500 uppercase">{lang === 'en' ? 'CLIENT' : 'KLIEN'}</span>
                      <span className="text-neutral-200 text-right font-semibold">{activeVideoItem.client}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-neutral-500 uppercase">{lang === 'en' ? 'YEAR' : 'TAHUN'}</span>
                      <span className="text-neutral-200 text-right">{activeVideoItem.year}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-neutral-500 uppercase">{lang === 'en' ? 'DURATION' : 'DURASI'}</span>
                      <span className="text-neutral-200 text-right">{activeVideoItem.duration} MINS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500 uppercase">{lang === 'en' ? 'FORMAT' : 'FORMAT'}</span>
                      <span className="text-brand-orange text-right">8K PRORES RAW</span>
                    </div>
                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
