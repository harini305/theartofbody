import { imageManifest } from "@/content/image-manifest";

// Plain <img> with a srcset of locally prepared WebP derivatives.
// No Next.js image optimisation endpoint is involved (images.unoptimized is also set).
export default function Img({ name, alt = "", sizes = "100vw", priority = false, className, style, position }) {
  const entry = imageManifest[name];
  if (!entry) throw new Error(`Unknown image "${name}"`);
  const srcSet = entry.widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(", ");
  const largest = entry.widths[entry.widths.length - 1];
  return (
    <img
      src={`/images/${name}-${largest}.webp`}
      srcSet={entry.widths.length > 1 ? srcSet : undefined}
      sizes={entry.widths.length > 1 ? sizes : undefined}
      width={entry.width}
      height={entry.height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={className}
      style={position ? { objectPosition: position, ...style } : style}
    />
  );
}
