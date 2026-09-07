"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ApplicationDialog } from "@/components/ApplicationDialog";
import { companyInfo, navigation } from "@/data/site";
import { brandColors } from "@/theme/colors";

export function Header() {
  const [open, setOpen] = useState(false);
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (open || applicationOpen) {
      return;
    }

    let animationFrame = 0;

    function handleScroll() {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const difference = currentScrollY - lastScrollY.current;

        if (currentScrollY < 80) {
          setHeaderVisible(true);
        } else if (Math.abs(difference) > 6) {
          setHeaderVisible(difference < 0);
        }

        lastScrollY.current = currentScrollY;
      });
    }

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [open, applicationOpen]);

  function openApplication() {
    setOpen(false);
    setApplicationOpen(true);
  }

  return (
    <>
    <AppBar position="sticky" component="header" color="transparent" sx={{ bgcolor: "rgba(247,248,244,.92)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(0,6,90,.1)", transform: headerVisible ? "translateY(0)" : "translateY(-105%)", transition: "transform 220ms ease", willChange: "transform" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 72, md: 82 } }}>
          <Link href="/#top" underline="none" aria-label="AI.edu.az ana səhifə" sx={{ display: "flex", alignItems: "center", gap: 1.1, color: "primary.main" }}>
            <Box sx={{ width: 44, height: 44, position: "relative" }}><Image src="/logo-transparent.png" alt="" fill sizes="44px" style={{ objectFit: "contain" }} /></Box>
            <Box><Typography sx={{ fontWeight: 800, letterSpacing: "-.04em", lineHeight: 1 }}>{companyInfo.name}</Typography><Typography sx={{ display: { xs: "none", sm: "block" }, fontSize: ".54rem", fontWeight: 650, mt: .45, color: "text.secondary" }}>{companyInfo.fullName}</Typography></Box>
          </Link>
          <Stack direction="row" component="nav" aria-label="Əsas naviqasiya" sx={{ ml: "auto", alignItems: "center", gap: 3.2, display: { xs: "none", md: "flex" } }}>
            {navigation.slice(0, 4).map((item) => <Link key={item.href} href={item.href} underline="none" color="text.primary" sx={{ fontSize: ".78rem", fontWeight: 650, textDecorationColor: brandColors.turquoise, textUnderlineOffset: "6px", textDecorationThickness: "2px", "&:hover": { color: brandColors.accentDark, textDecoration: "underline" } }}>{item.label}</Link>)}
            <Button onClick={openApplication} variant="contained">Müraciət et</Button>
          </Stack>
          <Button onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-navigation" sx={{ display: { xs: "inline-flex", md: "none" }, ml: "auto", minWidth: 78 }}>Menyu</Button>
        </Toolbar>
      </Container>
      <Drawer id="mobile-navigation" anchor="right" open={open} onClose={() => setOpen(false)} ModalProps={{ keepMounted: true }} slotProps={{ paper: { sx: { width: "min(90vw,380px)", bgcolor: "background.default" } } }}>
        <Stack sx={{ p: 3, minHeight: "100%" }}>
          <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", mb: 5 }}><Typography color="primary" sx={{ fontWeight: 800 }}>{companyInfo.name}</Typography><Button onClick={() => setOpen(false)} sx={{ minWidth: 72 }}>Bağla</Button></Stack>
          <Stack component="nav" aria-label="Mobil naviqasiya">
            {navigation.map((item, index) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} underline="none" color="text.primary" sx={{ display: "grid", gridTemplateColumns: "42px 1fr", alignItems: "center", minHeight: 66, borderTop: 1, borderColor: "divider", fontWeight: 700 }}><Typography variant="overline" color="secondary.dark">0{index + 1}</Typography>{item.label}</Link>)}
          </Stack>
          <Button onClick={openApplication} variant="contained" sx={{ mt: "auto" }}>Müraciət et</Button>
        </Stack>
      </Drawer>
    </AppBar>
    <ApplicationDialog open={applicationOpen} onClose={() => setApplicationOpen(false)} />
    </>
  );
}
