import type { Metadata } from "next";
import { CoursePage } from "@/components/CoursePage";
import { Header } from "@/components/Header";
import { currentPrograms, generativeAiDetails, siteMetadata } from "@/data/site";

const program = currentPrograms.find((item) => item.slug === "generativ-ai")!;

export const metadata: Metadata = {
  title: `${program.title} | AI.edu.az`,
  description: program.description,
  alternates: { canonical: `${siteMetadata.canonicalUrl}${program.href}` },
  openGraph: { title: `${program.title} | AI.edu.az`, description: program.description, images: [siteMetadata.openGraphImage] },
};

export default function GenerativeAiPage() {
  const courseData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.title,
    description: program.description,
    provider: { "@type": "EducationalOrganization", name: "AI.edu.az" },
    inLanguage: "az",
  };

  return (
    <>
      <Header />
      <CoursePage
        program={program}
        details={generativeAiDetails}
        facts={[["10 həftə", "tədris müddəti"], ["3 dəfə", "həftəlik dərs"], ["2 saat", "hər dərs"], ["60 saat", "ümumi proqram"]]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseData) }} />
    </>
  );
}
