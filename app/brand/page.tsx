"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/optics/card";
import { Badge } from "@/components/optics/badge";
import { GridContainer, GridRow, GridItem } from "@/components/optics/grid";
import { Check, Copy } from "lucide-react";

/* ---- Animation Variants ---- */
const ease = [0.16, 1, 0.3, 1] as const;

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

/* ---- Copy Hex Component ---- */
function CopyHex({ hex, className = "" }: { hex: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={copy}
      className={`inline-flex items-center gap-1.5 font-mono text-xs transition-colors hover:text-gold ${className}`}
    >
      {copied ? (
        <Check className="w-3 h-3 text-jade" />
      ) : (
        <Copy className="w-3 h-3 opacity-40" />
      )}
      {hex}
    </button>
  );
}

/* ---- V Mark Component ---- */
function VMark({
  size = 40,
  className = "",
  fill = "#C9A84C",
}: {
  size?: number;
  className?: string;
  fill?: string;
}) {
  const h = (size * 100) / 80;
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 80 100"
      fill="none"
      className={className}
    >
      <polygon points="2,0 28,0 44,100 36,100" fill={fill} />
      <polygon points="52,0 78,0 44,100 36,100" fill={fill} opacity="0.35" />
    </svg>
  );
}

/* ---- Color Data ---- */
const primaryColors = [
  { name: "Navy", hex: "#0A1628", text: "white", desc: "Primary dark" },
  { name: "Gold", hex: "#C9A84C", text: "#0A1628", desc: "Primary accent" },
  { name: "Deep Space", hex: "#060D18", text: "white", desc: "Background" },
  { name: "Pearl", hex: "#E8E6E1", text: "#0A1628", desc: "Body text" },
  { name: "Silver", hex: "#8B8D94", text: "white", desc: "Secondary text" },
  { name: "Graphite", hex: "#1A1A2E", text: "white", desc: "Cards/surfaces" },
];

const extendedColors = [
  { name: "Light Gold", hex: "#E8D5A0", text: "#0A1628" },
  { name: "Dark Gold", hex: "#8B7332", text: "white" },
  { name: "Navy 80", hex: "#0E2240", text: "white" },
  { name: "Navy 60", hex: "#1A3A5C", text: "white" },
  { name: "Navy 40", hex: "#3D5A80", text: "white" },
  { name: "Warm Gray", hex: "#D4D0C8", text: "#0A1628" },
];

const functionalColors = [
  { name: "Jade", hex: "#10B981", text: "white", use: "Success" },
  { name: "Crimson", hex: "#EF4444", text: "white", use: "Error" },
  { name: "Amber", hex: "#F59E0B", text: "#0A1628", use: "Warning" },
  { name: "Sky", hex: "#3B82F6", text: "white", use: "Info" },
];

