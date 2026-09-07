import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ProjectPage } from "@/components/ProjectPage";
import { ai4YouthProject, siteMetadata } from "@/data/site";

export const metadata: Metadata = {
  title: `${ai4YouthProject.title} | AI.edu.az layihələri`,
  description: ai4YouthProject.summary,
  alternates: { canonical: `${siteMetadata.canonicalUrl}/layiheler/ai4youth` },
  openGraph: {
    type: "article",
    title: `${ai4YouthProject.title} – ${ai4YouthProject.subtitle}`,
    description: ai4YouthProject.summary,
    images: [{ url: ai4YouthProject.photos[0].src, alt: ai4YouthProject.photos[0].alt }],
  },
};

export default function Ai4YouthPage() {
  return (
    <>
      <Header />
      <ProjectPage project={ai4YouthProject} />
    </>
  );
}
