import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { partners } from "@/data/site";
import { brandColors } from "@/theme/colors";

export function Partners() {
  return (
    <Box id="partners" component="section" sx={{ scrollMarginTop: 88, pt: { xs: 10, md: 14 }, pb: { xs: 8, md: 11 }, bgcolor: brandColors.surfaceCoolBlue }}>
      <Container maxWidth="lg">
        <Typography sx={{ color: brandColors.accentDark, fontSize: { xs: ".875rem", md: ".94rem" }, lineHeight: 1.35, fontWeight: 700, letterSpacing: ".075em", textTransform: "uppercase" }}>Əməkdaşlıq</Typography>
        <Typography component="h2" sx={{ mt: 2, maxWidth: 800, color: "text.primary", fontSize: "clamp(2.15rem, 4.05vw, 4.3rem)", lineHeight: 1.02, fontWeight: 750, letterSpacing: "-.06em" }}>Birlikdə daha güclü təhsil təcrübəsi yaradırıq.</Typography>
        <Box sx={{ mt: { xs: 5, md: 7 }, pt: { xs: 4, md: 4.5 }, borderTop: "1px solid", borderColor: "divider", display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2,minmax(0,1fr))", md: "repeat(3,minmax(0,1fr))" } }}>
          {partners.map((partner, index) => (
            <Box
              key={partner.id}
              sx={{
                minHeight: { xs: "auto", md: 250 },
                gridColumn: { sm: index === 2 ? "1 / -1" : "auto", md: "auto" },
                pt: { xs: index === 0 ? 0 : 4, sm: index === 2 ? 4.5 : 0, md: 0 },
                pb: { xs: index === partners.length - 1 ? 0 : 4, sm: index < 2 ? 4.5 : 0, md: 0 },
                px: { xs: 0, sm: index === 1 ? 4 : 0, md: index === 0 ? 0 : 4.5 },
                pr: { md: index === partners.length - 1 ? 0 : 4.5 },
                borderTop: { xs: index === 0 ? "none" : "1px solid", sm: index === 2 ? "1px solid" : "none", md: "none" },
                borderLeft: { sm: index === 1 ? "1px solid" : "none", md: index === 0 ? "none" : "1px solid" },
                borderColor: "divider",
              }}
            >
              <Typography sx={{ color: brandColors.accentDark, fontSize: ".72rem", lineHeight: 1.4, fontWeight: 750, letterSpacing: ".085em", textTransform: "uppercase" }}>{partner.category}</Typography>
              <Box sx={{ mt: { xs: 2.75, md: 3.25 }, maxWidth: index === 2 ? 430 : 360 }}>
                {partner.parentInstitution && <Typography sx={{ color: "text.secondary", fontSize: ".9rem", lineHeight: 1.5, fontWeight: 550 }}>{partner.parentInstitution}</Typography>}
                <Typography component="h3" sx={{ mt: partner.parentInstitution ? .65 : 0, color: "primary.main", fontSize: { xs: "1.35rem", md: "1.55rem" }, lineHeight: 1.18, fontWeight: 700, letterSpacing: "-.035em" }}>{partner.unitName ?? partner.name}</Typography>
                <Typography variant="body2" sx={{ mt: 2, maxWidth: 390, color: "text.secondary", fontWeight: 500 }}>{partner.relationship}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
