import { PortfolioItem, Service, PricingPlan, Testimonial, EquipmentItem } from './types';

export const servicesData: Service[] = [
  {
    id: 'video-production',
    title: 'Cinematic Video Production',
    description: 'From pre-production scripting to directing and 8K capture. We shoot high-impact brand commercial films, sleek music videos, and cinematic product launches.',
    iconName: 'Camera',
    features: [
      'Scripting & Storyboarding',
      'High-end Cinema Cameras (ARRI/RED)',
      'Professional Lighting & Audio Styling',
      'Art Direction & Set Design'
    ]
  },
  {
    id: 'post-production',
    title: 'Premium Post-Production',
    description: 'Bringing raw footage to its maximum visual and auditory potential with Hollywood-grade color grading, visual effects, and custom soundscapes.',
    iconName: 'Film',
    features: [
      'DaVinci Resolve Color Grading',
      'Sound Design & Audio Mastering',
      'Dynamic Title & Motion Graphics',
      'VFX & Seamless Compositing'
    ]
  },
  {
    id: 'drone-aerial',
    title: 'Drone & FPV Aerials',
    description: 'Providing breathtaking, high-speed kinetic aerial footage. Fully licensed pilots steering state-of-the-art heavy lift drones and FPV quadcopters.',
    iconName: 'PlaneTakeoff',
    features: [
      'Licensed Drone Pilots (FAA certified)',
      'High-speed FPV Cinematic Chases',
      'Ultra-stable 5.4K ProRes Aerials',
      'Dangerous / Hard-to-reach Shot Tracking'
    ]
  },
  {
    id: 'creative-campaigns',
    title: 'Creative Brand Campaigns',
    description: 'Full-service social media asset engines, interactive visual campaigns, and viral format planning tailored to increase multi-platform audience engagement.',
    iconName: 'Sparkles',
    features: [
      'Multi-platform Aspect Ratio Delivery',
      'Viral Format Creative Strategy',
      'Micro-Content (Shorts, Reels, TikToks)',
      'Audience Engagement Analytics Hook'
    ]
  }
];

export const portfolioData: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'The Sound of Speed',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-supercar-driving-through-the-city-at-night-42289-large.mp4',
    client: 'Apex Automotive',
    duration: '01:15',
    year: '2026',
    description: 'A high-octane nocturne commercial visual capturing the modern electric hypercar slicing through rain-slicked skyscraper streets in high-contrast orange neon lighting.'
  },
  {
    id: 'port-2',
    title: 'Echoes of Midnight',
    category: 'music-video',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-rock-band-performing-on-stage-with-smoky-lights-42296-large.mp4',
    client: 'Vapor Wave Project',
    duration: '03:42',
    year: '2025',
    description: 'Atmospheric slow-motion music video utilizing anamorphic lenses, smoke-filled warehouse backdrops, and deep dark orange visual accents matching their latest retro single release.'
  },
  {
    id: 'port-3',
    title: 'Sons of the Soil',
    category: 'documentary',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-working-with-glow-in-the-dark-glass-41716-large.mp4',
    client: 'Earth Alliance Foundation',
    duration: '12:00',
    year: '2025',
    description: 'An intimate, human-centric short documentary showcasing traditional glass blowers and flame artisans persevering through modern automation eras. Beautiful warm fire grading.'
  },
  {
    id: 'port-4',
    title: 'Over the Mountain Grid',
    category: 'drone-cinematic',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-forest-and-mountains-in-winter-3559-large.mp4',
    client: 'National Range Gear',
    duration: '02:30',
    year: '2026',
    description: 'Heavy cinematic FPV fly-throughs shaving glacier cliffs, cascading mist plumes, and sharp evergreen canopies, presented in an immersive UHD format.'
  },
  {
    id: 'port-5',
    title: 'Neon Catalyst',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-playing-retro-arcade-games-with-neon-lights-40097-large.mp4',
    client: 'Aether Beverage Co.',
    duration: '00:45',
    year: '2026',
    description: 'A punchy, creative editorial split-screen launch commercial highlighting visual transitions from deep orange citrus extraction to glowing tech style can designs.'
  },
  {
    id: 'port-6',
    title: 'Aura of the Strings',
    category: 'music-video',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-playing-violin-in-an-empty-hall-41619-large.mp4',
    client: 'Sofia & Orchestral Collective',
    duration: '04:10',
    year: '2025',
    description: 'A theatrical string arrangement visual captured inside a concrete subterranean water reservoir, reflecting candle lights on static dark pools.'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'promo-starter',
    name: 'Brand Ignite',
    price: '$2,450',
    priceDetail: 'Per Project',
    description: 'Perfect for startups, independent brands and agencies seeking a dynamic premium social campaign asset or launch teaser.',
    features: [
      '1 Concept Script & Storyboard',
      '1 Shooting Day (up to 6 hours)',
      'Professional UHD Camera Package',
      '1 Master High-Impact Commercial Cut (30-45s)',
      '2 Optimized Vertical Crop Cutdowns (Reels/TikTok)',
      'Full Color Grading & Ambient Sound Design',
      'Licensed Audio & SFX Track',
      '1 Round of Collaborative Revisions'
    ],
    idealFor: 'Social Promos, Product Teasers & Startup Launches'
  },
  {
    id: 'commercial-standard',
    name: 'Cinematic Signature',
    price: '$5,800',
    priceDetail: 'Per Project',
    description: 'Our most sought-after commercial package. Elevating your company signature narrative with top-tier cinematography, drone flight, and deeper strategy.',
    features: [
      '2 Brand Narrative Concept Scenarios',
      '2 Shooting Days with Multi-Location Setup',
      'Elite 8K Anamorphic Cinema Gear Suite',
      'Standard Licensed FPV Aerial Drone Coverage',
      '1 Showcase Brand Documentary film (2-3 mins)',
      '1 Commercial TV Cutdown (30s) + 1 Teaser (15s)',
      '3 Specialized High-Retention Vertical Edits',
      'Hollywood DaVinci Color Grading & Foley Design',
      'Fully Custom Sound Effects & Dialog Polish',
      '3 Collaborative Revision Rounds'
    ],
    isPopular: true,
    idealFor: 'Inspirational Brand Journeys, Key corporate assets & Main Site Hooks'
  },
  {
    id: 'agency-enterprise',
    name: 'Masterclass Campaign',
    price: '$12,500',
    priceDetail: 'Full Production Campaign',
    description: 'The ultimate production experience. Fully bespoke worldbuilding, soundstages, elite actors casting, and unlimited potential for national broadcasts.',
    features: [
      'Bespoke Creative Director Consulting & Set Planning',
      '3-4 Days Production Window with Master Crew',
      'Dual RED Raptor/ARRI LF Digital Cinema Cameras',
      'Bespoken Licensed FPV Chases + Custom Light Fixtures',
      'Elite Actors Casting & Wardrobe Supervision',
      'Multi-Length Delivery Suite (15s, 30s, 60s, 3m Broad)',
      'Comprehensive Social Reel Engine (6 custom cuts)',
      'Advanced Custom VFX, 3D Typography, & Track Mixing',
      'Dedicated Producer Support & Unlimited Revisions'
    ],
    idealFor: 'Heavy Cinema Campaigns, National Ad Broadcasts & Music Videos'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Helena Vance',
    role: 'Creative VP',
    company: 'Apex Automotive Group',
    feedback: 'Santt Production transformed our electric supercar launch into pure cinematic poetry. The play of light, orange flares, and thunderous sound design exceeded any commercial standard we had set. Absolutely breathtaking work!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 't-2',
    name: 'Marcus Kael',
    role: 'Managing Director',
    company: 'Aether Beverage Co.',
    feedback: 'Their FPV drone operators are magicians. They captured angles of our packaging lines that looked futuristic and majestic. Santt delivers on time and takes creative ownership of every pixel.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 't-3',
    name: 'Dorian Hayes',
    role: 'Music Artist',
    company: 'Vapor Wave Syndicate',
    feedback: 'Usually, video shoots are stressed, but the team at Santt brought complete calm and vision. The coloring matches our synthwave aura completely, and their timing for the drops is flawless.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop'
  }
];

