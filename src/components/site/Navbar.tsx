import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Products", href: "/#products" },
  { label: "Supply Chain", href: "/#supply-chain" },
  { label: "How it Works", href: "/#how" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`mx-auto max-w-7xl px-4 ${scrolled ? "" : ""}`}>
        <div className={`flex items-center justify-between rounded-xl px-4 sm:px-5 py-3 transition-all ${scrolled ? "glass" : "bg-transparent"}`}>
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-lg brand-gradient flex items-center justify-center shadow-[var(--shadow-soft)] group-hover:scale-110 transition">
              <span className="text-primary-foreground font-bold text-lg">LK</span>
            </div>
            <span className="font-bold text-lg">LaaxxKart</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-semibold text-foreground/78 hover:text-foreground rounded-lg hover:bg-foreground/8 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="/#contact" className="text-sm font-semibold px-4 py-2 hover:text-[color:var(--brand-cyan)]">Sign in</a>
            <a
              href="/#contact"
              className="text-sm font-bold px-5 py-2.5 rounded-xl brand-gradient text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition"
            >
              Start Ordering
            </a>
          </div>
          <button className="md:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 rounded-xl p-4 flex flex-col gap-2 bg-card border border-border">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-foreground/8">
                {l.label}
              </a>
            ))}
            <a href="/#contact" className="mt-2 text-center px-5 py-3 rounded-xl brand-gradient text-primary-foreground font-bold">
              Start Ordering
            </a>
          </div>
        )}
      </div>
    </header>
  );
}