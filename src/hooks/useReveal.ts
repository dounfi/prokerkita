import { useEffect, useRef } from "react";
import { animate, inView, stagger } from "framer-motion";

export function useReveal<T extends HTMLElement = HTMLDivElement>(_options?: { y?: number; duration?: number }) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // Penanganan elemen tunggal dengan atribut data-reveal
    const revealElements = root.querySelectorAll<HTMLElement>("[data-reveal]");
    revealElements.forEach((el) => {
      const dir = el.dataset["reveal"];
      const y = dir === "up" || dir === "" || !dir ? 40 : 0;
      const x = dir === "left" ? -50 : dir === "right" ? 50 : 0;
      const scale = dir === "pop" ? 0.9 : 1;
      const rotate = dir === "tilt" ? -3 : 0;

      // Mengatur nilai awal transparansi dan transformasi elemen
      el.style.opacity = "0";
      el.style.transform = `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotate}deg)`;

      inView(
        el,
        () => {
          animate(
            el,
            { opacity: 1, transform: "translate(0px, 0px) scale(1) rotate(0deg)" },
            { duration: 0.7, type: "spring", bounce: 0.2 },
          );
        },
        { margin: "0px 0px -40px 0px" },
      );
    });

    // Penanganan animasi bertahap (stagger) untuk grup elemen anak
    const staggerGroups = root.querySelectorAll<HTMLElement>("[data-stagger]");
    staggerGroups.forEach((group) => {
      const children = Array.from(group.children) as HTMLElement[];
      children.forEach((child) => {
        child.style.opacity = "0";
        child.style.transform = "translate(0px, 30px)";
      });

      inView(
        group,
        () => {
          animate(
            children,
            { opacity: 1, transform: "translate(0px, 0px)" },
            { duration: 0.6, delay: stagger(0.1), type: "spring", bounce: 0.2 },
          );
        },
        { margin: "0px 0px -40px 0px" },
      );
    });
  }, []);

  return ref;
}
