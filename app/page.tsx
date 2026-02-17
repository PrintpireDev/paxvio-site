"use client";

import { useEffect, useRef } from "react";
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
import {
  ArrowRight,
  ShoppingBag,
  Code2,
  Cpu,
  FlaskConical,
  ChevronDown,
} from "lucide-react";

/* ---- Framer Motion Variants ---- */
const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease,
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

/* ---- V Mark SVG Component ---- */
function VMark({ size = 120, className = "" }: { size?: number; className?: string }) {
  const h = (size * 100) / 80;
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8D5A0" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
      </defs>
      <polygon points="2,0 28,0 44,100 36,100" fill="url(#goldGrad)" />
      <polygon points="52,0 78,0 44,100 36,100" fill="url(#goldGrad)" opacity="0.35" />
    </svg>
  );
}

/* ---- Section Observer Hook ---- */
function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ---- Divisions Data ---- */
const divisions = [
  {
    icon: ShoppingBag,
    title: "Commerce",
    description:
      "Direct-to-consumer and B2B custom product businesses. Our proving ground — where every tool gets battle-tested before it becomes a product.",
    products: ["Printpire", "The 8th Corner"],
    status: "Revenue-generating",
    statusColor: "bg-jade/15 text-jade border-jade/20",
  },
  {
    icon: Code2,
    title: "Software",
    description:
      "Embeddable design tools, APIs, and merchant platforms. The infrastructure layer that powers custom product businesses at any scale.",
    products: ["Design Studio", "Print API", "Merchant Tools"],
    status: "In development",
    statusColor: "bg-sky/15 text-sky border-sky/20",
  },
  {
    icon: Cpu,
    title: "AI",
    description:
      "Computer vision, intelligent assistants, and production automation. Machine learning applied to real manufacturing problems.",
    products: ["Vision", "Piper", "Production AI"],
    status: "Vision live",
    statusColor: "bg-amber/15 text-amber border-amber/20",
  },
  {
    icon: FlaskConical,
    title: "Labs",
    description:
      "R&D and experimental projects. Where we explore what's next — from new manufacturing methods to emerging technologies.",
    products: ["Experimental"],
    status: "Future",
    statusColor: "bg-silver/15 text-silver border-silver/20",
  },
];

const stats = [
  { number: "4", label: "Divisions" },
  { number: "6+", label: "Products" },
  { number: "2", label: "Live Businesses" },
  { number: "$0", label: "VC Raised" },
];

