"use client";

import { motion } from "framer-motion";

const websites = [
  {
    title: "Aurelia Diamonds",
    url: "https://aurelia-diamonds-vvs1.vercel.app/",
    description:
      "Luxury jewellery ecommerce experience with premium visuals, cinematic branding and an elegant customer journey.",
  },
  {
    title: "North Cyprus University Portal",
    url: "https://cyprus-uni-portal.vercel.app/",
    description:
      "A modern student-focused university platform designed to help users discover education opportunities.",
  },
  {
    title: "Nox Botanica",
    url: "https://nox-botanica.vercel.app/",
    description:
      "A luxury botanical brand experience combining immersive storytelling with premium design.",
  },
];

export default function PortfolioShowcase() {
  return (
    <section className="min-h-screen bg-black text-white py-24 px-6">

      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center mb-24">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-white/60"
        >
          Designed and developed by Lighthouse Web Design.
        </motion.p>

      </div>


      {/* PROJECT SHOWCASE */}
      <div className="max-w-7xl mx-auto">

        {websites.map((site, index) => (

          <motion.section
            key={site.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >

            <div className="mb-8">

              <h2 className="text-3xl md:text-5xl font-semibold">
                {site.title}
              </h2>

              <p className="mt-4 text-white/60 max-w-3xl">
                {site.description}
              </p>

            </div>


            {/* DEVICE FRAME */}
            <div className="
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              bg-zinc-950
              shadow-2xl
            ">

              <div className="
                h-8
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
                  h-[700px]
                  md:h-[850px]
                  border-0
                "
              />

            </div>


            <div className="mt-6 text-sm text-white/40">
              Live website experience • React • Vercel Deployment • Responsive Design
            </div>


          </motion.section>

        ))}

      </div>


      {/* FOOTER */}
      <footer className="text-center mt-20 text-white/40 text-sm">
        Designed by Lighthouse Web Design
      </footer>


    </section>
  );
}