/* ---- Section Component ---- */
function Section({
  label,
  title,
  children,
  className = "",
}: {
  label: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-20 md:py-28 px-6 md:px-12 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4"
          >
            {label}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-pearl tracking-tight mb-12"
          >
            {title}
          </motion.h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

/* ---- Main Brand Page ---- */
export default function BrandPage() {
  return (
    <main className="pt-20">
      {/* ---- Hero ---- */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="text-gold border-gold/20 mb-6">
                Brand Standards
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-pearl tracking-tight leading-tight"
            >
              Paxvio Brand
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-5 text-silver text-lg max-w-2xl leading-relaxed"
            >
              The visual identity of Paxvio. Luxury geometric meets precision
              engineering. Every element designed to convey trust, competence,
              and ambition.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ---- Color Palette ---- */}
      <Section label="Color Palette" title="Primary Colors">
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {primaryColors.map((color) => (
            <motion.div key={color.hex} variants={fadeInUp}>
              <div
                className="color-swatch rounded-xl border border-white/[0.06] overflow-hidden"
                style={{ backgroundColor: color.hex }}
              >
                <div className="p-5 min-h-[120px] flex flex-col justify-end">
                  <p
                    className="font-semibold text-sm"
                    style={{ color: color.text }}
                  >
                    {color.name}
                  </p>
                  <p
                    className="text-xs mt-0.5 opacity-60"
                    style={{ color: color.text }}
                  >
                    {color.desc}
                  </p>
                  <CopyHex hex={color.hex} className="mt-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extended Palette */}
        <motion.div variants={fadeInUp} className="mt-12">
          <h3 className="text-pearl text-sm font-semibold mb-4 tracking-wide">
            Extended Palette
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {extendedColors.map((color) => (
              <div
                key={color.hex}
                className="rounded-lg border border-white/[0.06] overflow-hidden"
                style={{ backgroundColor: color.hex }}
              >
                <div className="p-3 min-h-[80px] flex flex-col justify-end">
                  <p
                    className="font-medium text-[11px]"
                    style={{ color: color.text }}
                  >
                    {color.name}
                  </p>
                  <CopyHex hex={color.hex} className="mt-1" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Functional Colors */}
        <motion.div variants={fadeInUp} className="mt-12">
          <h3 className="text-pearl text-sm font-semibold mb-4 tracking-wide">
            Functional Colors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {functionalColors.map((color) => (
              <div
                key={color.hex}
                className="rounded-lg border border-white/[0.06] overflow-hidden"
                style={{ backgroundColor: color.hex }}
              >
                <div className="p-4 min-h-[80px] flex flex-col justify-end">
                  <p
                    className="font-medium text-xs"
                    style={{ color: color.text }}
                  >
                    {color.name}
                  </p>
                  <p
                    className="text-[10px] mt-0.5 opacity-60"
                    style={{ color: color.text }}
                  >
                    {color.use}
                  </p>
                  <CopyHex hex={color.hex} className="mt-1" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Color Usage Ratio */}
        <motion.div variants={fadeInUp} className="mt-12">
          <h3 className="text-pearl text-sm font-semibold mb-4 tracking-wide">
            Usage Ratio
          </h3>
          <div className="flex rounded-lg overflow-hidden h-10">
            <div
              className="flex items-center justify-center text-[10px] font-semibold text-pearl"
              style={{ backgroundColor: "#0A1628", width: "60%" }}
            >
              Navy 60%
            </div>
            <div
              className="flex items-center justify-center text-[10px] font-semibold text-navy"
              style={{ backgroundColor: "#E8E6E1", width: "25%" }}
            >
              Pearl 25%
            </div>
            <div
              className="flex items-center justify-center text-[10px] font-semibold text-navy"
              style={{ backgroundColor: "#C9A84C", width: "10%" }}
            >
              Gold
            </div>
            <div
              className="flex items-center justify-center text-[10px] font-semibold text-pearl"
              style={{ backgroundColor: "#1A3A5C", width: "5%" }}
            >
              Acc
            </div>
          </div>
        </motion.div>
      </Section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ---- Typography ---- */}
      <Section label="Typography" title="Satoshi — Our Typeface">
        <motion.div variants={staggerContainer}>
          <motion.div
            variants={fadeInUp}
            className="border-l-2 border-gold pl-6 mb-10"
          >
            <p className="text-4xl md:text-5xl font-bold text-pearl tracking-tight">
              The quick brown fox
            </p>
            <p className="text-2xl md:text-3xl font-medium text-pearl/80 mt-2">
              jumps over the lazy dog
            </p>
            <p className="text-base text-silver mt-2">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <Card decorations>
              <CardHeader>
                <CardTitle className="text-pearl">Font Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-pearl text-sm font-semibold">
                      Primary
                    </span>
                    <code className="text-gold/70 text-xs bg-gold/5 px-2 py-1 rounded">
                      Satoshi
                    </code>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-pearl text-sm font-semibold">
                      Monospace
                    </span>
                    <code className="text-gold/70 text-xs bg-gold/5 px-2 py-1 rounded">
                      JetBrains Mono
                    </code>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-pearl text-sm font-semibold">
                      Fallback
                    </span>
                    <code className="text-gold/70 text-xs bg-gold/5 px-2 py-1 rounded">
                      -apple-system
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card decorations>
              <CardHeader>
                <CardTitle className="text-pearl">Weight Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { weight: "Bold", value: "700", use: "Headlines" },
                    { weight: "Semibold", value: "600", use: "Subheads" },
                    { weight: "Medium", value: "500", use: "Wordmark, CTAs" },
                    { weight: "Regular", value: "400", use: "Body text" },
                  ].map((w) => (
                    <div
                      key={w.value}
                      className="flex justify-between items-center"
                    >
                      <span
                        className="text-pearl text-sm"
                        style={{ fontWeight: parseInt(w.value) }}
                      >
                        {w.weight} ({w.value})
                      </span>
                      <span className="text-silver text-xs">{w.use}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-5">
            <Card decorations>
              <CardHeader>
                <CardTitle className="text-pearl">Wordmark Spec</CardTitle>
                <CardDescription className="text-silver">
                  The &ldquo;paxvio&rdquo; wordmark uses Satoshi Medium, all lowercase, with specific tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-navy/50 rounded-lg p-6 flex items-center justify-center">
                  <span className="text-3xl font-medium tracking-[0.14em] text-pearl">
                    paxvio
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <p className="text-gold text-xs font-semibold">Weight</p>
                    <p className="text-pearl text-sm mt-0.5">Medium (500)</p>
                  </div>
                  <div>
                    <p className="text-gold text-xs font-semibold">Tracking</p>
                    <p className="text-pearl text-sm mt-0.5">+10 to +20</p>
                  </div>
                  <div>
                    <p className="text-gold text-xs font-semibold">Case</p>
                    <p className="text-pearl text-sm mt-0.5">All lowercase</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ---- Logo System ---- */}
      <Section label="Logo System" title="The V Mark">
        <motion.div variants={staggerContainer}>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {/* Primary */}
            <Card decorations className="flex flex-col items-center justify-center py-10">
              <CardContent className="flex flex-col items-center">
                <div className="bg-deep-space rounded-lg p-6 flex items-center justify-center mb-3">
                  <VMark size={48} />
                </div>
                <p className="text-pearl text-xs font-semibold">Primary</p>
                <p className="text-silver text-[10px]">Dark backgrounds</p>
              </CardContent>
            </Card>

            {/* Light Mode */}
            <Card decorations className="flex flex-col items-center justify-center py-10">
              <CardContent className="flex flex-col items-center">
                <div className="bg-off-white rounded-lg p-6 flex items-center justify-center mb-3">
                  <VMark size={48} fill="#0A1628" />
                </div>
                <p className="text-pearl text-xs font-semibold">Light Mode</p>
                <p className="text-silver text-[10px]">Light backgrounds</p>
              </CardContent>
            </Card>

            {/* Icon Only */}
            <Card decorations className="flex flex-col items-center justify-center py-10">
              <CardContent className="flex flex-col items-center">
                <div className="bg-navy rounded-lg p-6 flex items-center justify-center mb-3">
                  <VMark size={48} />
                </div>
                <p className="text-pearl text-xs font-semibold">Icon Only</p>
                <p className="text-silver text-[10px]">Favicons, avatars</p>
              </CardContent>
            </Card>

            {/* Monochrome */}
            <Card decorations className="flex flex-col items-center justify-center py-10">
              <CardContent className="flex flex-col items-center">
                <div className="bg-pearl rounded-lg p-6 flex items-center justify-center mb-3">
                  <VMark size={48} fill="#0A1628" />
                </div>
                <p className="text-pearl text-xs font-semibold">Monochrome</p>
                <p className="text-silver text-[10px]">Print, merch</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Logo Story */}
          <motion.div variants={fadeInUp} className="mt-10">
            <Card decorations>
              <CardHeader>
                <CardTitle className="text-pearl">The Mark</CardTitle>
                <CardDescription className="text-silver">
                  The V mark is composed of two converging blades. The left blade is
                  full-opacity gold; the right blade is 35% opacity — representing the
                  visible and the structural, the product and the infrastructure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-gold text-xs font-semibold mb-1">Concept</p>
                    <p className="text-silver text-sm leading-relaxed">
                      Convergence point — all divisions meeting at a single apex
                    </p>
                  </div>
                  <div>
                    <p className="text-gold text-xs font-semibold mb-1">Construction</p>
                    <p className="text-silver text-sm leading-relaxed">
                      Two trapezoids, viewBox 80&times;100, meeting at point (40, 100)
                    </p>
                  </div>
                  <div>
                    <p className="text-gold text-xs font-semibold mb-1">Clear Space</p>
                    <p className="text-silver text-sm leading-relaxed">
                      Minimum padding equal to 25% of mark height on all sides
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ---- Apparel ---- */}
      <Section label="Apparel" title="Uniform Program">
        <motion.div variants={staggerContainer}>
          {/* Polo Colors */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-pearl text-sm font-semibold mb-5 tracking-wide">
              Polo Colors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  name: "Midnight Navy",
                  hex: "#0A1628",
                  logo: "#C9A84C",
                  primary: true,
                },
                {
                  name: "Charcoal",
                  hex: "#2C2C2C",
                  logo: "#C9A84C",
                  primary: false,
                },
                {
                  name: "Pearl White",
                  hex: "#E8E6E1",
                  logo: "#0A1628",
                  primary: false,
                },
                {
                  name: "Gold Accent",
                  hex: "#C9A84C",
                  logo: "#0A1628",
                  primary: false,
                },
              ].map((polo) => (
                <Card key={polo.name} decorations>
                  <CardContent className="pt-4">
                    <div
                      className="rounded-lg h-28 flex items-center justify-center mb-3 border border-white/[0.06]"
                      style={{ backgroundColor: polo.hex }}
                    >
                      <VMark size={28} fill={polo.logo} />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-pearl text-xs font-medium">
                        {polo.name}
                      </p>
                      {polo.primary && (
                        <Badge variant="outline" className="text-[9px] text-gold border-gold/20">
                          Primary
                        </Badge>
                      )}
                    </div>
                    <CopyHex hex={polo.hex} className="mt-1 text-silver" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Hat Styles */}
          <motion.div variants={fadeInUp} className="mt-10">
            <h3 className="text-pearl text-sm font-semibold mb-5 tracking-wide">
              Hat Program
            </h3>
            <GridContainer cols={4} mobileCols={2} gap={0} border>
              <GridRow>
                {[
                  { name: "Structured Navy", type: "Richardson 112", mesh: true },
                  { name: "Leather Patch", type: "Richardson 112PFP", mesh: true },
                  { name: "Snapback", type: "Flexfit 110F", mesh: false },
                  { name: "Dad Hat", type: "Yupoong 6245", mesh: false },
                ].map((hat, i) => (
                  <GridItem
                    key={hat.name}
                    span={1}
                    decorationTopLeft={i === 0}
                    decorationTopRight={i === 3}
                    decorationBottomLeft={i === 0}
                    decorationBottomRight={i === 3}
                    className="py-6 px-4"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-navy border border-gold/10 mx-auto flex items-center justify-center mb-3">
                        <VMark size={14} />
                      </div>
                      <p className="text-pearl text-xs font-semibold">
                        {hat.name}
                      </p>
                      <p className="text-silver text-[10px] mt-0.5">
                        {hat.type}
                      </p>
                      {hat.mesh && (
                        <Badge
                          variant="outline"
                          className="text-[9px] mt-2 text-silver border-silver/20"
                        >
                          Mesh Back
                        </Badge>
                      )}
                    </div>
                  </GridItem>
                ))}
              </GridRow>
            </GridContainer>
          </motion.div>

          {/* Rules */}
          <motion.div variants={fadeInUp} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card decorations>
              <CardHeader>
                <CardTitle className="text-jade text-sm">Always</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "V mark on left chest (polos) or front center (hats)",
                    "Gold embroidery on dark fabrics",
                    "Navy embroidery on light fabrics",
                    "Maintain clear space around mark",
                  ].map((rule) => (
                    <li
                      key={rule}
                      className="flex items-start gap-2 text-silver text-xs"
                    >
                      <Check className="w-3 h-3 text-jade mt-0.5 shrink-0" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card decorations>
              <CardHeader>
                <CardTitle className="text-crimson text-sm">Never</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Stretch, rotate, or distort the V mark",
                    "Place on busy or patterned backgrounds",
                    "Use colors outside the brand palette",
                    "Scale below 12mm in any dimension",
                  ].map((rule) => (
                    <li
                      key={rule}
                      className="flex items-start gap-2 text-silver text-xs"
                    >
                      <span className="text-crimson mt-0.5 shrink-0 text-[10px]">
                        &times;
                      </span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ---- Business Cards ---- */}
      <Section label="Stationery" title="Business Cards">
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Front */}
          <motion.div variants={fadeInUp}>
            <p className="text-silver text-xs mb-3 tracking-wide uppercase">
              Front
            </p>
            <div className="bg-navy rounded-xl border border-gold/10 p-8 aspect-[1.75/1] flex flex-col justify-between shadow-2xl">
              <div className="flex items-center gap-2.5">
                <VMark size={20} />
                <span className="text-pearl text-xs font-medium tracking-[0.1em]">
                  paxvio
                </span>
              </div>
              <div>
                <p className="text-pearl text-sm font-semibold">Berlin</p>
                <p className="text-silver text-xs mt-0.5">Founder & CEO</p>
              </div>
            </div>
          </motion.div>

          {/* Back */}
          <motion.div variants={fadeInUp}>
            <p className="text-silver text-xs mb-3 tracking-wide uppercase">
              Back
            </p>
            <div className="bg-navy rounded-xl border border-gold/10 p-8 aspect-[1.75/1] flex flex-col justify-between shadow-2xl">
              <div className="flex justify-end">
                <VMark size={16} className="opacity-20" />
              </div>
              <div className="space-y-1.5">
                <p className="text-pearl text-xs">hello@paxvio.com</p>
                <p className="text-silver text-xs">paxvio.com</p>
                <div className="h-px bg-gradient-to-r from-gold/20 to-transparent w-16 mt-2" />
                <p className="text-gold/40 text-[10px] tracking-[0.15em] uppercase pt-1">
                  Built to trust
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ---- UI Components ---- */}
      <Section label="Components" title="UI Kit Preview">
        <motion.div variants={staggerContainer}>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {/* Buttons */}
            <Card decorations>
              <CardHeader>
                <CardTitle className="text-pearl">Buttons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <a className="px-5 py-2 text-xs font-semibold text-deep-space bg-gradient-to-b from-light-gold to-gold rounded-lg">
                    Primary
                  </a>
                  <a className="px-5 py-2 text-xs font-medium text-gold border border-gold/25 rounded-lg">
                    Secondary
                  </a>
                  <a className="px-5 py-2 text-xs font-medium text-silver hover:text-pearl rounded-lg">
                    Ghost
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Status Badges */}
            <Card decorations>
              <CardHeader>
                <CardTitle className="text-pearl">Status Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="bg-jade/15 text-jade border-jade/20 text-[10px]"
                  >
                    Revenue-generating
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-sky/15 text-sky border-sky/20 text-[10px]"
                  >
                    In development
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-amber/15 text-amber border-amber/20 text-[10px]"
                  >
                    Vision live
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-silver/15 text-silver border-silver/20 text-[10px]"
                  >
                    Future
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ---- Quick Reference ---- */}
      <Section label="Reference" title="Quick Guide">
        <motion.div variants={fadeInUp}>
          <Card decorations>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-gold text-xs font-semibold mb-2">Font</p>
                  <p className="text-pearl text-sm">Satoshi</p>
                  <p className="text-silver text-xs mt-0.5">
                    400, 500, 600, 700
                  </p>
                </div>
                <div>
                  <p className="text-gold text-xs font-semibold mb-2">
                    Primary Colors
                  </p>
                  <div className="flex gap-1.5">
                    <div className="w-6 h-6 rounded bg-navy border border-white/10" />
                    <div className="w-6 h-6 rounded bg-gold" />
                    <div className="w-6 h-6 rounded bg-pearl" />
                  </div>
                </div>
                <div>
                  <p className="text-gold text-xs font-semibold mb-2">Logo</p>
                  <p className="text-pearl text-sm">V Mark + Wordmark</p>
                  <p className="text-silver text-xs mt-0.5">
                    SVG, always paired
                  </p>
                </div>
                <div>
                  <p className="text-gold text-xs font-semibold mb-2">Voice</p>
                  <p className="text-pearl text-sm">Direct. Confident.</p>
                  <p className="text-silver text-xs mt-0.5">
                    Never salesy
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Section>
    </main>
  );
}
