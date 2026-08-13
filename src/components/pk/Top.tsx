import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ContourLines, MapNetwork, PinIcon, SectionLabel, Tag } from "./Decor";

const nav = [
  { href: "#masalah", label: "Masalah" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#validasi", label: "Validasi" },
  { href: "#repository", label: "Repository" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/95 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#hero" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border-2 border-ink bg-leaf text-leaf-foreground">
            <PinIcon className="h-5 w-5" />
          </span>
          <span className="truncate font-display text-lg font-extrabold">ProkerKita</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-semibold text-ink/70 transition-colors hover:text-ink"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#validasi"
            className="rounded-full border-2 border-ink bg-sun px-4 py-2 text-sm font-bold text-sun-foreground transition-transform pk-hard-sm hover:-translate-y-0.5"
          >
            Cek Proker Ini
          </a>
        </nav>
        <a
          href="#validasi"
          className="rounded-full border-2 border-ink bg-sun px-3 py-1.5 text-xs font-bold text-sun-foreground md:hidden"
        >
          Cek Proker
        </a>
      </div>
    </header>
  );
}

export function Hero() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-line", { y: 40, opacity: 0, duration: 0.8, stagger: 0.12 })
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-cta > *", { y: 16, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3")
        .from(".hero-card", { y: 30, opacity: 0, rotate: 2, duration: 0.7, stagger: 0.12 }, "-=0.4");

      gsap.to(".hero-pin", {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 1.6,
        ease: "sine.inOut",
        stagger: 0.3,
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={wrap} className="relative overflow-hidden border-b-2 border-ink">
      <div className="absolute inset-0 pk-grid-paper" />
      <ContourLines className="absolute -bottom-6 left-0 w-full text-leaf/40" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <div className="hero-line mb-5">
            <Tag tone="clay">
              <PinIcon className="h-3.5 w-3.5" /> 1.284 laporan KKN terindeks
            </Tag>
          </div>
          <h1 className="font-display text-4xl leading-[1.02] font-extrabold sm:text-6xl lg:text-7xl">
            <span className="hero-line block">Proker kamu</span>
            <span className="hero-line block">
              mungkin <span className="bg-sun px-2 pb-1 inline-block border-2 border-ink -rotate-1">udah gagal</span>
            </span>
            <span className="hero-line block">di desa lain.</span>
          </h1>
          <p className="hero-sub mt-6 max-w-lg text-lg text-ink/75">
            ProkerKita ngecek ide proker KKN kamu ke laporan KKN desa-desa lain: pernah dicoba atau
            belum, hasilnya gimana, dan kalau gagal — apa yang lebih masuk buat kondisi desamu.
          </p>
          <div className="hero-cta mt-8 flex flex-wrap gap-3">
            <a
              href="#validasi"
              className="rounded-full border-2 border-ink bg-leaf px-6 py-3 font-bold text-leaf-foreground transition-transform pk-hard hover:-translate-y-1"
            >
              Cek Proker Ini
            </a>
            <a
              href="#repository"
              className="rounded-full border-2 border-ink bg-cream px-6 py-3 font-bold transition-transform pk-hard-sm hover:-translate-y-1"
            >
              Lihat Laporan KKN
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="hero-card relative rounded-2xl border-2 border-ink bg-card p-5 pk-hard">
            <div className="flex items-center justify-between gap-3">
              <p className="font-display font-bold">Bank sampah keliling</p>
              <Tag tone="clay">Gagal 4/5</Tag>
            </div>
            <p className="mt-3 text-sm text-ink/70">
              Dicoba di 5 desa dengan kondisi mirip. 4 berhenti jalan &lt; 3 bulan setelah KKN
              selesai karena gak ada yang ngangkut.
            </p>
            <div className="mt-4 rounded-xl border-2 border-ink bg-sun/40 p-3 text-sm">
              <span className="font-bold">Rekomendasi:</span> titip sistem setor ke pengepul yang
              udah rutin lewat, bukan bikin armada baru.
            </div>
          </div>
          <div className="hero-card mt-4 ml-auto w-[85%] rounded-2xl border-2 border-ink bg-sky p-4 text-sky-foreground pk-hard-sm">
            <p className="text-sm font-semibold">Belum ada data di Desa Tegalrejo</p>
            <p className="mt-1 text-sm opacity-90">
              Kamu jadi pionir. Ini kondisi daerahnya biar rencanamu realistis.
            </p>
          </div>
          <MapNetwork className="hero-pin absolute -top-8 -right-2 hidden h-24 w-32 text-clay lg:block" />
        </div>
      </div>
    </section>
  );
}

const angles = [
  {
    kicker: "Angle 1",
    title: "Ngulang proker yang udah gagal di tempat lain",
    body: "Tiap tahun ada kelompok yang bikin taman baca tanpa pengelola, atau alat cuci tangan yang nganggur bulan depan. Laporannya ada, tapi kesimpan di drive kampus lain.",
    quote: "\"Kita baru tau setelah program jalan sebulan kalau desa sebelah pernah coba hal yang sama.\"",
    tone: "bg-clay text-clay-foreground",
  },
  {
    kicker: "Angle 2",
    title: "Gak tau ide kita bakal jalan atau enggak",
    body: "Nebak dari asumsi: \"kayaknya butuh\", \"kayaknya rame\". Padahal yang bikin proker mati biasanya hal teknis: siapa yang lanjutin, budget habis di mana, musim apa.",
    quote: "\"Kalau ada gambaran risikonya dari awal, kita gak buang 2 minggu buat hal yang salah.\"",
    tone: "bg-ink text-cream",
  },
];

export function Masalah() {
  return (
    <section id="masalah" className="relative border-b-2 border-ink bg-cream">
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
              className={`grid gap-6 rounded-2xl border-2 border-ink p-6 md:grid-cols-[auto_1fr] md:p-8 ${a.tone} pk-hard`}
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
          className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border-2 border-dashed border-ink p-6"
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
  { label: "Berhasil", desc: "Ada bukti desa mirip yang jalan sampai sekarang, plus catatan apa yang bikin bertahan.", tone: "border-leaf bg-leaf/12" },
  { label: "Gagal", desc: "Alasan gagalnya dirinci, dikasih 2–3 alternatif proker + skor akurasi rekomendasi.", tone: "border-clay bg-clay/12" },
  { label: "Pionir", desc: "Belum ada preseden. Kamu dapat data kondisi daerah biar rencana dibikin realistis.", tone: "border-sky bg-sky/12" },
];

export function CaraKerja() {
  return (
    <section id="cara-kerja" className="relative overflow-hidden border-b-2 border-ink bg-card">
      <div className="absolute inset-0 pk-dots opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionLabel>Cara kerja</SectionLabel>
        <h2 className="max-w-2xl font-display text-3xl font-extrabold sm:text-5xl" data-reveal>
          Tiga langkah, lima menit, sebelum kamu tulis proposal.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3" data-stagger>
          {steps.map((s) => (
            <article
              key={s.n}
              className={`rounded-2xl border-2 border-ink p-6 pk-hard transition-transform hover:-translate-y-1 ${s.tone}`}
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
