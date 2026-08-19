import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () => {
        return new Response(
          `User-agent: *
Allow: /

Sitemap: https://laaxxkart.shop/sitemap.xml
`,
          {
            status: 200,
            headers: {
              "Content-Type": "text/plain; charset=utf-8",
            },
          },
        );
      },
    },
  },
});