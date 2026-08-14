import { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ContourLines, MapNetwork, PinIcon, SectionLabel, Tag } from "./Decor";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const before = [
  "Rencana awal: bikin armada bank sampah keliling pakai motor pinjaman.",
  "Alasannya: kelompok sebelumnya di kampus lain kelihatan sukses di foto.",
  "Yang gak kelihatan: programnya berhenti 2 bulan setelah mereka pulang.",
];

const after = [
  "Ganti ke sistem setor ke pengepul yang tiap Sabtu sudah lewat desa.",
  "Warga dapat uang langsung, mahasiswa cuma bantu bikin kesepakatan RT.",
  "Jalan 14 bulan setelah KKN selesai, dipegang 6 kepala keluarga.",
];

export function StudiKasus() {
  return (
    <section
      id="studi-kasus"
      className="relative overflow-hidden border-b border-ink/10 bg-ink text-cream"
    >
      <ContourLines className="absolute inset-x-0 top-10 w-full text-cream/15" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mb-4 flex items-center gap-3" data-reveal="left">
          <span className="h-3 w-3 rotate-45 bg-sun" />
          <span className="font-display text-xs font-bold tracking-[0.25em] uppercase">
            Studi kasus
          </span>
          <span className="h-px flex-1 bg-white/20" />
        </div>
        <h2 className="max-w-3xl font-display text-3xl font-extrabold sm:text-5xl" data-reveal>
          Desa Tirtomulyo: dari ide yang udah gagal, ke program yang masih jalan.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/40 p-6" data-reveal="left">
            <Tag tone="clay">Sebelum</Tag>
            <ul className="mt-4 space-y-4">
              {before.map((b) => (
                <li key={b} className="flex gap-3 text-cream/85">
                  <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-clay" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-2xl border border-ink/10 bg-white/80 backdrop-blur-sm p-6 text-ink pk-hard"
            data-reveal="right"
          >
            <Tag tone="leaf">Sesudah</Tag>
            <ul className="mt-4 space-y-4">
              {after.map((b) => (
                <li key={b} className="flex gap-3 text-ink/80">
                  <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-leaf" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3" data-stagger>
          {[
            { k: "2 minggu", v: "waktu yang gak kebuang buat ide lama" },
            { k: "Rp 3,1 jt", v: "budget dialihkan ke pelatihan warga" },
            { k: "14 bulan", v: "program masih jalan tanpa mahasiswa" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-white/40 p-5">
              <p className="font-display text-2xl font-extrabold text-sun">{s.k}</p>
              <p className="mt-1 text-sm text-cream/75">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Tentang() {
  return (
    <section id="tentang" className="border-b border-ink/10 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionLabel>Tentang kami</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div data-reveal>
            <h2 className="font-display text-3xl font-extrabold sm:text-5xl">
              Kami mantan peserta KKN yang kesel ngulang kesalahan orang lain.
            </h2>
            <p className="mt-5 text-ink/75">
              ProkerKita dimulai dari satu folder Google Drive isi laporan KKN yang kami kumpulin
              iseng-iseng. Ternyata pola gagalnya mirip terus. Jadi kami bikin alat buat nyari pola
              itu sebelum proker dijalanin, bukan sesudah.
            </p>
            <p className="mt-4 text-ink/75">
              Kami bukan lembaga penilai. Kami cuma nyusun pengalaman yang udah ada supaya kelompok
              berikutnya mulai dari titik yang lebih jauh.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Tag tone="leaf">Front-end demo</Tag>
              <Tag tone="sun">Data masih mock</Tag>
              <Tag tone="sky">Terbuka buat kolaborasi</Tag>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2" data-stagger>
            {[
              { n: "Nadia", r: "Riset & kurasi laporan" },
              { n: "Bagas", r: "Sistem pencocokan preseden" },
              { n: "Rima", r: "Desain & penulisan" },
              { n: "Yoga", r: "Kemitraan kampus" },
            ].map((p) => (
              <div key={p.n} className="rounded-2xl border border-ink/10 bg-white p-5 pk-hard-sm">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-ink/10 bg-sun">
                  <PinIcon className="h-5 w-5" />
                </span>
                <p className="mt-3 font-display text-lg font-bold">{p.n}</p>
                <p className="text-sm text-ink/70">{p.r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Datanya dari mana?",
    a: 'Dari laporan akhir KKN yang dibagikan kampus dan yang diunggah pengguna. Yang sumbernya bisa dicek kami tandai "Terverifikasi"; sisanya "Kontribusi Komunitas". Di demo ini semuanya masih data contoh.',
  },
  {
    q: "Skor akurasinya dihitung gimana?",
    a: "Skor itu tingkat kemiripan kondisi desamu dengan desa di laporan pembanding: geografi, mata pencaharian dominan, akses jalan, jumlah warga aktif, dan rentang budget. Makin banyak faktor yang cocok, makin tinggi skornya. Skor bukan jaminan berhasil.",
  },
  {
    q: "Kalau belum ada data sama sekali gimana?",
    a: "Kamu masuk jalur pionir. Kami tampilkan kondisi daerah yang kami punya (musim, sinyal, akses jalan, mata pencaharian) supaya rencanamu realistis, dan laporanmu nanti jadi preseden pertama untuk kelompok berikutnya.",
  },
  {
    q: "Data dari user bisa dipercaya gak?",
    a: 'Belum tentu, dan kami gak pura-pura sebaliknya. Laporan komunitas ditandai jelas, bisa dilaporkan kalau menyesatkan, dan baru jadi "Terverifikasi" kalau ada dokumen resmi dari kampus atau pemerintah desa.',
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-b border-ink/10 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
        <SectionLabel>Pertanyaan yang sering muncul</SectionLabel>
        <h2 className="font-display text-3xl font-extrabold sm:text-5xl" data-reveal>
          Hal yang biasanya ditanya duluan.
        </h2>
        <div className="mt-10 space-y-3" data-stagger>
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="rounded-2xl border border-ink/10 bg-white/80 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-display text-lg font-bold">{f.q}</span>
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink/10 font-bold transition-transform ${
                    open === i ? "rotate-45 bg-clay text-clay-foreground" : "bg-sun"
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && <p className="px-5 pb-5 text-ink/75">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Kontak() {
  const [sent, setSent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Signature GSAP Sine Wave Motion for Kites (Like gsap.com showcase animations)
      // Kite 1: Soaring & Swaying Red-Yellow Kite
      gsap.to(".footer-kite-1", {
        x: 65,
        y: -35,
        rotation: 16,
        scale: 1.08,
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Kite 2: Wide Gliding Cyan-Yellow Kite
      gsap.to(".footer-kite-2", {
        x: -75,
        y: 35,
        rotation: -18,
        scale: 1.05,
        duration: 4.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.3,
      });

      // Kite 3: Distant Orange High Flyer
      gsap.to(".footer-kite-3", {
        x: 40,
        y: -28,
        rotation: 12,
        scale: 1.1,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.7,
      });

      // Ribbon Tail Fluttering Animations
      gsap.to(".footer-kite-tail-1", {
        skewX: 18,
        rotation: 14,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(".footer-kite-tail-2", {
        skewX: -16,
        rotation: -12,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.2,
      });

      gsap.to(".footer-kite-tail-3", {
        skewX: 15,
        rotation: 10,
        duration: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.5,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="kontak"
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#7dd3fc] via-[#38bdf8] to-[#0284c7] text-white pt-20 pb-0"
    >
      <div className="absolute inset-0 pk-dots opacity-20" />

      {/* Animated Flying Kites (Layang-Layang Berterbangan) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Kite 1: Red & Yellow Diamond Kite */}
        <div className="footer-kite-1 absolute top-12 left-[8%] sm:left-[14%] opacity-90">
          <svg width="65" height="130" viewBox="0 0 60 120" fill="none">
            <polygon points="30,0 60,35 30,80 0,35" fill="#ef4444" />
            <polygon points="30,0 60,35 30,35" fill="#facc15" />
            <polygon points="30,35 0,35 30,80" fill="#facc15" />
            <line x1="30" y1="0" x2="30" y2="80" stroke="#78350f" strokeWidth="2" />
            <line x1="0" y1="35" x2="60" y2="35" stroke="#78350f" strokeWidth="2" />
            <path className="footer-kite-tail-1" style={{ transformOrigin: "30px 80px" }} d="M 30,80 Q 20,95 35,105 Q 15,115 30,125" stroke="#ef4444" strokeWidth="2.5" fill="none" />
            <line x1="30" y1="35" x2="-30" y2="150" stroke="white" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          </svg>
        </div>

        {/* Kite 2: Cyan & Yellow Diamond Kite */}
        <div className="footer-kite-2 absolute top-16 right-[8%] sm:right-[14%] opacity-95">
          <svg width="75" height="150" viewBox="0 0 70 140" fill="none">
            <polygon points="35,0 70,40 35,90 0,40" fill="#38bdf8" />
            <polygon points="35,0 70,40 35,40" fill="#facc15" />
            <polygon points="35,40 0,40 35,90" fill="#facc15" />
            <line x1="35" y1="0" x2="35" y2="90" stroke="#78350f" strokeWidth="2" />
            <line x1="0" y1="40" x2="70" y2="40" stroke="#78350f" strokeWidth="2" />
            <g className="footer-kite-tail-2" style={{ transformOrigin: "35px 90px" }}>
              <path d="M 35,90 Q 50,105 30,120 Q 55,135 35,150" stroke="#38bdf8" strokeWidth="3" fill="none" />
              <circle cx="42" cy="105" r="4" fill="#facc15" />
              <circle cx="38" cy="130" r="4" fill="#ef4444" />
            </g>
          </svg>
        </div>

        {/* Kite 3: Small Orange Distant Kite */}
        <div className="footer-kite-3 absolute top-8 right-[36%] opacity-85">
          <svg width="45" height="90" viewBox="0 0 40 80" fill="none">
            <polygon points="20,0 40,25 20,55 0,25" fill="#f97316" />
            <polygon points="20,0 40,25 20,25" fill="#fef08a" />
            <path className="footer-kite-tail-3" style={{ transformOrigin: "20px 55px" }} d="M 20,55 Q 10,65 25,75" stroke="#f97316" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
      
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pt-12 pb-8 sm:px-6 md:pt-16 lg:grid-cols-[1.1fr_1fr] z-10">
        <div data-reveal="left">
          <MapNetwork className="h-20 w-28 text-[#ffc72c]" />
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-5xl text-white">
            Kampusmu punya arsip laporan KKN? Ayo digabung.
          </h2>
          <p className="mt-4 max-w-lg text-white/90 font-medium">
            Makin banyak laporan yang masuk, makin akurat pembandingnya buat semua orang. Kami bantu
            rapihin format dan tetap cantumin nama kampus di tiap laporan.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-white/90 font-medium">
            <li>• Kirim arsip laporan (PDF/DOC), kami bantu susun.</li>
            <li>• Bisa mulai dari satu periode KKN dulu.</li>
            <li>• Kalau mau, kami presentasi dulu ke LPPM kampusmu.</li>
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-2xl border border-white/20 bg-white/95 backdrop-blur-md p-6 text-ink pk-hard shadow-2xl"
          data-reveal="right"
        >
          {sent ? (
            <div className="grid min-h-64 place-items-center text-center">
              <div>
                <PinIcon className="mx-auto h-10 w-10 text-[#059669]" />
                <p className="mt-3 font-display text-xl font-bold">Pesannya kecatat (demo)</p>
                <p className="mt-2 text-sm text-ink/70">
                  Ini masih front-end doang, jadi belum ada yang terkirim ke server mana pun.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-pionir btn-pionir-yellow mt-4 px-4 py-2 text-sm"
                >
                  Tulis lagi
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold">Ajak kami ngobrol</h3>
              {[
                { l: "Nama kamu", p: "Nama lengkap" },
                { l: "Kampus / organisasi", p: "Contoh: LPPM Universitas ..." },
                { l: "Email", p: "nama@kampus.ac.id" },
              ].map((f) => (
                <label key={f.l} className="block">
                  <span className="mb-1.5 block text-sm font-bold">{f.l}</span>
                  <input
                    required
                    placeholder={f.p}
                    className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none placeholder:text-ink/40"
                  />
                </label>
              ))}
              <label className="block">
                <span className="mb-1.5 block text-sm font-bold">Mau kontribusi apa?</span>
                <textarea
                  rows={3}
                  placeholder="Contoh: kami punya 40 laporan KKN 2021–2025"
                  className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none placeholder:text-ink/40"
                />
              </label>
              <button type="submit" className="btn-pionir btn-pionir-orange w-full px-6 py-3">
                Kirim Ajakan Kolaborasi
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Terraced Rice Field Hills at Bottom (Flush to Footer) */}
      <div className="relative w-full overflow-hidden leading-none z-10 pointer-events-none mt-6">
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="footerSawahGrad1" x1="720" y1="0" x2="720" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <linearGradient id="footerSawahGrad2" x1="720" y1="50" x2="720" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>

          {/* Back Rice Terrace Level */}
          <path d="M 0,80 C 350,40 650,120 950,60 C 1200,20 1350,70 1440,60 L 1440,180 L 0,180 Z" fill="url(#footerSawahGrad1)" />

          {/* Middle Rice Terrace Level */}
          <path d="M 0,110 C 380,80 580,150 880,100 C 1130,60 1320,120 1440,100 L 1440,180 L 0,180 Z" fill="url(#footerSawahGrad2)" />

          {/* Front Rice Terrace Level (Flush to bottom) */}
          <path d="M 0,140 C 420,110 720,170 1020,120 C 1270,80 1390,140 1440,130 L 1440,180 L 0,180 Z" fill="#059669" />
          <path d="M 0,142 C 420,112 720,172 1020,122 C 1270,82 1390,142 1440,132" stroke="#ffc72c" strokeWidth="4" strokeDasharray="8 8" fill="none" />
        </svg>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-[#059669] text-white pt-4 pb-10 overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-center z-10 border-t border-white/20 pt-6">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border-2 border-white/70 bg-[#ffc72c] text-ink shadow-md">
            <PinIcon className="h-5 w-5" />
          </span>
          <p className="truncate font-display text-xl font-extrabold text-white">ProkerKita</p>
        </div>
        <p className="text-sm font-medium text-white/90">
          Prototipe front-end. Semua angka dan laporan di sini masih data contoh.
        </p>
      </div>
    </footer>
  );
}
