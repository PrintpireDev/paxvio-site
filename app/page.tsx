"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/optics/card";
import { GridContainer, GridRow, GridItem } from "@/components/optics/grid";
import {
  ArrowRight,
  ShoppingBag,
  Code2,
  Cpu,
  FlaskConical,
  ChevronDown,
  Layers,
  Wrench,
  Users,
} from "lucide-react";

/* ---- Animation Variants ---- */
const ease = [0.16, 1, 0.3, 1] as const;

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

/* ---- V Mark ---- */
function VMark({
  size = 120,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const h = (size * 100) / 80;
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8D5A0" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
      </defs>
      <polygon points="2,0 28,0 44,100 36,100" fill="url(#goldGrad)" />
      <polygon
        points="52,0 78,0 44,100 36,100"
        fill="url(#goldGrad)"
        opacity="0.35"
      />
    </svg>
  );
}

/* ---- Data ---- */
const problems = [
  {
    icon: Layers,
    title: "Fragmented by design",
    description:
      "The average custom products merchant operates half a dozen disconnected tools. Design editors, production queues, shipping platforms — none built to work together.",
  },
  {
    icon: Wrench,
    title: "Manual by default",
    description:
      "File preparation. Color matching. Production routing. Quality control. The most critical steps in custom manufacturing are still done by hand.",
  },
  {
    icon: Users,
    title: "Built by outsiders",
    description:
      "The people building these tools have never operated a print shop, decorated an apparel line, or shipped a cut-contour sticker.",
  },
];

const divisions = [
  {
    icon: ShoppingBag,
    title: "Commerce",
    description:
      "Direct-to-consumer and B2B custom product businesses. Our proving ground — where every tool gets battle-tested before it becomes a product.",
    capabilities: ["Storefronts", "Order management", "Fulfillment", "Shipping"],
    badge: { text: "Commerce", color: "emerald" as const },
    metric: "2 live storefronts",
  },
  {
    icon: Code2,
    title: "Software",
    description:
      "Embeddable design tools and APIs for any custom product workflow. The infrastructure layer that powers businesses at any scale.",
    capabilities: ["Design Studio", "Print API", "Merchant Tools", "White-label"],
    badge: { text: "Software", color: "sky" as const },
    metric: "50+ API endpoints",
  },
  {
    icon: Cpu,
    title: "AI",
    description:
      "Computer vision and production automation. Machine learning applied to real manufacturing problems, not academic exercises.",
    capabilities: [
      "File preparation",
      "Quality control",
      "Smart routing",
      "Image enhancement",
    ],
    badge: { text: "AI", color: "gold" as const },
    metric: "Background removal in <2s",
  },
  {
    icon: FlaskConical,
    title: "Labs",
    description:
      "Research into next-generation manufacturing and design technology. Where we explore what comes after what exists.",
    capabilities: ["New substrates", "Process R&D", "Emerging tech"],
    badge: { text: "Labs", color: "amber" as const },
    metric: "Active R&D pipeline",
  },
];

