"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Header from "@/components/Header";
import MainFooter from "@/components/MainFooter";

/* ------------------------------------------------------------------ */
/* Brand tokens                                                       */
/* ------------------------------------------------------------------ */
const NAVY = "#071827";
const NAVY_LIGHT = "#0D2436";
const GOLD = "#D8A54A";

/* Paste your free Web3Forms access key here (from web3forms.com) */
const WEB3FORMS_ACCESS_KEY = "7d08ba7e-a812-43c0-ab78-201c0af2b9ed";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-6 h-px" style={{ backgroundColor: GOLD }} />
      <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: GOLD }}>
        {children}
      </span>
    </div>
  );
}

type Status = "idle" | "sending" | "success" | "error";

function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/60 text-xs uppercase tracking-wide mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[color:var(--gold)]"
            style={{ ["--gold" as string]: GOLD }}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-white/60 text-xs uppercase tracking-wide mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-white/60 text-xs uppercase tracking-wide mb-2">
          Phone (optional)
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none"
          placeholder="+357 ..."
        />
      </div>

      <div>
        <label className="block text-white/60 text-xs uppercase tracking-wide mb-2">
          What do you need help with?
        </label>
        <select
          name="package_interest"
          className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled className="text-black">Select an option</option>
          <option value="Starter" className="text-black">Starter Package</option>
          <option value="Small Business" className="text-black">Small Business Package</option>
          <option value="Commercial" className="text-black">Commercial Package</option>
          <option value="Not sure yet" className="text-black">Not sure yet</option>
        </select>
      </div>

      <div>
        <label className="block text-white/60 text-xs uppercase tracking-wide mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none resize-none"
          placeholder="Tell us a bit about your business and what you're looking for..."
        />
      </div>

      {/* honeypot spam trap, invisible to real visitors */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-medium transition-all hover:translate-x-1 disabled:opacity-60 disabled:hover:translate-x-0"
        style={{ backgroundColor: GOLD, color: NAVY }}
      >
        {status === "sending" ? "Sending..." : "Send Message"} {status !== "sending" && <span>→</span>}
      </button>

      {status === "success" && (
        <p className="text-center text-sm" style={{ color: GOLD }}>
          Thanks — your message has been sent. We&apos;ll get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong sending your message. Please try emailing us directly instead.
        </p>
      )}
    </form>
  );
}

function ContactHero() {
  return (
    <section
      className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden"
      style={{ backgroundColor: NAVY }}
    >
      <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-6 h-px" style={{ backgroundColor: GOLD }} />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: GOLD }}>
            Get In Touch
          </span>
          <span className="w-6 h-px" style={{ backgroundColor: GOLD }} />
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-5">
          Let&apos;s Build Something Exceptional
        </h1>
        <p className="text-white/60">
          Tell us about your business and what you need — we&apos;ll get back
          to you within one business day.
        </p>
      </motion.div>
    </section>
  );
}

function ContactMain() {
  return (
    <section className="px-6 py-10 pb-28" style={{ backgroundColor: NAVY }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="md:col-span-3 rounded-xl p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm"
        >
          <ContactForm />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="md:col-span-2 space-y-8"
        >
          <div>
            <Eyebrow>Direct Contact</Eyebrow>
            <p className="text-white/60 text-sm mb-4">
              Prefer to reach out directly? We&apos;re happy to chat over
              email or phone.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@lighthousewebdesign.xyz"
                className="block text-white hover:text-[color:var(--gold)] transition-colors"
                style={{ ["--gold" as string]: GOLD }}
              >
                hello@lighthousewebdesign.xyz
              </a>
              <a
                href="tel:+357"
                className="block text-white hover:text-[color:var(--gold)] transition-colors"
              >
                +357 00 000 000
              </a>
            </div>
          </div>

          <div className="h-px bg-white/10" />

          <div>
            <Eyebrow>Response Time</Eyebrow>
            <p className="text-white/60 text-sm">
              We reply to every enquiry within one business day — often much
              sooner.
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div>
            <Eyebrow>What Happens Next</Eyebrow>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>1. We review your message and package interest</li>
              <li>2. We reply with a tailored recommendation</li>
              <li>3. We schedule a short call to confirm the scope</li>
              <li>4. Your project kicks off</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: NAVY_LIGHT }}>
      <Header />
      <ContactHero />
      <ContactMain />
      <MainFooter />
    </main>
  );
}
