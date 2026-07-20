"use client";

import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "7d08ba7e-a812-43c0-ab78-201c0af2b9ed";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Web Design Inquiry from Lighthouse Website!");

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
    <section id="contact" className="bg-[#050e18] py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#f5d08b]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-[#f2f2f2] mb-4">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-white/60 font-light tracking-wide max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-[#02060c] border border-white/10 p-8 md:p-12 rounded-[4px] shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-[#f5d08b]">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f5d08b] focus:bg-white/10 transition-colors rounded-[2px]"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-[#f5d08b]">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f5d08b] focus:bg-white/10 transition-colors rounded-[2px]"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs uppercase tracking-widest text-[#f5d08b]">Contact Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f5d08b] focus:bg-white/10 transition-colors rounded-[2px]"
                  placeholder="+357 99 123456"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="country" className="text-xs uppercase tracking-widest text-[#f5d08b]">Country</label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  required
                  className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f5d08b] focus:bg-white/10 transition-colors rounded-[2px]"
                  placeholder="Cyprus"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-[#f5d08b]">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f5d08b] focus:bg-white/10 transition-colors resize-none rounded-[2px]"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* honeypot spam trap, invisible to real visitors */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-4 px-8 py-4 bg-[#f5d08b] text-[#050e18] text-sm font-semibold tracking-widest uppercase rounded-[2px] hover:bg-white transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-center text-sm text-[#f5d08b]">
                Thanks — your message has been sent. We&apos;ll get back to you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-400">
                Something went wrong sending your message. Please try emailing us directly instead.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
