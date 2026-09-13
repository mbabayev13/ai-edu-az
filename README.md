# AI.edu.az

AI.edu.az course website built with Next.js, TypeScript, and Material UI.

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` after the development server starts.

## Application email

Copy `.env.example` to `.env.local`. Enable two-step verification on the Google account, create a Google App Password, and place that 16-character password in `SMTP_APP_PASSWORD`. Never commit `.env.local`.

Applications are sent to `ai.edu.azerbaijan@gmail.com`. The recipient can be changed through `APPLICATION_RECIPIENT`.

## Application Google Sheet

1. Create a Google Sheet and open **Extensions → Apps Script**.
2. Paste the contents of `docs/google-sheets-webhook.gs` into the editor.
3. In **Project Settings → Script Properties**, add `WEBHOOK_SECRET` with a long random value.
4. Select **Deploy → New deployment → Web app**. Run it as yourself and allow access to anyone.
5. Add the deployment URL and the same secret to the server environment as `GOOGLE_SHEETS_WEBHOOK_URL` and `GOOGLE_SHEETS_WEBHOOK_SECRET`.

The webhook is called only from the server. Do not expose either value through a `NEXT_PUBLIC_` environment variable. The script creates a `Müraciətlər` sheet and stores the submission date, name, phone, email, and selected course.

## Validation

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Updating content

Company, course, project, partner, and contact content is maintained in `data/site.ts`. The course page is located at `/kurslar/ai-muhendisliyi`.
