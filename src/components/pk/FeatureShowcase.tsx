import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
      }
    });

    // 1. Buka penutup 3D
    tl.to(".shutter-left", { rotateY: -110, ease: "power1.inOut" }, 0)
      .to(".shutter-right", { rotateY: 110, ease: "power1.inOut" }, 0);

    // 2. Laser turun
    tl.to(".scanner-laser", { opacity: 1, duration: 0.1 }, 0.2)
      .to(".scanner-laser", { top: "85%", ease: "none", duration: 1 }, 0.2);

    // 3. Kotak 1 muncul
    tl.to(".bounding-box-1", { opacity: 1, scale: 1, duration: 0.2, ease: "back.out(2)" }, 0.4);

    // 4. Kotak 2 muncul
    tl.to(".bounding-box-2", { opacity: 1, scale: 1, duration: 0.2, ease: "back.out(2)" }, 0.7);

    // 5. Laser ngilang
    tl.to(".scanner-laser", { opacity: 0, duration: 0.1 }, 1.1);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="feature-section" className="relative w-full min-h-screen bg-[#FFFBEB] pt-32 pb-20 -mt-8 overflow-hidden">
      
      {/* Transisi lengkung bagian atas */}
      <div className="absolute top-0 left-0 w-full h-16 z-10 bg-[#27AE60] rounded-b-[100%] shadow-md"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110%] h-24 bg-[#2ECC71] rounded-b-[100%] z-0"></div>

      <div className="relative z-20 text-center px-4 mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">
          Proposal Juga Bisa <span className="text-[#E67E22]">Di-screening.</span>
        </h2>
      </div>

      {/* Jendela lengkung 3D utama */}
      <div className="relative mx-auto w-full max-w-2xl aspect-[4/4] md:aspect-[4/3] z-20 px-4 mt-8">
        
        {/* Bingkai luar kayu */}
        <div className="relative w-full h-full bg-[#8B5A2B] rounded-t-[50%] rounded-b-sm p-4 md:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex flex-col justify-end">
          
          <div className="absolute -bottom-4 -left-[2%] w-[104%] h-10 bg-[#5C3A21] rounded-sm shadow-xl z-40 border-t-2 border-[#8B5A2B]/30"></div>

          {/* Panel dokumen di dalam jendela */}
          <div className="relative w-full h-full bg-[#F8FAFC] rounded-t-[50%] rounded-b-sm overflow-hidden p-4 md:p-8 z-10 flex flex-col justify-center items-center">
            
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:20px_20px] opacity-50"></div>

            {/* Tampilan skeleton antarmuka proposal */}
            <div className="relative z-10 w-full max-w-sm mx-auto bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-4">
              
              {/* Area konten simulasi 1 */}
              <div className="relative bg-slate-50 rounded-xl p-4 border border-slate-100">
                 <div className="h-3 bg-slate-200 rounded-full w-1/3 mb-4"></div>
                 <div className="space-y-2">
                    <div className="h-3 bg-slate-100 rounded-full w-full"></div>
                    <div className="h-3 bg-slate-100 rounded-full w-5/6"></div>
                 </div>
                 
                 {/* Kotak pendeteksi masalah 1 */}
                 <div className="absolute top-2 left-2 right-12 bottom-2 border-[2px] border-red-500 bg-red-500/10 rounded-lg opacity-0 scale-95 bounding-box-1 z-20 pointer-events-none">
                     <div className="absolute -top-3 -left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm flex items-center gap-1 whitespace-nowrap">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        TIDAK LOGIS
                     </div>
                 </div>
              </div>

              {/* Area konten simulasi 2 */}
              <div className="relative bg-slate-50 rounded-xl p-4 border border-slate-100">
                 <div className="h-12 bg-slate-200 rounded-lg w-full mb-3"></div>
                 <div className="h-3 bg-slate-100 rounded-full w-2/3"></div>
                 
                 {/* Kotak pendeteksi masalah 2 */}
                 <div className="absolute top-3 left-3 right-3 bottom-8 border-[2px] border-red-500 bg-red-500/10 rounded-lg opacity-0 scale-95 bounding-box-2 z-20 pointer-events-none">
                     <div className="absolute -bottom-3 -right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm flex items-center gap-1 whitespace-nowrap">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        BIAYA SILUMAN
                     </div>
                 </div>
              </div>

            </div>

            {/* Sinar laser pemindai */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-cyan-400 shadow-[0_0_20px_5px_rgba(96,165,250,0.4)] z-30 opacity-0 scanner-laser pointer-events-none"></div>
          </div>

          {/* Pintu jendela 3D yang dapat terbuka */}
          <div className="absolute inset-4 md:inset-6 z-30 flex pointer-events-none" style={{ perspective: '1200px' }}>
            
            {/* Pintu jendela sebelah kiri */}
            <div className="w-1/2 h-full origin-left shutter-left relative pointer-events-auto z-10">
               {/* Latar pintu kayu sebelah kiri */}
               <div className="absolute inset-0 bg-[#A06A38] border-r-2 border-[#4A2E10] [border-top-left-radius:100%_50%] shadow-[inset_-5px_0_15px_rgba(0,0,0,0.3)] overflow-hidden">
                  {/* Engsel pintu */}
                  <div className="absolute top-1/4 left-0 w-[85%] h-5 md:h-6 bg-[#1E293B] rounded-r-full shadow-md flex justify-end items-center pr-2"><div className="w-3 h-3 bg-slate-500 rounded-full"></div></div>
                  <div className="absolute bottom-1/4 left-0 w-[85%] h-5 md:h-6 bg-[#1E293B] rounded-r-full shadow-md flex justify-end items-center pr-2"><div className="w-3 h-3 bg-slate-500 rounded-full"></div></div>
               </div>
               
               {/* Ornamen sulur tanaman merambat */}
               <div className="absolute right-0 top-[10%] translate-x-[40%] w-12 h-64 z-30 pointer-events-none">
                 <svg viewBox="0 0 40 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
                   {/* Batang utama */}
                   <path d="M20 0 C23 30, 8 60, 20 90 C32 120, 10 150, 20 180" stroke="#15803D" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                   {/* Dedaunan hiasan */}
                   <path d="M21 15 Q36 5 38 21 Q24 27 21 15" fill="#22C55E"/>
                   <path d="M18 35 Q3 25 1 41 Q15 48 18 35" fill="#22C55E"/>
                   <path d="M22 60 Q37 50 39 66 Q25 73 22 60" fill="#22C55E"/>
                   <path d="M16 85 Q1 75 0 91 Q14 98 16 85" fill="#22C55E"/>
                   <path d="M24 110 Q39 100 41 116 Q27 123 24 110" fill="#22C55E"/>
                   <path d="M18 135 Q3 125 1 141 Q15 148 18 135" fill="#22C55E"/>
                   <path d="M22 160 Q37 150 39 166 Q25 173 22 160" fill="#22C55E"/>
                 </svg>
               </div>
            </div>

            {/* Pintu jendela sebelah kanan */}
            <div className="w-1/2 h-full origin-right shutter-right relative pointer-events-auto">
               {/* Latar pintu kayu sebelah kanan */}
               <div className="absolute inset-0 bg-[#A06A38] border-l-2 border-[#4A2E10] [border-top-right-radius:100%_50%] shadow-[inset_5px_0_15px_rgba(0,0,0,0.3)] overflow-hidden">
                  <div className="absolute top-1/4 right-0 w-[85%] h-5 md:h-6 bg-[#1E293B] rounded-l-full shadow-md flex justify-start items-center pl-2"><div className="w-3 h-3 bg-slate-500 rounded-full"></div></div>
                  <div className="absolute bottom-1/4 right-0 w-[85%] h-5 md:h-6 bg-[#1E293B] rounded-l-full shadow-md flex justify-start items-center pl-2"><div className="w-3 h-3 bg-slate-500 rounded-full"></div></div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
