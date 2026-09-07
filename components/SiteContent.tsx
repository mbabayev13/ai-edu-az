"use client";

import Box from "@mui/material/Box";
import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { Partners } from "@/components/Partners";
import { Programs } from "@/components/Programs";
import { Projects } from "@/components/Projects";
import { contacts, socialLinks } from "@/data/site";

export function SiteContent() {
  return (
    <>
      <Box id="top" component="main">
        <Programs />
        <Approach />
        <Projects />
        <About />
        <Partners />
        <Contact contacts={contacts} socialLinks={socialLinks} />
      </Box>
    </>
  );
}
