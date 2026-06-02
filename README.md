<div align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/heart.svg" alt="InAmigos Logo" width="120" height="120">

  # InAmigos Foundation 🌍🤝
  
  **Empowering Communities. Inspiring Change.**

  A premium, high-fidelity frontend platform for the InAmigos NGO. Built to showcase transparency, drive donations, and mobilize volunteers worldwide.

  [![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

  [View Live Demo](#) · [Report Bug](#) · [Request Feature](#)
</div>

---

## 📖 Table of Contents
1. [About The Project](#-about-the-project)
2. [Key Features](#-key-features)
3. [Tech Stack & Architecture](#-tech-stack--architecture)
4. [Project Structure](#-project-structure)
5. [Design System & UI/UX](#-design-system--uiux)
6. [Getting Started (Local Development)](#-getting-started)
7. [Deployment](#-deployment)
8. [Dashboard Overview](#-dashboard-overview)
9. [Animation & 3D Guidelines](#-animation--3d-guidelines)
10. [Contributing](#-contributing)
11. [License](#-license)
12. [Contact](#-contact)

---

## 🎯 About The Project

The **InAmigos Foundation** platform is a modern, Apple-inspired NGO website designed entirely as a frontend showcase. Moving away from generic template designs, this project focuses heavily on **visual hierarchy, glassmorphism, micro-interactions, and 3D elements** to deliver a premium SaaS-level experience for a non-profit organization.

### Why this architecture?
This project was strictly built as a **Frontend-Only** application (no backend, database, or server actions) to serve as a high-performance, edge-ready presentation layer. It utilizes Next.js App Router for routing, but relies entirely on static mock data and client-side state for its interactivity, making it perfectly suited for instantaneous deployment to Vercel.

---

## ✨ Key Features

- **Immersive 3D Hero:** Utilizes React Three Fiber for a dynamic, particle-driven interactive 3D background that responds to themes.
- **Glassmorphism UI:** Custom CSS utilities for frosted-glass effects across both light and dark modes.
- **Seamless Page Transitions:** Framer Motion-powered route transitions ensure zero layout jumps and a fluid user experience.
- **Dedicated Admin Dashboard:** A fully isolated route group (`/dashboard`) featuring interactive Recharts, searchable data tables, and management UI.
- **Scroll-Reveal Animations:** Components gracefully fade and slide into view as the user navigates down the page.
- **Mobile-First Responsive:** Meticulously crafted using Tailwind CSS to look stunning on mobile, tablet, and ultra-wide desktops.
- **100% Type-Safe:** Built entirely with strict TypeScript.

---

## 🛠 Tech Stack & Architecture

### Core Technologies
| Technology | Description |
| :--- | :--- |
| **Next.js 15 (App Router)** | The React framework utilized for structural routing and optimized builds. |
| **React 19** | The foundation of the component architecture. |
| **TypeScript** | Ensures robust, error-free code through static typing. |

### Styling & UI
| Technology | Description |
| :--- | :--- |
| **Tailwind CSS v4** | Utility-first CSS framework for rapid, consistent styling. |
| **shadcn/ui** | Accessible, customizable components built on Radix UI. |
| **Lucide React** | Beautiful, consistent iconography throughout the app. |
| **next-themes** | Handles seamless light/dark mode switching. |

### Animation & 3D
| Technology | Description |
| :--- | :--- |
| **Framer Motion** | Powers page transitions, scroll reveals, and micro-interactions. |
| **React Three Fiber (R3F)** | React wrapper for Three.js, powering the 3D Hero Section. |
| **@react-three/drei** | Useful helpers and abstractions for R3F. |

### Data Visualization
| Technology | Description |
| :--- | :--- |
| **Recharts** | Composable charting library used for the Dashboard Analytics. |

---

## 📂 Project Structure

The codebase is organized using Next.js **Route Groups** to strictly separate the public-facing website from the administrative dashboard, preventing layout collisions.

```bash
ngowebsite/
├── app/
│   ├── (main)/                 # Public Website Route Group
│   │   ├── layout.tsx          # Public Layout (Includes Navbar & Footer)
│   │   ├── page.tsx            # Home Page
│   │   ├── about/              # About Us Page
│   │   ├── campaigns/          # Campaigns Directory
│   │   ├── contact/            # Contact Form & Info
│   │   ├── donate/             # Donation Interface
│   │   ├── events/             # Events Calendar
│   │   ├── gallery/            # Masonry Image Gallery
│   │   ├── volunteer/          # Volunteer Application
│   │   └── ...                 # (Privacy, Terms, etc.)
│   │
│   ├── dashboard/              # Admin Dashboard Route Group
│   │   ├── layout.tsx          # Dashboard Layout (Sidebar & TopNav)
│   │   ├── page.tsx            # Overview & Analytics
│   │   ├── blog/               # Blog Management
│   │   ├── campaigns/          # Campaign Management
│   │   ├── events/             # Event Management
│   │   ├── members/            # Member Directory
│   │   └── settings/           # Admin Settings
│   │
│   ├── globals.css             # Tailwind Directives & Custom Utilities
│   └── layout.tsx              # Root HTML/Body Layout
│
├── components/
│   ├── dashboard/              # Dashboard-specific components (Sidebar, TopNav)
│   ├── layout/                 # Public layout components (Navbar, Footer)
│   ├── shared/                 # Reusable components (PageTransition, ScrollReveal, Hero3D)
│   └── ui/                     # shadcn/ui components (Button, etc.)
│
├── sections/                   # Modular Page Sections
│   ├── home/                   # HeroSection, StatsSection, TestimonialSection
│   └── about/                  # MissionSection, ValuesSection, TimelineSection
│
├── public/                     # Static assets (fonts, images)
└── ...config files             # next.config.ts, tailwind.config, package.json
```

---

## 🎨 Design System & UI/UX

### The "Glass" Philosophy
Instead of flat backgrounds, the UI relies on layered frosted glass panels. This is achieved via custom `@utility` classes in `globals.css`:

```css
.glass {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
}
```

### Color Palette
- **Primary:** Deep Indigo/Purple (`oklch(0.55 0.25 250)`) — conveys trust, royalty, and premium quality.
- **Backgrounds:** Clean white for light mode, deep slate-blue for dark mode.
- **Accents:** Emerald for success/active states, Amber for warnings/drafts, Rose for destructive actions.

### Typography
The project utilizes Vercel's **Geist Sans** and **Geist Mono** for a highly legible, modern, and geometric aesthetic.

---

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/inamigos-ngo.git
   cd inamigos-ngo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open the app**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deployment

This project is highly optimized for deployment on **Vercel**. Since it is Frontend-Only, no database provisioning or environment variables are required.

1. Push your code to your GitHub repository.
2. Sign in to [Vercel](https://vercel.com).
3. Click **Add New Project** and import your repository.
4. Vercel will automatically detect the **Next.js** framework.
5. Click **Deploy**.

**Build Verification:**
Before deploying, always run the build locally to ensure type safety:
```bash
npm run lint
npm run build
```

---

## 📊 Dashboard Overview

The `/dashboard` route is a complete simulation of an NGO administrative panel.

- **Overview:** Features KPI cards with micro-trend indicators, an activity feed, and a responsive `Recharts` area chart mapping donations vs. volunteers.
- **Members:** A searchable, filterable data table displaying user roles and active status.
- **Campaigns:** Grid view of active initiatives with animated progress bars denoting funding goals.
- **Events:** Interactive mini-calendar layout with upcoming event cards.
- **Settings:** Profile management, Theme toggles, and notification preferences.

*Note: All data in the dashboard is currently mocked via static arrays for frontend demonstration purposes.*

---

## 🪄 Animation & 3D Guidelines

To maintain the premium feel without sacrificing performance, adhere to these animation rules:

1. **Scroll Reveal (`<ScrollReveal>`)**
   Use this wrapper component for sections as the user scrolls down the page. It utilizes `useInView` to trigger smooth Y-axis translations.
   ```tsx
   <ScrollReveal delay={0.2} duration={0.6}>
     <YourComponent />
   </ScrollReveal>
   ```

2. **Page Transitions (`<PageTransition>`)**
   Applied globally in `layout.tsx`. Do not nest `AnimatePresence` unless specifically building complex tab/modal transitions.

3. **3D Hero (`<Hero3D>`)**
   The 3D canvas is restricted **only** to the homepage hero section to conserve GPU resources. It utilizes lazy-initialized `Float32Array` buffers for the particle field to satisfy React Hook Purity rules.

4. **Animated Counters (`<AnimatedCounter>`)**
   Use this for statistics (e.g., in `StatsSection`). It utilizes an ease-out cubic math function via `requestAnimationFrame` for buttery-smooth number counting.

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Formatting Rules
- Always use **Tailwind CSS** for styling. Avoid writing custom CSS unless absolutely necessary (like the `.glass` utility).
- Ensure all components are strongly typed with **TypeScript Interfaces**.
- Never introduce backend logic (Prisma, API routes) to this specific frontend showcase repository.

---

## 📝 License

Distributed under the MIT License. See `LICENSE.txt` for more information.

---

## 📫 Contact

**InAmigos Foundation**
- Email: contact@inamigos.org
- Press: press@inamigos.org
- Project Link: [https://github.com/yourusername/inamigos-ngo](https://github.com/yourusername/inamigos-ngo)

<div align="center">
  Made with ❤️ by the InAmigos Open Source Team
</div>
