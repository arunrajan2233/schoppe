"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LogIn } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", key: "home", label: "Startseite" },
  { href: "/projects", key: "projects", label: "Projekte" },
  { href: "/jobs", key: "jobs", label: "Jobs" },
  { href: "/services", key: "services", label: "Leistungen" },
  { href: "/about", key: "about", label: "Über uns" },
  { href: "/contact", key: "contact", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); // set correct state on mount (e.g. after refresh mid-scroll)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Only the homepage has a dark hero behind the header; every other page has
  // a plain light background, so it needs the solid header from the start.
  const isHome = pathname === "/";

  // Mobile menu open should behave like "scrolled" so the drawer always has a white backing
  const isSolid = scrolled || menuOpen || !isHome;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isSolid
          ? "border-b border-black/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Left: logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center"
        >
          <Image
            src="/logo2.png"
            alt="Schopp24 Gebäudemanagement"
            width={334}
            height={123}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        {/* Middle: desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-base font-medium transition-colors hover:text-[#00ACA9] ${
                  active
                    ? "text-[#00ACA9]"
                    : isSolid
                    ? "text-neutral-700"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: login (desktop) + mobile menu toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden items-center gap-2 rounded-full bg-[#00ACA9] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#00918e] lg:inline-flex"
          >
            <LogIn size={16} strokeWidth={2} />
            Login
          </Link>

          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-md p-2 lg:hidden ${
              isSolid ? "text-neutral-700" : "text-white"
            }`}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav className="border-t border-black/10 bg-white px-4 py-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md px-3 py-2 text-sm font-medium ${
                      active
                        ? "bg-[#00ACA9]/10 text-[#00ACA9]"
                        : "text-neutral-700 hover:bg-neutral-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-[#00ACA9] px-3 py-2.5 text-sm font-semibold text-white hover:bg-[#00918e]"
              >
                <LogIn size={16} strokeWidth={2} />
                Login
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}