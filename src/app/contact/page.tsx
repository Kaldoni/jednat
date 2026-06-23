'use client';

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="flex-grow pt-20">
        {/* Contact Hero */}
        <section className="relative py-20 bg-surface-container-low border-b border-outline-variant overflow-hidden">
          <div className="absolute inset-0 technical-grid opacity-30 pointer-events-none"></div>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center md:text-left relative z-10">
            <span className="inline-block px-3 py-1 bg-primary-container text-on-primary-container font-label-caps text-label-caps mb-4 rounded-full">
              GET IN TOUCH
            </span>
            <h1 className="font-display-lg text-display-lg mb-6 leading-tight">
              Contact Our Teams
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              We are available 24/7 for operational emergencies. For project
              inquiries, tenders, or consultation requests, please reach out via
              the form below or contact our office branches.
            </p>
          </div>
        </section>

        {/* Contact Form and Details */}
        <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-surface-white border border-outline-variant p-8 md:p-12 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              <h2 className="font-headline-lg text-headline-lg mb-8">Send a Message</h2>
              {submitted ? (
                <div className="bg-primary-container/10 border border-primary p-8 text-center space-y-4">
                  <span className="material-symbols-outlined text-primary text-5xl">
                    check_circle
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Message Sent Successfully
                  </h3>
                  <p className="font-body-md text-on-surface-variant">
                    Thank you for reaching out to Jednat Projects. One of our engineers
                    or customer relation officers will contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="bg-primary text-on-primary px-6 py-2.5 rounded font-bold hover:opacity-90 transition-all text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 border border-outline rounded-sm bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary text-sm font-technical-data"
                    />
                  </div>
                  <div>
                    <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-3 border border-outline rounded-sm bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary text-sm font-technical-data"
                    />
                  </div>
                  <div>
                    <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Refinery Expansion FEED Tender"
                      className="w-full px-4 py-3 border border-outline rounded-sm bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary text-sm font-technical-data"
                    />
                  </div>
                  <div>
                    <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">
                      MESSAGE CONTENT
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify engineering specifications, volume details, or logistics timelines..."
                      className="w-full px-4 py-3 border border-outline rounded-sm bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary text-sm font-technical-data"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-on-primary py-4 font-bold rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    Submit Request
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </form>
              )}
            </div>

            {/* Details Column */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <h3 className="font-headline-md text-headline-md text-on-surface border-b border-outline-variant pb-2">
                  Head Office Branch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      location_on
                    </span>
                    <div>
                      <h4 className="font-bold text-on-surface">Warri Office</h4>
                      <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
                        Klm 2 Refinery road Effurun,<br />
                        Delta state, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      call
                    </span>
                    <div>
                      <h4 className="font-bold text-on-surface">Phone Support</h4>
                      <p className="text-on-surface-variant text-sm mt-1">
                        +2348156137300
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      mail
                    </span>
                    <div>
                      <h4 className="font-bold text-on-surface">General Inquiries</h4>
                      <p className="text-on-surface-variant text-sm mt-1">
                        info@jednatprojects.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              {/* Technical Certifications Box */}
              <div className="p-6 bg-surface-container-high border border-outline-variant rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span className="font-headline-md text-base text-on-surface">
                    Compliance Verification
                  </span>
                </div>
                <p className="text-[12px] font-technical-data leading-relaxed text-on-surface-variant mb-4">
                  Jednat Projects operates strictly under global regulatory compliance models. Tender credentials can be requested by verifying corporate identity through the procurement desk.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-[10px] font-technical-data bg-surface-white px-2 py-1 rounded border border-outline-variant">
                    ISO 9001:2015
                  </span>
                  <span className="text-[10px] font-technical-data bg-surface-white px-2 py-1 rounded border border-outline-variant">
                    TRACE REGISTERED
                  </span>
                  <span className="text-[10px] font-technical-data bg-surface-white px-2 py-1 rounded border border-outline-variant">
                    HSE CERTIFIED
                  </span>
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
