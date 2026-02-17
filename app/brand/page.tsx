"use client";

import { useEffect, useRef, useState } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    const el = ref.current;
    if (el) el.querySelectorAll(".reveal").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function CopyHex({ hex, dark = false }: { hex: string; dark?: boolean }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(hex);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className={`font-mono text-xs tracking-wide transition-colors ${
        dark ? "text-graphite/60 hover:text-graphite" : "text-white/60 hover:text-white"
      }`}
    >
      {copied ? "Copied!" : hex}
    </button>
  );
}

const primaryColors = [
  { name: "Midnight Navy", hex: "#0A1628", rgb: "10, 22, 40", dark: false },
  { name: "Warm Gold", hex: "#C9A84C", rgb: "201, 168, 76", dark: true },
  { name: "Deep Space", hex: "#060D18", rgb: "6, 13, 24", dark: false },
  { name: "Off-White", hex: "#F8F7F4", rgb: "248, 247, 244", dark: true },
  { name: "Pearl", hex: "#E8E6E1", rgb: "232, 230, 225", dark: true },
  { name: "Graphite", hex: "#1A1A2E", rgb: "26, 26, 46", dark: false },
];

const functionalColors = [
  { name: "Jade", hex: "#10B981", purpose: "Success" },
  { name: "Crimson", hex: "#EF4444", purpose: "Error" },
  { name: "Amber", hex: "#F59E0B", purpose: "Warning" },
  { name: "Sky Blue", hex: "#3B82F6", purpose: "Info" },
];

const polos = [
  { name: "Primary", body: "#0A1628", bodyName: "Navy", logo: "#C9A84C", logoName: "Gold V mark" },
  { name: "Secondary", body: "#FFFFFF", bodyName: "White", logo: "#0A1628", logoName: "Navy V mark + wordmark" },
  { name: "Executive", body: "#000000", bodyName: "Black", logo: "#C9A84C", logoName: "Gold V mark" },
  { name: "Casual", body: "#B0B0B0", bodyName: "Heather Gray", logo: "#0A1628", logoName: "Navy V mark + wordmark" },
];

const hats = [
  { name: "Primary Trucker", body: "#0A1628", mesh: "#FFFFFF", logo: "#C9A84C" },
  { name: "Secondary Trucker", body: "#FFFFFF", mesh: "#0A1628", logo: "#0A1628" },
  { name: "Dad Hat", body: "#0A1628", mesh: null, logo: "#C9A84C" },
  { name: "Beanie", body: "#0A1628", mesh: null, logo: "#C9A84C" },
];