/* ---- Main Page ---- */
export default function Home() {
  return (
    <main>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Radial gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201, 168, 76, 0.06) 0%, transparent 70%)",
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201, 168, 76, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 168, 76, 0.4) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* V Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <VMark
            size={100}
            className="drop-shadow-[0_0_80px_rgba(201,168,76,0.25)]"
          />
        </motion.div>

        {/* Wordmark */}
        <motion.h1
          className="mt-8 text-4xl md:text-5xl font-medium tracking-[0.14em] text-pearl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          paxvio
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-4 text-gold text-sm md:text-base font-semibold tracking-[0.25em] uppercase"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Built to trust
        </motion.p>

        {/* Gold line */}
        <motion.div
          className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-silver text-base md:text-lg max-w-lg text-center leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          The technology behind custom products. Design tools, AI, and
          infrastructure — built by people who run the businesses it serves.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#divisions"
            className="group px-8 py-3 text-sm font-semibold text-deep-space bg-gradient-to-b from-light-gold to-gold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.35)] hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2"
          >
            Explore
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 text-sm font-medium text-gold border border-gold/25 rounded-lg hover:border-gold/50 hover:bg-gold/5 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <ChevronDown
            className="w-5 h-5 text-gold/40"
            style={{ animation: "scrollHint 2s ease-in-out infinite" }}
          />
        </motion.div>
      </section>

      {/* Gold divider */}
      <div className="gold-line mx-auto max-w-5xl" />

      {/* ==================== ABOUT ==================== */}
      <section id="about" className="py-28 md:py-36 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-6"
            >
              The Story
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-pearl leading-tight tracking-tight"
            >
              We started by running a custom print shop.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-lg md:text-xl text-silver leading-relaxed max-w-3xl"
            >
              We learned firsthand how hard it is to build the tools that power
              custom products — from design editors to file preparation to
              production routing to shipping.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-5 text-lg md:text-xl text-silver leading-relaxed max-w-3xl"
            >
              So we built those tools ourselves. Then we realized: every other
              custom product business has the same problems. The same broken
              workflows. The same tools built by people who never touched a
              printing press.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-5 text-lg md:text-xl text-pearl leading-relaxed max-w-3xl font-medium"
            >
              That&apos;s why we&apos;re building Paxvio — technology created by
              people who actually run the businesses it serves.
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            <GridContainer cols={4} gap={0} border>
              <GridRow>
                {stats.map((stat, i) => (
                  <GridItem
                    key={stat.label}
                    span={1}
                    decorationTopLeft={i === 0}
                    decorationTopRight={i === 3}
                    decorationBottomLeft={i === 0}
                    decorationBottomRight={i === 3}
                    className="py-8 md:py-10"
                  >
                    <motion.div
                      variants={fadeInUp}
                      className="text-center"
                    >
                      <p className="text-3xl md:text-4xl font-bold text-gold tracking-tight">
                        {stat.number}
                      </p>
                      <p className="mt-1 text-silver text-xs tracking-widest uppercase">
                        {stat.label}
                      </p>
                    </motion.div>
                  </GridItem>
                ))}
              </GridRow>
            </GridContainer>
          </motion.div>
        </div>
      </section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ==================== DIVISIONS ==================== */}
      <section id="divisions" className="py-28 md:py-36 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            >
              What We Build
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-pearl tracking-tight"
            >
              Four divisions. One platform.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-silver text-base max-w-xl mx-auto"
            >
              Each division feeds the others — commerce informs software, software enables AI,
              and labs pushes everything forward.
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
                    className="h-full transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader className="pb-0">
                      <div className="flex items-start justify-between w-full">
                        <div className="p-2.5 rounded-lg bg-gold/5 border border-gold/10">
                          <Icon className="w-5 h-5 text-gold" />
                        </div>
                        <Badge
                          variant="outline"
                          className={`text-[10px] ${div.statusColor}`}
                        >
                          {div.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-bold text-pearl mt-4">
                        {div.title}
                      </CardTitle>
                      <CardDescription className="text-silver text-sm leading-relaxed mt-1">
                        {div.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {div.products.map((p) => (
                          <span
                            key={p}
                            className="text-[11px] text-gold/70 bg-gold/5 border border-gold/10 rounded-md px-2.5 py-1"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <div className="gold-line mx-auto max-w-5xl" />

      {/* ==================== VISION ==================== */}
      <section className="py-28 md:py-36 px-6 md:px-12">
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
              className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-6"
            >
              The Vision
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-pearl leading-tight tracking-tight"
            >
              The Shopify of custom products.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-8 text-lg md:text-xl text-silver leading-relaxed max-w-2xl mx-auto"
            >
              From the design tool a customer uses, to the AI that preps their
              file, to the infrastructure that gets it printed and shipped. One
              platform. End to end.
            </motion.p>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            className="mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            <GridContainer cols={2} gap={0} border>
              <GridRow>
                {[
                  { text: "Design tools that run everywhere", icon: "01" },
                  { text: "AI that understands production", icon: "02" },
                ].map((item, i) => (
                  <GridItem
                    key={item.text}
                    span={1}
                    decorationTopLeft={i === 0}
                    decorationTopRight={i === 1}
                    className="py-8 md:py-10 px-6"
                  >
                    <motion.div variants={fadeInUp} className="flex items-center gap-4 w-full">
                      <span className="text-gold/30 text-xs font-mono font-bold tracking-wider">
                        {item.icon}
                      </span>
                      <span className="text-pearl text-sm font-medium">
                        {item.text}
                      </span>
                    </motion.div>
                  </GridItem>
                ))}
              </GridRow>
              <GridRow>
                {[
                  { text: "APIs that connect any workflow", icon: "03" },
                  { text: "Infrastructure that scales", icon: "04" },
                ].map((item, i) => (
                  <GridItem
                    key={item.text}
                    span={1}
                    decorationBottomLeft={i === 0}
                    decorationBottomRight={i === 1}
                    className="py-8 md:py-10 px-6"
                  >
                    <motion.div variants={fadeInUp} className="flex items-center gap-4 w-full">
                      <span className="text-gold/30 text-xs font-mono font-bold tracking-wider">
                        {item.icon}
                      </span>
                      <span className="text-pearl text-sm font-medium">
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

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="py-28 md:py-36 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <VMark size={40} className="mx-auto mb-8 opacity-20" />
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-pearl tracking-tight"
            >
              Something big is being built.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-silver text-lg leading-relaxed"
            >
              We&apos;re building in public. If you&apos;re a merchant, developer, or
              investor interested in what we&apos;re doing — let&apos;s talk.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10">
              <a
                href="mailto:hello@paxvio.com"
                className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-deep-space bg-gradient-to-b from-light-gold to-gold rounded-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.3)] hover:scale-[1.02] active:scale-[0.98]"
              >
                hello@paxvio.com
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-10 text-gold/25 text-xs font-medium tracking-[0.2em] uppercase"
            >
              Pax: trust &middot; Vio: the path &middot; The trusted path forward
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
