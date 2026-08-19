import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
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
      { title: "LaaxxKart | B2B Grocery, FMCG & Frozen Food Supplier" },
      {
        name: "description",
        content:
          "LaaxxKart is a B2B supply platform for groceries, FMCG and frozen products — wholesale pricing, one-stop ordering and scheduled delivery for businesses.",
      },
      { property: "og:title", content: "LaaxxKart — Groceries, FMCG & Frozen B2B Supply" },
      {
        property: "og:description",
        content:
          "One-stop groceries, FMCG and frozen supply for retailers, restaurants, hotels and wholesalers.",
      },
      { property: "og:url", content: "https://laaxxkart.shop/" },
    ],
    links: [{ rel: "canonical", href: "https://laaxxkart.shop/" }],
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
        <Categories />
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
