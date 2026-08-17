import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionLabel } from "./Decor";

const steps = [
  {
    n: "01",
    title: "Masukin ide + kondisi desa",
    body: "Ide proker, lokasi, masalah utama yang mau disasar, dan estimasi budget. Satu paragraf cukup.",
    tapeColor: "bg-[#f87171]",
    innerBg: "bg-[linear-gradient(180deg,#fff5f5_0%,#fef2f2_100%)]",
    numColor: "text-[#ef4444]",
    rotate: "-rotate-2 sm:-rotate-3",
    cardClass: "sticky-card-0",
  },
  {
    n: "02",
    title: "Sistem cek preseden",
    body: "Ide kamu dicocokin ke laporan KKN dengan profil desa mirip: geografi, pencaharian, & warga.",
    tapeColor: "bg-[#4ade80]",
    innerBg: "bg-[linear-gradient(180deg,#f0fdf4_0%,#dcfce7_100%)]",
    numColor: "text-[#16a34a]",
    rotate: "rotate-1 sm:rotate-2",
    cardClass: "sticky-card-1",
  },
  {
    n: "03",
    title: "Analisis risiko & alternatif",
    body: "Dapatkan alasan kenapa ide pernah gagal, plus rekomendasi alternatif proker yang realistis.",
    tapeColor: "bg-[#facc15]",
    innerBg: "bg-[linear-gradient(180deg,#fffbeb_0%,#fef9c3_100%)]",
    numColor: "text-[#ca8a04]",
    rotate: "-rotate-1 sm:-rotate-2",
    cardClass: "sticky-card-2",
  },
  {
    n: "04",
    title: "Hasil & Rekomendasi",
    body: "Keluar tiga kemungkinan hasil (Berhasil, Gagal, Pionir) lengkap dengan skor akurasi.",
    tapeColor: "bg-[#38bdf8]",
    innerBg: "bg-[linear-gradient(180deg,#f0f9ff_0%,#e0f2fe_100%)]",
    numColor: "text-[#0284c7]",
    rotate: "rotate-2 sm:rotate-3",
    cardClass: "sticky-card-3",
  },
];

export function CaraKerja() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useGSAP(
    () => {
      // Pergerakan latar belakangan elemen awan vektor
      gsap.to(".ck-cloud-1", {
        x: 180,
        y: -10,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".ck-cloud-2", {
        x: -190,
        y: 12,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".ck-cloud-3", {
        x: 200,
        y: -15,
        duration: 13,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".ck-cloud-4", {
        x: -180,
        y: 10,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Animasi ritmis melayang untuk setiap kartu langkah kerja
      gsap.to(".sticky-card-0", {
        y: -22,
        rotation: -4.5,
        duration: 2.0,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0,
      });

      gsap.to(".sticky-card-1", {
        y: 22,
        rotation: 4.5,
        duration: 2.0,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      gsap.to(".sticky-card-2", {
        y: -22,
        rotation: -4.5,
        duration: 2.0,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.0,
      });

      gsap.to(".sticky-card-3", {
        y: 22,
        rotation: 4.5,
        duration: 2.0,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="cara-kerja"
      ref={containerRef}
      className="relative overflow-hidden pt-12 pb-16 z-20 bg-gradient-to-b from-[#B3E5FC] via-[#bae6fd] to-[#7dd3fc] text-ink"
    >
      {/* Vektor awan melayang di langit */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="ck-cloud-1 absolute top-12 left-[5%] opacity-85">
          <svg width="240" height="80" viewBox="0 0 280 90" fill="white">
            <path d="M 30,70 Q 50,30 90,40 Q 120,10 170,30 Q 210,20 250,50 Q 270,70 250,75 Z" />
          </svg>
        </div>

        <div className="ck-cloud-2 absolute top-16 right-[6%] opacity-80">
          <svg width="280" height="90" viewBox="0 0 320 100" fill="white">
            <path d="M 40,80 Q 70,30 120,40 Q 160,10 220,30 Q 270,20 300,60 Z" />
          </svg>
        </div>

        <div className="ck-cloud-3 absolute bottom-20 left-[2%] opacity-75">
          <svg width="260" height="85" viewBox="0 0 280 90" fill="white">
            <path d="M 30,70 Q 50,30 90,40 Q 120,10 170,30 Q 210,20 250,50 Z" />
          </svg>
        </div>

        <div className="ck-cloud-4 absolute bottom-12 right-[3%] opacity-70">
          <svg width="300" height="95" viewBox="0 0 320 100" fill="white">
            <path d="M 40,80 Q 70,30 120,40 Q 160,10 220,30 Q 270,20 300,60 Z" />
          </svg>
        </div>
      </div>

      <div className="absolute inset-0 pk-dots opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 z-10 flex flex-col items-center text-center">
        <SectionLabel showLine={false} className="justify-center">Cara kerja</SectionLabel>
        <h2 className="max-w-3xl font-display text-3xl font-extrabold sm:text-5xl leading-[1.12] text-center" data-reveal>
          <span className="hero-title-line flex flex-col items-center">
            <span aria-hidden="true" className="hero-title-outline">
              Tiga langkah, lima menit,
            </span>
            <span className="hero-title-fill">
              Tiga langkah, lima menit,
            </span>
          </span>
          <span className="hero-title-line hero-title-line-strong flex flex-col items-center mt-1">
            <span aria-hidden="true" className="hero-title-outline">
              sebelum kamu tulis proposal.
            </span>
            <span className="hero-title-fill">
              sebelum kamu tulis proposal.
            </span>
          </span>
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <div
              key={s.n}
              onClick={() => setActiveStep(activeStep === idx ? null : idx)}
              className={`group relative pt-6 pb-5 px-5 rounded-[1.8rem] bg-white border-none shadow-xl shadow-slate-900/10 transition-shadow duration-300 hover:scale-105 hover:z-30 hover:shadow-2xl hover:shadow-slate-900/20 ${s.rotate} ${s.cardClass} cursor-pointer ${activeStep === idx ? "scale-105 z-30 shadow-2xl" : ""
                }`}
            >
              <div
                className={`absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 ${s.tapeColor} opacity-85 rounded-sm shadow-md rotate-[-2deg] z-20 pointer-events-none transition-transform group-hover:scale-110 group-hover:rotate-0`}
                style={{
                  boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
                }}
              />
              <div
                className={`rounded-[1.4rem] ${s.innerBg} p-5 border-none flex flex-col justify-between h-full min-h-[220px] transition-colors`}
              >
                <div>
                  <span className={`font-display text-4xl font-extrabold tracking-tight ${s.numColor}`}>
                    {s.n}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-ink/80 leading-relaxed font-medium">
                    {s.body}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between pt-2 border-t border-black/5">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-ink/50">
                    Langkah {s.n}
                  </span>
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white/80 text-xs font-bold text-ink shadow-sm group-hover:scale-110 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaraKerja;
