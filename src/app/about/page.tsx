'use client';

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  useEffect(() => {
    const cards = document.querySelectorAll(".group");
    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const card = mouseEvent.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <header className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden technical-grid-bg">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
            <div className="max-w-3xl">
              <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-4">
                SINCE 2009
              </span>
              <h1 className="font-display-lg text-display-lg md:text-[64px] text-on-surface leading-none mb-8">
                Our Story
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant border-l-4 border-safety-orange pl-6 py-2">
                A narrative of engineering excellence, technical precision, and
                a commitment to shaping the industrial future of the energy
                sector.
              </p>
            </div>
          </div>
          {/* Decorative Coordinate Markers */}
          <div className="absolute right-margin-desktop top-48 hidden lg:block opacity-20">
            <div className="text-vertical font-technical-data text-technical-data text-steel-gray">
              LAT: 4.8156° N | LONG: 7.0498° E
            </div>
          </div>
        </header>

        {/* Core Vision & Mission - Bento Layout */}
        <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Vision Card */}
            <div className="md:col-span-7 bg-surface-white border border-outline-variant p-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              <span className="material-symbols-outlined text-primary text-5xl mb-8">
                visibility
              </span>
              <h2 className="font-headline-lg text-headline-lg mb-6">Our Vision</h2>
              <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                To be a global leader in integrated industrial services, admired
                for our dedication to quality, integrity, and sustainable
                progress. We strive to redefine industrial boundaries through
                precision and safety.
              </p>
              <div className="mt-12 flex items-center gap-4">
                <div className="h-[1px] flex-grow bg-outline-variant"></div>
                <span className="font-technical-data text-technical-data text-steel-gray uppercase">
                  Global Perspective
                </span>
              </div>
            </div>

            {/* Image/Atmospheric Card */}
            <div className="md:col-span-5 h-[400px] md:h-auto border border-outline-variant relative overflow-hidden">
              <div className="absolute inset-0 bg-primary opacity-10 text-primary"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1zMw28XyPXk7Q2ISLRNJjpIYVJ6pXiaWHQaF3Wx584MCS5yygVf_Qe892LM8LoOdTNWnX9Z9yEmJh-F_TxgHSPFBsQi6kCvSzCmqKTEJTtcB3EyGDHS0JMFsSNzGhis_p3HE6pzYZ7qXAJl0apHYmUPZdB9kfDEqvFrRjQN_hO5nUczE3KT4rPFZZS-M_gAkw_DPb_ifuyvmnYpbqdC5q773hIFq5lKNCzZviuCe8H8atqmXw56_KCBiP09e6Eja2keM7_c_HaTqx')",
                  }}
                ></div>
              </div>
              <div className="absolute bottom-6 left-6 bg-surface-white px-4 py-2 border border-outline-variant">
                <span className="font-technical-data text-technical-data text-primary">
                  OPERATIONS
                </span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="md:col-span-12 bg-surface-container-highest border border-outline-variant p-10 flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <span className="material-symbols-outlined text-safety-orange text-5xl mb-6">
                  rocket_launch
                </span>
                <h2 className="font-headline-lg text-headline-lg">Our Mission</h2>
              </div>
              <div className="md:w-2/3">
                <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                  To apply the best and most up to date knowledge in the
                  engineering and industrial space. We are committed to solving
                  even the simplest problem by providing quality and cost
                  effective services with regards to{" "}
                  <span className="font-bold text-on-surface">
                    Quality, Safety, Health and Environment
                  </span>
                  . Our methodology merges traditional reliability with modern
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-inverse-surface text-surface-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-16">
              <h2 className="font-headline-lg text-headline-lg mb-2">Our Values</h2>
              <div className="w-24 h-1 bg-safety-orange"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
              {/* Integrity */}
              <div className="group">
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-technical-data text-technical-data text-primary-fixed">
                    01
                  </span>
                  <div className="h-[1px] flex-grow bg-outline opacity-30"></div>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 text-primary-fixed">
                  Integrity
                </h3>
                <p className="font-body-md text-body-md text-surface-variant">
                  Transparency in every contract and honesty in every operation.
                  We build trust through technical consistency.
                </p>
              </div>
              {/* Safety */}
              <div className="group">
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-technical-data text-technical-data text-primary-fixed">
                    02
                  </span>
                  <div className="h-[1px] flex-grow bg-outline opacity-30"></div>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 text-primary-fixed">
                  Safety
                </h3>
                <p className="font-body-md text-body-md text-surface-variant">
                  Our primary mandate is the protection of our personnel and the
                  environment. Zero-compromise safety protocols.
                </p>
              </div>
              {/* Innovation */}
              <div className="group">
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-technical-data text-technical-data text-primary-fixed">
                    03
                  </span>
                  <div className="h-[1px] flex-grow bg-outline opacity-30"></div>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 text-primary-fixed">
                  Innovation
                </h3>
                <p className="font-body-md text-body-md text-surface-variant">
                  Utilizing cutting-edge engineering tech to solve complex
                  logistics and procurement challenges.
                </p>
              </div>
              {/* Excellence */}
              <div className="group">
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-technical-data text-technical-data text-primary-fixed">
                    04
                  </span>
                  <div className="h-[1px] flex-grow bg-outline opacity-30"></div>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 text-primary-fixed">
                  Excellence
                </h3>
                <p className="font-body-md text-body-md text-surface-variant">
                  Precision-driven results that exceed industry standards for
                  quality and performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="font-headline-lg text-headline-lg mb-4">
                Our Leadership
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Driven by a multi-disciplinary team of experts with decades of
                collective experience in the oil, gas, and infrastructure
                sectors.
              </p>
            </div>
            <div className="font-technical-data text-technical-data text-steel-gray">
              [ TEAM_PROFILE ]
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* CEO */}
            <div className="group">
              <div className="aspect-[3/4] bg-surface-container border border-outline-variant mb-6 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt="Engr. Nifemi Balogun, Chief Executive Officer"
                  src="/pictures/nifemi-balogun.png"
                />
                <div className="absolute top-4 right-4 bg-primary text-on-primary font-technical-data text-[10px] px-2 py-1">
                  CEO
                </div>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface">
                Engr. Nifemi Balogun
              </h4>
              <p className="font-label-caps text-label-caps text-primary mb-2">
                CHIEF EXECUTIVE OFFICER
              </p>
              <div className="h-[1px] w-full bg-outline-variant mb-4"></div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Leading Jednat's strategic growth and engineering vision with
                focused technical precision.
              </p>
            </div>
            {/* Procurement */}
            <div className="group">
              <div className="aspect-[3/4] bg-surface-container border border-outline-variant mb-6 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt="Kalio Daniel, Procurement & Logistics"
                  src="/pictures/kalio-daniel.png"
                />
                <div className="absolute top-4 right-4 bg-steel-gray text-on-primary font-technical-data text-[10px] px-2 py-1">
                  PROCUREMENT
                </div>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface">
                Kalio Daniel
              </h4>
              <p className="font-label-caps text-label-caps text-primary mb-2">
                PROCUREMENT &amp; LOGISTICS
              </p>
              <div className="h-[1px] w-full bg-outline-variant mb-4"></div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Optimizing complex supply chains and ensuring global material
                delivery with zero downtime.
              </p>
            </div>
            {/* Financial */}
            <div className="group">
              <div className="aspect-[3/4] bg-surface-container border border-outline-variant mb-6 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt="Steve Brown, Financial Director"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGTUrV5yYowew1NedtPvoy9PbEireDrvrQxqlTSR8xZ4VJGIvTxaXLYK3z_8mRMth7NLKgYwaP6gCnxl5hhms-aMhdsZeL7L4Z9cR_JveY31-FPBUwlDsQu4wXDuCB5t8aZDcLWCvp9hMgZDaGMOO_xXO656uGvy_6H8Wthz9nbza0Vr7sGaNSD55iAJ_dZxF7xgWepdYPp1XiMpLvb5lSfXTF-shFasEmJLZFuLn7bfmbzspK4CnZ7M7sH81g2OO9-pyOm1r3ej2p"
                />
                <div className="absolute top-4 right-4 bg-technical-blue text-on-primary font-technical-data text-[10px] px-2 py-1">
                  FINANCE
                </div>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface">
                Mr. Steve Brown
              </h4>
              <p className="font-label-caps text-label-caps text-primary mb-2">
                FINANCIAL DIRECTOR
              </p>
              <div className="h-[1px] w-full bg-outline-variant mb-4"></div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Managing corporate fiscal health and sustainable investment in
                technical infrastructure.
              </p>
            </div>
            {/* Operations */}
            <div className="group">
              <div className="aspect-[3/4] bg-surface-container border border-outline-variant mb-6 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt="Victory Smith, Operations Director"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJvns98VXLscFHGQkTarRR65zAgnRhpbc-UDbDIJAEm6C50kNhIrREZ2CLgzYDbp_IYR1yNty_nQ5A5qUtvS3zJOWb5XTGEL0Kg92r0d7BW0fKor32Q9AvfknvoU6y5ZMGRw2S4d5gLYf4mnWgW1Ecqg2HWgyF5tEsjTQ-AAg2V-0c4ai1-Vat2cD-wt2IsaDtieNfTQO8ProQ-Qsvo7FWIRM9ebTvx800hVeBAZgLF9zpxO0pzilj44wyLfExXCN1C5qnbOrzVGJO"
                />
                <div className="absolute top-4 right-4 bg-safety-orange text-on-primary font-technical-data text-[10px] px-2 py-1">
                  OPERATIONS
                </div>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface">
                Ms. Precious 
              </h4>
              <p className="font-label-caps text-label-caps text-primary mb-2">
                OPERATIONS DIRECTOR
              </p>
              <div className="h-[1px] w-full bg-outline-variant mb-4"></div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Overseeing daily industrial workflows and ensuring project
                milestones are met safely.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-surface-container-high border-y border-outline-variant relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none technical-grid-bg"></div>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
            <h2 className="font-display-lg text-display-lg mb-8 text-on-surface">
              Ready to build the future?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
              Partner with Jednat Projects for integrated engineering solutions
              that prioritize safety and technical excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary text-on-primary px-10 py-4 rounded font-bold hover:opacity-85 transition-all flex items-center justify-center gap-2 text-center"
              >
                Start a Project
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <button className="border border-outline text-on-surface px-10 py-4 rounded font-bold hover:bg-surface-white transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
