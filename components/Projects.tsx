import Image from "next/image";
import NextLink from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { pastProjects } from "@/data/site";
import { brandColors } from "@/theme/colors";

export function Projects() {
  return (
    <Box id="projects" component="section" sx={{ scrollMarginTop: 88, py: { xs: 8, md: 12 }, bgcolor: brandColors.projectsSurface }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: { md: "end" }, gap: 3 }}>
          <Box>
            <Typography variant="overline" color="secondary.dark">Layihələrimiz</Typography>
            <Typography component="h2" variant="h2" sx={{ mt: 2 }}>Layihələr və təşəbbüslər.</Typography>
          </Box>
          <Typography color="text.secondary" sx={{ maxWidth: 560 }}>Gənclər üçün həyata keçirdiyimiz təhsil proqramları, məktəblər, forumlar və digər təşəbbüslər.</Typography>
        </Box>

        <Box sx={{ mt: { xs: 5, md: 7 }, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2,minmax(0,1fr))", md: "repeat(3,minmax(0,1fr))" }, gap: 2.5, alignItems: "stretch" }}>
          {pastProjects.map((project) => (
            <Box
              key={project.id}
              component={NextLink}
              href={project.href}
              aria-label={`${project.title} haqqında ətraflı bax`}
              sx={{
                bgcolor: "background.paper",
                border: 1,
                borderColor: "divider",
                borderRadius: "28px",
                overflow: "hidden",
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
                transition: "transform 250ms cubic-bezier(.2,.8,.2,1)",
                "@media (hover: hover) and (pointer: fine)": {
                  "&:hover": { transform: "translateY(-4px) scale(1.01)" },
                  "&:hover .project-card-cta": { transform: "translateX(3px)" },
                },
                "@media (prefers-reduced-motion: reduce)": {
                  transition: "none",
                  "&:hover": { transform: "none" },
                  "&:hover .project-card-cta": { transform: "none" },
                },
              }}
            >
              <Box sx={{ position: "relative", aspectRatio: "5 / 4", bgcolor: "#E7E8E4" }}>
                <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: "cover" }} />
              </Box>
              <Box sx={{ p: { xs: 3, md: 3.5 }, flex: 1, display: "flex", flexDirection: "column" }}>
                <Typography component="h3" variant="h3" sx={{ minHeight: { sm: 72 }, fontSize: { xs: "1.35rem", md: "1.7rem" } }}>{project.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, minHeight: { sm: 68 } }}>{project.description}</Typography>
                {project.cardNote ? <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, fontWeight: 500 }}>{project.cardNote}</Typography> : null}
                <Box sx={{ mt: "auto", pt: 2.25 }}>
                  <Typography component="span" className="project-card-cta" sx={{ display: "inline-block", minHeight: 44, py: 1.35, color: "primary.main", fontSize: ".82rem", lineHeight: 1.4, fontWeight: 700, textDecoration: "underline", textDecorationColor: "secondary.main", textDecorationThickness: "2px", textUnderlineOffset: "5px", transition: "transform 250ms cubic-bezier(.2,.8,.2,1), color 160ms ease" }}>Ətraflı bax</Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
