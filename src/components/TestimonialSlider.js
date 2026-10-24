"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import Img from "@/components/Img";

// Manual slideshow (no autoplay) — homepage testimonials with their original slide photographs.
export default function TestimonialSlider({ items }) {
  const [index, setIndex] = useState(0);
  const quoteRef = useRef(null);

  const go = (next) => {
    const target = (next + items.length) % items.length;
    if (target === index) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !quoteRef.current) {
      setIndex(target);
      return;
    }
    gsap.to(quoteRef.current, {
      autoAlpha: 0,
      y: -8,
      duration: 0.22,
      ease: "power2.in",
      onComplete: () => {
        setIndex(target);
        gsap.fromTo(quoteRef.current, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" });
      },
    });
  };

  const current = items[index];

  return (
    <div
      className="slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(index + 1);
        if (e.key === "ArrowLeft") go(index - 1);
      }}
    >
      <div className="slider__media" aria-hidden="true">
        {items.map((t, i) => (
          <div key={t.id} className={`slider__image${i === index ? " is-active" : ""}`}>
            <Img name={t.image} alt="" sizes="(min-width: 900px) 40vw, 92vw" />
          </div>
        ))}
      </div>
      <div className="slider__content">
        <div ref={quoteRef} aria-live="polite" aria-atomic="true">
          <figure className="slider__quote" aria-roledescription="slide" aria-label={`${index + 1} of ${items.length}`}>
            <blockquote>
              <p>{current.text}</p>
            </blockquote>
            <figcaption>
              {current.name}
              {current.source && <span>{current.source}</span>}
            </figcaption>
          </figure>
        </div>
        <div className="slider__controls">
          <button type="button" className="slider__arrow" onClick={() => go(index - 1)} aria-label="Previous testimonial">
            <svg width="22" height="12" viewBox="0 0 22 12" aria-hidden="true">
              <path d="M21 6H2M6.5 1L1.5 6l5 5" fill="none" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </button>
          <p className="slider__count" aria-hidden="true">
            {index + 1} / {items.length}
          </p>
          <button type="button" className="slider__arrow" onClick={() => go(index + 1)} aria-label="Next testimonial">
            <svg width="22" height="12" viewBox="0 0 22 12" aria-hidden="true">
              <path d="M1 6h19M15.5 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
