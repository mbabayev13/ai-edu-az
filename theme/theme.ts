"use client";

import { createTheme } from "@mui/material/styles";
import { brandColors } from "@/theme/colors";

const { navy, turquoise, green, warmIvory, paper, ink } = brandColors;

export const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: { main: navy, contrastText: "#FFFFFF" },
    secondary: { main: turquoise, contrastText: ink },
    success: { main: green },
    background: { default: warmIvory, paper },
    text: { primary: ink, secondary: "#555D70" },
    divider: "rgba(0, 6, 90, 0.14)",
  },
  shape: { borderRadius: 18 },
  typography: {
    fontFamily: "var(--font-montserrat), Arial, sans-serif",
    h1: { fontSize: "clamp(3rem, 7.2vw, 7rem)", fontWeight: 750, lineHeight: .94, letterSpacing: "-0.07em" },
    h2: { fontSize: "clamp(2.25rem, 4.5vw, 4.8rem)", fontWeight: 750, lineHeight: 1, letterSpacing: "-0.06em" },
    h3: { fontSize: "clamp(1.25rem, 2vw, 1.85rem)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.035em" },
    body1: { fontSize: "1rem", lineHeight: 1.68, fontWeight: 400 },
    body2: { fontSize: ".88rem", lineHeight: 1.58, fontWeight: 450 },
    button: { fontSize: ".82rem", fontWeight: 700, letterSpacing: ".01em", textTransform: "none" },
    overline: { fontSize: ".7rem", lineHeight: 1.4, fontWeight: 750, letterSpacing: ".13em" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "::selection": { backgroundColor: turquoise, color: ink },
        html: { scrollBehavior: "smooth", scrollPaddingTop: "88px" },
        body: { overflowX: "hidden" },
        "*:focus-visible": { outline: `3px solid ${turquoise}`, outlineOffset: 3 },
        "@media (prefers-reduced-motion: reduce)": {
          html: { scrollBehavior: "auto" },
          "*, *::before, *::after": { animationDuration: "0.01ms !important", animationIterationCount: "1 !important", transitionDuration: "0.01ms !important" },
        },
      },
    },
    MuiContainer: { styleOverrides: { maxWidthLg: { maxWidth: "1320px" } } },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { minHeight: 50, borderRadius: 999, paddingInline: 26, transition: "transform 160ms ease, background-color 160ms ease", "&:hover": { transform: "translateY(-2px)" } },
        contained: { "&:hover": { backgroundColor: "#101A79" } },
        outlined: { borderWidth: 1.5, "&:hover": { borderWidth: 1.5 } },
      },
    },
    MuiLink: { styleOverrides: { root: { textUnderlineOffset: ".25em", textDecorationThickness: "1px" } } },
    MuiAppBar: { styleOverrides: { root: { boxShadow: "none" } } },
    MuiDrawer: { styleOverrides: { paper: { borderRadius: 0 } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 24, boxShadow: "none" } } },
    MuiTextField: {
      defaultProps: { variant: "outlined" },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": { borderRadius: 14, backgroundColor: "#FFFFFF" },
          "& .MuiInputLabel-root": { fontWeight: 550 },
        },
      },
    },
  },
});
