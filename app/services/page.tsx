"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";

/* ------------------------------------------------------------------ */
/* Brand tokens                                                       */
/* ------------------------------------------------------------------ */
const NAVY = "#071827";
const NAVY_LIGHT = "#0D2436";
const GOLD = "#D8A54A";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-5">
      <span className="w-6 h-px" style={{ backgroundColor: GOLD }} />
      <span
        className="text-xs font-semibold tracking-[0.25em] uppercase"
        style={{ color: GOLD }}
      >
        {children}
      </span>
    </div>
  );
}

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
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path
        d="M5 8l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Simple bordered line-icon box, used in the "We Handle Everything" and AI sections */
function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-14 h-14 flex items-center justify-center rounded-md border mb-6"
      style={{ borderColor: `${GOLD}66` }}
    >
      <span style={{ color: GOLD }}>{children}</span>
    </div>
  );
}

const icons = {
  cloud: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.2 9.03 4 4 0 0 0 7 18z"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M12 11v6M9.5 14.5L12 17l2.5-2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  edit: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M15.5 12.5l3-3-1.5-1.5-3 3v1.5h1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  ),
  shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  gauge: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 15a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 15l3-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="15" r="1" fill="currentColor" />
    </svg>
  ),
  chat: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 5h16v10H9l-4 3.5V15H4V5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="9" cy="10" r="0.8" fill="currentColor" />
      <circle cx="12" cy="10" r="0.8" fill="currentColor" />
      <circle cx="15" cy="10" r="0.8" fill="currentColor" />
    </svg>
  ),
  phone: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5V18a2 2 0 0 1-2 2C10.5 20 4 13.5 4 6a2 2 0 0 1 1-2z"
        stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"
      />
    </svg>
  ),
};

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
function ServicesHero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center px-6 md:px-16 overflow-hidden"
      style={{ backgroundColor: NAVY }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/images/services-hero-lighthouse.png')" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,24,39,1) 0%, rgba(7,24,39,0.85) 35%, rgba(7,24,39,0.2) 70%), linear-gradient(180deg, transparent 60%, rgba(7,24,39,1) 100%)",
        }}
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative z-10 max-w-2xl py-32"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px" style={{ backgroundColor: GOLD }} />
          <span
            className="text-xs font-semibold tracking-[0.25em] uppercase"
            style={{ color: GOLD }}
          >
            Premium Web Design Services
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-6">
          Website Packages Designed To Grow With Your Business
        </h1>
        <p className="text-white/70 text-lg mb-10 max-w-xl">
          Whether you&apos;re launching a new business or elevating an
          established brand, we create premium websites that generate trust,
          attract customers and grow with your business.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#packages"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-medium transition-all hover:translate-x-1"
            style={{ backgroundColor: GOLD, color: NAVY }}
          >
            View Packages <span>→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-medium border text-white transition-all hover:translate-x-1"
            style={{ borderColor: "rgba(255,255,255,0.3)" }}
          >
            Let&apos;s Talk <span>→</span>
          </a>
        </div>
      </motion.div>

      {/* Explore packages indicator — separate from the CTAs above */}
      <a
        href="#packages"
        aria-label="Explore packages"
        className="absolute bottom-10 right-10 md:right-16 hidden sm:flex items-center gap-3 text-white/50 hover:text-white/90 transition-colors z-10"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Explore Packages</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-8"
          style={{ backgroundColor: "currentColor" }}
        />
      </a>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */
