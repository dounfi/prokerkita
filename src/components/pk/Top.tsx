import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MapNetwork, PinIcon, SectionLabel } from "./Decor";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const navLinks = [
  { href: "#masalah", label: "Masalah" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#validasi", label: "Validasi" },
  { href: "#repository", label: "Repository" },
  { href: "#faq", label: "FAQ" },
];

/* -------------------------------------------------------------------------- */
/* PART 1: THE NAVBAR (Glassmorphism & Scroll State Transition)               */
/* -------------------------------------------------------------------------- */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pointer-events-none pt-2 sm:pt-4">
      <div
        className={`pointer-events-auto flex items-center justify-between gap-4 transition-all duration-500 ease-out ${
          scrolled
            ? "w-[92%] max-w-5xl rounded-full bg-white/40 px-6 py-2.5 border border-white/40 backdrop-blur-xl shadow-xl shadow-slate-900/10"
            : "w-full max-w-6xl rounded-none bg-transparent px-6 py-4 border-b border-transparent"
        }`}
      >
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-leaf text-leaf-foreground shadow-sm transition-transform group-hover:scale-105">
            <PinIcon className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-ink">
            Proker<span className="text-leaf">Kita</span>
          </span>
        </a>

        {/* Desktop Links */}
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
          <a href="#validasi" className="btn-pionir btn-pionir-orange px-5 py-2.5 text-sm">
            Cek Proker Ini
          </a>
        </nav>

        {/* Mobile Action Button */}
        <a href="#validasi" className="btn-pionir btn-pionir-orange px-4 py-2 text-xs md:hidden">
          Cek Proker
        </a>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/* PART 2 & 3: FULL-SCREEN 3D PARALLAX HERO SECTION (GSAP + Layering)        */
/* -------------------------------------------------------------------------- */
export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Ambient Infinite Animations (Clouds, Birds, Swaying Trees)
      gsap.to(".cloud-panning-1", {
        x: "100vw",
        duration: 40,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".cloud-panning-2", {
        x: "-100vw",
        duration: 48,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".bird-origami-1", {
        y: -16,
        x: 30,
        rotation: 10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".bird-origami-2", {
        y: -20,
        x: -25,
        rotation: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".tree-sway-left", {
        rotation: 3.5,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".tree-sway-right", {
        rotation: -3.5,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2 & 3. Combine Pin and Parallax Scroll Scrubbing
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "+=120%", // Keep it pinned a bit longer for massive parallax effect
          scrub: 1, // Smooth scrubbing
          pin: true, // Pin the hero section
          pinSpacing: false, // Let the next section overlap
        },
      });

      // Layer 7: Typography & CTA Card moves UP massively and fades out
      tl.to(".layer-typography", { yPercent: -80, opacity: 0, ease: "none" }, 0);

      // Layer 4: Distant Mountains move DOWN slowly
      tl.to(".layer-mountains", { yPercent: 20, ease: "none" }, 0);

      // Layer 5: Posko House moves DOWN faster
      tl.to(".layer-posko", { yPercent: 40, scale: 1.05, ease: "none" }, 0);

      // Layer 6: Foreground (Trees & Terraces) moves DOWN fastest & zooms out
      tl.to(".layer-foreground", { yPercent: 75, scale: 1.15, ease: "none" }, 0);

      // Layer 2 & 3: Clouds & Birds move UP slightly
      tl.to(".layer-sky-elements", { yPercent: -30, ease: "none" }, 0);
    },
    { scope: heroRef },
  );

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#38bdf8] to-[#0284c7]"
    >
      {/* LAYER 1: Background Gradient & Pattern Overlay */}
      <div className="mask-pionir-pattern absolute inset-0 z-[1] opacity-10 pointer-events-none" />

      {/* -------------------------------------------------------------------- */}
      {/* LAYER 2 & 3: Ambient Clouds & Origami Birds                          */}
      {/* -------------------------------------------------------------------- */}
      <div className="layer-sky-elements absolute inset-0 z-[2] pointer-events-none">
        {/* Panning Clouds */}
        <div className="cloud-panning-1 absolute top-20 -left-64 opacity-80">
          <svg width="280" height="90" viewBox="0 0 280 90" fill="white">
            <path d="M 30,70 Q 50,30 90,40 Q 120,10 170,30 Q 210,20 250,50 Q 270,70 250,75 Z" />
          </svg>
        </div>
        <div className="cloud-panning-2 absolute top-36 -right-64 opacity-75">
          <svg width="320" height="100" viewBox="0 0 320 100" fill="white">
            <path d="M 40,80 Q 70,30 120,40 Q 160,10 220,30 Q 270,20 300,60 Z" />
          </svg>
        </div>

        {/* Origami Flying Birds */}
        <div className="bird-origami-1 absolute top-32 left-[18%]">
          <svg width="36" height="36" viewBox="0 0 40 40" fill="#ffc72c">
            <polygon points="20,5 38,20 22,25 20,38 15,24 2,18" />
          </svg>
        </div>
        <div className="bird-origami-2 absolute top-24 right-[22%]">
          <svg width="42" height="42" viewBox="0 0 40 40" fill="#f56e00">
            <polygon points="20,5 38,20 22,25 20,38 15,24 2,18" />
          </svg>
        </div>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* LAYER 4: Distant Mountain Peaks (Vector SVG)                         */}
      {/* -------------------------------------------------------------------- */}
      <div className="layer-mountains absolute bottom-0 left-0 w-full z-[3] pointer-events-none">
        <svg
          viewBox="0 0 1440 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient
              id="mtnCenterGrad"
              x1="720"
              y1="20"
              x2="720"
              y2="400"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="60%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#075985" />
            </linearGradient>
            <linearGradient
              id="mtnSideGrad"
              x1="350"
              y1="80"
              x2="350"
              y2="400"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>

          {/* Left Mountain */}
          <polygon points="80,400 380,100 680,400" fill="url(#mtnSideGrad)" opacity="0.9" />
          <polygon points="380,100 440,160 380,400" fill="#0284c7" opacity="0.35" />

          {/* Right Mountain */}
          <polygon points="760,400 1060,100 1360,400" fill="url(#mtnSideGrad)" opacity="0.9" />
          <polygon points="1060,100 1120,170 1060,400" fill="#075985" opacity="0.35" />

          {/* Center Main Mountain Peak */}
          <polygon points="420,380 720,20 1020,380" fill="url(#mtnCenterGrad)" />
          <polygon points="720,20 830,160 720,380" fill="#0369a1" opacity="0.55" />
          <polygon points="720,20 620,180 720,380" fill="#38bdf8" opacity="0.25" />

          {/* Origami Snow Cap */}
          <polygon
            points="720,20 680,75 710,85 720,80 735,90 760,70"
            fill="#ffffff"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* LAYER 5: Posko House / Central Joglo Structure                       */}
      {/* -------------------------------------------------------------------- */}
      <div className="layer-posko absolute bottom-[10vh] left-1/2 -translate-x-1/2 z-[4] w-[85vw] max-w-[850px] pointer-events-none">
        <svg
          viewBox="0 0 850 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <defs>
            <linearGradient
              id="jogloRoofGrad"
              x1="425"
              y1="40"
              x2="425"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#f56e00" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>

          {/* Base Foundation & Steps */}
          <rect x="220" y="220" width="410" height="60" fill="#78350f" rx="4" />
          <rect x="190" y="275" width="470" height="25" fill="#451a03" rx="2" />
          <polygon points="310,300 540,300 560,275 290,275" fill="#d97706" />

          {/* Pillars */}
          <rect x="250" y="170" width="16" height="110" fill="#f59e0b" />
          <rect x="320" y="170" width="16" height="110" fill="#f59e0b" />
          <rect x="390" y="170" width="16" height="110" fill="#f59e0b" />
          <rect x="444" y="170" width="16" height="110" fill="#f59e0b" />
          <rect x="514" y="170" width="16" height="110" fill="#f59e0b" />
          <rect x="584" y="170" width="16" height="110" fill="#f59e0b" />

          {/* Joglo Roof Lower Tier */}
          <polygon points="120,170 730,170 660,110 190,110" fill="url(#jogloRoofGrad)" />
          <polygon points="190,110 660,110 640,104 210,104" fill="#f59e0b" />

          {/* Joglo Roof Upper Apex */}
          <polygon points="210,110 640,110 540,25 310,25" fill="url(#jogloRoofGrad)" />
          <polygon points="310,25 540,25 520,12 330,12" fill="#ffc72c" />
          <polygon points="415,12 435,12 425,0" fill="#ffc72c" />

          {/* Center Banner Sign */}
          <rect x="345" y="200" width="160" height="65" fill="#002855" rx="6" />
          <rect
            x="353"
            y="208"
            width="144"
            height="49"
            fill="none"
            stroke="#ffc72c"
            strokeWidth="2"
            rx="4"
          />
          <text
            x="425"
            y="238"
            fill="#ffffff"
            fontSize="15"
            fontWeight="bold"
            fontFamily="sans-serif"
            textAnchor="middle"
          >
            PROKER KITA
          </text>
        </svg>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* LAYER 6: Foreground (Trees & Terraced Rice Fields)                   */}
      {/* -------------------------------------------------------------------- */}
      <div className="layer-foreground absolute bottom-0 left-0 w-full z-[5] pointer-events-none">
        <svg
          viewBox="0 0 1440 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient
              id="sawahGrad1"
              x1="720"
              y1="120"
              x2="720"
              y2="380"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient
              id="sawahGrad2"
              x1="720"
              y1="200"
              x2="720"
              y2="380"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* Left Swaying Palm Tree */}
          <g className="tree-sway-left" style={{ transformOrigin: "160px 380px" }}>
            <path
              d="M 160,380 Q 150,260 120,160"
              stroke="#78350f"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M 120,160 Q 60,130 20,170 M 120,160 Q 80,100 40,80 M 120,160 Q 160,90 190,100 M 120,160 Q 200,130 210,170"
              stroke="#10b981"
              strokeWidth="9"
              strokeLinecap="round"
            />
          </g>

          {/* Right Swaying Palm Tree */}
          <g className="tree-sway-right" style={{ transformOrigin: "1280px 380px" }}>
            <path
              d="M 1280,380 Q 1290,260 1320,160"
              stroke="#78350f"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M 1320,160 Q 1380,130 1420,170 M 1320,160 Q 1360,100 1400,80 M 1320,160 Q 1280,90 1250,100 M 1320,160 Q 1240,130 1230,170"
              stroke="#10b981"
              strokeWidth="9"
              strokeLinecap="round"
            />
          </g>

          {/* Back Rice Terrace Level */}
          <path
            d="M 0,220 C 350,180 650,260 950,200 C 1200,150 1350,210 1440,200 L 1440,380 L 0,380 Z"
            fill="url(#sawahGrad1)"
          />

          {/* Wavy Water River Channel */}
          <path
            d="M 460,380 C 510,310 530,280 560,240 C 580,220 610,230 640,250 C 680,280 690,330 730,380 Z"
            fill="#38bdf8"
            opacity="0.85"
          />

          {/* Middle Rice Terrace Level */}
          <path
            d="M 0,270 C 380,240 580,320 880,260 C 1130,210 1320,280 1440,260 L 1440,380 L 0,380 Z"
            fill="url(#sawahGrad2)"
          />

          {/* Front Rice Terrace Level (Flush to bottom) */}
          <path
            d="M 0,320 C 420,290 720,350 1020,300 C 1270,260 1390,320 1440,310 L 1440,380 L 0,380 Z"
            fill="#059669"
          />
          <path
            d="M 0,322 C 420,292 720,352 1020,302 C 1270,262 1390,322 1440,312"
            stroke="#ffc72c"
            strokeWidth="4"
            strokeDasharray="8 8"
            fill="none"
          />
        </svg>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* LAYER 7: Front Hero Typography & Action Glass Card                   */}
      {/* -------------------------------------------------------------------- */}
      <div className="layer-typography relative z-10 flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-36 px-4 text-center">
        <h1 className="font-display font-bold text-[clamp(2.3rem,5.5vw,4.8rem)] leading-[1.08] tracking-tight">
          <span className="hero-title-line">
            <span aria-hidden="true" className="hero-title-outline">
              Membangun Desa Bersama,
            </span>
            <span className="hero-title-fill">Membangun Desa Bersama,</span>
          </span>
          <span className="hero-title-line hero-title-line-strong mt-2">
            <span aria-hidden="true" className="hero-title-outline">
              Wujudkan Proker Nyata
            </span>
            <span className="hero-title-fill">Wujudkan Proker Nyata</span>
          </span>
        </h1>

        <p className="hero-sub mt-6 max-w-xl text-center text-base sm:text-lg text-ink font-bold bg-white/65 backdrop-blur-md px-6 py-4 rounded-2xl border-2 border-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
          ProkerKita ngecek ide proker KKN kamu ke laporan KKN desa-desa lain: pernah dicoba atau
          belum, hasilnya gimana, dan apa yang lebih masuk akal.
        </p>

        <div className="hero-cta mt-8 flex flex-wrap justify-center gap-4">
          <a href="#validasi" className="btn-pionir btn-pionir-orange px-8 py-3.5 text-lg">
            Cek Proker Ini
          </a>
          <a href="#repository" className="btn-pionir btn-pionir-yellow px-8 py-3.5 text-lg">
            Lihat Laporan
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SUBSEQUENT SECTIONS (Masalah, Cara Kerja)                                 */
/* -------------------------------------------------------------------------- */
const angles = [
  {
    kicker: "Angle 1",
    title: "Ngulang proker yang udah gagal di tempat lain",
    body: "Tiap tahun ada kelompok yang bikin taman baca tanpa pengelola, atau alat cuci tangan yang nganggur bulan depan. Laporannya ada, tapi kesimpan di drive kampus lain.",
    quote:
      '"Kita baru tau setelah program jalan sebulan kalau desa sebelah pernah coba hal yang sama."',
    tone: "bg-clay text-clay-foreground",
  },
  {
    kicker: "Angle 2",
    title: "Gak tau ide kita bakal jalan atau enggak",
    body: 'Nebak dari asumsi: "kayaknya butuh", "kayaknya rame". Padahal yang bikin proker mati biasanya hal teknis: siapa yang lanjutin, budget habis di mana, musim apa.',
    quote: '"Kalau ada gambaran risikonya dari awal, kita gak buang 2 minggu buat hal yang salah."',
    tone: "bg-ink text-cream",
  },
];

