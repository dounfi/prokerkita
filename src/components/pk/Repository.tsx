import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TagData {
  text: string;
  color: string;
}

interface CardData {
  title: string;
  year: string;
  location: string;
  univ: string;
  tags: TagData[];
  summary: string;
}

const RepositorySection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // State manajemen modal detail laporan KKN
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  // State penanganan simulasi proses pengunggahan berkas
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [cards, setCards] = useState<CardData[]>([
    {
      title: "Kelas belajar sore anak SD", year: "2023", location: "Kalibawang, Kulon Progo",
      univ: "UGM", tags: [{ text: "Terverifikasi", color: "bg-green-100 text-green-700" }, { text: "Berhasil", color: "bg-blue-100 text-blue-700" }],
      summary: "Program pengabdian ini berfokus pada peningkatan literasi dan numerasi anak-anak desa melalui kelas sore yang interaktif. Diikuti oleh 40 anak SD setempat, program ini berhasil meningkatkan minat baca dan pemahaman dasar matematika dengan metode belajar sambil bermain."
    },
    {
      title: "Bank sampah keliling", year: "2022", location: "Tirtomulyo, Kendal",
      univ: "UNDIP", tags: [{ text: "Terverifikasi", color: "bg-green-100 text-green-700" }, { text: "Gagal", color: "bg-red-100 text-red-700" }],
      summary: "Inisiatif pembuatan armada pengangkut sampah berbasis motor roda tiga pinjaman warga. Meskipun ide ini disambut baik, pelaksanaannya terhenti di bulan kedua karena motor operasional ditarik kembali oleh pemiliknya secara mendadak, menyebabkan jadwal pengambilan berantakan."
    }
  ]);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      setCards(prev => [{
        title: "Proker Baru (Demo)", year: "2026", location: "Desa Simulasi, Jawa Barat",
        univ: "IPB", tags: [{ text: "Review", color: "bg-yellow-100 text-yellow-700" }],
        summary: "Ini adalah demonstrasi dokumen proposal yang baru saja diunggah ke sistem ProkerKita. Sistem sedang melakukan verifikasi dan pemindaian AI untuk mendeteksi potensi risiko pada ide pengabdian masyarakat ini."
      }, ...prev]);
      setTimeout(() => setUploadSuccess(false), 3000);
    }, 2000);
  };

  // Konfigurasi animasi GSAP untuk interaksi latar belakang dan kartu
  useGSAP(() => {
    gsap.to(".bg-leaf-1", { rotation: "+=8", transformOrigin: "center center", duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".bg-leaf-2", { rotation: "-=8", transformOrigin: "center center", duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".sticky-note", { y: -8, rotation: -3, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    
    gsap.from(".repo-card", {
      scrollTrigger: { trigger: ".cards-container", start: "top 80%" },
      y: 60, opacity: 0, rotation: 2, duration: 0.6, stagger: 0.15, ease: "back.out(1.5)"
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-[#E8F5E9] py-20 px-4 md:px-8 font-sans">
      
      {/* Elemen dekoratif latar belakang hijau */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <svg className="bg-leaf-1 absolute -top-28 -left-10 w-96 h-96 text-green-600/10 rotate-12" viewBox="0 0 200 200" fill="currentColor"><path d="M45.7,-76.3C58.9,-69.3,69.2,-55.4,78.2,-41.2C87.3,-27,95.1,-12.4,94.2,1.7C93.3,15.8,83.7,29.3,73.5,41.4C63.2,53.5,52.2,64.2,39.4,71.5C26.5,78.9,11.8,82.9,-2.7,86.6C-17.2,90.3,-32.1,93.8,-45.5,88.7C-58.8,83.7,-70.6,70.1,-79.1,55.1C-87.5,40,-92.5,23.5,-92.4,7.4C-92.3,-8.7,-87.1,-24.4,-78.3,-37.8C-69.4,-51.2,-56.9,-62.4,-42.8,-69C-28.7,-75.6,-13,-77.7,2.1,-81.1C17.2,-84.4,32.4,-83.4,45.7,-76.3Z" /></svg>
        <svg className="bg-leaf-2 absolute bottom-0 right-0 w-[500px] h-[500px] text-green-500/10 -rotate-12" viewBox="0 0 200 200" fill="currentColor"><path d="M51.9,-71.4C66.1,-62.1,75.7,-45.8,81.4,-28.6C87,-11.3,88.7,6.9,82.9,22.8C77.1,38.7,63.9,52.2,48.7,61.9C33.6,71.6,16.8,77.5,-0.6,78.4C-18.1,79.3,-36.1,75.1,-50.2,65C-64.4,55,-74.6,39.1,-79.8,21.5C-84.9,3.8,-84.9,-15.5,-77.7,-31.6C-70.5,-47.7,-56.2,-60.7,-40.8,-69.5C-25.3,-78.3,-8.7,-83,5.8,-90.6C20.3,-98.2,37.8,-80.7,51.9,-71.4Z" /></svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Judul utama section repositori */}
        <div className="mb-16 text-center md:text-left pl-4">
          <h4 className="text-sm font-bold text-green-700 tracking-widest uppercase mb-3 flex items-center justify-center md:justify-start gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>
            Repository Laporan
          </h4>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight max-w-2xl">
            Laporan KKN yang bisa dibaca, <br/> bukan cuma diarsipkan.
          </h2>
        </div>

        {/* Ilustrasi clipboard vektor utama */}
        <div className="relative w-full bg-[#D4A373] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] mt-12 p-3 md:p-5">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-48 h-16 bg-gradient-to-b from-[#4A4E69] to-[#22223B] rounded-t-3xl rounded-b-xl flex flex-col items-center justify-center shadow-lg z-30">
             <div className="w-8 h-3 bg-black/30 rounded-full mb-2 shadow-inner"></div>
             <div className="w-32 h-2 bg-white/20 rounded-full"></div>
          </div>
          
          <div className="relative w-full h-full bg-[#FAF8F5] rounded-2xl shadow-inner overflow-hidden p-6 md:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[linear-gradient(transparent_27px,#93C5FD_28px)] bg-[size:100%_28px] opacity-40 pointer-events-none z-0"></div>
            <div className="absolute top-0 bottom-0 left-10 md:left-16 w-[2px] bg-red-300/60 pointer-events-none z-0 hidden md:block"></div>

            <div className="cards-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 mt-6">
              
              {/* Formulir pengunggahan proposal */}
              <div className="sticky-note lg:col-span-4 h-max bg-[#FFF9C4] p-6 md:p-8 rounded-md shadow-xl rotate-[-2deg] relative border border-yellow-200/50">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-white/40 backdrop-blur-sm shadow-sm rotate-[3deg] z-20"></div>
                <h3 className="text-xl font-bold text-slate-800 mb-6 text-center mt-2 border-b border-yellow-300/50 pb-2">Upload Proker</h3>
                
                <form className="flex flex-col gap-4" onSubmit={handleUpload}>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">Judul Proker</label>
                    <input type="text" placeholder="Contoh: Bank Sampah" className="w-full mt-1 p-2.5 bg-white/70 border border-yellow-300 rounded-md focus:outline-none focus:bg-white text-sm shadow-sm" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">Lokasi Desa</label>
                    <input type="text" placeholder="Desa, Kabupaten" className="w-full mt-1 p-2.5 bg-white/70 border border-yellow-300 rounded-md focus:outline-none focus:bg-white text-sm shadow-sm" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">File Laporan (PDF)</label>
                    <div className="w-full mt-1 p-5 bg-blue-50/50 border-2 border-dashed border-blue-300 rounded-md text-center cursor-pointer hover:bg-blue-50 transition-colors shadow-sm">
                      <span className="text-sm font-bold text-blue-500">+ Pilih File</span>
                    </div>
                  </div>
                  <button type="submit" disabled={isUploading} className={`w-full mt-4 text-white font-bold py-3 rounded-md shadow-md transition-all ${uploadSuccess ? 'bg-green-500' : 'bg-orange-500 hover:shadow-lg hover:-translate-y-0.5'}`}>
                    {isUploading ? 'Mengunggah...' : uploadSuccess ? 'Berhasil! 🎉' : 'Upload Sekarang'}
                  </button>
                </form>
              </div>

              {/* Daftar kartu repositori laporan */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-4 items-center w-full bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-slate-100">
                  <input type="text" placeholder="Cari judul, desa, atau kampus..." className="flex-1 bg-transparent px-4 py-2 outline-none text-slate-700 w-full" />
                  <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar px-2">
                    <button className="px-5 py-2 bg-[#0284C7] text-white text-xs font-bold rounded-full shadow-sm whitespace-nowrap">Semua</button>
                    <button className="px-5 py-2 bg-slate-100 text-slate-600 text-xs font-bold rounded-full hover:bg-slate-200 transition-colors whitespace-nowrap">Pendidikan</button>
                    <button className="px-5 py-2 bg-slate-100 text-slate-600 text-xs font-bold rounded-full hover:bg-slate-200 transition-colors whitespace-nowrap">Lingkungan</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                  {cards.map((card, index) => (
                    <div key={index} className="repo-card bg-white p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-slate-100 group">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-slate-800 text-lg leading-tight pr-4 group-hover:text-[#0284C7] transition-colors">{card.title}</h4>
                        <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">{card.year}</span>
                      </div>
                      <p className="text-sm text-slate-500 mb-1 flex items-center gap-1">📍 {card.location}</p>
                      <p className="text-xs font-bold text-slate-400 mb-5">{card.univ}</p>
                      
                      <div className="flex gap-2 mb-5">
                        {card.tags.map((tag, i) => (
                          <span key={i} className={`${tag.color} text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider`}>
                            {tag.text}
                          </span>
                        ))}
                      </div>
                      {/* Tombol pembuka detail ringkas */}
                      <p onClick={() => setSelectedCard(card)} className="cursor-pointer text-orange-500 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Baca ringkasannya &rarr;
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal popup detail laporan KKN */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity">
          
          <div className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-xl shadow-2xl p-6 md:p-10 animate-[zoomIn_0.3s_ease-out] overflow-y-auto max-h-[90vh]">
            
            {/* Motif kertas bergaris di dalam modal */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_27px,#93C5FD_28px)] bg-[size:100%_28px] opacity-40 pointer-events-none z-0"></div>
            
            {/* Tombol tutup bermodel stiker */}
            <button 
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-red-500 text-white rounded-full font-bold shadow-md hover:scale-110 hover:bg-red-600 transition-all z-20 flex items-center justify-center rotate-6"
            >
              X
            </button>

            {/* Hiasan selotip transparan */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-10 bg-orange-200/50 backdrop-blur-sm shadow-sm -rotate-2 z-20"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 mt-4">
              
              {/* Tempat foto dokumentasi polaroid */}
              <div className="w-full md:w-1/2 bg-white p-3 md:pb-12 rounded-sm shadow-lg rotate-[-2deg] flex-shrink-0 border border-slate-200">
                <div className="w-full aspect-video bg-slate-200 rounded-sm flex items-center justify-center border border-slate-300">
                  <span className="text-slate-400 font-bold text-sm">Foto Kegiatan</span>
                </div>
                <p className="text-center text-slate-500 font-mono text-xs mt-4 rotate-1">Dokumentasi Tim</p>
              </div>

              {/* Konten deskripsi laporan */}
              <div className="w-full md:w-1/2 flex flex-col">
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-2 leading-tight bg-white/50 px-2 rounded">{selectedCard.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-slate-200 text-slate-700 text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">{selectedCard.year}</span>
                  <span className="bg-slate-200 text-slate-700 text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">📍 {selectedCard.location}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedCard.tags.map((tag, i) => (
                    <span key={i} className={`${tag.color} text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider`}>
                      {tag.text}
                    </span>
                  ))}
                </div>

                <div className="bg-white/70 p-4 rounded-lg border border-slate-200 shadow-sm relative">
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-yellow-300 rounded-full shadow-sm"></div>
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-2 border-b border-slate-300 pb-1">Ringkasan Eksekutif</h4>
                  <p className="text-slate-700 leading-relaxed text-sm font-medium">
                    {selectedCard.summary}
                  </p>
                </div>
                
                <button className="mt-6 bg-slate-800 text-white font-bold py-3 px-6 rounded-full w-max shadow-md hover:-translate-y-1 hover:shadow-lg transition-all text-sm">
                  Download Laporan Penuh (.pdf)
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
      
    </section>
  );
};

export default RepositorySection;
