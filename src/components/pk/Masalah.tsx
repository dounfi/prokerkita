import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionLabel } from "./Decor";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function CloudSVG() {
  return (
    <svg viewBox="0 0 280 90" fill="white" className="opacity-80 drop-shadow-lg">
      <path d="M 30,70 Q 50,30 90,40 Q 120,10 170,30 Q 210,20 250,50 Q 270,70 250,75 Z" />
    </svg>
  );
}

export function IslandSVG({ src = "/island-1.png" }: { src?: string; delay?: number } = {}) {
  return (
    <img src={src} alt="Island" className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] object-contain" />
  );
}

export function Masalah() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    // 1. Animasi ritmis melayang untuk kartu pulau
    gsap.to(".levitate-1", { y: -20, duration: 2.5, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(".levitate-2", { y: -25, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 0.5 });
    gsap.to(".levitate-3", { y: -15, duration: 2.2, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1 });

    // 2. Pergerakan latar belakang saat di-scroll
    gsap.to(".parallax-bg-slow", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to(".parallax-island", {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // 3. Penanganan urutan kemunculan pulau saat scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".roadmap-container",
        start: "top 70%",
        end: "bottom 80%",
        scrub: 1,
      }
    });

    const pathLength = pathRef.current?.getTotalLength() || 2000;
    gsap.set(pathRef.current, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

    tl.to(pathRef.current, { strokeDashoffset: 0, ease: "none", duration: 10 }, 0);

    tl.fromTo(".island-1", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, ease: "back.out(1.5)", duration: 2 }, 1)
      .fromTo(".island-2", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, ease: "back.out(1.5)", duration: 2 }, 4.5)
      .fromTo(".island-3", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, ease: "back.out(1.5)", duration: 2 }, 8);

  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="masalah"
      className="relative w-full min-h-[150vh] bg-gradient-to-b from-[#059669] via-[#B3E5FC] to-[#B3E5FC] pb-48 md:pb-64 z-40 pt-12"
    >
      {/* Transisi gelombang penghubung section */}
      <div className="absolute top-0 left-0 w-full transform -translate-y-[99%] z-[45] pointer-events-none leading-none">
        <svg viewBox="0 0 1440 100" className="w-full h-[50px] md:h-[100px] block" preserveAspectRatio="none">
          <path d="M0,100 C400,0 1000,0 1440,100 L1440,100 L0,100 Z" fill="#059669" />
        </svg>
      </div>

      {/* Gradasi kelembutan warna transisi */}
      <div className="absolute top-0 left-0 w-full h-[30vh] z-[10] bg-gradient-to-b from-[#059669] to-transparent pointer-events-none" />

      {/* Elemen dekoratif awan di latar belakang */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="parallax-bg-slow absolute top-[10%] left-[5%] w-32"><CloudSVG /></div>
        <div className="parallax-bg-slow absolute top-[40%] right-[10%] w-48"><CloudSVG /></div>
        <div className="parallax-bg-slow absolute top-[70%] left-[15%] w-40"><CloudSVG /></div>
        <div className="parallax-bg-slow absolute top-[85%] right-[20%] w-32"><CloudSVG /></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        {/* Judul utama section masalah */}
        <div className="text-center mb-10 md:mb-20 relative z-20 flex flex-col items-center justify-center pt-8">
          <SectionLabel>Masalahnya di sini</SectionLabel>
          <h2 className="max-w-4xl font-display text-3xl font-extrabold sm:text-5xl leading-[1.12] text-center mt-6" data-reveal>
            <span className="hero-title-line">
              <span aria-hidden="true" className="hero-title-outline">
                Banyak proker KKN dibuat tanpa
              </span>
              <span className="hero-title-fill">
                Banyak proker KKN dibuat tanpa
              </span>
            </span>
            <span className="hero-title-line mt-1">
              <span aria-hidden="true" className="hero-title-outline">
                tahu apa yang sudah pernah
              </span>
              <span className="hero-title-fill">
                tahu apa yang sudah pernah
              </span>
            </span>
            <span className="hero-title-line hero-title-line-strong mt-1">
              <span aria-hidden="true" className="hero-title-outline">
                dicoba.
              </span>
              <span className="hero-title-fill">
                dicoba.
              </span>
            </span>
          </h2>
        </div>

        {/* Kontainer jalur alur masalah */}
        <div className="roadmap-container relative w-full h-[1100px] md:h-[1100px] mt-10">

          {/* Garis putus-putus penghubung pulau */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path
              ref={pathRef}
              d="M 20 10 C 80 20, 90 50, 70 50 C 30 50, 10 75, 50 85"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeDasharray="12 12"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              opacity="0.8"
              className="drop-shadow-lg"
            />
          </svg>

          {/* Pulau 1 - Kiri Atas */}
          <div className="island-1 absolute top-[5%] left-[5%] md:left-[10%] w-[180px] sm:w-[240px] md:w-[220px] lg:w-[260px] z-10">
            <div className="levitate-1">
              <div className="parallax-island relative flex flex-col items-center">
                {/* Kartu papan informasi pulau 1 */}
                <div className="relative top-10 md:top-14 z-10 w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] border border-white/60 p-5 text-center">
                  <p className="text-xl md:text-2xl font-bold text-orange-600">
                    Ngulang proker yang udah gagal di tempat lain.
                  </p>
                </div>
                <div className="w-full relative z-0">
                  <IslandSVG src="/island-1.png" />
                </div>
              </div>
            </div>
          </div>

          {/* Pulau 2 - Kanan Tengah */}
          <div className="island-2 absolute top-[32%] right-[5%] md:right-[10%] w-[180px] sm:w-[240px] md:w-[220px] lg:w-[260px] z-20">
            <div className="levitate-2">
              <div className="parallax-island relative flex flex-col items-center">
                <div className="relative top-10 md:top-14 z-10 w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] border border-white/60 p-5 text-center">
                  <p className="text-xl md:text-2xl font-bold text-blue-800">
                    Gak tau ide kita bakal jalan atau enggak.
                  </p>
                </div>
                <div className="w-full relative z-0">
                  <IslandSVG src="/island-2.png" delay={0.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Pulau 3 - Tengah Bawah */}
          <div className="island-3 absolute top-[62%] left-1/2 transform -translate-x-1/2 w-[200px] sm:w-[280px] md:w-[260px] lg:w-[300px] z-30">
            <div className="levitate-3">
              <div className="parallax-island relative flex flex-col items-center">
                <div className="relative top-14 md:top-20 z-10 w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] border border-white/60 p-6 text-center">
                  <p className="text-2xl md:text-3xl font-extrabold text-emerald-700">
                    Yang kurang bukan semangat, tapi akses ke pengalaman kelompok sebelumnya.
                  </p>
                </div>
                <div className="w-full relative z-0">
                  <IslandSVG src="/island-3.png" delay={1} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Masalah;
