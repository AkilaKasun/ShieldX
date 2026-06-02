# ShieldX | Digital Protection & Growth Agency

A high-performance, immersive agency website built for **ShieldX**, a Sri Lanka-based digital protection and growth partner. This project leverages a modern tech stack to deliver a cinematic, interactive user experience focused on reputation management, SEO, and web development.

---

## 🚀 Tech Stack

*   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [GSAP](https://greensock.com/gsap/) (ScrollTrigger, ScrollTo)
*   **3D/Graphics**: [Three.js](https://threejs.org/) (Custom CyberEarth implementation)
*   **Smooth Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis)
*   **Icons**: [Lucide React](https://lucide.dev/)

---

## 💎 Key Features

*   **Cinematic Hero Section**: Features a scroll-synced 3D interactive globe created with Three.js.
*   **GSAP-Powered Interactions**: High-performance horizontal scrolling, reveal animations, and staggered entrance effects.
*   **Neural Network Backgrounds**: Custom-built HTML5 Canvas neural network animations across multiple sections.
*   **Immersive Audio**: Integrated background soundscapes with browser-friendly state management and toggle controls.
*   **Performance-First Design**: Optimized for modern browsers with scroll-based lazy loading and hardware-accelerated animations.
*   **Responsive & Scalable**: Fully responsive grid systems and adaptive typography using fluid `clamp()` sizing.

---

## 🛠 Project Structure Highlights

- `src/components/sections/`: Modular landing page components (Hero, Process, Testimonials, FAQ, CTA).
- `src/hooks/`: Custom hooks for scroll behavior, cursor tracking, and reveal animations.
- `src/assets/`: Media assets including custom audio and branding elements.
- `src/components/Logo.jsx`: Dynamic, SVG-based responsive logo with hover-state animations.

---

## 🎨 Design System

The project follows a "Cyberpunk Corporate" aesthetic:
*   **Primary Accent**: Neon Cyan (`#00F0FF`)
*   **Backgrounds**: Ultra-dark void navy (`#020308`)
*   **Typography**: Clean sans-serif and high-tech monospace accents.
*   **Effects**: Glassmorphism, ambient radial glows, and drop-shadow neon emitters.

---

## ⚙️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
