import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/pk/Top";
import RepositorySection from "@/components/pk/Repository";
import { Footer } from "@/components/pk/Bottom";
import { useReveal } from "@/components/pk/useReveal";

export const Route = createFileRoute("/repository")({
  component: RepositoryPage,
  head: () => ({
    meta: [
      { title: "Repository Laporan KKN — ProkerKita" },
      {
        name: "description",
        content: "Cari, baca, dan pelajari berbagai laporan program kerja KKN dari seluruh Indonesia.",
      },
      { property: "og:title", content: "Repository Laporan KKN — ProkerKita" },
      {
        property: "og:description",
        content: "Cari, baca, dan pelajari berbagai laporan program kerja KKN dari seluruh Indonesia.",
      },
    ],
  }),
});

function RepositoryPage() {
  const ref = useReveal({ y: 30, duration: 0.8 });

  return (
    <div ref={ref} className="min-h-screen bg-[#E8F5E9] text-ink">
      <Nav />
      <main className="pt-24 sm:pt-28">
        <RepositorySection />
      </main>
      <Footer />
    </div>
  );
}
