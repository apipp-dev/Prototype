import React, { createContext, useContext, useState, ReactNode } from 'react';

export type PageId = 'home' | 'works' | 'services' | 'pricing' | 'about' | 'contact';
export type LangId = 'en' | 'id';

interface AppContextType {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  lang: LangId;
  setLang: (lang: LangId) => void;
  t: typeof translations.en;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [lang, setLang] = useState<LangId>('en');

  const value = {
    currentPage,
    setCurrentPage: (page: PageId) => {
      setCurrentPage(page);
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (e) {
        // fallback
        document.documentElement.scrollTop = 0;
      }
    },
    lang,
    setLang,
    t: translations[lang],
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const translations = {
  en: {
    meta: {
      brandName: "SANTT PRODUCTION",
      tagline: "Document. Create. Inspire.",
      instagram: "@santtpro",
      coverage: "Banda Aceh • Aceh Besar • Sabang",
    },
    nav: {
      home: "Home",
      works: "Works",
      services: "Services",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      bookProject: "Book A Project",
    },
    hero: {
      title: "DOCUMENT. CREATE. INSPIRE.",
      subtitle: "We help individuals, communities, businesses, and brands turn moments into meaningful visual stories through photography, videography, drone, and creative media.",
      ctaPrimary: "Book A Project",
      ctaSecondary: "View Portfolio",
      droneTag: "Looping Sabang Peak Cinematic Aerials",
    },
    whyChooseUs: {
      title: "Why Choose Santt Production",
      subtitle: "We are NOT a generic photo studio or standard freelancers. We are a dedicated storytelling agency with modern cinematic workflows.",
      items: [
        {
          title: "Cinematic Vision",
          desc: "Inspired by A24 aesthetics and DJI storytelling, we render every scene with high-impact color palettes and deep human emotion."
        },
        {
          title: "Premium Equipment Suite",
          desc: "We leverage state-of-the-art camera lines, advanced anamorphic optics, and professional heavy-payload FPV aerial systems."
        },
        {
          title: "Bespoke Post-Production",
          desc: "From advanced DaVinci Resolve color suites to fully engineered atmospheric audio soundscapes, sound effects, and title design."
        },
        {
          title: "Local Mastery & Clear Communication",
          desc: "Deep knowledge of Aceh's geography (Sabang, Banda Aceh, Aceh Besar) ensures stunning backgrounds and seamless on-location logistics."
        }
      ]
    },
    process: {
      title: "Our Production Workflow",
      subtitle: "We maintain highly systematic phases to ensure pristine cinematic standards from the initial vision to the final output master.",
      steps: [
        {
          phase: "01",
          title: "Pre-Production & Scripting",
          desc: "Conceptualizing storyboards, scripting dialogues, scout locations across Banda Aceh and Sabang, and aligning the mood references."
        },
        {
          phase: "02",
          title: "Principal Photography",
          desc: "Capturing scenes with elite optics, cinematic lighting, and custom FPV aerial drone maneuvers led by fully certified pilots."
        },
        {
          phase: "03",
          title: "Cinematic Post-Production",
          desc: "Frame-by-frame DaVinci Resolve color grading, audio mastering, visual cues syncing, and professional review iterations."
        }
      ]
    },
    services: {
      title: "Professional Services",
      subtitle: "A detailed overview of our specialized visual services. We build tailored assets with absolute creative direction.",
      cta: "Enquire This Package",
      items: [
        {
          id: "serv-grad",
          title: "Graduation & Farewell Documentation",
          description: "Premium cinematic group and individual documentation. Preserving high-achievement milestones with emotional narrative styling.",
          overview: "Graduation marks a momentous chapter of hard work and triumph. Our documentation avoids boring standard posing to capture authentic laughters, high-fives, and pride with editorial flair.",
          deliverables: [
            "1x Cinematic Graduation Recap Film (1-3 minutes)",
            "1x Social Highlight Cut (30-60 seconds, tailored for Reels/TikTok)",
            "30+ Hand-edited premium color-graded portrait and group photographs",
            "Full digital delivery via a pristine online gallery accessible for 6 months"
          ],
          process: [
            "We consult with you on standard event schedule and optimal location lighting.",
            "Visual tracking at Banda Aceh's primary campuses or scenic landmarks (e.g. Masjid Raya Baiturrahman).",
            "Express color grade and audio arrangement sent to you for review within 7 days."
          ],
          sampleWork: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
        },
        {
          id: "serv-event",
          title: "Event Documentation",
          description: "Multi-camera setups capturing community highlights, music festivals, summits, and executive corporate programs.",
          overview: "Corporate summits, community festivals, or cultural programs in Aceh require nimble documentation teams that understand the rhythm of events. We shoot key moments without interfering with guest experiences.",
          deliverables: [
            "1x Cinematic Aftermovie (2-4 minutes, 4K ProRes)",
            "2x Instagram Reels highlights with audio integration",
            "100+ Edited event documentary photos covering key sessions and atmospheric details",
            "Unlimited drone captures showing crowd participation and scenic overview"
          ],
          process: [
            "Schedule coordination and rundown analysis with organizing committees.",
            "Continuous multi-camera coverage with stabilizers and dedicated field sound capturing.",
            "Fast-track post-production for post-event immediate media releases."
          ],
          sampleWork: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop"
        },
        {
          id: "serv-travel",
          title: "Travel & Open Trip Documentation",
          description: "Adventurous visuals tracking journeys across pristine landscapes, exotic beaches, and the islands of Sabang.",
          overview: "Aceh and Sabang hold some of the world's most spectacular nature. We accompany your travel group or agency open-trips to create dynamic, commercial-grade travel films that make audiences want to jump into the screen.",
          deliverables: [
            "1x Cinematic Travel Vibe Film (2-3 minutes) with customized music choice",
            "3x Express travel-optimized vertical edits for immediate social share",
            "50+ Editorial adventure travel action photographs",
            "Stunning over-water drone footage from locations such as Pulau Rubiah and Iboih Beach"
          ],
          process: [
            "Pre-planning paths of travel, boat times, and peak golden hours in Pulau Weh or Sabang cliffs.",
            "Immersive handheld camera work and weather-resistant drone flight capturing dynamic activity.",
            "Lively visual edits featuring rich local sounds and tropical cinematic color-grading."
          ],
          sampleWork: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
        },
        {
          id: "serv-umkm",
          title: "UMKM Content Creation",
          description: "High-retention social content blocks, aesthetic local business reels, and tasty food storytelling formats.",
          overview: "Local Micro, Small, and Medium Enterprises (UMKM) in Banda Aceh need world-class visuals to stand out in the modern algorithm. We make your food, coffee, or boutique product look exceptionally mouthwatering and luxury.",
          deliverables: [
            "5x Aesthetic short-form reels tailored to current viral trends and audio loops",
            "15x High-end studio or lifestyle product showcase images",
            "Custom caption templates and narrative strategies to drive local conversions",
            "Optimized aspect ratios for Instagram, TikTok, and YouTube Shorts"
          ],
          process: [
            "Menu or product catalog audit to select signature aesthetic highlights.",
            "Rapid 3-hour on-site filming capturing processes, steam, sensory details, and local community smiles.",
            "Fast delivery batch (within 5 business days) to keep your content calendar active."
          ],
          sampleWork: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
        },
        {
          id: "serv-product",
          title: "Product Ads & Commercial Content",
          description: "High-contrast commercial films focusing on premium branding, close-ups, and emotional purchase triggers.",
          overview: "Elevate your brand presence. We design advertising content modeled after international product campaigns, using specific colored environments, macro lenses, and precise lighting.",
          deliverables: [
            "1x Master Brand Commercial Cut (30s & 60s lengths)",
            "High-resolution professional product photography on clean minimalist studio setups",
            "Tailored typographic overlays and motion title design",
            "Licensed premium acoustic cues and industrial sound design sync"
          ],
          process: [
            "Creative brainstorming, references gathering from elite brands (Apple/DJI style), color theme matching.",
            "Precision lighting tabletop setups and high-speed motion tracking shoots.",
            "Hollywood-style color grading and deep sonic layering in DaVinci tools."
          ],
          sampleWork: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
        },
        {
          id: "serv-company",
          title: "Company Profile Production",
          description: "Sleek, corporate corporate showcases highlighting infrastructure, crew values, and scale of operations.",
          overview: "Establish trust. We translate your company profile, NGO records, or public sectors into professional narrative profiles that resonate with national stakeholders and international investors.",
          deliverables: [
            "1x High-level Master Brand Showcase Film (3-5 minutes)",
            "1x Condensed Executive Presentation version (90 seconds)",
            "Interactive interviews capturing leadership insights with pristine overhead dual-audio",
            "Full aerial mapped views of corporate office compounds or projects"
          ],
          process: [
            "In-depth interview script drafting, key talking points, and visual asset mapping.",
            "Multi-point lightning setup for executive interviews and scenic cinematic b-rolls.",
            "Clean post-production incorporating professional subtitles, sound mastering, and corporate colors."
          ],
          sampleWork: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
        },
        {
          id: "serv-drone",
          title: "Drone Documentation",
          description: "UHD aerial mapping, cinematic drone chases, and landscape overview by licensed pilots.",
          overview: "Drone views add unmatched scale and production values. We offer highly precise aerial filming, including high-speed FPV (First Person View) maneuvers that fly through dense forest canopies, over oceans, or around buildings.",
          deliverables: [
            "High-bitrate ProRes aerial reel files ready for commercial insertion",
            "UHD 5.4K panoramic static environmental photographs",
            "Licensed flight operations adhering to local and civil aviation protocols",
            "Extreme speed action tracking"
          ],
          process: [
            "Pre-flight airspace checks and local permit acquisitions across Sabang/Aceh landmarks.",
            "Dynamic flight operations utilizing extreme stability gimbals or highly kinetic FPV quadcopters.",
            "Delivery of stabilized, flat-profile (D-Log/S-Log) raw logs or colored outputs."
          ],
          sampleWork: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop"
        },
        {
          id: "serv-edit",
          title: "Video Editing",
          description: "Professional rhythm correction, pacing, multi-cam synchronization, and visual pacing optimization.",
          overview: "Have gorgeous raw footage but don't know how to piece it together? Let our editors craft your narrative, pacing the edits perfectly to sound beats.",
          deliverables: [
            "Complete edited master file optimized for target platform",
            "Modern visual flow transitions and seamless text overlays",
            "Multi-layered dynamic timeline building and clean pacing cuts"
          ],
          process: [
            "Client assets transfer via secure cloud storage (Drives).",
            "Creative rough assembly and visual beat rhythm mapping.",
            "Delivery of Draft 1, collaborative review, and final mastered render exports."
          ],
          sampleWork: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop"
        },
        {
          id: "serv-color",
          title: "Color Grading",
          description: "DaVinci Resolve color correction, matching multi-cam color hues, and establishing high-impact styling.",
          overview: "Color is the soul of cinema. We utilize professional grading suites to convert flat camera footage into rich, mood-driven artistic grades reminiscent of high-end Hollywood or indie films.",
          deliverables: [
            "Premium customized LUTs developed for your brand profile",
            "Accurate skin tone correction and multi-camera tint normalization",
            "Moody stylized grades tailored specifically for digital screens or cinematic projector displays"
          ],
          process: [
            "Footage color profile analysis (S-Log, D-Log, V-Log, ProRes).",
            "Color correction pass followed by artistic look development.",
            "Master exports with lossless renders to prevent banding artifacts."
          ],
          sampleWork: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=1200&auto=format&fit=crop"
        },
        {
          id: "serv-design",
          title: "Graphic Design",
          description: "Custom identity design, social posters, cinematic presentation covers, and campaign assets.",
          overview: "Complement your visual campaign with strong graphic typography. We build high-impact posters, social assets, and video cover thumbnails that hook people instantly.",
          deliverables: [
            "Cinematic style video covers & click-worthy thumbnails",
            "Social campaign graphics and launch banner designs",
            "Vector graphic templates optimized for layout use"
          ],
          process: [
            "Visual assets collection, title requirements, and grid planning.",
            "Drafting utilizing high-contrast typography and specific colors matching your video campaign.",
            "High-resolution asset deliveries exported in PNG, WebP, or SVG layouts."
          ],
          sampleWork: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    works: {
      title: "Our Visual Legacy",
      subtitle: "Explore our archive of selected projects filmed across Banda Aceh, Aceh Besar, and Sabang, showcasing premium cinematic presentation.",
      categories: {
        all: "All Projects",
        graduation: "Graduation",
        event: "Event",
        travel: "Travel",
        commercial: "Commercial",
        drone: "Drone"
      }
    },
    pricing: {
      title: "Transparent Production Packages",
      subtitle: "Select a package tailored to your production scale. No hidden fees. Crafted for high narrative values.",
      mostPopular: "Most Popular",
      idealFor: "Ideal For",
      packages: [
        {
          id: "pr-grad",
          name: "Milestone Graduation",
          price: "Rp 3.5M",
          priceDetail: "Per Group Package",
          description: "Prsitine cinematic group and individual documentation. Preserving high-achievement milestones with emotional narrative styling.",
          features: [
            "1x Cinematic Graduation Recap Film (1-3 mins)",
            "1x Short Reels Cutdown (30-60s)",
            "40+ Hand-edited premium color-graded portraits",
            "Up to 4 hours on-site group session coverage",
            "Locations: Campus landmarks (Banda Aceh area)",
            "Express Digital Delivery online gallery",
            "1 Round of collaborative revisions"
          ],
          idealFor: "Groups of graduates, friends, or departments needing elite memories."
        },
        {
          id: "pr-event",
          name: "Standard Event Mastery",
          price: "Rp 7.5M",
          priceDetail: "Per Event Day",
          description: "Complete dynamic coverage for summits, festivals, concerts, and community gatherings in Banda Aceh or Sabang.",
          features: [
            "1x Cinematic Corporate/Festival Aftermovie (2-4 mins)",
            "2x Instagram Reels high-pacing video highlights",
            "100+ Edited event photographs (sessions, atmosphere, smiles)",
            "Full Day Shoot (up to 8 hours Coverage)",
            "Licensed Drone Overview captures included",
            "Express Draft delivered in 5 business days",
            "2 Rounds of client feedback revisions"
          ],
          isPopular: true,
          idealFor: "Brand events, music festivals, summits, and executive corporate sessions."
        },
        {
          id: "pr-travel",
          name: "Sabang Adventure Travel",
          price: "Rp 12.0M",
          priceDetail: "Full Travel Dispatch",
          description: "Our signature adventure package. Full dispatch to destination spots (Sabang Peak, Iboih, Rubiah Islands) tracking visual journeys.",
          features: [
            "1x Atmospheric Travel Narrative Film (2-3 mins)",
            "3x Optimized Social Reels cuts (Cinematic sound peaks)",
            "60+ Editorial adventure lifestyle custom photos",
            "2 Shooting Days on location (Sabang, Aceh Besar coast)",
            "Elite Overwater/Cliff FPV Drone Flight chases",
            "All travel logistics covered inside Aceh coverage zone",
            "Fully sound-designed with localized Foley ambiance"
          ],
          idealFor: "Travel agencies, holiday groups, resort brands, or action explorers."
        },
        {
          id: "pr-ads",
          name: "Premium Commercial Campaign",
          price: "Rp 25.0M",
          priceDetail: "Full Campaign Asset Suite",
          description: "Full-scale corporate campaign modeling after Apple, DJI, or high-contrast A24 film styles. Professional studio lighting and elite optics.",
          features: [
            "1x Master Brand Commercial Film (60s & 30s cutdowns)",
            "4x High-retention vertical Reels/TikTok format assets",
            "25+ Commercial-grade product showcase images",
            "Full script development, storyboarding & creative direction",
            "Dual-camera cinematic setups & professional light grids",
            "Hollywood level color grading & advanced motion titles",
            "Dedicated project producer support & unlimited reviews"
          ],
          idealFor: "UMKM looking for massive brand upgrades, National campaigns, & Large institutions."
        }
      ]
    },
    about: {
      title: "Turning Moments Into Cinematic Art",
      subtitle: "Santt Production merges minimalist precision with visual storytelling to document, create, and inspire.",
      whoWeAre: {
        title: "Who We Are",
        desc: "SANTT PRODUCTION is a modern creative visual production company based in Banda Aceh. We operate at the intersection of technical excellence and emotional storytelling. We do not just record events; we design cinematic frames that immortalize transient emotions, epic landscapes, and forward-thinking brands."
      },
      vision: {
        title: "Our Vision",
        desc: "To establish a national-caliber visual standard in Aceh, demonstrating that regional cultures, local brands, and individual human highlights can be presented with the highest tier of cinematic grace, depth, and world-class polish."
      },
      mission: {
        title: "Our Mission",
        desc: "1. To empower brands, startups, and UMKM through deep narrative visual marketing.\n2. To document milestones, travels, and graduation stories with raw, high-contrast aesthetic honesty.\n3. To elevate local aerial and post-production fields with certified workflows and cutting-edge DaVinci Resolve suites."
      },
      values: {
        title: "Our Core Pillars",
        desc: "The values guiding every frame we shoot, edit, and master.",
        items: [
          { title: "Architectural Precision", desc: "No random shaky clips. Every movement is planned, every light source is justified." },
          { title: "Atmospheric Soundscapes", desc: "We believe audio is 50% of the visual story. We craft rich sound design, Foley, and localized beats." },
          { title: "Banda-to-Sabang Expertise", desc: "Aceh is our home. We master navigation of weather, tides, permits, and golden lighting across Banda Aceh, Aceh Besar, and Sabang." }
        ]
      },
      coverage: {
        title: "Coverage Area",
        desc: "We serve clients with fully equipped localized operations across these key areas in Aceh:",
        locations: [
          "Banda Aceh (City center, historic sites, campuses, mosques)",
          "Aceh Besar (Cliffs, rivers, green highlands, scenic coastal waves)",
          "Sabang (Pulau Weh, diving sanctuaries, high peak cliffs, exotic sunset views)"
        ]
      }
    },
    contact: {
      title: "Start Your Visual Journey",
      subtitle: "Have a highlight to document or a brand to elevate? Drop our producers a brief log below or trigger our WhatsApp desk direct.",
      form: {
        name: "Your Name",
        email: "Your Phone / Email",
        projectType: "Project Category",
        message: "Tell us your visual goals (location, ideas, scale)...",
        submitting: "Syncing transmission with producer...",
        submitted: "Transmission synchronized successfully. Santt production directors will contact you shortly.",
        submit: "Dispatch Inquiry Brief",
        error: "Please fill out your name and contact details so we can reply."
      },
      info: {
        whatsapp: "WhatsApp Direct",
        instagram: "Instagram Feed",
        email: "Corporate Dispatch",
        location: "Main Base Office",
        locationDesc: "Banda Aceh, Province of Aceh, Indonesia"
      }
    }
  },
  id: {
    meta: {
      brandName: "SANTT PRODUCTION",
      tagline: "Document. Create. Inspire.",
      instagram: "@santtpro",
      coverage: "Banda Aceh • Aceh Besar • Sabang",
    },
    nav: {
      home: "Beranda",
      works: "Karya",
      services: "Layanan",
      pricing: "Harga",
      about: "Tentang",
      contact: "Kontak",
      bookProject: "Pesan Proyek",
    },
    hero: {
      title: "DOCUMENT. CREATE. INSPIRE.",
      subtitle: "Kami membantu individu, komunitas, bisnis, dan brand mengubah momen menjadi cerita visual yang bermakna melalui fotografi, videografi, drone, dan media kreatif.",
      ctaPrimary: "Pesan Proyek",
      ctaSecondary: "Lihat Portofolio",
      droneTag: "Looping Rekaman Udara Sinematik Sabang",
    },
    whyChooseUs: {
      title: "Mengapa Memilih Santt Production",
      subtitle: "Kami BUKAN studio foto biasa atau fotografer lepas biasa. Kami adalah agensi penceritaan visual dengan alur kerja sinematik modern.",
      items: [
        {
          title: "Visi Sinematik",
          desc: "Terinspirasi oleh estetika A24 dan penceritaan DJI, kami merender setiap adegan dengan palet warna berdampak tinggi dan emosi manusia yang mendalam."
        },
        {
          title: "Peralatan Kelas Premium",
          desc: "Kami memanfaatkan lini kamera mutakhir, optik anamorfik canggih, dan sistem drone FPV khusus dengan beban berat."
        },
        {
          title: "Pasca-Produksi Berkelas",
          desc: "Mulai dari rangkaian warna DaVinci Resolve tingkat profesional hingga lanskap suara audio atmosferik yang diatur secara khusus."
        },
        {
          title: "Penguasaan Medan Lokal & Komunikasi Jelas",
          desc: "Pemahaman mendalam tentang lanskap Aceh (Sabang, Banda Aceh, Aceh Besar) memastikan latar belakang yang memukau dan logistik lokasi yang lancar."
        }
      ]
    },
    process: {
      title: "Alur Kerja Produksi Kami",
      subtitle: "Kami mempertahankan fase sistematis untuk memastikan standar sinematik murni dari visi awal hingga master output akhir.",
      steps: [
        {
          phase: "01",
          title: "Pra-Produksi & Penulisan Naskah",
          desc: "Mengonseptualisasikan papan cerita (storyboard), menulis naskah dialog, survei lokasi di Banda Aceh dan Sabang, dan menyelaraskan referensi mood."
        },
        {
          phase: "02",
          title: "Pengambilan Gambar Utama",
          desc: "Menangkap adegan dengan optik elit, pencahayaan sinematik, dan manuver drone udara FPV dinamis yang dipimpin oleh pilot bersertifikat."
        },
        {
          phase: "03",
          title: "Pasca-Produksi Sinematik",
          desc: "Pewarnaan (color grading) DaVinci Resolve bingkai demi bingkai, penguasaan audio, sinkronisasi isyarat visual, dan iterasi ulasan profesional."
        }
      ]
    },
    services: {
      title: "Layanan Profesional",
      subtitle: "Ringkasan mendetail tentang layanan visual khusus kami. Kami membangun aset yang disesuaikan dengan arahan kreatif penuh.",
      cta: "Tanyakan Paket Ini",
      items: [
        {
          id: "serv-grad",
          title: "Dokumentasi Wisuda & Farewell",
          description: "Dokumentasi sinematik premium kelompok dan individu. Mengabadikan pencapaian kelulusan dengan gaya narasi yang emosional.",
          overview: "Wisuda menandai babak monumental dari kerja keras dan kemenangan. Dokumentasi kami menghindari pose standar yang membosankan untuk menangkap tawa otentik dan kebanggaan dengan gaya editorial.",
          deliverables: [
            "1x Film Rekap Sinematik Wisuda (1-3 menit)",
            "1x Highlight Media Sosial (30-60 detik, dioptimalkan untuk Reels/TikTok)",
            "30+ Foto potret & grup yang diedit warna premium secara detail",
            "Pengiriman digital penuh melalui galeri online pribadi yang aktif selama 6 bulan"
          ],
          process: [
            "Konsultasi jadwal acara dan pencahayaan lokasi yang optimal demi hasil terbaik.",
            "Pengambilan visual di kampus utama atau landmark ikonik Banda Aceh (misalnya Masjid Raya Baiturrahman).",
            "Penyusunan warna ekspres dan aransemen audio dikirimkan untuk Anda tinjau dalam 7 hari."
          ],
          sampleWork: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
        },
        {
          id: "serv-event",
          title: "Dokumentasi Event / Acara",
          description: "Pengaturan multi-kamera yang menangkap sorotan komunitas, festival musik, seminar, dan program korporat.",
          overview: "Seminar bisnis, festival komunitas, atau program budaya di Aceh membutuhkan tim dokumentasi cepat yang memahami ritme acara. Kami mengambil momen kunci tanpa mengganggu pengalaman para tamu.",
          deliverables: [
            "1x Aftermovie Sinematik (2-4 menit, 4K ProRes)",
            "2x Sorotan Instagram Reels dengan integrasi audio tren",
            "100+ Foto dokumenter acara yang diedit mencakup sesi utama dan detail suasana",
            "Pengambilan gambar udara drone tanpa batas untuk menampilkan partisipasi massa"
          ],
          process: [
            "Koordinasi jadwal dan analisis susunan acara bersama panitia penyelenggara.",
            "Cakupan multi-kamera terus menerus dengan stabilizer dan perekaman suara lapangan khusus.",
            "Pasca-produksi yang dipercepat untuk rilis media segera setelah acara."
          ],
          sampleWork: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop"
        },
        {
          id: "serv-travel",
          title: "Dokumentasi Travel & Open Trip",
          description: "Visual petualangan melacak perjalanan melintasi bentang alam, pantai eksotis, dan kepulauan Sabang.",
          overview: "Aceh dan Sabang memiliki alam yang spektakuler. Kami mendampingi grup perjalanan atau agen open-trip Anda untuk membuat film perjalanan dinamis setingkat iklan komersial.",
          deliverables: [
            "1x Film Suasana Perjalanan Sinematik (2-3 menit) dengan musik pilihan",
            "3x Video vertikal ekspres yang dioptimalkan untuk berbagi di media sosial",
            "50+ Foto petualangan bergaya editorial",
            "Rekaman drone di atas laut yang menakjubkan dari lokasi seperti Pulau Rubiah dan Pantai Iboih"
          ],
          process: [
            "Perencanaan rute, waktu kapal, dan jam puncak cahaya keemasan (golden hour) di Pulau Weh atau tebing Sabang.",
            "Kerja kamera genggam yang imersif dan penerbangan drone tahan cuaca.",
            "Penyuntingan visual yang hidup menampilkan suara alam lokal dan penilaian warna tropis."
          ],
          sampleWork: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
        },
        {
          id: "serv-umkm",
          title: "Pembuatan Konten UMKM",
          description: "Blok konten sosial dengan retensi tinggi, reel bisnis lokal yang estetis, dan format narasi makanan yang lezat.",
          overview: "Usaha Mikro, Kecil, dan Menengah (UMKM) lokal di Banda Aceh membutuhkan visual kelas dunia untuk unggul di media sosial. Kami membuat produk kopi, makanan, atau butik Anda terlihat sangat lezat dan mewah.",
          deliverables: [
            "5x Video pendek estetis (reels/TikTok) sesuai dengan tren viral saat ini",
            "15x Foto produk studio atau gaya hidup kelas atas",
            "Template teks (caption) khusus dan strategi narasi untuk mendorong penjualan lokal",
            "Aspek rasio yang dioptimalkan untuk Instagram, TikTok, dan YouTube Shorts"
          ],
          process: [
            "Audit menu atau katalog produk untuk memilih sorotan estetika utama.",
            "Perekaman cepat di lokasi selama 3 jam menangkap proses pembuatan, detail asap/uap, dan senyuman pelanggan.",
            "Pengiriman cepat (dalam 5 hari kerja) untuk menjaga keaktifan kalender konten Anda."
          ],
          sampleWork: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
        },
        {
          id: "serv-product",
          title: "Iklan Produk & Konten Komersial",
          description: "Film komersial kontras tinggi yang berfokus pada branding premium, detail dekat, dan pemicu pembelian emosional.",
          overview: "Tingkatkan kehadiran merek Anda. Kami merancang konten iklan yang meniru kampanye produk internasional, menggunakan studio warna khusus, lensa makro, dan pencahayaan presisi.",
          deliverables: [
            "1x Master Iklan Komersial Brand (durasi 30 detik & 60 detik)",
            "Foto produk profesional resolusi tinggi pada pengaturan studio minimalis",
            "Hamparan tipografi khusus dan desain judul animasi",
            "Sinkronisasi isyarat akustik premium berlisensi dan desain suara industri"
          ],
          process: [
            "Sesi sumbang saran kreatif, pengumpulan referensi (gaya premium Apple/DJI), penyesuaian tema warna.",
            "Logistik pencahayaan presisi dan perekaman pelacakan gerakan kecepatan tinggi.",
            "Pewarnaan kelas Hollywood dan pelapisan suara mendalam dengan sistem DaVinci."
          ],
          sampleWork: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
        },
        {
          id: "serv-company",
          title: "Produksi Profil Perusahaan",
          description: "Profil korporat elegan yang menyoroti infrastruktur, nilai-nilai tim, dan skala operasi bisnis.",
          overview: "Membangun kepercayaan klien. Kami menerjemahkan profil perusahaan, rekam jejak LSM, atau sektor publik Anda menjadi karya naratif profesional yang beresonansi dengan pemangku kepentingan nasional dan investor luar.",
          deliverables: [
            "1x Film Master Showcase Profil Perusahaan (3-5 menit)",
            "1x Versi Presentasi Eksekutif ringkas (90 detik)",
            "Wawancara interaktif menangkap wawasan kepemimpinan dengan audio ganda overhead yang jernih",
            "Tampilan aerial terpetakan sepenuhnya dari kompleks kantor atau proyek perusahaan"
          ],
          process: [
            "Penyusunan draf naskah wawancara mendalam, poin pembicaraan utama, dan pemetaan aset visual.",
            "Pemasangan pencahayaan multi-titik untuk wawancara eksekutif dan b-roll sinematik yang indah.",
            "Pasca-produksi bersih yang menggabungkan teks profesional, penguasaan suara, dan warna identitas perusahaan."
          ],
          sampleWork: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
        },
        {
          id: "serv-drone",
          title: "Dokumentasi Drone & Foto Udara",
          description: "Pemetaan udara UHD, pelacakan drone sinematik, dan rekam lanskap oleh pilot bersertifikat.",
          overview: "Tampilan drone menambah skala tak tertandingi pada nilai produksi. Kami menawarkan pembuatan film udara yang sangat presisi, termasuk manuver FPV (First Person View) berkecepatan tinggi melintasi kanopi hutan, laut, atau arsitektur.",
          deliverables: [
            "File gulungan gambar udara ProRes bitrate tinggi siap untuk sisipan komersial",
            "Foto lingkungan statis panorama UHD 5.4K yang menakjubkan",
            "Operasi penerbangan berlisensi yang mematuhi protokol penerbangan sipil setempat",
            "Pelacakan aksi kecepatan ekstrem"
          ],
          process: [
            "Pemeriksaan wilayah udara pra-penerbangan dan akuisisi izin lokal di landmark Sabang/Aceh.",
            "Operasi penerbangan menggunakan stabilizer gembok ekstrem atau drone FPV kinetik tinggi.",
            "Pengiriman file log mentah (D-Log/S-Log) yang stabil atau hasil warna yang disempurnakan."
          ],
          sampleWork: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop"
        },
        {
          id: "serv-edit",
          title: "Penyuntingan Video (Video Editing)",
          description: "Koreksi ritme profesional, sinkronisasi banyak kamera, dan optimalisasi dinamika pacing visual.",
          overview: "Memiliki rekaman mentah yang bagus tapi bingung cara menyatukannya? Biarkan editor kami menyusun narasi Anda, menyesuaikan ketukan edit secara sempurna dengan ketukan musik.",
          deliverables: [
            "File master hasil edit lengkap yang dioptimalkan untuk platform target",
            "Transisi aliran visual modern dan hamparan teks yang mulus",
            "Pembuatan lini masa dinamis berlapis-lapis dan pemotongan pacing yang bersih"
          ],
          process: [
            "Transfer aset klien melalui penyimpanan cloud yang aman (Google Drive).",
            "Penyusunan kasar kreatif dan pemetaan ritme ketukan visual.",
            "Pengiriman Draf 1, ulasan kolaboratif, dan ekspor render akhir beresolusi tinggi."
          ],
          sampleWork: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop"
        },
        {
          id: "serv-color",
          title: "Pewarnaan (Color Grading)",
          description: "Koreksi warna DaVinci Resolve, menyamakan rona warna dari kamera berbeda, dan menetapkan gaya film kontras tinggi.",
          overview: "Warna adalah jiwa dari sinema. Kami menggunakan sistem pewarnaan profesional untuk mengubah video datar menjadi karya seni kaya warna yang emosional seperti film Hollywood atau indie.",
          deliverables: [
            "LUT kustom premium yang dikembangkan untuk profil merek atau estetika film Anda",
            "Koreksi warna warna kulit yang akurat dan normalisasi kamera ganda",
            "Gradasi bergaya moody yang dirancang khusus untuk layar digital atau tampilan proyektor bioskop"
          ],
          process: [
            "Analisis profil warna rekaman (S-Log, D-Log, V-Log, ProRes).",
            "Koreksi warna dasar diikuti oleh pengembangan gaya artistik khusus.",
            "Ekspor master dengan render tanpa kompresi untuk mencegah adanya artifak warna."
          ],
          sampleWork: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=1200&auto=format&fit=crop"
        },
        {
          id: "serv-design",
          title: "Desain Grafis",
          description: "Desain identitas kustom, poster sosial, sampul presentasi sinematik, dan aset visual kampanye.",
          overview: "Lengkapi kampanye visual Anda dengan tipografi grafis yang kuat. Kami membuat poster berdampak besar, aset sosial, dan sampul video (thumbnail) menarik yang memikat audiens seketika.",
          deliverables: [
            "Sampul video bergaya sinematik & thumbnail yang mengundang klik",
            "Grafis kampanye sosial dan desain spanduk peluncuran produk",
            "Templat grafis vektor yang dioptimalkan untuk penggunaan tata letak kreatif"
          ],
          process: [
            "Pengumpulan aset visual, persyaratan judul, dan perencanaan tata letak grid.",
            "Penyusunan draf menggunakan tipografi kontras tinggi dan warna khusus yang sesuai dengan kampanye video.",
            "Pengiriman aset resolusi tinggi yang diekspor dalam tata letak PNG, WebP, atau SVG."
          ],
          sampleWork: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    works: {
      title: "Warisan Visual Kami",
      subtitle: "Jelajahi arsip proyek pilihan kami yang direkam di Banda Aceh, Aceh Besar, dan Sabang, menampilkan presentasi sinematik premium kelas dunia.",
      categories: {
        all: "Semua Proyek",
        graduation: "Wisuda",
        event: "Acara",
        travel: "Travel",
        commercial: "Komersial",
        drone: "Drone"
      }
    },
    pricing: {
      title: "Paket Produksi Transparan",
      subtitle: "Pilih paket yang disesuaikan dengan skala produksi Anda. Tanpa biaya tersembunyi. Dibuat khusus untuk nilai naratif yang mendalam.",
      mostPopular: "Paling Populer",
      idealFor: "Ideal Untuk",
      packages: [
        {
          id: "pr-grad",
          name: "Milestone Graduation",
          price: "Rp 3.5 Juta",
          priceDetail: "Per Paket Grup",
          description: "Dokumentasi kelompok dan individu wisuda premium. Mengabadikan kelulusan dengan gaya narasi emosional.",
          features: [
            "1x Film Rekap Wisuda Sinematik (1-3 mnt)",
            "1x Short Reels Highlight (30-60 detik)",
            "40+ Foto potret individu & grup yang diedit warna premium",
            "Hingga 4 jam liputan sesi grup di lokasi",
            "Lokasi: Landmark kampus (area Banda Aceh)",
            "Pengiriman galeri digital ekspres online",
            "1 Sesi revisi kolaboratif"
          ],
          idealFor: "Kelompok wisudawan, teman dekat, atau jurusan akademis yang menginginkan memori berkelas."
        },
        {
          id: "pr-event",
          name: "Standard Event Mastery",
          price: "Rp 7.5 Juta",
          priceDetail: "Per Hari Acara",
          description: "Cakupan dinamis lengkap untuk seminar, festival, konser, dan pertemuan komunitas di Banda Aceh, Aceh Besar, atau Sabang.",
          features: [
            "1x Aftermovie Sinematik Acara (durasi 2-4 menit)",
            "2x Sorotan video vertikal Instagram Reels berkecepatan tinggi",
            "100+ Foto dokumenter acara (sesi, suasana, tawa utama)",
            "Pengambilan gambar seharian penuh (liputan hingga 8 jam)",
            "Liputan drone udara berlisensi sudah termasuk",
            "Draf Ekspres dikirimkan dalam 5 hari kerja",
            "2 Sesi revisi masukan dari klien"
          ],
          isPopular: true,
          idealFor: "Acara brand korporat, festival musik, seminar regional, dan lokakarya eksekutif."
        },
        {
          id: "pr-travel",
          name: "Sabang Adventure Travel",
          price: "Rp 12.0 Juta",
          priceDetail: "Pengiriman Travel Penuh",
          description: "Paket petualangan khas kami. Pengiriman penuh tim ke tempat tujuan (Puncak Sabang, Iboih, Kepulauan Rubiah) melacak perjalanan visual.",
          features: [
            "1x Film Narasi Perjalanan Atmosferik (2-3 menit)",
            "3x Potongan Reels Sosial yang dioptimalkan",
            "60+ Foto gaya hidup petualangan kustom editorial",
            "2 Hari pengambilan gambar di lokasi (Sabang, tebing Aceh Besar)",
            "Penerbangan drone FPV di atas laut & puncak tebing",
            "Semua logistik perjalanan kru ditanggung di zona cakupan Aceh",
            "Didesain lengkap dengan suara Foley atmosfer lokal yang kaya"
          ],
          idealFor: "Agen perjalanan wisata, grup liburan, merek resor, atau penjelajah aksi."
        },
        {
          id: "pr-ads",
          name: "Premium Commercial Campaign",
          price: "Rp 25.0 Juta",
          priceDetail: "Paket Kampanye Aset Lengkap",
          description: "Kampanye skala komersial tingkat tinggi yang meniru gaya iklan film produk Apple, DJI, atau film indie A24. Pencahayaan studio profesional dan optik elit.",
          features: [
            "1x Film Master Komersial Brand (durasi 60 detik & 30 detik)",
            "4x Reels vertikal retensi tinggi dioptimalkan untuk TikTok/IG",
            "25+ Foto showcase produk komersial berkualitas tinggi",
            "Pengembangan naskah penuh, storyboard & arah kreatif terpadu",
            "Pengaturan sinematik kamera ganda & pencahayaan studio profesional",
            "Pewarnaan warna kelas Hollywood & judul animasi dinamis",
            "Dukungan produser proyek khusus & ulasan tanpa batas"
          ],
          idealFor: "UMKM yang menginginkan peningkatan masif kelas brand, Kampanye nasional & Instansi besar."
        }
      ]
    },
    about: {
      title: "Mengubah Momen Menjadi Seni Sinematik",
      subtitle: "Santt Production memadukan presisi minimalis dengan kekuatan cerita visual untuk mendokumentasikan, menciptakan, dan menginspirasi.",
      whoWeAre: {
        title: "Siapa Kami",
        desc: "SANTT PRODUCTION adalah perusahaan produksi visual kreatif modern yang berbasis di Banda Aceh. Kami beroperasi di persimpangan keunggulan teknis dan penceritaan emosional. Kami tidak hanya merekam acara; kami merancang bingkai sinematik yang mengabadikan emosi fana, lanskap epik, dan brand yang berwawasan masa depan."
      },
      vision: {
        title: "Visi Kami",
        desc: "Mendirikan standar visual kaliber nasional di Aceh, membuktikan bahwa budaya daerah, brand lokal, dan pencapaian manusia individu dapat ditampilkan dengan keanggunan sinematik, kedalaman, dan polesan kelas dunia yang tertinggi."
      },
      mission: {
        title: "Misi Kami",
        desc: "1. Memberdayakan merek, startup, dan UMKM melalui pemasaran visual naratif yang mendalam.\n2. Mendokumentasikan pencapaian, perjalanan, dan cerita kelulusan wisuda dengan kejujuran estetika kontras tinggi yang murni.\n3. Meningkatkan bidang udara lokal dan pasca-produksi dengan alur kerja bersertifikat dan rangkaian DaVinci Resolve yang mutakhir."
      },
      values: {
        title: "Pilar Utama Kami",
        desc: "Nilai-nilai yang memandu setiap bingkai yang kami rekam, edit, dan kuasai.",
        items: [
          { title: "Presisi Terencana", desc: "Tidak ada video goyah acak. Setiap gerakan direncanakan, setiap sumber cahaya dibenarkan." },
          { title: "Lanskap Suara Atmosferik", desc: "Kami percaya audio adalah 50% dari cerita tari visual. Kami merancang efek suara, Foley, dan ketukan lokal yang kaya." },
          { title: "Keahlian Banda-ke-Sabang", desc: "Aceh adalah rumah kami. Kami menguasai rute cuaca, pasang surut air laut, perizinan, dan pencahayaan emas di Banda Aceh, Aceh Besar, dan Sabang." }
        ]
      },
      coverage: {
        title: "Area Cakupan Layanan",
        desc: "Kami melayani klien dengan operasi lokal yang lengkap di wilayah-wilayah utama di Aceh berikut ini:",
        locations: [
          "Banda Aceh (Pusat kota, situs bersejarah, kampus, masjid raya)",
          "Aceh Besar (Tebing hijau, sungai, pegunungan, pantai ombak pesisir)",
          "Sabang (Pulau Weh, diving, tebing tinggi puncak, pemandangan matahari terbenam yang eksotis)"
        ]
      }
    },
    contact: {
      title: "Mulai Perjalanan Visual Anda",
      subtitle: "Memiliki pencapaian penting untuk didokumentasikan atau brand perusahaan untuk ditingkatkan? Isi pesan singkat di bawah ini atau hubungi kami langsung di WhatsApp.",
      form: {
        name: "Nama Anda",
        email: "Nomor WhatsApp / Email Anda",
        projectType: "Kategori Proyek",
        message: "Ceritakan tujuan visual Anda (lokasi, skala, ide)...",
        submitting: "Menyelaraskan pesan dengan produser...",
        submitted: "Pesan berhasil dikirim. Direktur produksi Santt akan segera menghubungi Anda.",
        submit: "Kirim Pesan Singkat",
        error: "Harap isi nama dan detail kontak Anda agar produser kami dapat membalas pesan."
      },
      info: {
        whatsapp: "WhatsApp Langsung",
        instagram: "Instagram Feed",
        email: "Email Kantor",
        location: "Kantor Pusat Operasional",
        locationDesc: "Banda Aceh, Provinsi Aceh, Indonesia"
      }
    }
  }
};
