import type { Metadata } from "next";
import { CoursePage } from "@/components/CoursePage";
import { Header } from "@/components/Header";
import { aiDataAnalyticsDetails, currentPrograms, siteMetadata } from "@/data/site";

const program = currentPrograms.find((item) => item.slug === "ai-esasli-data-analitikasi")!;

export const metadata: Metadata = {
  title: `${program.title} | AI.edu.az`,
  description: program.description,
  alternates: { canonical: `${siteMetadata.canonicalUrl}${program.href}` },
  openGraph: { title: `${program.title} | AI.edu.az`, description: program.description, images: [siteMetadata.openGraphImage] },
};

export default function AiDataAnalyticsPage() {
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
        details={aiDataAnalyticsDetails}
        facts={[["26 həftə", "tədris müddəti"], ["2 dəfə", "həftəlik dərs"], ["1.5 saat", "hər dərs"], ["78 saat", "ümumi proqram"]]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseData) }} />
    </>
  );
}
