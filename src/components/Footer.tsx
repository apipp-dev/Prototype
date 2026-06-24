import React, { useState } from 'react';
import { Mail, MapPin, Phone, Instagram, Youtube, Twitter, ArrowUp, Send, ShieldAlert, Award } from 'lucide-react';
import { useApp, PageId } from '../context/AppContext';
import brandLogo from '../assets/images/brand_logo_1782190907605.jpg';

export default function Footer() {
  const { currentPage, setCurrentPage, lang, t } = useApp();
  const [subscribed, setSubscribed] = useState(false);
  const [newsError, setNewsError] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  
  const handleScrollToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } catch (e) {
      document.documentElement.scrollTop = 0;
    }
  };

  const handlePageSelect = (page: PageId) => {
    setCurrentPage(page);
  };

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) {
      setNewsError(true);
      return;
    }
    setSubscribed(true);
    setNewsError(false);
    setEmailInput('');
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-20 lg:pb-8 text-neutral-400 font-sans relative pl-20 pr-4 lg:pl-24 lg:pr-8 transition-all duration-300">
      
      {/* Decorative vertical coordinates overlay label */}
      <div className="absolute right-6 top-16 writing-mode-vertical text-[9px] font-mono text-neutral-800 tracking-[0.4em] uppercase hidden md:block select-none">
        SANTT DIGITAL PLATFORM // EST 2021
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col items-center text-center space-y-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Centered Brand Info */}
          <div className="flex flex-col items-center space-y-5 max-w-2xl">
            <button
              id="footer-logo-btn"
              onClick={() => handlePageSelect('home')}
              className="flex flex-col items-center gap-3 group text-center cursor-pointer focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-900 border border-brand-orange/30 overflow-hidden shadow-[0_0_15px_rgba(255,107,0,0.3)] transition-all duration-300 group-hover:border-brand-orange/70">
                <img
                  src={brandLogo}
                  alt={t.meta.brandName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="font-display font-[900] text-xl leading-none tracking-tight text-white uppercase">
                  {t.meta.brandName}
                </span>
                <span className="font-display font-medium text-[9px] tracking-[0.25em] uppercase text-brand-orange leading-none mt-1.5">
                  {t.meta.tagline}
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light max-w-xl">
              {lang === 'en'
                ? "SANTT PRODUCTION is Aceh's premier creative visual production team. We operate with cutting-edge camera rigs, FAA drone pilot licenses, and professional color managers."
                : "SANTT PRODUCTION adalah tim produksi visual kreatif utama di Aceh. Kami beroperasi dengan kamera mutakhir, lisensi pilot drone sipil, dan master koreksi warna profesional."}
            </p>

            {/* Centered Social handles list link direct */}
            <div className="flex items-center justify-center gap-4 pt-1">
              <a
                id="footer-social-instagram"
                href="https://instagram.com/santtpro"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-950 border border-white/5 flex items-center justify-center text-neutral-300 hover:text-brand-orange hover:border-brand-orange/40 transition-colors duration-300"
                aria-label="Instagram Handle"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                id="footer-social-youtube"
                href="https://youtube.com/c/santtpro"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-950 border border-white/5 flex items-center justify-center text-neutral-300 hover:text-brand-orange hover:border-brand-orange/40 transition-colors duration-300"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4.5 h-4.5" />
              </a>
              <a
                id="footer-social-twitter"
                href="https://twitter.com/santtpro"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-950 border border-white/5 flex items-center justify-center text-neutral-300 hover:text-brand-orange hover:border-brand-orange/40 transition-colors duration-300"
                aria-label="Twitter Handle"
              >
                <Twitter className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Centered Quick Links (Sitemap Directory) */}
          <div className="flex flex-col items-center space-y-4 w-full">
            <h4 className="font-display font-extrabold text-[11px] text-white uppercase tracking-[0.2em]">
              {lang === 'en' ? 'SITEMAP DIRECTORY' : 'DIREKTORI PERJALANAN'}
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2.5 text-xs">
              <button
                id="footer-nav-home"
                onClick={() => handlePageSelect('home')}
                className={`hover:text-brand-orange transition-colors duration-300 uppercase font-mono text-[10px] tracking-wider cursor-pointer ${
                  currentPage === 'home' ? 'text-brand-orange font-bold' : 'text-neutral-400'
                }`}
              >
                {t.nav.home}
              </button>
              <button
                id="footer-nav-works"
                onClick={() => handlePageSelect('works')}
                className={`hover:text-brand-orange transition-colors duration-300 uppercase font-mono text-[10px] tracking-wider cursor-pointer ${
                  currentPage === 'works' ? 'text-brand-orange font-bold' : 'text-neutral-400'
                }`}
              >
                {t.nav.works}
              </button>
              <button
                id="footer-nav-services"
                onClick={() => handlePageSelect('services')}
                className={`hover:text-brand-orange transition-colors duration-300 uppercase font-mono text-[10px] tracking-wider cursor-pointer ${
                  currentPage === 'services' ? 'text-brand-orange font-bold' : 'text-neutral-400'
                }`}
              >
                {t.nav.services}
              </button>
              <button
                id="footer-nav-pricing"
                onClick={() => handlePageSelect('pricing')}
                className={`hover:text-brand-orange transition-colors duration-300 uppercase font-mono text-[10px] tracking-wider cursor-pointer ${
                  currentPage === 'pricing' ? 'text-brand-orange font-bold' : 'text-neutral-400'
                }`}
              >
                {t.nav.pricing}
              </button>
              <button
                id="footer-nav-about"
                onClick={() => handlePageSelect('about')}
                className={`hover:text-brand-orange transition-colors duration-300 uppercase font-mono text-[10px] tracking-wider cursor-pointer ${
                  currentPage === 'about' ? 'text-brand-orange font-bold' : 'text-neutral-400'
                }`}
              >
                {t.nav.about}
              </button>
              <button
                id="footer-nav-contact"
                onClick={() => handlePageSelect('contact')}
                className={`hover:text-brand-orange transition-colors duration-300 uppercase font-mono text-[10px] tracking-wider cursor-pointer ${
                  currentPage === 'contact' ? 'text-brand-orange font-bold' : 'text-neutral-400'
                }`}
              >
                {t.nav.contact}
              </button>
            </div>
          </div>

        </div>

        {/* Lower row details & credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-600">
          <div className="text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} {t.meta.brandName}. {lang === 'en' ? 'All rights reserved.' : 'Hak cipta dilindungi.'}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 uppercase tracking-wider text-[10px] text-center">
              <Award className="w-3.5 h-3.5 text-neutral-600" />
              {t.meta.coverage}
            </span>
            <button
              id="footer-scroll-top-btn"
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded bg-neutral-950 hover:bg-neutral-900 text-neutral-400 hover:text-brand-orange transition-colors duration-300 cursor-pointer"
              aria-label="Scroll Back To Top"
            >
              {lang === 'en' ? 'Scroll Top' : 'Kembali Ke Atas'}
              <ArrowUp className="w-3 h-3 text-brand-orange" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
