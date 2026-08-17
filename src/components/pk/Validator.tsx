import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PinIcon, SectionLabel, Tag } from "./Decor";

type Outcome = "berhasil" | "gagal" | "pionir";

type Result = {
  outcome: Outcome;
  headline: string;
  summary: string;
  score: number;
  scoreLabel: string;
  points: { label: string; value: string }[];
  alternatives?: { title: string; why: string; score: number }[];
  evidence?: string[];
};

const scenarios: Record<Outcome, { form: Form; result: Result }> = {
  berhasil: {
    form: {
      idea: "Kelas belajar sore untuk anak SD di balai dusun",
      location: "Desa Sumberarum, Kab. Magelang",
      problem: "Anak-anak gak ada pendampingan belajar setelah sekolah",
      budget: "1.500.000",
    },
    result: {
      outcome: "berhasil",
      headline: "Pernah dicoba, dan masih jalan",
      summary:
        "6 dari 7 desa dengan profil mirip menjalankan program serupa dan 5 di antaranya masih aktif setelah KKN selesai, karena dipegang karang taruna.",
      score: 84,
      scoreLabel: "Kemiripan kondisi desa",
      points: [
        { label: "Preseden ditemukan", value: "7 laporan" },
        { label: "Masih aktif > 1 tahun", value: "5 desa" },
        { label: "Rata-rata biaya", value: "Rp 900rb" },
      ],
      evidence: [
        "KKN UGM 2023” Desa Kalibawang: jadwal 2x seminggu, pengajar dari karang taruna.",
        "KKN UNS 2022” Desa Ngargosari: berhenti karena tempat dipakai kegiatan lain, solusinya pindah ke rumah warga.",
        "Kunci bertahan: ada 3 pengajar lokal sejak minggu pertama, bukan diambil alih mahasiswa.",
      ],
    },
  },
  gagal: {
    form: {
      idea: "Bank sampah keliling dengan armada motor pinjaman",
      location: "Desa Tirtomulyo, Kab. Kendal",
      problem: "Sampah rumah tangga dibuang ke sungai",
      budget: "4.000.000",
    },
    result: {
      outcome: "gagal",
      headline: "Ide ini gagal di 4 dari 5 desa mirip",
      summary:
        "Semua berhenti < 3 bulan setelah KKN selesai. Penyebab utama sama: gak ada yang mau rutin nyetir dan biaya bensin gak ada sumbernya.",
      score: 76,
      scoreLabel: "Skor akurasi rekomendasi",
      points: [
        { label: "Preseden ditemukan", value: "5 laporan" },
        { label: "Berhenti < 3 bulan", value: "4 desa" },
        { label: "Titik gagal utama", value: "Operasional" },
      ],
      alternatives: [
        {
          title: "Titip setor ke pengepul yang sudah lewat rutin",
          why: "Di Desa Banyuurip cara ini jalan 2 tahun karena gak butuh armada dan warga langsung dapat uang.",
          score: 81,
        },
        {
          title: "Sedekah sampah lewat jadwal pengajian RT",
          why: "Nempel ke kegiatan yang udah rutin, jadi gak perlu bikin kebiasaan baru.",
          score: 74,
        },
        {
          title: "Bak pilah komunal di 3 titik + kesepakatan RT",
          why: "Cocok karena jalan desa sempit dan rumah warga mengelompok.",
          score: 68,
        },
      ],
    },
  },
  pionir: {
    form: {
      idea: "Pemetaan sumber air bersih pakai GPS warga",
      location: "Desa Tegalrejo, Kab. Sumba Barat",
      problem: "Warga jalan 2 km buat ambil air di musim kemarau",
      budget: "2.200.000",
    },
    result: {
      outcome: "pionir",
      headline: "Belum ada data. Kamu jadi pionir.",
      summary:
        "Belum ada laporan KKN sejenis di daerah dengan kondisi ini. Kami kasih data kondisi daerah biar rencanamu gak nebak, dan hasil prokermu nanti jadi preseden pertama.",
      score: 0,
      scoreLabel: "Preseden tersedia",
      points: [
        { label: "Musim kemarau", value: "Mei - Oktober" },
        { label: "Sinyal seluler", value: "Bagus di 2 dusun" },
        { label: "Akses jalan", value: "Berbatu, non-aspal" },
        { label: "Mata pencaharian", value: "Peternak & ladang" },
      ],
      evidence: [
        "Titik air terdekat menurut data desa: 3 mata air, 1 kering saat Agustus.",
        "Saran: catat kondisi tiap titik air tiap 2 minggu supaya datanya kepakai kelompok berikutnya.",
        'Laporanmu bakal ditandai "Preseden Pertama" di repository.',
      ],
    },
  },
};

