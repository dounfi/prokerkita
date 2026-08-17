import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks";
import {
  Nav,
  Hero,
  Masalah,
  CaraKerja,
  Validator,
  FeatureShowcase,
  FAQSection,
  Kontak,
  Footer,
} from "@/components/pk";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProkerKita" },
      {
        name: "description",
        content:
          "Cek apakah ide proker KKN kamu pernah dicoba di desa lain, berhasil atau gagal, plus rekomendasi alternatif dan repository laporan KKN.",
      },
      { property: "og:title", content: "ProkerKita" },
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
    <div ref={ref} className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Masalah />
        <CaraKerja />
        <Validator />
        <FeatureShowcase />
        <FAQSection />
        <Kontak />
      </main>
      <Footer />
    </div>
  );
}
