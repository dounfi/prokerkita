import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* -------------------------------------------------------------------------- */
/* Bagian Utama Hero Parallax 3D (Pengaturan Layer & Animasi GSAP)            */
/* -------------------------------------------------------------------------- */
export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animation entrance saat hero section pertama kali dimuat
      gsap.from(".hero-title-line", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.18,
        ease: "power3.out",
        delay: 0.1,
      });

      gsap.from([".hero-sub-line-1"], {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.4)",
        delay: 0.45,
      });

      gsap.from(".hero-cta a", {
        y: 20,
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        stagger: 0.12,
        ease: "back.out(1.7)",
        delay: 0.75,
      });

      // Animasi pergerakan ambient (awan, burung, dan pepohonan)
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

      // Efek melayang halus untuk baris teks subjudul
      gsap.to(".hero-sub-line-1", {
        y: -5,
        rotation: 0.6,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-sub-line-2", {
        y: 5,
        rotation: -0.6,
        duration: 3.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.3,
      });

      // Timeline GSAP ScrollTrigger untuk efek parallax bertingkat
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "+=120%", // Menahan posisi pinned agar animasi parallax terasa lebih mulus
          scrub: 1, // Menghaluskan pergerakan animasi mengikuti kecepatan scroll
          pin: true, // Menjaga section hero tetap diam di viewport selama durasi scroll
          pinSpacing: false, // Memungkinkan section berikutnya naik secara alami
        },
      });

      // Layer 7: Pergerakan teks judul dan CTA naik ke atas
      tl.to(".layer-typography", { yPercent: -80, opacity: 0, ease: "none" }, 0);

      // Layer 4: Pergerakan latar belakang gunung ke bawah dengan perlahan
      tl.to(".layer-mountains", { yPercent: 20, ease: "none" }, 0);

      // Layer 5: Pergerakan ilustrasi posko utama
      tl.to(".layer-posko", { yPercent: 40, scale: 1.05, ease: "none" }, 0);

      // Layer 6: Pergerakan foreground terdepan secara lebih responsif
      tl.to(".layer-foreground", { yPercent: 75, scale: 1.15, ease: "none" }, 0);

      // Layer 2 & 3: Pergerakan elemen langit (awan & burung) naik ke atas
      tl.to(".layer-sky-elements", { yPercent: -30, ease: "none" }, 0);
    },
    { scope: heroRef },
  );

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#bae6fd] via-[#7dd3fc] to-[#0284c7]"
    >
      {/* Layer 1: Latar Belakang Gradasi & Pola Masking */}
      <div className="mask-pionir-pattern absolute inset-0 z-[1] opacity-10 pointer-events-none" />

      {/* Layer 2 & 3: Elemen Langit (Awan & Burung Origami) */}
      <div className="layer-sky-elements absolute inset-0 z-[2] pointer-events-none">
        {/* Elemen Awan Bergerak */}
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

        {/* Elemen Burung Origami Terbang */}
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

      {/* Layer 4: Deretan Puncak Gunung Vektor */}
      <div className="layer-mountains absolute bottom-0 left-1/2 -translate-x-1/2 w-[200vw] sm:w-[150vw] md:w-full min-w-[1000px] md:min-w-0 z-[3] pointer-events-none">
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
              <stop offset="0%" stopColor="#0369a1" />
              <stop offset="60%" stopColor="#075985" />
              <stop offset="100%" stopColor="#0c4a6e" />
            </linearGradient>
            <linearGradient
              id="mtnSideGrad"
              x1="350"
              y1="80"
              x2="350"
              y2="400"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#075985" />
            </linearGradient>
          </defs>

          {/* Ilustrasi Gunung Kiri */}
          <polygon points="80,400 380,100 680,400" fill="url(#mtnSideGrad)" opacity="1" />
          <polygon points="80,400 380,100 240,400" fill="#7dd3fc" opacity="0.3" />
          <polygon points="380,100 440,160 380,400" fill="#075985" opacity="0.5" />

          {/* Ilustrasi Gunung Kanan */}
          <polygon points="760,400 1060,100 1360,400" fill="url(#mtnSideGrad)" opacity="1" />
          <polygon points="760,400 1060,100 920,400" fill="#7dd3fc" opacity="0.3" />
          <polygon points="1060,100 1120,170 1060,400" fill="#075985" opacity="0.5" />

          {/* Puncak Gunung Utama */}
          <polygon points="420,380 720,20 1020,380" fill="url(#mtnCenterGrad)" opacity="1" />
          <polygon points="720,20 830,160 720,380" fill="#075985" opacity="0.6" />
          <polygon points="720,20 620,180 720,380" fill="#7dd3fc" opacity="0.35" />

          {/* Ornamen Puncak Es */}
          <polygon
            points="720,20 680,75 710,85 720,80 735,90 760,70"
            fill="#ffffff"
            opacity="1"
          />
        </svg>
      </div>

      {/* Layer 5: Bangunan Posko Utama (Rumah Joglo) */}
      <div className="layer-posko absolute bottom-[16vh] left-1/2 -translate-x-1/2 z-[4] w-[140vw] sm:w-[85vw] min-w-[500px] sm:min-w-0 max-w-none sm:max-w-[850px] pointer-events-none">
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

          {/* Fondasi & Tangga Masuk */}
          <rect x="220" y="220" width="410" height="60" fill="#78350f" rx="4" />
          <rect x="190" y="275" width="470" height="25" fill="#451a03" rx="2" />
          <polygon points="310,300 540,300 560,275 290,275" fill="#d97706" />

          {/* Tiang Penyangga Utama */}
          <rect x="250" y="170" width="16" height="110" fill="#f59e0b" />
          <rect x="320" y="170" width="16" height="110" fill="#f59e0b" />
          <rect x="390" y="170" width="16" height="110" fill="#f59e0b" />
          <rect x="444" y="170" width="16" height="110" fill="#f59e0b" />
          <rect x="514" y="170" width="16" height="110" fill="#f59e0b" />
          <rect x="584" y="170" width="16" height="110" fill="#f59e0b" />

          {/* Atap Joglo Tingkat Bawah */}
          <polygon points="120,170 730,170 660,110 190,110" fill="url(#jogloRoofGrad)" />
          <polygon points="190,110 660,110 640,104 210,104" fill="#f59e0b" />

          {/* Atap Joglo Puncak Atas */}
          <polygon points="210,110 640,110 540,25 310,25" fill="url(#jogloRoofGrad)" />
          <polygon points="310,25 540,25 520,12 330,12" fill="#ffc72c" />
          <polygon points="415,12 435,12 425,0" fill="#ffc72c" />

          {/* Plang Nama Posko ProkerKita */}
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

      {/* Layer 6: Foreground Terdepan (Pohon Kelapa & Terasering Sawah) */}
      <div className="layer-foreground absolute bottom-0 left-1/2 -translate-x-1/2 w-[200vw] sm:w-[150vw] md:w-full min-w-[1000px] md:min-w-0 z-[5] pointer-events-none">
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

          {/* Pohon Kelapa Melambai Kiri */}
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

          {/* Pohon Kelapa Melambai Kanan */}
          <g className="tree-sway-right" style={{ transformOrigin: "1280px 380px" }}>
            <path
              d="M 1280,380 Q 1290,230 1310,100"
              stroke="#78350f"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M 1310,100 Q 1370,70 1410,110 M 1310,100 Q 1350,40 1390,20 M 1310,100 Q 1270,30 1240,40 M 1310,100 Q 1230,70 1220,110"
              stroke="#10b981"
              strokeWidth="9"
              strokeLinecap="round"
            />
          </g>

          {/* Bukit Sawah Terasering Belakang */}
          <path
            d="M 0,220 C 350,180 650,260 950,200 C 1200,150 1350,210 1440,200 L 1440,380 L 0,380 Z"
            fill="#34d399"
          />

          {/* Bukit Sawah Terasering Tengah */}
          <path
            d="M 0,270 C 380,240 580,320 880,260 C 1130,210 1320,280 1440,260 L 1440,380 L 0,380 Z"
            fill="#10b981"
          />

          {/* Bukit Sawah Terasering Depan */}
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

      {/* Layer 7: Teks Judul Utama & Kartu Aksi Transparan */}
      <div className="layer-typography relative z-10 flex flex-col items-center justify-center pt-20 sm:pt-28 md:pt-36 px-4 text-center">
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-[clamp(3rem,5vw,4.8rem)] leading-[1.1] tracking-tight">
          <span className="hero-title-line flex flex-col sm:inline-block">
            <span aria-hidden="true" className="hero-title-outline">
              Membangun Desa Bersama,
            </span>
            <span className="hero-title-fill">Membangun Desa Bersama,</span>
          </span>
          <span className="hero-title-line hero-title-line-strong flex flex-col sm:inline-block mt-2">
            <span aria-hidden="true" className="hero-title-outline">
              Wujudkan Proker Nyata
            </span>
            <span className="hero-title-fill">Wujudkan Proker Nyata</span>
          </span>
        </h1>

        <div className="hero-sub mt-4 sm:mt-6 flex flex-col items-center gap-2 sm:gap-2.5 max-w-3xl text-center text-xs sm:text-sm md:text-base text-ink font-bold leading-snug sm:leading-relaxed">
          <div className="hero-sub-line-1 bg-white/80 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-1.5 rounded-2xl sm:rounded-full shadow-sm border border-white/60 w-full sm:w-auto">
            Validasi ide proker KKN kamu dengan laporan desa lain,
          </div>
          <div className="hero-sub-line-2 bg-white/80 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-1.5 rounded-2xl sm:rounded-full shadow-sm border border-white/60 w-full sm:w-auto">
            temukan apa yang sudah dicoba, pelajari hasilnya, dan pilih langkah yang lebih tepat.
          </div>
        </div>

        <div className="hero-cta mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto px-6 sm:px-0">
          <a href="/validasi" className="btn-pionir btn-pionir-orange w-full sm:w-auto px-8 py-3.5 text-base sm:text-lg">
            Cek Proker Ini
          </a>
          <a href="/repository" className="btn-pionir btn-pionir-yellow w-full sm:w-auto px-8 py-3.5 text-base sm:text-lg">
            Lihat Laporan
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
