# Proker Insights

Buat landing page + UI produk "ProkerKita" — platform validasi ide proker KKN berbasis preseden (cek apakah proker pernah dicoba di desa lain, berhasil/gagal, kasih rekomendasi alternatif + skor akurasi kalau gagal, atau info kondisi daerah kalau belum ada data sama sekali/jadi "pionir"). Ada juga fitur repository laporan KKN yang bisa diupload user. Front-end only, semua data dummy/mock (state lokal, tanpa backend nyata).

STACK: Vite + React + GSAP (ScrollTrigger untuk scroll-reveal, smooth transition antar section, hover micro-interaction).

STYLE:

Referensi warna/vibe: pionir.ugm.ac.id — colorful, block color berani, BUKAN gradient ungu-biru khas AI, BUKAN blob/glow abstrak generik

Referensi struktur cerita: kerjaasyikks.vercel.app — landing bercerita (masalah dulu → solusi → CTA), bukan list fitur statis

Referensi interaktivitas: oclean-dive-seven.vercel.app, noomolabs.vercel.app (awwwards/GSAP style)

Font: HINDARI Inter/Poppins/Roboto polos. Pilih pairing font berkarakter dari Google Fonts, tetap kontras & mudah dibaca di atas warna cerah

Signature element dekoratif harus nyambung tema desa/KKN (pin lokasi, peta, jaringan data) — bukan blob abstrak

Numbering (01/02/03) cuma di section yang memang berurutan (Cara Kerja)

COPYWRITING: jujur, spesifik, santai kayak ngomong ke teman. Hindari buzzword ("revolusioner", "wujudkan mimpimu"), hindari alay (kapital berlebihan/!!!/emoji kebanyakan). CTA sebut aksi konkret ("Cek Proker Ini", bukan "Submit").

URUTAN HALAMAN (satu page scroll, section berurutan):

Hero — headline nohok masalah + CTA

Masalah (di awal, bukan akhir!) — 2 angle: (a) proker ngulang yang udah gagal di tempat lain, (b) mahasiswa gak tau ide mereka bakal works atau enggak. Gaya scroll-narrative, bukan paragraf datar

Cara Kerja — visual 3 alur: input ide+kondisi desa → cek preseden → 3 hasil (Berhasil+bukti, Gagal+rekomendasi alternatif+skor, Belum Ada Data/Pionir+info daerah)

Form Validasi — input (ide proker, lokasi, masalah utama, budget) + tombol contoh "Lihat Skenario Berhasil/Gagal/Pionir" biar bisa dieksplor tanpa nebak input. Skor akurasi = angka + progress bar

Repository — grid laporan KKN dummy (nama, lokasi, tahun, badge "Terverifikasi"/"Kontribusi Komunitas"), search/filter UI, tombol upload dengan mock alur "kategori terdeteksi AI" yang bisa diedit user

Studi Kasus naratif (before-after 1 desa dummy: mau proker yang ternyata udah pernah gagal → pindah ke rekomendasi sistem → berhasil)

Tentang Kami

FAQ (data dari mana, cara hitung skor, kalau belum ada data gimana, data user bisa dipercaya gak)

Kontak/Kolaborasi (ajak kampus lain kontribusi laporan)

Responsif penuh, mobile-first check.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bcf02807-4707-4171-97ff-e3a2c2394ddf).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
