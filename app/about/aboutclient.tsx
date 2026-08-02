"use client";

import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Lighthouse Web Design | Family-Run Web Design Studio",
  description:
    "Learn the story behind Lighthouse Web Design, a family-run web design studio creating premium websites for businesses across Europe and the Middle East.",
  keywords: [
    "Lighthouse Web Design",
    "About Lighthouse",
    "Family-run web design",
    "Web designer Cyprus",
    "Professional website design",
  ],
  openGraph: {
    title: "About Lighthouse Web Design",
    description:
      "Meet the founder and discover the story behind Lighthouse Web Design.",
    images: ["/images/hero-lighthouse.jpg"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}