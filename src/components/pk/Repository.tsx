import { useMemo, useState } from "react";
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
  { id: 1, title: "Kelas belajar sore anak SD", campus: "UGM", location: "Kalibawang, Kulon Progo", year: 2023, category: "Pendidikan", verified: true, outcome: "Berhasil" },
  { id: 2, title: "Bank sampah keliling", campus: "UNDIP", location: "Tirtomulyo, Kendal", year: 2022, category: "Lingkungan", verified: true, outcome: "Gagal" },
  { id: 3, title: "Digitalisasi UMKM keripik", campus: "UNS", location: "Ngargosari, Boyolali", year: 2024, category: "Ekonomi", verified: false, outcome: "Sebagian" },
  { id: 4, title: "Posyandu remaja rutin", campus: "UNAIR", location: "Sumbermulyo, Jombang", year: 2023, category: "Kesehatan", verified: true, outcome: "Berhasil" },
  { id: 5, title: "Pemetaan sumber air desa", campus: "ITB", location: "Cikadu, Cianjur", year: 2021, category: "Infrastruktur", verified: false, outcome: "Sebagian" },
  { id: 6, title: "Wisata sawah swadaya", campus: "UB", location: "Pujon Kidul, Malang", year: 2024, category: "Ekonomi", verified: true, outcome: "Berhasil" },
  { id: 7, title: "Alat cuci tangan pedal", campus: "UNY", location: "Girirejo, Magelang", year: 2020, category: "Kesehatan", verified: true, outcome: "Gagal" },
  { id: 8, title: "Perpustakaan dusun keliling", campus: "UNHAS", location: "Bontolempangan, Gowa", year: 2023, category: "Pendidikan", verified: false, outcome: "Sebagian" },
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
    <section id="repository" className="border-b-2 border-ink bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionLabel>Repository laporan</SectionLabel>
        <h2 className="max-w-2xl font-display text-3xl font-extrabold sm:text-5xl" data-reveal>
          Laporan KKN yang bisa dibaca, bukan cuma diarsipkan.
        </h2>

        <div className="mt-8 grid gap-3 rounded-2xl border-2 border-ink bg-cream p-4 md:grid-cols-[minmax(0,1fr)_auto]" data-reveal>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari judul, desa, atau kampus"
            className="w-full rounded-xl border-2 border-ink bg-card px-4 py-3 text-sm outline-none placeholder:text-ink/40"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border-2 border-ink px-3 py-2 text-xs font-bold transition-colors ${
                  cat === c ? "bg-ink text-cream" : "bg-card hover:bg-sun"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
          {list.map((r) => (
            <article
              key={r.id}
              className="flex flex-col rounded-2xl border-2 border-ink bg-cream p-5 transition-transform pk-hard-sm hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="min-w-0 font-display text-lg font-bold">{r.title}</h3>
                <span className="shrink-0 rounded-md border-2 border-ink bg-card px-2 py-0.5 text-xs font-bold">
                  {r.year}
                </span>
              </div>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-ink/70">
                <PinIcon className="h-4 w-4 shrink-0" /> {r.location}
              </p>
              <p className="text-sm text-ink/60">{r.campus}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Tag tone={r.verified ? "leaf" : "sun"}>
                  {r.verified ? "Terverifikasi" : "Kontribusi Komunitas"}
                </Tag>
                <Tag tone={r.outcome === "Gagal" ? "clay" : r.outcome === "Berhasil" ? "sky" : "ink"}>
                  {r.outcome}
                </Tag>
              </div>
              <button className="mt-4 self-start text-sm font-bold underline decoration-2 underline-offset-4 hover:text-clay">
                Baca ringkasannya
              </button>
            </article>
          ))}
          {list.length === 0 && (
            <p className="text-sm text-ink/60">Belum ada laporan yang cocok dengan pencarianmu.</p>
          )}
        </div>

        <div className="mt-10 grid gap-6 rounded-2xl border-2 border-ink bg-sun/30 p-6 md:grid-cols-[1fr_1.1fr]" data-reveal>
          <div>
            <h3 className="font-display text-2xl font-extrabold">Upload laporan kelompokmu</h3>
            <p className="mt-2 text-sm text-ink/75">
              Kategori dideteksi otomatis dari judul, tapi kamu yang menentukan akhirnya. Demo ini
              gak beneran ngirim file ke mana-mana.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["laporan-kkn-bank-sampah.pdf", "posyandu-remaja-2026.docx", "kelas-baca-dusun.pdf"].map(
                (f) => (
                  <button
                    key={f}
                    onClick={() => pickFile(f)}
                    className="rounded-full border-2 border-ink bg-card px-3 py-2 text-xs font-semibold hover:bg-cream"
                  >
                    Pilih {f}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="rounded-2xl border-2 border-dashed border-ink bg-card p-5">
            {!fileName ? (
              <p className="text-sm text-ink/60">
                Belum ada file dipilih. Klik salah satu contoh file di samping buat lihat alurnya.
              </p>
            ) : (
              <div className="space-y-4">
                <p className="text-sm font-bold break-all">{fileName}</p>
                <div className="rounded-xl border-2 border-ink bg-cream p-4">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-ink/60">
                    Kategori terdeteksi AI
                  </p>
                  {!editing ? (
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <Tag tone="leaf">{detected}</Tag>
                      <button
                        onClick={() => setEditing(true)}
                        className="text-sm font-bold underline decoration-2 underline-offset-4"
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
                          className={`rounded-full border-2 border-ink px-3 py-1.5 text-xs font-bold ${
                            detected === c ? "bg-ink text-cream" : "bg-card"
                          }`}
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
                    className="rounded-xl border-2 border-ink bg-cream px-3 py-2 text-sm outline-none"
                  />
                  <input
                    value={meta.location}
                    onChange={(e) => setMeta({ ...meta, location: e.target.value })}
                    placeholder="Desa, Kabupaten"
                    className="rounded-xl border-2 border-ink bg-cream px-3 py-2 text-sm outline-none"
                  />
                  <input
                    value={meta.year}
                    onChange={(e) => setMeta({ ...meta, year: e.target.value })}
                    placeholder="Tahun"
                    className="rounded-xl border-2 border-ink bg-cream px-3 py-2 text-sm outline-none"
                  />
                  <button
                    onClick={publish}
                    className="rounded-full border-2 border-ink bg-leaf px-4 py-2 text-sm font-bold text-leaf-foreground pk-hard-sm"
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
