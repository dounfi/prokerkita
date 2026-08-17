import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from './Decor';

gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animasi judul muncul
    gsap.from(".faq-title-line", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Animasi keranjang
    gsap.from(".faq-basket-container", {
      scrollTrigger: {
        trigger: ".faq-basket-container",
        start: "top 85%",
      },
      y: 60,
      opacity: 0,
      rotation: -3,
      duration: 1.2,
      ease: "back.out(1.2)",
    });

    // Bunga melayang terus
    gsap.to(".floating-daisy", {
      y: -20,
      rotation: "+=15",
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: 0.7,
    });

    // Pita goyang
    gsap.to(".faq-ribbon", {
      rotation: "+=15",
      scale: 1.05,
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }, { scope: sectionRef });

  const faqs = [
    {
      q: "Datanya dari mana?",
      a: "Data dikumpulkan dari ratusan laporan KKN dan pengabdian masyarakat terdahulu dari berbagai universitas yang telah terverifikasi oleh sistem kami."
    },
    {
      q: "Skor akurasinya dihitung gimana?",
      a: "AI kami membandingkan parameter program (budget, durasi, lokasi) dengan pola kegagalan/keberhasilan historis menggunakan Natural Language Processing."
    },
    {
      q: "Kalau belum ada data sama sekali gimana?",
      a: "Kamu bisa menggunakan mode 'Pionir'. Sistem akan memberikan estimasi risiko berdasarkan teori standar manajemen proyek dan sosiologi pedesaan."
    },
    {
      q: "Data dari user bisa dipercaya gak?",
      a: "Semua laporan melewati tahap verifikasi ganda (admin dan cross-check universitas) sebelum masuk ke dalam repositori utama kami."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-[#86efac] py-24 px-4 md:px-8 font-sans overflow-hidden flex flex-col items-center z-0">
      
      {/* Latar belakang nuansa padang rumput */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_transparent_0%,_#22c55e_100%)] pointer-events-none"></div>

      {/* Dekorasi bunga matahari/daisy melayang */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Bunga 1 */}
        <div className="floating-daisy absolute top-10 left-10 md:left-20 w-12 h-12 opacity-80 rotate-12">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="20" r="15" fill="white" />
            <circle cx="50" cy="80" r="15" fill="white" />
            <circle cx="20" cy="50" r="15" fill="white" />
            <circle cx="80" cy="50" r="15" fill="white" />
            <circle cx="29" cy="29" r="15" fill="white" />
            <circle cx="71" cy="71" r="15" fill="white" />
            <circle cx="29" cy="71" r="15" fill="white" />
            <circle cx="71" cy="29" r="15" fill="white" />
            <circle cx="50" cy="50" r="16" fill="#FBBF24" />
          </svg>
        </div>
        {/* Bunga 2 */}
        <div className="floating-daisy absolute top-40 right-5 md:right-32 w-16 h-16 opacity-60 -rotate-12">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="20" r="15" fill="white" />
            <circle cx="50" cy="80" r="15" fill="white" />
            <circle cx="20" cy="50" r="15" fill="white" />
            <circle cx="80" cy="50" r="15" fill="white" />
            <circle cx="29" cy="29" r="15" fill="white" />
            <circle cx="71" cy="71" r="15" fill="white" />
            <circle cx="29" cy="71" r="15" fill="white" />
            <circle cx="71" cy="29" r="15" fill="white" />
            <circle cx="50" cy="50" r="16" fill="#FBBF24" />
          </svg>
        </div>
        {/* Bunga 3 */}
        <div className="floating-daisy absolute bottom-20 left-5 md:left-40 w-10 h-10 opacity-70 rotate-45">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="20" r="15" fill="white" />
            <circle cx="50" cy="80" r="15" fill="white" />
            <circle cx="20" cy="50" r="15" fill="white" />
            <circle cx="80" cy="50" r="15" fill="white" />
            <circle cx="29" cy="29" r="15" fill="white" />
            <circle cx="71" cy="71" r="15" fill="white" />
            <circle cx="29" cy="71" r="15" fill="white" />
            <circle cx="71" cy="29" r="15" fill="white" />
            <circle cx="50" cy="50" r="16" fill="#FBBF24" />
          </svg>
        </div>
      </div>

      {/* Bagian judul section */}
      <div className="text-center mb-16 relative z-20 flex flex-col items-center justify-center pt-8">
        <SectionLabel>Pertanyaan yang Sering Muncul</SectionLabel>
        
        <h2 className="max-w-4xl font-display text-4xl md:text-5xl font-extrabold text-white leading-[1.12] text-center mt-6">
          <span className="hero-title-line faq-title-line flex flex-col sm:inline-block">
            <span aria-hidden="true" className="hero-title-outline">Hal yang biasanya</span>
            <span className="hero-title-fill">Hal yang biasanya</span>
          </span>
          <span className="hero-title-line faq-title-line flex flex-col sm:inline-block mt-2 sm:mt-0 sm:ml-3">
            <span aria-hidden="true" className="hero-title-outline">ditanya duluan.</span>
            <span className="hero-title-fill">ditanya duluan.</span>
          </span>
        </h2>
      </div>

      {/* Kontainer tikar piknik dan keranjang */}
      <div className="faq-basket-container relative w-full max-w-3xl z-20 mt-10">
        
        {/* Motif tikar piknik kota-kotak merah putih */}
        <div className="absolute -inset-10 md:-inset-16 bg-white rounded-3xl rotate-3 opacity-90 shadow-2xl z-0 overflow-hidden border-8 border-white/60"
             style={{
               backgroundImage: `linear-gradient(45deg, #fca5a5 25%, transparent 25%, transparent 75%, #fca5a5 75%, #fca5a5), linear-gradient(45deg, #fca5a5 25%, transparent 25%, transparent 75%, #fca5a5 75%, #fca5a5)`,
               backgroundSize: '60px 60px',
               backgroundPosition: '0 0, 30px 30px',
             }}
        ></div>

        {/* Gagang keranjang piknik */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 border-[16px] border-[#B07D4C] rounded-t-full z-10 shadow-inner"></div>
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 h-24 border-[16px] border-[#B07D4C] rounded-b-full z-10 shadow-inner"></div>

        {/* Dasar keranjang piknik */}
        <div className="relative w-full bg-[#D4A373] rounded-[40px] p-4 md:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.25)] z-20 border-4 border-[#C08A56] flex justify-center items-center">
          
          {/* Detail anyaman dalam keranjang */}
          <div className="absolute inset-4 border-4 border-solid border-[#B07D4C] rounded-[32px] opacity-40 pointer-events-none"></div>
          <div className="absolute inset-8 border-2 border-solid border-[#B07D4C]/20 rounded-[24px] pointer-events-none"></div>

          {/* Dekorasi pita hiasan */}
          <div className="faq-ribbon absolute -top-6 right-6 md:right-12 w-20 h-20 z-40 rotate-12 drop-shadow-lg">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 40C60 20 85 25 90 45C95 65 50 60 50 60C50 60 5 65 10 45C15 25 40 20 50 40Z" fill="#F43F5E"/>
              <path d="M45 55L30 95L50 85L70 95L55 55" fill="#E11D48"/>
              <circle cx="50" cy="50" r="10" fill="#FDA4AF"/>
            </svg>
          </div>

          {/* Lembaran kertas menu pertanyaan */}
          <div className="relative w-full bg-[#FAF8F5] rounded-xl shadow-xl rotate-[-2deg] p-6 md:p-10 my-4 z-30 border border-slate-100">
            
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#5C3A21] mb-8 text-center" style={{ fontFamily: 'cursive, sans-serif' }}>
              FAQ Menu
            </h3>

            {/* Daftar pertanyaan akordeon */}
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                  >
                    <span className="font-bold text-slate-700 text-sm md:text-base pr-4">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 flex-shrink-0 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-sm transition-transform duration-300 ${activeIndex === index ? 'rotate-45 bg-orange-400' : 'rotate-0'}`}>
                      +
                    </div>
                  </button>
                  
                  {/* Panel jawaban pertanyaan */}
                  <div 
                    className={`px-5 text-slate-600 text-sm md:text-base leading-relaxed overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
