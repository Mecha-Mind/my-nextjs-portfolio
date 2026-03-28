# Portfolio — Hani Abdallah

Personal portfolio built with Next.js 15, React 19, and Tailwind CSS. It showcases my projects, services, testimonials, and a contact form that sends emails via Resend.

## Tech Stack

| Category | Tools |
|----------|-------|
| Framework | Next.js 15 (App Router), React 19 |
| Styling | Tailwind CSS 4 |
| Icons | react-icons |
| Sliders | Swiper |
| Email | Resend |
| Notifications | react-toastify |

## Project Structure

```
src/
├── app/
│   ├── page.js              # Home page
│   ├── layout.js            # Root layout (fonts, Layout wrapper)
│   ├── api/send/route.js    # Contact form API (validation + rate limit)
│   ├── contact/             # Contact page + form
│   ├── work/                # Projects slider
│   ├── services/            # Services section
│   └── testimonials/        # Testimonials section
├── components/
│   ├── Layout.jsx           # Nav, Header, ToastProvider
│   ├── HeroTest.jsx         # Hero section (home)
│   ├── AboutContent.jsx     # About section
│   ├── ProjectsGallery.jsx  # Projects with category tabs + modal
│   ├── projects/            # Project-related components
│   │   ├── ProjectData.js   # Static project data
│   │   ├── CategoryTabs.jsx
│   │   ├── ProjectsGrid.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ProjectModal.jsx
│   └── ToastProvider.jsx    # App-wide toast notifications
└── lib/
    ├── rateLimit.js         # In-memory rate limiting (5 req/min per IP)
    └── validateContact.js   # Backend form validation
```

## Features

- **Responsive layout** across devices
- **Projects** with category filtering (HTML/CSS, Next.js, JavaScript, Games)
- **Project modal** with details, tech stack, and live link
- **Contact form** with client + server validation, rate limiting, and email via Resend
- **Animations** via CSS (no heavy animation libraries)
- **Accessibility** with semantic HTML and ARIA where needed

## Contact Form & API

The contact form validates on the client and on the server. The API:

- Validates name, email, subject, and message
- Limits to 5 requests per minute per IP
- Returns clear error messages for validation or rate-limit issues
- Uses Resend to send emails

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For production:

```bash
npm run build
npm start
```

## Environment Variables

Create `.env.local` with:

```
RESEND_API_KEY=your_resend_api_key
```

## Live Demo

[https://my-nextjs-portfolio-sigma.vercel.app/](https://my-nextjs-portfolio-sigma.vercel.app/)

## Author

**Hani Abdallah** — Frontend Developer  
[GitHub](https://github.com/Mecha-Mind)
