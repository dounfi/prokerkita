import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
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
        "KKN UGM 2023 — Desa Kalibawang: jadwal 2x seminggu, pengajar dari karang taruna.",
        "KKN UNS 2022 — Desa Ngargosari: berhenti karena tempat dipakai kegiatan lain, solusinya pindah ke rumah warga.",
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
        { label: "Musim kemarau", value: "Mei – Oktober" },
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
  berhasil: { chip: "leaf", bar: "bg-leaf", panel: "bg-leaf/10 border-leaf" },
  gagal: { chip: "clay", bar: "bg-clay", panel: "bg-clay/10 border-clay" },
  pionir: { chip: "sky", bar: "bg-sky", panel: "bg-sky/10 border-sky" },
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
        <span className="text-sm font-semibold text-ink/70">{label}</span>
        <span className="font-display text-3xl font-extrabold">{shown}%</span>
      </div>
      <div className="mt-2 h-4 overflow-hidden rounded-full border border-ink/10 bg-white/80 backdrop-blur-sm">
        <div ref={bar} className={`h-full ${tone}`} style={{ width: 0 }} />
      </div>
    </div>
  );
}

export function Validator() {
  const [form, setForm] = useState<Form>(empty);
  const [result, setResult] = useState<Result | null>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result && panel.current) {
      gsap.fromTo(
        panel.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      );
    }
  }, [result]);

  const loadScenario = (o: Outcome) => {
    setForm(scenarios[o].form);
    setResult(scenarios[o].result);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `${form.idea} ${form.problem}`.toLowerCase();
    const o: Outcome = /sampah|bank sampah|daur/.test(text)
      ? "gagal"
      : /belajar|baca|les|anak|literasi/.test(text)
        ? "berhasil"
        : "pionir";
    setForm(form);
    setResult(scenarios[o].result);
  };

  const field =
    "w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none transition-shadow placeholder:text-ink/40 focus:pk-hard-sm";

  return (
    <section id="validasi" className="border-b border-ink/10 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionLabel>Form validasi</SectionLabel>
        <div className="grid gap-4 md:grid-cols-[1.2fr_auto] md:items-end">
          <h2 className="font-display text-3xl font-extrabold sm:text-5xl" data-reveal>
            Coba tempel ide proker kamu di sini.
          </h2>
          <p className="text-sm text-ink/70" data-reveal="right">
            Belum kepikiran mau nulis apa? Pakai contoh skenario di bawah.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <form
            onSubmit={submit}
            className="rounded-2xl border border-ink/10 bg-white p-6 pk-hard"
            data-reveal="left"
          >
            <div className="space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-sm font-bold">Ide proker</span>
                <textarea
                  rows={3}
                  value={form.idea}
                  onChange={(e) => setForm({ ...form, idea: e.target.value })}
                  placeholder="Contoh: bikin taman baca di balai dusun"
                  className={field}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-bold">Lokasi desa</span>
                <input
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  placeholder="Desa, Kabupaten"
                  className={field}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-bold">Masalah utama yang disasar</span>
                <input
                  value={form.problem}
                  onChange={(e) => setForm({ ...form, problem: e.target.value })}
                  placeholder="Contoh: sampah dibuang ke sungai"
                  className={field}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-bold">Estimasi budget (Rp)</span>
                <input
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  placeholder="2.000.000"
                  className={field}
                />
              </label>
            </div>

            <button type="submit" className="btn-pionir btn-pionir-blue mt-6 w-full px-6 py-3">
              Cek Proker Ini
            </button>

            <div className="mt-6 border-t-2 border-dashed border-ink/30 pt-5">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-ink/60">
                Atau lihat contoh skenario
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(["berhasil", "gagal", "pionir"] as Outcome[]).map((o) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => loadScenario(o)}
                    className="btn-pionir btn-pionir-white px-4 py-2 text-sm"
                  >
                    Skenario {o === "pionir" ? "Pionir" : o === "gagal" ? "Gagal" : "Berhasil"}
                  </button>
                ))}
              </div>
            </div>
          </form>

          <div data-reveal="right">
            {!result ? (
              <div className="grid h-full min-h-72 place-items-center rounded-2xl border-2 border-dashed border-ink/20/40 p-8 text-center">
                <div>
                  <PinIcon className="mx-auto h-10 w-10 text-ink/40" />
                  <p className="mt-3 font-display text-lg font-bold">Hasil muncul di sini</p>
                  <p className="mt-1 text-sm text-ink/60">
                    Isi form atau klik salah satu contoh skenario.
                  </p>
                </div>
              </div>
            ) : (
              <div
                ref={panel}
                className={`rounded-2xl border-2 p-6 pk-hard ${toneMap[result.outcome].panel} border-ink`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Tag tone={toneMap[result.outcome].chip}>
                    {result.outcome === "pionir" ? "Belum ada data" : result.outcome}
                  </Tag>
                  <span className="text-xs font-semibold text-ink/60">Data mock demo</span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-extrabold">{result.headline}</h3>
                <p className="mt-2 text-sm text-ink/75">{result.summary}</p>

                <div className="mt-5 rounded-xl border border-ink/10 bg-white p-4">
                  <ScoreBar
                    value={result.score}
                    label={result.scoreLabel}
                    tone={toneMap[result.outcome].bar}
                  />
                  {result.outcome === "pionir" && (
                    <p className="mt-2 text-xs text-ink/60">
                      Nol preseden bukan berarti idenya buruk — cuma belum ada yang nyatet.
                    </p>
                  )}
                </div>

                <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                  {result.points.map((p) => (
                    <div
                      key={p.label}
                      className="rounded-xl border border-ink/10/20 bg-white px-4 py-3"
                    >
                      <dt className="text-xs font-semibold tracking-wide uppercase text-ink/55">
                        {p.label}
                      </dt>
                      <dd className="font-display text-lg font-bold">{p.value}</dd>
                    </div>
                  ))}
                </dl>

                {result.alternatives && (
                  <div className="mt-5">
                    <p className="font-display font-bold">Alternatif yang lebih masuk</p>
                    <ul className="mt-3 space-y-3">
                      {result.alternatives.map((a) => (
                        <li key={a.title} className="rounded-xl border border-ink/10 bg-white p-4">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <p className="font-semibold">{a.title}</p>
                            <span className="font-display text-sm font-bold">{a.score}%</span>
                          </div>
                          <div className="mt-2 h-2.5 overflow-hidden rounded-full border border-ink/10 bg-white/80 backdrop-blur-sm">
                            <div className="h-full bg-sun" style={{ width: `${a.score}%` }} />
                          </div>
                          <p className="mt-2 text-sm text-ink/70">{a.why}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.evidence && (
                  <ul className="mt-5 space-y-2">
                    {result.evidence.map((e) => (
                      <li key={e} className="flex gap-2 text-sm text-ink/75">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-ink" />
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
