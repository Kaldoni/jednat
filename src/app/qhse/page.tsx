'use client';

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Qhse() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    }, observerOptions);

    const sectionContainers = document.querySelectorAll("section > div");
    sectionContainers.forEach((el) => {
      el.classList.add("transition-all", "duration-700", "opacity-0", "translate-y-10");
      observer.observe(el);
    });

    return () => {
      sectionContainers.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <header className="relative pt-20 overflow-hidden bg-surface-container-low min-h-[716px] flex items-center">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 technical-grid opacity-40 pointer-events-none"></div>
          <div className="relative w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-3/5 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest border border-outline-variant rounded-full">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  verified_user
                </span>
                <span className="font-label-caps text-label-caps text-on-surface-variant">
                  ISO 9001:2015 CERTIFIED
                </span>
              </div>
              <h1 className="font-display-lg text-[40px] md:text-display-lg leading-tight text-on-surface">
                Quality, Safety, Health <br className="hidden md:block" /> and Environment
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-4 border-safety-orange pl-6 italic">
                &quot;To apply the best and most up to date knowledge... in solving
                even the simplest problem by providing quality and cost effective
                services with regards to Quality, Safety, Health and Environment.&quot;
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-3 pr-6 border-r border-outline-variant">
                  <span className="font-technical-data text-headline-md font-bold text-primary">
                    0
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase leading-tight">
                    Lost Time<br />Injuries
                  </span>
                </div>
                <div className="flex items-center gap-3 px-6">
                  <span className="font-technical-data text-headline-md font-bold text-primary">
                    100%
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase leading-tight">
                    Compliance<br />Rate
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/5 aspect-square relative group">
              <div className="absolute inset-0 bg-primary opacity-10 blur-3xl rounded-full scale-90 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative w-full h-full border border-outline-variant p-4 bg-surface-white rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  alt="An offshore oil platform at sunset, emphasizing structural safety engineering."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCca8H-fo01HJD9eikBxA1tp2CWP7KOo5h6Y9yNlsHoY7wAy9rA19UwiPeeuJDsWIhXn4BzKQaBh3E04SjiKJi_0GlyuNBk_u6-DjTX2eDVvOG95CrLxRBVq9cGvG0CP6zHzXIQDWQwVDcSLbmXxgfm6lOyBx9ORRcVBAhIqrEHtbs_v8sjn0Q7tgedtJuc7kZnsU0pdM6W1jB955_hegCiut1-qGb18x672h_2MGpSMUG9KFaaBwYvh5J99n9n2Kfarq092A5oFHo5"
                />
                <div className="absolute -bottom-6 -left-6 bg-surface-white border border-outline-variant p-4 shadow-lg hidden md:block">
                  <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">
                    PROJECT SITE 04-A
                  </div>
                  <div className="font-technical-data text-body-md text-primary font-bold">
                    Safety Clearance: ACTIVE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Core Pillars: Bento Grid */}
        <section className="py-24 bg-surface-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Our HSE &amp; Quality Framework
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                Our commitment to excellence is built on three foundational pillars
                that ensure the safety of our personnel and the integrity of every
                engineering solution.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {/* Safety Pillar */}
              <div className="md:col-span-8 group relative overflow-hidden bg-surface-container border border-outline-variant p-10 flex flex-col justify-between min-h-[400px]">
                <div className="relative z-10 space-y-4">
                  <span className="material-symbols-outlined text-safety-orange" style={{ fontSize: "48px" }}>
                    health_and_safety
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Safety First: People &amp; Environments
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                    We prioritize a culture where safety is intrinsic. Every
                    project begins with a comprehensive risk assessment, ensuring
                    that our team and the surrounding environment are protected
                    through advanced safety protocols and PPE compliance.
                  </p>
                  <ul className="space-y-3 pt-4">
                    <li className="flex items-center gap-3 font-technical-data text-body-md text-on-surface">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        check_circle
                      </span>
                      Zero-Harm Occupational Policy
                    </li>
                    <li className="flex items-center gap-3 font-technical-data text-body-md text-on-surface">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        check_circle
                      </span>
                      Environmental Impact Mitigation Plans
                    </li>
                  </ul>
                </div>
                <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <img
                    className="w-full h-full object-cover"
                    alt="Industrial safety equipment, white hard hat and vest."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV2hIZ2xcvOF6yFSAAKdTCa4H5T8vRqP98n52aqOiFwkrzB5vAEIL-sCGjzscEu4Gq6ImcmlfqG6HXBhVS0GEygfQzt8yn2mceFLuBGawSRHhbMpGYViafksZcuEUzKfDLh-hgwOp-31CvkNAvCAcX9Reh-V9n2kezRDVcMc-MLGZ8n9ZQgN-U_0ki2FRVarxh6io-3sR3HlD6HMfmqpJxqs35ZTgCTN-N3JIAfJrDVXXql_WBVizF6WNj4TTEPU6Hrt5aRza3luIB"
                  />
                </div>
              </div>

              {/* Quality & Compliance */}
              <div className="md:col-span-4 bg-surface-white border-t-4 border-primary border-x border-b border-outline-variant p-10 flex flex-col gap-6">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: "48px" }}>
                  verified
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Quality &amp; Compliance
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Meeting international standards is our baseline. We maintain
                  rigorous QA/QC processes throughout the engineering lifecycle to
                  ensure cost-effective, high-performance results.
                </p>
                <div className="mt-auto pt-6 border-t border-outline-variant">
                  <div className="flex items-center justify-between font-label-caps text-[11px] text-on-surface-variant mb-4">
                    <span>COMPLIANCE SCORE</span>
                    <span className="text-primary font-bold">98.4%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[98.4%]"></div>
                  </div>
                </div>
              </div>

              {/* Sustainability */}
              <div className="md:col-span-12 flex flex-col md:flex-row bg-inverse-surface text-inverse-on-surface overflow-hidden">
                <div className="w-full md:w-1/2">
                  <img
                    className="w-full h-full min-h-[300px] object-cover"
                    alt="A modern green energy facility integrated with natural landscape."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr7dr8RNmDYcUAEouGWiNa5L08AVPS7DlUR_Ql6tAFGi7yNsmfVvwSREfCAug_7aDwjn7uQ5Ygm1fFAmvEWhunka4ptKib1_LPF7LMfeBL2ahCh_CW6jLoFDuRrgp0eze0Gnc3WAUsw8VVyUHi0QPYB7ra0BC54a-fNXmJYo9CywDwdleAInL9tINEUTBLKeXs6QYSR1VCXzNxRn1_UIAezIGCpHZB32kf3MrGDFMmpHozQvEJW2SyDOQ8WsNgFbWPbWhRtjeJYQcl"
                  />
                </div>
                <div className="w-full md:w-1/2 p-10 md:p-16 space-y-6">
                  <div className="inline-block px-3 py-1 border border-primary text-primary font-label-caps text-label-caps">
                    FUTURE-PROOFING
                  </div>
                  <h3 className="font-headline-lg text-headline-lg">
                    Safety &amp; Sustainability
                  </h3>
                  <p className="font-body-md text-body-md text-surface-variant opacity-90 leading-relaxed">
                    Sustainable engineering isn't just about the environment;
                    it's about building systems that endure. We integrate
                    eco-conscious practices with high-durability materials to
                    minimize the carbon footprint while maximizing the operational
                    lifespan of every project we undertake.
                  </p>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 group text-primary font-bold hover:text-primary-fixed transition-colors"
                  >
                    <span className="font-label-caps">EXPLORE OUR ESG GOALS</span>
                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details / Stats */}
        <section className="py-24 bg-surface-container-low border-y border-outline-variant">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center text-on-primary rounded-lg">
                  <span className="material-symbols-outlined">rule</span>
                </div>
                <h4 className="font-headline-md text-on-surface">Rigorous QC</h4>
              </div>
              <p className="font-body-md text-on-surface-variant">
                Step-by-step verification processes at every stage of
                procurement, logistics, and site engineering.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-safety-orange flex items-center justify-center text-on-primary rounded-lg">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <h4 className="font-headline-md text-on-surface">Advanced Training</h4>
              </div>
              <p className="font-body-md text-on-surface-variant">
                Continuous HSE training for all manpower, ensuring the latest
                safety knowledge is applied on-field.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-steel-gray flex items-center justify-center text-on-primary rounded-lg">
                  <span className="material-symbols-outlined">monitoring</span>
                </div>
                <h4 className="font-headline-md text-on-surface">Data-Driven</h4>
              </div>
              <p className="font-body-md text-on-surface-variant">
                Real-time safety monitoring and incident reporting using digital
                technical schematics and logging.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
