/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel Hobby plan: never route images through the Image Optimization service.
  // Resized WebP derivatives are prepared locally by scripts/make-derivatives.py.
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/tailor-made-retreats", destination: "/tailor-made-retreats-1", permanent: true },
      // Legacy SEO landing pages consolidated into their canonical pages (audit 09 §2).
      { source: "/pilates-bali", destination: "/pilates", permanent: true },
      { source: "/pilate-studio-bali", destination: "/pilates", permanent: true },
      { source: "/pilates-seminyak", destination: "/pilates", permanent: true },
      { source: "/pilates-retreat", destination: "/tailor-made-retreats-1", permanent: true },
    ];
  },
};

export default nextConfig;
