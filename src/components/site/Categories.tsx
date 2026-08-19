import { motion } from "framer-motion";
import {
  Store,
  ShoppingCart,
  UtensilsCrossed,
  Hotel,
  Truck,
  Boxes,
  Coffee,
  IceCream,
} from "lucide-react";

const segments = [
  { icon: Store, label: "Retail Stores" },
  { icon: ShoppingCart, label: "Supermarkets" },
  { icon: UtensilsCrossed, label: "Restaurants & QSR" },
  { icon: Hotel, label: "Hotels" },
  { icon: Truck, label: "Distributors" },
  { icon: Boxes, label: "Wholesalers" },
  { icon: Coffee, label: "Cafes & Bakeries" },
  { icon: IceCream, label: "Ice Cream Parlours" },
];

export function Categories() {
  return (
    <section
      id="segments"
      className="relative py-20 sm:py-24 bg-[color:var(--card)] overflow-hidden"
    >
      <div className="absolute inset-0 scan-lines opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-cyan)]">
            Who we serve
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Built for every <span className="text-brand-gradient">business buyer</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {segments.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="mesh-panel rounded-xl p-5 sm:p-6 flex items-center gap-4"
              >
                <div className="h-11 w-11 rounded-lg brand-gradient flex items-center justify-center text-primary-foreground shrink-0">
                  <Icon size={20} />
                </div>
                <span className="font-semibold text-sm sm:text-base">{s.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
