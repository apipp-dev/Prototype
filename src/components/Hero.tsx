import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { Play, ArrowRight, Video, Award, Anchor, MapPin } from 'lucide-react';

export default function Hero() {
  const { setCurrentPage, t } = useApp();
  const [videoLoaded, setVideoLoaded] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <header
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]"
    >
      {/* CINEMATIC LOOPING BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/40 via-[#0D0D0D]/70 to-[#0D0D0D] z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0D0D0D]/90 z-15" />
        
        {/* We use a stunning, highly optimized looping drone clip mirroring Aceh coastline & cliffs */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-35' : 'opacity-10'
          }`}
          src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-forest-and-mountains-in-winter-3559-large.mp4"
          poster="https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop"
        />
      </div>

      {/* METADATA HIGHLIGHT (A24 / Linear styling vibe) */}
      <div className="absolute top-28 left-4 sm:left-6 lg:left-8 z-20 hidden md:flex items-center gap-3 font-mono text-[10px] text-neutral-400 tracking-wider">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          {t.meta.brandName} DIRECTORS LOG
        </span>
        <span className="text-neutral-700">//</span>
        <span>LAT: 5.54829° N, LON: 95.32375° E</span>
        <span className="text-neutral-700">//</span>
        <span className="text-brand-orange uppercase">{t.meta.coverage}</span>
      </div>

      {/* DRONE TEXT OVERLAY ON TOP-RIGHT */}
      <div className="absolute top-28 right-4 sm:right-6 lg:right-8 z-20 hidden md:flex items-center gap-2 font-mono text-[9px] text-neutral-500 uppercase tracking-widest backdrop-blur-md bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
        <Anchor className="w-3 h-3 text-brand-orange" />
        <span>{t.hero.droneTag}</span>
      </div>

      {/* MAIN CONTAINER FOR COPYWRITING */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Epic Main Header with Montserrat Typography */}
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-none">
            {t.hero.title.split('. ').map((part, index, arr) => (
              <span key={index} className="block">
                {part.replace('.', '')}
                {index < arr.length - 1 && <span className="text-brand-orange font-light">.</span>}
              </span>
            ))}
          </h1>

          {/* Balanced Subheadline */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-neutral-300 font-sans font-light leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* Interactive Calls to action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              id="hero-book-now-cta"
              onClick={() => setCurrentPage('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-brand-orange/95 text-white rounded text-xs font-extrabold uppercase tracking-widest transition-all shadow-[0_0_25px_rgba(255,107,0,0.45)] hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2 group"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              id="hero-view-portfolio-cta"
              onClick={() => setCurrentPage('works')}
              className="w-full sm:w-auto px-8 py-4 bg-neutral-950 hover:bg-neutral-900 text-white rounded text-xs font-extrabold uppercase tracking-widest transition-all border border-white/10 hover:border-brand-orange/50 cursor-pointer flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
            >
              <Play className="w-3.5 h-3.5 text-brand-orange" />
              {t.hero.ctaSecondary}
            </button>
          </div>
        </motion.div>
      </div>

      {/* HERO FOOTER SUBTLE BADGES ( DJI / Apple Style ) */}
      <div className="absolute bottom-12 left-0 right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden lg:flex justify-between items-center text-neutral-500 font-mono text-[9px] uppercase tracking-widest">
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-brand-orange/75" />
            <span>Multi-Format Campaign Master</span>
          </div>
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-brand-orange/75" />
            <span>A24 Atmos Workflow</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-brand-orange/80" />
          <span>OPERATIONS: {t.meta.coverage}</span>
        </div>
      </div>
    </header>
  );
}
