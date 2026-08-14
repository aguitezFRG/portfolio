# Portfolio Handoff Checklist

The portfolio is implemented locally. Complete these items before treating the public V1 as finished.

## 1. Add your résumé

1. Export your current résumé as a PDF.
2. Add it at `public/resume.pdf`.
3. Add a Resume link to the navigation and hero once the file is present.
4. Open `/resume.pdf` locally and in production to confirm it downloads or displays correctly.

## 2. Replace the illustrated previews

The current project visuals are intentionally labeled interface illustrations, not fabricated screenshots. Replace them with real, non-sensitive captures:

- `public/projects/lms/`
- `public/projects/kwentong-kusina/`
- `public/projects/date-form-builder/`

Recommended coverage for each project:

- one hero image;
- two to four meaningful feature states;
- a mobile capture where it adds useful evidence.

Avoid login screens, empty data states, error messages, credentials, student records, personal email addresses, or other private data. Update the matching image paths and alt text in `content/projects/*.ts` after adding files.

## 3. Review public copy

Read each case study as a recruiter and confirm:

- every technical claim is accurate and still implemented;
- the stated role reflects your personal contribution;
- live URLs are correct;
- repository visibility matches what you want visitors to open;
- the email address is safe to publish.

The primary content files are in `content/site.ts` and `content/projects/`.

## 4. Prepare Vercel deployment

1. Create or import the `aguitezFRG/portfolio` repository in Vercel.
2. Use the repository root as the project root.
3. Build command: `npm run build`.
4. No environment variables or secrets are required.
5. Deploy the project.
6. Copy the stable Vercel URL, or connect your custom domain.
7. Replace `siteUrl` in `content/site.ts` with that exact canonical HTTPS URL.
8. Redeploy so canonical metadata, sitemap, and robots point to the correct origin.

## 5. Validate external project previews

For each live project link, confirm it opens successfully in a new tab.

The current portfolio includes live URLs for Kwentong Kusina and Custom Date Form Builder. If a host blocks iframe embedding through CSP or `X-Frame-Options`, retain the external link and remove its `liveUrl` only if the product is no longer publicly available. Never rely on a live preview for the portfolio to communicate the project.

## 6. Final production review

Check the deployed website at desktop and mobile sizes:

- navigation and anchor links;
- all three project routes;
- screenshots and image alt text;
- GitHub, LinkedIn, email, résumé, and live-site links;
- no horizontal scrolling;
- keyboard focus visibility;
- social metadata, `/robots.txt`, and `/sitemap.xml`.

Run these locally before each release:

```bash
npm run lint
npm run build
```

## 7. Commit safely

Review exactly what will be committed:

```bash
git status --short
git diff --check
```

Agent-owned directories and instruction files are ignored by `.gitignore`; keep them out of all commits and pushes.
