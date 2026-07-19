"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/* Brand tokens — matches your existing homepage. Adjust if your      */
/* tailwind.config.js already defines these as named colors.          */
/* ------------------------------------------------------------------ */
const NAVY = "#071827";
const NAVY_LIGHT = "#0D2436";
const GOLD = "#D8A54A";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
      style={{ color: GOLD }}
    >
      <path
        d="M13.5 4.5L6 12l-3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
function ServicesHero() {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ backgroundColor: NAVY }}
    >
      {/* Cinematic background image — swap src for your own lighthouse fog/sunlight shot */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/images/services-hero-lighthouse.jpg')" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,24,39,0.3) 0%, rgba(7,24,39,0.85) 75%, rgba(7,24,39,1) 100%)",
        }}
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-6">
          Website Packages Designed To Grow With Your Business
        </h1>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Whether you&apos;re launching a new business or elevating an
          established brand, we create premium websites that generate trust,
          attract customers and grow with your business.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#packages"
            className="px-8 py-3 rounded-full font-medium transition-all hover:translate-x-1"
            style={{ backgroundColor: GOLD, color: NAVY }}
          >
            View Packages
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-medium border border-white/30 text-white transition-all hover:translate-x-1 hover:border-white/60"
          >
            Let&apos;s Talk
          </a>
        </div>
      </motion.div>

      {/* Dedicated scroll indicator — separate from the CTAs above */}
      <a
        href="#packages"
        aria-label="Scroll to packages"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/90 transition-colors z-10"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.svg
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M4 7l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </a>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */
type Plan = {
  name: string;
  badge?: string;
  tagline: string;
  setupFee: string;
  monthly: string;
  monthlyNote: string;
  features: string[];
  cta: string;
  featured?: boolean;
  glow?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "Perfect for startups, sole traders and businesses getting online.",
    setupFee: "€340",
    monthly: "€75/month",
    monthlyNote: "Hosting, Website Management & Content Editing",
    features: [
      "1 Page Landing Website",
      "Business Details",
      "Contact Form",
      "Mobile Responsive",
      "Google Maps",
      "SSL Certificate",
      "Fast Loading",
      "Basic SEO",
      "Premium Hosting",
      "Monthly Website Editing",
    ],
    cta: "Start My Website",
  },
  {
    name: "Small Business",
    badge: "⭐ MOST POPULAR",
    tagline: "Perfect for growing businesses.",
    setupFee: "€540",
    monthly: "€130/month",
    monthlyNote: "Hosting, Website Management, Editing & Additions",
    features: [
      "Home Page",
      "About Us",
      "Services",
      "Contact Us",
      "Mobile Responsive",
      "Contact Forms",
      "Google Maps",
      "Basic SEO",
      "SSL Security",
      "Premium Hosting",
      "Ongoing Website Updates",
      "Website Additions Included",
    ],
    cta: "Grow My Business",
    featured: true,
  },
  {
    name: "Commercial",
    badge: "⭐ PREMIUM",
    tagline: "Luxury website experience.",
    setupFee: "€770",
    monthly: "€297/month",
    monthlyNote: "Hosting, Website Management, Editing & Unlimited Additions",
    features: [
      "Premium 4 Page Website",
      "Scroll Animations",
      "Premium Hero Sections",
      "Luxury Design",
      "Interactive Effects",
      "Mobile Optimised",
      "Fast Performance",
      "SEO Ready",
      "Unlimited Website Editing",
      "Unlimited Content Additions",
      "Priority Support",
    ],
    cta: "Build Something Exceptional",
    glow: true,
  },
];