type Plan = {
  code: string;
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
    code: "LIGHTHOUSE / 01",
    name: "Starter",
    tagline: "Perfect for startups, sole traders and businesses getting online.",
    setupFee: "€340",
    monthly: "€75/month",
    monthlyNote: "Hosting, Website Management & Content Editing",
    features: [
      "1 Page Landing Website", "Business Details", "Contact Form", "Mobile Responsive",
      "Google Maps", "SSL Certificate", "Fast Loading", "Basic SEO", "Premium Hosting",
      "Monthly Website Editing",
    ],
    cta: "Start My Website",
  },
  {
    code: "LIGHTHOUSE / 02",
    name: "Small Business",
    badge: "★ MOST POPULAR",
    tagline: "Perfect for growing businesses.",
    setupFee: "€540",
    monthly: "€130/month",
    monthlyNote: "Hosting, Website Management, Editing & Additions",
    features: [
      "Home Page", "About Us", "Services", "Contact Us", "Mobile Responsive",
      "Contact Forms", "Google Maps", "Basic SEO", "SSL Security", "Premium Hosting",
      "Ongoing Website Updates", "Website Additions Included",
    ],
    cta: "Grow My Business",
    featured: true,
  },
  {
    code: "LIGHTHOUSE / 03",
    name: "Commercial",
    badge: "★ PREMIUM",
    tagline: "Luxury website experience.",
    setupFee: "€770",
    monthly: "€297/month",
    monthlyNote: "Hosting, Website Management, Editing & Unlimited Additions",
    features: [
      "Premium 4 Page Website", "Scroll Animations", "Premium Hero Sections", "Luxury Design",
      "Interactive Effects", "Mobile Optimised", "Fast Performance", "SEO Ready",
      "Unlimited Website Editing", "Unlimited Content Additions", "Priority Support",
    ],
    cta: "Build Something Exceptional",
    glow: true,
  },
];

