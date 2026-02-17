"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    const firstLink = menuRef.current?.querySelector("a");
    firstLink?.focus();
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 -mr-2 text-pearl"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {open && (
        <nav
          ref={menuRef}
          aria-label="Mobile navigation"
          className="absolute top-full left-0 right-0 bg-deep-space/95 backdrop-blur-md border-b border-white/[0.04] py-6 px-6 flex flex-col gap-4"
        >
          <a
            href="/#platform"
            onClick={() => setOpen(false)}
            className="text-pearl text-sm tracking-wide hover:text-gold transition-colors py-2"
          >
            Platform
          </a>
          <a
            href="/#approach"
            onClick={() => setOpen(false)}
            className="text-pearl text-sm tracking-wide hover:text-gold transition-colors py-2"
          >
            About
          </a>
          <a
            href="/brand"
            onClick={() => setOpen(false)}
            className="text-pearl text-sm tracking-wide hover:text-gold transition-colors py-2"
          >
            Brand
          </a>
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-2.5 text-sm font-medium text-navy bg-gold rounded-lg text-center hover:bg-light-gold transition-colors"
          >
            Get in Touch
          </a>
        </nav>
      )}
    </div>
  );
}