type Form = { idea: string; location: string; problem: string; budget: string };

const empty: Form = { idea: "", location: "", problem: "", budget: "" };

const toneMap: Record<Outcome, { chip: "leaf" | "clay" | "sky"; bar: string; panel: string }> = {
  berhasil: { chip: "leaf", bar: "bg-emerald-500", panel: "border-emerald-200" },
  gagal: { chip: "clay", bar: "bg-rose-500", panel: "border-rose-200" },
  pionir: { chip: "sky", bar: "bg-sky-500", panel: "border-sky-200" },
};

function ScoreBar({ value, label, tone }: { value: number; label: string; tone: string }) {
  const bar = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: value,
      duration: 1.1,
      ease: "power2.out",
      onUpdate: () => setShown(Math.round(obj.v)),
    });
    if (bar.current) {
      gsap.fromTo(
        bar.current,
        { width: "0%" },
        { width: `${value}%`, duration: 1.1, ease: "power2.out" },
      );
    }
    return () => {
      tween.kill();
    };
  }, [value]);

  return (
    <div>
      <div className="flex items-end justify-between gap-3">
        <span className="text-sm font-bold text-slate-600">{label}</span>
        <span className="font-display text-2xl font-extrabold font-handwriting text-slate-800">{shown}%</span>
      </div>
      <div className="mt-2 h-4 overflow-hidden rounded-full border-2 border-slate-200 bg-white shadow-inner">
        <div ref={bar} className={`h-full ${tone} rounded-full`} style={{ width: 0 }} />
      </div>
    </div>
  );
}

// Komponen jarum pin papan pengumuman
const PushPin = ({ color = "bg-red-500", className = "" }: { color?: string, className?: string }) => (
  <div className={`absolute ${className} w-5 h-5 rounded-full ${color} shadow-md border border-black/20 z-20 flex items-center justify-center`}>
    <div className="w-1.5 h-1.5 bg-white/70 rounded-full absolute top-[3px] left-[3px]" />
    {/* Bayangan efek tancapan pin pada papan */}
    <div className="absolute -bottom-2 -right-1 w-2 h-2 bg-black/30 rounded-full blur-[2px]" />
  </div>
);

// Komponen selotip transparan (Washi tape)
const Tape = ({ className = "" }: { className?: string }) => (
  <div className={`absolute ${className} w-16 h-5 bg-white/70 backdrop-blur-sm shadow-sm rotate-[-2deg] z-20`} style={{ mixBlendMode: 'screen' }} />
);

