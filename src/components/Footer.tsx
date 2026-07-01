import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant pt-20 pb-10 mt-auto">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter mb-20">
        <div className="flex flex-col gap-6">
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
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            Professional engineering and industrial services provider committed to global safety and quality standards.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 border border-outline rounded-full flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-colors"
              aria-label="Share"
            >
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a
              href="mailto:info@jednatprojects.com"
              className="w-10 h-10 border border-outline rounded-full flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-colors"
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-xl">mail</span>
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-label-caps text-label-caps font-bold mb-6 text-on-surface">
            Core Services
          </h5>
          <ul className="space-y-4 font-body-md text-on-surface-variant">
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">
                Engineering Services
              </Link>
            </li>
            <li>
              <Link href="/services/procurement-logistics" className="hover:text-primary transition-colors">
                Procurement & Logistics
              </Link>
            </li>
            <li>
              <Link href="/qhse" className="hover:text-primary transition-colors">
                HSE and Quality
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">
                Training & Development
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-label-caps text-label-caps font-bold mb-6 text-on-surface">
            Company
          </h5>
          <ul className="space-y-4 font-body-md text-on-surface-variant">
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                About Jednat
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-primary transition-colors">
                Our Projects
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-label-caps text-label-caps font-bold mb-6 text-on-surface">
            Contact Info
          </h5>
          <ul className="space-y-4 font-body-md text-on-surface-variant">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-sm mt-1">
                location_on
              </span>
              <span>Km 2 Refinery road Effurun, Delta State, Nigeria</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-sm mt-1">
                call
              </span>
              <span>+2348156137300</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop border-t border-outline-variant pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-body-md text-on-surface-variant text-sm text-center md:text-left">
          © 2026 Jednat Projects Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
