'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Droplets, Trees, Building2, Wrench, Check,
  Star, ArrowRight, Clock, Users, Award
} from 'lucide-react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';

const SERVICES = [
  {
    id: 'reinigung',
    title: 'Reinigung',
    icon: Sparkles,
    accent: '#27AAA7',
    image: '/assets/image/home/service1.webp',
    description: 'Professionelle Reinigung für maximale Sauberkeit und Werterhalt Ihrer Immobilie.',
    features: [
      'Unterhaltsreinigung',
      'Treppenhausreinigung',
      'Grundreinigung',
      'Parkhausreinigung',
    ],
    stats: '250+ Projekte',
    rating: 4.9,
    reviews: 128,
    badge: 'Premium',
  },
  {
    id: 'glas-fassade',
    title: 'Glas & Fassade',
    icon: Droplets,
    accent: '#3B82F6',
    image: '/assets/image/home/service2.webp',
    description: 'Streifenfreie Glas- und Fassadenreinigung mit modernster Technik für klaren Durchblick.',
    features: [
      'Glasreinigung innen & außen',
      'Fassadenreinigung',
      'Graffitientfernung',
      'Dachflächenreinigung',
    ],
    stats: '180+ Projekte',
    rating: 4.8,
    reviews: 95,
    badge: 'Expert',
  },
  {
    id: 'garten',
    title: 'Gartenpflege',
    icon: Trees,
    accent: '#22C55E',
    image: '/assets/image/home/service3.webp',
    description: 'Fachgerechte Pflege Ihrer Außenanlagen für dauerhaft grüne und gepflegte Grünflächen.',
    features: [
      'Rasenpflege',
      'Bewässerung',
      'Grünanlagenpflege',
      'Unkrautbeseitigung',
    ],
    stats: '120+ Projekte',
    rating: 4.7,
    reviews: 78,
    badge: 'Grün',
  },
  {
    id: 'hausmeister',
    title: 'Hausmeister',
    icon: Building2,
    accent: '#F59E0B',
    image: '/assets/image/home/service1.webp',
    description: 'Ihr zuverlässiger Ansprechpartner vor Ort – rund um die Uhr für Ihre Immobilie da.',
    features: [
      'Schadensfall-Verfügbarkeit',
      'Dienstleister-Koordination',
      'Technische Anlagen-Überwachung',
      'Kleinreparaturen',
    ],
    stats: '300+ Projekte',
    rating: 4.9,
    reviews: 156,
    badge: 'Top',
  },
  {
    id: 'handwerker',
    title: 'Handwerker',
    icon: Wrench,
    accent: '#EF4444',
    image: '/assets/image/home/service2.webp',
    description: 'Kompetente handwerkliche Lösungen für alle kleinen und großen Anforderungen.',
    features: [
      'Wasserschäden',
      'Installationen',
      'Schönheitsreparaturen',
      'Notöffnung von Türen',
    ],
    stats: '200+ Projekte',
    rating: 4.8,
    reviews: 112,
    badge: 'Zuverlässig',
  },
];

