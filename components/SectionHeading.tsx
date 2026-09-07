import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
};

export function SectionHeading({ index, eyebrow, title, description, inverse = false }: SectionHeadingProps) {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 3, md: 8 }}
      sx={{ alignItems: { md: "flex-start" }, mb: { xs: 5, md: 8 } }}
    >
      <Stack direction="row" spacing={1.5} sx={{ minWidth: { md: 190 }, pt: { md: 1 } }}>
        <Typography variant="overline" sx={{ color: inverse ? "secondary.main" : "primary.main" }}>
          {index}
        </Typography>
        <Box sx={{ width: 28, height: 1, bgcolor: inverse ? "secondary.main" : "primary.main", mt: "7px !important" }} />
        <Typography variant="overline" sx={{ color: inverse ? "rgba(255,255,255,.72)" : "text.secondary" }}>
          {eyebrow}
        </Typography>
      </Stack>
      <Box sx={{ maxWidth: 760 }}>
        <Typography variant="h2" sx={{ color: inverse ? "common.white" : "text.primary", maxWidth: 700 }}>
          {title}
        </Typography>
        {description ? (
          <Typography sx={{ mt: 2.5, color: inverse ? "rgba(255,255,255,.72)" : "text.secondary", maxWidth: 620 }}>
            {description}
          </Typography>
        ) : null}
      </Box>
    </Stack>
  );
}
