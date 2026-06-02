"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F1C2E]/95 backdrop-blur-sm border-b border-[#C9A96E]/20">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-semibold text-white tracking-wide">
            Value Properties
          </span>
          <span className="text-[10px] text-[#C9A96E] tracking-[0.2em] uppercase">
            Curated by Sreeja
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/explore" className="text-sm text-white/70 hover:text-[#C9A96E] transition-colors tracking-wide">
            Explore Map
          </Link>
          <Link href="/properties" className="text-sm text-white/70 hover:text-[#C9A96E] transition-colors tracking-wide">
            Properties
          </Link>
          <Link href="/contact" className="text-sm text-white/70 hover:text-[#C9A96E] transition-colors tracking-wide">
            Contact
          </Link>
          <Link href="/dashboard" className="text-sm text-white/70 hover:text-[#C9A96E] transition-colors tracking-wide">
            My Enquiries
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919820000000"
            className="flex items-center gap-2 text-sm text-[#C9A96E] hover:text-white transition-colors"
          >
            <Phone size={14} />
            Speak to Sreeja
          </a>
          <Link
            href="/auth/login"
            className="text-sm border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0F1C2E] transition-colors px-4 py-2 font-medium tracking-wide"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0F1C2E] border-t border-[#C9A96E]/20 px-6 py-6 flex flex-col gap-5">
          <Link href="/explore" onClick={() => setOpen(false)} className="text-white/70 hover:text-[#C9A96E] text-sm tracking-wide">Explore Map</Link>
          <Link href="/properties" onClick={() => setOpen(false)} className="text-white/70 hover:text-[#C9A96E] text-sm tracking-wide">Properties</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="text-white/70 hover:text-[#C9A96E] text-sm tracking-wide">Contact</Link>
          <Link href="/dashboard" onClick={() => setOpen(false)} className="text-white/70 hover:text-[#C9A96E] text-sm tracking-wide">My Enquiries</Link>
          <Link href="/auth/login" onClick={() => setOpen(false)} className="text-[#C9A96E] text-sm border-t border-[#C9A96E]/20 pt-4">Sign In</Link>
        </div>
      )}
    </nav>
  );
}