export default function BrandPage() {
  const mainRef = useReveal();

  return (
    <main ref={mainRef} className="pt-24">
      {/* ==================== HERO ==================== */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Brand Standards
            </p>
          </div>
          <h1 className="reveal reveal-delay-1 text-4xl md:text-6xl font-bold text-pearl tracking-tight">
            Paxvio Identity
          </h1>
          <p className="reveal reveal-delay-2 mt-6 text-silver text-lg max-w-2xl leading-relaxed">
            Everything a designer needs to represent Paxvio. Colors, typography,
            logo system, uniforms, and collateral — all in one place.
          </p>
          <p className="reveal reveal-delay-3 mt-4 text-silver/50 text-sm">
            This page is a living brand guide. Download specs, copy hex codes, and
            reference everything from polo colors to business card layouts.
          </p>
        </div>
      </section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ==================== COLORS ==================== */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              01
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-pearl tracking-tight mb-4">
              Color Palette
            </h2>
            <p className="text-silver text-base max-w-xl mb-12">
              Navy is the foundation. Gold is the accent. Use gold sparingly — 10%
              of the palette — for maximum impact.
            </p>
          </div>

          {/* Primary Colors */}
          <p className="reveal text-pearl text-xs font-semibold tracking-[0.15em] uppercase mb-6">
            Primary Colors
          </p>
          <div className="reveal reveal-delay-1 grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {primaryColors.map((c) => (
              <div
                key={c.hex}
                className="color-swatch min-h-[140px] flex flex-col justify-between"
                style={{ backgroundColor: c.hex }}
              >
                <span className={`text-sm font-medium ${c.dark ? "text-graphite" : "text-pearl"}`}>
                  {c.name}
                </span>
                <div className="flex flex-col gap-1">
                  <CopyHex hex={c.hex} dark={c.dark} />
                  <span className={`text-[10px] ${c.dark ? "text-graphite/40" : "text-white/30"}`}>
                    RGB {c.rgb}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Functional Colors */}
          <p className="reveal text-pearl text-xs font-semibold tracking-[0.15em] uppercase mb-6">
            Functional Colors
          </p>
          <div className="reveal reveal-delay-1 grid grid-cols-2 md:grid-cols-4 gap-4">
            {functionalColors.map((c) => (
              <div
                key={c.hex}
                className="color-swatch min-h-[100px] flex flex-col justify-between"
                style={{ backgroundColor: c.hex }}
              >
                <span className="text-sm font-medium text-white">{c.purpose}</span>
                <CopyHex hex={c.hex} />
              </div>
            ))}
          </div>

          {/* Usage Ratio */}
          <div className="reveal mt-12 p-6 rounded-xl bg-navy-80/50 border border-white/[0.04]">
            <p className="text-pearl text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Usage Ratio
            </p>
            <div className="flex h-6 rounded-full overflow-hidden">
              <div className="bg-navy" style={{ width: "60%" }} title="Navy 60%" />
              <div className="bg-off-white" style={{ width: "25%" }} title="White 25%" />
              <div className="bg-gold" style={{ width: "10%" }} title="Gold 10%" />
              <div className="bg-sky" style={{ width: "5%" }} title="Functional 5%" />
            </div>
            <div className="flex justify-between mt-3 text-xs text-silver">
              <span>Navy 60%</span>
              <span>White 25%</span>
              <span>Gold 10%</span>
              <span>Other 5%</span>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ==================== TYPOGRAPHY ==================== */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              02
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-pearl tracking-tight mb-4">
              Typography
            </h2>
            <p className="text-silver text-base max-w-xl mb-12">
              Satoshi by Indian Type Foundry. Free from Fontshare. Geometric,
              precise, confident — matches the brand perfectly.
            </p>
          </div>

          {/* Specimens */}
          <div className="reveal reveal-delay-1 type-specimen">
            <p className="text-silver text-xs tracking-[0.15em] uppercase mb-2">
              Satoshi Bold — Headlines
            </p>
            <p className="text-pearl text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              The trusted path forward
            </p>
          </div>

          <div className="reveal reveal-delay-2 type-specimen">
            <p className="text-silver text-xs tracking-[0.15em] uppercase mb-2">
              Satoshi Medium — Wordmark
            </p>
            <p className="text-pearl text-3xl font-medium tracking-[0.12em]">
              paxvio
            </p>
          </div>

          <div className="reveal reveal-delay-3 type-specimen">
            <p className="text-silver text-xs tracking-[0.15em] uppercase mb-2">
              Satoshi Regular — Body
            </p>
            <p className="text-silver text-lg leading-relaxed max-w-2xl">
              We build the software that powers custom product businesses — from
              the design tool a customer uses, to the AI that preps their file,
              to the infrastructure that gets it printed and shipped.
            </p>
          </div>

          <div className="reveal reveal-delay-4 type-specimen">
            <p className="text-silver text-xs tracking-[0.15em] uppercase mb-2">
              JetBrains Mono — Code
            </p>
            <p className="text-gold font-mono text-sm leading-relaxed">
              {`const paxvio = { trust: "pax", path: "vio" };`}
            </p>
          </div>

          {/* Font table */}
          <div className="reveal reveal-delay-5 mt-12 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left py-3 text-pearl text-xs tracking-[0.1em] uppercase font-semibold">Use</th>
                  <th className="text-left py-3 text-pearl text-xs tracking-[0.1em] uppercase font-semibold">Font</th>
                  <th className="text-left py-3 text-pearl text-xs tracking-[0.1em] uppercase font-semibold">Weight</th>
                  <th className="text-left py-3 text-pearl text-xs tracking-[0.1em] uppercase font-semibold">Size</th>
                </tr>
              </thead>
              <tbody className="text-silver">
                {[
                  ["Logo wordmark", "Satoshi", "Medium (500)", "Fixed"],
                  ["H1 Headlines", "Satoshi", "Bold (700)", "36-64px"],
                  ["H2 Headlines", "Satoshi", "Bold (700)", "28-36px"],
                  ["Body text", "Satoshi", "Regular (400)", "16-18px"],
                  ["Buttons", "Satoshi", "Medium (500)", "14-16px"],
                  ["Code", "JetBrains Mono", "Regular (400)", "14-16px"],
                ].map(([use, font, weight, size]) => (
                  <tr key={use} className="border-b border-white/[0.03]">
                    <td className="py-3">{use}</td>
                    <td className="py-3">{font}</td>
                    <td className="py-3">{weight}</td>
                    <td className="py-3 font-mono text-xs">{size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ==================== LOGO ==================== */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              03
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-pearl tracking-tight mb-4">
              Logo System
            </h2>
            <p className="text-silver text-base max-w-xl mb-12">
              Two overlapping angular blades forming a V. The gold blade is
              innovation. The navy blade is trust. They converge upward.
            </p>
          </div>

          {/* Logo versions grid */}
          <div className="reveal reveal-delay-1 grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {/* Primary */}
            <div className="bg-navy rounded-xl p-8 flex flex-col items-center justify-center min-h-[160px] border border-white/[0.04]">
              <svg width="40" height="50" viewBox="0 0 80 100" fill="none">
                <polygon points="2,0 28,0 44,100 36,100" fill="#C9A84C" />
                <polygon points="52,0 78,0 44,100 36,100" fill="#C9A84C" opacity="0.35" />
              </svg>
              <span className="text-pearl text-xs font-medium tracking-[0.08em] mt-3">paxvio</span>
              <span className="text-silver/40 text-[10px] mt-2">Primary</span>
            </div>

            {/* Light Mode */}
            <div className="bg-off-white rounded-xl p-8 flex flex-col items-center justify-center min-h-[160px] border border-warm-gray/30">
              <svg width="40" height="50" viewBox="0 0 80 100" fill="none">
                <polygon points="2,0 28,0 44,100 36,100" fill="#0A1628" />
                <polygon points="52,0 78,0 44,100 36,100" fill="#0A1628" opacity="0.35" />
              </svg>
              <span className="text-graphite text-xs font-medium tracking-[0.08em] mt-3">paxvio</span>
              <span className="text-slate text-[10px] mt-2">Light Mode</span>
            </div>

            {/* Icon Only */}
            <div className="bg-navy rounded-xl p-8 flex flex-col items-center justify-center min-h-[160px] border border-white/[0.04]">
              <svg width="48" height="60" viewBox="0 0 80 100" fill="none">
                <polygon points="2,0 28,0 44,100 36,100" fill="#C9A84C" />
                <polygon points="52,0 78,0 44,100 36,100" fill="#C9A84C" opacity="0.35" />
              </svg>
              <span className="text-silver/40 text-[10px] mt-3">Icon Only</span>
            </div>

            {/* Monochrome White */}
            <div className="bg-navy-60 rounded-xl p-8 flex flex-col items-center justify-center min-h-[160px] border border-white/[0.04]">
              <svg width="40" height="50" viewBox="0 0 80 100" fill="none">
                <polygon points="2,0 28,0 44,100 36,100" fill="#FFFFFF" />
                <polygon points="52,0 78,0 44,100 36,100" fill="#FFFFFF" opacity="0.35" />
              </svg>
              <span className="text-white text-xs font-medium tracking-[0.08em] mt-3">paxvio</span>
              <span className="text-white/30 text-[10px] mt-2">Monochrome</span>
            </div>
          </div>

          {/* Logo story */}
          <div className="reveal reveal-delay-2 p-8 rounded-xl bg-navy-80/50 border border-white/[0.04]">
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              The Story Behind the Mark
            </p>
            <p className="text-pearl text-lg leading-relaxed max-w-3xl">
              The mark is two paths converging into one. The gold blade represents
              innovation — the spark, the ambition to build something new. The
              navy blade represents trust — the foundation, the reliability that
              enterprises demand.
            </p>
            <p className="text-silver text-base leading-relaxed max-w-3xl mt-4">
              They meet at a single point — because at Paxvio, that&apos;s exactly what
              we do: we bring together bold technology and trusted infrastructure
              into one platform. The shape reads as a V for Paxvio, and also as a
              checkmark — a symbol of trust and getting it done.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ==================== UNIFORMS ==================== */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              04
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-pearl tracking-tight mb-4">
              Uniforms & Apparel
            </h2>
            <p className="text-silver text-base max-w-xl mb-12">
              Gold logo on dark garments. Navy logo on light garments. V mark only on
              small placements. Mark + wordmark on large placements.
            </p>
          </div>

          {/* Polo Cards */}
          <p className="reveal text-pearl text-xs font-semibold tracking-[0.15em] uppercase mb-6">
            Polo Shirts
          </p>
          <div className="reveal reveal-delay-1 grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {polos.map((polo) => (
              <div
                key={polo.name}
                className="rounded-xl overflow-hidden border border-white/[0.04]"
              >
                {/* Polo visual */}
                <div
                  className="h-32 flex items-center justify-center relative"
                  style={{ backgroundColor: polo.body }}
                >
                  {/* V mark on "chest" */}
                  <div className="absolute top-4 left-4">
                    <svg width="16" height="20" viewBox="0 0 80 100" fill="none">
                      <polygon points="2,0 28,0 44,100 36,100" fill={polo.logo} />
                      <polygon points="52,0 78,0 44,100 36,100" fill={polo.logo} opacity="0.35" />
                    </svg>
                  </div>
                  {/* Polo collar shape */}
                  <div
                    className="w-8 h-4 rounded-b-full absolute top-0"
                    style={{ backgroundColor: polo.body, borderBottom: `2px solid ${polo.logo}20` }}
                  />
                </div>
                <div className="p-4 bg-navy-80/50">
                  <p className="text-pearl text-sm font-medium">{polo.name}</p>
                  <p className="text-silver text-xs mt-1">{polo.bodyName} body</p>
                  <p className="text-gold/60 text-xs mt-1">{polo.logoName}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hat Cards */}
          <p className="reveal text-pearl text-xs font-semibold tracking-[0.15em] uppercase mb-6">
            Headwear
          </p>
          <div className="reveal reveal-delay-1 grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {hats.map((hat) => (
              <div
                key={hat.name}
                className="rounded-xl overflow-hidden border border-white/[0.04]"
              >
                <div
                  className="h-28 flex items-center justify-center relative"
                  style={{ backgroundColor: hat.body }}
                >
                  {/* V mark centered */}
                  <svg width="24" height="30" viewBox="0 0 80 100" fill="none">
                    <polygon points="2,0 28,0 44,100 36,100" fill={hat.logo} />
                    <polygon points="52,0 78,0 44,100 36,100" fill={hat.logo} opacity="0.35" />
                  </svg>
                  {/* Mesh back indicator */}
                  {hat.mesh && (
                    <div
                      className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20"
                      style={{
                        backgroundColor: hat.mesh,
                        backgroundImage:
                          "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 4px)",
                      }}
                    />
                  )}
                </div>
                <div className="p-4 bg-navy-80/50">
                  <p className="text-pearl text-sm font-medium">{hat.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Apparel rules */}
          <div className="reveal p-6 rounded-xl bg-navy-80/50 border border-white/[0.04]">
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Apparel Rules
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-pearl font-medium mb-2">Always</p>
                <ul className="space-y-1 text-silver">
                  <li>Gold logo on navy / black / dark gray</li>
                  <li>Navy logo on white / light gray</li>
                  <li>V mark only on small placements (chest, hat front)</li>
                  <li>V mark + wordmark on large placements (back of hoodie)</li>
                </ul>
              </div>
              <div>
                <p className="text-pearl font-medium mb-2">Never</p>
                <ul className="space-y-1 text-silver">
                  <li>White logo on white garments</li>
                  <li>Gold logo on yellow / tan garments</li>
                  <li>Navy logo on navy garments</li>
                  <li>Gradient logo on apparel (flat only)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ==================== BUSINESS CARD ==================== */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              05
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-pearl tracking-tight mb-4">
              Business Card
            </h2>
            <p className="text-silver text-base max-w-xl mb-12">
              Navy card stock. Gold foil V mark. Soft-touch matte lamination.
              Square corners — enterprise, not startup.
            </p>
          </div>

          <div className="reveal reveal-delay-1 grid md:grid-cols-2 gap-6">
            {/* Front */}
            <div className="bg-navy rounded-xl p-8 min-h-[220px] flex flex-col justify-between border border-white/[0.04] shadow-2xl">
              <svg width="24" height="30" viewBox="0 0 80 100" fill="none">
                <polygon points="2,0 28,0 44,100 36,100" fill="#C9A84C" />
                <polygon points="52,0 78,0 44,100 36,100" fill="#C9A84C" opacity="0.35" />
              </svg>
              <div>
                <p className="text-pearl text-sm font-medium">Berlin</p>
                <p className="text-silver text-xs mt-1">Founder & CEO</p>
                <div className="mt-4 space-y-1">
                  <p className="text-pearl/60 text-xs">berlin@paxvio.com</p>
                  <p className="text-gold text-xs">paxvio.com</p>
                </div>
              </div>
            </div>

            {/* Back */}
            <div className="bg-navy rounded-xl p-8 min-h-[220px] flex flex-col items-center justify-center border border-white/[0.04] shadow-2xl">
              <svg width="40" height="50" viewBox="0 0 80 100" fill="none">
                <polygon points="2,0 28,0 44,100 36,100" fill="#C9A84C" />
                <polygon points="52,0 78,0 44,100 36,100" fill="#C9A84C" opacity="0.35" />
              </svg>
              <span className="text-pearl text-sm font-medium tracking-[0.08em] mt-3">
                paxvio
              </span>
              <span className="text-silver/30 text-xs mt-4 tracking-wider">
                Built to trust.
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ==================== BUTTONS & UI ==================== */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              06
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-pearl tracking-tight mb-4">
              UI Components
            </h2>
            <p className="text-silver text-base max-w-xl mb-12">
              Buttons, inputs, and interactive elements follow the same gold-accent
              principle. 8px border radius. Confident, not playful.
            </p>
          </div>

          {/* Buttons */}
          <div className="reveal reveal-delay-1">
            <p className="text-pearl text-xs font-semibold tracking-[0.15em] uppercase mb-6">
              Buttons
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="px-6 py-3 text-sm font-medium text-navy bg-gold rounded-lg hover:bg-light-gold transition-all duration-300">
                Primary CTA
              </button>
              <button className="px-6 py-3 text-sm font-medium text-gold border border-gold/30 rounded-lg hover:border-gold/60 transition-all duration-300">
                Secondary
              </button>
              <button className="px-6 py-3 text-sm font-medium text-pearl border border-pearl/20 rounded-lg hover:border-pearl/40 transition-all duration-300">
                Ghost
              </button>
              <button className="px-6 py-3 text-sm font-medium text-silver/50 bg-navy-80 rounded-lg cursor-not-allowed">
                Disabled
              </button>
            </div>
          </div>

          {/* Status badges */}
          <div className="reveal reveal-delay-2">
            <p className="text-pearl text-xs font-semibold tracking-[0.15em] uppercase mb-6">
              Status Badges
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-jade/10 text-jade">
                Active
              </span>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-sky/10 text-sky">
                In Progress
              </span>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-amber/10 text-amber">
                Pending
              </span>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-crimson/10 text-crimson">
                Error
              </span>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-silver/10 text-silver">
                Inactive
              </span>
            </div>
          </div>

          {/* Quick reference */}
          <div className="reveal reveal-delay-3 p-8 rounded-xl bg-navy-80/50 border border-gold/10 font-mono text-sm">
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-4 font-sans">
              Quick Reference
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-silver">
              <div>
                <p><span className="text-pearl">Navy:</span> #0A1628</p>
                <p><span className="text-pearl">Gold:</span> #C9A84C</p>
                <p><span className="text-pearl">Dark BG:</span> #060D18</p>
                <p><span className="text-pearl">Light BG:</span> #F8F7F4</p>
              </div>
              <div>
                <p><span className="text-pearl">Font:</span> Satoshi</p>
                <p><span className="text-pearl">Wordmark:</span> Medium, +10 track</p>
                <p><span className="text-pearl">Radius:</span> 8px standard</p>
                <p><span className="text-pearl">CTA:</span> Gold bg, Navy text</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
