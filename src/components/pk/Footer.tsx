export function Footer({ waveBg = "blue" }: { waveBg?: "blue" | "transparent" | string } = {}) {
  const bgFill = waveBg === "blue" ? "#0284c7" : waveBg !== "transparent" ? waveBg : null;

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Ilustrasi bukit sawah terasering di bagian atas footer */}
      <div className="relative w-full overflow-hidden leading-none z-10 pointer-events-none -mb-1">
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="xMidYMax slice"
        >
          {/* Latar belakang atas bukit sawah */}
          {bgFill && <rect x="0" y="0" width="1440" height="180" fill={bgFill} />}

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

          {/* Lapisan bukit sawah belakang */}
          <path d="M 0,80 C 350,40 650,120 950,60 C 1200,20 1350,70 1440,60 L 1440,180 L 0,180 Z" fill="url(#footerSawahGrad1)" />

          {/* Lapisan bukit sawah tengah */}
          <path d="M 0,110 C 380,80 580,150 880,100 C 1130,60 1320,120 1440,100 L 1440,180 L 0,180 Z" fill="url(#footerSawahGrad2)" />

          {/* Lapisan bukit sawah depan */}
          <path d="M 0,140 C 420,110 720,170 1020,120 C 1270,80 1390,140 1440,130 L 1440,180 L 0,180 Z" fill="#059669" />
          <path d="M 0,142 C 420,112 720,172 1020,122 C 1270,82 1390,142 1440,132" stroke="#ffc72c" strokeWidth="4" strokeDasharray="8 8" fill="none" />
        </svg>
      </div>

      <div className="relative bg-gradient-to-b from-[#059669] to-[#064e3b] text-white pt-12 pb-12 overflow-hidden">
        {/* Efek cahaya latar belakang */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#34d399] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#10b981] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16">
            
            {/* Kolom identitas brand */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <img src="/favicon.svg" alt="ProkerKita Logo" className="w-10 h-10 object-contain drop-shadow-md" />
                <p className="font-display text-3xl font-extrabold text-white tracking-tight">Proker<span className="text-[#ffc72c]">Kita</span></p>
              </div>
              <p className="text-white/80 text-sm font-medium leading-relaxed">
                Platform kolaborasi arsip laporan KKN pertama di Indonesia. Membantu mahasiswa menyusun rencana yang terukur dan berdampak nyata.
              </p>
              <div className="flex gap-4 mt-2">
                {/* Ikon media sosial */}
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

            {/* Kolom tautan produk */}
            <div className="flex flex-col gap-4 lg:pl-10">
              <h4 className="font-bold text-lg text-[#ffc72c]">Produk</h4>
              <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Pencarian Laporan</a>
              <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Validasi Ide Proker</a>
              <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Integrasi Kampus</a>
              <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Harga & Paket</a>
            </div>

            {/* Kolom tautan sumber daya */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-lg text-[#ffc72c]">Sumber Daya</h4>
              <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Blog & Artikel</a>
              <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Panduan KKN</a>
              <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Kisah Sukses</a>
              <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Pusat Bantuan</a>
            </div>

            {/* Kolom tautan perusahaan */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-lg text-[#ffc72c]">Perusahaan</h4>
              <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Tentang Kami</a>
              <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Karir</a>
              <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Kebijakan Privasi</a>
              <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 text-sm font-medium transition-all">Syarat & Ketentuan</a>
            </div>
          </div>

          {/* Baris hak cipta di bagian bawah */}
          <div className="border-t border-solid border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-medium text-white/70">
              © {new Date().getFullYear()} ProkerKita Nusantara. Hak Cipta Dilindungi.
            </p>
            <div className="text-sm font-bold text-white bg-white/10 px-4 py-2 rounded-full border border-solid border-white/10 shadow-sm">
              Dibuat di Indonesia
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