function PricingSection() {
  return (
    <section id="packages" className="px-6 py-28" style={{ backgroundColor: NAVY }}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <Eyebrow>Find Your Foundation</Eyebrow>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-5">
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
            className={`relative rounded-xl p-8 border backdrop-blur-sm transition-shadow ${
              plan.featured ? "md:scale-105 md:py-10" : ""
            }`}
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
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

            <div className="flex items-center justify-between mb-4">
              <span
                className="text-xs font-semibold tracking-[0.15em]"
                style={{ color: GOLD }}
              >
                {plan.code}
              </span>
            </div>

            <h3 className="font-serif text-2xl text-white mb-2">{plan.name}</h3>
            <p className="text-white/60 text-sm mb-6">{plan.tagline}</p>

            <div className="mb-1 flex items-baseline gap-2">
              <span className="text-3xl text-white font-semibold">{plan.setupFee}</span>
              <span className="text-white/40 text-xs uppercase tracking-wide">One-Time Setup Fee</span>
            </div>

            <div className="mb-6">
              <span className="text-xl" style={{ color: GOLD }}>{plan.monthly}</span>
            </div>
            <p className="text-white/50 text-xs mb-6 -mt-4">{plan.monthlyNote}</p>

            <div className="h-px bg-white/10 mb-6" />

            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-white/80 text-sm">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-medium transition-all hover:translate-x-1"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              {plan.cta} <span>→</span>
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
  { icon: icons.cloud, title: "Premium Hosting", text: "Fast secure cloud hosting." },
  { icon: icons.edit, title: "Website Management", text: "Need text or images changed? We do it for you." },
  { icon: icons.shield, title: "Security & Updates", text: "Your website is always secure and up to date." },
  { icon: icons.gauge, title: "Performance Optimisation", text: "Keeping your website lightning fast." },
];

function SupportSection() {
  return (
    <section className="px-6 py-28" style={{ backgroundColor: NAVY_LIGHT }}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-6xl mx-auto mb-16"
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="w-6 h-px" style={{ backgroundColor: GOLD }} />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: GOLD }}>
            Always Looked After
          </span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-5 max-w-xl">
          We Handle Everything
        </h2>
        <p className="text-white/60 max-w-xl">
          Your website remains secure, current and performing at its best
          while you focus on the business behind it.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {supportCards.map((c) => (
          <motion.div
            key={c.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-xl p-6 border border-white/10 bg-white/[0.02] backdrop-blur-sm"
          >
            <IconBox>{c.icon}</IconBox>
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
    code: "AI ADD-ON 01",
    icon: icons.chat,
    title: "AI Website Chatbot",
    price: "+€90/month",
    features: ["Instant customer support", "Answers FAQs", "Collects leads", "Books appointments", "Works 24/7"],
    cta: "Add AI Chatbot",
  },
  {
    code: "AI ADD-ON 02",
    icon: icons.phone,
    title: "AI Receptionist",
    price: "+€250/month",
    features: [
      "Automatically calls missed callers", "Books appointments", "Qualifies leads",
      "Answers customer questions", "Never miss another enquiry", "Available 24/7",
    ],
    cta: "Add AI Receptionist",
  },
];

function AISection() {
  return (
    <section className="relative px-6 py-28 overflow-hidden" style={{ backgroundColor: NAVY }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${GOLD}14, transparent 45%)`,
        }}
      />
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-16">
        <Eyebrow>Intelligent Growth</Eyebrow>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-5">Upgrade With AI</h2>
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
            className="rounded-xl p-8 border backdrop-blur-sm"
            style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.1)" }}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs font-semibold tracking-[0.15em]" style={{ color: GOLD }}>
                {c.code}
              </span>
              <div
                className="w-11 h-11 flex items-center justify-center rounded-md border shrink-0"
                style={{ borderColor: `${GOLD}66`, color: GOLD }}
              >
                {c.icon}
              </div>
            </div>
            <h3 className="font-serif text-2xl text-white mb-1">{c.title}</h3>
            <p className="mb-6" style={{ color: GOLD }}>{c.price}</p>
            <div className="h-px bg-white/10 mb-6" />
            <ul className="space-y-3 mb-8">
              {c.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-white/80 text-sm">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-medium transition-all hover:translate-x-1"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              {c.cta} <span>→</span>
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
  return on ? <span style={{ color: GOLD }}>✓</span> : <span className="text-white/20">—</span>;
}

function ComparisonTable() {
  return (
    <section className="px-6 py-28" style={{ backgroundColor: NAVY_LIGHT }}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mb-12"
      >
        <Eyebrow>Side By Side</Eyebrow>
        <h2 className="font-serif text-3xl md:text-4xl text-white">Compare Packages</h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-4xl mx-auto rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-x-auto"
      >
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-white">
              <th className="text-left font-medium p-5">Feature</th>
              <th className="p-5 font-medium">Starter</th>
              <th className="p-5 font-medium" style={{ color: GOLD }}>Small Business</th>
              <th className="p-5 font-medium">Commercial</th>
            </tr>
          </thead>
          <tbody>
            {compareRows.map((row) => (
              <tr key={row.label} className="border-b border-white/5 last:border-0">
                <td className="p-5 text-white/70">{row.label}</td>
                <td className="p-5 text-center"><Dot on={row.starter} /></td>
                <td className="p-5 text-center"><Dot on={row.small} /></td>
                <td className="p-5 text-center"><Dot on={row.commercial} /></td>
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
    <section className="px-6 py-28" style={{ backgroundColor: NAVY }}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mb-14"
      >
        <Eyebrow>Good To Know</Eyebrow>
        <h2 className="font-serif text-3xl md:text-4xl text-white">Frequently Asked Questions</h2>
      </motion.div>
      <div className="max-w-2xl mx-auto space-y-3">
        {faqs.map((item, i) => (
          <div key={item.q} className="rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
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
    <section id="contact" className="relative px-6 py-28 text-center overflow-hidden" style={{ backgroundColor: NAVY }}>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/services-final-lighthouse.png')" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(7,24,39,1) 0%, rgba(7,24,39,0.6) 50%, rgba(7,24,39,1) 100%)",
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
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-medium transition-all hover:translate-x-1"
            style={{ backgroundColor: GOLD, color: NAVY }}
          >
            Let&apos;s Talk <span>→</span>
          </a>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-medium border text-white transition-all hover:translate-x-1"
            style={{ borderColor: "rgba(255,255,255,0.3)" }}
          >
            View Portfolio <span>→</span>
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
