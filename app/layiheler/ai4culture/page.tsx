import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ProjectPage } from "@/components/ProjectPage";
import { ai4CultureProject, siteMetadata } from "@/data/site";

export const metadata: Metadata = {
  title: `${ai4CultureProject.title} | AI.edu.az layihələri`,
  description: ai4CultureProject.summary,
  alternates: { canonical: `${siteMetadata.canonicalUrl}/layiheler/ai4culture` },
  openGraph: {
    type: "article",
    title: `${ai4CultureProject.title} – ${ai4CultureProject.subtitle}`,
    description: ai4CultureProject.summary,
    images: [{ url: ai4CultureProject.photos[0].src, alt: ai4CultureProject.photos[0].alt }],
  },
};

export default function Ai4CulturePage() {
  return (
    <>
      <Header />
      <ProjectPage project={ai4CultureProject} />
    </>
  );
}
