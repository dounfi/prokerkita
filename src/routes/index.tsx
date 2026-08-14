import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/components/pk/useReveal";
import { CaraKerja, Hero, Masalah, Nav } from "@/components/pk/Top";
import { Validator } from "@/components/pk/Validator";
import { Faq, Footer, Kontak, StudiKasus, Tentang } from "@/components/pk/Bottom";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProkerKita — Validasi Ide Proker KKN Berbasis Preseden" },
      {
        name: "description",
        content:
          "Cek apakah ide proker KKN kamu pernah dicoba di desa lain, berhasil atau gagal, plus rekomendasi alternatif dan repository laporan KKN.",
      },
      { property: "og:title", content: "ProkerKita — Validasi Ide Proker KKN" },
      {
        property: "og:description",
        content:
          "Sebelum nulis proposal, cek preseden proker KKN dari desa lain: bukti keberhasilan, alasan kegagalan, dan alternatif yang lebih masuk.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-screen bg-cream text-ink">
      <Nav />
      <main>
        <Hero />
        <Masalah />
        <CaraKerja />
        <Validator />
        <StudiKasus />
        <Tentang />
        <Faq />
        <Kontak />
      </main>
      <Footer />
    </div>
  );
}
