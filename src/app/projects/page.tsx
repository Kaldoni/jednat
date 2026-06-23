'use client';

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Project {
  id: number;
  title: string;
  category: string;
  sector: "Oil & Gas" | "EPCM" | "Marine";
  description: string;
  bgImage: string;
  imageAlt: string;
  outcome: string;
  badgeType: "primary" | "secondary" | "orange";
  size: "large" | "medium";
}

export default function Projects() {
  const [selectedSector, setSelectedSector] = useState<string>("All Sectors");

  const sectors = ["All Sectors", "Oil & Gas", "EPCM", "Marine"];

  const projectsList: Project[] = [
    {
      id: 1,
      title: "Integrated Refinery Expansion Phase II",
      category: "EPCM SUPPORT",
      sector: "EPCM",
      description: "Execution of multi-discipline engineering and procurement services for a major refining facility upgrade, focusing on capacity optimization and safety integration.",
      bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_sG8oT7DHA1coUyWpN3CogmBXbA2P67PhoRMlgjCnEGE3MRX8EA7pUqGI_lDpZSx_t6sKzhmyx0q9nfX_LG0fSGGMBoG2GCqls1D9P0Bzq9d48fVzNSTz-wo8IM_sLphW6yX0w8NDvXwWpMT8zBwuPW4exc94wkO4fsam4jlZD4exPER0EXabyh8tzJtIC_TalwuVpx7b6GR-fy9Wh7jPvgCrGQIS-05c7ELaa8_Iovkxfpzcj7ghetLtWSRGTVTVPU1LnDf06HMj",
      imageAlt: "A cinematic, wide-angle shot of a massive industrial energy complex under construction at twilight.",
      outcome: "15% increase in operational throughput and zero LTI recorded over 500k man-hours.",
      badgeType: "primary",
      size: "large",
    },
    {
      id: 2,
      title: "Trans-Delta Pipeline Integrity Project",
      category: "Pipeline Maintenance",
      sector: "Oil & Gas",
      description: "State-of-the-art non-destructive testing and structural reinforcement of subsea and terrestrial segments.",
      bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6SqrdOL1_vXQAwMHY_7v5FsWGlPHtDjm-LieOQ82l8hrO0ES4wjPJPahK3YFsBBMfwoZEVNHKsAqEEzwqQ-uLuY6UYdFpOddZoHNvAVnG2iYGHz3wnYdw1DYDMog8deyxfWXrJ3idNhSL4zUlubitxzoC48MYiZjakqCLLxT3ELtySVuI38D_foGGMxQJbtcf4d8QBdBxOgqdwIrB0_RlYMIe-zOKDSkD0fSQnSa5UQELV8nMxRwsJbyIzwqltvbM-D_evwIrVGyQ",
      imageAlt: "Close-up technical shot of specialized welding on a large industrial pipeline running through a rugged terrain.",
      outcome: "32km segment secured",
      badgeType: "secondary",
      size: "medium",
    },
    {
      id: 3,
      title: "Offshore Logistics Support Cluster",
      category: "Marine Logistics",
      sector: "Marine",
      description: "Streamlining procurement and material handling for deepwater exploration blocks.",
      bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmBOdPRTVy6EFKQ6xZkYGSc4aTUwJ8gQclDz14EgKkA9Zg6QufeEa01rl2uaGrCdTQbddsbvdBoiHhCoa1zoIhprNCiBnssUOOgDgKBtKz0Lxj8X2GM5nBm5ZOJcNw5qUgREmZb_KpswbWUsYrK_L3X9Y1JpyJMw6cC3JfzypXuYHGhNTv0AJghQX5Fb9ReqEwKe89abVeb8PpG2ZTHhAKMBg-AMFutEXFpqYdh98SMHIUPM9WhgdmJZF0GH7xRAl5b2nsiqv3kaVy",
      imageAlt: "A high-performance offshore supply vessel navigating through deep blue ocean waters.",
      outcome: "Reduced supply chain latency by 22% for the client’s offshore operations.",
      badgeType: "primary",
      size: "medium",
    },
    {
      id: 4,
      title: "Wellhead Maintenance Campaign",
      category: "Oil & Gas Services",
      sector: "Oil & Gas",
      description: "Comprehensive preventive maintenance and valve servicing for 15 active well sites.",
      bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkuXBHd17AFSPxkSMn7THJwnnaSVaSNiStS1EMF7WCRuUWYaclP-KlqMo9NadjY6rN4f2xlOXPbfMdYs-K3IfjqXwJ-9VuFqqxreXRZRJwGw3r4kfm5hkYES_8IKtI4BodJCZ6G5EEvFCiAELzdsaddAv97rxBeOVfdlt_WJsYUYpxlWihCqyRHV7jY2VjVrfultivoFLPTrLtvUzXWKukxdBE7yNv6P-aK9myftmcykRud9Cd5Ndfs7RWRsNeShuEo2GEu68eXHnB",
      imageAlt: "A professional technician in a clean industrial workshop environment, inspecting mechanical parts.",
      outcome: "Extended equipment lifecycle by approximately 4 years per asset.",
      badgeType: "orange",
      size: "medium",
    },
  ];

  const filteredProjects =
    selectedSector === "All Sectors"
      ? projectsList
      : projectsList.filter((proj) => proj.sector === selectedSector);

  return (
    <>
      <Header />
      <main className="pt-20 flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 technical-grid-bg overflow-hidden border-b border-outline-variant">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-primary text-on-primary font-label-caps text-label-caps rounded-sm mb-6 uppercase tracking-widest">
                Global Expertise
              </span>
              <h1 className="font-display-lg text-display-lg mb-8 text-on-background">
                Projects &amp; Experience
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-10">
                At Jednat Projects and Services Limited, we help businesses solve
                complex challenges, increase operational efficiency, and unlock new
                growth opportunities across multiple industrial sectors. Our
                portfolio demonstrates a commitment to technical precision and safety.
              </p>
            </div>
          </div>
        </section>

        {/* Project Filtering / Categorization */}
        <section className="py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div>
                <h2 className="font-headline-lg text-headline-lg mb-2">Track Record</h2>
                <div className="h-1 w-24 bg-primary"></div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {sectors.map((sector) => (
                  <button
                    key={sector}
                    onClick={() => setSelectedSector(sector)}
                    className={`font-technical-data text-technical-data px-4 py-2 border transition-all duration-200 rounded-sm ${
                      selectedSector === sector
                        ? "border-primary text-primary bg-primary-container/10 font-bold"
                        : "border-outline-variant text-on-surface-variant hover:border-primary"
                    }`}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {filteredProjects.map((project) => {
                if (project.size === "large") {
                  return (
                    <div
                      key={project.id}
                      className="md:col-span-8 group border border-outline-variant bg-surface-white overflow-hidden relative border-t-4 border-t-primary transition-all hover:scale-[1.01] hover:shadow-lg"
                    >
                      <div className="flex flex-col md:flex-row h-full">
                        <div className="md:w-1/2 overflow-hidden relative min-h-[300px]">
                          <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-115"
                            style={{ backgroundImage: `url('${project.bgImage}')` }}
                          ></div>
                        </div>
                        <div className="md:w-1/2 p-10 flex flex-col justify-between">
                          <div>
                            <span className="font-label-caps text-label-caps text-primary mb-4 block">
                              {project.category}
                            </span>
                            <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">
                              {project.title}
                            </h3>
                            <p className="font-body-md text-on-surface-variant mb-6">
                              {project.description}
                            </p>
                          </div>
                          <div className="bg-surface-container p-6 border-l-4 border-primary">
                            <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">
                              KEY OUTCOME
                            </span>
                            <span className="font-technical-data text-technical-data font-bold text-on-surface">
                              {project.outcome}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  let borderTopColor = "border-t-primary";
                  let tagColor = "text-primary";
                  if (project.badgeType === "secondary") {
                    borderTopColor = "border-t-technical-blue";
                    tagColor = "text-technical-blue";
                  } else if (project.badgeType === "orange") {
                    borderTopColor = "border-t-safety-orange";
                    tagColor = "text-safety-orange";
                  }

                  return (
                    <div
                      key={project.id}
                      className={`md:col-span-4 border border-outline-variant bg-surface-white flex flex-col border-t-4 ${borderTopColor} group hover:scale-[1.01] hover:shadow-lg transition-all`}
                    >
                      <div className="h-48 overflow-hidden relative">
                        <div
                          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-115"
                          style={{ backgroundImage: `url('${project.bgImage}')` }}
                        ></div>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                      </div>
                      <div className="p-8 flex-grow">
                        <span className={`font-label-caps text-label-caps ${tagColor} mb-2 block uppercase`}>
                          {project.category}
                        </span>
                        <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">
                          {project.title}
                        </h3>
                        <p className="font-body-md text-on-surface-variant mb-6">
                          {project.description}
                        </p>
                      </div>
                      <div className="px-8 pb-8 mt-auto">
                        <div className="pt-4 border-t border-outline-variant">
                          <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">
                            {project.badgeType === "secondary" ? "KEY OUTCOME" : "OUTCOME"}
                          </span>
                          <span className="font-technical-data text-technical-data text-on-surface flex items-center gap-2">
                            {project.badgeType === "secondary" && (
                              <span className="material-symbols-outlined text-[18px]">verified</span>
                            )}
                            {project.outcome}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}

              {/* Technical Training & Manpower (Always visible / EPCM) */}
              {(selectedSector === "All Sectors" || selectedSector === "EPCM") && (
                <div className="md:col-span-4 border border-outline-variant bg-inverse-surface p-8 flex flex-col justify-between group hover:scale-[1.01] hover:shadow-lg transition-all min-h-[400px]">
                  <div>
                    <div className="flex justify-between items-start mb-10">
                      <span className="material-symbols-outlined text-primary text-4xl">
                        engineering
                      </span>
                      <span className="font-technical-data text-technical-data text-surface-variant px-3 py-1 border border-outline">
                        Active
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md mb-4 text-surface-white">
                      Technical Training &amp; Manpower
                    </h3>
                    <p className="font-body-md text-surface-variant">
                      Specialized workforce deployment for large-scale EPCM projects
                      across West Africa.
                    </p>
                  </div>
                  <div className="mt-12">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex -space-x-4">
                        <div className="w-10 h-10 rounded-full border-2 border-inverse-surface bg-surface-dim"></div>
                        <div className="w-10 h-10 rounded-full border-2 border-inverse-surface bg-surface-container-highest"></div>
                        <div className="w-10 h-10 rounded-full border-2 border-inverse-surface bg-primary"></div>
                      </div>
                      <span className="font-technical-data text-technical-data text-surface-white">
                        250+ Certified Experts Deployed
                      </span>
                    </div>
                    <Link
                      href="/contact"
                      className="w-full py-3 border border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-all text-center inline-block"
                    >
                      VIEW MANPOWER CAPABILITIES
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-surface-container-low border-y border-outline-variant">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <div className="font-display-lg text-display-lg text-primary mb-1">12+</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">
                Years Excellence
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="font-display-lg text-display-lg text-primary mb-1">85%</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">
                Client Retention
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="font-display-lg text-display-lg text-primary mb-1">Zero</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">
                LTI Record
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="font-display-lg text-display-lg text-primary mb-1">50+</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">
                Project Sites
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-surface-white relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
            <h2 className="font-headline-lg text-headline-lg mb-6">
              Partner with technical precision.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Ready to discuss your next industrial project? Our engineering team
              is standing by to provide feasibility studies and logistics support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-primary text-on-primary px-10 py-4 font-bold rounded-sm shadow-sm hover:opacity-90 transition-opacity text-center"
              >
                Request a Consultation
              </Link>
              <button className="border border-steel-gray text-steel-gray px-10 py-4 font-bold rounded-sm hover:bg-surface-container transition-colors">
                Download Capability Statement
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-primary"></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
