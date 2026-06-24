import { motion } from "framer-motion";
import { Snowflake, Thermometer, Truck, Activity } from "lucide-react";
import { Counter } from "./Counter";
import warehouseImage from "@/assets/laaxxkart-cold-warehouse.jpg";

export function ColdChain() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 scan-lines opacity-45" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center mb-12 sm:mb-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-cyan)]">Cold chain</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">Temperature-controlled infrastructure with <span className="text-brand-gradient">realistic visuals</span></h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg">Commercial cold rooms, palletized inventory, safety inspection, and monitored frozen logistics for enterprise food supply.</p>
          </div>
          <div className="relative h-[340px] sm:h-[440px] rounded-xl overflow-hidden realistic-frame group">
            <img src={warehouseImage} alt="Real cold storage room with frozen food pallets and inspection team" width={1536} height={1024} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-background/10" />
            <div className="cold-scan absolute inset-x-0 top-0 h-20" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Thermometer, value: 99, suffix: "%", label: "Product Freshness" },
            { icon: Activity, value: 24, suffix: "/7", label: "Live Monitoring" },
            { icon: Truck, value: 100, suffix: "%", label: "Temperature Controlled Logistics" },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-xl p-6 sm:p-8 mesh-panel transition"
              >
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