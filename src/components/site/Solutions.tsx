import { motion } from "framer-motion";
import { Building2, Smartphone, ArrowRight, Check } from "lucide-react";

const data = [
  {
    tag: "Available Now",
    title: "B2B Solution",
    icon: Building2,
    features: ["Bulk Orders & Custom Quotes", "Distributor Management", "Retail Supply Network", "Restaurant Procurement"],
    cta: "Become a Partner",
  },
  {
    tag: "Coming Soon",
    title: "B2C Solution",
    icon: Smartphone,
    features: ["Direct Consumer Delivery", "Mobile App", "Subscription Orders", "Loyalty Rewards"],
    cta: "Join Waitlist",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative py-20 sm:py-28 bg-[color:var(--card)] overflow-hidden">
      <div className="absolute inset-0 scan-lines opacity-30" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-cyan)]">Solutions</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">Built for <span className="text-brand-gradient">every scale</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {data.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-xl p-6 sm:p-10 mesh-panel overflow-hidden"
              >
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-16 w-16 rounded-lg brand-gradient flex items-center justify-center text-primary-foreground shadow-[var(--shadow-glow)]">
                      <Icon size={28} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-foreground/8 text-[color:var(--brand-cyan)]">{d.tag}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6">{d.title}</h3>
                  <ul className="space-y-3 mb-8">
                    {d.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-[color:var(--brand-fresh)]/15 flex items-center justify-center">
                          <Check size={14} className="text-[color:var(--brand-cyan)]" />
                        </div>
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="inline-flex items-center gap-2 font-bold text-[color:var(--brand-cyan)] hover:gap-3 transition-all">
                    {d.cta} <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}