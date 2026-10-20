"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
  Restrained, page-level motion:
  - [data-hero-item]: one staggered entrance per page (hidden pre-paint only when
    <html> has .motion-ok, which an inline script sets unless reduced motion is on).
  - [data-reveal="image"]: images unveil once as they enter the viewport.
  - [data-parallax]: a slight drift on one hero image.
  Everything is reverted (and ScrollTriggers killed) on route change/unmount.
*/
export default function Motion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !root.classList.contains("motion-ok")) {
      root.classList.remove("motion-ok");
      return;
    }

    const ctx = gsap.context(() => {
      const heroItems = gsap.utils.toArray("main [data-hero-item]");
      if (heroItems.length) {
        gsap.fromTo(
          heroItems,
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.09, delay: 0.05, clearProps: "transform" }
        );
      }

      gsap.utils.toArray("main [data-reveal='image']").forEach((el) => {
        const img = el.querySelector("img");
        gsap.fromTo(
          el,
          { clipPath: "inset(12% 0% 12% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.08 },
            { scale: 1, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } }
          );
        }
      });

      gsap.utils.toArray("main [data-parallax]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -4 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top top", end: "bottom top", scrub: true },
          }
        );
      });
    });

    // Fonts and lazy images can shift layout after mount.
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