const badgeColors = {
  emerald: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  sky: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  gold: "text-gold bg-gold/10 border-gold/20",
  amber: "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

const pillars = [
  { number: "01", text: "Design tools that deploy everywhere" },
  { number: "02", text: "AI that understands production" },
  { number: "03", text: "APIs that connect any workflow" },
  { number: "04", text: "Infrastructure that scales" },
];

/* ---- Main Page ---- */
export default function Home() {
  return (
    <main id="main-content">
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Gold orb */}
          <div
            className="absolute w-[800px] h-[800px] -top-[200px] left-[10%] rounded-full opacity-[0.07]"
            style={{
              background:
                "radial-gradient(circle, #C9A84C 0%, transparent 70%)",
              filter: "blur(80px)",
              animation: "float 20s ease-in-out infinite",
            }}
          />
          {/* Navy orb */}
          <div
            className="absolute w-[600px] h-[600px] top-[40%] right-[5%] rounded-full opacity-[0.05]"
            style={{
              background:
                "radial-gradient(circle, #1A3A5C 0%, transparent 70%)",
              filter: "blur(60px)",
              animation: "float 25s ease-in-out infinite 5s",
            }}
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* V Mark with glow */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 blur-[60px] opacity-25 scale-150">
            <VMark size={140} />
          </div>
          <VMark
            size={140}
            className="relative z-10 drop-shadow-[0_0_80px_rgba(201,168,76,0.2)]"
          />
        </motion.div>

        {/* Wordmark */}
        <motion.h1
          className="mt-10 text-5xl md:text-6xl font-medium tracking-[0.14em] text-pearl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          paxvio
        </motion.h1>

        {/* Gold line */}
        <motion.div
          className="mt-8 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Category statement */}
        <motion.p
          className="mt-8 text-xl md:text-2xl lg:text-3xl text-pearl/90 font-medium text-center max-w-2xl tracking-tight leading-snug"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          The infrastructure for custom products.
        </motion.p>

        {/* Supporting text */}
        <motion.p
          className="mt-5 text-silver text-base md:text-lg max-w-xl text-center leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Design tools, production AI, and commerce systems — built by the
          people who run the businesses they serve.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#platform"
            className="group px-10 py-4 text-sm font-semibold text-deep-space bg-gradient-to-b from-light-gold to-gold rounded-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.3)] hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2.5"
          >
            Explore the Platform
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="group px-10 py-4 text-sm font-semibold text-pearl/80 border border-white/[0.08] rounded-lg transition-all duration-300 hover:border-gold/30 hover:text-pearl hover:bg-white/[0.02] active:scale-[0.98] inline-flex items-center gap-2.5"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <ChevronDown
            className="w-5 h-5 text-gold/50"
            style={{ animation: "scrollHint 2s ease-in-out infinite" }}
            aria-hidden="true"
          />
        </motion.div>
      </section>

      {/* ==================== METRICS BAR ==================== */}
      <motion.section
        className="py-12 md:py-16 px-6 md:px-12 border-y border-white/[0.04]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {[
            { value: "4", label: "Integrated systems" },
            { value: "2", label: "Live storefronts" },
            { value: "<2s", label: "AI processing" },
            { value: "50+", label: "API endpoints" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-gold tracking-tight">
                {stat.value}
              </p>
              <p className="text-silver/60 text-xs tracking-[0.15em] uppercase mt-1.5">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ==================== THE PROBLEM ==================== */}
      <section className="py-28 md:py-40 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-6"
            >
              The Problem
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-pearl leading-tight tracking-tight max-w-3xl"
            >
              The custom products industry has outgrown its tools.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg text-silver leading-relaxed max-w-2xl"
            >
              A multi-hundred-billion-dollar market still runs on disconnected
              software, manual processes, and tools built by people who&apos;ve
              never shipped a custom order.
            </motion.p>
          </motion.div>

          {/* Problem cards */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {problems.map((problem) => {
              const Icon = problem.icon;
              return (
                <motion.div key={problem.title} variants={fadeInUp}>
                  <Card decorations className="h-full">
                    <CardHeader>
                      <div className="p-2.5 rounded-lg bg-gold/5 border border-gold/10 w-fit">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                      <CardTitle className="text-pearl text-base font-bold mt-4">
                        {problem.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-silver text-sm leading-relaxed">
                        {problem.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ==================== THE PLATFORM ==================== */}
      <section id="platform" className="py-28 md:py-40 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            >
              The Platform
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-pearl tracking-tight"
            >
              Four systems. One architecture.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-5 text-silver text-base max-w-xl mx-auto leading-relaxed"
            >
              Each system feeds the others — commerce informs software, software
              enables AI, and research pushes everything forward.
            </motion.p>
          </motion.div>

          {/* Division Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {divisions.map((div) => {
              const Icon = div.icon;
              return (
                <motion.div key={div.title} variants={fadeInUp}>
                  <Card
                    decorations
                    className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(201,168,76,0.06)]"
                  >
                    <CardHeader className="pb-0">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-gold/5 border border-gold/10 w-fit">
                          <Icon className="w-5 h-5 text-gold" />
                        </div>
                        <span className={`text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border ${badgeColors[div.badge.color]}`}>
                          {div.badge.text}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-bold text-pearl mt-4">
                        {div.title}
                      </CardTitle>
                      <CardDescription className="text-silver text-sm leading-relaxed mt-1">
                        {div.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {div.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="text-[11px] text-gold/60 bg-gold/5 border border-gold/8 rounded-md px-2.5 py-1"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-silver/50 mt-4 pt-3 border-t border-white/[0.04]">
                        {div.metric}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ==================== THE APPROACH ==================== */}
      <section id="approach" className="py-28 md:py-40 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-6"
            >
              The Approach
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-pearl leading-tight tracking-tight"
            >
              We operate what we build.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-lg md:text-xl text-silver leading-relaxed max-w-3xl"
            >
              Paxvio runs its own custom product businesses. They&apos;re the
              proving ground for every tool we create. Real orders. Real
              customers. Real deadlines.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-5 text-lg md:text-xl text-silver leading-relaxed max-w-3xl"
            >
              If a design editor frustrates our customers, we fix it before it
              ships to yours. If a production workflow breaks under pressure, we
              catch it before you do. If an AI model makes the wrong call, we
              see it first — in our own P&amp;L.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-5 text-lg md:text-xl text-pearl leading-relaxed max-w-3xl font-medium"
            >
              This isn&apos;t a theory of how custom products should work.
              It&apos;s the infrastructure we built because we needed it
              ourselves.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ==================== MID-PAGE CTA ==================== */}
      <motion.section
        className="py-16 md:py-20 px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeInUp}
            className="relative rounded-2xl border border-gold/10 bg-gradient-to-b from-gold/[0.03] to-transparent px-8 py-12 md:px-16 md:py-16 overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ background: "radial-gradient(ellipse at center, #C9A84C, transparent 70%)" }} />
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4 relative z-10">
              Ready to start?
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-pearl tracking-tight relative z-10">
              See how Paxvio can power your business.
            </h3>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a
                href="#contact"
                className="group px-8 py-3.5 text-sm font-semibold text-deep-space bg-gradient-to-b from-light-gold to-gold rounded-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.3)] hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2.5"
              >
                Talk to Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#platform"
                className="text-sm text-silver hover:text-pearl transition-colors duration-300"
              >
                Learn more
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ==================== INFRASTRUCTURE ==================== */}
      <section className="py-28 md:py-40 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-6"
            >
              Infrastructure
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-pearl leading-tight tracking-tight"
            >
              Built for precision. Designed for scale.
            </motion.h2>
          </motion.div>

          {/* Technical Pillars Grid */}
          <motion.div
            className="mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            <GridContainer cols={2} mobileCols={1} gap={0} border>
              <GridRow>
                {pillars.slice(0, 2).map((item, i) => (
                  <GridItem
                    key={item.text}
                    span={1}
                    decorationTopLeft={i === 0}
                    decorationTopRight={i === 1}
                    className="py-8 md:py-10 px-6 md:px-8 md:aspect-auto"
                  >
                    <motion.div
                      variants={fadeInUp}
                      className="flex items-start gap-5 w-full"
                    >
                      <span className="text-gold/50 text-xs font-mono font-bold tracking-wider mt-0.5" aria-hidden="true">
                        {item.number}
                      </span>
                      <span className="text-pearl text-sm md:text-base font-medium leading-relaxed">
                        {item.text}
                      </span>
                    </motion.div>
                  </GridItem>
                ))}
              </GridRow>
              <GridRow>
                {pillars.slice(2, 4).map((item, i) => (
                  <GridItem
                    key={item.text}
                    span={1}
                    decorationBottomLeft={i === 0}
                    decorationBottomRight={i === 1}
                    className="py-8 md:py-10 px-6 md:px-8 md:aspect-auto"
                  >
                    <motion.div
                      variants={fadeInUp}
                      className="flex items-start gap-5 w-full"
                    >
                      <span className="text-gold/50 text-xs font-mono font-bold tracking-wider mt-0.5" aria-hidden="true">
                        {item.number}
                      </span>
                      <span className="text-pearl text-sm md:text-base font-medium leading-relaxed">
                        {item.text}
                      </span>
                    </motion.div>
                  </GridItem>
                ))}
              </GridRow>
            </GridContainer>
          </motion.div>
        </div>
      </section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ==================== ECOSYSTEM ==================== */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="text-silver/50 text-xs tracking-[0.3em] uppercase mb-10"
            >
              Built on
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
            >
              {/* Next.js */}
              <svg className="h-5 text-silver/40 hover:text-pearl/70 transition-colors duration-300" viewBox="0 0 394 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Next.js">
                <path d="M262 0v80h-13V0h13Zm33.3 0L333 42.2 370.6 0h15.7l-46.4 50.3L388 80h-16l-39-42.7L294 80h-15.7l47.3-50.8L281.6 0h13.7ZM0 0h14.6l55 73.2L114.3 0H128L62.2 80H50.5L0 0Z"/>
              </svg>
              {/* React */}
              <svg className="h-6 text-silver/40 hover:text-pearl/70 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="React">
                <circle cx="12" cy="12" r="2.05"/>
                <path fill="none" stroke="currentColor" strokeWidth="1" d="M12 21.5c-3.1 0-5.8-1.2-7.1-3.1C3.6 16.5 3.2 14.3 3.9 12 3.2 9.7 3.6 7.5 4.9 5.6 6.2 3.7 8.9 2.5 12 2.5s5.8 1.2 7.1 3.1c1.3 1.9 1.7 4.1 1 6.4.7 2.3.3 4.5-1 6.4C17.8 20.3 15.1 21.5 12 21.5Z"/>
                <path fill="none" stroke="currentColor" strokeWidth="1" d="M12 21.5c1.7 0 3.2-4.1 3.2-9.5S13.7 2.5 12 2.5 8.8 6.6 8.8 12s1.5 9.5 3.2 9.5Z"/>
                <path fill="none" stroke="currentColor" strokeWidth="1" d="M21.5 12c0 1.7-4.1 3.2-9.5 3.2S2.5 13.7 2.5 12 6.6 8.8 12 8.8s9.5 1.5 9.5 3.2Z"/>
              </svg>
              {/* Vercel */}
              <svg className="h-5 text-silver/40 hover:text-pearl/70 transition-colors duration-300" viewBox="0 0 284 65" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Vercel">
                <path d="M141.68 16.25c-11.04 0-19 7.2-19 18.05s8.96 18.05 20 18.05c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.54 0-10.85-7.93-18.05-19-18.05Zm-8.85 14.55c1.52-3.82 5.13-6.55 9.85-6.55 4.14 0 7.39 2.73 8.85 6.55h-18.7ZM243.72 16.25c-11.04 0-19 7.2-19 18.05s8.96 18.05 20 18.05c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.54 0-10.85-7.93-18.05-19-18.05Zm-8.85 14.55c1.52-3.82 5.13-6.55 9.85-6.55 4.14 0 7.39 2.73 8.85 6.55h-18.7ZM174.3 16.25c-4.46 0-8.07 1.93-10.15 5.09V0h-9.58v51.65h9.58v-3.9c2.08 3.09 5.69 5 10.15 5 9.58 0 17.16-8.07 17.16-18.25s-7.58-18.25-17.16-18.25Zm-1.47 28.12c-5.55 0-9.58-4.32-9.58-9.87s4.03-9.88 9.58-9.88c5.56 0 9.59 4.33 9.59 9.88s-4.03 9.87-9.59 9.87ZM202.3 0v51.65h9.58V0h-9.58ZM31.75 0 63.5 55.52H0L31.75 0Z"/>
              </svg>
              {/* Square */}
              <svg className="h-5 text-silver/40 hover:text-pearl/70 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Square">
                <path d="M3.5 1A2.5 2.5 0 0 0 1 3.5v17A2.5 2.5 0 0 0 3.5 23h17a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 20.5 1h-17Zm2.3 5.3h12.4c.7 0 1.3.6 1.3 1.3v8.8c0 .7-.6 1.3-1.3 1.3H5.8c-.7 0-1.3-.6-1.3-1.3V7.6c0-.7.6-1.3 1.3-1.3Zm3.2 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"/>
              </svg>
              {/* Cloudflare */}
              <svg className="h-5 text-silver/40 hover:text-pearl/70 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Cloudflare">
                <path d="M16.51 17.15l-.66-2.25a1.02 1.02 0 0 0-.98-.72H5.4a.34.34 0 0 1-.32-.22.33.33 0 0 1 .04-.38c.11-.15.3-.24.48-.24h9.68c1.18 0 2.24-.78 2.58-1.9l.47-1.63c.04-.12.06-.25.06-.38 0-.14-.02-.28-.07-.41A5.38 5.38 0 0 0 13.1 6a5.36 5.36 0 0 0-5 3.41 3.56 3.56 0 0 0-2.46-.98 3.6 3.6 0 0 0-3.5 2.86A3.38 3.38 0 0 0 0 14.64c0 .14.01.27.02.4 0 .07.05.12.12.12h15.95a.98.98 0 0 0 .93-.67l.04-.14c.05-.2.05-.4-.02-.6l-.53-1.6ZM19.35 9.88a.12.12 0 0 0-.12-.02c-.04.02-.07.05-.08.1l-.35 1.23a3.05 3.05 0 0 1-2.58 1.9H15.7l.65 2.25c.07.2.07.4.02.6l-.04.14a.98.98 0 0 1-.93.67h-.16a3.36 3.36 0 0 0 3.1 2.1 3.35 3.35 0 0 0 3.35-3.35c0-.14 0-.28-.03-.42a2.73 2.73 0 0 0 2.34-2.7 2.72 2.72 0 0 0-2.3-2.69 4.84 4.84 0 0 0-2.35-.81Z"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ==================== CTA ==================== */}
      <section id="contact" className="py-28 md:py-40 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <VMark size={36} className="mx-auto mb-10 opacity-20" />
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-pearl tracking-tight"
            >
              Let&apos;s build together.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-silver text-lg leading-relaxed max-w-xl mx-auto"
            >
              Whether you&apos;re a merchant, developer, or investor — we&apos;d
              like to hear from you.
            </motion.p>

            {/* Segmented CTAs */}
            <motion.div
              variants={fadeInUp}
              className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <a
                href="mailto:hello@paxvio.com?subject=Merchant%20Inquiry"
                className="group p-6 rounded-xl border border-white/[0.06] bg-card hover:border-gold/20 hover:shadow-[0_0_20px_rgba(201,168,76,0.04)] transition-all duration-300 text-left hover:-translate-y-0.5"
              >
                <p className="text-pearl text-sm font-semibold">
                  For Merchants
                </p>
                <p className="text-silver text-xs mt-1.5 leading-relaxed">
                  Transform your custom product business with integrated tools.
                </p>
                <span className="text-gold text-xs font-medium mt-4 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  Get in touch <ArrowRight className="w-3 h-3" />
                </span>
              </a>

              <a
                href="mailto:hello@paxvio.com?subject=Developer%20Inquiry"
                className="group p-6 rounded-xl border border-white/[0.06] bg-card hover:border-gold/20 hover:shadow-[0_0_20px_rgba(201,168,76,0.04)] transition-all duration-300 text-left hover:-translate-y-0.5"
              >
                <p className="text-pearl text-sm font-semibold">
                  For Developers
                </p>
                <p className="text-silver text-xs mt-1.5 leading-relaxed">
                  Build on the platform. APIs, SDKs, and documentation.
                </p>
                <span className="text-gold text-xs font-medium mt-4 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  Coming soon <ArrowRight className="w-3 h-3" />
                </span>
              </a>

              <a
                href="mailto:hello@paxvio.com?subject=Partnership%20Inquiry"
                className="group p-6 rounded-xl border border-white/[0.06] bg-card hover:border-gold/20 hover:shadow-[0_0_20px_rgba(201,168,76,0.04)] transition-all duration-300 text-left hover:-translate-y-0.5"
              >
                <p className="text-pearl text-sm font-semibold">
                  For Partners
                </p>
                <p className="text-silver text-xs mt-1.5 leading-relaxed">
                  Investment, integration, and collaboration opportunities.
                </p>
                <span className="text-gold text-xs font-medium mt-4 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  Reach out <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-16 text-gold/40 text-xs font-medium tracking-[0.2em] uppercase"
            >
              Pax: trust &middot; Vio: the path &middot; The trusted path
              forward
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
