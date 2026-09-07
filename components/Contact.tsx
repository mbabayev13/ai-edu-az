import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import { companyInfo } from "@/data/site";
import { brandColors } from "@/theme/colors";
import type { ContactInfo, SocialLink } from "@/types/site";

function SocialIcon({ label }: { label: string }) {
  return (
    <SvgIcon aria-hidden="true" viewBox="0 0 24 24" sx={{ fontSize: 25 }}>
      {label === "Instagram" ? (
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      ) : (
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.1 20.45H3.54V9H7.1v11.45Z" />
      )}
    </SvgIcon>
  );
}

export function Contact({ contacts, socialLinks }: { contacts: ContactInfo; socialLinks: SocialLink[] }) {
  const labelSx = {
    color: "text.secondary",
    fontSize: { xs: ".82rem", md: ".9rem" },
    lineHeight: 1.4,
    fontWeight: 500,
  } as const;

  const valueSx = {
    color: "primary.main",
    fontSize: { xs: "1rem", md: "1.08rem" },
    lineHeight: 1.45,
    fontWeight: 700,
    textDecoration: "none",
    overflowWrap: "anywhere",
    transition: "color 160ms ease",
    "&:hover": { color: brandColors.accentDark },
  } as const;

  return (
    <Box id="contact" component="section" sx={{ scrollMarginTop: 88, py: { xs: 7, md: 9 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3} sx={{ alignItems: { sm: "center" }, justifyContent: "space-between" }}>
          <Link href="/#top" underline="none" aria-label="AI.edu.az ana səhifə" sx={{ display: "inline-flex", alignItems: "center", gap: 1.5, color: "primary.main", alignSelf: "flex-start" }}>
            <Box sx={{ position: "relative", width: 46, height: 46, flexShrink: 0 }}>
              <Image src="/logo-transparent.png" alt="" fill sizes="46px" style={{ objectFit: "contain" }} />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 800, letterSpacing: "-.04em", lineHeight: 1.15 }}>{companyInfo.name}</Typography>
              <Typography sx={{ mt: .35, color: "text.secondary", fontSize: ".65rem", fontWeight: 600 }}>{companyInfo.fullName}</Typography>
            </Box>
          </Link>
          <Stack direction="row" spacing={1.25}>
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                sx={{ width: 48, height: 48, borderRadius: "50%", bgcolor: brandColors.surfaceBlue, color: "primary.main", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "color 160ms ease, background-color 160ms ease", "&:hover": { color: brandColors.accentDark, bgcolor: brandColors.surfaceTurquoise } }}
              >
                <SocialIcon label={link.label} />
              </Link>
            ))}
          </Stack>
        </Stack>

        <Divider sx={{ my: { xs: 4, md: 5 } }} />

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2,minmax(0,1fr))", md: "minmax(0,1.25fr) minmax(0,.85fr) minmax(0,1.45fr)" }, gap: 2 }}>
          <Stack spacing={1.2} sx={{ minHeight: { md: 138 }, p: { xs: 3, md: 3.25 }, justifyContent: "center", bgcolor: "background.paper", border: "1px solid", borderColor: "divider", borderRadius: "16px" }}>
            <Typography sx={labelSx}>E-poçt</Typography>
            <Link href={`mailto:${contacts.email}`} sx={{ ...valueSx, fontSize: { xs: ".95rem", md: "1rem" }, whiteSpace: { md: "nowrap" }, overflowWrap: { xs: "anywhere", md: "normal" } }}>{contacts.email}</Link>
          </Stack>

          <Stack spacing={1.2} sx={{ minHeight: { md: 138 }, p: { xs: 3, md: 3.25 }, justifyContent: "center", bgcolor: "background.paper", border: "1px solid", borderColor: "divider", borderRadius: "16px" }}>
            <Typography sx={labelSx}>Mobil / WhatsApp</Typography>
            <Link href={`https://wa.me/${contacts.whatsapp.replace("+", "")}`} target="_blank" rel="noreferrer" aria-label={`${contacts.phone} nömrəsi ilə WhatsApp söhbətini aç`} sx={valueSx}>{contacts.phone}</Link>
          </Stack>

          <Stack spacing={1.2} sx={{ minHeight: { md: 138 }, p: { xs: 3, md: 3.25 }, justifyContent: "center", bgcolor: "background.paper", border: "1px solid", borderColor: "divider", borderRadius: "16px", gridColumn: { sm: "1 / -1", md: "auto" } }}>
            <Typography sx={labelSx}>Ünvan</Typography>
            <Link href={contacts.mapUrl} target="_blank" rel="noreferrer" sx={{ ...valueSx, whiteSpace: "pre-line" }}>{contacts.address}</Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
