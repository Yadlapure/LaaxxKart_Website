import { motion } from "framer-motion";
import { useState } from "react";
import { Boxes, Snowflake, Wheat, PackageCheck } from "lucide-react";

const categories = {
  Groceries: {
    icon: Wheat,
    color: "from-[#F2C14E] to-[#24D581]",
    items: [
      { name: "Rice & Atta", metric: "Wholesale lots" },
      { name: "Pulses & Dals", metric: "Bulk bags" },
      { name: "Edible Oils", metric: "Tins & pouches" },
      { name: "Spices & Masala", metric: "Verified sourcing" },
      { name: "Sugar & Salt", metric: "Daily replenishment" },
      { name: "Dry Fruits", metric: "Retail packs" },
    ],
  },
  FMCG: {
    icon: PackageCheck,
    color: "from-[#67E8F9] to-[#24D581]",
    items: [
      { name: "Packaged Foods", metric: "Case packs" },
      { name: "Beverages", metric: "Crate supply" },
      { name: "Biscuits & Snacks", metric: "Brand assortment" },
      { name: "Home Care", metric: "Distributor rates" },
      { name: "Personal Care", metric: "Full range" },
      { name: "Disposables", metric: "HoReCa packs" },
    ],
  },
  Frozen: {
    icon: Snowflake,
    color: "from-[#67E8F9] to-[#DFFBFF]",
    items: [
      { name: "Paneer & Dairy", metric: "HoReCa packs" },
      { name: "French Fries", metric: "Bulk cartons" },
      { name: "Sweet Corn & Veg", metric: "IQF supply" },
      { name: "Cheese", metric: "Distributor-ready" },
      { name: "Frozen Snacks", metric: "Ready-to-fry" },
      { name: "Frozen Paratha", metric: "Case packs" },
    ],
  },
} as const;

type Tab = keyof typeof categories;

export function Products() {
  const [tab, setTab] = useState<Tab>("Groceries");
  const data = categories[tab];
  const Icon = data.icon;
  return (
    <section id="products" className="relative py-20 sm:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 scan-lines opacity-35" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-cyan)]">
            Catalogue
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Groceries, FMCG and <span className="text-brand-gradient">frozen — in one order</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Thousands of SKUs across staples, packaged brands and frozen products, with transparent
            wholesale pricing.
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="glass rounded-xl p-1.5 inline-flex w-full max-w-md sm:w-auto">
            {(Object.keys(categories) as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 sm:flex-none px-5 sm:px-7 py-2.5 rounded-lg text-sm font-bold transition relative ${tab === t ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"}`}
              >
                {tab === t && (
                  <motion.div
                    layoutId="tab-pill"
                    className="absolute inset-0 brand-gradient rounded-lg"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative">{t}</span>
              </button>
            ))}
          </div>
        </div>
        <motion.div
          key={tab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {data.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -8 }}
              className="group mesh-panel rounded-xl p-5 sm:p-6 cursor-pointer relative overflow-hidden min-h-[150px]"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br ${data.color}`}
                style={{ filter: "blur(40px)" }}
              />
              <div className="relative h-full flex flex-col justify-between gap-5">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg brand-gradient flex items-center justify-center text-primary-foreground">
                    <Icon size={18} />
                  </div>
                  <Boxes size={18} className="text-[color:var(--brand-cyan)]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{item.name}</h3>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[color:var(--brand-cyan)] uppercase tracking-wide">
                    {item.metric}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
