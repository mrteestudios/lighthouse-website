import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Lighthouse Web Design",
  description:
    "Lighthouse Web Design is a one-person studio built on honesty and craftsmanship — premium websites for local businesses, priced to fit every budget.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
