import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks";
import { Nav, RepositorySection, Footer } from "@/components/pk";

export const Route = createFileRoute("/repository")({
  component: RepositoryPage,
  head: () => ({
    meta: [
      { title: "ProkerKita" },
      {
        name: "description",
        content: "Cari, baca, dan pelajari berbagai laporan program kerja KKN dari seluruh Indonesia.",
      },
      { property: "og:title", content: "ProkerKita" },
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
    <div ref={ref} className="min-h-screen bg-[#E8F5E9] text-ink overflow-x-hidden">
      <Nav />
      <main className="pt-24 sm:pt-28">
        <RepositorySection />
      </main>
      <Footer waveBg="transparent" />
    </div>
  );
}
