import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — LaaxxKart" },
      { name: "description", content: "Terms governing the use of LaaxxKart's website and services by LAAXX Consulting Pvt Ltd." },
      { property: "og:title", content: "Terms & Conditions — LaaxxKart" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 pt-32 pb-20">
        <Link to="/" className="text-sm text-[color:var(--brand-deep)] font-semibold">← Back to home</Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4">Terms & Conditions</h1>
        <p className="text-sm text-muted-foreground mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="mt-8 space-y-6 leading-relaxed text-foreground/85">
          <p>These Terms govern your access to and use of the LaaxxKart website and services, operated by LAAXX Consulting Pvt Ltd.</p>
          <h2 className="text-2xl font-bold pt-4">1. Eligibility</h2>
          <p>Our services are intended primarily for businesses such as retailers, restaurants, hotels, distributors and wholesalers. You must have authority to bind the business you represent.</p>
          <h2 className="text-2xl font-bold pt-4">2. Orders & Pricing</h2>
          <p>Prices are quoted based on order volume and prevailing market rates. All orders are subject to availability and confirmation by LaaxxKart.</p>
          <h2 className="text-2xl font-bold pt-4">3. Payment</h2>
          <p>Payments must be made through the methods agreed during onboarding. Late payments may attract interest as per applicable law.</p>
          <h2 className="text-2xl font-bold pt-4">4. Delivery & Cold Chain</h2>
          <p>We deliver via temperature-controlled logistics. Risk passes to the buyer on delivery; defective or temperature-compromised goods must be reported within 24 hours.</p>
          <h2 className="text-2xl font-bold pt-4">5. Returns & Refunds</h2>
          <p>Perishable goods are non-returnable unless damaged on delivery. Eligible refunds are processed within 7–14 business days.</p>
          <h2 className="text-2xl font-bold pt-4">6. Intellectual Property</h2>
          <p>All content, branding and software on this site are owned by LAAXX Consulting Pvt Ltd and may not be used without permission.</p>
          <h2 className="text-2xl font-bold pt-4">7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, we are not liable for indirect, incidental or consequential damages.</p>
          <h2 className="text-2xl font-bold pt-4">8. Governing Law</h2>
          <p>These Terms are governed by the laws of India. Courts in Bangalore, Karnataka shall have exclusive jurisdiction.</p>
          <h2 className="text-2xl font-bold pt-4">9. Contact</h2>
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