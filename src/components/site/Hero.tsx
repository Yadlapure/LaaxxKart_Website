import { motion } from "framer-motion";
import { ArrowRight, Boxes, Building2, PackageCheck, Snowflake, Timer, Truck } from "lucide-react";
import PlaystoreImage from "@/assets/google-play.png";
import ApplestoreImage from "@/assets/apple-store.png";

const signals = [
  { icon: PackageCheck, label: "One-stop groceries & FMCG catalogue" },
  { icon: Timer, label: "Next-day scheduled delivery" },
  { icon: Snowflake, label: "Frozen & cold-chain ready" },
];

const tiles = [
  { icon: Boxes, title: "Groceries", desc: "Rice, atta, pulses, oil, spices" },
  { icon: PackageCheck, title: "FMCG", desc: "Packaged foods, beverages, home & personal care" },
  { icon: Snowflake, title: "Frozen", desc: "Paneer, fries, sweet corn, cheese" },
  { icon: Truck, title: "Logistics", desc: "Doorstep delivery across the city" },
];

export function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 hero-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none scan-lines opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-[color:var(--brand-ice)] mb-6">
            <Building2 size={15} className="text-[color:var(--brand-accent)]" /> B2B now · B2C
            coming soon
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-foreground">
            B2B Grocery, FMCG & <span className="text-brand-gradient">Frozen Food Supplier</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            LaaxxKart supplies groceries, FMCG and frozen products directly from manufacturers and
            distributors to retail stores, supermarkets, restaurants, hotels and wholesalers —
            better prices, reliable delivery and zero procurement hassle.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            {/* Google Play */}
            <motion.a
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://play.google.com/store/apps/details?id=com.cmd.laaxxKart"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 w-full sm:w-52 items-center justify-center"
            >
              <img
                src={PlaystoreImage}
                alt="Get it on Google Play"
                className="w-[180px] sm:w-[250px] h-auto object-contain"
              />
            </motion.a>

            {/* Apple App Store */}
            <motion.div
              whileHover={{ y: -3, scale: 1.03 }}
              className="inline-flex h-14 w-full sm:w-52 items-center justify-center"
            >
              <img
                src={ApplestoreImage}
                alt="Download on the App Store"
                className="h-full sm:w-[250px] object-contain"
              />
            </motion.div>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-2xl">
            {signals.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="mesh-panel rounded-xl p-3 flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <Icon size={18} className="text-[color:var(--brand-cyan)] shrink-0" />
                  <span>{s.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
          {tiles.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`mesh-panel rounded-2xl p-5 sm:p-6 ${i % 2 === 1 ? "sm:translate-y-6" : ""}`}
              >
                <div className="h-12 w-12 rounded-xl brand-gradient flex items-center justify-center text-primary-foreground mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-lg">{t.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
