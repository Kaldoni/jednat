import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["800", "800", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jednat Projects | Engineering Solutions & Technical Services",
    template: "%s | Jednat Projects",
  },
  description:
    "Delivering innovative, cost-effective, and quality-driven services across Oil & Gas, Construction, Manufacturing, Procurement & Consultation. Partner with a solutions provider committed to safety, environmental stewardship, and long-term value.",
  keywords: [
    "Jednat Projects",
    "Engineering Solutions",
    "Technical Services",
    "Energy Industry",
    "Oil and Gas",
    "Procurement",
    "Marine Logistics",
    "QHSE",
    "Construction",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
