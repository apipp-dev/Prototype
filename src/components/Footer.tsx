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
    <footer className="bg-black border-t border-white/5 pt-20 pb-20 lg:pb-8 text-neutral-400 font-sans relative">
      
      {/* Decorative vertical coordinates overlay label */}
      <div className="absolute right-6 top-16 writing-mode-vertical text-[9px] font-mono text-neutral-800 tracking-[0.4em] uppercase hidden md:block select-none">
        SANTT DIGITAL PLATFORM // EST 2021
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <button
              id="footer-logo-btn"
              onClick={() => handlePageSelect('home')}
              className="flex items-center gap-2.5 group text-left cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-900 border border-brand-orange/30 overflow-hidden shadow-[0_0_15px_rgba(255,107,0,0.3)] transition-all duration-300 group-hover:border-brand-orange/70">
                <img
                  src={brandLogo}
                  alt={t.meta.brandName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-[900] text-lg leading-none tracking-tight text-white uppercase">
                  {t.meta.brandName}
                </span>
                <span className="font-display font-medium text-[8px] tracking-[0.25em] uppercase text-brand-orange leading-none mt-1">
                  {t.meta.tagline}
                </span>
              </div>
            </button>

            <p className="text-xs text-neutral-400 leading-relaxed font-light max-w-sm">
              {lang === 'en'
                ? "SANTT PRODUCTION is Aceh's premier creative visual production team. We operate with cutting-edge camera rigs, FAA drone pilot licenses, and professional color managers."
                : "SANTT PRODUCTION adalah tim produksi visual kreatif utama di Aceh. Kami beroperasi dengan kamera mutakhir, lisensi pilot drone sipil, dan master koreksi warna profesional."}
            </p>

            {/* Social handles list link direct */}
            <div className="flex items-center gap-4 pt-2">
              <a
                id="footer-social-instagram"
                href="https://instagram.com/santtpro"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-300 hover:text-brand-orange hover:border-brand-orange/40 transition-colors duration-300"
                aria-label="Instagram Handle"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-social-youtube"
                href="https://youtube.com/c/santtpro"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-300 hover:text-brand-orange hover:border-brand-orange/40 transition-colors duration-300"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                id="footer-social-twitter"
                href="https://twitter.com/santtpro"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-300 hover:text-brand-orange hover:border-brand-orange/40 transition-colors duration-300"
                aria-label="Twitter Handle"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-widest">
              {lang === 'en' ? 'SITEMAP DIRECTORY' : 'DIREKTORI PERJALANAN'}
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => handlePageSelect('home')}
                  className={`hover:text-brand-orange transition-colors duration-300 text-left uppercase font-mono text-[10px] tracking-wider cursor-pointer ${
                    currentPage === 'home' ? 'text-brand-orange' : 'text-neutral-400'
                  }`}
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-works"
                  onClick={() => handlePageSelect('works')}
                  className={`hover:text-brand-orange transition-colors duration-300 text-left uppercase font-mono text-[10px] tracking-wider cursor-pointer ${
                    currentPage === 'works' ? 'text-brand-orange' : 'text-neutral-400'
                  }`}
                >
                  {t.nav.works}
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-services"
                  onClick={() => handlePageSelect('services')}
                  className={`hover:text-brand-orange transition-colors duration-300 text-left uppercase font-mono text-[10px] tracking-wider cursor-pointer ${
                    currentPage === 'services' ? 'text-brand-orange' : 'text-neutral-400'
                  }`}
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-pricing"
                  onClick={() => handlePageSelect('pricing')}
                  className={`hover:text-brand-orange transition-colors duration-300 text-left uppercase font-mono text-[10px] tracking-wider cursor-pointer ${
                    currentPage === 'pricing' ? 'text-brand-orange' : 'text-neutral-400'
                  }`}
                >
                  {t.nav.pricing}
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => handlePageSelect('about')}
                  className={`hover:text-brand-orange transition-colors duration-300 text-left uppercase font-mono text-[10px] tracking-wider cursor-pointer ${
                    currentPage === 'about' ? 'text-brand-orange' : 'text-neutral-400'
                  }`}
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => handlePageSelect('contact')}
                  className={`hover:text-brand-orange transition-colors duration-300 text-left uppercase font-mono text-[10px] tracking-wider cursor-pointer ${
                    currentPage === 'contact' ? 'text-brand-orange' : 'text-neutral-400'
                  }`}
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter SignUp Info */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-widest">
              {lang === 'en' ? 'BEHIND THE SCENES DISPATCH' : 'PENGIRIMAN DI BALIK LAYAR'}
            </h4>
            
            <p className="text-xs text-neutral-400 font-light leading-normal">
              {lang === 'en'
                ? 'Join our private newsletter to receive location guides, pricing updates, and cinematography specs diaries.'
                : 'Bergabunglah dengan buletin kami untuk menerima panduan lokasi Aceh, pembaruan harga, dan catatan sinematografi.'}
            </p>

            {/* Newsletter input form */}
            {subscribed ? (
              <div className="text-[11px] text-brand-orange font-mono font-bold p-3 bg-brand-orange/5 border border-brand-orange/20 rounded">
                {lang === 'en' ? '// SUBSCRIPTION ENROLLED. WELCOME.' : '// BERLANGGANAN BERHASIL. SELAMAT DATANG.'}
              </div>
            ) : (
              <form
                id="newsletter-footer-form"
                onSubmit={handleNewsSubmit}
                className="flex max-w-sm rounded overflow-hidden border border-white/10 focus-within:border-brand-orange/60 transition-colors"
                autoComplete="off"
              >
                <input
                  id="newsletter-footer-email"
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="name@business.com"
                  className="flex-1 px-3.5 py-2.5 bg-neutral-950 text-xs text-white placeholder-neutral-700 focus:outline-none font-sans"
                />
                <button
                  id="newsletter-footer-submit"
                  type="submit"
                  className="px-4 bg-brand-orange hover:bg-brand-orange/95 text-white text-xs font-bold uppercase transition-opacity flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Lower row details & credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-600">
          <div>
            <span>&copy; {new Date().getFullYear()} {t.meta.brandName}. {lang === 'en' ? 'All rights reserved.' : 'Hak cipta dilindungi.'}</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
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
