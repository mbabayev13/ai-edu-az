"use client";

import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ApplicationForm } from "@/components/ApplicationForm";
import { ExperienceIcon } from "@/components/ExperienceIcon";
import { certificationPartnership } from "@/data/site";
import type { CourseDetails, Program } from "@/types/site";

type CoursePageProps = {
  program: Program;
  details: CourseDetails;
  facts: [string, string][];
};

const experienceCardColors = [
  { background: "#F1F3FB", number: "#00065A", title: "#00065A", body: "text.secondary" },
  { background: "#EEF3FC", number: "#00065A", title: "#00065A", body: "text.secondary" },
  { background: "#EAF8F5", number: "#00065A", title: "#00065A", body: "text.secondary" },
  { background: "#F7F8F4", number: "#37C56F", title: "#00065A", body: "text.secondary" },
  { background: "#EDF8F1", number: "#00065A", title: "#00065A", body: "text.secondary" },
  { background: "#FFFFFF", number: "#1CCBAC", title: "#00065A", body: "text.secondary" },
];

const experienceIconVariants: Record<string, number[]> = {
  "ai-muhendisliyi": [0, 1, 2, 3, 4, 5],
  "generativ-ai": [6, 1, 7, 8, 9, 4],
  "ai-esasli-data-analitikasi": [0, 10, 11, 1, 9, 4],
};

