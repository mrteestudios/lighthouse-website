"use client";

import { useEffect, useState } from "react";
import "./about.css";
import Header from "@/components/Header";
import MainFooter from "@/components/MainFooter";

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll-reveal (replaces the old <script> IntersectionObserver)
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");

    if (!("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
    <Header />
      <main>
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow">Our Story</p>
              <h1>A studio that treats your business <em>like family.</em></h1>
              <p className="lead">
                Lighthouse Web Design is a one-person studio, not a call centre. Every project gets the same
                honesty, care and attention you&apos;d give someone you actually know — because behind every
                site we build, that&apos;s exactly what you get.
              </p>
              <div className="hero-actions">
                <a href="#story" className="btn btn-primary">Meet The Studio ↓</a>
                <a href="/contact" className="btn btn-ghost">Get In Touch →</a>
              </div>
              <div className="hero-stats">
                <div><b>1</b><span>Person You Actually Talk To</span></div>
                <div><b>€440</b><span>Packages Start From</span></div>
                <div><b>24h</b><span>Typical Reply Time</span></div>
              </div>
            </div>

            <div className="lighthouse-art">
              <img src="/images/hero-lighthouse.jpg" alt="Lighthouse beam cutting through coastal fog at sunrise" />
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="story" id="story">
          <div className="wrap story-grid">
            <div className="portrait reveal">
              <img
                src="/images/founder.jpg"
                alt="Founder of Lighthouse Web Design"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="tag">Founder-run · Based in Cyprus</div>
            </div>

            <div className="story-copy">
              <p className="eyebrow">How It Started</p>
              <h2 className="reveal">Every business deserves a fair shot online.</h2>
              <div style={{ height: "26px" }}></div>
              <p className="reveal">
                <strong>Lighthouse Web Design started with a simple frustration:</strong> too many small,
                family-run businesses were being quoted eye-watering prices for a basic website, or handed a
                generic template that did nothing to earn their customers&apos; trust.
              </p>
              <p className="reveal">
                Being a one-person, hands-on studio means there&apos;s no account manager, no outsourcing, no
                corporate layers between you and the person actually building your site. When you get in
                touch, you&apos;re talking directly to the person designing, coding and looking after your
                website — from the first message to years down the line.
              </p>
              <p className="reveal">
                Based in Cyprus and working with businesses across Europe and the Middle East, the approach
                stays the same wherever a client is based: listen first, design second, and never let good
                work become something only big businesses can afford.
              </p>
              <div className="signoff reveal">
                <span className="mark">L</span>
                <div>
                  Lighthouse Web Design
                  <span>Founder &amp; Web Designer</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="values">
          <div className="wrap">
            <div className="head reveal">
              <p className="eyebrow">What Guides Us</p>
              <h2>The principles behind every project.</h2>
              <p>These aren&apos;t slogans on a wall — they&apos;re the reason a solo studio can compete with agencies twenty times the size.</p>
            </div>

            <div className="value-grid">
              <div className="value-card reveal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
                </svg>
                <h3>Honesty First</h3>
                <p>Clear pricing, clear timelines, no surprise invoices. What we quote is what you pay.</p>
              </div>
              <div className="value-card reveal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.8 8.6c0 5.4-8.8 10.4-8.8 10.4S3.2 14 3.2 8.6a4.6 4.6 0 0 1 8.8-1.8 4.6 4.6 0 0 1 8.8 1.8Z" />
                </svg>
                <h3>Family-Run Care</h3>
                <p>You&apos;re never a ticket number. Every client gets direct, personal attention — before launch and long after.</p>
              </div>
              <div className="value-card reveal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M15.5 8.5l-2 5-5 2 2-5 5-2Z" />
                </svg>
                <h3>Quality Without Compromise</h3>
                <p>Premium design and clean code, held to the same standard whether the budget is modest or generous.</p>
              </div>
              <div className="value-card reveal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
                <h3>Built To Fit Your Budget</h3>
                <p>Flexible packages so cost is never the reason a great business misses out on a great website.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROMISE / AFFORDABILITY */}
        <section className="promise">
          <div className="wrap promise-grid">
            <div className="promise-copy">
              <p className="eyebrow">Our Promise</p>
              <h2 className="reveal">Premium doesn&apos;t have to mean expensive.</h2>
              <div style={{ height: "20px" }}></div>
              <p className="reveal">
                Every package is built around the same idea: a genuinely premium website, priced so it
                actually fits a small or family-run business&apos;s budget — not a big agency&apos;s.
              </p>
              <p className="reveal">
                Packages start from a straightforward one-time setup with an affordable monthly plan that
                covers hosting, security and ongoing changes — so your site keeps working for you long after
                it goes live, without a second designer bill.
              </p>
              <div className="chip-list">
                <div className="chip reveal">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>No hidden fees, ever</span>
                </div>
                <div className="chip reveal">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Packages from €440, plans for every stage</span>
                </div>
                <div className="chip reveal">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Hosting, support and edits included monthly</span>
                </div>
              </div>
            </div>

            <div className="promise-panel reveal">
              <div className="promise-stat">
                <b>€440</b>
                <span>One-time setup to get a new business online, fully supported</span>
              </div>
              <div className="promise-stat">
                <b>3</b>
                <span>Simple package tiers — start small, upgrade whenever you&apos;re ready</span>
              </div>
              <div className="promise-stat">
                <b>100%</b>
                <span>Ownership of your website and its content, always</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="wrap cta-inner">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Let&apos;s Talk</p>
            <h2 className="reveal">Ready to build something that feels like you?</h2>
            <p className="reveal">
              No sales pitch, no jargon — just an honest conversation about your business and what a website
              should actually do for it.
            </p>
            <div className="hero-actions">
              <a href="/contact" className="btn btn-primary">Start My Website →</a>
              <a href="/services" className="btn btn-ghost">View Packages</a>
            </div>
          </div>
        </section>
      </main>

      <MainFooter />
    </>
  );
}
