"use client";

import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll(".reveal").forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);
  return ref;
}

const divisions = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    title: "Commerce",
    description: "Direct-to-consumer and B2B custom product businesses. Our proving ground — where every tool gets battle-tested before it becomes a product.",
    products: ["Printpire", "The 8th Corner"],
    status: "Revenue-generating",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    title: "Software",
    description: "Embeddable design tools, APIs, and merchant platforms. The infrastructure layer that powers custom product businesses at any scale.",
    products: ["Design Studio", "Print API", "Merchant Tools"],
    status: "In development",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: "AI",
    description: "Computer vision, intelligent assistants, and production automation. Machine learning applied to real manufacturing problems.",
    products: ["Vision", "Piper", "Production AI"],
    status: "Vision live",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Labs",
    description: "R&D and experimental projects. Where we explore what's next — from new manufacturing methods to emerging technologies.",
    products: ["Experimental"],
    status: "Future",
  },
];

export default function Home() {
  const mainRef = useReveal();

  return (
    <main ref={mainRef}>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Radial gradient background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201, 168, 76, 0.04) 0%, transparent 70%)",
          }}
        />

        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201, 168, 76, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 168, 76, 0.3) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* V Mark — large, animated */}
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <svg
            width="120"
            height="150"
            viewBox="0 0 80 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_60px_rgba(201,168,76,0.2)]"
          >
            <defs>
              <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E8D5A0" />
                <stop offset="100%" stopColor="#C9A84C" />
              </linearGradient>
            </defs>
            <polygon
              points="2,0 28,0 44,100 36,100"
              fill="url(#goldGrad)"
            />
            <polygon
              points="52,0 78,0 44,100 36,100"
              fill="url(#goldGrad)"
              opacity="0.35"
            />
          </svg>
        </div>

        {/* Wordmark */}
        <h1
          className="mt-8 text-4xl md:text-5xl font-medium tracking-[0.12em] text-pearl animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          paxvio
        </h1>

        {/* Tagline */}
        <p
          className="mt-4 text-gold text-sm md:text-base font-medium tracking-[0.2em] uppercase animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          Built to trust
        </p>

        {/* Subtitle */}
        <p
          className="mt-6 text-silver text-base md:text-lg max-w-lg text-center leading-relaxed animate-fade-up"
          style={{ animationDelay: "1.3s" }}
        >
          The technology behind custom products. Design tools, AI, and
          infrastructure — built by people who run the businesses it serves.
        </p>

        {/* CTA */}
        <div
          className="mt-10 flex gap-4 animate-fade-up"
          style={{ animationDelay: "1.6s" }}
        >
          <a
            href="#divisions"
            className="px-8 py-3 text-sm font-medium text-navy bg-gold rounded-lg hover:bg-light-gold transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
          >
            Explore
          </a>
          <a
            href="#contact"
            className="px-8 py-3 text-sm font-medium text-gold border border-gold/30 rounded-lg hover:border-gold/60 hover:bg-gold/5 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10"
          style={{ animation: "scrollHint 2s ease-in-out infinite 2.5s" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="opacity-40"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Gold divider */}
      <div className="gold-line mx-auto max-w-4xl" />

      {/* ==================== ABOUT ==================== */}
      <section id="about" className="py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              The Story
            </p>
          </div>

          <h2 className="reveal reveal-delay-1 text-3xl md:text-4xl font-bold text-pearl leading-tight tracking-tight">
            We started by running a custom print shop.
          </h2>

          <p className="reveal reveal-delay-2 mt-8 text-lg md:text-xl text-silver leading-relaxed max-w-3xl">
            We learned firsthand how hard it is to build the tools that power
            custom products — from design editors to file preparation to
            production routing to shipping.
          </p>

          <p className="reveal reveal-delay-3 mt-6 text-lg md:text-xl text-silver leading-relaxed max-w-3xl">
            So we built those tools ourselves. Then we realized: every other
            custom product business has the same problems. The same broken
            workflows. The same tools built by people who never touched a
            printing press.
          </p>

          <p className="reveal reveal-delay-4 mt-6 text-lg md:text-xl text-pearl leading-relaxed max-w-3xl font-medium">
            That&apos;s why we&apos;re building Paxvio — technology created by people who
            actually run the businesses it serves.
          </p>

          {/* Stats */}
          <div className="reveal reveal-delay-5 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "4", label: "Divisions" },
              { number: "6+", label: "Products" },
              { number: "2", label: "Live Businesses" },
              { number: "$0", label: "VC Raised" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold text-gold tracking-tight">
                  {stat.number}
                </p>
                <p className="mt-1 text-silver text-sm tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-line mx-auto max-w-4xl" />

      {/* ==================== DIVISIONS ==================== */}
      <section id="divisions" className="py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              What We Build
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-pearl tracking-tight">
              Four divisions. One platform.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {divisions.map((div, i) => (
              <div
                key={div.title}
                className={`reveal reveal-delay-${i + 1} division-card`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-lg bg-gold/5 border border-gold/10">
                    {div.icon}
                  </div>
                  <span
                    className={`text-xs font-medium tracking-wide px-3 py-1 rounded-full ${
                      div.status === "Revenue-generating"
                        ? "bg-jade/10 text-jade"
                        : div.status === "In development"
                        ? "bg-sky/10 text-sky"
                        : div.status === "Vision live"
                        ? "bg-amber/10 text-amber"
                        : "bg-silver/10 text-silver"
                    }`}
                  >
                    {div.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-pearl mb-3 tracking-tight">
                  {div.title}
                </h3>

                <p className="text-silver text-sm leading-relaxed mb-6">
                  {div.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {div.products.map((p) => (
                    <span
                      key={p}
                      className="text-xs text-gold/70 bg-gold/5 border border-gold/10 rounded-md px-3 py-1"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-line mx-auto max-w-4xl" />

      {/* ==================== VISION ==================== */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              The Vision
            </p>
          </div>

          <h2 className="reveal reveal-delay-1 text-3xl md:text-5xl font-bold text-pearl leading-tight tracking-tight">
            The Shopify of custom products.
          </h2>

          <p className="reveal reveal-delay-2 mt-8 text-lg md:text-xl text-silver leading-relaxed max-w-2xl mx-auto">
            From the design tool a customer uses, to the AI that preps their
            file, to the infrastructure that gets it printed and shipped. One
            platform. End to end.
          </p>

          <div className="reveal reveal-delay-3 mt-16 inline-flex items-center gap-6 text-left">
            <div className="flex flex-col gap-4">
              {[
                "Design tools that run everywhere",
                "AI that understands production",
                "APIs that connect any workflow",
                "Infrastructure that scales",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 80 100" fill="none">
                    <polygon points="2,0 28,0 44,100 36,100" fill="#C9A84C" />
                    <polygon points="52,0 78,0 44,100 36,100" fill="#C9A84C" opacity="0.35" />
                  </svg>
                  <span className="text-pearl text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line mx-auto max-w-4xl" />

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="py-32 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal">
            <svg width="48" height="60" viewBox="0 0 80 100" fill="none" className="mx-auto mb-8 opacity-20">
              <polygon points="2,0 28,0 44,100 36,100" fill="#C9A84C" />
              <polygon points="52,0 78,0 44,100 36,100" fill="#C9A84C" opacity="0.35" />
            </svg>
          </div>

          <h2 className="reveal reveal-delay-1 text-3xl md:text-4xl font-bold text-pearl tracking-tight">
            Something big is being built.
          </h2>

          <p className="reveal reveal-delay-2 mt-6 text-silver text-lg leading-relaxed">
            We&apos;re building in public. If you&apos;re a merchant, developer, or
            investor interested in what we&apos;re doing — let&apos;s talk.
          </p>

          <div className="reveal reveal-delay-3 mt-10">
            <a
              href="mailto:hello@paxvio.com"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-navy bg-gold rounded-lg hover:bg-light-gold transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.25)]"
            >
              hello@paxvio.com
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <p className="reveal reveal-delay-4 mt-8 text-gold/30 text-xs font-medium tracking-[0.15em] uppercase">
            Pax: trust. Vio: the path. The trusted path forward.
          </p>
        </div>
      </section>
    </main>
  );
}
