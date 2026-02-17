import type { Metadata } from "next";
import { MobileMenu } from "@/components/MobileMenu";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://paxvio.com"),
  title: "Paxvio | Custom Product Infrastructure — Design Tools, AI & Commerce",
  description:
    "Design tools, production AI, and commerce infrastructure for custom product businesses. Built by operators, not outsiders.",
  authors: [{ name: "Paxvio Inc." }],
  openGraph: {
    title: "Paxvio | Custom Product Infrastructure",
    description:
      "Design tools, production AI, and commerce infrastructure for custom product businesses. Built by operators, not outsiders.",
    url: "https://paxvio.com",
    siteName: "Paxvio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paxvio | Custom Product Infrastructure",
    description:
      "Design tools, production AI, and commerce infrastructure for custom product businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f=satoshi@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Paxvio",
              url: "https://paxvio.com",
              description:
                "Technology infrastructure for custom product businesses — design tools, production AI, and commerce systems.",
              foundingDate: "2024",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>

        {/* Navigation */}
        <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-deep-space/80 backdrop-blur-md border-b border-white/[0.04]">
          <a href="/" aria-label="Paxvio home" className="flex items-center gap-3 group">
            <svg
              width="28"
              height="32"
              viewBox="0 0 80 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              <polygon
                points="2,0 28,0 44,100 36,100"
                fill="#C9A84C"
              />
              <polygon
                points="52,0 78,0 44,100 36,100"
                fill="#C9A84C"
                opacity="0.35"
              />
            </svg>
            <span className="text-pearl font-medium tracking-[0.08em] text-sm">
              paxvio
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#platform"
              className="text-silver text-sm tracking-wide hover:text-gold transition-colors duration-300"
            >
              Platform
            </a>
            <a
              href="/#approach"
              className="text-silver text-sm tracking-wide hover:text-gold transition-colors duration-300"
            >
              About
            </a>
            <a
              href="/brand"
              className="text-silver text-sm tracking-wide hover:text-gold transition-colors duration-300"
            >
              Brand
            </a>
            <a
              href="/#contact"
              className="ml-4 px-5 py-2 text-sm font-medium text-navy bg-gold rounded-lg hover:bg-light-gold transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
          <MobileMenu />
        </nav>

        {children}

        {/* Footer */}
        <footer className="border-t border-white/[0.04] bg-deep-space">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <svg
                    width="24"
                    height="28"
                    viewBox="0 0 80 100"
                    fill="none"
                    aria-hidden="true"
                  >
                    <polygon
                      points="2,0 28,0 44,100 36,100"
                      fill="#C9A84C"
                    />
                    <polygon
                      points="52,0 78,0 44,100 36,100"
                      fill="#C9A84C"
                      opacity="0.35"
                    />
                  </svg>
                  <span className="text-pearl font-medium tracking-[0.08em] text-sm">
                    paxvio
                  </span>
                </div>
                <p className="text-silver text-sm max-w-xs leading-relaxed">
                  The technology behind custom products. Design tools, AI, and
                  infrastructure — built by people who run the businesses it
                  serves.
                </p>
              </div>
              <div className="flex gap-16">
                <div>
                  <h4 className="text-pearl text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                    Company
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="/#platform" className="text-silver text-sm hover:text-gold transition-colors">
                        Platform
                      </a>
                    </li>
                    <li>
                      <a href="/brand" className="text-silver text-sm hover:text-gold transition-colors">
                        Brand
                      </a>
                    </li>
                    <li>
                      <a href="/#contact" className="text-silver text-sm hover:text-gold transition-colors">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-pearl text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                    Platform
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="/#platform" className="text-silver text-sm hover:text-gold transition-colors">
                        Commerce
                      </a>
                    </li>
                    <li>
                      <a href="/#platform" className="text-silver text-sm hover:text-gold transition-colors">
                        Software
                      </a>
                    </li>
                    <li>
                      <a href="/#platform" className="text-silver text-sm hover:text-gold transition-colors">
                        AI
                      </a>
                    </li>
                    <li>
                      <a href="/#platform" className="text-silver text-sm hover:text-gold transition-colors">
                        Labs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-silver/60 text-xs">
                &copy; {new Date().getFullYear()} Paxvio Inc. Delaware C-Corp.
                All rights reserved.
              </p>
              <span className="text-gold/40 text-xs font-medium tracking-wider">
                Pax &middot; Vio
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
