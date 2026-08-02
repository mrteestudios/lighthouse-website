import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Lighthouse Web Design | Family-Run Web Design Studio",
  description:
    "Learn the story behind Lighthouse Web Design, a family-run web design studio creating premium websites for businesses across Europe and the Middle East.",
};

export default function AboutPage() {
  return <AboutClient />;
}