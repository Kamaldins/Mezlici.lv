<div align="center">
  <img src="https://i.ibb.co/mVH0z4S8/Whats-App-Image-2025-10-25-at-16-40-18.jpg" alt="Mežlīči Retreat" width="100%" />

  <br />
  <br />

  # Mežlīči – Riverside Retreat Web Application
  
  **An impeccable, high-performance web experience for an exclusive holiday home located gracefully on the banks of the Daugava.**
  
  [![Tech Stack: React](https://img.shields.io/badge/React-18.x-blue?style=flat-square&logo=react)](https://reactjs.org/)
  [![Typescript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Styling: TailwindCSS](https://img.shields.io/badge/TailwindCSS-Custom-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  [![Animation: GSAP](https://img.shields.io/badge/GSAP-3.12-88ce02?style=flat-square&logo=greensock)](https://greensock.com/)
  [![Infrastructure: Cloudflare](https://img.shields.io/badge/Deployed_on-Cloudflare_Pages-F38020?style=flat-square&logo=cloudflare)](https://pages.cloudflare.com/)

</div>

---

## 📖 Executive Summary

The Mežlīči web application is engineered to deliver a serene, luxurious, and completely unbroken user experience mirroring the tranquility of the property it represents. It leverages a strictly optimized modern stack focused on **immaculate animations**, **fluid physics modeling**, and **zero-latency architectural design**.

Every pixel has been purposefully orchestrated without relying on heavily bloated UI component arrays, meaning the application retains perfect Light House scores while offering custom glass-morphism physics, lightning-fast rendering, and intelligent cookie-based routing mechanisms.

## ✨ Technical Highlights

### ⚡ Architectural Perfection
* **Flashbang Elimination**: Standard React themes suffer from the Hydration Flash (FOUC). This application structurally circumvents the virtual DOM, injecting layout instructions straight into the `<head>` lifecycle using a highly-optimized IIFE and dynamic Cookie interrogation. Background paints occur concurrently with standard HTTP responses—zero white flashes.
* **Persistent Cookie Matrix**: Theme selections map heavily against browser cookies + LocalStorage + System Preference fallbacks, assuring robust scaling to potential SSR applications later down the pipeline.
* **Aggressive Hydration Blocking**: The initial overlay obscures system hydration overhead ensuring the frontend user experiences zero computational jitter—only pure, buttery transitions.

### 🎭 Animation & Physics 
* **Lenis Fluid Dynamics**: Touch physics natively deferred to OS hardware by removing JS touch synchronization `(syncTouch: false)`. Desktop mice retain sophisticated smooth tracking profiles that never interfere with core Webkit or Android paradigms.
* **GSAP Parallax Mastery**: Using `scroll-trigger` alongside manual DOM `will-change: transform` tagging, graphics achieve hardware-accelerated parallax loops that never tear across high-refresh-rate (120hz+) monitors. 
* **Glass-morphism UI Variants**: Tailored soft-blur UI techniques on components dynamically adjust shadows/blur levels dynamically reading from `<html class="dark">` to guarantee crisp visibility in any light.

## 🚀 Environment & Setup

The configuration uses the ultra-rapid **Vite** bundler under strictly structured React.

### Prerequisites Framework
* Node >16.x
* NPM or Yarn 

### Local Instance Booting
```bash
# Clone the repository
git clone https://github.com/Kamaldins/Mezlici.lv.git

# Enter the root directory
cd Mezlici.lv

# Mount all underlying dependencies 
npm install

# Initialize local HMR (Hot Module Replacement) daemon
npm run dev 
```
The localized gateway automatically opens on `localhost:3000`.

## 📂 System Topography

```text
Mežlīči App/
├── components/          # Reusable view pieces, header logic, atomic UI nodes
│   ├── Preloader.tsx    # Intercepts loading jumps and provides transition frames
│   ├── Header.tsx       # State-driven responsive navigation frame
│   └── Footer.tsx       # Centralized contact and locale gateway
├── pages/               # Primary Page logic definitions (Home, Gallery, Sauna)
├── public/              # Global root data accessible immediately on fetch requests
│   └── _redirects       # Cloudflare Pages internal router ruleset (critical for React Router via history API)
├── App.tsx              # Application core / Lenis configuration scope / DOM management 
├── constants.ts         # Unified datastore governing contact variables and CDN locations
└── vite.config.ts       # Low-level bundler routing algorithms and path setups
```

## 🏗️ Cloud Infrastructure Notes

The underlying infrastructure uses standard standard Browser routing mechanisms. 
Deployed natively on **Cloudflare Pages**, the network edge forces all paths directly to the master `/index.html` pipeline securely, allowing React to parse `/lv/sauna` cleanly. Modifications to Cloudflare routing logic are preserved inside `/public/_redirects`.

---

<div align="center">
  <p>Engineered to precision by the digital architects at <b><a href="https://kamaltek.com" style="color:#A69279;">KamalTek Solutions</a></b>.</p>
</div>
