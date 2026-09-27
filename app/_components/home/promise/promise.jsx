'use client'
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Wrench, Leaf, Handshake } from "lucide-react";

export default function Promise() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Image data for the gallery - only 3 images
  const images = [
    {
      src: "/assets/image/home/pexels-pixabay-38325.jpg",
      alt: "Professionelle Reinigung",
      label: "Reinigung"
    },
    {
      src: "/assets/image/home/66e3dc07edd8d90bd4fd32e0_attachment_1_Foto 1.webp",
      alt: "Facility Service",
      label: "Facility-Service"
    },
    {
      src: "/assets/image/home/pexels-pavel-danilyuk-7108400.jpg",
      alt: "Professionelle Ausstattung",
      label: "Ausstattung"
    }
  ];

  // Trust data with Lucide icons
  const trustItems = [
    { 
      icon: Wrench, 
      label: 'Professionell', 
      sub: 'Modernste Ausrüstung' 
    },
    { 
      icon: Leaf, 
      label: 'Nachhaltig', 
      sub: 'Umweltfreundlich' 
    },
    { 
      icon: Handshake, 
      label: 'Zuverlässig', 
      sub: 'Seit über 15 Jahren' 
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white py-20 md:py-28 lg:py-32"
    >
      {/* Background decorative elements with fade-in */}
      <div 
        className={`absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#00ACA9]/5 blur-3xl transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      <div 
        className={`absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#00ACA9]/5 blur-3xl transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      
      {/* Top accent line with slide-in animation */}
      <div 
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00ACA9] to-transparent opacity-60 transition-all duration-1000 delay-200 ${
          isVisible ? 'scale-x-100' : 'scale-x-0'
        }`} 
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 items-start">
          {/* Image Column - Multiple Images */}
          <div 
            className={`order-2 lg:order-1 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 relative">
              {/* Main large image */}
              <div className="col-span-2 relative overflow-hidden rounded-2xl shadow-xl shadow-black/5 group">
                <div className="aspect-[16/9] w-full bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src="/assets/image/home/ra66bm60-gb-14-scrubber-dryer-floor-scrubber-cleaning-machine.jpeg"
                    alt="Professionelles Gebäudemanagement"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    onError={(e) => {
                      e.target.src = `https://placehold.co/800x450/27AAA7/FFFFFF?text=Gebäudemanagement`;
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs font-medium text-white/90">Professionelles Gebäudemanagement</p>
                </div>
              </div>

              {/* Two smaller images - Only first 2 from images array */}
              {images.slice(0, 2).map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-lg shadow-black/5 group transition-all duration-500 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1"
                >
                  <div className="aspect-square w-full bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      onError={(e) => {
                        e.target.src = `https://placehold.co/400x400/27AAA7/FFFFFF?text=${image.label}`;
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2 sm:p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[10px] sm:text-xs font-medium text-white/90">{image.label}</p>
                  </div>
                </div>
              ))}

              {/* Experience badge - positioned absolutely with spring animation */}
              {/* <div 
                className={`absolute -left-3 -top-3 sm:-left-4 sm:-top-4 transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
              >
                <div className="flex flex-col items-center rounded-xl bg-[#00ACA9] px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg shadow-[#00ACA9]/30 hover:shadow-[#00ACA9]/50 transition-shadow duration-300 hover:scale-105">
                  <span className="text-base font-bold text-white sm:text-xl">15</span>
                  <span className="text-[8px] sm:text-[10px] font-medium uppercase tracking-wider text-white/80">
                    Jahre
                  </span>
                </div>
              </div> */}

              {/* Trust badge with slide-up animation */}
              {/* <div 
                className={`absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 transition-all duration-700 delay-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="flex items-center gap-2 sm:gap-3 rounded-xl bg-white/95 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-3 shadow-xl shadow-black/10 border border-white/50 hover:shadow-2xl hover:shadow-black/20 transition-shadow duration-300">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900 sm:text-sm">500+</p>
                    <p className="text-[8px] sm:text-[10px] font-medium text-gray-500">Zufriedene Kunden</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Content Column */}
          <div 
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Section Label */}
            <div className="mb-4 flex items-center gap-3">
              <span className={`h-px w-8 bg-[#00ACA9] transition-all duration-700 delay-300 ${
                isVisible ? 'w-8' : 'w-0'
              }`} />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00ACA9]">
                Unser Versprechen
              </span>
              <span className={`h-px w-8 bg-[#00ACA9] transition-all duration-700 delay-300 ${
                isVisible ? 'w-8' : 'w-0'
              }`} />
            </div>

            {/* Heading with stagger animation */}
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              <span className="relative inline-block">
                <span className={`relative z-10 transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  Wofur
                </span>
                {/* <span className={`absolute -bottom-1 left-0 right-0 h-3 bg-[#00ACA9]/20 -z-0 transition-all duration-700 delay-500 ${
                  isVisible ? 'scale-x-100' : 'scale-x-0'
                }`} /> */}
              </span>
              <br />
              <span className={`text-[#00ACA9] transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                wir stehen.
              </span>
            </h2>

            {/* Description with stagger */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className={`text-base sm:text-lg transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
                Mit unserer Erfahrung seit der Gründung ist die professionelle Betreuung 
                Ihrer Immobilien unsere Berufung. Mit engagierten Mitarbeitern, moderner 
                Ausstattung und umweltfreundlichen Reinigungsmitteln sorgen wir für die 
                professionelle Reinigung und Pflege Ihrer Immobilie und Außenanlagen, als 
                wären diese unsere eigenen.
              </p>
              <p className={`text-base sm:text-lg border-l-4 border-[#00ACA9] pl-4 text-gray-700 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}>
                Hausverwaltungen, Immobiliengesellschaften und Eigentümergemeinschaften
              </p>
            </div>

            {/* Trust Badges with Lucide icons and stagger */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              {trustItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`rounded-xl bg-gray-50/80 p-3 text-center shadow-sm border border-gray-100/50 transition-all duration-500 hover:shadow-md hover:bg-gray-100/80 hover:-translate-y-1 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="flex justify-center transition-transform duration-300 hover:scale-110">
                      <Icon 
                        className="h-8 w-8 text-[#00ACA9]" 
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="mt-2 text-xs font-bold text-gray-900">{item.label}</p>
                    {/* <p className="text-[10px] text-gray-500">{item.sub}</p> */}
                  </div>
                );
              })}
            </div>

            {/* CTA Link */}
            <div className={`mt-8 transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#00ACA9] transition-all hover:text-[#004884]"
              >
                <span className="relative">
                  Mehr über uns erfahren
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ACA9] transition-all duration-300 group-hover:w-full" />
                </span>
                <svg
                  className="h-4 w-4 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}