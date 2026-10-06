# Fairpointe website

Marketing site for [fairpointe.co.uk](https://fairpointe.co.uk). Next.js 16 (App Router), Tailwind CSS v4, Manrope via `next/font/google`, Radix primitives, Lucide icons and Motion. Enquiries are delivered with Resend.

## Run locally

```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY
npm run dev
```

Checks: `npm run lint`, `npm run typecheck`, `npm run build`.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | Server-side Resend key. Never exposed to the browser. |
| `CONTACT_FROM_EMAIL` | Recommended | Sender, e.g. `Fairpointe Website <website@fairpointe.co.uk>`. The domain must be verified in Resend. |
| `CONTACT_TO_EMAIL` | No | Overrides the recipient. Defaults to `adebola@fairpointe.co.uk`. |

Without `RESEND_API_KEY` the form shows its failure state. It never reports success unless Resend accepts the message.

## Enquiry pipeline

- `components/contact/enquiry-form.tsx`: reusable client form. Drop `<EnquiryForm defaultEnquiry="uk-market-entry" />` anywhere; every instance uses the same backend.
- `lib/enquiry/actions.ts`: server action. Honeypot, minimum fill time, Zod validation, per-IP rate limit (5 per 15 minutes), then Resend with `replyTo` set to the visitor.
- `lib/enquiry/email.ts`: subject and plain-text body in the agreed format.
- Links can preselect the enquiry type with `/contact?enquiry=<slug>` (slugs in `lib/site.ts`).

The rate limiter is in memory, so each server instance keeps its own window. For a strict global limit, back `lib/enquiry/rate-limit.ts` with a shared store such as Upstash Redis.

## Structure

- `lib/site.ts`: brand constants, navigation, CTAs, enquiry types. Header, mobile menu and footer read navigation from here.
- `lib/seo.ts`: per-page metadata (canonical, Open Graph, Twitter) and JSON-LD builders (Organization, WebSite, Service, BreadcrumbList, FAQPage).
- `lib/pages.ts`: indexable pages for `sitemap.xml` and Open Graph images.
- `components/marketing`: layout grid, section blocks, CTA band, FAQ, ruled lists.
- `components/diagrams`: the technical diagrams (access paths, control loop, environment coverage, multi-cloud stack, UK operating model).

## Adding proof and new sections

Nothing on the site claims customers, partnerships, certifications or frameworks. `lib/proof.ts` holds empty, typed lists for credentials, technology partners and customer stories. `CredentialsSection` (already placed on Public Sector) renders only when verified entries exist.

To add Technology Partners, Customer Stories, Procurement or Insights: create the route under `app/`, add it to `navigation` in `lib/site.ts` and to `lib/pages.ts`, and add an `opengraph-image.tsx` like the existing routes.

## Before launch

- Verify the sending domain in Resend and set the environment variables in production.
- Add a privacy notice covering the contact form before collecting enquiries.
