import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Guidelines | Paxvio",
  description:
    "Paxvio brand standards: logo, color palette, typography, and visual identity guidelines for the custom product infrastructure company.",
  openGraph: {
    title: "Brand Guidelines | Paxvio",
    description:
      "Paxvio brand standards: logo, color palette, typography, and visual identity guidelines.",
  },
};

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
