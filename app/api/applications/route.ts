import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const attempts = new Map<string, { count: number; resetAt: number }>();
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^[+\d][\d\s()\-]{6,29}$/;
const COURSES = new Set(["AI mühəndisliyi", "Generativ AI", "AI əsaslı data analitikası"]);

function value(input: unknown, max: number) {
  return typeof input === "string" ? input.trim().slice(0, max) : "";
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") ?? "";
  const origin = request.headers.get("origin");
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (!contentType.startsWith("application/json") || contentLength > 10_000) {
    return NextResponse.json({ message: "Sorğu qəbul edilmədi." }, { status: 415 });
  }
  if (origin && origin !== request.nextUrl.origin) {
    return NextResponse.json({ message: "Sorğu qəbul edilmədi." }, { status: 403 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const current = attempts.get(ip);
  if (current && current.resetAt > now && current.count >= 5) {
    return NextResponse.json({ message: "Çox sayda cəhd edildi. Bir qədər sonra yenidən cəhd et." }, { status: 429 });
  }
  attempts.set(ip, current && current.resetAt > now ? { ...current, count: current.count + 1 } : { count: 1, resetAt: now + 15 * 60_000 });

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") return NextResponse.json({ message: "Məlumatlar düzgün formatda deyil." }, { status: 400 });

  const fullName = value(body.fullName, 100);
  const phone = value(body.phone, 30);
  const email = value(body.email, 160).toLowerCase();
  const course = value(body.course, 100);
  const website = value(body.website, 200);

  if (website) return NextResponse.json({ ok: true });
  if (fullName.length < 2 || !PHONE.test(phone) || !EMAIL.test(email) || !COURSES.has(course)) {
    return NextResponse.json({ message: "Zəhmət olmasa bütün sahələri düzgün doldur." }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_APP_PASSWORD;
  const recipient = process.env.APPLICATION_RECIPIENT ?? "ai.edu.azerbaijan@gmail.com";
  if (!smtpUser || !smtpPassword) {
    return NextResponse.json({ message: "Göndəriş xidməti hazırda aktiv deyil. Zəhmət olmasa WhatsApp ilə əlaqə saxla." }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: smtpUser, pass: smtpPassword },
  });

  try {
    await transporter.sendMail({
      from: `AI.edu.az müraciətləri <${smtpUser}>`,
      to: recipient,
      replyTo: email,
      subject: `Yeni kurs müraciəti: ${fullName}`,
      text: [
        "AI.edu.az saytından yeni müraciət",
        "",
        `Ad və soyad: ${fullName}`,
        `Telefon: ${phone}`,
        `E-poçt: ${email}`,
        `Təlim proqramı: ${course}`,
        `Tarix: ${new Date().toISOString()}`,
      ].join("\n"),
    });
  } catch {
    return NextResponse.json({ message: "Müraciəti göndərmək mümkün olmadı. Zəhmət olmasa WhatsApp ilə əlaqə saxla." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
