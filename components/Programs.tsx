import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { CourseGraphic } from "@/components/CourseGraphic";
import { currentPrograms } from "@/data/site";
import { brandColors } from "@/theme/colors";

export function Programs() {
  return (
    <Box id="programs" component="section" sx={{ scrollMarginTop: 88, py: { xs: 7, md: 9.5 }, bgcolor: "primary.main", color: "common.white" }}>
      <Container maxWidth="lg">
        <Box>
          <Typography component="h2" variant="h2" sx={{ color: "common.white" }}>Tədris proqramları</Typography>
          <Typography sx={{ mt: 2.5, maxWidth: 620, color: "rgba(255,255,255,.66)", fontSize: { md: "1.08rem" } }}>Proqramı seç, tədris məzmunu və iştirak şərtləri ilə ətraflı tanış ol.</Typography>
        </Box>

        <Box sx={{ mt: { xs: 4.5, md: 5.5 }, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2,minmax(0,1fr))", md: "repeat(3,minmax(0,1fr))" }, gap: { xs: 2, md: 2.5 }, alignItems: "stretch" }}>
          {currentPrograms.map((program) => (
            <Link key={program.id} href={program.href} underline="none" color="inherit" aria-label={program.title + " proqramı ilə tanış ol"} sx={{ display: "flex", height: "100%" }}>
              <Box sx={{ width: "100%", minHeight: { xs: 330, sm: 350, md: 360 }, p: { xs: 3, md: 3.25 }, borderRadius: { xs: "24px", sm: "28px", md: "30px" }, bgcolor: "background.paper", color: "primary.main", overflow: "hidden", display: "flex", flexDirection: "column", border: "1px solid rgba(255,255,255,.14)", transition: "transform 180ms ease, background-color 180ms ease", "&:hover": { transform: "translateY(-3px)", bgcolor: brandColors.surfaceTurquoise }, "&:hover .course-illustration-image": { transform: "scale(1.49) !important" } }}>
                <Typography component="h3" sx={{ minHeight: { sm: 58 }, fontSize: { xs: "1.4rem", md: "1.55rem" }, lineHeight: 1.13, fontWeight: 700, letterSpacing: "-.035em" }}>{program.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25, minHeight: { sm: 76 }, maxWidth: 360 }}>{program.cardDescription}</Typography>
                <Box sx={{ my: { xs: 2, md: 2.25 } }}><CourseGraphic courseId={program.id} /></Box>
                <Typography component="span" sx={{ mt: "auto", fontSize: ".82rem", lineHeight: 1.4, fontWeight: 700, color: "primary.main", textUnderlineOffset: ".25em" }}>Proqrama bax →</Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
