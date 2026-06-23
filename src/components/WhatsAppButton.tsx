import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';

export default function WhatsAppButton() {
  const { lang } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show a small teaser notification badge after 10 seconds to prompt user
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    const defaultMsg = lang === 'en' 
      ? "Hello Santt Production, I'm interested in booking a cinematic production package."
      : "Halo Santt Production, saya tertarik memesan paket produksi sinematik.";
    const messageToSend = chatMessage.trim() || defaultMsg;
    const finalUrl = `https://wa.me/6282361111620?text=${encodeURIComponent(messageToSend)}`;
    try {
      window.open(finalUrl, '_blank');
    } catch (err) {
      console.warn("Could not open window:", err);
      try {
        window.location.href = finalUrl;
      } catch (e) {
        // fallback ignored
      }
    }
    setIsOpen(false);
  };

  const notificationText = lang === 'en'
    ? "Hi! Need a rapid quote or have filming day questions? Ask our producers live!"
    : "Halo! Butuh penawaran cepat atau ingin bertanya soal paket produksi? Hubungi produser kami!";

  const introText = lang === 'en'
    ? "Hello! Welcome to Santt Studio. We specialize in producing brand campaigns, documentaries, and FPV drone videos. Let us know what you want to build!"
    : "Halo! Selamat datang di Santt Studio. Kami mengabdi dalam memproduksi kampanye film, penceritaan, serta rekap drone FPV. Beritahu kami kebutuhan visual Anda!";

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      
      {/* Floating Teaser Notification Prompt */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 w-72 p-4 rounded-xl bg-[#0F0F0F] border border-brand-orange/40 shadow-2xl text-white mr-2"
          >
            <button
              onClick={() => setShowNotification(false)}
              className="absolute top-2 right-2 p-1 text-neutral-500 hover:text-white"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex gap-3">
              {/* Online avatar pulse indicator */}
              <div className="relative shrink-0 w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-brand-orange text-xs">
                S
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-[#0D0D0D] animate-ping" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-[#0D0D0D]" />
              </div>
              <div className="pr-4">
                <span className="text-[10px] font-mono text-brand-orange uppercase tracking-wider block font-bold mb-0.5">
                  Santt Producer / Online
                </span>
                <p className="text-xs text-neutral-300 font-light leading-normal">
                  {notificationText}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Primary Floating Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-brand-orange text-white shadow-[0_4px_25px_rgba(255,107,0,0.5)] cursor-pointer group"
        aria-label="Contact on WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform group-hover:rotate-90 duration-300" />
        ) : (
          <MessageCircle className="w-6 h-6 fill-current text-white transition-transform duration-300" />
        )}
        
        {/* Animated green active dot */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-white" />
          </span>
        )}
      </motion.button>

      {/* WhatsApp Mini Popup Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="absolute bottom-18 right-0 w-80 rounded-xl bg-neutral-950 border border-white/10 shadow-2xl overflow-hidden mr-1"
          >
            {/* Header branding */}
            <div className="p-4 bg-brand-orange flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-display font-extrabold text-white text-sm">
                SP
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border border-brand-orange" />
              </div>
              <div>
                <h4 className="text-sm font-display font-bold text-white uppercase leading-none">
                  SANTT EXECUTIVE TEAM
                </h4>
                <p className="text-[10px] text-white/80 font-mono mt-1 uppercase tracking-wider">
                  Typically replies in 5 minutes
                </p>
              </div>
            </div>

             {/* Chat viewport background */}
            <div className="p-4 bg-[#0E0E0E] space-y-3 max-h-60 overflow-y-auto">
              
              <div className="p-3.5 rounded-lg rounded-tl-none bg-[#161616] border border-white/5 max-w-[85%] text-xs text-neutral-300 leading-normal">
                {introText}
              </div>

            </div>

            {/* Input area */}
            <form onSubmit={handleStartChat} className="p-3.5 bg-[#0A0A0A] border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder={lang === 'en' ? 'Types of video desired...' : 'Jenis video yang dicari...'}
                className="flex-1 bg-neutral-900 border border-white/5 rounded px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange"
              />
              <button
                type="submit"
                className="p-2.5 rounded bg-brand-orange hover:bg-opacity-95 text-white transition-opacity"
                aria-label="Send WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
