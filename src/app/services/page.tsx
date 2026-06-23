'use client';

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card) => {
      card.classList.add(
        "opacity-0",
        "translate-y-8",
        "transition-all",
        "duration-500"
      );
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const capabilities = [
    {
      title: "EPCM",
      description: "Comprehensive Engineering, Procurement, Construction Management, delivering end-to-end industrial project lifecycles with strict safety protocols.",
      tag: "PROJECT MGMT",
      icon: "architecture",
      link: "/contact"
    },
    {
      title: "Engineering Technical Services",
      description: "Specialized technical support ranging from feasibility studies to complex systems integration for energy infrastructures.",
      tag: "TECHNICAL SUPPORT",
      icon: "engineering",
      link: "/contact"
    },
    {
      title: "Wellhead Services",
      description: "Precision maintenance, installation, and integrity testing for upstream wellhead equipment ensuring continuous production flow.",
      tag: "UPSTREAM",
      icon: "oil_barrel",
      link: "/contact"
    },
    {
      title: "Pipeline Inspection",
      description: "Advanced non-destructive testing (NDT) and structural integrity assessments to prevent leaks and maximize pipeline lifespan.",
      tag: "INTEGRITY MGMT",
      icon: "visibility",
      link: "/contact"
    },
    {
      title: "Marine Support",
      description: "Reliable logistics, vessel management, and subsea operation support for offshore energy developments.",
      tag: "OFFSHORE",
      icon: "sailing",
      link: "/services/procurement-logistics"
    },
    {
      title: "Collision Control Monitoring",
      description: "State-of-the-art radar and sensor systems to protect offshore assets from maritime traffic and operational hazards.",
      tag: "SAFETY SYSTEMS",
      icon: "radar",
      link: "/contact"
    },
    {
      title: "Pipeline Pegging Inspection",
      description: "Specialized survey and marking services to ensure accurate geolocating and protection of buried pipeline corridors.",
      tag: "SURVEYING",
      icon: "near_me",
      link: "/contact"
    },
    {
      title: "Subsea Engineering",
      description: "Engineering solutions for deep-water assets, including ROV coordination, subsea umbilical design, and manifold installation.",
      tag: "DEEPWATER",
      icon: "waves",
      link: "/contact"
    },
    {
      title: "Maintenance & Engineering",
      description: "Predictive and corrective maintenance frameworks integrated with core engineering design to ensure asset longevity.",
      tag: "ASSET MGMT",
      icon: "settings",
      link: "/contact"
    },
    {
      title: "Consultancy & Design",
      description: "Strategic engineering advice and FEED (Front-End Engineering Design) that optimizes costs and operational efficiency.",
      tag: "STRATEGY",
      icon: "lightbulb",
      link: "/contact"
    },
    {
      title: "Design and Construction",
      description: "From concept drafting to physical erection, we provide seamless transition across all construction phases.",
      tag: "EXECUTION",
      icon: "construction",
      link: "/contact"
    },
    {
      title: "Procurement & Supply Chain",
      description: "Global sourcing of high-spec components and technical equipment with rigorous quality assurance and logistics optimization.",
      tag: "LOGISTICS",
      icon: "inventory_2",
      link: "/services/procurement-logistics"
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20 flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden border-b border-outline-variant bg-surface-container-low">
          <div className="absolute inset-0 technical-grid-bg opacity-30"></div>
          <div className="relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center md:text-left">
            <div className="flex flex-col md:flex-row gap-gutter items-center">
              <div className="flex-1">
                <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-4">
                  ENGINEERING EXCELLENCE
                </span>
                <h1 className="font-display-lg text-display-lg text-on-background mb-6 leading-tight">
                  Our Services
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                  We are committed to providing exceptional services with
                  reliability, care, and professionalism. Our multi-disciplinary
                  expertise ensures that every project is executed with precision
                  and technical integrity.
                </p>
              </div>
              <div className="hidden md:block flex-1 h-[400px] rounded-lg border border-outline-variant overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="A high-resolution wide-angle shot of a clean, modern offshore engineering platform."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7xJmN68V-p8S_uLpKjc1u7oC8u4TRDZWx86nwb4-Y7IQI6skdFOselw4O70bjpMZx3GFv9OMeCYxerL58ax8kVsjMl02xIBlcAdMXj32rtZWRpswT4nxOMh63BlS97JSMrByw_NUhLZmdervcXBz4sK6qrc4FX5sv7OHPkYKwCJKlLl7jLqJ2X-dJ2qnCpRPFTR9khPb8b3N0muLlxYGwQwX4uNFoOvhYfHdF3S1Kv7KNAfQO4eGK7V45Nqv4-K_IdvVVD3JCbrRe"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Grid Section */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg mb-2">
              Technical Capabilities
            </h2>
            <div className="w-24 h-1 bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="service-card bg-surface-white border border-outline-variant p-gutter flex flex-col group hover:translate-y-[-4px] hover:border-primary transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-container text-on-primary-container flex items-center justify-center rounded-lg mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-outline-variant flex justify-between items-center">
                  <span className="font-label-caps text-label-caps text-primary">
                    {item.tag}
                  </span>
                  <Link href={item.link} className="text-primary hover:translate-x-1 transition-transform">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specification Callout */}
        <section className="bg-inverse-surface text-inverse-on-surface py-20 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="font-headline-lg text-headline-lg mb-6">
                Unrivaled Precision in Every Calculation
              </h2>
              <p className="font-body-lg text-body-lg text-surface-variant opacity-80 mb-8">
                Our engineering teams utilize advanced simulation software and
                historical data benchmarking to ensure that every specification
                meets global safety and performance standards.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="font-technical-data text-technical-data text-primary-fixed mb-1">
                    ACCURACY
                  </div>
                  <div className="text-4xl font-bold">99.9%</div>
                </div>
                <div>
                  <div className="font-technical-data text-technical-data text-primary-fixed mb-1">
                    COMPLIANCE
                  </div>
                  <div className="text-4xl font-bold">ISO 9001</div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full aspect-video border border-outline rounded-lg overflow-hidden relative">
              <img
                className="w-full h-full object-cover grayscale opacity-60"
                alt="A technical blueprint overlay on a dark background showing 3D wireframe models."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlJhLpa04PJdKxDmrr6vPL5xyrUDGiNNurmNiGFn_P86a-ROwCDmjhj3hNEWge9Zvvbjmj13U3KZopz_GSObseYL0V_xM5Qz731ehu7ld6yV008YdaVC0bIPrBWM5UXXV5dbG77Dga5PPsFyvSTn29EGv0RVgnak8pXsTKe9j4MC9kQFglhq4vEcFH68GDc8iBGPr-1uYxU61LC60mrLZjGscP3ex7P3CCNmgTNw8z7_GGwBP6CtNlntuCAT-1n-1LubXMmXwJd92U"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg mb-6">
            Ready to start your next technical project?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            Consult with our engineering experts to develop a tailored solution
            for your specific operational challenges.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-primary text-on-primary px-8 py-4 font-bold rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Request a Consultation
              <span className="material-symbols-outlined">mail</span>
            </Link>
            <button className="border border-primary text-primary px-8 py-4 font-bold rounded-lg hover:bg-primary/5 transition-all flex items-center justify-center gap-2">
              Download Capabilities Brochure
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
