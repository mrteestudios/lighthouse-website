"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const websites = [
  {
    title: "Aurelia Diamonds",
    url: "https://aurelia-diamonds-vvs1.vercel.app/",
    description:
      "Luxury jewellery ecommerce experience with premium visuals, cinematic branding and an elegant customer journey.",
    features: [
      "Advanced CSS animations",
      "Luxury UI/UX design",
      "Responsive mobile-first layout",
      "Smooth scrolling experiences",
      "Premium ecommerce structure",
      "Vercel deployment",
    ],
  },
  {
    title: "North Cyprus University Portal",
    url: "https://cyprus-uni-portal.vercel.app/",
    description:
      "A modern student-focused university platform designed to help users discover education opportunities.",
    features: [
      "React application architecture",
      "Interactive user experience",
      "Modern component design",
      "Responsive layouts",
      "Student-focused UX strategy",
      "Advanced web animations",
    ],
  },
  {
    title: "Nox Botanica",
    url: "https://nox-botanica.vercel.app/",
    description:
      "A luxury botanical brand experience combining immersive storytelling with premium design.",
    features: [
      "Cinematic scrolling effects",
      "Custom CSS styling",
      "Premium brand presentation",
      "Interactive visual sections",
      "Responsive design",
      "Modern web technologies",
    ],
  },
];

export default function PortfolioShowcase() {
  return (
    <section
  className="min-h-screen text-white py-32 px-6 bg-cover bg-center bg-fixed"
  style={{
    backgroundImage:
      "linear-gradient(rgba(2,6,12,0.85), rgba(2,6,12,0.95)), url('/lighthouse-bg.jpg')",
  }}
>

      <div className="max-w-6xl mx-auto text-center mb-24">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Our Portfolio
        </motion.h1>

        <p className="mt-6 text-white/60 text-lg">
          Award-style digital experiences designed by Lighthouse Web Design.
        </p>

      </div>


      {websites.map((site) => (

        <motion.section
          key={site.title}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-40"
        >

          <div className="grid md:grid-cols-2 gap-10 items-start mb-12">

            <div>

              <h2 className="text-4xl md:text-5xl font-semibold">
                {site.title}
              </h2>

              <p className="mt-5 text-white/60 leading-relaxed">
                {site.description}
              </p>


              <div className="mt-8">

                <h3 className="text-sm tracking-[0.3em] uppercase text-[#f5d08b] mb-5">
                  Features
                </h3>


                <ul className="space-y-3">

                  {site.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-white/70"
                    >
                      <span className="text-[#f5d08b]">
                        ✓
                      </span>

                      {feature}

                    </li>
                  ))}

                </ul>

              </div>


              <Link
                href={site.url}
                target="_blank"
                className="
                inline-flex
                mt-10
                px-10
                py-4
                rounded-full
                border
                border-[#f5d08b]
                text-[#f5d08b]
                font-semibold
                tracking-widest
                text-sm
                hover:bg-[#f5d08b]
                hover:text-black
                transition-all
                duration-300
                "
              >
                VIEW LIVE PROJECT
              </Link>


            </div>


          </div>


          <div className="
            rounded-3xl
            overflow-hidden
            border
            border-white/10
            bg-zinc-950
            shadow-2xl
          ">

            <div className="
              h-10
              bg-white/5
              flex
              items-center
              gap-2
              px-5
            ">
              <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
            </div>


            <iframe
              src={site.url}
              title={site.title}
              loading="lazy"
              className="
              w-full
              h-[750px]
              md:h-[900px]
              border-0
              "
            />

          </div>


        </motion.section>

      ))}


      <footer className="text-center text-white/40 mt-20">
        Designed by Lighthouse Web Design
      </footer>


    </section>
  );
}