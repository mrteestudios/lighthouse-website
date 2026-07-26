"use client";

import { motion } from "framer-motion";

const websites = [
  {
    title: "Aurelia Diamonds",
    url: "https://aurelia-diamonds-vvs1.vercel.app/",
    description:
      "Luxury jewellery ecommerce experience with premium visuals and cinematic branding.",
  },
  {
    title: "North Cyprus University Portal",
    url: "https://cyprus-uni-portal.vercel.app/",
    description:
      "A modern AI-powered university discovery platform built for students.",
  },
  {
    title: "Nox Botanica",
    url: "https://nox-botanica.vercel.app/",
    description:
      "Luxury botanical brand experience with immersive storytelling.",
  },
];

export default function PortfolioShowcase() {
  return (
    <section className="min-h-screen bg-black text-white py-24 px-6">

      <div className="max-w-6xl mx-auto text-center mb-20">

        <motion.h1
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          className="text-6xl font-bold"
        >
          Portfolio
        </motion.h1>

        <p className="mt-6 text-xl text-gray-400">
          Designed and developed by Lighthouse Web Design.
        </p>

      </div>


      {websites.map((site,index)=>(

        <motion.div
          key={site.title}
          initial={{opacity:0,y:80}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.8}}
          className="max-w-7xl mx-auto mb-40"
        >

          <h2 className="text-4xl font-semibold mb-4">
            {site.title}
          </h2>


          <p className="text-gray-400 mb-8">
            {site.description}
          </p>


          <div className="
          rounded-3xl
          overflow-hidden
          border
          border-white/10
          shadow-2xl
          bg-zinc-900
          ">

            <iframe
              src={site.url}
              title={site.title}
              loading="lazy"
              className="
              w-full
              h-[850px]
              border-0
              "
            />

          </div>

        </motion.div>

      ))}


      <footer className="text-center text-gray-500 mt-20">
        Designed by Lighthouse Web Design
      </footer>


    </section>
  );
}
