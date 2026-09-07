import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import "@/app/globals.css";
import { siteMetadata } from "@/data/site";
import { ThemeRegistry } from "@/theme/ThemeRegistry";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.canonicalUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  alternates: { canonical: siteMetadata.canonicalUrl },
  openGraph: {
    type: "website",
    locale: "az_AZ",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [{ url: siteMetadata.openGraphImage, alt: "AI.edu.az loqosu" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F8F4",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="az" className={montserrat.variable}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
