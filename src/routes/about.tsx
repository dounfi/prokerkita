import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/pk/Top";
import { Footer, Tentang } from "@/components/pk/Bottom";
import { useReveal } from "@/components/pk/useReveal";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const ref = useReveal({ y: 30, duration: 0.8 });

  return (
    <div ref={ref} className="min-h-screen bg-white text-ink">
      <Nav />
      <main className="pt-24 sm:pt-28">
        <Tentang />
      </main>
      <Footer />
    </div>
  );
}
