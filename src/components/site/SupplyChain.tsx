import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sprout, Factory, Snowflake, Warehouse, Store, Users } from "lucide-react";

const steps = [
  { icon: Sprout, label: "Sourcing", desc: "Direct from manufacturers, mills and brands" },
  { icon: Factory, label: "Quality Check", desc: "Batch, MRP and expiry verification" },
  { icon: Snowflake, label: "Warehousing", desc: "Dry, chilled and frozen storage zones" },
  { icon: Warehouse, label: "Order Consolidation", desc: "One invoice across all categories" },
  { icon: Store, label: "Delivery", desc: "Scheduled doorstep delivery to your business" },
  { icon: Users, label: "Consumer", desc: "B2C commerce launching soon" },
];

export function SupplyChain() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  const truckY = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "98%"]);

  return (
    <section
      id="supply-chain"
      ref={ref}
      className="relative py-20 sm:py-28 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 scan-lines opacity-45" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-cyan)]">
            Supply chain
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            From manufacturer to your <span className="text-brand-gradient">store shelf</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            We remove the layers between brands and businesses — direct sourcing, organised
            warehousing and scheduled delivery for groceries, FMCG and frozen.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-foreground/10 hidden sm:block" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-px brand-gradient hidden sm:block"
          />
          <motion.div
            style={{ top: truckY }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 hidden sm:flex w-12 h-12 -ml-6 md:ml-0 rounded-xl brand-gradient items-center justify-center shadow-[var(--shadow-glow)] z-10"
          >
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
                  <div
                    className={`mesh-panel rounded-xl p-5 sm:p-6 ${left ? "md:text-right" : ""} [direction:ltr]`}
                  >
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
