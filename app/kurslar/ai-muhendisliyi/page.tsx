import type { Metadata } from "next";
import { CoursePage } from "@/components/CoursePage";
import { Header } from "@/components/Header";
import { aiEngineeringDetails, currentPrograms, siteMetadata } from "@/data/site";

const program = currentPrograms[0];

export const metadata: Metadata = {
  title: `${program.title} | AI.edu.az`,
  description: program.description,
  alternates: { canonical: `${siteMetadata.canonicalUrl}/kurslar/ai-muhendisliyi` },
  openGraph: { title: `${program.title} | AI.edu.az`, description: program.description, images: [siteMetadata.openGraphImage] },
};

export default function AiEngineeringPage() {
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
        details={aiEngineeringDetails}
        facts={[["6 ay", "tədris müddəti"], ["2 dəfə", "həftəlik dərs"], ["2 saat", "hər dərs"], ["Hibrid", "tədris formatı"]]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseData) }} />
    </>
  );
}
