"use client";

import { useEffect } from "react";

// Publishes the footer's height as --footer-h so the closing CTA band can size itself
// to make "last band + footer" fill exactly one screen (see .cta-band in components.css).
export default function FooterHeight() {
  useEffect(() => {
    const footer = document.querySelector(".site-footer");
    if (!footer) return;
    const set = () => document.documentElement.style.setProperty("--footer-h", `${footer.offsetHeight}px`);
    set();
    const ro = new ResizeObserver(set);
    ro.observe(footer);
    return () => ro.disconnect();
  }, []);
  return null;
}
