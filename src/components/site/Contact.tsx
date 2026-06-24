import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Send } from "lucide-react";

const businessTypes = ["Retail Store", "Supermarket", "Restaurant", "Hotel", "Distributor", "Wholesaler", "Other"];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ business: "", name: "", phone: "", email: "", city: "", type: "Retail Store" });
  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 scan-lines opacity-35" />
      <div className="relative mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-cyan)]">Get Started</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">Let's grow your <span className="text-brand-gradient">supply</span></h2>
          <p className="mt-4 text-lg text-muted-foreground">Tell us about your business. Our team will reach out within 24 hours with pricing, samples or a personalized demo.</p>
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg brand-gradient flex items-center justify-center text-primary-foreground"><MapPin size={18} /></div>
              <div>
                <div className="font-semibold">LAAXX Consulting Pvt Ltd</div>
                <div className="text-muted-foreground">34, Kpv Complex 1st Floor, Kilari Road, Chickpet, Bangalore South, Karnataka 560053</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg brand-gradient flex items-center justify-center text-primary-foreground"><Phone size={18} /></div>
              <div>
                <div className="font-semibold">+91 8904880530</div>
                <div className="text-muted-foreground">CIN: U70200KA2025PTC208853</div>
              </div>
            </div>
          </div>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="mesh-panel rounded-xl p-5 sm:p-7 space-y-4"
        >
          {sent ? (
              <div className="text-center py-12">
              <div className="mx-auto mb-3 h-14 w-14 rounded-lg brand-gradient flex items-center justify-center text-primary-foreground font-bold">✓</div>
              <h3 className="text-2xl font-bold">Thank you!</h3>
              <p className="text-muted-foreground mt-2">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              {[
                { k: "business", l: "Business Name" },
                { k: "name", l: "Contact Person" },
                { k: "phone", l: "Phone Number" },
                { k: "email", l: "Email" },
                { k: "city", l: "City" },
              ].map((f, i) => (
                <motion.div
                  key={f.k}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground/60">{f.l}</label>
                  <input
                    required
                    value={(form as Record<string, string>)[f.k]}
                    onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                    className="mt-1 w-full px-4 py-3 rounded-lg bg-foreground/6 border border-foreground/10 focus:border-[color:var(--brand-cyan)] focus:ring-2 focus:ring-[color:var(--brand-cyan)]/20 outline-none transition text-foreground"
                  />
                </motion.div>
              ))}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-foreground/60">Business Type</label>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {businessTypes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setForm({ ...form, type: t })}
                      className={`px-3 py-2 rounded-lg border text-xs font-bold transition ${form.type === t ? "brand-gradient text-primary-foreground border-transparent" : "bg-foreground/6 border-foreground/10 text-muted-foreground hover:text-foreground"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-2">
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg brand-gradient text-primary-foreground font-bold shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition">
                  <Send size={16} /> Request Demo
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button type="submit" className="px-4 py-3 rounded-lg bg-foreground/6 border border-foreground/10 text-sm font-bold hover:bg-foreground/10">Become Distributor</button>
                <button type="submit" className="px-4 py-3 rounded-lg bg-foreground/6 border border-foreground/10 text-sm font-bold hover:bg-foreground/10">Wholesale Pricing</button>
              </div>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}