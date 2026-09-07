"use client";

import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FolderOpenOutlined from "@mui/icons-material/FolderOpenOutlined";
import GroupsOutlined from "@mui/icons-material/GroupsOutlined";
import ScheduleOutlined from "@mui/icons-material/ScheduleOutlined";
import { companyInfo, stats } from "@/data/site";
import { brandColors } from "@/theme/colors";

const statIcons = [GroupsOutlined, ScheduleOutlined, FolderOpenOutlined];

export function About() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = statsRef.current;
    if (!root) return;

    const values = Array.from(root.querySelectorAll<HTMLElement>("[data-stat-value]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) return;

    values.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(26px)";
    });

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) return;

        hasAnimated = true;
        observer.disconnect();

        values.forEach((element) => {
          element.style.transition = "opacity 900ms ease, transform 1200ms cubic-bezier(.22,.61,.36,1)";
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(root);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box id="about" component="section" sx={{ scrollMarginTop: 88, py: { xs: 7, md: 10 }, bgcolor: brandColors.surfaceMint }}>
      <Container maxWidth="lg">
        <Typography sx={{ color: brandColors.accentDark, fontSize: { xs: ".875rem", md: ".94rem" }, lineHeight: 1.35, fontWeight: 700, letterSpacing: ".075em", textTransform: "uppercase" }}>Haqqımızda</Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(0,1.05fr) minmax(0,.95fr)" }, gap: { xs: 3, md: 6 }, mt: { xs: 2, md: 2.5 }, alignItems: "center" }}>
          <Typography component="h2" sx={{ maxWidth: 760, color: "text.primary", fontSize: "clamp(2.35rem, 3.8vw, 4.1rem)", lineHeight: 1.02, fontWeight: 750, letterSpacing: "-.06em" }}>
            <Box component="span" sx={{ display: { lg: "block" } }}>AI sahəsində ilk addımdan</Box>{" "}
            <Box component="span" sx={{ display: { lg: "block" } }}>real layihəyə.</Box>
          </Typography>
          <Typography sx={{ maxWidth: 610, color: "text.secondary", fontSize: { md: "1.08rem" }, fontWeight: 500, lineHeight: 1.6 }}>{companyInfo.aboutParagraphs[0]}</Typography>
        </Box>
        <Box ref={statsRef} sx={{ mt: { xs: 5, md: 7 }, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3,1fr)" }, alignItems: "stretch" }}>
          {stats.map((stat, index) => {
            const [value, suffix] = stat.value.split(" ");
            const StatIcon = statIcons[index];

            return (
              <Box key={stat.label} sx={{ py: { xs: 3, sm: 2.5, md: 3 }, pl: { xs: 0, sm: index === 0 ? 0 : 4, md: index === 0 ? 0 : 5 }, pr: { xs: 0, sm: 3, md: 5 }, color: "text.primary", borderTop: { xs: "1px solid", sm: "none" }, borderLeft: { xs: "none", sm: index === 0 ? "none" : "1px solid" }, borderColor: "divider" }}>
                <StatIcon aria-hidden="true" sx={{ display: "block", mb: { xs: 2, md: 2.5 }, fontSize: { xs: 31, md: 35 }, color: "primary.main" }} />
                <Typography data-stat-value component="p" sx={{ display: "flex", alignItems: "baseline", gap: suffix ? { xs: 1.25, md: 1.5 } : 0, whiteSpace: "nowrap", fontSize: { xs: "2.5rem", sm: "2.55rem", md: "3.25rem" }, fontWeight: 750, letterSpacing: "-.06em", lineHeight: 1, color: "primary.main", willChange: "transform, opacity" }}>
                  <Box component="span" sx={{ display: "inline-flex", alignItems: "baseline" }}><Box component="span">{value.replace("+", "")}</Box><Box component="span">+</Box></Box>
                  {suffix ? <Box component="span" sx={{ fontSize: ".47em", letterSpacing: "-.025em", fontWeight: 700 }}>{suffix}</Box> : null}
                </Typography>
                <Typography sx={{ mt: { xs: 1.5, md: 2 }, color: "text.secondary", maxWidth: 230, fontSize: { xs: ".9rem", md: ".98rem" }, lineHeight: 1.48, fontWeight: 600 }}>{stat.label}</Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