function PricingSection() {
  return (
    <section id="packages" className="px-6 py-24" style={{ backgroundColor: NAVY }}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Choose Your Lighthouse Package
        </h2>
        <p className="text-white/60">
          Every package includes secure hosting, website management and
          ongoing support.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className={`relative rounded-2xl p-8 border backdrop-blur-sm transition-shadow ${
              plan.featured ? "md:scale-105 md:py-10" : ""
            }`}
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              borderColor: plan.featured || plan.glow ? GOLD : "rgba(255,255,255,0.1)",
              boxShadow: plan.glow
                ? `0 0 40px -8px ${GOLD}55`
                : plan.featured
                ? `0 0 30px -10px ${GOLD}44`
                : undefined,
            }}
          >
            {plan.badge && (
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                style={{ backgroundColor: GOLD, color: NAVY }}
              >
                {plan.badge}
              </span>
            )}

            <h3 className="font-serif text-2xl text-white mb-2">{plan.name}</h3>
            <p className="text-white/60 text-sm mb-6">{plan.tagline}</p>

            <div className="mb-1">
              <span className="text-3xl text-white font-semibold">{plan.setupFee}</span>
            </div>
            <p className="text-white/50 text-xs mb-4">One-Time Setup Fee</p>

            <div className="mb-1">
              <span className="text-xl" style={{ color: GOLD }}>
                {plan.monthly}
              </span>
            </div>
            <p className="text-white/50 text-xs mb-6">{plan.monthlyNote}</p>

            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-white/80 text-sm">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="block text-center px-6 py-3 rounded-full font-medium transition-all hover:translate-x-1"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* We Handle Everything                                                */
/* ------------------------------------------------------------------ */
const supportCards = [
  { icon: "☁️", title: "Premium Hosting", text: "Fast secure cloud hosting." },
  { icon: "🖥️", title: "Website Management", text: "Need text or images changed? We do it for you." },
  { icon: "🛡️", title: "Security & Updates", text: "Your website is always secure and up to date." },
  { icon: "⚡", title: "Performance Optimisation", text: "Keeping your website lightning fast." },
];

