import { motion } from "framer-motion";
import { Counter } from "./Counter";

const stats = [
  { value: 5000, suffix: "+", label: "Products Available" },
  { value: 100, suffix: "+", label: "Business Partners" },
  { value: 50, suffix: "+", label: "Cities Served" },
  { value: 99, suffix: "%", label: "On-Time Delivery" },
];

export function Stats() {
  return (
    <section className="relative py-16 sm:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="mesh-panel rounded-xl p-5 sm:p-7 text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-gradient">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}