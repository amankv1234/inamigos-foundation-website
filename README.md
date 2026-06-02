<div align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/heart.svg" alt="InAmigos Logo" width="120" height="120">

  # InAmigos Foundation 🌍🤝
  
  **Empowering Communities. Inspiring Change.**

  A premium, high-fidelity frontend platform for the InAmigos NGO. Built to showcase transparency, drive donations, and mobilize volunteers worldwide through cutting-edge web technologies.

  [![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
  [![React Three Fiber](https://img.shields.io/badge/React_Three_Fiber-8.0-black?style=for-the-badge&logo=three.js)](https://docs.pmnd.rs/react-three-fiber/)

  [View Live Demo](#) · [Report Bug](#) · [Request Feature](#)
</div>

---

## 📖 Table of Contents
1. [About The Project](#-about-the-project)
2. [Key Features & Innovations](#-key-features--innovations)
3. [Tech Stack & Architecture](#-tech-stack--architecture)
4. [Project Directory Structure](#-project-directory-structure)
5. [Page-by-Page Breakdown](#-page-by-page-breakdown)
6. [Design System & UI/UX](#-design-system--uiux)
7. [Component Architecture](#-component-architecture)
8. [Performance & Accessibility](#-performance--accessibility)
9. [Getting Started (Local Development)](#-getting-started)
10. [Deployment & Vercel Configuration](#-deployment--vercel-configuration)
11. [Future Roadmap (Backend Integration)](#-future-roadmap)
12. [Contributing Guidelines](#-contributing-guidelines)
13. [License & Contact](#-license--contact)

---

## 🎯 About The Project

The **InAmigos Foundation** platform is a modern, Apple-inspired NGO website designed entirely as a frontend showcase. Moving away from generic template designs, this project focuses heavily on **visual hierarchy, glassmorphism, micro-interactions, and 3D elements** to deliver a premium SaaS-level experience for a non-profit organization.

### Why this architecture?
This project was strictly built as a **Frontend-Only** application (no backend, database, or server actions) to serve as a high-performance, edge-ready presentation layer. It utilizes the Next.js App Router for routing but relies entirely on static mock data and client-side state for its interactivity. This makes it perfectly suited for instantaneous deployment to Vercel, bypassing the need for complex database provisioning during initial reviews or design prototyping phases.

---

## ✨ Key Features & Innovations

- **Immersive 3D Hero:** Utilizes React Three Fiber for a dynamic, particle-driven interactive 3D background that responds to light/dark themes natively without dropping frames.
- **Glassmorphism UI Engine:** Custom CSS utilities for frosted-glass effects (`backdrop-filter`) across both light and dark modes, giving cards a floating, ethereal quality.
- **Seamless Route Transitions:** Framer Motion-powered `<PageTransition>` components ensure zero layout jumps, delivering a fluid, native-app-like user experience between navigations.
- **Dedicated Admin Dashboard:** A fully isolated route group (`/dashboard`) featuring interactive Recharts, searchable data tables, and an administrative UI simulation.
- **Scroll-Reveal Animations:** Components gracefully fade and slide into view as the user navigates down the page using Intersection Observer hooks.
- **Mobile-First Responsive:** Meticulously crafted using Tailwind CSS to look stunning on mobile phones, tablets, and ultra-wide desktop monitors alike.
- **100% Type-Safe:** Built entirely with strict TypeScript, ensuring zero prop-type errors at runtime.

---

## 🛠 Tech Stack & Architecture

### Core Technologies
| Technology | Description |
| :--- | :--- |
| **Next.js 15 (App Router)** | The React framework utilized for structural routing, optimized builds, and Layout preservation. |
| **React 19** | The foundation of the component architecture, leveraging the latest hook patterns. |
| **TypeScript** | Ensures robust, error-free code through exhaustive static typing. |

### Styling & UI
| Technology | Description |
| :--- | :--- |
| **Tailwind CSS v4** | Utility-first CSS framework for rapid, consistent styling directly within JSX. |
| **shadcn/ui** | Accessible, unstyled, and highly customizable components built on Radix UI primitives. |
| **Lucide React** | Beautiful, consistent, and cleanly designed iconography throughout the application. |
| **next-themes** | Handles seamless light/dark mode switching and avoids React hydration mismatches. |

### Animation & 3D
| Technology | Description |
| :--- | :--- |
| **Framer Motion** | Powers complex page transitions, continuous scroll reveals, and physics-based micro-interactions. |
| **React Three Fiber (R3F)** | React wrapper for Three.js, enabling declarative 3D scenes. |
| **@react-three/drei** | Useful helpers and abstractions for R3F, heavily utilized in the Hero component. |

### Data Visualization
| Technology | Description |
| :--- | :--- |
| **Recharts** | A highly composable, declarative charting library used exclusively for the Dashboard Analytics. |

---

## 📂 Project Directory Structure

The codebase is organized using Next.js **Route Groups** to strictly separate the public-facing website from the administrative dashboard. This prevents layout layout collisions and keeps bundle sizes optimized.

```bash
ngowebsite/
├── app/
│   ├── (main)/                 # 🌐 Public Website Route Group
│   │   ├── layout.tsx          # Public Layout (Injects global Navbar & Footer)
│   │   ├── page.tsx            # Home Page (Contains 3D Hero)
│   │   ├── about/              # About Us (Mission, Timeline, Founder Message)
│   │   ├── campaigns/          # Campaigns Directory & Grid
│   │   ├── contact/            # Contact Form & Office Locations
│   │   ├── donate/             # Interactive Donation Interface
│   │   ├── events/             # Upcoming Events Calendar
│   │   ├── gallery/            # Masonry Image Gallery
│   │   ├── volunteer/          # Volunteer Onboarding & Perks
│   │   ├── privacy/            # Privacy Policy
│   │   └── terms/              # Terms of Service
│   │
│   ├── dashboard/              # 🔐 Admin Dashboard Route Group
│   │   ├── layout.tsx          # Dashboard Layout (Injects Sidebar & TopNav)
│   │   ├── page.tsx            # Overview & Recharts Analytics
│   │   ├── blog/               # Blog Post Management Table
│   │   ├── campaigns/          # Campaign Progress Tracking
│   │   ├── events/             # Event Scheduling UI
│   │   ├── members/            # Member Directory & Status Toggles
│   │   └── settings/           # Admin Profile Settings
│   │
│   ├── globals.css             # Tailwind Directives & Custom @utility classes
│   └── layout.tsx              # Root HTML/Body Layout (Theme Provider injection)
│
├── components/                 # 🧱 Reusable Building Blocks
│   ├── dashboard/              # Dashboard-specific components (Sidebar, TopNav)
│   ├── layout/                 # Public layout components (Navbar, Footer)
│   ├── shared/                 # High-impact shared components (PageTransition, ScrollReveal, Hero3D)
│   └── ui/                     # shadcn/ui generic components (Button, Input, Table)
│
├── sections/                   # 🧩 Modular Page Sections
│   ├── home/                   # HeroSection, StatsSection, TestimonialSection
│   └── about/                  # MissionSection, ValuesSection, TimelineSection
│
├── public/                     # 🖼️ Static assets (fonts, SVGs, favicon)
├── .eslintrc.json              # ESLint configuration
├── next.config.ts              # Next.js configuration & Turbopack settings
├── tailwind.config.ts          # Tailwind theme tokens and extensions
└── package.json                # Project dependencies and npm scripts
```

---

## 🗺️ Page-by-Page Breakdown

### Public Site (`/app/(main)`)
- **`/` (Home):** The landing page designed for maximum conversion. Features the React Three Fiber Hero, Animated Statistics counters, Testimonials carousel, and quick calls to action.
- **`/about`:** Details the history of the InAmigos foundation, core values, and a message from the founder. Utilizes heavy scroll-reveal animations.
- **`/campaigns`:** A searchable and filterable grid of active initiatives. Each card features a Framer Motion progress bar denoting funding goals.
- **`/donate`:** A beautifully designed checkout simulation. Users can toggle between one-time and monthly donations, select preset amounts, and view impact breakdowns.
- **`/volunteer`:** Highlights the perks of volunteering and guides users through the onboarding philosophy.
- **`/gallery`:** A performant CSS columns-based Masonry layout displaying high-quality images of NGO activities in the field.

### Admin Dashboard (`/app/dashboard`)
- **Overview:** Features four key metric cards with mini-trend lines, a large responsive area chart mapping donations vs. volunteers over 6 months, and a real-time activity feed.
- **Members:** A comprehensive data table for managing users. Features active/inactive status badges and search functionality.
- **Campaigns:** A grid layout allowing admins to quickly monitor which campaigns are closest to their funding goals.
- **Events:** An interactive mini-calendar and upcoming event card management system.

---

## 🎨 Design System & UI/UX

### The "Glass" Philosophy
Instead of flat, boring backgrounds, the UI relies on layered frosted glass panels. This is achieved via custom `@utility` classes in `globals.css` ensuring compatibility with Tailwind v4:

```css
.glass {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
}

@utility glass-dark {
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}
```

### Color Palette
- **Primary Gradient:** Blending deep Indigo to bright Violet. Conveys trust, royal quality, and modern tech.
- **Backgrounds:** Clean crisp white for light mode, deep slate-blue for dark mode to reduce eye strain.
- **Semantic Colors:** Emerald green for success states, Amber for warnings, and Rose for destructive actions.

### Typography
The project utilizes Vercel's **Geist Sans** for standard text and **Geist Mono** for code or tabular data. These fonts are highly legible, modern, and geometrically precise.

---

## 🏗️ Component Architecture

We strictly separate generic UI components from complex business-logic components:

1. **`components/ui/`**: Reserved exclusively for `shadcn/ui` primitives (e.g., `<Button>`, `<Input>`). These are "dumb" components that only care about styling and basic accessibility.
2. **`components/shared/`**: Contains highly reusable but complex wrappers.
   - `<ScrollReveal>`: Wraps any children and handles Intersection Observer logic to animate them in when scrolled into view.
   - `<PageTransition>`: Wraps layout children. Uses `framer-motion`'s `AnimatePresence` mapped to `usePathname()` to trigger animations exactly when the route changes.
3. **`sections/`**: Used to break down massive pages (like the Homepage) into manageable, single-responsibility files (e.g., `<HeroSection>`, `<StatsSection>`).

---

## ⚡ Performance & Accessibility

- **React Purity:** All React Three Fiber components have been strictly audited to comply with React 19's Hook Purity rules. For example, `Math.random()` is lazily initialized inside `useState` rather than `useMemo` to prevent hydration mismatches and unpredictable re-renders.
- **Bundle Optimization:** `lucide-react` icons are tree-shaken automatically by Next.js.
- **Accessibility (a11y):** All interactive elements (buttons, inputs) utilize proper `aria-labels` and keyboard focus states provided by the Radix UI primitives underlying `shadcn/ui`.
- **Dynamic Imports:** Complex components like the 3D Canvas could be dynamically imported (`next/dynamic`) if initial load times become an issue in production.

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

## ☁️ Deployment & Vercel Configuration

This project is highly optimized for deployment on **Vercel**. Since it is Frontend-Only, no database provisioning or environment variables (`.env`) are required.

1. Push your code to your GitHub repository.
2. Sign in to [Vercel](https://vercel.com).
3. Click **Add New Project** and import your repository.
4. Vercel will automatically detect the **Next.js** framework.
5. Click **Deploy**.

**Build Verification:**
Before deploying, always run the build locally to ensure type safety. The CI/CD pipeline expects zero TypeScript errors.
```bash
npm run lint
npm run build
```

---

## 🔮 Future Roadmap (Backend Integration)

While currently a frontend showcase, the architecture is primed for backend integration. Future updates could include:
1. **Authentication:** Implementing `Auth.js` (NextAuth) to secure the `/dashboard` route group and allow actual users to log in.
2. **Database:** Integrating Prisma ORM with PostgreSQL (e.g., Supabase or Neon) to persist Campaign data, User Profiles, and Event Registrations.
3. **Server Actions:** Converting the mock data fetching arrays in the dashboard into asynchronous Next.js Server Actions for secure, direct-to-database queries.
4. **Payment Gateway:** Integrating Stripe API directly into the `/donate` page for real-world transaction processing.

---

## 🤝 Contributing Guidelines

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Formatting Rules
- Always use **Tailwind CSS** for styling. Avoid writing custom CSS unless absolutely necessary.
- Ensure all components are strongly typed with **TypeScript Interfaces**. Do not use `any`.
- Never introduce backend logic (Prisma, API routes) to this specific frontend showcase repository without prior approval.

---

## 📝 License & Contact

Distributed under the MIT License. See `LICENSE.txt` for more information.

**InAmigos Foundation**
- Email: contact@inamigos.org
- Press: press@inamigos.org
- Project Link: [https://github.com/yourusername/inamigos-ngo](https://github.com/yourusername/inamigos-ngo)

<div align="center">
  <br />
  <p>Made with ❤️ by the InAmigos Open Source Team</p>
</div>