function SupportSection() {
  return (
    <section className="px-6 py-24" style={{ backgroundColor: NAVY_LIGHT }}>
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="font-serif text-3xl md:text-4xl text-white text-center mb-14"
      >
        We Handle Everything
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {supportCards.map((c) => (
          <motion.div
            key={c.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-2xl p-6 border border-white/10 bg-white/[0.03] backdrop-blur-sm"
          >
            <div className="text-3xl mb-4">{c.icon}</div>
            <h3 className="text-white font-medium mb-2">{c.title}</h3>
            <p className="text-white/60 text-sm">{c.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* AI Add-ons                                                          */
/* ------------------------------------------------------------------ */
const aiCards = [
  {
    icon: "🤖",
    title: "AI Website Chatbot",
    price: "+€90/month",
    features: [
      "Instant customer support",
      "Answers FAQs",
      "Collects leads",
      "Books appointments",
      "Works 24/7",
    ],
    cta: "Add AI Chatbot",
  },
  {
    icon: "☎️",
    title: "AI Receptionist",
    price: "+€250/month",
    features: [
      "Automatically calls missed callers",
      "Books appointments",
      "Qualifies leads",
      "Answers customer questions",
      "Never miss another enquiry",
      "Available 24/7",
    ],
    cta: "Add AI Receptionist",
  },
];

function AISection() {
  return (
    <section
      className="relative px-6 py-24 overflow-hidden"
      style={{ backgroundColor: NAVY }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 20%, ${GOLD}22, transparent 40%), radial-gradient(circle at 80% 80%, ${GOLD}18, transparent 40%)`,
        }}
      />
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-14">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-serif text-3xl md:text-4xl text-white mb-4"
        >
          Upgrade With AI
        </motion.h2>
        <p className="text-white/60">
          Take your website beyond beautiful with intelligent automation.
        </p>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {aiCards.map((c) => (
          <motion.div
            key={c.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="rounded-2xl p-8 border backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              borderColor: `${GOLD}55`,
              boxShadow: `0 0 30px -12px ${GOLD}55`,
            }}
          >
            <div className="text-3xl mb-3">{c.icon}</div>
            <h3 className="font-serif text-xl text-white mb-1">{c.title}</h3>
            <p className="mb-6" style={{ color: GOLD }}>
              {c.price}
            </p>
            <ul className="space-y-3 mb-8">
              {c.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-white/80 text-sm">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block text-center px-6 py-3 rounded-full font-medium transition-all hover:translate-x-1"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              {c.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Comparison table                                                    */
/* ------------------------------------------------------------------ */
const compareRows = [
  { label: "Landing Page", starter: true, small: false, commercial: false },
  { label: "4 Pages", starter: false, small: true, commercial: true },
  { label: "Premium Animated Design", starter: false, small: false, commercial: true },
  { label: "Hosting Included", starter: true, small: true, commercial: true },
  { label: "Website Management", starter: true, small: true, commercial: true },
  { label: "Website Editing", starter: true, small: true, commercial: true },
  { label: "Content Additions", starter: false, small: true, commercial: true },
  { label: "SEO Ready", starter: true, small: true, commercial: true },
  { label: "Priority Support", starter: false, small: false, commercial: true },
  { label: "Scroll Animations", starter: false, small: false, commercial: true },
];

function Dot({ on }: { on: boolean }) {
  return on ? (
    <span style={{ color: GOLD }}>✓</span>
  ) : (
    <span className="text-white/20">—</span>
  );
}

function ComparisonTable() {
  return (
    <section className="px-6 py-24" style={{ backgroundColor: NAVY_LIGHT }}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-x-auto"
      >
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-white">
              <th className="text-left font-medium p-5">Feature</th>
              <th className="p-5 font-medium">Starter</th>
              <th className="p-5 font-medium" style={{ color: GOLD }}>
                Small Business
              </th>
              <th className="p-5 font-medium">Commercial</th>
            </tr>
          </thead>
          <tbody>
            {compareRows.map((row) => (
              <tr key={row.label} className="border-b border-white/5 last:border-0">
                <td className="p-5 text-white/70">{row.label}</td>
                <td className="p-5 text-center">
                  <Dot on={row.starter} />
                </td>
                <td className="p-5 text-center">
                  <Dot on={row.small} />
                </td>
                <td className="p-5 text-center">
                  <Dot on={row.commercial} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ accordion                                                       */
/* ------------------------------------------------------------------ */
const faqs = [
  { q: "Do I own my website?", a: "Yes — the website and its content belong to you. We handle the hosting and upkeep so it always stays fast, secure and online." },
  { q: "Can I upgrade later?", a: "Anytime. You can move up to a bigger package or add AI features whenever your business is ready for them." },
  { q: "Is hosting included?", a: "Yes, every package includes premium, secure hosting as part of your monthly plan." },
  { q: "How quickly can my website be completed?", a: "Most Starter and Small Business sites are completed within 1-2 weeks. Commercial builds typically take 2-4 weeks depending on scope." },
  { q: "Can you make changes every month?", a: "Yes — ongoing edits are part of every plan, so your site can keep evolving with your business." },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-6 py-24" style={{ backgroundColor: NAVY }}>
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="font-serif text-3xl md:text-4xl text-white text-center mb-14"
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="max-w-2xl mx-auto space-y-3">
        {faqs.map((item, i) => (
          <div
            key={item.q}
            className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left text-white"
            >
              <span>{item.q}</span>
              <span style={{ color: GOLD }}>{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="px-5 pb-5 text-white/60 text-sm"
              >
                {item.a}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA                                                           */
/* ------------------------------------------------------------------ */
function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative px-6 py-28 text-center overflow-hidden"
      style={{ backgroundColor: NAVY }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/services-final-lighthouse.png')" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,24,39,1) 0%, rgba(7,24,39,0.6) 50%, rgba(7,24,39,1) 100%)",
        }}
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
          Ready To Build A Website That Brings In More Customers?
        </h2>
        <p className="text-white/70 mb-10">
          Let&apos;s create a website that reflects your business, builds
          trust and helps you grow.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@lighthousewebdesign.xyz"
            className="px-8 py-3 rounded-full font-medium transition-all hover:translate-x-1"
            style={{ backgroundColor: GOLD, color: NAVY }}
          >
            Let&apos;s Talk
          </a>
          <a
            href="/portfolio"
            className="px-8 py-3 rounded-full font-medium border border-white/30 text-white transition-all hover:translate-x-1 hover:border-white/60"
          >
            View Portfolio
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page export                                                         */
/* ------------------------------------------------------------------ */
export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <PricingSection />
      <SupportSection />
      <AISection />
      <ComparisonTable />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
