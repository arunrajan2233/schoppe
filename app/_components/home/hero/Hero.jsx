'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Sparkles, ArrowRight, Shield, Clock, Award } from "lucide-react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative flex h-screen min-h-[680px] w-full items-center justify-center overflow-hidden">
      {/* Video background with enhanced overlay */}
      <video
        className="absolute inset-0 h-full w-full object-cover scale-105"
        src="/assets/video/14213975_3840_2160_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dynamic gradient overlay with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 via-50% to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#27AAA7]/20 via-transparent to-[#27AAA7]/10" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#27AAA7]/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[#27AAA7]/10 blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        {/* Badge/Eyebrow with glass effect */}
        <div className={`flex items-center gap-3 transition-all duration-700 delay-100 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#27AAA7]" />
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm border border-white/10">
            <Sparkles className="h-3 w-3 text-[#27AAA7]" />
            Premium Service
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#27AAA7]" />
        </div>

        {/* Headline with modern typography */}
        <h1 className={`mt-8 transition-all duration-700 delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-6xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
            Schopp
            <span className="relative inline-block">
              <span className="text-[#27AAA7]">24</span>
              <span className="absolute -top-2 -right-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27AAA7] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#27AAA7]"></span>
                </span>
              </span>
            </span>
          </span>
          <span className="mt-2 block text-2xl font-light tracking-[0.15em] text-white/80 sm:text-3xl md:text-4xl lg:text-5xl">
            Gebäudemanagement
          </span>
        </h1>

        {/* Services with modern pill design */}
        <div className={`mt-10 flex flex-wrap items-center justify-center gap-3 transition-all duration-700 delay-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {["Hausmeisterservice", "Reinigung", "Gartenpflege", "Handwerkerservice"].map(
            (service, i) => (
              <span
                key={service}
                className="group relative px-5 py-2 text-sm font-medium tracking-wide text-white/90 transition-all hover:text-white"
              >
                <span className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-[#27AAA7]/50 transition-colors" />
                <span className="relative">{service}</span>
              </span>
            )
          )}
        </div>

        {/* CTA with modern design */}
        <div className={`mt-12 flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-400 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#27AAA7] to-[#1d8a88] px-8 py-4 text-sm font-semibold text-white shadow-2xl shadow-[#27AAA7]/30 transition-all hover:shadow-[#27AAA7]/50 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Kontakt aufnehmen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
          </Link>
          
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white/80 transition-all hover:text-white hover:bg-white/10 backdrop-blur-sm border border-white/10"
          >
            Unsere Leistungen
          </Link>
        </div>

        {/* Trust indicators */}
        <div className={`mt-10 flex items-center gap-6 text-xs text-white/60 transition-all duration-700 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="flex items-center gap-2">
            <Shield className="h-3.5 w-3.5 text-[#27AAA7]" />
            100% Zuverlässigkeit
          </span>
          <span className="w-px h-4 bg-white/20" />
          <span className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-[#27AAA7]" />
            24/7 Erreichbar
          </span>
          <span className="w-px h-4 bg-white/20" />
          <span className="flex items-center gap-2">
            <Award className="h-3.5 w-3.5 text-[#27AAA7]" />
            Zertifiziert
          </span>
        </div>
      </div>

      {/* Enhanced scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
          Scrollen
        </span>
        <ChevronDown className="h-5 w-5 text-white/40 animate-bounce" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </section>
  );
}