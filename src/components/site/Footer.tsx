import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-foreground bg-[color:var(--card)]">
      <div className="absolute inset-0 scan-lines opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg brand-gradient flex items-center justify-center font-bold text-primary-foreground">LK</div>
              <span className="font-bold text-xl">LaaxxKart</span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Connecting businesses with quality frozen foods and groceries through a future-ready, temperature-controlled supply chain.
            </p>
            <div className="mt-6 text-sm text-muted-foreground leading-relaxed">
              <div className="font-semibold text-foreground">LAAXX Consulting Pvt Ltd</div>
              34, Kpv Complex 1st Floor, Kilari Road, Chickpet,<br />
              Bangalore South, Karnataka, India, 560053<br />
              <span className="opacity-80">CIN:</span> U70200KA2025PTC208853 · <span className="opacity-80">Mob:</span> +91 8904880530
            </div>
          </div>
          <div>
            <div className="font-semibold mb-4">Company</div>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/" className="hover:text-foreground">Home</a></li>
              <li><a href="/#products" className="hover:text-foreground">Products</a></li>
              <li><a href="/#solutions" className="hover:text-foreground">Solutions</a></li>
              <li><a href="/#contact" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-4">Legal</div>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms & Conditions</Link></li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="LinkedIn" className="h-10 w-10 rounded-lg mesh-panel flex items-center justify-center hover:text-[color:var(--brand-cyan)]"><Linkedin size={18} /></a>
              <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-lg mesh-panel flex items-center justify-center hover:text-[color:var(--brand-cyan)]"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-lg mesh-panel flex items-center justify-center hover:text-[color:var(--brand-cyan)]"><Facebook size={18} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-foreground/10 text-sm text-muted-foreground flex flex-wrap justify-between gap-3">
          <div>© {new Date().getFullYear()} LaaxxKart by LAAXX Consulting Pvt Ltd. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}