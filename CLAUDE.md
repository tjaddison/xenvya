# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (with Turbopack for faster builds)
- **Build**: `npm run build`
- **Production server**: `npm start`
- **Linting**: `npm run lint`

## Architecture Overview

This is a Next.js 15 application using the App Router pattern, built as Xenvya Consulting LLC's holding company website.

### Technology Stack
- **Framework**: Next.js 15 with App Router
- **UI**: React 19, Tailwind CSS 4
- **Backend**: Next.js API routes with AWS DynamoDB integration
- **Analytics**: Google Analytics (GA4) with page view and time-on-page tracking
- **Fonts**: Cormorant Garamond, Space Grotesk, JetBrains Mono, Instrument Serif via `next/font/google`

### Project Structure
- `src/app/` - Main application directory using App Router
  - `page.tsx` - Home page (portfolio, about preview, contact strip)
  - `about/page.tsx` - About page (entity details, facts, philosophy)
  - `contact/page.tsx` - Contact page (email, routing, entity details)
  - `components/` - Reusable React components
  - `api/save-contact/` - API route for contact form submissions to DynamoDB
- `public/` - Static assets

### Key Components
- **Header**: Navigation bar with wordmark logo and active page highlighting (client component)
- **Footer**: Simple footer with copyright and nav links
- **GoogleAnalytics**: GA4 integration with page view and time-on-page tracking
- **SearchParamsTracker**: Tracks URL parameters for analytics

### Pages
- **/** - Home: Hero, portfolio (GovBiz.ai), about preview, contact strip
- **/about** - Entity details, facts, operating philosophy, portfolio relationship
- **/contact** - Primary email contact, inquiry routing, entity details

### AWS Integration
- Contact form data is stored in DynamoDB via the `/api/save-contact` endpoint
- Requires AWS credentials in environment variables:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `AWS_REGION` (defaults to us-east-1)
  - `DYNAMODB_TABLE_NAME` (defaults to xenvya-contacts)

### Styling Approach
- Custom CSS classes in `globals.css` with CSS custom properties for design tokens
- Tailwind CSS 4 available for utility classes
- Color palette: bone (#F5F2EC), ink (#1A1915), accent (#3B4A3E) and variants
- Typography: Cormorant Garamond (display/serif), Space Grotesk (body), JetBrains Mono (labels/mono), Instrument Serif (wordmark)
- Responsive design with 780px mobile breakpoint
- CSS classes: `.wrap`, `.serif`, `.mono`, `.display-xl/l/m`, `.section`, `.section-sm`, `.grid-sidebar`, `.portfolio-row`, `.fact-row`, `.routing-row`, `.entity-grid`

### Business Context
Xenvya Consulting LLC is a Virginia-based holding company established August 2020. It is privately held and owner-operated with no outside investors. The site serves as the canonical reference for the entity itself.

**Operating products:**
- **GovBiz.ai** (govbiz.ai) - AI agent for federal contractors. Finds the right contracts, flags compliance risks, and turns weeks of admin into a morning briefing.

**Contact:** contact@xenvya.com (entity-level inquiries only — legal, partnership, press)
