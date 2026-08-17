import { PinIcon, SectionLabel } from "./Decor";

export function Tentang() {
  return (
    <section id="tentang" className="bg-[#FAF8F5] py-20 md:py-32 relative">
      {/* Efek pendaran latar belakang halus */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute -top-48 -left-36 w-[32rem] h-[32rem] bg-[#3CA4FF]/18 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#F8981D]/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        
        {/* Bagian atas: Judul dan deskripsi utama */}
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

        {/* Kartu pencapaian dan statistik */}
        <div className="bg-white rounded-[2.5rem] p-10 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-white flex flex-col sm:flex-row justify-between gap-10 mb-24 relative" data-reveal>
          {/* Dekorasi pin jarum */}
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

        {/* Grid fitur utama 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Kartu 1: Alasan & Preseden */}
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

          {/* Kartu 2: Kecepatan Layanan */}
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

          {/* Kartu 3: Kualitas & Akses */}
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

          {/* Kartu 4: Fokus Dampak Nyata */}
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

        {/* Kartu catatan kutipan penutup */}
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

export default Tentang;
