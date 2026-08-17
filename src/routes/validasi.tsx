import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/pk/Top";
import { Validator } from "@/components/pk/Validator";
import { Footer } from "@/components/pk/Bottom";
import { useReveal } from "@/components/pk/useReveal";

export const Route = createFileRoute("/validasi")({
  component: ValidasiPage,
});

function ValidasiPage() {
  const ref = useReveal({ y: 30, duration: 0.8 });

  return (
    <div ref={ref} className="min-h-screen bg-cream text-ink">
      <Nav />
      <main className="pt-24 sm:pt-28">
        <Validator />
      </main>
      <Footer />
    </div>
  );
}
