import { motion } from "framer-motion";
import { Star } from "lucide-react";

const t = [
  { name: "Rohan Mehta", role: "Owner, FreshMart Stores", quote: "LaaxxKart transformed our inventory ops. Bulk orders arrive on time, every time — and the cold chain is rock solid." },
  { name: "Priya Iyer", role: "Procurement, Spice Route Restaurant", quote: "From frozen seafood to spices, one platform handles it all. Competitive pricing and great service." },
  { name: "Arjun Shah", role: "Distributor, Karnataka", quote: "Onboarding was seamless. The dashboard, tracking, and partner support make scaling so much easier." },
];

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28 bg-[color:var(--card)] overflow-hidden">
      <div className="absolute inset-0 scan-lines opacity-25" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-cyan)]">Loved by Businesses</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">What our <span className="text-brand-gradient">partners say</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, rotate: 1 }}
              className="mesh-panel rounded-xl p-6 sm:p-7 relative"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} className="fill-[color:var(--brand-accent)] text-[color:var(--brand-accent)]" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6">"{q.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-lg brand-gradient flex items-center justify-center text-primary-foreground font-bold">
                  {q.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold">{q.name}</div>
                  <div className="text-sm text-muted-foreground">{q.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}