export type NavigationItem = { label: string; href: string };

export type CompanyInfo = {
  name: string;
  fullName: string;
  description: string;
  aboutTitle: string;
  aboutParagraphs: string[];
};

export type Stat = { value: string; label: string };

export type Program = {
  id: string;
  slug: string;
  title: string;
  description: string;
  cardDescription: string;
  category: string;
  format: string;
  duration: string;
  schedule: string;
  language: string;
  audience: string;
  href: string;
  illustration: string;
  illustrationAlt: string;
};

export type ContentItem = { title: string; description: string };
export type SkillItem = { title: string; description: string };

export type CourseDetails = {
  intro: string;
  heroEyebrow: string;
  experienceTitle: string;
  curriculumTitle: string;
  curriculumDescription: string;
  applicationTitle: string;
  expectations: ContentItem[];
  curriculum: ContentItem[];
  skillsIntro: string;
  skills: SkillItem[];
  audiences: ContentItem[];
  certification?: string;
};

export type CertificationPartnership = {
  organization: string;
  university: string;
  benefitTitle: string;
  institutions: Array<{
    name: string;
    parent: string;
  }>;
};

export type ApproachItem = ContentItem & { id: string };

export type PastProject = {
  id: string;
  year: string;
  title: string;
  description: string;
  audience: string;
  partner: string;
  href: string;
  image: string;
  imageAlt: string;
  cardNote?: string;
};

export type ProjectTopic = { title: string; description: string };

export type ProjectPhoto = {
  src: string;
  alt: string;
};

export type ProjectDetails = {
  slug: string;
  title: string;
  subtitle: string;
  status: string;
  period: string;
  duration: string;
  participantCount: string;
  location?: string;
  summary: string;
  progressText: string;
  goal: string;
  organizers: string[];
  topics: ProjectTopic[];
  photos: ProjectPhoto[];
  durationLabel?: string;
  aboutTitle?: string;
  topicsEyebrow?: string;
  topicsTitle?: string;
  goalTitle?: string;
  galleryEyebrow?: string;
};

export type Partner = {
  id: string;
  category: string;
  name: string;
  parentInstitution?: string;
  unitName?: string;
  relationship: string;
};

export type ContactInfo = {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  mapUrl: string;
};

export type SocialLink = { label: string; href: string };

export type SiteMetadata = {
  title: string;
  description: string;
  canonicalUrl: string;
  openGraphImage: string;
};
