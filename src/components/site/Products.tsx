import { motion } from "framer-motion";
import { useState } from "react";
import { Boxes, Snowflake, Wheat } from "lucide-react";
import frozenProductsImage from "@/assets/laaxxkart-real-frozen-inventory.jpg";
import grocerySupplyImage from "@/assets/laaxxkart-real-grocery-supply.jpg";

const categories = {
  Frozen: {
    icon: Snowflake,
    color: "from-[#3aa8c9] to-[#22C55E]",
    image: frozenProductsImage,
    alt: "Real frozen paneer, french fries, sweet corn and cheese inventory in commercial freezer storage",
    items: [
      { name: "Paneer & Dairy Blocks", metric: "HoReCa packs" },
      { name: "French Fries & Potato", metric: "Bulk cartons" },
      { name: "Sweet Corn & Vegetables", metric: "IQF supply" },
      { name: "Cheese & Frozen Snacks", metric: "Distributor-ready" },
    ],
  },
  Groceries: {
    icon: Wheat,
    color: "from-[#FF8A00] to-[#0E7A45]",
    image: grocerySupplyImage,
    alt: "Real grocery and chilled supply inventory arranged on pallets for B2B dispatch",
    items: [
      { name: "Rice & Staples", metric: "Wholesale lots" },
      { name: "Pulses & Flour", metric: "Daily replenishment" },
      { name: "Oil & Spices", metric: "Verified sourcing" },
      { name: "Dry Fruits", metric: "Retail packs" },
    ],
  },
} as const;

type Tab = keyof typeof categories;

export function Products() {
  const [tab, setTab] = useState<Tab>("Frozen");
  const data = categories[tab];
  const Icon = data.icon;
  return (
    <section id="products" className="relative py-20 sm:py-28 bg-[color:var(--card)] overflow-hidden">
      <div className="absolute inset-0 scan-lines opacity-35" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center mb-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-cyan)]">Product catalog</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">Business inventory shown with <span className="text-brand-gradient">frozen categories</span></h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg">Paneer, french fries, sweet corn, cheese, staples, and grocery supply presented with realistic cold-storage photography.</p>
          </div>
          <div className="relative h-[330px] sm:h-[420px] rounded-xl overflow-hidden realistic-frame group">
            <motion.img
              key={tab}
              src={data.image}
              alt={data.alt}
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/5 to-transparent" />
            <div className="cold-scan absolute inset-x-0 top-0 h-20" />
          </div>
        </div>
        <div className="flex justify-center mb-10">
          <div className="glass rounded-xl p-1.5 inline-flex w-full max-w-sm sm:w-auto">
            {(Object.keys(categories) as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 sm:flex-none px-5 sm:px-6 py-2.5 rounded-lg text-sm font-bold transition relative ${tab === t ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"}`}
              >
                {tab === t && <motion.div layoutId="tab-pill" className="absolute inset-0 brand-gradient rounded-lg" transition={{ type: "spring", duration: 0.5 }} />}
                <span className="relative">{t}</span>
              </button>
            ))}
          </div>
        </div>
        <motion.div key={tab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {data.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30, rotateY: -20 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -8, rotateY: 5, scale: 1.02 }}
              className="group mesh-panel rounded-xl p-5 sm:p-6 cursor-pointer relative overflow-hidden min-h-[150px]"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br ${data.color}`} style={{ filter: "blur(40px)" }} />
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