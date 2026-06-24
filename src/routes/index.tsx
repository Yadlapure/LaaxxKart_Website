import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { SupplyChain } from "@/components/site/SupplyChain";
import { Features } from "@/components/site/Features";
import { Products } from "@/components/site/Products";
import { ColdChain } from "@/components/site/ColdChain";
import { Solutions } from "@/components/site/Solutions";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Testimonials } from "@/components/site/Testimonials";
import { Stats } from "@/components/site/Stats";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LaaxxKart — Frozen Foods & Groceries B2B Supply Chain" },
      { name: "description", content: "LaaxxKart connects retailers, restaurants and wholesalers with quality frozen foods and groceries through a temperature-controlled bulk supply chain." },
      { property: "og:title", content: "LaaxxKart — Frozen Foods & Groceries B2B Supply Chain" },
      { property: "og:description", content: "Bulk sourcing, cold-chain distribution and delivery for businesses across India." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <SupplyChain />
        <Features />
        <Products />
        <ColdChain />
        <Solutions />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
