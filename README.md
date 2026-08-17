# ProkerKita — Platform Validasi & Preseden Proker KKN Desa

Halo! Selamat datang di repositori **ProkerKita**.

Platform ini dibuat untuk membantu teman-teman mahasiswa yang mau atau sedang menjalani **KKN (Kuliah Kerja Nyata)** dan pengabdian masyarakat. Masalah utama yang sering terjadi tiap tahun adalah mahasiswa membuat program kerja (proker) yang ternyata pernah dicoba di desa lain dan gagal, atau bingung apakah idenya realistis untuk dijalankan.

Dengan **ProkerKita**, mahasiswa bisa mengecek preseden laporan KKN terdahulu, melihat estimasi risiko, mendapatkan rekomendasi alternatif proker yang lebih cocok, serta mengakses repositori laporan KKN dari berbagai daerah.

---

## Fitur-Fitur Utama

### 1. Validasi & Uji Coba Proker KKN
- **Formulir Pengajuan Proker**: Mahasiswa menginputkan ide program kerja, lokasi desa sasaran, estimasi anggaran (budget), serta masalah utama yang ingin diselesaikan.
- **Pencocokan Preseden & Analisis Risiko**: Sistem otomatis mencocokkan ide proker dengan riwayat laporan KKN yang memiliki karakteristik desa serupa (geografi, pencaharian, dan demografi).
- **Hasil & Rekomendasi Real-time**: Mengeluarkan skor akurasi keberhasilan, grafik kesesuaian parameter, daftar preseden desa mirip, serta rekomendasi alternatif proker yang lebih realistis jika ide dianggap berisiko tinggi (*Gagal*) atau jika desa belum memiliki data historis (*Pionir*).
- **Uji Coba Skenario Cepat**: Menyediakan tombol preset skenario (*Berhasil*, *Gagal*, *Pionir*) untuk mengeksplorasi contoh hasil kalkulasi secara instan tanpa perlu mengetik manual.

### 2. Screening & Penilaian Proposal
- **Pemindaian Proposal**: Memindai draf proposal proker untuk mendeteksi potensi ketidaklogisan rencana aksi atau estimasi anggaran yang kurang proporsional sebelum diajukan ke DPL atau pihak desa.
- **Deteksi Masalah Otomatis**: Memberikan tanda penanda (*bounding highlight*) pada poin-poin proposal yang dinilai berisiko tinggi gagal di lapangan.

### 3. Repositori & Arsip Laporan KKN
- **Pencarian & Filter Laporan**: Memudahkan pengguna mencari referensi laporan KKN dari berbagai universitas berdasarkan judul proker, nama desa, tahun pelaksanaan, maupun kategori bidang (Pendidikan, Lingkungan, Ekonomi, Kesehatan).
- **Ringkasan Eksekutif & Dokumentasi**: Menyediakan pop-up ringkasan cepat berisi latar belakang, metode pelaksanaan, dokumentasi kegiatan, serta opsi pengunduhan dokumen berkas penuh (.pdf).
- **Unggah Laporan Baru**: Formulir pengunggahan laporan KKN baru oleh pengguna untuk saling berbagi pengalaman dan memperkaya basis data preseden.

### 4. Pusat Informasi & Tanya Jawab (FAQ)
- **Informasi Transparansi Sistem**: Menjelaskan sumber data preseden, metodologi perhitungan skor akurasi berbasis NLP, perlakuan untuk desa mode Pionir, serta proses verifikasi laporan pengguna.
- **Formulir Kontak & Kolaborasi**: Sarana komunikasi bagi kampus, kelompok KKN, atau instansi yang ingin berkolaborasi atau menyumbangkan data laporan.

---

## Teknologi yang Digunakan

Proyek ini dibangun menggunakan stack modern yang ringan dan cepat:

- **React 19 & TypeScript**: Library UI utama dengan type-safety ketat.
- **TanStack Router / Start**: Routing berbasis struktur file di folder `src/routes/` dengan dukungan Server-Side Rendering (SSR).
- **Vite 6**: Dev server dan bundler yang cepat untuk pengembangan lokal.
- **TailwindCSS v4**: Engine CSS utility-first terbaru untuk styling dan variabel warna.
- **GSAP (GreenSock) & ScrollTrigger**: Library animasi profesional untuk efek parallax 3D dan interaksi scroll.
- **Framer Motion**: Animasi micro-interactions dan efek *reveal on scroll*.
- **Lucide React**: Ikon-ikon vektor bergaya outline.

---

## Struktur File & Folder Proyek

```text
prokerkita/
├── public/                     # Aset statis (favicon, background pattern, ilustrasi pulau 3D)
├── src/
│   ├── components/
│   │   └── pk/                 # Komponen-komponen UI utama ProkerKita per-section
│   │       ├── Nav.tsx         # Navbar melayang & menu mobile
│   │       ├── Hero.tsx        # Hero Parallax 3D 7-layer (GSAP)
│   │       ├── Masalah.tsx     # Section Masalah & 3D Roadmap Islands
│   │       ├── CaraKerja.tsx   # Section 4 Langkah Cara Kerja
│   │       ├── Validator.tsx   # Papan Gabus Validasi & Lembar Cetak Biru Hasil
│   │       ├── FeatureShowcase.tsx # Jendela Lengkung 3D & Laser Pemindai
│   │       ├── FAQ.tsx         # Menu FAQ Keranjang Piknik
│   │       ├── Repository.tsx  # Clipboard Upload & Scrapbook Laporan
│   │       ├── Tentang.tsx     # Section Tentang Kami & Grid Statistik 2x2
│   │       ├── Kontak.tsx      # Form Kontak & Animasi Layang-Layang
│   │       ├── Footer.tsx      # Footer Bukit Sawah Terasering & Brand Col
│   │       ├── Decor.tsx       # Ornamen vektor penanda section & logo
│   │       └── index.ts        # Barrel export resmi seluruh komponen UI
│   ├── hooks/                  # Custom React Hooks
│   │   ├── useReveal.ts        # Hook animasi scroll reveal
│   │   └── index.ts            # Barrel export custom hooks
│   ├── lib/
│   │   ├── error-capture.ts   # Utilitas penangkap log error
│   │   └── error-page.ts      # Template fallback halaman error
│   ├── routes/                 # Halaman utama aplikasi (File-based Routing)
│   │   ├── __root.tsx          # Layout utama pembungkus HTML
│   │   ├── index.tsx           # Halaman Beranda (/)
│   │   ├── about.tsx           # Halaman Tentang Kami (/about)
│   │   ├── repository.tsx      # Halaman Repositori Laporan (/repository)
│   │   └── validasi.tsx        # Halaman Validasi Proker (/validasi)
│   ├── router.tsx              # Instansiasi TanStack Router
│   ├── server.ts               # Server entry point SSR
│   ├── start.ts                # Client startup script
│   └── styles.css              # Stylesheet global & Tailwind v4 config
├── package.json
├── vite.config.ts
└── README.md
```

---

## 💻 Cara Menjalankan Proyek Secara Lokal

Buat teman-teman yang ingin menjalankan atau mencoba proyek ini di komputer lokal:

1. **Pastikan Node.js sudah terinstal** (rekomendasi Node.js v18 atau lebih baru).
2. **Kloning repositori ini**:
   ```bash
   git clone https://github.com/dounfi/prokerkita.git
   cd prokerkita
   ```
3. **Instal seluruh dependensi**:
   ```bash
   npm install
   ```
4. **Jalankan dev server**:
   ```bash
   npm run dev
   ```
5. Buka browser dan kunjungi `http://localhost:3000`.

---
