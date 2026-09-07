import { Header } from "@/components/Header";
import { SiteContent } from "@/components/SiteContent";
import { companyInfo } from "@/data/site";

export default function Home() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: companyInfo.name,
    description: companyInfo.description,
  };

  return (
    <>
      <Header />
      <SiteContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  );
}
