import { motion } from "framer-motion";
import { ArrowRight, Building2, ShieldCheck, Sparkles, Thermometer, Truck } from "lucide-react";
import warehouseImage from "@/assets/laaxxkart-cold-warehouse.jpg";
import frozenProductsImage from "@/assets/laaxxkart-real-frozen-inventory.jpg";
import truckImage from "@/assets/laaxxkart-refrigerated-logistics.jpg";

const signals = [
  { icon: Thermometer, label: "-18°C monitored cold chain" },
  { icon: Truck, label: "Bulk B2B dispatch" },
  { icon: ShieldCheck, label: "QC verified inventory" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 sm:pt-28 pb-12 hero-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none scan-lines opacity-70" />
      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-[0.88fr_1.12fr] gap-8 lg:gap-6 items-center min-h-[82vh]">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-[color:var(--brand-ice)] mb-6">
            <Sparkles size={15} className="text-[color:var(--brand-accent)]" /> Enterprise frozen food supply platform
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] text-foreground max-w-4xl">
            LaaxxKart powers the <span className="text-brand-gradient">next cold-chain marketplace</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A premium B2B procurement network for frozen foods, dairy, ready-to-cook items, groceries, and upcoming direct-to-consumer commerce.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.a
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl brand-gradient text-primary-foreground font-bold shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition"
            >
              Start B2B ordering
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass font-bold text-foreground hover:border-[color:var(--brand-cyan)]/50 transition"
            >
              <Building2 size={18} /> Become a distributor
            </motion.a>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-2xl">
            {signals.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="mesh-panel rounded-xl p-3 flex items-center gap-3 text-sm text-muted-foreground">
                  <Icon size={18} className="text-[color:var(--brand-cyan)] shrink-0" />
                  <span>{s.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative h-[430px] sm:h-[560px] lg:h-[660px] -mx-4 sm:mx-0">
          <div className="absolute inset-0 rounded-none sm:rounded-2xl overflow-hidden realistic-frame">
            <img src={warehouseImage} alt="Real LaaxxKart cold-chain warehouse with frozen food pallets" width={1536} height={1024} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/10 to-background/35" />
            <div className="absolute inset-0 scan-lines opacity-35" />
            <div className="cold-scan absolute inset-x-0 top-0 h-20" />
          </div>
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, 1.4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-3 sm:left-8 bottom-8 w-[52%] max-w-[360px] rounded-xl overflow-hidden realistic-frame"
          >
            <img src={frozenProductsImage} alt="Real frozen paneer, french fries, sweet corn and cheese inventory" width={1536} height={1024} className="h-full w-full object-cover" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -1.2, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-3 sm:right-8 top-12 w-[46%] max-w-[330px] rounded-xl overflow-hidden realistic-frame hidden sm:block"
          >
            <img src={truckImage} alt="Real refrigerated logistics truck for frozen food delivery" width={1536} height={1024} className="h-full w-full object-cover" />
          </motion.div>
          <div className="absolute right-5 bottom-5 glass rounded-xl px-4 py-3 text-sm font-bold text-[color:var(--brand-ice)] shadow-[var(--shadow-glow)]">
            Frozen foods • Groceries • B2B supply
          </div>
        </div>
      </div>
    </section>
  );
}