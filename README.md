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

## Validation

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Updating content

Company, course, project, partner, and contact content is maintained in `data/site.ts`. The course page is located at `/kurslar/ai-muhendisliyi`.
