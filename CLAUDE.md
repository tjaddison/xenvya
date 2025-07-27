# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (with Turbopack for faster builds)
- **Build**: `npm run build`
- **Production server**: `npm start`
- **Linting**: `npm run lint`

## Architecture Overview

This is a Next.js 15 application using the App Router pattern, built for Xenvya Consulting's business website.

### Technology Stack
- **Framework**: Next.js 15 with App Router
- **UI**: React 19, Tailwind CSS 4, Framer Motion for animations
- **Backend**: Next.js API routes with AWS DynamoDB integration
- **Analytics**: Google Analytics with custom page view tracking
- **Fonts**: Geist Sans and Geist Mono from Google Fonts

### Project Structure
- `src/app/` - Main application directory using App Router
  - `components/` - Reusable React components (Header, Footer, ContactForm, etc.)
  - `hooks/` - Custom React hooks (usePageViewTimer)
  - `api/save-contact/` - API route for contact form submissions to DynamoDB
  - Service pages under `services/` directory
- `public/` - Static assets (SVG icons)

### Key Components
- **ContactForm**: Handles form validation, submission to AWS DynamoDB via API route
- **GoogleAnalytics**: Custom GA4 integration with page view tracking
- **SearchParamsTracker**: Tracks URL parameters for analytics
- **Header/Footer**: Responsive navigation and site footer

### AWS Integration
- Contact form data is stored in DynamoDB via the `/api/save-contact` endpoint
- Requires AWS credentials in environment variables:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY` 
  - `AWS_REGION` (defaults to us-east-1)
  - `DYNAMODB_TABLE_NAME` (defaults to xenvya-contacts)

### Styling Approach
- Uses Tailwind CSS 4 with custom responsive breakpoints
- Dark mode support throughout the application
- Framer Motion for smooth animations and transitions
- Mobile-first responsive design

### Business Context
Xenvya Consulting offers SaaS development and software acquisition services. The site emphasizes:
- Custom SaaS platform development
- Strategic software asset acquisition and optimization
- Technology-agnostic approach
- Long-term value creation focus

## Website design

Distinctive Font Combination

font-family: "Poppins", system-ui, sans-serif;
font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

Headers: Poppins (600-700 weight)
Body: Inter (400 weight)
UI Elements: Inter (500 weight)

## Base Website Content of the following information

I don't have specific information about an "Anthropic AI Fluency Framework" in my knowledge base. This could be a recent development, internal framework, or something that's been announced after my knowledge cutoff in January 2025.

Let me search for current information about this framework.Let me get more detailed information about this framework by fetching the main course page.The Anthropic AI Fluency Framework is a comprehensive educational initiative developed by Anthropic in partnership with academic experts Prof. Joseph Feller (University College Cork) and Prof. Rick Dakan (Ringling College). It's designed to teach people how to work with AI systems effectively, efficiently, ethically, and safely.

## Core Framework: The "4Ds"

The framework centers around four core competencies, known as the "4Ds":

**1. Delegation** - Deciding what work to do with AI vs. yourself. This involves thoughtfully determining which tasks are best suited for AI collaboration versus independent work.

**2. Description** - Communicating effectively with AI systems. This goes beyond simple prompting and includes:
- Product Description: Clearly defining what you want the AI to create
- Process Description: Guiding how the AI approaches your request  
- Performance Description: Defining how you want the AI to behave during collaboration

**3. Discernment** - Evaluating AI outputs and behaviors with a critical eye to assess quality, accuracy, and appropriateness.

**4. Diligence** - Ensuring responsible AI collaboration. This includes:
- Creation Diligence: Being thoughtful about which AI systems you use
- Transparency Diligence: Being open about AI's role in your work
- Deployment Diligence: Taking responsibility for AI-assisted outputs you share

## Three Ways of AI Engagement

The framework also identifies three primary modes of human-AI interaction:

- **Automation**: The AI completes specific tasks based on your instructions
- **Augmentation**: You and AI collaborate as creative thinking and task execution partners
- **Agency**: You configure AI to work independently on your behalf, establishing its knowledge and behavior patterns rather than just giving it specific tasks

## Course Structure

The complete course takes an estimated 3-4 hours and includes practical exercises, technical deep dives, and hands-on practice with AI systems. Upon completion, participants can receive a certificate.

The framework is designed to remain relevant as AI technologies evolve, providing foundational competencies that adapt to new AI capabilities and use cases.

Consulting and Implementation Services
AI Fluency Consulting - Help organizations assess their current AI readiness and develop customized fluency programs. This could include auditing existing AI usage and creating governance frameworks.
AI Integration Strategy - Guide businesses in determining which tasks should be automated, augmented, or delegated to AI agents using the framework's principles.
AI Ethics and Governance Consulting - Focus specifically on the "Diligence" component, helping organizations develop responsible AI practices, transparency policies, and accountability measures.

I've created a comprehensive business plan for AI fluency consulting and implementation services that targets the high-value enterprise market. Here are the key strategic elements that make this plan compelling:

## Revenue Model Strengths

**Premium Positioning**: By focusing on strategic transformation rather than tactical AI implementation, the firm can command $75K-$1.2M per engagement, significantly higher than typical technology consulting.

**Recurring Revenue Streams**: The combination of project work (70%), retainer relationships (20%), and training services (10%) creates predictable cash flow and client stickiness.

**Scalable Growth Path**: The 5-year projection from $2.3M to $45M revenue demonstrates how specialized expertise can scale rapidly in a high-demand market.

## Competitive Differentiation

**First-Mover Advantage**: Specializing specifically in AI fluency rather than general AI consulting creates a unique market position that's difficult for larger firms to replicate quickly.

**Proprietary Methodology**: Building on the Anthropic framework while developing custom assessment tools and implementation processes creates intellectual property moats.

**Outcome-Focused Approach**: Emphasis on measurable ROI and business transformation rather than technology deployment addresses the core pain point executives face with AI investments.

## Strategic Execution Plan

**Three-Phase Go-to-Market**: Starting with partnerships and warm networks, scaling through direct sales, then achieving market leadership through thought leadership and platform development.

**Geographic Expansion**: Clear path from initial US market to international presence, enabling significant scale.

**Service Evolution**: Natural progression from consulting to platform business, potentially leading to acquisition or IPO opportunities.

The plan addresses the $2.8 billion addressable market for AI readiness consulting while building sustainable competitive advantages through specialization, proprietary methodologies, and outcome-focused delivery models.

Would you like me to elaborate on any specific aspect of the business plan, such as the financial projections, operational details, or competitive strategy?