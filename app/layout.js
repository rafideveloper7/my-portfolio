import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import { assets, site } from "@/data/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL("https://rafideveloper7.com"),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`
  },
  description: site.shortBio,
  keywords: [
    "Rafi Ullah",
    "Full Stack MERN Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Pakistan web developer"
  ],
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description:
      "Production-ready web applications, APIs, dashboards, business websites, and scalable MERN products.",
    url: "https://rafideveloper7.com",
    siteName: "Rafi Developer",
    images: [{ url: assets.openGraph.src, width: assets.openGraph.width, height: assets.openGraph.height, alt: assets.openGraph.alt }],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: assets.favicon
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <CursorGlow />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