export default function ServicesCarousel() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [api, setApi] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const autoScrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

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

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    // Start auto-scroll when carousel is ready
    const startAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }

      autoScrollRef.current = setInterval(() => {
        if (!isPaused) {
          const currentIndex = api.selectedScrollSnap();
          const nextIndex = (currentIndex + 1) % SERVICES.length;
          api.scrollTo(nextIndex);
        }
      }, 3000);
    };

    startAutoScroll();

    // Cleanup on unmount
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };
  }, [api, isPaused]);

  const handleImageError = (serviceId) => {
    setImageErrors(prev => ({
      ...prev,
      [serviceId]: true
    }));
  };

  const getImageSrc = (service) => {
    if (imageErrors[service.id]) {
      return `https://placehold.co/600x400/${service.accent.replace('#', '')}/FFFFFF?text=${encodeURIComponent(service.title)}`;
    }
    return service.image;
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100/50 px-4 py-20 sm:py-28 lg:px-8"
    >
      {/* Background decorative elements */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#27AAA7]/5 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[#3B82F6]/5 blur-3xl" />
      
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#27AAA7] to-transparent transition-all duration-1000 ${
        isVisible ? 'scale-x-100' : 'scale-x-0'
      }`} />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-10 bg-[#27AAA7]" />
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#27AAA7]">
              Unsere Leistungen
            </span>
            <span className="h-px w-10 bg-[#27AAA7]" />
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            <span className="relative inline-block">
              <span className="relative z-10">Services</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#27AAA7]/20 -z-0" />
            </span>
            <br />
            <span className="text-[#27AAA7]">im Überblick</span>
          </h2>
          
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg max-w-2xl mx-auto">
            Entdecken Sie unsere vielfältigen Dienstleistungen für Ihre Immobilie – 
            alles aus einer Hand.
          </p>
        </div>

        {/* Carousel */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-4">
              {SERVICES.map((service, index) => {
                const Icon = service.icon;
                return (
                  <CarouselItem key={service.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full border-0 shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-black/10 transition-all duration-400 hover:-translate-y-2 overflow-hidden group">
                        <CardContent className="p-0 h-full flex flex-col">
                          {/* Image Section */}
                          <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-100">
                            <Image
                              src={getImageSrc(service)}
                              alt={service.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              onError={() => handleImageError(service.id)}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              priority={index < 2}
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            
                            {/* Badge */}
                            <div className="absolute top-4 right-4">
                              <span 
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
                                style={{
                                  backgroundColor: service.accent,
                                  color: 'white',
                                  boxShadow: `0 4px 15px ${service.accent}50`,
                                }}
                              >
                                <Award size={14} />
                                {service.badge}
                              </span>
                            </div>

                            {/* Icon overlay */}
                            <div className="absolute bottom-4 left-4">
                              <div 
                                className="flex h-12 w-12 items-center justify-center rounded-xl shadow-xl backdrop-blur-sm"
                                style={{
                                  backgroundColor: `${service.accent}CC`,
                                  boxShadow: `0 8px 30px ${service.accent}40`,
                                }}
                              >
                                <Icon size={24} strokeWidth={1.5} className="text-white" />
                              </div>
                            </div>

                            {/* Rating overlay */}
                            <div className="absolute bottom-4 right-4">
                              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-bold text-white">{service.rating}</span>
                                <span className="text-xs text-white/70">({service.reviews})</span>
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {service.title}
                            </h3>
                            
                            <p className="text-base text-gray-600 leading-relaxed mb-4">
                              {service.description}
                            </p>
                            
                            <div className="flex items-center gap-3 mb-4">
                              <div className="flex items-center gap-1.5">
                                <Clock size={16} className="text-gray-400" />
                                <span className="text-sm font-medium text-gray-600">{service.stats}</span>
                              </div>
                              <span className="text-gray-300">|</span>
                              <div className="flex items-center gap-1.5">
                                <Users size={16} className="text-gray-400" />
                                <span className="text-sm font-medium text-gray-600">{service.reviews}+ Bewertungen</span>
                              </div>
                            </div>
                            
                            <div className="mt-2 flex-1">
                              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 mb-3">
                                Unser Service
                              </p>
                              <ul className="grid grid-cols-2 gap-2">
                                {service.features.slice(0, 4).map((feature) => (
                                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                                    <span 
                                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                                      style={{ backgroundColor: `${service.accent}15` }}
                                    >
                                      <Check size={12} strokeWidth={3} style={{ color: service.accent }} />
                                    </span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* CTA */}
                            <div className="mt-5 pt-5 border-t border-gray-100">
                              <button 
                                className="group inline-flex items-center gap-2 text-base font-semibold transition-all hover:gap-4"
                                style={{ color: service.accent }}
                              >
                                Mehr erfahren
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1.5" />
                              </button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <CarouselPrevious className="static h-12 w-12 border-2 border-gray-200 hover:border-[#27AAA7] hover:bg-[#27AAA7] hover:text-white hover:shadow-lg hover:shadow-[#27AAA7]/20 transition-all duration-300" />
              <div className="flex gap-3">
                {SERVICES.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      // Pause auto-scroll temporarily when manually navigating
                      setIsPaused(true);
                      api?.scrollTo(index);
                      setTimeout(() => setIsPaused(false), 3000);
                    }}
                    className="group relative"
                  >
                    <span 
                      className={`block h-2.5 rounded-full transition-all duration-300 ${
                        api?.selectedScrollSnap() === index ? 'w-8' : 'w-2.5 hover:w-5'
                      }`}
                      style={{
                        backgroundColor: api?.selectedScrollSnap() === index 
                          ? service.accent 
                          : '#D1D5DB',
                      }}
                    />
                  </button>
                ))}
              </div>
              <CarouselNext className="static h-12 w-12 border-2 border-gray-200 hover:border-[#27AAA7] hover:bg-[#27AAA7] hover:text-white hover:shadow-lg hover:shadow-[#27AAA7]/20 transition-all duration-300" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}