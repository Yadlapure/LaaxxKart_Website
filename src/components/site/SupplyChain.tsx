import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sprout, Factory, Snowflake, Warehouse, Store, Users } from "lucide-react";
import warehouseImage from "@/assets/laaxxkart-cold-warehouse.jpg";
import truckImage from "@/assets/laaxxkart-refrigerated-logistics.jpg";

const steps = [
  { icon: Sprout, label: "Farm", desc: "Sourced fresh from verified growers" },
  { icon: Factory, label: "Processing", desc: "Hygienic processing & quality grading" },
  { icon: Snowflake, label: "Cold Storage", desc: "Sub-zero, temperature monitored 24/7" },
  { icon: Warehouse, label: "Distribution", desc: "Smart warehouses across cities" },
  { icon: Store, label: "Retailer", desc: "Delivered fresh to your business" },
  { icon: Users, label: "Customer", desc: "Reaching the end consumer table" },
];

export function SupplyChain() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  const truckY = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "98%"]);

  return (
    <section id="supply-chain" ref={ref} className="relative py-20 sm:py-28 overflow-hidden bg-background">
      <div className="absolute inset-0 scan-lines opacity-45" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-cyan)]">Cold-chain journey</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">A logistics flow from <span className="text-brand-gradient">source to store</span></h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg">Realistic cold-room, pallet, dispatch, and refrigerated vehicle visuals for LaaxxKart’s B2B and upcoming B2C supply network.</p>
          </div>
          <div className="relative h-[360px] sm:h-[430px] lg:h-[500px] rounded-xl overflow-hidden realistic-frame group">
            <img src={warehouseImage} alt="Real cold-chain warehouse with frozen food pallets and quality inspection" width={1536} height={1024} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/10 to-transparent" />
            <motion.div initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="absolute right-4 bottom-4 w-[48%] max-w-sm rounded-xl overflow-hidden border border-foreground/15 shadow-[var(--shadow-glow)] hidden sm:block">
              <img src={truckImage} alt="Refrigerated delivery truck at cold storage dock" width={1536} height={1024} loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </motion.div>
            <div className="cold-scan absolute inset-x-0 top-0 h-20" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-foreground/10 hidden sm:block" />
          <motion.div style={{ height: lineHeight }} className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-px brand-gradient hidden sm:block" />
          <motion.div style={{ top: truckY }} className="absolute left-4 md:left-1/2 md:-translate-x-1/2 hidden sm:flex w-12 h-12 -ml-6 md:ml-0 rounded-xl brand-gradient items-center justify-center shadow-[var(--shadow-glow)] z-10">
            <Snowflake className="text-primary-foreground" size={20} />
          </motion.div>
          <div className="space-y-5 md:space-y-8 sm:pl-12 md:pl-0">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                  className={`md:grid md:grid-cols-2 md:gap-12 items-center ${left ? "" : "md:[direction:rtl]"}`}
                >
                  <div className={`mesh-panel rounded-xl p-5 sm:p-6 ${left ? "md:text-right" : ""} [direction:ltr]`}>
                    <div className={`flex items-center gap-3 mb-2 ${left ? "md:justify-end" : ""}`}>
                      <div className="h-11 w-11 rounded-lg brand-gradient flex items-center justify-center text-primary-foreground shadow-[var(--shadow-soft)]">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-2xl font-bold">{s.label}</h3>
                    </div>
                    <p className="text-muted-foreground">{s.desc}</p>
                  </div>
                  <div />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}