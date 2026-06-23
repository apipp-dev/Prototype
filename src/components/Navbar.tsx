import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe, ChevronDown, Check, Home, Briefcase, Sparkles, DollarSign, User, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp, PageId, LangId } from '../context/AppContext';
import brandLogo from '../assets/images/brand_logo_1782190907605.jpg';

export default function Navbar() {
  const { currentPage, setCurrentPage, lang, setLang, t } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageSelect = (page: PageId) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const navItems: { id: PageId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: t.nav.home, icon: <Home className="w-4 h-4" /> },
    { id: 'works', label: t.nav.works, icon: <Briefcase className="w-4 h-4" /> },
    { id: 'services', label: t.nav.services, icon: <Sparkles className="w-4 h-4" /> },
    { id: 'pricing', label: t.nav.pricing, icon: <DollarSign className="w-4 h-4" /> },
    { id: 'about', label: t.nav.about, icon: <User className="w-4 h-4" /> },
    { id: 'contact', label: t.nav.contact, icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* TOP DESKTOP & MOBILE NAVIGATION BAR */}
      <nav
        id="navbar-top"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-white/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* SP LOGO MONOGRAM SECTION */}
            <button
              id="logo-button"
              onClick={() => handlePageSelect('home')}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-900 border border-brand-orange/30 overflow-hidden shadow-[0_0_15px_rgba(255,107,0,0.3)] transition-all duration-300 group-hover:border-brand-orange/70">
                <img
                  src={brandLogo}
                  alt="SANTT PRODUCTION"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-black text-lg tracking-wider text-white">
                  {t.meta.brandName}
                </span>
                <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase leading-none">
                  {t.meta.tagline}
                </span>
              </div>
            </button>

            {/* DESKTOP NAVIGATION ITEMS (Traditional premium layout, NO hamburger) */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      id={`nav-item-${item.id}`}
                      key={item.id}
                      onClick={() => handlePageSelect(item.id)}
                      className={`relative font-display text-sm tracking-wider font-semibold uppercase cursor-pointer py-1 transition-colors ${
                        isActive
                          ? 'text-brand-orange'
                          : 'text-neutral-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeTabUnderline"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-orange rounded"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* LANGUAGE SWITCHER */}
              <div className="relative">
                <button
                  id="language-switcher-btn"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-900/60 border border-white/5 hover:border-brand-orange/40 text-xs font-semibold text-neutral-200 uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{lang === 'en' ? 'EN' : 'ID'}</span>
                  <ChevronDown className="w-3 h-3 text-neutral-500" />
                </button>

                <AnimatePresence>
                  {langDropdownOpen && (
                    <>
                      {/* Click outside backdrop overlay */}
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setLangDropdownOpen(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-40 rounded bg-neutral-950 border border-white/10 p-1 shadow-2xl z-20 font-sans"
                      >
                        <button
                          id="lang-select-en"
                          onClick={() => {
                            setLang('en');
                            setLangDropdownOpen(false);
                          }}
                          className={`flex items-center justify-between w-full text-left px-3 py-2 text-xs rounded transition-colors ${
                            lang === 'en'
                              ? 'bg-brand-orange/10 text-brand-orange font-medium'
                              : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
                          }`}
                        >
                          <span>English (EN)</span>
                          {lang === 'en' && <Check className="w-3.5 h-3.5" />}
                        </button>
                        <button
                          id="lang-select-id"
                          onClick={() => {
                            setLang('id');
                            setLangDropdownOpen(false);
                          }}
                          className={`flex items-center justify-between w-full text-left px-3 py-2 text-xs rounded transition-colors ${
                            lang === 'id'
                              ? 'bg-brand-orange/10 text-brand-orange font-medium'
                              : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
                          }`}
                        >
                          <span>Indonesia (ID)</span>
                          {lang === 'id' && <Check className="w-3.5 h-3.5" />}
                        </button>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* BOOK PROJECT CTA */}
              <button
                id="book-project-desktop-btn"
                onClick={() => handlePageSelect('contact')}
                className="px-5 py-2.5 bg-brand-orange hover:bg-brand-orange/90 text-white rounded text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(255,107,0,0.3)] transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                {t.nav.bookProject}
              </button>
            </div>

            {/* MOBILE ONLY HAMBURGER (Right-side top bar) */}
            <div className="flex lg:hidden items-center gap-3">
              {/* MOBILE QUICK LANGUAGE SWITCHER PILL */}
              <button
                id="mobile-quick-lang"
                onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-900 border border-white/5 text-[10px] font-bold text-brand-orange"
              >
                <Globe className="w-3 h-3" />
                <span>{lang === 'en' ? 'EN' : 'ID'}</span>
              </button>

              <button
                id="hamburger-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-300 hover:text-white bg-neutral-900/60 rounded border border-white/5 cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE FULL-SCREEN DRAWER (Triggered by Hamburger modal) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0D0D0D] pt-24 px-6 flex flex-col justify-between pb-8 lg:hidden"
          >
            <div className="space-y-6 flex flex-col justify-center items-center mt-8">
              {navItems.map((item, idx) => {
                const isActive = currentPage === item.id;
                return (
                  <motion.button
                    id={`mobile-drawer-${item.id}`}
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handlePageSelect(item.id)}
                    className={`font-display text-2xl font-bold uppercase tracking-wider ${
                      isActive ? 'text-brand-orange text-glow-orange' : 'text-neutral-400'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>

            <div className="space-y-4">
              <button
                id="mobile-drawer-book-btn"
                onClick={() => handlePageSelect('contact')}
                className="w-full py-4 bg-brand-orange text-white text-sm font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,107,0,0.3)]"
              >
                <Phone className="w-4 h-4" />
                {t.nav.bookProject}
              </button>
              <div className="text-center font-mono text-[10px] text-neutral-500 tracking-wider">
                {t.meta.brandName} • {t.meta.coverage}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE BOTTOM LIQUID GLASS FLOATING NAVIGATION */}
      <div id="mobile-floating-nav" className="fixed bottom-6 left-0 right-0 z-40 flex justify-center px-4 lg:hidden pointer-events-none">
        <div className="bg-neutral-950/80 backdrop-blur-lg border border-white/10 rounded-full py-2 px-3 flex items-center gap-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.8)] pointer-events-auto max-w-sm w-full justify-around">
          {navItems.map((item) => {
            // Mobile bottom navigation only lists Home, Works, Services, Pricing, Contact (5 items max)
            if (item.id === 'about') return null;
            const isActive = currentPage === item.id;
            return (
              <button
                id={`floating-nav-${item.id}`}
                key={item.id}
                onClick={() => handlePageSelect(item.id)}
                className={`relative flex flex-col items-center justify-center p-2 rounded-full min-w-12 transition-all ${
                  isActive ? 'text-brand-orange' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="text-[9px] font-medium mt-1 font-sans">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveIndicator"
                    className="absolute -bottom-1 w-1.5 h-1.5 bg-brand-orange rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
