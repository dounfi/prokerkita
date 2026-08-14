import { useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { PinIcon, SectionLabel, Tag } from "./Decor";

type Report = {
  id: number;
  title: string;
  campus: string;
  location: string;
  year: number;
  category: string;
  verified: boolean;
  outcome: "Berhasil" | "Gagal" | "Sebagian";
};

const seed: Report[] = [
  {
    id: 1,
    title: "Kelas belajar sore anak SD",
    campus: "UGM",
    location: "Kalibawang, Kulon Progo",
    year: 2023,
    category: "Pendidikan",
    verified: true,
    outcome: "Berhasil",
  },
  {
    id: 2,
    title: "Bank sampah keliling",
    campus: "UNDIP",
    location: "Tirtomulyo, Kendal",
    year: 2022,
    category: "Lingkungan",
    verified: true,
    outcome: "Gagal",
  },
  {
    id: 3,
    title: "Digitalisasi UMKM keripik",
    campus: "UNS",
    location: "Ngargosari, Boyolali",
    year: 2024,
    category: "Ekonomi",
    verified: false,
    outcome: "Sebagian",
  },
  {
    id: 4,
    title: "Posyandu remaja rutin",
    campus: "UNAIR",
    location: "Sumbermulyo, Jombang",
    year: 2023,
    category: "Kesehatan",
    verified: true,
    outcome: "Berhasil",
  },
  {
    id: 5,
    title: "Pemetaan sumber air desa",
    campus: "ITB",
    location: "Cikadu, Cianjur",
    year: 2021,
    category: "Infrastruktur",
    verified: false,
    outcome: "Sebagian",
  },
  {
    id: 6,
    title: "Wisata sawah swadaya",
    campus: "UB",
    location: "Pujon Kidul, Malang",
    year: 2024,
    category: "Ekonomi",
    verified: true,
    outcome: "Berhasil",
  },
  {
    id: 7,
    title: "Alat cuci tangan pedal",
    campus: "UNY",
    location: "Girirejo, Magelang",
    year: 2020,
    category: "Kesehatan",
    verified: true,
    outcome: "Gagal",
  },
  {
    id: 8,
    title: "Perpustakaan dusun keliling",
    campus: "UNHAS",
    location: "Bontolempangan, Gowa",
    year: 2023,
    category: "Pendidikan",
    verified: false,
    outcome: "Sebagian",
  },
];

const categories = ["Semua", "Pendidikan", "Lingkungan", "Ekonomi", "Kesehatan", "Infrastruktur"];

function detectCategory(name: string) {
  const t = name.toLowerCase();
  if (/sampah|sungai|hijau|pohon|lingkungan/.test(t)) return "Lingkungan";
  if (/umkm|jual|ekonomi|wisata|pasar/.test(t)) return "Ekonomi";
  if (/posyandu|sehat|gizi|stunting/.test(t)) return "Kesehatan";
  if (/jalan|air|jembatan|listrik/.test(t)) return "Infrastruktur";
  return "Pendidikan";
}

export function Repository() {
  const [reports, setReports] = useState(seed);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Semua");
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Floating ambient blue blobs animation (Noda Biru Samar Melayang)
      gsap.to(".bg-blue-blob-1", {
        x: 70,
        y: 45,
        scale: 1.15,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".bg-blue-blob-2", {
        x: -80,
        y: 60,
        scale: 1.2,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

      gsap.to(".bg-blue-blob-3", {
        x: 50,
        y: -40,
        scale: 1.1,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });
    },
    { scope: containerRef },
  );

  // mock upload flow
  const [fileName, setFileName] = useState("");
  const [detected, setDetected] = useState("");
  const [editing, setEditing] = useState(false);
  const [meta, setMeta] = useState({ title: "", location: "", year: "2026" });

  const list = useMemo(
    () =>
      reports.filter(
        (r) =>
          (cat === "Semua" || r.category === cat) &&
          (r.title + r.location + r.campus).toLowerCase().includes(q.toLowerCase()),
      ),
    [reports, q, cat],
  );

  const pickFile = (name: string) => {
    setFileName(name);
    const guessTitle = name.replace(/\.(pdf|docx?)$/i, "").replace(/[-_]/g, " ");
    setMeta({ title: guessTitle, location: "", year: "2026" });
    setDetected(detectCategory(guessTitle));
    setEditing(false);
  };

  const publish = () => {
    if (!fileName) return;
    setReports((prev) => [
      {
        id: Date.now(),
        title: meta.title || "Laporan tanpa judul",
        campus: "Kontribusi kamu",
        location: meta.location || "Lokasi belum diisi",
        year: Number(meta.year) || 2026,
        category: detected,
        verified: false,
        outcome: "Sebagian",
      },
      ...prev,
    ]);
    setFileName("");
    setDetected("");
    setMeta({ title: "", location: "", year: "2026" });
  };

  return (
    <section
      id="repository"
      ref={containerRef}
      className="relative overflow-hidden bg-white border-b border-ink/10 pb-24"
    >
      {/* Floating Soft Ambient Blue Gradient Blobs (Noda Biru Samar Melayang) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="bg-blue-blob-1 absolute -top-24 -left-20 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#38bdf8] via-[#0284c7] to-[#7dd3fc] opacity-20 blur-[120px]" />
        <div className="bg-blue-blob-2 absolute top-1/3 -right-24 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#bae6fd] via-[#38bdf8] to-[#0369a1] opacity-15 blur-[140px]" />
        <div className="bg-blue-blob-3 absolute bottom-10 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#e0f2fe] via-[#7dd3fc] to-[#38bdf8] opacity-25 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 z-10">
        <SectionLabel>Repository laporan</SectionLabel>
        <h2 className="max-w-2xl font-display text-3xl font-extrabold sm:text-5xl text-ink">
          Laporan KKN yang bisa dibaca, bukan cuma diarsipkan.
        </h2>

        {/* Search & Filter Bar */}
        <div className="mt-8 grid gap-3 rounded-2xl border border-ink/10 bg-white/90 backdrop-blur-md p-4 shadow-sm md:grid-cols-[minmax(0,1fr)_auto]">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari judul, desa, atau kampus"
            className="w-full rounded-xl border border-ink/10 bg-[#fcfbfa] px-4 py-3 text-sm outline-none placeholder:text-ink/40 focus:border-[#0284c7] focus:bg-white transition-colors"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border border-ink/10 px-3.5 py-2 text-xs font-bold transition-all ${
                  cat === c
                    ? "bg-[#0284c7] text-white shadow-sm"
                    : "bg-white text-ink/75 hover:bg-slate-50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Original Clean Report Cards Grid */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((r) => (
            <article
              key={r.id}
              className="flex flex-col justify-between rounded-2xl border border-ink/10 bg-white/90 backdrop-blur-md p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="min-w-0 font-display text-lg font-bold text-ink">{r.title}</h3>
                  <span className="shrink-0 rounded-md border border-ink/10 bg-white px-2 py-0.5 text-xs font-bold text-ink/70">
                    {r.year}
                  </span>
                </div>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-ink/70">
                  <PinIcon className="h-4 w-4 shrink-0 text-[#0284c7]" /> {r.location}
                </p>
                <p className="text-sm text-ink/60">{r.campus}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Tag tone={r.verified ? "leaf" : "sun"}>
                    {r.verified ? "Terverifikasi" : "Kontribusi Komunitas"}
                  </Tag>
                  <Tag
                    tone={r.outcome === "Gagal" ? "clay" : r.outcome === "Berhasil" ? "sky" : "ink"}
                  >
                    {r.outcome}
                  </Tag>
                </div>
              </div>
              <button className="mt-4 self-start text-sm font-bold text-clay hover:underline underline-offset-4 transition-all hover:text-clay/80">
                Baca ringkasannya
              </button>
            </article>
          ))}
          {list.length === 0 && (
            <p className="text-sm text-ink/60 col-span-full">Belum ada laporan yang cocok dengan pencarianmu.</p>
          )}
        </div>

        {/* Original Upload Box */}
        <div className="mt-10 grid gap-6 rounded-2xl border border-ink/10 bg-sun/30 p-6 md:grid-cols-[1fr_1.1fr]">
          <div>
            <h3 className="font-display text-2xl font-extrabold text-ink">Upload laporan kelompokmu</h3>
            <p className="mt-2 text-sm text-ink/75">
              Kategori dideteksi otomatis dari judul, tapi kamu yang menentukan akhirnya. Demo ini
              gak beneran ngirim file ke mana-mana.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "laporan-kkn-bank-sampah.pdf",
                "posyandu-remaja-2026.docx",
                "kelas-baca-dusun.pdf",
              ].map((f) => (
                <button
                  key={f}
                  onClick={() => pickFile(f)}
                  className="btn-pionir btn-pionir-white px-3 py-2 text-xs"
                >
                  Pilih {f}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border-2 border-dashed border-ink/20 bg-white p-5">
            {!fileName ? (
              <p className="text-sm text-ink/60">
                Belum ada file dipilih. Klik salah satu contoh file di samping buat lihat alurnya.
              </p>
            ) : (
              <div className="space-y-4">
                <p className="text-sm font-bold break-all text-ink">{fileName}</p>
                <div className="rounded-xl border border-ink/10 bg-white/80 backdrop-blur-sm p-4">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-ink/60">
                    Kategori terdeteksi AI
                  </p>
                  {!editing ? (
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <Tag tone="leaf">{detected}</Tag>
                      <button
                        onClick={() => setEditing(true)}
                        className="text-sm font-bold text-ink underline decoration-2 underline-offset-4 hover:text-ink/80"
                      >
                        Ganti kategori
                      </button>
                    </div>
                  ) : (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {categories.slice(1).map((c) => (
                        <button
                          key={c}
                          onClick={() => {
                            setDetected(c);
                            setEditing(false);
                          }}
                          className={`btn-pionir ${detected === c ? "btn-pionir-blue" : "btn-pionir-white"} px-3 py-1.5 text-xs`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    value={meta.title}
                    onChange={(e) => setMeta({ ...meta, title: e.target.value })}
                    placeholder="Judul laporan"
                    className="rounded-xl border border-ink/10 bg-white/80 backdrop-blur-sm px-3 py-2 text-sm outline-none"
                  />
                  <input
                    value={meta.location}
                    onChange={(e) => setMeta({ ...meta, location: e.target.value })}
                    placeholder="Desa, Kabupaten"
                    className="rounded-xl border border-ink/10 bg-white/80 backdrop-blur-sm px-3 py-2 text-sm outline-none"
                  />
                  <input
                    value={meta.year}
                    onChange={(e) => setMeta({ ...meta, year: e.target.value })}
                    placeholder="Tahun"
                    className="rounded-xl border border-ink/10 bg-white/80 backdrop-blur-sm px-3 py-2 text-sm outline-none"
                  />
                  <button
                    onClick={publish}
                    className="btn-pionir btn-pionir-blue px-4 py-2 text-sm"
                  >
                    Masukkan ke Repository
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
