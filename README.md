# 🎭 Apple-Style Portfolio Website
### *Modern React Portfolio with GSAP Animations*

[![Next.js](https://img.shields.io/badge/Next.js-15.1.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

> 🚀 **A stunning portfolio website inspired by Apple's design philosophy, featuring smooth GSAP animations and modern web technologies.**

---

## ✨ **Features**

### 🎨 **Design & User Experience**
- **Apple-inspired design** with clean, minimalist aesthetics
- **Fully responsive** - looks perfect on all devices
- **Dark/Light mode toggle** with system preference detection
- **Smooth scroll animations** that feel premium and polished
- **Interactive hover effects** and micro-interactions

### 🎬 **Animation System**
- **GSAP-powered animations** with ScrollTrigger integration
- **Predictive loading** - content ready before user reaches it
- **Optimized performance** with GPU acceleration
- **Stagger effects** for dynamic content reveals
- **Custom animation configs** for consistent timing

### 🛠️ **Technical Excellence**
- **Next.js 15.1.4** with App Router architecture
- **TypeScript** for type safety and better development experience
- **Tailwind CSS** for utility-first styling
- **Component-based architecture** for maintainable code
- **Performance optimizations** throughout

---

## 📱 **Sections**

| 🏠 **Hero** | 👤 **About** | 💼 **Experience** | 🛠️ **Skills** | 📞 **Contact** |
|-------------|--------------|-------------------|---------------|----------------|
| Landing with animated title & CTA | Personal info with stats | Timeline with work history | Animated skill bars | Contact form & info |

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 18+ 
- npm/yarn/pnpm

### **Installation**

```bash
# Clone the repository
git clone https://github.com/reynaldi-140800/reactJS.git
cd reactJS

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### **Development**

```bash
# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### **Build for Production**

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📋 **Available Scripts**

| Script | Command | Description |
|--------|---------|-------------|
| 🚀 **Development** | `npm run dev` | Start development server with hot reload |
| 🏗️ **Build** | `npm run build` | Create optimized production build |
| ▶️ **Start** | `npm start` | Start production server |
| 🔍 **Lint** | `npm run lint` | Run ESLint for code quality checks |

### **🛠️ Additional Commands**
```bash
# Type checking
npx tsc --noEmit

# Clean install
rm -rf node_modules package-lock.json && npm install

# Update dependencies
npm update

# Check outdated packages
npm outdated
```

---

## 🏗️ **Project Structure**

```
📁 src/
├── 📁 app/                 # Next.js App Router
│   ├── 📄 globals.css      # Global styles & Tailwind
│   ├── 📄 layout.tsx       # Root layout component
│   └── 📄 page.tsx         # Main page orchestrator
├── 📁 components/          # React components
│   ├── 📄 Header.tsx       # Navigation & dark mode toggle
│   ├── 📄 Hero.tsx         # Landing section
│   ├── 📄 About.tsx        # About section with stats
│   ├── 📄 Experience.tsx   # Work timeline
│   ├── 📄 Skills.tsx       # Skills with progress bars
│   ├── 📄 Contact.tsx      # Contact form & info
│   └── 📄 Footer.tsx       # Footer with links
├── 📁 hooks/               # Custom React hooks
│   └── 📄 useScrollAnimation.tsx  # Animation utilities
└── 📁 utils/               # Utility functions
    └── 📄 animationConfig.ts      # GSAP configurations
```

---

## 🎨 **Tech Stack**

### **📦 Dependencies**
| Package | Version | Purpose |
|---------|---------|---------|
| ⚛️ **React** | 19.0.0 | UI library for component-based architecture |
| ⚡ **Next.js** | 15.1.4 | Full-stack React framework with App Router |
| 🎭 **GSAP** | 3.13.0 | High-performance animations and ScrollTrigger |

### **�️ Development Dependencies**
| Package | Version | Purpose |
|---------|---------|---------|
| �📘 **TypeScript** | 5.0+ | Type safety and enhanced developer experience |
| 🎨 **Tailwind CSS** | 3.4.1 | Utility-first CSS framework |
| 📦 **@types/node** | 20+ | Node.js type definitions |
| ⚛️ **@types/react** | 19+ | React type definitions |
| 🌐 **@types/react-dom** | 19+ | React DOM type definitions |
| 🔧 **PostCSS** | 8+ | CSS processing and optimization |

### **🎯 Key Technologies**
| Technology | Implementation | Benefits |
|------------|----------------|----------|
| **🏗️ App Router** | Next.js 15.1.4 | File-based routing, server components |
| **🎬 ScrollTrigger** | GSAP 3.13.0 | Scroll-based animation triggers |
| **🌙 Dark Mode** | Tailwind + localStorage | System preference detection |
| **📱 Responsive Design** | Tailwind CSS | Mobile-first approach |
| **⚡ Performance** | Next.js optimizations | Code splitting, image optimization |

---

## 🎬 **Animation System**

### **Philosophy**
> Every animation serves a purpose - to guide user attention, provide feedback, or enhance the storytelling experience.

### **Key Features**
- ✅ **Predictable triggers** at 80% viewport entry
- ✅ **Consistent timing** with 0.8s base duration
- ✅ **Performance-first** with `once: true` and GPU acceleration
- ✅ **Fallback safety** - content visible even if animations fail
- ✅ **Mobile optimized** with reduced motion preferences

### **Quick Reference**
```jsx
// Basic animation pattern
gsap.fromTo(element, 
  { opacity: 0, y: 30 },        // From state
  { 
    opacity: 1, 
    y: 0, 
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      once: true
    }
  }
);
```

📚 **[View Complete Animation Documentation](./GSAP_ANIMATION_DOCS.md)**

---

## 🎯 **Customization**

### **Colors & Theming**
Edit `src/app/globals.css` for global styles:
```css
/* Custom color variables */
:root {
  --primary-color: #3b82f6;    /* Blue */
  --secondary-color: #8b5cf6;  /* Purple */
  --text-light: #111827;       /* Dark gray */
  --text-dark: #f9fafb;        /* Light gray */
}
```

### **Content Updates**
- **Personal Info:** Edit components in `src/components/`
- **Work Experience:** Update data in `src/components/Experience.tsx`
- **Skills:** Modify skills array in `src/components/Skills.tsx`
- **Contact Info:** Update contact details in `src/components/Contact.tsx`

### **Animation Tweaks**
Edit animation configs in `src/utils/animationConfig.ts`:
```typescript
export const ANIMATION_CONFIG = {
  durations: {
    fast: 0.4,
    normal: 0.6,    // Adjust base timing
    slow: 0.8,
  },
  triggers: {
    early: "top 110%",
    normal: "top 100%",   // Adjust trigger points
    late: "top 90%",
  }
};
```

---

## 📊 **Performance**

### **⚡ Optimizations Applied**
- 🚀 **Code splitting** with Next.js automatic optimization
- 🎨 **CSS optimization** with Tailwind's purge system
- 🖼️ **Image optimization** with Next.js Image component
- 🎭 **Animation performance** with GPU acceleration and `will-change`
- 📱 **Mobile optimization** with reduced motion support
- 🗂️ **Tree shaking** for minimal bundle size
- ⚡ **Static generation** for faster page loads

### **📈 Expected Lighthouse Scores**
- 🟢 **Performance:** 95+ (Optimized animations and code splitting)
- 🟢 **Accessibility:** 100 (Semantic HTML and ARIA labels)
- 🟢 **Best Practices:** 100 (HTTPS, modern APIs, no console errors)
- 🟢 **SEO:** 100 (Meta tags, structured data, sitemap)

### **🎯 Bundle Analysis**
```bash
# Analyze bundle size
npm run build

# Key metrics:
# - First Load JS: ~85kb (excellent)
# - Page Load Time: <2s (excellent) 
# - GSAP Library: ~25kb gzipped
# - Total Bundle: ~110kb (excellent)
```

---

## 🚀 **Deployment**

### **🌟 Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# For production deployment
vercel --prod
```
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/reynaldi-140800/reactJS)

### **🌊 Netlify**
```bash
# Build command
npm run build

# Publish directory  
.next/
```
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/reynaldi-140800/reactJS)

### **🔧 Custom Server**
```bash
# Build for production
npm run build

# Start production server
npm start

# Server will run on http://localhost:3000
```

### **🐳 Docker Deployment**
```dockerfile
# Dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📚 **Documentation**

- 📖 **[Animation Documentation](./GSAP_ANIMATION_DOCS.md)** - Complete GSAP animation system guide
- 🎬 **[GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)** - Official ScrollTrigger documentation
- ⚛️ **[Next.js App Router](https://nextjs.org/docs/app)** - Next.js 15 App Router documentation
- 🎨 **[Tailwind CSS](https://tailwindcss.com/docs)** - Tailwind CSS documentation
- � **[TypeScript](https://www.typescriptlang.org/docs/)** - TypeScript documentation

### **📝 Additional Resources**
- **Project Documentation:** Complete guides for components and styling
- **API Reference:** Component props and animation configurations  
- **Best Practices:** Performance optimization and accessibility guidelines
- **Troubleshooting:** Common issues and solutions

---

## 🤝 **Contributing**

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 **Acknowledgments**

- 🍎 **Apple** - Design inspiration and philosophy
- 🎭 **GreenSock (GSAP)** - Amazing animation library
- ⚛️ **Next.js Team** - Excellent React framework
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 💙 **Open Source Community** - For all the amazing tools

---

## 📞 **Contact**

**Reynaldi** - [@reynaldi-140800](https://github.com/reynaldi-140800)

🔗 **Project Link:** [https://github.com/reynaldi-140800/reactJS](https://github.com/reynaldi-140800/reactJS)

---

<div align="center">

### 🌟 **Star this repository if you found it helpful!**

*Built with ❤️ and lots of ☕*

</div>
