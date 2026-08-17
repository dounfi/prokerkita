import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MapNetwork } from "./Decor";

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

      {/* Animasi elemen layang-layang berterbangan */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Layang-layang 1: Warna merah & kuning */}
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

        {/* Layang-layang 2: Warna biru muda & kuning */}
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

        {/* Layang-layang 3: Warna oranye kejauhan */}
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
            <div className="grid min-h-64 place-items-center text-center p-4 animate-[zoomIn_0.3s_ease-out]">
              <div>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner border border-emerald-200">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-extrabold text-slate-800">Pesan Berhasil Terkirim!</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-sm mx-auto font-medium">
                  Terima kasih atas minat kolaborasimu. Tim ProkerKita telah menerima pesanmu dan akan segera menghubungi via email dalam 1x24 jam.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-pionir btn-pionir-orange mt-6 px-6 py-3 text-sm font-bold shadow-md hover:-translate-y-0.5 transition-all"
                >
                  Kirim Pesan Lain
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

    </section>
  );
}

export default Kontak;
