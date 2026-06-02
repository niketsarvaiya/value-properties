import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F1C2E] text-white/60 border-t border-[#C9A96E]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="font-serif text-2xl font-semibold text-white block">Value Properties</span>
              <span className="text-xs text-[#C9A96E] tracking-[0.2em] uppercase">Curated by Sreeja</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              South Mumbai's most curated luxury real estate consultancy. Every property personally vetted by Sreeja.
            </p>
            <div className="mt-6 text-sm">
              <p className="text-white font-medium">Sreeja</p>
              <a href="tel:+919820000000" className="text-[#C9A96E] hover:text-white transition-colors">+91 98200 00000</a>
              <br />
              <a href="mailto:sreeja@valueproperties.in" className="text-[#C9A96E] hover:text-white transition-colors">sreeja@valueproperties.in</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-widest uppercase mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/explore" className="hover:text-[#C9A96E] transition-colors">Mumbai Map</Link></li>
              <li><Link href="/properties" className="hover:text-[#C9A96E] transition-colors">All Properties</Link></li>
              <li><Link href="/properties?configuration=penthouse" className="hover:text-[#C9A96E] transition-colors">Penthouses</Link></li>
              <li><Link href="/properties?viewType=sea" className="hover:text-[#C9A96E] transition-colors">Sea-Facing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/contact" className="hover:text-[#C9A96E] transition-colors">Contact Sreeja</Link></li>
              <li><Link href="/auth/login" className="hover:text-[#C9A96E] transition-colors">Client Login</Link></li>
              <li><Link href="/dashboard" className="hover:text-[#C9A96E] transition-colors">My Enquiries</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#C9A96E]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Value Properties. All rights reserved.</p>
          <p>RERA Registered. All prices are indicative and subject to change.</p>
        </div>
      </div>
    </footer>
  );
}
