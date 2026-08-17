import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#cara-kerja", label: "Cara Kerja" },
  { href: "/repository", label: "Repository" },
  { href: "/about", label: "Tentang Kami" },
];

/* -------------------------------------------------------------------------- */
/* Komponen Navigasi Utama (Efek Kaca Transparan & Transisi Scroll)          */
/* -------------------------------------------------------------------------- */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex flex-col items-center transition-all duration-500 pointer-events-none pt-2 sm:pt-4">
      <div
        className={`pointer-events-auto flex items-center justify-between gap-4 transition-all duration-500 ease-out ${scrolled
          ? "w-[92%] max-w-5xl rounded-full bg-white/40 px-4 sm:px-6 py-2.5 border border-white/40 backdrop-blur-xl shadow-xl shadow-slate-900/10"
          : "w-full max-w-6xl rounded-none bg-transparent px-4 sm:px-6 py-4 border-b border-transparent"
          }`}
      >
        {/* Logo Brand ProkerKita */}
        <a href="/" className="flex items-center gap-2 select-none z-[110] relative group">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md group-hover:scale-105 transition-transform duration-300">
            <path d="M20 38.5C20 38.5 3.5 25.5 3.5 15.5C3.5 6.3873 10.8873 2.5 20 2.5C29.1127 2.5 36.5 6.3873 36.5 15.5C36.5 25.5 20 38.5 20 38.5Z" fill="#0284C7" />
            <path d="M20 35C20 35 6 23.5 6 14.5C6 6.76801 12.268 0.5 20 0.5C27.732 0.5 34 6.76801 34 14.5C34 23.5 20 35 20 35Z" fill="#38BDF8" />
            <circle cx="20" cy="14" r="8" fill="white" />
            <path d="M20 18C20 18 24 9.5 29 11C30.5 11.45 27 18.5 20 18Z" fill="#4ADE80" />
            <path d="M20 17.5C20 17.5 15.5 11 12 13C10.5 13.85 14.5 19 20 17.5Z" fill="#22C55E" />
          </svg>
          <span className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800">
            Proker<span className="text-[#E67E22]">Kita</span><span className="text-[#2ECC71]">.</span>
          </span>
        </a>

        {/* Tautan Navigasi Desktop */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-bold text-ink/80 transition-colors hover:text-leaf"
            >
              {n.label}
            </a>
          ))}
          <a href="/validasi" className="btn-pionir btn-pionir-orange px-5 py-2.5 text-sm">
            Cek Proker Ini
          </a>
        </nav>

        {/* Tombol Menu Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-ink p-2 relative z-[110]"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Panel Dropdown Menu Mobile */}
      <div
        className={`md:hidden pointer-events-auto absolute top-full left-0 right-0 mt-2 mx-4 bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl rounded-2xl overflow-hidden transition-all duration-300 origin-top ${isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
      >
        <div className="flex flex-col p-4 gap-2">
          {navLinks.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-bold text-ink/80 transition-colors hover:text-leaf py-3 px-2 border-b border-slate-100 last:border-0"
            >
              {n.label}
            </a>
          ))}
          <a href="/validasi" onClick={() => setIsMobileMenuOpen(false)} className="btn-pionir btn-pionir-orange w-full py-3.5 mt-4 text-center text-sm font-bold">
            Cek Proker Ini
          </a>
        </div>
      </div>
    </header>
  );
}

export default Nav;
