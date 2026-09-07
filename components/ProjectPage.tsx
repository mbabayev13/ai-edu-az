"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import GraphicEqOutlined from "@mui/icons-material/GraphicEqOutlined";
import CampaignOutlined from "@mui/icons-material/CampaignOutlined";
import ForumOutlined from "@mui/icons-material/ForumOutlined";
import GroupsOutlined from "@mui/icons-material/GroupsOutlined";
import PhotoLibraryOutlined from "@mui/icons-material/PhotoLibraryOutlined";
import PresentToAllOutlined from "@mui/icons-material/PresentToAllOutlined";
import QuizOutlined from "@mui/icons-material/QuizOutlined";
import TerminalOutlined from "@mui/icons-material/TerminalOutlined";
import type { ProjectDetails } from "@/types/site";

const galleryLayouts = [
  { columns: { md: "span 7" }, ratio: "4 / 3" },
  { columns: { md: "span 5" }, ratio: "4 / 3" },
  { columns: { md: "span 5" }, ratio: "4 / 3" },
  { columns: { md: "span 7" }, ratio: "4 / 3" },
  { columns: { md: "span 6" }, ratio: "4 / 3" },
  { columns: { md: "span 6" }, ratio: "4 / 3" },
];

const ai4CultureTopicIcons = [
  PhotoLibraryOutlined,
  GraphicEqOutlined,
  TerminalOutlined,
  PresentToAllOutlined,
];

const aiEthicsForumTopicIcons = [
  CampaignOutlined,
  GroupsOutlined,
  ForumOutlined,
  QuizOutlined,
];

