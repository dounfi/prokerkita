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
    <section id="tentang" className="bg-[#FAF8F5] py-20 md:py-32 relative overflow-hidden">
      {/* Soft background blobs for aesthetic vibe */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#3CA4FF]/10 rounded-full blur-[80px]"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#F8981D]/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        
        {/* Top Section: Header & Text */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 mb-20">
          <div data-reveal>
            <SectionLabel>Tentang ProkerKita</SectionLabel>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#003874] leading-[1.15]">
              Dibuat karena <br/>
              <span className="text-[#3CA4FF] relative inline-block">
                ada yang salah.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#F8981D] opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
          </div>
          <div className="flex flex-col justify-center space-y-6 text-lg text-slate-700 leading-relaxed font-medium" data-reveal="right">
            <p>
              Bukan dari ruang rapat kampus atau lembaga riset. ProkerKita lahir dari keresahan yang terlalu sering diabaikan, bahwa mencari referensi KKN di Indonesia bisa terasa seperti mengulang kesalahan dari awal, dan kebanyakan mahasiswa berjalan sendirian.
            </p>
            <p>
              Kami tidak punya solusi untuk semua masalah di desa. Tapi untuk yang satu ini — mencegah proker gagal karena kurangnya preseden — kami bisa membantu.
            </p>
          </div>
        </div>

        {/* Stats Section (Cottagecore / Soft Floating Card) */}
        <div className="bg-white rounded-[2.5rem] p-10 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-white flex flex-col sm:flex-row justify-between gap-10 mb-24 relative" data-reveal>
          {/* Decorative Pin */}
          <div className="absolute -top-4 -left-4 w-10 h-10 rotate-12">
            <PinIcon className="w-full h-full text-[#F8981D] drop-shadow-md" />
          </div>
          
          <div className="flex-1 text-center sm:text-left">
            <p className="font-display text-5xl sm:text-6xl font-extrabold text-[#3CA4FF] mb-2 drop-shadow-sm">15rb+</p>
            <p className="text-slate-500 font-bold tracking-wide uppercase text-sm">Laporan Dianalisis</p>
          </div>
          <div className="hidden sm:block w-0.5 bg-slate-100 rounded-full"></div>
          <div className="flex-1 text-center sm:text-left">
            <p className="font-display text-5xl sm:text-6xl font-extrabold text-[#55B55A] mb-2 drop-shadow-sm">89%</p>
            <p className="text-slate-500 font-bold tracking-wide uppercase text-sm">Akurasi Deteksi</p>
          </div>
          <div className="hidden sm:block w-0.5 bg-slate-100 rounded-full"></div>
          <div className="flex-1 text-center sm:text-left">
            <p className="font-display text-5xl sm:text-6xl font-extrabold text-[#F8981D] mb-2 drop-shadow-sm">Rp0</p>
            <p className="text-slate-500 font-bold tracking-wide uppercase text-sm">Biaya Pengguna</p>
          </div>
        </div>

        {/* 2x2 Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Card 1 */}
          <div className="bg-white rounded-[2rem] p-10 shadow-lg shadow-sky-100/50 border-2 border-sky-50 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300" data-reveal>
            <span className="absolute top-4 right-6 font-display text-8xl font-extrabold text-sky-50/60 group-hover:text-sky-100/60 transition-colors pointer-events-none">01</span>
            <div className="w-16 h-16 rounded-2xl bg-sky-100 text-[#3CA4FF] flex items-center justify-center mb-12 relative z-10 border-2 border-white shadow-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 className="font-display text-2xl font-extrabold text-[#003874] mb-4 relative z-10">Alasan, bukan asumsi</h3>
            <p className="text-slate-600 font-medium leading-relaxed relative z-10">
              Hasil pencocokan desa bukan sekadar stempel 'cocok' atau 'tidak'. Setiap kesimpulan punya penjelasan preseden, karena kamu berhak mengerti dasarnya.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[2rem] p-10 shadow-lg shadow-amber-100/50 border-2 border-amber-50 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300" data-reveal>
            <span className="absolute top-4 right-6 font-display text-8xl font-extrabold text-amber-50/60 group-hover:text-amber-100/60 transition-colors pointer-events-none">02</span>
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-[#F8981D] flex items-center justify-center mb-12 relative z-10 border-2 border-white shadow-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <h3 className="font-display text-2xl font-extrabold text-[#003874] mb-4 relative z-10">Kecepatan = Hormat</h3>
            <p className="text-slate-600 font-medium leading-relaxed relative z-10">
              Waktu mahasiswa KKN sudah cukup banyak tersita. Kami memastikan hasil pencarian ada dalam hitungan detik — bukan karena malas, tapi menghargai waktumu.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[2rem] p-10 shadow-lg shadow-rose-100/50 border-2 border-rose-50 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300" data-reveal>
            <span className="absolute top-4 right-6 font-display text-8xl font-extrabold text-rose-50/60 group-hover:text-rose-100/60 transition-colors pointer-events-none">03</span>
            <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-500 flex items-center justify-center mb-12 relative z-10 border-2 border-white shadow-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div>
            <h3 className="font-display text-2xl font-extrabold text-[#003874] mb-4 relative z-10">Kualitas & Akses</h3>
            <p className="text-slate-600 font-medium leading-relaxed relative z-10">
              Ada yang bilang gratis tidak bisa bagus. Kami tidak setuju. Akses ke ribuan preseden valid tidak seharusnya bergantung pada tebal tipisnya dompet kelompok.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-[2rem] p-10 shadow-lg shadow-emerald-100/50 border-2 border-emerald-50 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300" data-reveal>
            <span className="absolute top-4 right-6 font-display text-8xl font-extrabold text-emerald-50/60 group-hover:text-emerald-100/60 transition-colors pointer-events-none">04</span>
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-[#55B55A] flex items-center justify-center mb-12 relative z-10 border-2 border-white shadow-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <h3 className="font-display text-2xl font-extrabold text-[#003874] mb-4 relative z-10">Dampak, bukan gaya</h3>
            <p className="text-slate-600 font-medium leading-relaxed relative z-10">
              Kami sengaja membuang fitur-fitur berlebihan. Kami percaya bahwa platform yang baik tidak mencari perhatian, melainkan memastikan proker desamu berjalan lancar.
            </p>
          </div>
        </div>

        {/* Bottom Quote Section (Cottagecore Note Style) */}
        <div className="bg-[#E8F5E9] rounded-[2.5rem] p-10 sm:p-16 border-2 border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden" data-reveal>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#55B55A] opacity-5 rounded-full blur-[40px] pointer-events-none"></div>
          
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 relative z-10 items-start">
            <div className="text-[#55B55A] shrink-0 bg-white p-4 rounded-2xl shadow-sm border border-emerald-100">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
            </div>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#003874] leading-relaxed mb-8">
                Setiap laporan KKN yang menumpuk di perpustakaan tanpa dibaca ulang tidak hanya merugikan satu angkatan. Ia merusak potensi desa terhadap kemungkinan bahwa sebuah proker akan membuahkan hasil. ProkerKita ada karena potensi desa layak dilanjutkan.
              </h3>
              <div className="flex items-center gap-4">
                <span className="w-10 h-1 bg-[#55B55A] rounded-full"></span>
                <span className="font-bold text-sm text-[#00723F] tracking-[0.2em] uppercase">Tim ProkerKita</span>
              </div>
            </div>
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
      // Animasi layangan
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

      // Ekor layangan goyang
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
              <h3 className="font-display text-2xl font-bold text-ink">Ayo Kolaborasi</h3>
              <p className="text-ink/70 text-sm mt-1 mb-4 leading-relaxed">
                Tertarik untuk menghubungkan arsip kampusmu dengan database kami? Tinggalkan kontakmu di sini!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-ink">Nama / Perwakilan</span>
                  <input
                    required
                    type="text"
                    placeholder="Nama kamu"
                    className="w-full rounded-xl border-2 border-ink/20 bg-white px-4 py-3 text-sm font-medium outline-none focus:border-ink transition-colors placeholder:text-ink/30 shadow-inner"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-ink">Instansi / Kampus</span>
                  <input
                    required
                    type="text"
                    placeholder="Universitas..."
                    className="w-full rounded-xl border-2 border-ink/20 bg-white px-4 py-3 text-sm font-medium outline-none focus:border-ink transition-colors placeholder:text-ink/30 shadow-inner"
                  />
                </label>
              </div>

              <label className="block mt-4 mb-4">
                <span className="mb-2 block text-sm font-bold text-ink">Email Kampus / Organisasi</span>
                <input
                  required
                  type="email"
                  placeholder="contoh@kampus.ac.id"
                  className="w-full rounded-xl border-2 border-ink/20 bg-white px-4 py-3 text-sm font-medium outline-none focus:border-ink transition-colors placeholder:text-ink/30 shadow-inner"
                />
              </label>

              <label className="block mt-4 mb-6">
                <span className="mb-2 block text-sm font-bold text-ink">Pesan Singkat</span>
                <textarea
                  rows={3}
                  placeholder="Contoh: Kami punya 200+ laporan tahun 2023..."
                  className="w-full rounded-xl border-2 border-ink/20 bg-white px-4 py-3 text-sm font-medium outline-none focus:border-ink transition-colors placeholder:text-ink/30 shadow-inner"
                />
              </label>
              
              <button type="submit" className="btn-pionir btn-pionir-orange w-full px-6 py-4 font-bold text-base shadow-md hover:-translate-y-1 hover:shadow-lg transition-all">
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
    <footer className="relative bg-gradient-to-b from-[#059669] to-[#064e3b] text-white pt-20 pb-12 overflow-hidden border-t border-solid border-[#10b981]">
      
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#34d399] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#10b981] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white shadow-xl overflow-hidden p-2">
                <img src="/favicon.svg" alt="ProkerKita Logo" className="w-full h-full object-contain" />
              </span>
              <p className="font-display text-3xl font-extrabold text-white tracking-tight">Proker<span className="text-[#ffc72c]">Kita</span></p>
            </div>
            <p className="text-white/80 text-sm font-medium leading-relaxed">
              Platform kolaborasi arsip laporan KKN pertama di Indonesia. Membantu mahasiswa menyusun rencana yang terukur dan berdampak nyata.
            </p>
            <div className="flex gap-4 mt-2">
              {/* Social Icons (SVGs, NO EMOJIS, NO TEXT ABBREVIATIONS) */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ffc72c] hover:text-[#064e3b] cursor-pointer transition-all shadow-sm">
                {/* Instagram */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ffc72c] hover:text-[#064e3b] cursor-pointer transition-all shadow-sm">
                {/* Twitter / X */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ffc72c] hover:text-[#064e3b] cursor-pointer transition-all shadow-sm">
                {/* LinkedIn */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="flex flex-col gap-4 lg:pl-10">
            <h4 className="font-bold text-lg text-[#ffc72c]">Produk</h4>
            <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Pencarian Laporan</a>
            <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Validasi Ide Proker</a>
            <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Integrasi Kampus</a>
            <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Harga & Paket</a>
          </div>

          {/* Links Col 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg text-[#ffc72c]">Sumber Daya</h4>
            <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Blog & Artikel</a>
            <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Panduan KKN</a>
            <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Kisah Sukses</a>
            <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Pusat Bantuan</a>
          </div>

          {/* Links Col 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg text-[#ffc72c]">Perusahaan</h4>
            <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Tentang Kami</a>
            <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Karir</a>
            <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Kebijakan Privasi</a>
            <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Syarat & Ketentuan</a>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="border-t border-solid border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-white/70">
            © {new Date().getFullYear()} ProkerKita Nusantara. Hak Cipta Dilindungi.
          </p>
          <div className="text-sm font-bold text-white bg-white/10 px-4 py-2 rounded-full border border-solid border-white/10 shadow-sm">
            Dibuat di Indonesia
          </div>
        </div>
      </div>
    </footer>
  );
}
