'use client';

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add(
        "transition-all",
        "duration-700",
        "ease-out",
        "opacity-0",
        "translate-y-10"
      );
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[631px] flex items-center overflow-hidden technical-grid">
          <div className="absolute inset-0 bg-gradient-to-r from-surface-white via-surface-white/90 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDjzgqBUWVicv3xYJ7WlltZcYVIUY6QJ4NMRV4W-gTjwBHVls91rVMIaodtXwj5C4aO0DSzYvVLLx-ljIsIiWQXkxgOA487Ei8Br3YdFb6jfdqZg1sSSAkSj9hi9g0Cw7KU-rzDJh5y-vlGhatVjwULFWWnYl_OzJkF7zk1jAZX3VnJn2VkfiKwHn6mgFKYmNNHZPuu0wskNJiwo30_S-5syxA_ty74I3MDyJMpPyM7nlYueEYGVivQUWyiZ0DbFu0vvT0DnSR5GG8')",
              }}
            ></div>
          </div>
          <div className="container max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-20">
            <div className="max-w-3xl">
              <span className="font-label-caps text-label-caps text-primary bg-primary-fixed/20 px-3 py-1 mb-6 inline-block">
                ENGINEERING EXCELLENCE
              </span>
              <h1 className="font-display-lg text-3xl md:text-5xl lg:text-6xl text-on-background mb-6 leading-tight">
                Engineering Solutions and Technical Services for the{" "}
                <span className="text-primary">Energy Industry</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl">
                Delivering innovative, cost-effective, and quality-driven
                services across Oil & Gas, Construction, Manufacturing,
                Procurement & Consultation. Partner with a solutions provider
                committed to safety, environmental stewardship, and long-term
                value.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-primary text-on-primary px-8 py-4 font-bold rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg shadow-primary/20"
                >
                  Contact us
                </Link>
                <Link
                  href="/projects"
                  className="border border-outline text-on-surface px-8 py-4 font-bold rounded-lg hover:bg-surface-container-high transition-colors flex items-center gap-2"
                >
                  View Projects{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do - Bento Grid Style */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="container max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-background mb-6">
                  What We Do
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Jednat Projects specializes in solving complex engineering
                  challenges and driving operational efficiency. We bridge the
                  gap between conceptual design and high-performance execution,
                  ensuring every project adheres to the highest global standards
                  of safety and technical precision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-24 bg-surface">
          <div className="container max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                Our Expertise
              </span>
              <h2 className="font-headline-lg text-headline-lg mt-4">
                Core Service Areas
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {/* Oil & Gas Card */}
              <div className="group bg-white border border-outline-variant overflow-hidden hover:border-primary transition-colors duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="A cinematic close-up of a high-pressure valve system on an oil refinery line."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSLv2DDDWMU0nORqGmmkA2Wqj743yL3KmZ-dIPauuqFGmjCtmrpltpKIUe1aj9IBsRo87KzYfUepfshT9kyaw6lZYK5REu0iHTBPO0X-0kjUFx7oc9q2TkoMECZAUg_4uUENXwd-gmztp8VI7jE4Xlr25PQShbBSrXWcKPJSqWY0BzqGJoTKyng8fxlI_GrMu8Oelf1IOXND6Don7paI7ySSy3XGJ9Lt8XF_VyEzvZeZYrAt6YU2qtiidgo9MjsJSpNjzF_QFqCGE0"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-headline-md text-headline-md mb-3">
                    Oil &amp; Gas Services
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-4">
                    Comprehensive upstream and downstream technical support and
                    maintenance.
                  </p>
                  <Link
                    className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                    href="/services"
                  >
                    Learn More{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
              {/* Construction Card */}
              <div className="group bg-white border border-outline-variant overflow-hidden hover:border-primary transition-colors duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="A wide-angle shot of a massive steel structure being erected at an industrial construction site."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxpPxf8S1qkzyAFxKEOqkGdt4d1DIC5tEnVb92xxEr6SPMQtf1qwB35dIULjsblE9tixpSFdZkcdrcmbRKW6pHfPlxfELg68L5KTeazZnlSmwk6RIMvGIRUdQrNmScw1O7lBfKqdkdUfBte7Q8GkXZtsSknmIKntXNVJ_WlgGSa3tUgx2FIJw_YeH5m7QPQnND0lAAfrXW5eKcnc9rh6HSme2i3B2fvBAEzMEwUK_Ea47uw7YMdI3wtB-42cY0isipZdaKVApFwWZn"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-headline-md text-headline-md mb-3">
                    Construction
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-4">
                    Heavy-duty engineering and structural development for
                    industrial plants.
                  </p>
                  <Link
                    className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                    href="/services"
                  >
                    Learn More{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
              {/* Engineering Card */}
              <div className="group bg-white border border-outline-variant overflow-hidden hover:border-primary transition-colors duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="A top-down view of a complex engineering blueprint spread across a drafting table."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK64Sn552zsxW3F9QiHG9ocijy3KirsfLoAVexuaXQonGZ2DKF_-8Mk5Kstoo_y3aopk9h2ThBTiAOTpnKkkWCRVCc4Yr82bhwaBlSjvdyAnvCmiNbhmJnkVu-Z_K1If6ESFSRk4lvSv4W6m8OQtunpSXPKD_yVBHMhWyI1xSuLRDEA-M_31-Qqf8q0Vn0aIIb2QN6QcGmXwfg0lbbDFo4u4K8THOKdniQPNkdZ-35nEcK5Ku6yF9g_m5rJ3KCumSAbwmYhhbIh2U2"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-headline-md text-headline-md mb-3">
                    Engineering
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-4">
                    Design, prototyping, and technical problem-solving for
                    manufacturing sectors.
                  </p>
                  <Link
                    className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                    href="/services"
                  >
                    Learn More{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
              {/* Procurement Card */}
              <div className="group bg-white border border-outline-variant overflow-hidden hover:border-primary transition-colors duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="A well-organized industrial warehouse featuring rows of high-spec machinery components."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8PQ4ytmn-nFGqmdnevYw1IuTXTA3gmydDWsQDkaPBtioc--EpEU5YdvBpzfQ8TWO7Rq_2f3ErR1R_HryPBL14M7h8N6G7ypKoW6COC8DixXHnkMm1eyXZooY74ETDrnzVuVA9_c4aCiqkPYKDB4EZSKUnQDFOPPQX-0ywNtj0rHQAzZQY3kyCAgw2WY7B2232ppVcrnepBscrdkyRGf2G4bps5XLQRBr66dBDVD_ntzm9aKToaD4KnCIVUWLVk1MXb6Z9hWoXtQS9"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-headline-md text-headline-md mb-3">
                    Procurement
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-4">
                    Global sourcing of specialized equipment and logistics for
                    major energy projects.
                  </p>
                  <Link
                    className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                    href="/services/procurement-logistics"
                  >
                    Learn More{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-surface-container-high border-y border-outline-variant relative overflow-hidden">
          <div className="container max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="aspect-square bg-surface border border-outline-variant p-2">
                  <img
                    className="w-full h-full object-cover"
                    alt="A professional portrait of an engineering team discussing a project around a technical workstation."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCreHqff7cAUWoBpiXjoG0bDMogZAww-oTnqE4hz1paZvMh-XweLNEypfh9lWpPAeiJ2vLNzs4r1iZ_7X1hbWqvFN4cAxTb1ePph-CQ8AhbPROhURFnfGoocFRhJbGnKtCnvkB2axqFwpxknADKaXichJZafztdhkK-lILeBCSYuHAlfwMjZT61q5e0-JMmxDgL5ky4iWPK-StGO932VoIYImISDbyDihoa_Mrn3CzXo5SPnqlmJhrLO7Htl6_8mnAuPs8sP-HpYVQh"
                  />
                </div>
                {/* Stats Overlay */}
                <div className="absolute -bottom-10 -right-10 bg-primary p-8 text-on-primary shadow-2xl hidden md:block">
                  <div className="font-display-lg text-display-lg">15+</div>
                  <div className="font-label-caps text-label-caps opacity-80 uppercase">
                    Years of Excellence
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font-headline-lg text-headline-lg mb-8">
                  Why Choose Jednat Projects?
                </h2>
                <ul className="space-y-8">
                  <li className="flex gap-6">
                    <span className="material-symbols-outlined text-primary bg-primary-fixed/30 p-3 rounded-lg h-fit">
                      verified
                    </span>
                    <div>
                      <h4 className="font-headline-md text-headline-md text-on-background mb-1">
                        Industry Expertise
                      </h4>
                      <p className="text-on-surface-variant">
                        Deep-rooted knowledge in the energy and oil &amp; gas
                        sectors with a proven track record of complex project
                        delivery.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="material-symbols-outlined text-primary bg-primary-fixed/30 p-3 rounded-lg h-fit">
                      speed
                    </span>
                    <div>
                      <h4 className="font-headline-md text-headline-md text-on-background mb-1">
                        Innovation &amp; Cost Efficiency
                      </h4>
                      <p className="text-on-surface-variant">
                        Leveraging cutting-edge technical solutions to reduce
                        operational costs without sacrificing quality.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="material-symbols-outlined text-primary bg-primary-fixed/30 p-3 rounded-lg h-fit">
                      nature_people
                    </span>
                    <div>
                      <h4 className="font-headline-md text-headline-md text-on-background mb-1">
                        Safety &amp; Sustainability
                      </h4>
                      <p className="text-on-surface-variant">
                        Committed to environmental stewardship and ensuring the
                        safety of our workforce and host communities.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-surface-white">
          <div className="container max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-16">
              <h2 className="font-headline-lg text-headline-lg">
                Client Testimonials
              </h2>
              <div className="w-24 h-1 bg-primary mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="p-8 border border-outline-variant bg-surface-container-low flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">
                    format_quote
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant italic mb-8">
                    &quot;Jednat Projects delivered our facility upgrade ahead of
                    schedule with zero safety incidents. Their procurement team
                    is world-class.&quot;
                  </p>
                </div>
                <div>
                  <div className="font-bold text-on-background">
                    Operations Director
                  </div>
                  <div className="font-technical-data text-technical-data text-primary">
                    Hotkeysng LTD
                  </div>
                </div>
              </div>
              <div className="p-8 border border-outline-variant bg-surface-container-low flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">
                    format_quote
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant italic mb-8">
                    &quot;Their technical consultation saved us significantly on
                    structural overheads. A reliable partner for long-term
                    energy projects.&quot;
                  </p>
                </div>
                <div>
                  <div className="font-bold text-on-background">
                    Chief Engineer
                  </div>
                  <div className="font-technical-data text-technical-data text-primary">
                    Energy Services LTD
                  </div>
                </div>
              </div>
              <div className="p-8 border border-outline-variant bg-surface-container-low flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">
                    format_quote
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant italic mb-8">
                    &quot;Professionalism at every level. From procurement to
                    execution, Jednat maintains the highest industrial standards.&quot;
                  </p>
                </div>
                <div>
                  <div className="font-bold text-on-background">Project Lead</div>
                  <div className="font-technical-data text-technical-data text-primary">
                    ADC Industrial Development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
