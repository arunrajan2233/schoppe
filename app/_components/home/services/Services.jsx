'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Droplets, Trees, Building2, Wrench, Check, 
  ArrowRight, CircleDot, ChevronRight
} from 'lucide-react';
import Image from 'next/image';

const SERVICES = [
  {
    id: 'reinigung',
    number: '01',
    title: 'Reinigung',
    icon: Sparkles,
    accent: '#27AAA7',
    tint: '#EDF9F8',
    image: '/assets/image/home/service1.webp',
    intro:
      'Böden, Treppenhäuser, Tiefgaragen und Einrichtungen brauchen regelmäßige Reinigung und Pflege. Das übernehmen wir für maximale Sauberkeit und echten Werterhalt.',
    bullets: [
      'Unterhaltsreinigung',
      'Treppenhausreinigung',
      'Grundreinigung',
      'Parkhaus- und Tiefgaragenreinigung',
      'Bauendreinigung',
      'Schimmel- und Grünbelagbeseitigung',
      'Teppichreinigung',
      'Büro- und Praxisreinigungen',
    ],
  },
  {
    id: 'glas-fassade',
    number: '02',
    title: 'Glas- & Fassade',
    icon: Droplets,
    accent: '#3B82F6',
    tint: '#EBF3FE',
    image: '/assets/image/home/service2.webp',
    intro:
      'Unsere ausgebildeten Glas- und Gebäudereiniger sorgen jederzeit für einen klaren Durchblick – mit modernster Technik für streifenfreie Flächen.',
    bullets: [
      'Glasreinigung innen und außen',
      'Fassadenreinigung',
      'Graffitientfernung',
      'Reinigung von Markisen',
      'Dachflächenreinigung',
      'Regenrinnenreinigung',
    ],
  },
  {
    id: 'garten',
    number: '03',
    title: 'Gartenpflege',
    icon: Trees,
    accent: '#22C55E',
    tint: '#ECFDF3',
    image: '/assets/image/home/service3.webp',
    intro:
      'Wir liefern die Expertise, damit die Außenanlagen Ihrer Objekte dauerhaft und langfristig grün und gepflegt aussehen.',
    bullets: [
      'Rasenpflege',
      'Bewässerung',
      'Grünanlagenpflege',
      'Gehölzflächenpflege',
      'Gehwegreinigung',
      'Unkrautbeseitigung',
    ],
  },
  {
    id: 'hausmeister',
    number: '04',
    title: 'Hausmeister',
    icon: Building2,
    accent: '#F59E0B',
    tint: '#FFFBEB',
    image: '/assets/image/home/service1.webp',
    intro:
      'Wir sind Ihr erster Ansprechpartner vor Ort – rund um die Uhr verfügbar bei allen Fragen rund um das Objekt.',
    bullets: [
      'Schadensfall-Verfügbarkeit',
      'Koordination der Dienstleister',
      'Zählerstandablesung',
      'Überwachung technischer Anlagen',
      'Durchsetzung der Hausordnung',
      'Kleinreparaturen',
    ],
  },
  {
    id: 'handwerker',
    number: '05',
    title: 'Handwerker',
    icon: Wrench,
    accent: '#EF4444',
    tint: '#FEF2F2',
    image: '/assets/image/home/service2.webp',
    intro:
      'Für alle kleinen und großen Anforderungen in Ihrer Immobilie – von Kleinreparatur bis zur handwerklichen Aufgabe.',
    bullets: [
      'Wasserschäden',
      'Installationen',
      'Möbel Auf- und Abbau',
      'Schönheitsreparaturen',
      'Malerarbeiten',
      'Notöffnung von Türen',
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const autoRotateRef = useRef(null);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    autoRotateRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % SERVICES.length);
        setVisible(true);
      }, 150);
    }, 3000);

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
      autoRotateRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (!autoRotateRef.current) {
      autoRotateRef.current = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
          setActive((prev) => (prev + 1) % SERVICES.length);
          setVisible(true);
        }, 150);
      }, 3000);
    }
  };

  const handleImageError = (serviceId) => {
    setImageErrors(prev => ({
      ...prev,
      [serviceId]: true
    }));
  };

  const getImageSrc = (service) => {
    if (imageErrors[service.id]) {
      return `https://placehold.co/800x400/${service.accent.replace('#', '')}/FFFFFF?text=${encodeURIComponent(service.title)}`;
    }
    return service.image;
  };

  const service = SERVICES[active];
  const Icon = service.icon;

  function selectService(i) {
    if (i === active) return;
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
      autoRotateRef.current = null;
      setTimeout(() => {
        if (!autoRotateRef.current) {
          autoRotateRef.current = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
              setActive((prev) => (prev + 1) % SERVICES.length);
              setVisible(true);
            }, 150);
          }, 3000);
        }
      }, 5000);
    }
    
    setVisible(false);
    setTimeout(() => {
      setActive(i);
      setVisible(true);
    }, 150);
  }

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#e8f4f8] via-[#f0f7fa] to-[#e8f4f8] px-4 py-16 sm:py-20 lg:px-8"
    >
      {/* Background decorative elements */}
      <div className="absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-[#27AAA7]/10 blur-3xl" />
      <div className="absolute -left-32 bottom-20 h-[400px] w-[400px] rounded-full bg-[#3B82F6]/8 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#27AAA7]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className={`mb-10 max-w-2xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-6 bg-[#27AAA7]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#27AAA7]">
              Unsere Leistungen
            </span>
            <span className="h-px w-6 bg-[#27AAA7]" />
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl lg:text-5xl">
            <span className="relative inline-block">
              <span className="relative z-10">Fünf</span>
              <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#27AAA7]/20 -z-0" />
            </span>
            <br />
            <span className="text-[#27AAA7]">Leistungsbereiche.</span>
            <br />
            <span className="text-gray-600 text-2xl sm:text-3xl lg:text-4xl">Ein Ansprechpartner.</span>
          </h2>
          
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            Von der Unterhaltsreinigung bis zur Notöffnung der Wohnungstür – Schopp24
            übernimmt die gesamte Bewirtschaftung Ihrer Immobilie aus einer Hand.
          </p>
        </div>

        {/* Mobile pill nav */}
        <div className={`mb-6 -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:hidden transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {SERVICES.map((s, i) => {
            const SIcon = s.icon;
            const isActive = i === active;
            return (
              <button
                key={s.id}
                onClick={() => selectService(i)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full border-2 px-3.5 py-1.5 text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? 'border-transparent text-white shadow-md scale-105'
                    : 'border-gray-300 text-gray-600 hover:border-[#27AAA7]/40 hover:text-gray-800'
                }`}
                style={isActive ? { backgroundColor: s.accent, boxShadow: `0 4px 15px ${s.accent}40` } : undefined}
              >
                <SIcon size={14} />
                {s.title}
              </button>
            );
          })}
        </div>

        <div 
          className="grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Desktop sidebar */}
          <div className={`hidden lg:block transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="rounded-xl bg-white/80 backdrop-blur-sm p-1.5 shadow-xl shadow-black/5 border border-white/80 h-full">
              <div className="flex flex-col h-full">
                {SERVICES.map((s, i) => {
                  const SIcon = s.icon;
                  const isActive = i === active;
                  const isHovered = hoveredIndex === i;
                  
                  return (
                    <button
                      key={s.id}
                      onClick={() => selectService(i)}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-all duration-300 hover:bg-gray-50/80 flex-1"
                    >
                      <span
                        className={`absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-full transition-all duration-300 ${
                          isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                        }`}
                        style={{ backgroundColor: s.accent }}
                      />
                      
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          isActive ? 'shadow-md scale-105' : isHovered ? 'scale-105' : 'scale-100'
                        }`}
                        style={{
                          backgroundColor: isActive ? s.accent : s.tint,
                          color: isActive ? '#fff' : s.accent,
                          boxShadow: isActive ? `0 4px 15px ${s.accent}40` : 'none',
                        }}
                      >
                        <SIcon size={16} strokeWidth={isActive ? 2 : 1.5} />
                      </span>
                      
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`text-[9px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                              isActive ? 'text-[#27AAA7]' : 'text-gray-400'
                            }`}
                          >
                            {s.number}
                          </span>
                          {isActive && <CircleDot size={5} className="text-[#27AAA7]" fill="#27AAA7" />}
                        </div>
                        <span
                          className={`block truncate text-sm font-semibold transition-colors duration-300 ${
                            isActive ? 'text-gray-800' : 'text-gray-500 group-hover:text-gray-800'
                          }`}
                        >
                          {s.title}
                        </span>
                      </div>
                      
                      {isActive && <ChevronRight size={14} className="text-[#27AAA7]" />}
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Trust badge */}
            <div className="mt-4 rounded-xl bg-white/80 backdrop-blur-sm p-3 border border-white/80 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-1.5">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-300"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-700">500+ Kunden</p>
                  <p className="text-[9px] text-gray-400">Vertrauen auf uns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content panel */}
          <div
            className={`transition-all duration-150 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="group overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl shadow-black/5 border border-white/80 h-full">
              {/* Image Header */}
              <div className="relative h-52 sm:h-60 overflow-hidden bg-gray-100">
                <Image
                  src={getImageSrc(service)}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={() => handleImageError(service.id)}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={active === 0}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Icon overlay */}
                <div className="absolute bottom-4 left-4">
                  <div 
                    className="flex h-14 w-14 items-center justify-center rounded-xl shadow-xl backdrop-blur-sm"
                    style={{
                      backgroundColor: `${service.accent}CC`,
                      boxShadow: `0 8px 30px ${service.accent}40`,
                    }}
                  >
                    <Icon size={28} strokeWidth={1.5} className="text-white" />
                  </div>
                </div>

                {/* Number overlay */}
                <div className="absolute top-4 right-4">
                  <span 
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg bg-black/50 backdrop-blur-sm text-white"
                  >
                    {service.number}
                  </span>
                </div>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {SERVICES.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === active ? 'w-6' : 'w-1.5'
                      }`}
                      style={{ 
                        backgroundColor: i === active ? '#FFFFFF' : 'rgba(255,255,255,0.4)'
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="p-5 sm:p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <span 
                      className="text-[10px] font-bold uppercase tracking-[0.15em]"
                      style={{ color: service.accent }}
                    >
                      {service.number}
                    </span>
                    <h3 className="mt-0.5 text-xl font-bold text-gray-800 sm:text-2xl">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-[15px]">
                  {service.intro}
                </p>

                <div className="mt-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
                    Unser Service
                  </p>
                  <ul className="mt-2 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                        <span className="mt-0.5 flex h-3 w-3 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: service.accent + '20' }}>
                          <Check size={9} strokeWidth={3} style={{ color: service.accent }} />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="group inline-flex items-center gap-1.5 text-xs font-semibold transition-all hover:gap-2.5" style={{ color: service.accent }}>
                    Mehr erfahren
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}