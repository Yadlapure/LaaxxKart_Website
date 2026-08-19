import { motion } from "framer-motion";
import { Thermometer, Truck, Activity } from "lucide-react";
import { Counter } from "./Counter";

export function ColdChain() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 scan-lines opacity-45" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-cyan)]">Frozen & cold chain</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">Groceries and FMCG at scale, with a <span className="text-brand-gradient">frozen-ready supply chain</span></h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">Dry, chilled and frozen products handled in one order — temperature-controlled storage and monitored dispatch for paneer, fries, sweet corn and cheese.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Thermometer, value: 99, suffix: "%", label: "Product Freshness" },
            { icon: Activity, value: 24, suffix: "/7", label: "Live Monitoring" },
            { icon: Truck, value: 100, suffix: "%", label: "Temperature Controlled Logistics" },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="rounded-xl p-6 sm:p-8 mesh-panel transition">
                <div className="h-14 w-14 rounded-lg brand-gradient text-primary-foreground flex items-center justify-center mb-5">
                  <Icon size={26} />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-brand-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-muted-foreground">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}