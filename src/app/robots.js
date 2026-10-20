export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/account/", "/booking-calendar/"] }],
    sitemap: "https://www.theartofbody.com/sitemap.xml",
  };
}
