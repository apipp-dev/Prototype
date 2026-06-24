import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';

export default function SEO() {
  const { t, lang, currentPage } = useApp();

  // Create customized metadata based on currentPage and lang
  const getPageMeta = () => {
    const brand = t.meta.brandName || "SANTT PRODUCTION";
    const tagline = t.meta.tagline || "Document. Create. Inspire.";

    let pageTitle = `${brand} | ${tagline}`;
    let pageDesc = t.hero.subtitle;

    switch (currentPage) {
      case 'home':
        pageTitle = `${brand} | Cinematic Video, Photo & Drone Production Aceh`;
        pageDesc = t.hero.subtitle;
        break;
      case 'about':
        pageTitle = `${t.nav.about} | ${brand}`;
        pageDesc = t.about.subtitle || t.about.whoWeAre.desc;
        break;
      case 'services':
        pageTitle = `${t.nav.services} | ${brand}`;
        pageDesc = t.services.subtitle;
        break;
      case 'works':
        pageTitle = `${t.nav.works} | ${brand}`;
        pageDesc = t.works.subtitle;
        break;
      case 'pricing':
        pageTitle = `${t.nav.pricing} | ${brand}`;
        pageDesc = t.pricing.subtitle;
        break;
      case 'faq':
        pageTitle = `FAQ | ${brand}`;
        pageDesc = "Frequently Asked Questions about Santt Production's cinematic videography and aerial drone services in Banda Aceh, Aceh Besar, and Sabang.";
        break;
      case 'contact':
        pageTitle = `${t.nav.contact} | ${brand}`;
        pageDesc = t.contact.subtitle;
        break;
      default:
        break;
    }

    return {
      title: pageTitle,
      description: pageDesc,
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop", // default visual image
      url: typeof window !== 'undefined' ? window.location.href : '',
      lang: lang
    };
  };

  const meta = getPageMeta();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Standard DOM updates for immediate dynamic feedback
    document.title = meta.title;

    // Update or create meta description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', meta.description);

    // Update or create html lang attribute
    document.documentElement.setAttribute('lang', meta.lang);

    // OpenGraph Meta Tags for Rich Social Media Share Link Preview
    const ogTags = [
      { property: 'og:title', content: meta.title },
      { property: 'og:description', content: meta.description },
      { property: 'og:image', content: meta.image },
      { property: 'og:url', content: meta.url },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: t.meta.brandName },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: meta.title },
      { name: 'twitter:description', content: meta.description },
      { name: 'twitter:image', content: meta.image }
    ];

    ogTags.forEach(tag => {
      let element;
      if ('property' in tag) {
        element = document.head.querySelector(`meta[property="${tag.property}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute('property', tag.property);
          document.head.appendChild(element);
        }
      } else if ('name' in tag) {
        element = document.head.querySelector(`meta[name="${tag.name}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute('name', tag.name);
          document.head.appendChild(element);
        }
      }
      if (element) {
        element.setAttribute('content', tag.content);
      }
    });

  }, [meta.title, meta.description, meta.image, meta.url, meta.lang, t.meta.brandName]);

  // Support React 19 Document Metadata Hoisting as well
  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      
      {/* OpenGraph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={meta.url} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </>
  );
}