export function Validator() {
  const [form, setForm] = useState<Form>(empty);
  const [result, setResult] = useState<Result | null>(null);
  const panel = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const corkboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result && panel.current) {
      gsap.fromTo(
        panel.current,
        { opacity: 0, scale: 0.9, rotation: -2 },
        { opacity: 1, scale: 1, rotation: 1, duration: 0.6, ease: "back.out(1.5)" },
      );
    }
  }, [result]);

  useGSAP(() => {
    // Animasi kemunculan papan mading utama saat di-scroll
    gsap.fromTo(
      corkboardRef.current,
      { y: 150, opacity: 0, rotation: 2 },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    // Animasi gerakan pin radar melayang
    gsap.to(".pin-float", {
      y: -10,
      rotation: 5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Animasi pergerakan balon latar belakang
    gsap.to(".balloon-float", {
      y: -25,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: { each: 1.2, from: "random" }
    });

    // Animasi penerbangan burung secara berkala
    gsap.to(".bird-fly", {
      x: "120vw",
      duration: 18,
      repeat: -1,
      ease: "none",
      stagger: { each: 3, from: "start" },
      delay: 2,
    });
    gsap.to(".bird-fly", {
      y: -8,
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: { each: 0.15, from: "random" }
    });

    // Efek gerakan halus untuk setiap lembar kertas memo
    gsap.to(".sticky-note-1", { y: -5, rotation: 1.5, duration: 2.2, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0 });
    gsap.to(".sticky-note-2", { y: 4, rotation: -2, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 });
    gsap.to(".sticky-note-3", { y: -6, rotation: 2, duration: 2.0, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.0 });
    gsap.to(".sticky-note-4", { y: 5, rotation: -1.5, duration: 2.4, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.5 });

    // Efek pergerakan kedalaman (parallax) saat halaman di-scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    tl.to(".parallax-clouds", { yPercent: 10, ease: "none" }, 0)
      .to(".parallax-balloons", { yPercent: 15, ease: "none" }, 0)
      .to(".parallax-hills", { yPercent: 30, ease: "none" }, 0)
      .to(".parallax-blanket", { yPercent: -15, ease: "none" }, 0);
  }, { scope: sectionRef });

  const loadScenario = (o: Outcome) => {
    setForm(scenarios[o].form);
    setResult(scenarios[o].result);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (result) {
      setResult(null);
      setForm(empty);
      return;
    }
    const text = `${form.idea} ${form.problem}`.toLowerCase();
    const o: Outcome = /sampah|bank sampah|daur/.test(text)
      ? "gagal"
      : /belajar|baca|les|anak|literasi/.test(text)
        ? "berhasil"
        : "pionir";
    setForm(form);
    setResult(scenarios[o].result);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden w-full min-h-screen pt-10 bg-[#7dd3fc]"
      style={{ paddingBottom: '0px', marginBottom: '0px' }}
    >
      {/* Langit dan elemen awan melayang */}
      <div className="absolute inset-0 pointer-events-none parallax-clouds" style={{ zIndex: 0 }}>
        <div className="absolute top-[8%] left-[10%] opacity-85 w-56">
          <svg viewBox="0 0 280 90" fill="white">
            <path d="M 30,70 Q 50,30 90,40 Q 120,10 170,30 Q 210,20 250,50 Q 270,70 250,75 Z" />
          </svg>
        </div>
        <div className="absolute top-[15%] right-[12%] opacity-80 w-64">
          <svg viewBox="0 0 320 100" fill="white">
            <path d="M 40,80 Q 70,30 120,40 Q 160,10 220,30 Q 270,20 300,60 Z" />
          </svg>
        </div>
        <div className="absolute top-[30%] left-[20%] opacity-75 w-48">
          <svg viewBox="0 0 280 90" fill="white">
            <path d="M 30,70 Q 50,30 90,40 Q 120,10 170,30 Q 210,20 250,50 Z" />
          </svg>
        </div>
      </div>



      {/* Bukitan latar tengah */}
      <div className="absolute left-0 w-full pointer-events-none parallax-hills" style={{ bottom: '0px', height: '35vh', zIndex: 10 }}>
        <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 300">
          <path fill="#2ECC71" d="M0,200 C400,50 800,280 1440,120 L1440,300 L0,300 Z" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-[85%]" preserveAspectRatio="none" viewBox="0 0 1440 300">
          <path fill="#27AE60" d="M0,150 C300,250 700,50 1440,200 L1440,300 L0,300 Z" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-[60%]" preserveAspectRatio="none" viewBox="0 0 1440 300">
          <path fill="#22c55e" d="M0,250 C500,100 900,150 1440,50 L1440,300 L0,300 Z" />
        </svg>
      </div>

      {/* Tikar piknik dengan perspektif 3D */}
      <div className="absolute left-0 w-full flex justify-center parallax-blanket overflow-hidden pointer-events-none" style={{ bottom: '0px', height: '25vh', zIndex: 20, perspective: '1000px' }}>
        <div
          className="w-[120%] h-full origin-bottom"
          style={{
            transform: 'rotateX(55deg) scale(1.4) translateY(20px)',
            backgroundColor: '#ffffff',
            backgroundImage: `
              linear-gradient(45deg, #4ade80 25%, transparent 25%, transparent 75%, #4ade80 75%, #4ade80),
              linear-gradient(45deg, #4ade80 25%, #ffffff 25%, #ffffff 75%, #4ade80 75%, #4ade80)
            `,
            backgroundPosition: '0 0, 40px 40px',
            backgroundSize: '80px 80px',
            boxShadow: '0 -20px 40px rgba(0,0,0,0.15)',
            borderRadius: '100% 100% 0 0',
          }}
        />
      </div>

      {/* Kontainer papan gabus utama */}
      <div className="relative w-full max-w-5xl px-4 mt-20 mb-[10vh] mx-auto flex flex-col items-center" style={{ zIndex: 30 }}>

        {/* Label section dan judul utama */}
        <div className="flex justify-center mb-8">
          <SectionLabel>Form validasi</SectionLabel>
        </div>
        <div className="text-center md:mx-auto md:max-w-2xl text-slate-800 mb-12">
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl drop-shadow-sm" data-reveal>
            Waktunya Uji Coba Lapangan
          </h2>
          <p className="mt-4 text-lg font-bold text-slate-700 drop-shadow-sm" data-reveal="bottom">
            Tulis ide di papan tulis kami, atau pilih salah satu skenario yang sudah disediakan.
          </p>
        </div>

        {/* Bingkai papan gabus tempat penempelan sticky note */}
        <div className="relative" ref={corkboardRef}>
          <div
            className="relative border-[16px] border-[#8b5a2b] rounded-2xl shadow-[inset_0_0_40px_rgba(0,0,0,0.5),0_25px_50px_rgba(0,0,0,0.4)] p-6 sm:p-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-start"
            style={{
              backgroundColor: '#d29853',
              backgroundImage: 'radial-gradient(rgba(0,0,0,0.15) 1px, transparent 1px)',
              backgroundSize: '4px 4px',
            }}
          >
            {/* Dekorasi stiker scrapbook */}
            <svg className="absolute -top-4 -left-4 w-12 h-12 text-yellow-300 drop-shadow-md z-20 rotate-[-15deg]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>

            {/* Sisi kiri: Formulir berupa kumpulan kertas catatan */}
            <form onSubmit={submit} className="flex flex-col z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Catatan 1: Ide proker */}
                <div className="col-span-1 sm:col-span-2 sticky-note-1">
                  <label className="block group relative transition-transform duration-300 hover:scale-105 hover:z-30 rotate-[-2deg]">
                    <PushPin color="bg-red-500" className="-top-2 left-1/2 -translate-x-1/2" />
                    <div className="bg-[#FFF9C4] p-5 shadow-[2px_4px_10px_rgba(0,0,0,0.2)] h-full">
                      <span className="mb-2 block text-sm font-extrabold text-slate-800 uppercase tracking-wider">Ide proker</span>
                      <textarea
                        rows={2}
                        value={form.idea}
                        onChange={(e) => setForm({ ...form, idea: e.target.value })}
                        placeholder="Contoh: bikin taman baca di balai dusun"
                        className="w-full bg-transparent resize-none outline-none text-slate-800 placeholder:text-slate-500/60 font-medium"
                      />
                    </div>
                  </label>
                </div>

                {/* Catatan 2: Lokasi desa */}
                <div className="sticky-note-2">
                  <label className="block group relative transition-transform duration-300 hover:scale-105 hover:z-30 rotate-[3deg]">
                    <PushPin color="bg-blue-500" className="-top-2 left-4" />
                    <div className="bg-[#E1F5FE] p-5 shadow-[2px_4px_10px_rgba(0,0,0,0.2)] h-full">
                      <span className="mb-2 block text-sm font-extrabold text-slate-800 uppercase tracking-wider">Lokasi desa</span>
                      <input
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        placeholder="Desa, Kabupaten"
                        className="w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-500/60 font-medium"
                      />
                    </div>
                  </label>
                </div>

                {/* Catatan 3: Anggaran budget */}
                <div className="sticky-note-3">
                  <label className="block group relative transition-transform duration-300 hover:scale-105 hover:z-30 rotate-[-1deg]">
                    <PushPin color="bg-yellow-500" className="-top-2 right-4" />
                    <div className="bg-[#FCE4EC] p-5 shadow-[2px_4px_10px_rgba(0,0,0,0.2)] h-full">
                      <span className="mb-2 block text-sm font-extrabold text-slate-800 uppercase tracking-wider">Budget (Rp)</span>
                      <input
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        placeholder="2.000.000"
                        className="w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-500/60 font-medium"
                      />
                    </div>
                  </label>
                </div>

                {/* Catatan 4: Masalah utama */}
                <div className="col-span-1 sm:col-span-2 sticky-note-4">
                  <label className="block group relative transition-transform duration-300 hover:scale-105 hover:z-30 rotate-[1deg]">
                    <PushPin color="bg-green-500" className="-top-2 left-1/2 -translate-x-1/2" />
                    <div className="bg-[#E8F5E9] p-5 shadow-[2px_4px_10px_rgba(0,0,0,0.2)] h-full">
                      <span className="mb-2 block text-sm font-extrabold text-slate-800 uppercase tracking-wider">Masalah utama</span>
                      <input
                        value={form.problem}
                        onChange={(e) => setForm({ ...form, problem: e.target.value })}
                        placeholder="Contoh: sampah dibuang ke sungai"
                        className="w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-500/60 font-medium"
                      />
                    </div>
                  </label>
                </div>
              </div>

              {/* Area tombol aksi dan skenario cepat */}
              <div className="mt-8 bg-white p-5 shadow-[2px_4px_10px_rgba(0,0,0,0.2)] rotate-[-1deg] relative z-20">
                <Tape className="-top-2 left-1/2 -translate-x-1/2" />
                <button type="submit" className="relative w-full inline-flex items-center justify-center rounded-xl bg-slate-800 px-6 py-4 font-display text-xl font-bold text-white shadow-[0_6px_0_#334155] transition-all hover:-translate-y-1 hover:shadow-[0_10px_0_#334155] active:translate-y-2 active:shadow-none">
                  {result ? "Uji Coba Data Lain" : "Uji Coba Sekarang"}
                </button>
                <div className="mt-6 border-t-2 border-dashed border-slate-200 pt-4 text-center">
                  <p className="text-xs font-bold tracking-[0.1em] uppercase text-slate-500 mb-3">
                    Atau gunakan Skenario Cepat
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {(["berhasil", "gagal", "pionir"] as Outcome[]).map((o) => (
                      <button
                        key={o}
                        type="button"
                        onClick={() => loadScenario(o)}
                        className="rounded-md bg-slate-100 border border-slate-300 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-200 hover:-translate-y-0.5 active:translate-y-0"
                      >
                        {o === "pionir" ? "Pionir" : o === "gagal" ? "Gagal" : "Berhasil"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </form>

            {/* Sisi kanan: Cetak biru lembar hasil validasi */}
            <div className="h-full z-10 relative group perspective-1000">
              <div className="transition-transform duration-500 rotate-[1deg] hover:rotate-0 hover:z-30 h-full">
                <PushPin color="bg-slate-800" className="-top-2 -left-2" />
                <PushPin color="bg-slate-800" className="-top-2 -right-2" />
                <div
                  className="h-full bg-white shadow-[2px_4px_12px_rgba(0,0,0,0.3)] relative overflow-hidden"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
                    backgroundSize: '1.5rem 1.5rem'
                  }}
                >
                  {!result ? (
                    <div className="flex flex-col items-center justify-center h-full min-h-[450px] p-8 text-center bg-white/50">
                      <div className="pin-float bg-slate-100 p-5 rounded-full shadow-lg border-2 border-slate-200 mb-6">
                        <PinIcon className="h-12 w-12 text-slate-700" />
                      </div>
                      <p className="font-display text-3xl font-extrabold text-slate-800 font-handwriting transform -rotate-2">Kertas Cetak Biru</p>
                      <p className="mt-3 text-base font-medium text-slate-600 max-w-[240px] mx-auto bg-white/80 p-2 rounded-md shadow-sm">
                        Area ini masih kosong. Isi formulir di sebelah kiri untuk melihat analisis presedenmu.
                      </p>
                    </div>
                  ) : (
                    <div
                      ref={panel}
                      className={`h-full border-t-8 p-6 sm:p-8 bg-white/90 ${toneMap[result.outcome].panel}`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <Tag tone={toneMap[result.outcome].chip}>
                          {result.outcome === "pionir" ? "Belum ada data" : result.outcome}
                        </Tag>
                      </div>
                      <h3 className="mt-6 font-display text-3xl font-extrabold text-slate-900 leading-tight">{result.headline}</h3>
                      <p className="mt-3 text-base text-slate-700 font-medium leading-relaxed font-handwriting text-lg">{result.summary}</p>

                      <div className="mt-8 bg-slate-50 border-2 border-slate-200 shadow-sm p-5 rounded-xl">
                        <ScoreBar value={result.score} label={result.scoreLabel} tone={toneMap[result.outcome].bar} />
                        {result.outcome === "pionir" && (
                          <p className="mt-3 text-sm text-sky-800 font-medium bg-sky-100 p-3 rounded border border-sky-200 border-dashed">
                            Nol preseden bukan berarti idenya buruk â€” cuma belum ada yang nyatet.
                          </p>
                        )}
                      </div>

                      <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                        {result.points.map((p) => (
                          <div key={p.label} className="border-b-2 border-slate-200 py-2">
                            <dt className="text-xs font-extrabold tracking-widest uppercase text-slate-500 mb-1">{p.label}</dt>
                            <dd className="font-display text-xl font-extrabold text-slate-900">{p.value}</dd>
                          </div>
                        ))}
                      </dl>

                      {result.alternatives && (
                        <div className="mt-8">
                          <p className="font-display text-xl font-bold text-slate-900 border-b-2 border-slate-800 inline-block">Alternatif Solusi</p>
                          <ul className="mt-4 space-y-4">
                            {result.alternatives.map((a) => (
                              <li key={a.title} className="bg-white border-2 border-slate-200 shadow-[2px_2px_0_rgba(0,0,0,0.1)] p-4 rounded-lg">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                  <p className="font-bold text-slate-800 text-lg">{a.title}</p>
                                  <span className="font-display text-lg font-extrabold text-slate-800 bg-slate-200 px-2 py-1 rounded">{a.score}%</span>
                                </div>
                                <div className="mt-3 h-2 overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-inner">
                                  <div className="h-full bg-slate-800 rounded-full" style={{ width: `${a.score}%` }} />
                                </div>
                                <p className="mt-3 text-sm font-medium text-slate-600 font-handwriting text-md">{a.why}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {result.evidence && (
                        <div className="mt-6 p-5 bg-yellow-50 border border-yellow-200 shadow-sm relative rotate-1">
                          <Tape className="-top-2 right-4" />
                          <p className="font-bold text-slate-800 mb-2 uppercase text-xs tracking-wider">Catatan Lapangan:</p>
                          <ul className="space-y-2">
                            {result.evidence.map((e) => (
                              <li key={e} className="flex gap-3 text-sm font-medium text-slate-700">
                                <span className="font-bold text-slate-400">•</span>
                                <span className="leading-relaxed font-handwriting text-md">{e}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
