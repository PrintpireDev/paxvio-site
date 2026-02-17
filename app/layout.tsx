import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paxvio — Built to Trust",
  description:
    "Paxvio builds the technology that powers custom product businesses — from design tools to AI to production infrastructure.",
  keywords: ["Paxvio", "custom products", "SaaS", "design tools", "print technology", "AI"],
  authors: [{ name: "Paxvio Inc." }],
  openGraph: {
    title: "Paxvio — Built to Trust",
    description: "The technology behind custom products.",
    url: "https://paxvio.com",
    siteName: "Paxvio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paxvio — Built to Trust",
    description: "The technology behind custom products.",
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
        <link
          href="https://api.fontshare.com/v2/css?f=satoshi@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-deep-space/80 backdrop-blur-md border-b border-white/[0.04]">
          <a href="/" className="flex items-center gap-3 group">
            <svg
              width="28"
              height="32"
              viewBox="0 0 80 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:scale-110"
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
              href="#about"
              className="text-silver text-sm tracking-wide hover:text-gold transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#divisions"
              className="text-silver text-sm tracking-wide hover:text-gold transition-colors duration-300"
            >
              Divisions
            </a>
            <a
              href="/brand"
              className="text-silver text-sm tracking-wide hover:text-gold transition-colors duration-300"
            >
              Brand
            </a>
            <a
              href="#contact"
              className="ml-4 px-5 py-2 text-sm font-medium text-navy bg-gold rounded-lg hover:bg-light-gold transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
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
                      <a href="#about" className="text-silver text-sm hover:text-gold transition-colors">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/brand" className="text-silver text-sm hover:text-gold transition-colors">
                        Brand
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="text-silver text-sm hover:text-gold transition-colors">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-pearl text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                    Products
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <span className="text-silver/50 text-sm">
                        Design Studio
                      </span>
                    </li>
                    <li>
                      <span className="text-silver/50 text-sm">Print API</span>
                    </li>
                    <li>
                      <span className="text-silver/50 text-sm">Vision AI</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-silver/40 text-xs">
                &copy; {new Date().getFullYear()} Paxvio Inc. Delaware C-Corp.
                All rights reserved.
              </p>
              <p className="text-gold/40 text-xs font-medium tracking-wider">
                Built to trust.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