export function ProjectPage({ project }: { project: ProjectDetails }) {
  const gallery = project.photos.slice(1);
  const isAi4Culture = project.slug === "ai4culture";
  const showProjectMetrics = project.slug !== "ai-etikasi-gencler-forumu";
  const topicIcons = project.slug === "ai-etikasi-gencler-forumu" ? aiEthicsForumTopicIcons : ai4CultureTopicIcons;
  const topicSurfaces = ["#EAF8F5", "#EEF3FC", "#F7F8F4", "#EDF8F1"];
  const projectMetrics = isAi4Culture
    ? [["8 HƏFTƏ", "Təlim müddəti"], ["15+", "İştirakçı"]]
    : [
        [project.duration.toLocaleUpperCase("az-AZ"), project.durationLabel ?? "Təlim müddəti"],
        [project.participantCount.replace(/\s+iştirakçı$/i, ""), "İştirakçı"],
      ];

  return (
    <>
      <Box component="main">
        <Box component="section" sx={{ py: { xs: 5, md: 8 }, bgcolor: "#EEF3FC" }}>
          <Container maxWidth="lg">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(0,.82fr) minmax(420px,1.18fr)" }, gap: { xs: 5, md: 7 }, alignItems: "end" }}>
              <Box>
                <Typography variant="overline" color="primary.main">{project.status}</Typography>
                <Typography component="h1" variant="h1" sx={{ mt: 2.5, color: "primary.main", fontSize: { xs: "clamp(2.6rem,11vw,4.5rem)", md: "clamp(3.7rem,5.2vw,5.4rem)" }, overflowWrap: "anywhere" }}>{project.title}</Typography>
                <Typography sx={{ mt: 2.5, fontSize: { xs: "1.35rem", md: "1.7rem" }, lineHeight: 1.2, fontWeight: 650, letterSpacing: "-.035em", maxWidth: 560 }}>{project.subtitle}</Typography>
                <Typography color="text.secondary" sx={{ mt: 3, maxWidth: 600 }}>{project.summary}</Typography>
                {showProjectMetrics && (
                  <Box sx={{ mt: 5, maxWidth: 520, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2,minmax(0,1fr))" }, rowGap: 2.5 }}>
                    {projectMetrics.map(([value, label], index) => (
                      <Box key={label} sx={{ pl: { sm: index === 1 ? 4 : 0 }, borderLeft: { xs: 0, sm: index === 1 ? "1px solid rgba(0,6,90,.12)" : 0 } }}>
                        <Typography sx={{ color: "primary.main", fontSize: { xs: "1.4rem", md: "1.55rem" }, lineHeight: 1.15, fontWeight: 700, letterSpacing: "-.025em" }}>{value}</Typography>
                        <Typography color="text.secondary" sx={{ mt: .75, fontSize: { xs: ".9rem", md: ".95rem" }, lineHeight: 1.45, fontWeight: 500 }}>{label}</Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
              <Box sx={{ position: "relative", aspectRatio: "4 / 3", borderRadius: { xs: 3, md: 4 }, overflow: "hidden" }}>
                <Image src={project.photos[0].src} alt={project.photos[0].alt} fill priority sizes="(max-width: 900px) 100vw, 720px" style={{ objectFit: "cover" }} />
              </Box>
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F7F8F4" }}>
          <Container maxWidth="lg">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: ".72fr 1.28fr" }, gap: { xs: 5, md: 9 } }}>
              <Box><Typography variant="overline" color="secondary.dark">Layihə haqqında</Typography><Typography component="h2" variant="h2" sx={{ mt: 2 }}>{project.aboutTitle ?? "Bilikdən praktikaya."}</Typography></Box>
              <Box>
                <Typography sx={{ fontSize: { xs: "1.12rem", md: "1.35rem" }, lineHeight: 1.55, fontWeight: 550, maxWidth: 780 }}>{project.summary}</Typography>
                <Typography color="text.secondary" sx={{ mt: 3, maxWidth: 760 }}>{project.progressText}</Typography>
                <Box sx={{ mt: 5, pt: 4, borderTop: 1, borderColor: "divider" }}>
                  <Typography variant="overline" color="text.secondary">Birgə təşkilatçılar</Typography>
                  <Stack spacing={2.25} sx={{ mt: 2.5 }}>
                    {project.organizers.map((organizer) => (
                      <Box key={organizer} sx={{ display: "grid", gridTemplateColumns: "8px minmax(0,1fr)", columnGap: 2.25, alignItems: "start" }}>
                        <Box aria-hidden="true" sx={{ width: 7, height: 7, mt: ".55em", borderRadius: "50%", bgcolor: "#1CCBAC" }} />
                        <Typography sx={{ fontWeight: 700, color: "primary.main" }}>{organizer}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "primary.main", color: "common.white" }}>
          <Container maxWidth="lg">
            <Typography variant="overline" color="secondary.main">{project.topicsEyebrow ?? "Təlim istiqamətləri"}</Typography>
            <Typography component="h2" variant="h2" sx={{ mt: 2, color: "common.white", maxWidth: 850 }}>{project.topicsTitle ?? "İştirakçılar nə öyrəndilər?"}</Typography>
            <Box sx={{ mt: { xs: 5, md: 7 }, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
              {project.topics.map((topic, index) => {
                const TopicIcon = topicIcons[index % topicIcons.length];
                return (
                  <Box key={topic.title} sx={{ minHeight: { md: 245 }, p: { xs: 3.5, md: 4.5 }, borderRadius: 3, bgcolor: topicSurfaces[index % topicSurfaces.length], color: "text.primary", display: "flex", flexDirection: "column" }}>
                    <TopicIcon aria-hidden="true" sx={{ color: "primary.main", fontSize: 34 }} />
                    <Box sx={{ mt: "auto" }}><Typography component="h3" variant="h3">{topic.title}</Typography><Typography variant="body2" color="text.secondary" sx={{ mt: 1.4 }}>{topic.description}</Typography></Box>
                  </Box>
                );
              })}
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 8, md: 11 }, bgcolor: "#EAF8F5" }}>
          <Container maxWidth="lg">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: ".72fr 1.28fr" }, gap: { xs: 4, md: 9 } }}>
              <Box><Typography variant="overline" color="primary.main">Əsas məqsəd</Typography><Typography component="h2" variant="h2" sx={{ mt: 2 }}>{project.goalTitle ?? "Gənclərin gələcəyinə praktiki başlanğıc."}</Typography></Box>
              <Typography sx={{ alignSelf: "end", fontSize: { xs: "1.08rem", md: "1.35rem" }, lineHeight: 1.55, maxWidth: 760 }}>{project.goal}</Typography>
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F7F8F4" }}>
          <Container maxWidth="lg">
            <Typography variant="overline" color="secondary.dark">{project.galleryEyebrow ?? "Təlimdən anlar"}</Typography>
            <Typography component="h2" variant="h2" sx={{ mt: 2 }}>{project.title} fotolarda.</Typography>
            <Box sx={{ mt: { xs: 5, md: 7 }, display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(12,1fr)" }, gap: 2 }}>
              {gallery.map((photo, index) => (
                <Box key={photo.src} sx={{ gridColumn: galleryLayouts[index].columns, position: "relative", aspectRatio: galleryLayouts[index].ratio, borderRadius: 3, overflow: "hidden", bgcolor: "#E7E8E4" }}>
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: "cover" }} />
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: "primary.main", color: "common.white" }}>
          <Container maxWidth="lg">
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, alignItems: { md: "end" }, justifyContent: "space-between" }}>
              <Box><Typography variant="overline" color="secondary.main">Layihələrimiz</Typography><Typography component="h2" variant="h2" sx={{ mt: 2, color: "common.white", maxWidth: 750 }}>Öyrənmə real təcrübəyə çevriləndə.</Typography></Box>
              <Button href="/#projects" variant="contained" sx={{ bgcolor: "#1CCBAC", color: "#00065A", flexShrink: 0, "&:hover": { bgcolor: "#37C56F" } }}>Digər layihələrə bax</Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
