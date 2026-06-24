import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { Check, Star, Sparkles, Send, HelpCircle, ArrowRight, ListFilter, Plus, FileText, Info } from 'lucide-react';

export default function Pricing() {
  const { lang, setCurrentPage } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Categories list
  const categories = [
    { id: 'all', label: lang === 'en' ? 'All Services' : 'Semua Layanan' },
    { id: 'graduation', label: lang === 'en' ? '01. Graduation' : '01. Wisuda' },
    { id: 'event', label: lang === 'en' ? '02. Event' : '02. Acara' },
    { id: 'travel', label: lang === 'en' ? '03. Travel' : '03. Perjalanan' },
    { id: 'umkm', label: lang === 'en' ? '04. UMKM' : '04. Konten UMKM' },
    { id: 'product', label: lang === 'en' ? '05. Product Ads' : '05. Iklan Produk' },
    { id: 'company', label: lang === 'en' ? '06. Corporate' : '06. Profil Bisnis' },
    { id: 'drone', label: lang === 'en' ? '07. Drone' : '07. Drone' },
    { id: 'post', label: lang === 'en' ? '08. Post Production' : '08. Jasa Editing' }
  ];

  // Raw data matching exactly the user prompt
  const packagesData = [
    // 01. Graduation & Farewell
    {
      category: 'graduation',
      sectionTitle: lang === 'en' ? '01. Graduation & Farewell Documentation' : '01. Dokumentasi Wisuda & Farewell',
      name: 'STARTER',
      price: 'Rp 150.000',
      features: [
        lang === 'en' ? '1 Hour Session' : '1 Jam Sesi',
        lang === 'en' ? '20 Edited Photos' : '20 Foto Edit',
        lang === 'en' ? 'All Selected High Quality Photos' : 'Semua Foto Hasil Seleksi',
        lang === 'en' ? '1 Location' : '1 Lokasi',
        lang === 'en' ? 'Estimated 1-3 Business Days Delivery' : 'Estimasi 1-3 Hari Kerja'
      ],
      isPopular: false
    },
    {
      category: 'graduation',
      sectionTitle: lang === 'en' ? '01. Graduation & Farewell Documentation' : '01. Dokumentasi Wisuda & Farewell',
      name: 'MOMENT',
      price: 'Rp 350.000',
      features: [
        lang === 'en' ? '2 Hours Session' : '2 Jam Sesi',
        lang === 'en' ? '40 Edited Photos' : '40 Foto Edit',
        lang === 'en' ? 'Includes Friends, Partners & Family' : 'Include Teman, Pasangan & Keluarga',
        lang === 'en' ? '1 Video Reel (15-30 Seconds)' : '1 Video Reel (15-30 Detik)',
        lang === 'en' ? 'All Selected High Quality Photos' : 'Semua Foto Hasil Seleksi',
        lang === 'en' ? 'Estimated 1-3 Business Days Delivery' : 'Estimasi 1-3 Hari Kerja'
      ],
      isPopular: true
    },
    {
      category: 'graduation',
      sectionTitle: lang === 'en' ? '01. Graduation & Farewell Documentation' : '01. Dokumentasi Wisuda & Farewell',
      name: 'LEGACY',
      price: 'Rp 650.000',
      features: [
        lang === 'en' ? '3 Hours Session' : '3 Jam Sesi',
        lang === 'en' ? '60 Edited Photos' : '60 Foto Edit',
        lang === 'en' ? 'Includes Friends, Besties, Partners & Family' : 'Include Teman, Sahabat, Pasangan & Keluarga',
        lang === 'en' ? '1 Cinematic Video (30-60 Seconds)' : '1 Cinematic Video (30-60 Detik)',
        lang === 'en' ? 'All Selected High Quality Photos' : 'Semua Foto Hasil Seleksi',
        lang === 'en' ? 'Estimated 2-4 Business Days Delivery' : 'Estimasi 2-4 Hari Kerja'
      ],
      isPopular: false
    },

    // 02. Event Documentation
    {
      category: 'event',
      sectionTitle: lang === 'en' ? '02. Event Documentation' : '02. Dokumentasi Event / Acara',
      sectionSubtitle: lang === 'en' ? 'Perfect for: Seminar, Workshop, Gathering, Competition, Community Event, School Event, Organization Event' : 'Cocok untuk: Seminar, Workshop, Gathering, Kompetisi, Acara Komunitas, Acara Sekolah, Acara Organisasi',
      name: 'ESSENTIAL',
      price: 'Rp 750.000',
      features: [
        lang === 'en' ? 'Up to 3 Hours Documentation' : 'Hingga 3 Jam Dokumentasi',
        lang === 'en' ? '1 Camera Unit' : '1 Kamera',
        lang === 'en' ? 'Highlight Video' : 'Highlight Video',
        lang === 'en' ? 'All Selected Files Delivered' : 'Semua File Hasil Seleksi'
      ],
      isPopular: false
    },
    {
      category: 'event',
      sectionTitle: lang === 'en' ? '02. Event Documentation' : '02. Dokumentasi Event / Acara',
      name: 'STANDARD',
      price: 'Rp 1.500.000',
      features: [
        lang === 'en' ? 'Up to 6 Hours Documentation' : 'Hingga 6 Jam Dokumentasi',
        lang === 'en' ? 'Camera + Aerial Drone Coverage' : 'Kamera + Drone',
        lang === 'en' ? 'Premium Highlight Video' : 'Highlight Video',
        lang === 'en' ? 'All Selected Files Delivered' : 'Semua File Hasil Seleksi'
      ],
      isPopular: true
    },
    {
      category: 'event',
      sectionTitle: lang === 'en' ? '02. Event Documentation' : '02. Dokumentasi Event / Acara',
      name: 'PREMIUM',
      price: 'Rp 3.000.000+',
      features: [
        lang === 'en' ? 'Full Event Documentation' : 'Full Event Documentation',
        lang === 'en' ? 'Camera + Aerial Drone Coverage' : 'Kamera + Drone',
        lang === 'en' ? 'Cinematic Aftermovie' : 'Cinematic Aftermovie',
        lang === 'en' ? 'Premium Highlight Video' : 'Highlight Video',
        lang === 'en' ? 'All Selected Files Delivered' : 'Semua File Hasil Seleksi'
      ],
      isPopular: false
    },

    // 03. Travel & Open Trip
    {
      category: 'travel',
      sectionTitle: lang === 'en' ? '03. Travel & Open Trip Documentation' : '03. Dokumentasi Travel & Open Trip',
      sectionSubtitle: lang === 'en' ? '📸 Photo + 🎥 Video + 🚁 Drone' : '📸 Foto + 🎥 Video + 🚁 Drone',
      name: 'EXPLORE',
      price: 'Rp 600.000',
      features: [
        lang === 'en' ? 'Up to 3 Hours Documentation' : 'Hingga 3 Jam Dokumentasi',
        lang === 'en' ? '40 Edited Photos' : '40 Foto Edit',
        lang === 'en' ? 'Highlight Reel' : 'Highlight Reel',
        lang === 'en' ? 'Drone Footage' : 'Drone Footage',
        lang === 'en' ? 'All Selected Files Delivered' : 'Semua File Hasil Seleksi'
      ],
      isPopular: false
    },
    {
      category: 'travel',
      sectionTitle: lang === 'en' ? '03. Travel & Open Trip Documentation' : '03. Dokumentasi Travel & Open Trip',
      name: 'JOURNEY',
      price: 'Rp 1.200.000',
      features: [
        lang === 'en' ? 'Up to 6 Hours Documentation' : 'Hingga 6 Jam Dokumentasi',
        lang === 'en' ? '80 Edited Photos' : '80 Foto Edit',
        lang === 'en' ? 'Cinematic Travel Video' : 'Cinematic Travel Video',
        lang === 'en' ? '2 Vertical Reels Video' : '2 Reels Vertikal',
        lang === 'en' ? 'Drone Footage' : 'Drone Footage',
        lang === 'en' ? 'All Selected Files Delivered' : 'Semua File Hasil Seleksi'
      ],
      isPopular: true
    },
    {
      category: 'travel',
      sectionTitle: lang === 'en' ? '03. Travel & Open Trip Documentation' : '03. Dokumentasi Travel & Open Trip',
      name: 'EXPEDITION',
      price: 'Rp 2.000.000',
      features: [
        lang === 'en' ? 'Full Day Documentation' : 'Full Day Documentation',
        lang === 'en' ? '120 Edited Photos' : '120 Foto Edit',
        lang === 'en' ? 'Epic Travel Film' : 'Travel Film',
        lang === 'en' ? 'Highlight Video' : 'Highlight Video',
        lang === 'en' ? '3 Vertical Reels Video' : '3 Reels Vertikal',
        lang === 'en' ? 'Drone Footage' : 'Drone Footage',
        lang === 'en' ? 'All Selected Files Delivered' : 'Semua File Hasil Seleksi'
      ],
      isPopular: false
    },

    // 04. UMKM Content Creation
    {
      category: 'umkm',
      sectionTitle: lang === 'en' ? '04. UMKM Content Creation' : '04. Pembuatan Konten UMKM',
      sectionSubtitle: lang === 'en' ? 'Perfect for: Coffee Shop, Food & Beverage, Barbershop, Homestay, Local Brand' : 'Cocok untuk: Coffee Shop, Food & Beverage, Barbershop, Homestay, Brand Lokal',
      name: 'STARTER',
      price: 'Rp 300.000',
      features: [
        lang === 'en' ? '1 Video Reel' : '1 Video Reels',
        lang === 'en' ? 'Duration 15-30 Seconds' : 'Durasi 15-30 Detik',
        lang === 'en' ? 'Vertical Format (9:16)' : 'Vertical Format',
        lang === 'en' ? 'Basic Editing & Sequencing' : 'Basic Editing'
      ],
      isPopular: false
    },
    {
      category: 'umkm',
      sectionTitle: lang === 'en' ? '04. UMKM Content Creation' : '04. Pembuatan Konten UMKM',
      name: 'GROWTH',
      price: 'Rp 700.000',
      features: [
        lang === 'en' ? '3 Video Reels' : '3 Video Reels',
        lang === 'en' ? 'Vertical Format (9:16)' : 'Vertical Format',
        lang === 'en' ? 'Cinematic Color Grading' : 'Color Grading',
        lang === 'en' ? 'Basic Motion Text overlays' : 'Basic Motion Text'
      ],
      isPopular: true
    },
    {
      category: 'umkm',
      sectionTitle: lang === 'en' ? '04. UMKM Content Creation' : '04. Pembuatan Konten UMKM',
      name: 'BUSINESS',
      price: 'Rp 1.200.000',
      features: [
        lang === 'en' ? '5 Video Reels' : '5 Video Reels',
        lang === 'en' ? 'Drone Footage included' : 'Drone Footage',
        lang === 'en' ? 'Animated Motion Text' : 'Motion Text',
        lang === 'en' ? 'Cinematic Color Grading' : 'Color Grading',
        lang === 'en' ? 'Vertical Format (9:16)' : 'Vertical Format'
      ],
      isPopular: false
    },

    // 05. Product Ads & Commercial Content
    {
      category: 'product',
      sectionTitle: lang === 'en' ? '05. Product Ads & Commercial Content' : '05. Iklan Produk & Konten Komersial',
      sectionSubtitle: lang === 'en' ? 'Perfect for: Shopee, TikTok Shop, Instagram, Affiliate Marketing' : 'Cocok untuk: Shopee, TikTok Shop, Instagram, Affiliate Marketing',
      name: 'PRODUCT SHOT',
      price: 'Rp 150.000',
      features: [
        lang === 'en' ? '5 Product Photos' : '5 Foto Produk',
        lang === 'en' ? 'Basic Retouch & Cleanup' : 'Basic Retouch',
        lang === 'en' ? 'High Resolution Deliverables' : 'High Resolution'
      ],
      isPopular: false
    },
    {
      category: 'product',
      sectionTitle: lang === 'en' ? '05. Product Ads & Commercial Content' : '05. Iklan Produk & Konten Komersial',
      name: 'PRODUCT ADS VIDEO',
      price: 'Rp 300.000',
      features: [
        lang === 'en' ? 'Product Video 15-30 Seconds' : 'Video Produk 15-30 Detik',
        lang === 'en' ? 'Vertical Format (9:16)' : 'Vertical Format',
        lang === 'en' ? 'Basic Motion Text overlays' : 'Basic Motion Text',
        lang === 'en' ? 'Ready to Upload Reels / TikTok' : 'Siap Upload Reels / TikTok'
      ],
      isPopular: true
    },
    {
      category: 'product',
      sectionTitle: lang === 'en' ? '05. Product Ads & Commercial Content' : '05. Iklan Produk & Konten Komersial',
      name: 'PRODUCT CAMPAIGN',
      price: 'Rp 800.000',
      features: [
        lang === 'en' ? '3 Product Videos' : '3 Video Produk',
        lang === 'en' ? '10 Product Photos' : '10 Foto Produk',
        lang === 'en' ? 'Light Motion Graphic' : 'Motion Graphic Ringan',
        lang === 'en' ? 'Clean Product Thumbnails' : 'Thumbnail Produk'
      ],
      isPopular: false
    },

    // 06. Company Profile & Commercial Production
    {
      category: 'company',
      sectionTitle: lang === 'en' ? '06. Company Profile & Commercial Production' : '06. Profil Perusahaan & Produksi Komersial',
      name: 'BUSINESS PROFILE',
      price: 'Rp 2.500.000',
      features: [
        lang === 'en' ? 'Duration 1-2 Minutes' : 'Durasi 1-2 Menit',
        lang === 'en' ? 'Executive Interview setup' : 'Interview',
        lang === 'en' ? 'Dynamic B-Roll Footage' : 'B-Roll Footage',
        lang === 'en' ? 'Clean Subtitles' : 'Subtitle',
        lang === 'en' ? 'Color Correction' : 'Color Correction'
      ],
      isPopular: false
    },
    {
      category: 'company',
      sectionTitle: lang === 'en' ? '06. Company Profile & Commercial Production' : '06. Profil Perusahaan & Produksi Komersial',
      name: 'COMPANY PROFILE',
      price: 'Rp 5.000.000',
      features: [
        lang === 'en' ? 'Duration 2-3 Minutes' : 'Durasi 2-3 Menit',
        lang === 'en' ? 'Executive Interview' : 'Interview',
        lang === 'en' ? 'Drone Footage included' : 'Drone Footage',
        lang === 'en' ? 'Professional Color Grading' : 'Color Grading',
        lang === 'en' ? 'Clean Subtitles' : 'Subtitle',
        lang === 'en' ? 'Vertical Teaser Cut' : 'Vertical Teaser'
      ],
      isPopular: true
    },
    {
      category: 'company',
      sectionTitle: lang === 'en' ? '06. Company Profile & Commercial Production' : '06. Profil Perusahaan & Produksi Komersial',
      name: 'CORPORATE',
      price: 'Mulai Rp 8.000.000+',
      features: [
        lang === 'en' ? 'Full scale production' : 'Full Production',
        lang === 'en' ? 'Script Development' : 'Script Development',
        lang === 'en' ? 'Multi-Day Shooting' : 'Multi-Day Shooting',
        lang === 'en' ? 'Premium Drone Footage' : 'Drone Footage',
        lang === 'en' ? 'Custom Motion Graphic' : 'Motion Graphic',
        lang === 'en' ? 'Social Media Cutdowns' : 'Social Media Cutdown'
      ],
      isPopular: false
    },

    // 07. Drone Documentation
    {
      category: 'drone',
      sectionTitle: lang === 'en' ? '07. Drone Documentation' : '07. Dokumentasi Drone & Foto Udara',
      name: 'BASIC',
      price: 'Rp 300.000',
      features: [
        lang === 'en' ? '15 Aerial Photos' : '15 Foto Drone',
        lang === 'en' ? '5 Aerial Videos' : '5 Video Drone',
        lang === 'en' ? 'High Resolution Files' : 'High Resolution'
      ],
      isPopular: false
    },
    {
      category: 'drone',
      sectionTitle: lang === 'en' ? '07. Drone Documentation' : '07. Dokumentasi Drone & Foto Udara',
      name: 'STANDARD',
      price: 'Rp 500.000',
      features: [
        lang === 'en' ? '30 Aerial Photos' : '30 Foto Drone',
        lang === 'en' ? '10 Aerial Videos' : '10 Video Drone',
        lang === 'en' ? 'Professional Color Correction' : 'Color Correction'
      ],
      isPopular: true
    },
    {
      category: 'drone',
      sectionTitle: lang === 'en' ? '07. Drone Documentation' : '07. Dokumentasi Drone & Foto Udara',
      name: 'PREMIUM',
      price: 'Rp 1.000.000',
      features: [
        lang === 'en' ? 'Full Drone Session' : 'Full Drone Session',
        lang === 'en' ? 'Cinematic Drone Edit' : 'Cinematic Drone Edit',
        lang === 'en' ? 'High Resolution Files' : 'High Resolution Files'
      ],
      isPopular: false
    }
  ];

  // Grouped non-standard service lists (Post production, add-ons)
  const postProductionServices = {
    title: lang === 'en' ? '08. Post Production Services' : '08. Jasa Pasca-Produksi',
    items: [
      {
        name: lang === 'en' ? 'VIDEO EDITING' : 'VIDEO EDITING (Penyuntingan)',
        details: [
          { label: 'Short Form Video', price: 'Mulai Rp 50.000', desc: 'TikTok • Reels • Shorts' },
          { label: 'Long Form Video', price: 'Mulai Rp 200.000', desc: 'YouTube • Company Profile • Event Video' }
        ]
      },
      {
        name: lang === 'en' ? 'COLOR GRADING' : 'COLOR GRADING (Pewarnaan)',
        details: [
          { label: 'Basic Grading', price: 'Rp 100.000', desc: 'Correction & Balance' },
          { label: 'Advanced Cinematic', price: 'Rp 300.000', desc: 'Stylized LUTs & Tone matching' },
          { label: 'Commercial Grade', price: 'Mulai Rp 500.000', desc: 'Premium multi-node grade' }
        ]
      },
      {
        name: lang === 'en' ? 'GRAPHIC DESIGN' : 'DESAIN GRAFIS',
        details: [
          { label: 'Thumbnail YouTube', price: 'Rp 25.000', desc: 'High-clickrate thumbnail' },
          { label: 'Poster Design', price: 'Mulai Rp 50.000', desc: 'Modern layout design' },
          { label: 'Banner Design', price: 'Mulai Rp 100.000', desc: 'Event / Product banner' },
          { label: 'Instagram Feed', price: 'Mulai Rp 30.000/Post', desc: 'Aesthetic layout post' }
        ]
      }
    ]
  };

  const addOns = [
    { name: lang === 'en' ? 'Additional Edited Photo' : 'Tambahan Foto Edit', price: 'Rp 5.000/foto' },
    { name: lang === 'en' ? 'Aerial Drone Footage' : 'Drone Footage', price: 'Mulai Rp 100.000' },
    { name: lang === 'en' ? 'Express Delivery (24 Hours)' : 'Express Delivery (24 Jam)', price: 'Rp 50.000' },
    { name: lang === 'en' ? 'Extra Vertical Reels Video' : 'Extra Reels', price: 'Rp 50.000/video' },
    { name: lang === 'en' ? 'Vertical 9:16 Version Export' : 'Vertical Version', price: 'Rp 50.000' },
    { name: lang === 'en' ? 'Animated Motion Graphic' : 'Motion Graphic', price: 'Mulai Rp 100.000' },
    { name: lang === 'en' ? 'Dialogue Subtitle Addition' : 'Subtitle', price: 'Mulai Rp 50.000' },
    { name: lang === 'en' ? 'Pro AI Voice Over' : 'AI Voice Over', price: 'Mulai Rp 50.000' },
    { name: lang === 'en' ? 'Extra Shooting Duration' : 'Tambah Waktu Dokumentasi', price: 'Rp 50.000 / 30 Menit' },
    { name: lang === 'en' ? 'Additional Revision Iteration' : 'Revisi Tambahan', price: 'Rp 50.000' },
    { name: lang === 'en' ? 'Change Music / Alter Concept' : 'Ganti Musik / Ubah Konsep', price: 'Mulai Rp 150.000' }
  ];

  // Filtering packages based on tabs selection
  const filteredPackages = activeCategory === 'all'
    ? packagesData
    : packagesData.filter(p => p.category === activeCategory);

  // Filter sections dynamically to show nicely under grouped section titles
  const groupedSections = Array.from(new Set(filteredPackages.map(p => p.category)));

  return (
    <section id="pricing" className="relative py-16 bg-[#0D0D0D] overflow-hidden">
      
      {/* Background spotlights matching exact color requests */}
      <div className="absolute top-12 left-6 w-[200px] h-[200px] bg-[#FF6B00]/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-24 right-6 w-[250px] h-[250px] bg-[#FF8C42]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* HERO BRAND HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-[#FF6B00]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B00] font-mono">
              SANTT PRODUCTION
            </span>
            <span className="w-8 h-[2px] bg-[#FF6B00]" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-[#FFFFFF]">
            DOCUMENT. CREATE. INSPIRE.
          </h2>
        </div>

        {/* INTERACTIVE FILTERS */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-14 max-w-5xl mx-auto p-1.5 bg-[#2D2D2D]/30 backdrop-blur-md rounded-2xl border border-[#2D2D2D]/50 px-3 py-2.5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                id={`cat-filter-${cat.id}`}
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#FF6B00] text-[#FFFFFF] shadow-[0_4px_12px_rgba(255,107,0,0.3)]'
                    : 'text-[#F5F5F5]/60 hover:text-[#FFFFFF] hover:bg-[#2D2D2D]/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* DYNAMIC PACKAGES GRID GROUPED BY SECTION */}
        <div className="space-y-16 px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {groupedSections.map((sectId) => {
              const sectionPackages = filteredPackages.filter(p => p.category === sectId);
              if (sectionPackages.length === 0) return null;
              const meta = sectionPackages[0];

              return (
                <motion.div
                  key={sectId}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 border-b border-[#2D2D2D]/30 pb-12 last:border-b-0"
                >
                  {/* Category Section Title */}
                  <div className="border-l-4 border-[#FF6B00] pl-4">
                    <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-wider text-[#FFFFFF]">
                      {meta.sectionTitle}
                    </h3>
                    {meta.sectionSubtitle && (
                      <p className="text-xs text-[#FF8C42] mt-1 font-sans font-medium">
                        {meta.sectionSubtitle}
                      </p>
                    )}
                  </div>

                  {/* Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: "1500px" }}>
                    {sectionPackages.map((pkg, idx) => {
                      const isPopular = pkg.isPopular;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ scale: isPopular ? 1.02 : 1 }}
                          whileHover={{ 
                            y: -12, 
                            scale: isPopular ? 1.055 : 1.035, 
                            rotateX: 3, 
                            rotateY: -3,
                            borderColor: "rgba(255,107,0,0.6)",
                            boxShadow: isPopular 
                              ? '0 30px 60px rgba(255,107,0,0.25), 0 0 40px rgba(255,107,0,0.15)' 
                              : '0 25px 50px rgba(0,0,0,0.6), 0 0 30px rgba(255,107,0,0.1)'
                          }}
                          transition={{ type: "spring", stiffness: 280, damping: 18 }}
                          style={{ transformStyle: "preserve-3d" }}
                          className={`relative p-6 rounded-2xl bg-[#2D2D2D]/20 border flex flex-col justify-between transition-all duration-300 group ${
                            isPopular
                              ? 'border-[#FF6B00]'
                              : 'border-[#2D2D2D] hover:border-[#FF6B00]/30'
                          }`}
                        >
                          {/* Popular star badge */}
                          {isPopular && (
                            <div className="absolute -top-3 right-6 bg-[#FF6B00] text-[#FFFFFF] text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5 animate-pulse">
                              <Star className="w-2.5 h-2.5 fill-[#FFFFFF] text-transparent" />
                              <span>{lang === 'en' ? 'MOST POPULAR' : 'PALING POPULER'}</span>
                            </div>
                          )}

                          <div className="space-y-5">
                            <div>
                              <span className="text-[10px] font-mono text-[#FF8C42] tracking-wider uppercase block">
                                // {pkg.name}
                              </span>
                              <div className="mt-2 flex items-baseline gap-1.5">
                                <span className="font-display font-black text-2xl text-[#FFFFFF] tracking-tight">
                                  {pkg.price}
                                </span>
                              </div>
                            </div>

                            {/* Bullet Features list */}
                            <ul className="space-y-2.5 pt-3 border-t border-[#2D2D2D]/30">
                              {pkg.features.map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-2 text-xs text-[#F5F5F5]/80 font-sans">
                                  <Check className="w-4 h-4 text-[#FF6B00] mt-0.5 shrink-0" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-6 mt-6 border-t border-[#2D2D2D]/30">
                            <button
                              onClick={() => setCurrentPage('contact')}
                              className={`w-full py-2.5 rounded-xl text-center text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                                isPopular
                                  ? 'bg-[#FF6B00] text-[#FFFFFF] hover:bg-[#FF8C42] shadow-[0_4px_12px_rgba(255,107,0,0.25)]'
                                  : 'bg-[#2D2D2D] text-[#F5F5F5] hover:bg-[#2D2D2D]/80 hover:text-white'
                              }`}
                            >
                              {lang === 'en' ? 'Book This' : 'Pesan Paket'}
                            </button>
                          </div>
                        </motion.div>
                      );
                    })}

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* CUSTOM & TAILORED PRODUCTION BANNER */}
        <div className="mt-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            whileHover={{ y: -6, borderColor: "rgba(255,107,0,0.5)", boxShadow: "0 25px 50px rgba(0,0,0,0.4)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#111111] via-[#1C1C1C] to-[#0A0A0A] border border-dashed border-[#FF6B00]/40 shadow-[0_15px_35px_rgba(0,0,0,0.6),_0_0_20px_rgba(255,107,0,0.05)] overflow-hidden"
          >
            {/* Background glowing orb */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FF6B00]/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span className="text-[9px] font-mono font-black text-[#FF6B00] tracking-widest uppercase">
                    {lang === 'en' ? 'TAILORED PRODUCTION' : 'KUSTOMISASI KREATIF'}
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wider text-[#FFFFFF] leading-none">
                  {lang === 'en' ? 'CUSTOM CREATIVE PACKAGE' : 'PAKET KREASI KUSTOM (CUSTOM BRIEF)'}
                </h3>
                <p className="text-xs sm:text-sm text-[#F5F5F5]/70 leading-relaxed font-sans">
                  {lang === 'en' 
                    ? 'Have specific narrative goals, corporate specifications, or custom FPV aerial drone needs? We build custom briefs with tailored budgets, flight hours, professional color grading nodes, and multi-platform output cuts.'
                    : 'Punya tujuan narasi khusus, spesifikasi korporat, atau kebutuhan drone FPV udara yang menantang? Kami merancang brief kustom dengan anggaran terukur, jam terbang fleksibel, pewarnaan kelas komersial, serta format multi-platform.'}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#2D2D2D]/40 border border-[#2D2D2D] text-[10px] font-mono text-neutral-400">
                    🎬 {lang === 'en' ? 'Custom Shooting Hours' : 'Durasi Jam Suting Fleksibel'}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#2D2D2D]/40 border border-[#2D2D2D] text-[10px] font-mono text-neutral-400">
                    🚁 {lang === 'en' ? 'Pro FPV & Cinematic Drone' : 'FPV Drone & Cinematic Aerial'}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#2D2D2D]/40 border border-[#2D2D2D] text-[10px] font-mono text-neutral-400">
                    🎨 {lang === 'en' ? 'DaVinci Resolve Commercial Color' : 'Pewarnaan DaVinci Resolve'}
                  </span>
                </div>
              </div>

              <div className="lg:text-right shrink-0 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-4 lg:gap-3 bg-[#0D0D0D]/50 p-6 rounded-2xl border border-white/5 lg:min-w-[280px] w-full lg:w-auto">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-neutral-500 block uppercase">
                    {lang === 'en' ? 'ESTIMATED PRICE' : 'ESTIMASI ANGGARAN'}
                  </span>
                  <span className="font-display font-black text-xl sm:text-2xl text-[#FF6B00]">
                    {lang === 'en' ? 'Flexible / Budget-Fit' : 'Menyesuaikan Budget'}
                  </span>
                </div>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-6 py-3 w-full rounded-xl bg-[#FF6B00] text-[#FFFFFF] hover:bg-[#FF8C42] font-bold text-xs uppercase tracking-widest transition-all shadow-[0_4px_15px_rgba(255,107,0,0.3)] hover:scale-102 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{lang === 'en' ? 'Request Custom Brief' : 'Ajukan Form Request'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 08. POST PRODUCTION SERVICES */}
        {(activeCategory === 'all' || activeCategory === 'post') && (
          <div className="mt-16 px-4 sm:px-6 lg:px-8 border-t border-[#2D2D2D]/30 pt-16">
            <div className="border-l-4 border-[#FF6B00] pl-4 mb-8">
              <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-wider text-[#FFFFFF]">
                {postProductionServices.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {postProductionServices.items.map((srv, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#2D2D2D]/20 border border-[#2D2D2D]">
                  <h4 className="font-display font-black text-xs uppercase tracking-widest text-[#FF6B00] mb-4 pb-2 border-b border-[#2D2D2D]">
                    {srv.name}
                  </h4>
                  <div className="space-y-4">
                    {srv.details.map((dtl, dIdx) => (
                      <div key={dIdx} className="flex justify-between items-start text-xs border-b border-[#2D2D2D]/40 pb-3 last:border-0 last:pb-0">
                        <div className="space-y-0.5 pr-2">
                          <span className="font-bold text-[#FFFFFF] block">{dtl.label}</span>
                          <span className="text-[10px] text-[#F5F5F5]/50 font-sans block">{dtl.desc}</span>
                        </div>
                        <span className="font-mono font-bold text-[#FF8C42] shrink-0">
                          {dtl.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ADD-ONS SECTION */}
        <div className="mt-16 px-4 sm:px-6 lg:px-8 border-t border-[#2D2D2D]/30 pt-16">
          <div className="border-l-4 border-[#FF6B00] pl-4 mb-8">
            <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-wider text-[#FFFFFF]">
              ADD-ONS (Layanan Tambahan)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {addOns.map((add, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-[#2D2D2D]/10 border border-[#2D2D2D] flex items-center justify-between text-xs transition-colors hover:border-[#FF6B00]/20"
              >
                <span className="font-semibold text-[#FFFFFF] pr-2">{add.name}</span>
                <span className="font-mono text-[11px] font-bold text-[#FF8C42] shrink-0">
                  {add.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* TERMS OF SERVICE SECTION */}
        <div className="mt-16 mx-4 sm:mx-6 lg:mx-8 p-6 sm:p-8 rounded-2xl bg-[#2D2D2D]/20 border border-[#2D2D2D] space-y-6">
          <div className="flex items-center gap-2.5 pb-4 border-b border-[#2D2D2D]">
            <FileText className="w-5 h-5 text-[#FF6B00]" />
            <h3 className="font-display font-black text-base sm:text-lg uppercase tracking-wider text-[#FFFFFF]">
              TERMS OF SERVICE (Ketentuan Layanan)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-[#F5F5F5]/80 font-sans leading-relaxed">
            <div>
              <h4 className="font-bold text-[#FF6B00] uppercase tracking-wide mb-1.5">Pembayaran</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Booking dikonfirmasi setelah DP minimal 50%.</li>
                <li>Pelunasan wajib dilakukan sebelum file final tanpa watermark dikirim.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#FF6B00] uppercase tracking-wide mb-1.5">Raw Files</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Raw foto dan video diberikan gratis sesuai paket.</li>
                <li>Pengiriman melalui Google Drive atau media penyimpanan lain yang disepakati.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#FF6B00] uppercase tracking-wide mb-1.5">Penyimpanan File</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>File akan disimpan selama 30 hari sejak tanggal pengiriman.</li>
                <li>Setelah 30 hari, file dapat dihapus dari penyimpanan Santt Production.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#FF6B00] uppercase tracking-wide mb-1.5">Revisi</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Revisi minor sesuai paket.</li>
                <li>Pergantian musik utama, perubahan konsep, atau edit ulang mayor dikenakan biaya tambahan mulai Rp150.000.</li>
              </ul>
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <h4 className="font-bold text-[#FF6B00] uppercase tracking-wide mb-1.5">Area Layanan</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Harga berlaku untuk Banda Aceh dan Aceh Besar.</li>
                <li>Sabang dan area lain dikenakan biaya transportasi sesuai kebutuhan produksi.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
