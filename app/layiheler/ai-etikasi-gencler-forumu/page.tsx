import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ProjectPage } from "@/components/ProjectPage";
import { aiEthicsYouthForumProject, siteMetadata } from "@/data/site";

export const metadata: Metadata = {
  title: `${aiEthicsYouthForumProject.title} | AI.edu.az layihələri`,
  description: aiEthicsYouthForumProject.summary,
  alternates: { canonical: `${siteMetadata.canonicalUrl}/layiheler/ai-etikasi-gencler-forumu` },
  openGraph: {
    type: "article",
    title: `${aiEthicsYouthForumProject.subtitle} – ${aiEthicsYouthForumProject.title}`,
    description: aiEthicsYouthForumProject.summary,
    images: [{ url: aiEthicsYouthForumProject.photos[0].src, alt: aiEthicsYouthForumProject.photos[0].alt }],
  },
};

export default function AiEthicsYouthForumPage() {
  return (
    <>
      <Header />
      <ProjectPage project={aiEthicsYouthForumProject} />
    </>
  );
}
