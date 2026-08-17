import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks";
import { Nav, Validator, Footer } from "@/components/pk";

export const Route = createFileRoute("/validasi")({
  component: ValidasiPage,
});

function ValidasiPage() {
  const ref = useReveal({ y: 30, duration: 0.8 });

  return (
    <div ref={ref} className="min-h-screen bg-[#7dd3fc] text-ink">
      <Nav />
      <main className="pt-24 sm:pt-28">
        <Validator />
      </main>
      <Footer waveBg="#34d399" />
    </div>
  );
}
