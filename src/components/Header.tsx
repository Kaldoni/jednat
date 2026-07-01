'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Insights", href: "/qhse" },
  ];

  return (
    <header className="bg-surface-white sticky top-0 z-50 border-b border-outline-variant h-20">
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto h-full">
        <Link href="/" className="flex items-center gap-3">
          <img
          src="/pictures/jednat-logo.jpeg"
          alt="Jednat Projects Logo"
          className="h-10 w-10 object-contain"
          />

          <span className="font-headline-md text-headline-md font-bold text-primary">
         Jednat Projects
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 h-full">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-body-md text-body-md h-full flex items-center transition-all ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-primary text-on-primary px-6 py-2.5 rounded font-bold hover:opacity-85 transition-all active:scale-95 inline-block text-sm"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface-white border-b border-outline-variant shadow-lg z-40 transition-all duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-body-md text-lg py-2 transition-all ${
                    isActive
                      ? "text-primary font-bold border-l-4 border-primary pl-3"
                      : "text-on-surface-variant hover:text-primary pl-3"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-primary text-on-primary px-6 py-3 rounded font-bold hover:opacity-85 transition-all text-center mt-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
