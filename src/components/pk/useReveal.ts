import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }
    const root = ref.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      items.forEach((el) => {
        const dir = el.dataset["reveal"];
        gsap.from(el, {
          opacity: 0,
          y: dir === "up" || dir === "" || !dir ? 36 : 0,
          x: dir === "left" ? -40 : dir === "right" ? 40 : 0,
          scale: dir === "pop" ? 0.9 : 1,
          rotate: dir === "tilt" ? -3 : 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        gsap.from(group.children, {
          opacity: 0,
          y: 28,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.09,
          scrollTrigger: { trigger: group, start: "top 85%" },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset["parallax"] || 60);
        gsap.to(el, {
          y: -amount,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return ref;
}
