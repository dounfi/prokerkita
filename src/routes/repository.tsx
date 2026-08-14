import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/pk/Top";
import { Repository } from "@/components/pk/Repository";
import { Footer } from "@/components/pk/Bottom";
import { useReveal } from "@/components/pk/useReveal";

export const Route = createFileRoute("/repository")({
  head: () => ({
    meta: [
      { title: "Repository Laporan KKN — ProkerKita" },
      {
        name: "description",
        content:
          "Arsip dan repository laporan KKN terlengkap dari berbagai desa dan mahasiswa Indonesia. Cari preseden proker sebelum buat proposal.",
      },
      { property: "og:title", content: "Repository Laporan KKN — ProkerKita" },
      {
        property: "og:description",
        content:
          "Arsip dan repository laporan KKN terlengkap dari berbagai desa dan mahasiswa Indonesia.",
      },
    ],
  }),
  component: RepositoryPage,
});

function RepositoryPage() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-screen bg-white text-ink">
      <Nav />
      <main className="pt-24 sm:pt-28">
        <Repository />
      </main>
      <Footer />
    </div>
  );
}
