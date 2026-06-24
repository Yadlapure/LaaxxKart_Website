import { motion } from "framer-motion";
import { UserPlus, Search, ShoppingCart, MapPin, PackageCheck } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Register Business", desc: "Quick onboarding with KYC verification." },
  { icon: Search, title: "Browse Inventory", desc: "Explore live catalog and pricing." },
  { icon: ShoppingCart, title: "Place Order", desc: "Order in bulk with flexible payments." },
  { icon: MapPin, title: "Track Delivery", desc: "Real-time tracking and ETA updates." },
  { icon: PackageCheck, title: "Receive Products", desc: "Cold-chain verified at your doorstep." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-20 sm:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 scan-lines opacity-30" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-cyan)]">How it works</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">Five steps to <span className="text-brand-gradient">fresh supply</span></h2>
        </div>
        <div className="relative grid md:grid-cols-5 gap-6">
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[color:var(--brand-cyan)]/55 to-transparent" />
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center mesh-panel rounded-xl p-5 md:bg-transparent md:border-transparent md:shadow-none"
              >
                <div className="mx-auto h-16 w-16 rounded-lg brand-gradient flex items-center justify-center text-primary-foreground shadow-[var(--shadow-soft)] mb-4 relative">
                  <Icon size={24} />
                  <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-[color:var(--brand-accent)] text-accent-foreground text-xs font-bold flex items-center justify-center">{i + 1}</span>
                </div>
                <h3 className="font-bold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}