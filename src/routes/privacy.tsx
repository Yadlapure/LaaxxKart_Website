import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — LaaxxKart" },
      { name: "description", content: "How LaaxxKart (LAAXX Consulting Pvt Ltd) collects, uses and protects your information." },
      { property: "og:title", content: "Privacy Policy — LaaxxKart" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 pt-32 pb-20">
        <Link to="/" className="text-sm text-[color:var(--brand-deep)] font-semibold">← Back to home</Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="mt-8 space-y-6 leading-relaxed text-foreground/85">
          <p>LaaxxKart, operated by LAAXX Consulting Pvt Ltd ("we", "us", "our"), respects your privacy. This policy explains what data we collect and how we use it when you visit our website or use our services.</p>
          <h2 className="text-2xl font-bold pt-4">1. Information We Collect</h2>
          <p>Business details (company name, contact person, phone, email, city), usage data, and any information you submit through forms.</p>
          <h2 className="text-2xl font-bold pt-4">2. How We Use Information</h2>
          <p>To process orders and inquiries, provide quotes, deliver products, communicate updates, and improve our services. We do not sell your data.</p>
          <h2 className="text-2xl font-bold pt-4">3. Data Sharing</h2>
          <p>We share information only with logistics partners and authorized service providers required to fulfill your orders, and where legally required.</p>
          <h2 className="text-2xl font-bold pt-4">4. Data Security</h2>
          <p>We employ industry-standard safeguards. No method of transmission over the internet is 100% secure, but we work to protect your information.</p>
          <h2 className="text-2xl font-bold pt-4">5. Cookies</h2>
          <p>We use cookies to maintain sessions, remember preferences and analyze traffic. You may disable cookies in your browser.</p>
          <h2 className="text-2xl font-bold pt-4">6. Your Rights</h2>
          <p>You may request access, correction or deletion of your personal data by contacting us at the address below.</p>
          <h2 className="text-2xl font-bold pt-4">7. Contact</h2>
          <p>
            LAAXX Consulting Pvt Ltd<br />
            34, Kpv Complex 1st Floor, Kilari Road, Chickpet,<br />
            Bangalore South, Karnataka, India, 560053<br />
            CIN: U70200KA2025PTC208853 · Mobile: +91 8904880530
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}