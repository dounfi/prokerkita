import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks";
import { Nav, Tentang, Footer } from "@/components/pk";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const ref = useReveal({ y: 30, duration: 0.8 });

  return (
    <div ref={ref} className="min-h-screen bg-[#FAF8F5] text-ink overflow-x-hidden">
      <Nav />
      <main className="pt-24 sm:pt-28">
        <Tentang />
      </main>
      <Footer waveBg="transparent" />
    </div>
  );
}
