'use client';

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProcurementLogistics() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      const targetId = anchor.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleScroll);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[716px] flex items-center overflow-hidden technical-grid">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent z-10"></div>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBEiberv15nOcPUggpfFrJsUTHpTQ4FuyBApC52lb9RCAtESQdGmrmD104lWtffLgbRCRaNHAvhfNxPK-WPv5oB6-2e5NikGtv92A1Ngj7H_q7Teoq8mEiRop8oZei-tNfBSMh52O29ksWFYdwugb89tX2RwY31ZAZr4s2GuMdMOay0aUH6DHzMwaGr2sqb7HS_rI7ltidaWcfPUW_LEFGWdDt4yJPTVL23UuO6uiiZNgFQ2DUu4anngZ7wgFwrpHxbuRwhLmuiWew5')",
              }}
            ></div>
          </div>
          <div className="relative z-20 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto py-24">
            <div className="max-w-2xl">
              <span className="inline-block py-1 px-3 bg-primary-container text-on-primary-container font-label-caps text-label-caps mb-6 rounded-full">
                LOGISTICS & SUPPLY CHAIN
              </span>
              <h1 className="font-display-lg text-display-lg text-on-background mb-8 leading-tight">
                Procurement & Marine Logistics
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 border-l-4 border-safety-orange pl-6">
                We provide procurement and supply chain services that help
                clients source quality materials, manage vendors, control costs and
                ensure timely delivery.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-primary text-on-primary px-8 py-4 font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  Request Quote{" "}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <a
                  href="#lifecycle"
                  className="border border-steel-gray text-steel-gray px-8 py-4 font-technical-data hover:bg-surface-container transition-colors inline-block text-center"
                >
                  VIEW CAPABILITIES
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Stats Bar */}
        <section className="bg-surface-container-high py-12 border-y border-outline-variant">
          <div className="px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col">
              <span className="font-technical-data text-label-caps text-on-surface-variant">
                FLEET CAPACITY
              </span>
              <span className="font-display-lg text-display-lg text-primary">
                120K
              </span>
              <span className="font-body-md text-on-surface-variant">
                Metric Tons DWT
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-technical-data text-label-caps text-on-surface-variant">
                VENDOR NETWORK
              </span>
              <span className="font-display-lg text-display-lg text-primary">
                450+
              </span>
              <span className="font-body-md text-on-surface-variant">
                Certified Global Partners
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-technical-data text-label-caps text-on-surface-variant">
                OTD RATE
              </span>
              <span className="font-display-lg text-display-lg text-safety-orange">
                98.4%
              </span>
              <span className="font-body-md text-on-surface-variant">
                On-Time Delivery
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-technical-data text-label-caps text-on-surface-variant">
                HSE RECORD
              </span>
              <span className="font-display-lg text-display-lg text-primary">
                0
              </span>
              <span className="font-body-md text-on-surface-variant">
                LTI in Last 3 Years
              </span>
            </div>
          </div>
        </section>

        {/* Service Areas - Bento Grid */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg mb-4">
              Operational Excellence
            </h2>
            <div className="w-24 h-1 bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-gutter">
            {/* Sourcing */}
            <div className="md:col-span-3 bg-surface-white border border-outline-variant p-8 flex flex-col justify-between group hover:border-primary transition-colors min-h-[300px]">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-6">
                  manage_search
                </span>
                <h3 className="font-headline-md text-headline-md mb-4">
                  End-to-end sourcing
                </h3>
                <p className="text-on-surface-variant">
                  Comprehensive market analysis and strategic procurement to
                  find the most cost-effective, high-quality industrial components
                  worldwide.
                </p>
              </div>
              <div className="mt-8 font-technical-data text-label-caps text-primary flex items-center gap-2">
                STRATEGIC PROCUREMENT{" "}
                <span className="material-symbols-outlined text-sm">
                  trending_flat
                </span>
              </div>
            </div>

            {/* Vendor Coordination */}
            <div className="md:col-span-3 bg-surface-white border border-outline-variant relative overflow-hidden group min-h-[300px]">
              <div className="absolute inset-0 z-0 opacity-20 transition-opacity group-hover:opacity-40">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDa9ajcOcvLS2T4A524c_ktncjO3U1ZPJUqUtToORQvIjy6R7aGEqGiOCdGNsPcVLTCzpeWzr1pfoFFI2WCxv1twh3G1ib-_BHHlRZwl9xQ1CxhGeJaQx4RVgoswI3T3Zt1TwLIW1RA90TsJKqEFHZIgMfqdW2QdZ4rwEIBKJpJfwV4ogjcSgIjNA7FKFzzuOtkNCwqasDFORKLeMl-6VQxfzQ7DGJ0gaLJlLGF_dmLu2H7a3XKDhO6UyiQye6t59KBDKoomvf1hDyX')",
                  }}
                ></div>
              </div>
              <div className="relative z-10 p-8">
                <span className="material-symbols-outlined text-4xl text-safety-orange mb-6">
                  handshake
                </span>
                <h3 className="font-headline-md text-headline-md mb-4">
                  Vendor coordination
                </h3>
                <p className="text-on-surface-variant max-w-sm">
                  Seamless bridge between project sites and suppliers, ensuring
                  specifications are met and relationship lifecycle is managed
                  with precision.
                </p>
              </div>
            </div>

            {/* Material Supply */}
            <div className="md:col-span-2 bg-surface-container-low border border-outline-variant p-8 border-t-4 border-t-technical-blue min-h-[250px]">
              <span className="material-symbols-outlined text-4xl text-technical-blue mb-6">
                inventory_2
              </span>
              <h4 className="font-headline-md text-headline-md mb-4">
                Material supply
              </h4>
              <p className="text-on-surface-variant text-sm mb-6">
                Critical equipment and bulk materials delivered to the most remote
                project locations.
              </p>
              <ul className="space-y-2 font-technical-data text-xs text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-technical-blue rounded-full"></span>{" "}
                  STEEL FABRICATIONS
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-technical-blue rounded-full"></span>{" "}
                  PIPING &amp; VALVES
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-technical-blue rounded-full"></span>{" "}
                  ELECTRICAL SYSTEMS
                </li>
              </ul>
            </div>

            {/* Cargo Handling */}
            <div className="md:col-span-2 bg-surface-white border border-outline-variant p-8 flex flex-col justify-center items-center text-center min-h-[250px]">
              <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-primary-container text-3xl">
                  forklift
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md mb-4">
                Cargo handling
              </h4>
              <p className="text-on-surface-variant text-sm">
                Specialized stevedoring and warehousing for heavy-lift and
                hazardous cargo types.
              </p>
            </div>

            {/* Vessel Coordination */}
            <div className="md:col-span-2 bg-inverse-surface text-surface p-8 relative group cursor-pointer overflow-hidden min-h-[250px]">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-50 transition-opacity duration-500 z-0">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmrcfGxwATKbo10MrKzNmChQD4cA9QRPAolki12Gt2ohbpjtH5qLT8BzaT7_g9Glu1mojDtGqwkjlWJi38aQqVeCN15JRsw13HsFjMN_Sq0fLqU_DProl2iJjHAFElwoLF1tTP-XXvZwK8X7WhHiUpr2K68lS-vpX1Qb15zbVkRcgLqYFzqTdyzWDK1vTb7qZIW8HNVRjmrh4NyyXOR6xgk30mVMmTAN2u_6MpHSOaOPfSkgmOesrB25PaZXda2vjIJDY_uc1GV9tz')",
                  }}
                ></div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary-fixed mb-6">
                    directions_boat
                  </span>
                  <h4 className="font-headline-md text-headline-md mb-4 text-white">
                    Vessel coordination
                  </h4>
                  <p className="text-surface-variant text-sm mb-6">
                    Strategic chartering and agency services for offshore support
                    and commercial shipping.
                  </p>
                </div>
                <div className="bg-primary text-on-primary py-2 px-4 text-center font-technical-data text-xs mt-auto">
                  ACTIVE OPERATIONS: 24/7
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="lifecycle" className="bg-surface-container py-24">
          <div className="px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display-lg text-display-lg mb-4">
                Precision Logistics Lifecycle
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto font-body-lg">
                A systematic approach to supply chain management that eliminates
                bottlenecks and optimizes project timelines.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-outline-variant z-0"></div>
              <div className="relative z-10 flex flex-col items-center text-center px-4">
                <div className="w-24 h-24 bg-surface-white border-2 border-primary rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <span className="font-technical-data text-2xl font-bold text-primary">
                    01
                  </span>
                </div>
                <h5 className="font-headline-md text-base mb-2">
                  Requirement Analysis
                </h5>
                <p className="text-xs text-on-surface-variant font-technical-data">
                  TECHNICAL SPEC MAPPING
                </p>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center px-4">
                <div className="w-24 h-24 bg-surface-white border-2 border-outline-variant rounded-full flex items-center justify-center mb-6 shadow-sm group hover:border-primary transition-colors">
                  <span className="font-technical-data text-2xl font-bold text-outline group-hover:text-primary">
                    02
                  </span>
                </div>
                <h5 className="font-headline-md text-base mb-2">
                  Global Sourcing
                </h5>
                <p className="text-xs text-on-surface-variant font-technical-data">
                  VENDOR VERIFICATION
                </p>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center px-4">
                <div className="w-24 h-24 bg-surface-white border-2 border-outline-variant rounded-full flex items-center justify-center mb-6 shadow-sm group hover:border-primary transition-colors">
                  <span className="font-technical-data text-2xl font-bold text-outline group-hover:text-primary">
                    03
                  </span>
                </div>
                <h5 className="font-headline-md text-base mb-2">
                  QA/QC Inspection
                </h5>
                <p className="text-xs text-on-surface-variant font-technical-data">
                  QUALITY ASSURANCE
                </p>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center px-4">
                <div className="w-24 h-24 bg-surface-white border-2 border-outline-variant rounded-full flex items-center justify-center mb-6 shadow-sm group hover:border-primary transition-colors">
                  <span className="font-technical-data text-2xl font-bold text-outline group-hover:text-primary">
                    04
                  </span>
                </div>
                <h5 className="font-headline-md text-base mb-2">
                  Multimodal Transport
                </h5>
                <p className="text-xs text-on-surface-variant font-technical-data">
                  TRANSIT OPTIMIZATION
                </p>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center px-4">
                <div className="w-24 h-24 bg-primary text-on-primary rounded-full flex items-center justify-center mb-6 shadow-md">
                  <span className="material-symbols-outlined text-3xl">
                    check_circle
                  </span>
                </div>
                <h5 className="font-headline-md text-base mb-2">
                  Final Delivery
                </h5>
                <p className="text-xs text-on-surface-variant font-technical-data">
                  SITE HANDOVER
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
          <div className="bg-primary p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <span className="material-symbols-outlined text-[300px] absolute -top-12 -right-12">
                local_shipping
              </span>
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display-lg text-display-lg text-on-primary mb-6">
                Optimized Logistics for Complex Projects
              </h2>
              <p className="font-body-lg text-on-primary mb-12 opacity-90">
                Ready to streamline your supply chain and reduce operational
                overhead? Contact our logistics experts today for a tailored
                procurement strategy.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link
                  href="/contact"
                  className="bg-safety-orange text-on-primary px-10 py-5 font-bold hover:scale-105 transition-transform shadow-lg inline-block text-center"
                >
                  GET STARTED
                </Link>
                <button className="border-2 border-on-primary text-on-primary px-10 py-5 font-bold hover:bg-on-primary hover:text-primary transition-all">
                  DOWNLOAD BROCHURE
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
