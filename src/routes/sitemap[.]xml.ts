import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://laaxxkart.shop/</loc>
  </url>
</urlset>`,
          {
            status: 200,
            headers: {
              "Content-Type": "application/xml; charset=utf-8",
            },
          },
        );
      },
    },
  },
});