export function CoursePage({ program, details, facts }: CoursePageProps) {
  const courseNavOriginRef = useRef<HTMLDivElement>(null);
  const courseNavRef = useRef<HTMLDivElement>(null);
  const courseNavLastScrollY = useRef(0);
  const [courseNavVisible, setCourseNavVisible] = useState(true);
  const [courseNavMetrics, setCourseNavMetrics] = useState({ headerHeight: 82, navHeight: 62 });

  useEffect(() => {
    const globalHeader = document.querySelector<HTMLElement>("header");
    let animationFrame = 0;

    function updateMetrics() {
      const headerHeight = Math.round(globalHeader?.getBoundingClientRect().height ?? 0);
      const navHeight = Math.round(courseNavRef.current?.getBoundingClientRect().height ?? 0);

      if (headerHeight > 0 && navHeight > 0) {
        setCourseNavMetrics((current) => current.headerHeight === headerHeight && current.navHeight === navHeight ? current : { headerHeight, navHeight });
      }
    }

    function updateVisibility() {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const difference = currentScrollY - courseNavLastScrollY.current;
        const origin = courseNavOriginRef.current;
        const headerHeight = globalHeader?.getBoundingClientRect().height ?? courseNavMetrics.headerHeight;
        const originalTop = origin ? origin.getBoundingClientRect().top + currentScrollY : Number.POSITIVE_INFINITY;
        const hasEnteredStickyPosition = currentScrollY + headerHeight >= originalTop;

        if (!hasEnteredStickyPosition) {
          setCourseNavVisible(true);
        } else if (Math.abs(difference) > 6) {
          setCourseNavVisible(difference < 0);
        }

        courseNavLastScrollY.current = currentScrollY;
      });
    }

    updateMetrics();
    courseNavLastScrollY.current = window.scrollY;
    updateVisibility();

    const resizeObserver = new ResizeObserver(updateMetrics);
    if (globalHeader) resizeObserver.observe(globalHeader);
    if (courseNavRef.current) resizeObserver.observe(courseNavRef.current);
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateMetrics);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateMetrics);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [courseNavMetrics.headerHeight]);

  const courseSectionScrollMargin = courseNavMetrics.headerHeight + courseNavMetrics.navHeight + 16;

  return (
    <>
      <Box component="main">
        <Box sx={{ bgcolor: "#DDE8FF", color: "#07112D", py: { xs: 5, md: 8 }, overflow: "hidden" }}>
          <Container maxWidth="lg">
            <Link href="/#programs" color="inherit" underline="hover" sx={{ fontWeight: 700, fontSize: ".82rem" }}>Kurslara qayıt</Link>
            <Box sx={{ mt: 5, display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(0,1.18fr) minmax(350px,.82fr)" }, gap: { xs: 5, md: 8 }, alignItems: "end" }}>
              <Box>
                <Typography variant="overline">{details.heroEyebrow}</Typography>
                <Typography component="h1" variant="h1" sx={{ mt: 2.5, color: "primary.main", maxWidth: 800 }}>{program.title}</Typography>
                <Typography sx={{ mt: 3, maxWidth: 650, fontSize: { md: "1.15rem" } }}>{details.intro}</Typography>
                <Button href="#application" variant="contained" sx={{ mt: 4 }}>Müraciət et</Button>
              </Box>
              <Box sx={{ bgcolor: "primary.main", color: "common.white", borderRadius: { xs: 3, md: 4 }, p: { xs: 3, md: 4.5 }, position: "relative", overflow: "hidden" }}>
                <Typography variant="overline" sx={{ color: "secondary.main" }}>Proqram haqqında</Typography>
                <Box sx={{ mt: 3, display: "grid", gridTemplateColumns: "1fr 1fr" }}>{facts.map(([value,label],index) => <Box key={label} sx={{ py: 2.5, pr: 2, pl: index % 2 ? 2.5 : 0, borderTop: index < 2 ? 1 : 0, borderBottom: 1, borderLeft: index % 2 ? 1 : 0, borderColor: "rgba(255,255,255,.17)" }}><Typography sx={{ fontSize: { xs: "1.65rem", md: "2.15rem" }, lineHeight: 1, fontWeight: 750, letterSpacing: "-.055em" }}>{value}</Typography><Typography variant="body2" sx={{ mt: 1, color: "rgba(255,255,255,.58)" }}>{label}</Typography></Box>)}</Box>
                <Box sx={{ mt: 3, p: 2.5, bgcolor: "rgba(28,203,172,.12)", borderRadius: 2.5 }}><Typography variant="overline" sx={{ color: "secondary.main" }}>Format və dil</Typography><Typography sx={{ mt: 1, fontWeight: 650 }}>{program.format} · {program.language}</Typography></Box>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box ref={courseNavOriginRef} aria-hidden="true" sx={{ height: 0 }} />
        <Box ref={courseNavRef} sx={{ bgcolor: "common.white", borderBottom: 1, borderColor: "divider", position: "sticky", top: `${courseNavMetrics.headerHeight}px`, zIndex: (theme) => theme.zIndex.appBar - 1, overflowX: "auto", transform: courseNavVisible ? "translateY(0)" : `translateY(calc(-100% - ${courseNavMetrics.headerHeight}px))`, transition: "transform 220ms ease", willChange: "transform" }}>
          <Container maxWidth="lg"><Stack direction="row" component="nav" aria-label="Kurs bölmələri" sx={{ minWidth: "max-content", gap: { xs: 2.5, md: 5 } }}>{[["#experience","Təlim təcrübəsi"],["#curriculum","Proqram"],["#skills","Bacarıqlar"],["#audience","Kimlər üçün"],["#application","Müraciət"]].map(([href,label]) => <Link key={href} href={href} underline="none" color="text.primary" sx={{ py: 2.2, fontSize: ".76rem", fontWeight: 700, "&:hover": { color: "primary.main" } }}>{label}</Link>)}</Stack></Container>
        </Box>

        <Box id="experience" component="section" sx={{ scrollMarginTop: `${courseSectionScrollMargin}px`, py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Typography variant="overline" color="secondary.dark">Təlim təcrübəsi</Typography>
            <Typography component="h2" variant="h2" sx={{ mt: 2, maxWidth: 900 }}>{details.experienceTitle}</Typography>
            <Box sx={{ mt: { xs: 5, md: 7 }, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3,1fr)" }, gap: 2.2 }}>
              {details.expectations.map((item,index) => {
                const colors = experienceCardColors[index];
                const iconVariant = experienceIconVariants[program.slug]?.[index] ?? index;

                return <Box key={item.title} sx={{ p: { xs: 3.2, md: 4 }, minHeight: 270, borderRadius: 3, bgcolor: colors.background, color: colors.title, display: "flex", flexDirection: "column" }}><ExperienceIcon index={iconVariant} primary="#00065A" accent="#1CCBAC" /><Box sx={{ mt: 3.5 }}><Typography component="h3" variant="h3" sx={{ color: "inherit" }}>{item.title}</Typography><Typography variant="body2" sx={{ mt: 1.4, color: colors.body }}>{item.description}</Typography></Box></Box>;
              })}
            </Box>
          </Container>
        </Box>

        <Box id="curriculum" component="section" sx={{ scrollMarginTop: `${courseSectionScrollMargin}px`, py: { xs: 8, md: 12 }, bgcolor: "primary.main", color: "common.white" }}>
          <Container maxWidth="lg">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: ".8fr 1.2fr" }, gap: { xs: 5, md: 9 } }}>
              <Box>
                <Typography variant="overline" color="secondary.main">Tədris proqramı</Typography>
                <Typography component="h2" variant="h2" sx={{ mt: 2, color: "common.white" }}>{details.curriculumTitle}</Typography>
                <Typography sx={{ mt: 2.5, color: "rgba(255,255,255,.62)", maxWidth: 440 }}>{details.curriculumDescription}</Typography>
              </Box>
              <Stack>
                {details.curriculum.map((item,index) => <Box key={item.title} sx={{ py: 3.5, display: "grid", gridTemplateColumns: { xs: "50px 1fr", sm: "74px 1fr" }, gap: 2 }}><Box aria-hidden="true" sx={{ position: "relative", minHeight: 58 }}><Box sx={{ position: "absolute", left: 3.5, top: index === 0 ? "50%" : -28, bottom: index === details.curriculum.length - 1 ? "50%" : -28, width: "1px", bgcolor: "rgba(28,203,172,.38)" }} /><Box sx={{ position: "absolute", top: "50%", left: 0, width: index === 0 || index === details.curriculum.length - 1 ? 8 : 7, height: index === 0 || index === details.curriculum.length - 1 ? 8 : 7, borderRadius: "50%", bgcolor: index === 0 || index === details.curriculum.length - 1 ? "#1CCBAC" : "rgba(28,203,172,.62)", transform: "translateY(-50%)" }} /></Box><Box><Typography component="h3" variant="h3" color="common.white">{item.title}</Typography><Typography sx={{ mt: 1.5, color: "rgba(255,255,255,.62)", maxWidth: 700 }}>{item.description}</Typography></Box></Box>)}
              </Stack>
            </Box>
          </Container>
        </Box>

        <Box id="skills" component="section" sx={{ scrollMarginTop: `${courseSectionScrollMargin}px`, py: { xs: 8, md: 12 }, bgcolor: "common.white" }}>
          <Container maxWidth="lg">
            <Typography variant="overline" color="secondary.dark">Nəticə</Typography>
            <Typography component="h2" variant="h2" sx={{ mt: 2, maxWidth: 900 }}>Təlimdən sonra nəyi bacaracaqsan?</Typography>
            <Typography color="text.secondary" sx={{ mt: 2.5, maxWidth: 720 }}>{details.skillsIntro}</Typography>
            <Box sx={{ mt: 6, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, columnGap: { sm: 5, md: 8 } }}>{details.skills.map((skill) => <Box key={skill.title} sx={{ py: 2.7, borderTop: 1, borderColor: "divider", display: "grid", gridTemplateColumns: "42px 1fr", gap: 1.5 }}><Box aria-hidden="true" sx={{ width: 7, height: 7, alignSelf: "center", justifySelf: "center", borderRadius: "50%", bgcolor: "secondary.main" }} /><Box><Typography sx={{ fontWeight: 750, color: "primary.main" }}>{skill.title}</Typography><Typography variant="body2" color="text.secondary" sx={{ mt: .7 }}>{skill.description}</Typography></Box></Box>)}</Box>
          </Container>
        </Box>

        <Box id="audience" component="section" sx={{ scrollMarginTop: `${courseSectionScrollMargin}px`, py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Typography variant="overline" color="secondary.main">Auditoriya</Typography>
            <Typography component="h2" variant="h2" sx={{ mt: 2, maxWidth: 760, color: "primary.main" }}>Bu təlim sənin üçündür, əgər...</Typography>
            <Box sx={{ mt: { xs: 5, md: 7 }, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(4,minmax(0,1fr))", lg: "repeat(6,minmax(0,1fr))" }, gap: { xs: 2.5, md: 3 } }}>
              {details.audiences.map((item,index) => (
                <Box
                  key={item.title}
                  sx={{
                    gridColumn: {
                      xs: "auto",
                      sm: index === 4 ? "2 / span 2" : "span 2",
                      lg: index === 3 ? "2 / span 2" : index === 4 ? "4 / span 2" : "span 2",
                    },
                    minHeight: { sm: 210, lg: 220 },
                    p: { xs: 3.5, md: 4 },
                    borderRadius: 2.5,
                    bgcolor: "common.white",
                    border: "1px solid rgba(0,6,90,.08)",
                  }}
                >
                  <Typography component="h3" variant="h3" sx={{ color: "primary.main", fontWeight: 700 }}>{item.title}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 1.5 }}>{item.description}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {details.certification ? <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: "#EEF3FC" }}>
          <Container maxWidth="lg">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: ".85fr 1.15fr" }, gap: { xs: 4.5, md: 9 } }}>
              <Box>
                <Typography variant="overline" color="secondary.main">Sertifikatlaşdırma</Typography>
                <Typography component="h2" variant="h2" sx={{ mt: 2, color: "primary.main" }}>Beynəlxalq sertifikatlaşdırma.</Typography>
              </Box>
              <Box sx={{ pt: { md: .5 } }}>
                <Typography sx={{ color: "primary.main", fontSize: { xs: ".9rem", md: ".96rem" }, lineHeight: 1.5, fontWeight: 700 }}>
                  {certificationPartnership.organization} <Box component="span" sx={{ mx: .7, color: "secondary.main" }}>×</Box> {certificationPartnership.university}
                </Typography>
                <Typography component="h3" sx={{ mt: 2.25, maxWidth: 620, color: "primary.main", fontSize: { xs: "1.35rem", md: "1.65rem" }, lineHeight: 1.24, fontWeight: 700, letterSpacing: "-.035em" }}>{certificationPartnership.benefitTitle}</Typography>
                <Typography color="text.secondary" sx={{ mt: 2.25, maxWidth: 680, fontSize: { md: "1.06rem" }, lineHeight: 1.65 }}>{details.certification}</Typography>
                <Box sx={{ mt: { xs: 3.5, md: 4 }, pt: { xs: 3, md: 3.5 }, borderTop: "1px solid rgba(0,6,90,.13)", display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2,minmax(0,1fr))" }, gap: { xs: 3, sm: 5 } }}>
                  {certificationPartnership.institutions.map((institution) => (
                    <Box key={institution.name}>
                      <Typography sx={{ color: "primary.main", fontSize: ".76rem", lineHeight: 1.45, fontWeight: 750, letterSpacing: ".075em" }}>{institution.name}</Typography>
                      <Typography sx={{ mt: .7, color: "text.secondary", fontSize: { xs: ".92rem", md: ".98rem" }, lineHeight: 1.5, fontWeight: 550 }}>{institution.parent}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box> : null}

        <Box id="application" component="section" sx={{ scrollMarginTop: `${courseSectionScrollMargin}px`, py: { xs: 8, md: 11 }, bgcolor: "primary.main" }}>
          <Container maxWidth="lg">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: ".8fr 1.2fr" }, gap: { xs: 5, md: 9 }, alignItems: "start" }}>
              <Box><Typography variant="overline" color="secondary.main">Müraciət</Typography><Typography component="h2" variant="h2" sx={{ mt: 2, color: "common.white" }}>{details.applicationTitle}</Typography><Typography sx={{ mt: 2.5, color: "rgba(255,255,255,.62)", maxWidth: 450 }}>Məlumatlarını göndər. Komandamız proqram və növbəti addımlar haqqında səninlə əlaqə saxlayacaq.</Typography></Box>
              <Box sx={{ bgcolor: "background.default", borderRadius: { xs: 3, md: 4 }, p: { xs: 3, sm: 4.5, md: 5 } }}><Typography component="h3" variant="h3">Müraciət məlumatları</Typography><ApplicationForm course={program.title} /></Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