export const equipmentList: EquipmentItem[] = [
  {
    category: 'Cinema Cameras',
    items: ['RED V-Raptor 8K VV', 'ARRI Alexa Mini LF', 'Sony FX6 Cinema Line', 'BMPCC 6K Pro Rig']
  },
  {
    category: 'Aerial & Tracking',
    items: ['DJI Inspire 3 (8K ProRes)', 'Custom 5-inch 6S FPV Chase Drone', 'DJI Ronin 2 Stabilizer', 'Freefly Movi Pro Gimbal']
  },
  {
    category: 'Optics & Lenses',
    items: ['Cooke Anamorphic/i prime set', 'Atlas Orion T2 Anamorphics', 'Sigma Cine High-Speed Pl primes', 'Laowa Probe Lens']
  },
  {
    category: 'Lighting & FX',
    items: ['Aputure 1200d Pro / 600d Pro', 'Astera Titan Tubes Suite', 'Arri Skypanel S60-C', 'Industrial Stage Fogger & Hazer']
  }
];

export const faqData = [
  {
    question: 'How long does a cinematic brand shoot typically take from script to debut?',
    answer: 'A standard project spans 3 to 6 weeks. This includes pre-production (storyboarding, scripts - approx. 1-2 weeks), principal photography (shooting - 1-3 days), and a highly detailed post-production phase (color grading, sound editing, dynamic VFX - approx. 2-3 weeks).'
  },
  {
    question: 'Can we hire Santt Production strictly for raw FPV drone pilot capture or elite color grading?',
    answer: 'Absolutely! While we focus on full-service narrative campaigns, we partner with agencies and other directors to supply high-end FPV flight captures, ARRI Mini B-rolls, or dedicated DaVinci Resolve color suites.'
  },
  {
    question: 'Are there any geographical limitations for production locations?',
    answer: 'None whatsoever. Santt Production has filmed on icy mountain cliffs, remote desert dunes, and underground water reservoirs. Our crew, gear, and heavy drone certifications are optimized and cleared for international dispatch.'
  },
  {
    question: 'What is your process for integrating feedback during post-production?',
    answer: 'We use professional frame-by-frame review portals (Frame.io sync). You receive a secure link where you can click exact timecodes and write notes. This keeps the revision workflow highly transparent, speed-focused, and satisfying.'
  }
];
