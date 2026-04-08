"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-navy-950 text-white/70 text-xs py-2 px-4 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock size={12} />
              Mon–Sun: 10:00 AM – 11:30 PM
            </span>
            <span className="flex items-center gap-1">
              <Phone size={12} />
              +91 86047-90727
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={12} />
            Near MMMUT, Kunraghat, Gorakhpur
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy-900/95 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-navy-800/90 backdrop-blur-md"
        }`}
      >
        <div className="container-custom flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden border-2 border-white shadow-md shadow-white/10 group-hover:shadow-gold-400/30 group-hover:shadow-lg transition-all duration-300">
              <Image src="/logo.png" alt="7Days Restra Logo" fill sizes="56px" className="object-cover group-hover:scale-110 transition-transform duration-300" priority />
            </div>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white hover:text-gold-300 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gold-400 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/918604790727"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold py-2.5 px-5 rounded-full text-white transition-all duration-300 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #c9982e 0%, #d4a843 50%, #b8860b 100%)', boxShadow: '0 4px 16px rgba(201,152,46,0.3)' }}
            >
              Reserve Table
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-navy-900/98 backdrop-blur-xl border-t border-teal-700/30 overflow-hidden"
            >
              <nav className="container-custom py-4 flex flex-col gap-3" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-white/80 hover:text-gold-300 py-2 border-b border-white/10 last:border-0 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://wa.me/918604790727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-xs font-semibold py-2.5 text-center mt-2 rounded-full text-white"
                  style={{ background: 'linear-gradient(135deg, #c9982e 0%, #d4a843 50%, #b8860b 100%)' }}
                >
                  Reserve Table
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
