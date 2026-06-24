import React, { useState } from 'react';
import { useApp, PageId } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  User,
  Activity, 
  Compass, 
  Sliders, 
  HelpCircle,
  Mail, 
  ChevronRight, 
  ChevronLeft,
  Globe,
  Phone
} from 'lucide-react';
import brandLogo from '../assets/images/brand_logo_1782190907605.jpg';

export default function VerticalSidebar() {
  const { currentPage, setCurrentPage, lang, setLang, t } = useApp();
  const [isExpanded, setIsExpanded] = useState(false);

  // New Menu structure requested: Home, About, Services, Portfolio, Pricing, FAQ, Contact
  const menuItems = [
    { id: 'home' as PageId, label: lang === 'en' ? 'Home' : 'Beranda', icon: <Home className="w-5 h-5" /> },
    { id: 'about' as PageId, label: lang === 'en' ? 'About' : 'Tentang Kami', icon: <User className="w-5 h-5" /> },
    { id: 'services' as PageId, label: lang === 'en' ? 'Services' : 'Layanan', icon: <Activity className="w-5 h-5" /> },
    { id: 'works' as PageId, label: lang === 'en' ? 'Portfolio' : 'Portofolio', icon: <Compass className="w-5 h-5" /> },
    { id: 'pricing' as PageId, label: lang === 'en' ? 'Pricing' : 'Daftar Harga', icon: <Sliders className="w-5 h-5" /> },
    { id: 'faq' as PageId, label: lang === 'en' ? 'FAQ' : 'FAQ', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'contact' as PageId, label: lang === 'en' ? 'Contact' : 'Hubungi Kami', icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Mobile Glassmorphism Bottom Dock Navigation (360px - 390px Safe-Zone layout) */}
      <div className="fixed bottom-4 left-3 right-3 z-50 md:hidden flex items-center justify-around bg-[#0D0D0D]/95 backdrop-blur-xl border border-white/10 rounded-2xl py-2 px-1.5 shadow-[0_0_20px_rgba(255,107,0,0.2)]">
        {menuItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              id={`mobile-nav-link-${item.id}`}
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`relative flex flex-col items-center justify-center w-10 h-10 rounded-xl transition-all cursor-pointer ${
                isActive ? 'text-[#FF6B00] bg-[#FF6B00]/10' : 'text-[#F5F5F5]/60 hover:text-[#FF6B00]'
              }`}
              title={item.label}
            >
              {React.cloneElement(item.icon, {
                className: "w-4 h-4 transition-transform duration-200"
              })}
              {isActive && (
                <motion.span 
                  layoutId="mobileActiveDot"
                  className="absolute bottom-1 w-1 h-1 rounded-full bg-[#FF6B00]" 
                />
              )}
            </button>
          );
        })}

        {/* Mobile Language Selector */}
        <button
          onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
          className="flex flex-col items-center justify-center w-10 h-10 rounded-xl text-[#F5F5F5]/60 hover:text-[#FF6B00] transition-all cursor-pointer"
          title={lang === 'en' ? 'Switch to Indonesian' : 'Ubah ke Bahasa Inggris'}
        >
          <Globe className="w-4 h-4 text-[#FF6B00]" />
          <span className="text-[8px] font-mono mt-0.5 leading-none">
            {lang === 'en' ? 'EN' : 'ID'}
          </span>
        </button>
      </div>

      {/* Main Responsive Vertical Sidebar (Desktop only) */}
      <div 
        className="hidden md:flex fixed left-3 lg:left-4 top-1/2 -translate-y-1/2 z-50 items-center gap-2 pointer-events-none"
        id="vertical-sidebar-container"
      >
        {/* Sidebar main body - aligned to palette colors */}
        <motion.div
          animate={{ width: isExpanded ? 240 : 60 }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          className="glassmorphic-sidebar pointer-events-auto h-[580px] max-h-[calc(100vh-40px)] rounded-3xl bg-[#0D0D0D]/90 backdrop-blur-xl border border-[#2D2D2D] shadow-[0_0_30px_rgba(255,107,0,0.15)] flex flex-col justify-between p-2.5 overflow-hidden select-none"
        >
          {/* Top Logo - SP Logo toggles expanded state */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex items-center pb-3 border-b border-[#2D2D2D] w-full group cursor-pointer text-left focus:outline-none ${
              isExpanded ? 'px-1.5 gap-3' : 'justify-center gap-0 px-0'
            }`}
            title={isExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0D0D0D] border border-[#FF6B00]/40 overflow-hidden shadow-[0_0_15px_rgba(255,107,0,0.3)] transition-all duration-300 group-hover:border-[#FF6B00] shrink-0">
              <img
                src={brandLogo}
                alt="SANTT PRODUCTION"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col text-left overflow-hidden whitespace-nowrap"
                >
                  <span className="font-display font-black text-xs text-white uppercase tracking-wider">
                    SANTT PRO
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-[#FF6B00] uppercase leading-none">
                    {t.meta.tagline}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Center menu links */}
          <div className="flex-grow flex flex-col justify-center gap-1.5 my-2">
            {menuItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  id={`sidebar-link-${item.id}`}
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                  }}
                  className={`relative w-full rounded-2xl flex items-center h-10 transition-all duration-300 group ${
                    isExpanded ? 'justify-start px-3.5' : 'justify-center px-0'
                  } ${
                    isActive 
                      ? 'text-white font-bold' 
                      : 'text-[#F5F5F5]/60 hover:text-[#FF6B00] hover:bg-[#2D2D2D]/40'
                  }`}
                  style={{ cursor: 'pointer' }}
                  title={item.label}
                >
                  {/* Active highlight background (Accent Orange!) */}
                  {isActive && (
                    <motion.div
                      layoutId="sidebarActiveBackground"
                      className="absolute inset-0 bg-[#FF6B00] rounded-2xl shadow-[0_0_15px_rgba(255,107,0,0.35)]"
                      style={{ zIndex: 0 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Icon (above active highlight) */}
                  <span className="relative z-10 flex items-center justify-center shrink-0">
                    {React.cloneElement(item.icon, {
                      className: `w-4 h-4 transition-colors ${
                        isActive ? 'text-white' : 'group-hover:scale-110 duration-200'
                      }`
                    })}
                  </span>

                  {/* Text Label */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 ml-3.5 font-display text-[11px] uppercase tracking-wider overflow-hidden whitespace-nowrap"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* Bottom utility section (Language, CTA, Collapse Toggle) */}
          <div className="mt-auto pt-3 border-t border-[#2D2D2D] flex flex-col gap-2">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
              className={`w-full h-10 rounded-2xl flex items-center transition-all duration-300 group hover:bg-[#2D2D2D]/40 text-[#F5F5F5]/60 hover:text-white cursor-pointer ${
                isExpanded ? 'justify-start px-3.5' : 'justify-center px-0'
              }`}
              title={lang === 'en' ? 'Switch to Indonesian' : 'Ubah ke Bahasa Inggris'}
            >
              <span className="flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4 text-[#FF6B00] animate-pulse" />
              </span>
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="ml-3.5 font-mono text-[9px] uppercase tracking-wider overflow-hidden whitespace-nowrap"
                  >
                    {lang === 'en' ? 'EN' : 'ID'}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Book Project CTA */}
            <button
              id="sidebar-book-project-cta"
              onClick={() => {
                setCurrentPage('contact');
              }}
              className={`w-full h-10 rounded-2xl flex items-center transition-all duration-300 group ${
                isExpanded ? 'justify-start px-3.5' : 'justify-center px-0'
              } ${
                currentPage === 'contact'
                  ? 'bg-[#FF8C42] text-white'
                  : 'bg-[#FF6B00]/10 text-[#FF6B00] hover:bg-[#FF6B00]/20'
              } cursor-pointer`}
              title={t.nav.bookProject}
            >
              <span className="flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </span>
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="ml-3.5 font-display text-[9px] font-bold uppercase tracking-wider overflow-hidden whitespace-nowrap"
                  >
                    {t.nav.bookProject}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Expand/Collapse Chevron (Desktop only) */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="hidden lg:flex w-full h-8 rounded-2xl border border-[#2D2D2D] bg-[#2D2D2D]/30 text-[#F5F5F5]/60 hover:bg-[#2D2D2D]/50 hover:text-white transition-all items-center justify-center shrink-0 cursor-pointer"
            >
              {isExpanded ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Background dimmer backdrop when mobile sidebar is open */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden pointer-events-auto"
          />
        )}
      </AnimatePresence>
    </>
  );
}
