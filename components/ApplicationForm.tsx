"use client";

import { FormEvent, useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

type FormState = "idle" | "sending" | "success" | "error";

type ApplicationFormProps = {
  course?: string;
  courses?: readonly string[];
};

export function ApplicationForm({ course, courses }: ApplicationFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setState("sending");
    setMessage("");
    const form = new FormData(formElement);
    const response = await fetch("/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: form.get("fullName"),
        phone: form.get("phone"),
        email: form.get("email"),
        course: form.get("course"),
        website: form.get("website"),
      }),
    }).catch(() => null);

    if (response?.ok) {
      formElement.reset();
      setState("success");
      setMessage("Müraciətin qəbul edildi. Komandamız səninlə əlaqə saxlayacaq.");
      return;
    }

    const result = response ? await response.json().catch(() => null) : null;
    setState("error");
    setMessage(result?.message ?? "Müraciəti göndərmək mümkün olmadı. Zəhmət olmasa yenidən cəhd et.");
  }

  return (
    <Box component="form" onSubmit={submit} sx={{ mt: 4 }}>
      <Stack spacing={2.2}>
        <TextField name="fullName" label="Ad və soyad" required fullWidth autoComplete="name" slotProps={{ htmlInput: { minLength: 2, maxLength: 100 } }} />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.2 }}>
          <TextField name="phone" label="Telefon nömrəsi" required fullWidth type="tel" autoComplete="tel" placeholder="+994 50 000 00 00" slotProps={{ htmlInput: { minLength: 7, maxLength: 30 } }} />
          <TextField name="email" label="E-poçt" required fullWidth type="email" autoComplete="email" slotProps={{ htmlInput: { maxLength: 160 } }} />
        </Box>
        {courses?.length ? (
          <TextField
            select
            name="course"
            label="Tədris proqramı"
            defaultValue={course ?? courses[0]}
            required
            fullWidth
          >
            {courses.map((courseName) => (
              <MenuItem key={courseName} value={courseName}>
                {courseName}
              </MenuItem>
            ))}
          </TextField>
        ) : (
          <TextField name="course" label="Tədris proqramı" value={course ?? ""} required fullWidth slotProps={{ input: { readOnly: true } }} />
        )}
        <Box sx={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }} aria-hidden="true">
          <TextField name="website" label="Website" tabIndex={-1} autoComplete="off" />
        </Box>
        <Typography variant="body2" color="text.secondary">Məlumatlarınız yalnız müraciətinizlə bağlı sizinlə əlaqə saxlamaq üçün istifadə olunacaq.</Typography>
        {message ? <Alert severity={state === "success" ? "success" : "error"}>{message}</Alert> : null}
        <Button type="submit" variant="contained" disabled={state === "sending"} sx={{ alignSelf: { sm: "flex-start" }, minWidth: 180 }}>
          {state === "sending" ? "Göndərilir..." : "Müraciəti göndər"}
        </Button>
      </Stack>
    </Box>
  );
}
