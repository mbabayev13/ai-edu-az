import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardMembershipOutlined from "@mui/icons-material/CardMembershipOutlined";
import CodeRounded from "@mui/icons-material/CodeRounded";
import FolderOutlined from "@mui/icons-material/FolderOutlined";
import LaptopChromebookOutlined from "@mui/icons-material/LaptopChromebookOutlined";
import RecordVoiceOverOutlined from "@mui/icons-material/RecordVoiceOverOutlined";
import { approach } from "@/data/site";
import { brandColors } from "@/theme/colors";

const iconSx = { width: 44, height: 42, position: "relative" } as const;

const approachIcons = [
  <Box key="practice" sx={iconSx}>
    <LaptopChromebookOutlined sx={{ position: "absolute", inset: 0, fontSize: 44, color: "primary.main" }} />
    <CodeRounded sx={{ position: "absolute", top: 7, left: 12, fontSize: 20, color: brandColors.accentDark }} />
  </Box>,
  <Box key="certificate" sx={iconSx}>
    <CardMembershipOutlined sx={{ position: "absolute", inset: 0, fontSize: 42, color: "primary.main" }} />
  </Box>,
  <Box key="mentor" sx={iconSx}>
    <RecordVoiceOverOutlined sx={{ position: "absolute", inset: 0, fontSize: 42, color: "primary.main" }} />
  </Box>,
  <Box key="portfolio" sx={iconSx}>
    <FolderOutlined sx={{ position: "absolute", inset: 0, fontSize: 44, color: "primary.main" }} />
    <CodeRounded sx={{ position: "absolute", top: 15, left: 12, fontSize: 20, color: brandColors.accentDark }} />
  </Box>,
];

export function Approach() {
  return (
    <Box id="approach" component="section" sx={{ scrollMarginTop: 88, py: { xs: 7, md: 10 }, bgcolor: brandColors.surfaceBlue }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary.main">Üstünlüklər</Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(0,2fr) minmax(0,3fr)" }, gap: { xs: 2.5, md: 6 }, mt: 2, alignItems: "center" }}>
          <Typography component="h2" variant="h2">Niyə AI.edu.az?</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 680, fontWeight: 500, lineHeight: 1.58 }}>Öyrənmə prosesinin hər hissəsi nəzəriyyəni real bacarığa və təqdim edə biləcəyin nəticəyə çevirmək üçün qurulub.</Typography>
        </Box>
        <Box sx={{ mt: { xs: 4.5, md: 5.5 }, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2,minmax(0,1fr))" }, gap: { xs: 2, md: 2.4 }, alignItems: "stretch" }}>
          {approach.map((item, index) => {
            return <Box key={item.id} sx={{ height: "100%", p: { xs: 3, md: 4 }, minHeight: { sm: 204, md: 214 }, borderRadius: "24px", bgcolor: index === 0 ? "background.paper" : index === 1 ? "#FCFCFA" : index === 2 ? brandColors.surfaceTurquoise : brandColors.warmIvory, color: "text.primary", display: "flex", flexDirection: "column", border: "1px solid", borderColor: index === 1 ? "rgba(0,6,90,.08)" : "divider" }}><Box aria-hidden="true">{approachIcons[index]}</Box><Typography component="h3" variant="h3" sx={{ mt: { xs: 2.25, md: 2.75 }, color: "inherit" }}>{item.title}</Typography><Typography sx={{ mt: 1.25, color: "text.secondary", maxWidth: 500 }}>{item.description}</Typography></Box>;
          })}
        </Box>
      </Container>
    </Box>
  );
}
