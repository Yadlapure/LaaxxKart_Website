import { motion } from "framer-motion";
import { Boxes, Leaf, Snowflake, Truck, BadgePercent, ShieldCheck } from "lucide-react";
import { useRef } from "react";

const items = [
  { icon: Boxes, title: "Bulk Ordering", desc: "Volume-friendly pricing and easy reorders for daily operations." },
  { icon: Leaf, title: "Fresh Inventory", desc: "Daily replenishment from verified farms and producers." },
  { icon: Snowflake, title: "Frozen Supply Chain", desc: "Unbroken cold-chain from storage to your back door." },
  { icon: Truck, title: "Fast Delivery", desc: "Reliable scheduled and on-demand deliveries." },
  { icon: BadgePercent, title: "Competitive Pricing", desc: "Direct sourcing means better margins for you." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Strict QC at every checkpoint, FSSAI compliant." },
];

function TiltCard({ children, i }: { children: React.ReactNode; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateY(0) rotateX(0)";
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
    >
      <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className="transition-transform duration-300 will-change-transform">
        {children}
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="why" className="relative py-20 sm:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 scan-lines opacity-30" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-cyan)]">Why LaaxxKart</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">Built for businesses that <span className="text-brand-gradient">move fast</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <TiltCard key={it.title} i={i}>
                <div className="group mesh-panel rounded-xl p-6 sm:p-7 h-full relative overflow-hidden">
                  <div className="relative">
                    <div className="h-14 w-14 rounded-lg brand-gradient flex items-center justify-center text-primary-foreground shadow-[var(--shadow-soft)] mb-5">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{it.title}</h3>
                    <p className="text-muted-foreground">{it.desc}</p>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}