export function Masalah() {
  return (
    <section
      id="masalah"
      className="border-b border-ink/10 bg-white shadow-[0_-15px_45px_rgba(0,0,0,0.15)] rounded-t-[2.5rem] mt-[-1rem] relative z-30"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionLabel>Masalahnya di sini</SectionLabel>
        <h2 className="max-w-3xl font-display text-3xl font-extrabold sm:text-5xl" data-reveal>
          KKN sering mulai dari nol, padahal jawabannya udah pernah ditulis orang lain.
        </h2>

        <div className="mt-12 space-y-8">
          {angles.map((a, i) => (
            <article
              key={a.kicker}
              data-reveal={i % 2 === 0 ? "left" : "right"}
              className={`grid gap-6 rounded-2xl border border-ink/10 p-6 md:grid-cols-[auto_1fr] md:p-8 ${a.tone} pk-hard`}
            >
              <p className="font-display text-sm font-bold tracking-[0.2em] uppercase opacity-80">
                {a.kicker}
              </p>
              <div>
                <h3 className="font-display text-2xl font-bold sm:text-3xl">{a.title}</h3>
                <p className="mt-3 max-w-2xl opacity-85">{a.body}</p>
                <p className="mt-5 border-l-4 border-current/40 pl-4 text-sm italic opacity-80">
                  {a.quote}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border-2 border-dashed border-ink/20 p-6"
          data-reveal
        >
          <MapNetwork className="h-16 w-24 shrink-0 text-leaf" />
          <p className="min-w-0 flex-1 text-lg font-semibold">
            Yang kurang bukan semangat, tapi akses ke pengalaman kelompok sebelumnya.
          </p>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    title: "Masukin ide + kondisi desa",
    body: "Ide proker, lokasi, masalah utama yang mau disasar, dan estimasi budget. Gak perlu proposal, satu paragraf cukup.",
    tone: "bg-sun text-sun-foreground",
  },
  {
    n: "02",
    title: "Sistem cek preseden",
    body: "Ide kamu dicocokin ke laporan KKN dengan profil desa mirip: geografi, mata pencaharian, akses jalan, jumlah warga aktif.",
    tone: "bg-leaf text-leaf-foreground",
  },
  {
    n: "03",
    title: "Keluar tiga kemungkinan hasil",
    body: "Berhasil dengan bukti, gagal dengan alternatif + skor akurasi, atau belum ada data sama sekali dan kamu jadi pionir.",
    tone: "bg-sky text-sky-foreground",
  },
];

const outcomes = [
  {
    label: "Berhasil",
    desc: "Ada bukti desa mirip yang jalan sampai sekarang, plus catatan apa yang bikin bertahan.",
    tone: "border-leaf bg-leaf/12",
  },
  {
    label: "Gagal",
    desc: "Alasan gagalnya dirinci, dikasih 2–3 alternatif proker + skor akurasi rekomendasi.",
    tone: "border-clay bg-clay/12",
  },
  {
    label: "Pionir",
    desc: "Belum ada preseden. Kamu dapat data kondisi daerah biar rencana dibikin realistis.",
    tone: "border-sky bg-sky/12",
  },
];

export function CaraKerja() {
  return (
    <section id="cara-kerja" className="relative overflow-hidden border-b border-ink/10 bg-white">
      <div className="absolute inset-0 pk-dots opacity-30" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionLabel>Cara kerja</SectionLabel>
        <h2 className="max-w-2xl font-display text-3xl font-extrabold sm:text-5xl" data-reveal>
          Tiga langkah, lima menit, sebelum kamu tulis proposal.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3" data-stagger>
          {steps.map((s) => (
            <article
              key={s.n}
              className={`rounded-2xl border border-ink/10 p-6 pk-hard transition-transform hover:-translate-y-1 ${s.tone}`}
            >
              <p className="font-display text-5xl font-extrabold opacity-60">{s.n}</p>
              <h3 className="mt-3 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm opacity-85">{s.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3" data-stagger>
          {outcomes.map((o) => (
            <div key={o.label} className={`rounded-xl border-2 p-5 ${o.tone}`}>
              <p className="font-display text-lg font-bold">{o.label}</p>
              <p className="mt-1 text-sm text-ink/75">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
