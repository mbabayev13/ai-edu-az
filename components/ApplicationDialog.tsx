"use client";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ApplicationForm } from "@/components/ApplicationForm";
import { currentPrograms } from "@/data/site";

type ApplicationDialogProps = {
  open: boolean;
  onClose: () => void;
};

const courseNames = currentPrograms.map((program) => program.title);

export function ApplicationDialog({ open, onClose }: ApplicationDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="application-dialog-title"
      fullWidth
      maxWidth="md"
      scroll="paper"
      slotProps={{
        paper: {
          sx: {
            borderRadius: { xs: "24px", sm: "34px" },
            bgcolor: "background.default",
            backgroundImage: "none",
            m: { xs: 2, sm: 3 },
          },
        },
        backdrop: { sx: { bgcolor: "rgba(0,6,90,.72)" } },
      }}
    >
      <DialogContent sx={{ p: { xs: 3, sm: 5, md: 6 } }}>
        <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start", justifyContent: "space-between" }}>
          <Typography id="application-dialog-title" component="h2" variant="h3">
            Müraciət məlumatları
          </Typography>
          <Button onClick={onClose} variant="text" sx={{ minWidth: 72, minHeight: 44, px: 1.5, mt: -1 }}>
            Bağla
          </Button>
        </Stack>
        <ApplicationForm course={courseNames[0]} courses={courseNames} />
      </DialogContent>
    </Dialog>
  );
}
