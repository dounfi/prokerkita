import { useState } from "react";
import { ContourLines, MapNetwork, PinIcon, SectionLabel, Tag } from "./Decor";

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
  return (
    <section id="kontak" className="relative overflow-hidden bg-leaf text-leaf-foreground">
      <div className="absolute inset-0 pk-dots opacity-20" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_1fr]">
        <div data-reveal="left">
          <MapNetwork className="h-20 w-28 text-sun" />
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-5xl">
            Kampusmu punya arsip laporan KKN? Ayo digabung.
          </h2>
          <p className="mt-4 max-w-lg opacity-90">
            Makin banyak laporan yang masuk, makin akurat pembandingnya buat semua orang. Kami bantu
            rapihin format dan tetap cantumin nama kampus di tiap laporan.
          </p>
          <ul className="mt-6 space-y-2 text-sm opacity-90">
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
          className="rounded-2xl border border-ink/10 bg-white/80 backdrop-blur-sm p-6 text-ink pk-hard"
          data-reveal="right"
        >
          {sent ? (
            <div className="grid min-h-64 place-items-center text-center">
              <div>
                <PinIcon className="mx-auto h-10 w-10 text-leaf" />
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
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border-2 border-cream/60 bg-leaf">
            <PinIcon className="h-5 w-5" />
          </span>
          <p className="truncate font-display font-bold">ProkerKita</p>
        </div>
        <p className="text-sm text-cream/65">
          Prototipe front-end. Semua angka dan laporan di sini masih data contoh.
        </p>
      </div>
    </footer>
  );
}
