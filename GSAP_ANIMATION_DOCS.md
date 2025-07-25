# � GSAP Animation Documentation
### *Apple-Style Portfolio Website Animation Guide*

---

## 🌟 Overview
Website portfolio ini menggunakan **GSAP (GreenSock Animation Platform)** dengan **ScrollTrigger** untuk menciptakan animasi scroll yang smooth dan engaging seperti website Apple.

> 💡 **Philosophy:** Setiap animasi dirancang untuk meningkatkan user experience tanpa mengganggu konten utama.

---

## 🏗️ Architecture Pattern

### ⚡ **Consistent Animation Pattern**
Semua komponen menggunakan pattern yang sama untuk konsistensi:

```jsx
useEffect(() => {
  if (elementRef.current) {
    // 🛡️ 1. Set initial visible state (prevent blank screen)
    gsap.set(elementRef.current, { opacity: 1, x: 0, y: 0 });
    
    // 🎬 2. Animation with ScrollTrigger
    gsap.fromTo(elementRef.current, 
      { opacity: 0, y: 30 },        // 📍 FROM state
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,              // ⏱️ Animation duration
        ease: "power2.out",         // 📈 Easing function
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",          // 🎯 When animation starts
          toggleActions: "play none none none",
          once: true                // 🚀 Play only once for performance
        }
      }
    );
  }
}, []);
```

---

## ⏱️ Timing Breakdown

### 📊 **Loading Sequence & Duration:**

| 🧩 Component | 🎯 Trigger Point | ⏰ Animation Duration | ⏳ Delay | 🎭 Total Time |
|--------------|------------------|----------------------|----------|---------------|
| 🏠 **Hero** | Page Load | 0.8s + 0.6s + 0.5s | 0.2s, 0.3s, 0.6s | ~1.5s |
| 👤 **About** | top 80% | 0.8s each | 0.2s stagger | ~1.2s |
| 💼 **Experience** | top 80% | 0.8s each | 0.2s per card | ~2.0s |
| 🛠️ **Skills** | top 80% | 0.8s + 1.2s bars | 0.1s stagger | ~2.5s |
| 📞 **Contact** | top 80% | 0.8s each | 0.2s, 0.4s | ~1.6s |
| 🦶 **Footer** | top 90% | 0.8s | None | ~0.8s |

---

## � Animation Types & Effects

### 🏠 **1. Hero Section (Landing)**
```jsx
// 🎬 Sequence: Title → Subtitle → Buttons
gsap.fromTo(titleRef.current, 
  { opacity: 0, y: 50 },
  { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
);

gsap.fromTo(subtitleRef.current, 
  { opacity: 0, y: 30 },
  { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: "power2.out" }
);

gsap.fromTo(ctaRef.current, 
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: 0.5, delay: 0.6, ease: "power2.out" }
);
```

**🎭 Effect:** Cascade fade-in dari atas ke bawah  
**⏱️ Timing:** ~1.5 detik total  
**🎯 Trigger:** Page load (immediate)

---

### 👤 **2. About Section**
```jsx
gsap.fromTo(contentRef.current, 
  { opacity: 0, x: -30 },    // ⬅️ Slide from left
  { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
);

gsap.fromTo(imageRef.current, 
  { opacity: 0, x: 30 },     // ➡️ Slide from right
  { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
);
```

**🎭 Effect:** Split slide-in (kiri-kanan)  
**⏱️ Timing:** ~1.2 detik total  
**🎯 Trigger:** Saat section 80% visible

---

### 💼 **3. Experience Section**
```jsx
// 📰 Title animation
gsap.fromTo(titleRef.current, 
  { opacity: 0, y: 30 },
  { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
);

// 📋 Cards alternating slide
cardsRef.current.forEach((card, index) => {
  gsap.fromTo(card, 
    { opacity: 0, x: index % 2 === 0 ? -30 : 30 },  // 🔄 Alternating direction
    { 
      opacity: 1, 
      x: 0, 
      duration: 0.8, 
      delay: index * 0.2,    // 🎪 Stagger effect
      ease: "power2.out"
    }
  );
});
```

**🎭 Effect:** Timeline cards slide dari kiri-kanan bergantian  
**⏱️ Timing:** Title (0.8s) + Cards (0.8s × 3 dengan delay 0.2s) = ~2.0s  
**🎯 Trigger:** Each card triggers at 80% visible

---

### 🛠️ **4. Skills Section**
```jsx
// 📂 Categories fade in
categoriesRef.current.forEach((category, index) => {
  gsap.fromTo(category, 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      delay: index * 0.1,    // ⚡ Quick stagger
      ease: "power2.out"
    }
  );
});

// 📊 Progress bars fill animation
skillBarsRef.current.forEach((bar, index) => {
  const level = bar.dataset.level;
  gsap.to(bar, {
    width: `${level}%`,      // 📈 Animate width from 0% to target %
    duration: 1.2,           // ⏳ Longer for satisfying progress effect
    delay: index * 0.05,     // 🎭 Subtle stagger
    ease: "power2.out"
  });
});
```

**🎭 Effect:** Categories fade in, progress bars fill up  
**⏱️ Timing:** Categories (0.8s) + Progress bars (1.2s) = ~2.5s total  
**🎯 Trigger:** 80% visible per category

---

### 📞 **5. Contact Section**
```jsx
// 📝 Form slides from left
gsap.fromTo(formRef.current, 
  { opacity: 0, x: -30 },
  { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
);

// 📋 Info slides from right  
gsap.fromTo(infoRef.current, 
  { opacity: 0, x: 30 },
  { opacity: 1, x: 0, duration: 0.8, delay: 0.4, ease: "power2.out" }
);
```

**🎭 Effect:** Split entrance (form dari kiri, info dari kanan)  
**⏱️ Timing:** ~1.6s total (dengan delay bertahap)  
**🎯 Trigger:** 80% section visible

---

## 🎛️ Trigger System

### 🎯 **ScrollTrigger Configuration:**

```jsx
scrollTrigger: {
  trigger: element,                    // 🎯 Element yang di-observe
  start: "top 80%",                   // 📍 Mulai saat element 80% masuk viewport
  toggleActions: "play none none none", // 🎬 Hanya play sekali
  once: true                          // 🚀 Performance: tidak repeat
}
```

### 📍 **Trigger Points Explained:**

| 🎯 Trigger | 📖 Meaning | 💡 Use Case |
|------------|-------------|-------------|
| `top 80%` | Element 80% masuk viewport | 📄 Standard content |
| `top 90%` | Element 90% masuk viewport | 🦶 Footer/final elements |
| `top 70%` | Element 70% masuk viewport | 📚 Large content blocks |

---

## ⚡ Performance Optimizations

### 🛡️ **1. Initial State Management**
```jsx
// 🚫 Prevent blank screen flash
gsap.set(elements, { opacity: 1, x: 0, y: 0 });
```

### 🎯 **2. One-Time Animations**
```jsx
scrollTrigger: {
  once: true    // 🔄 Tidak re-trigger saat scroll kembali
}
```

### 🚀 **3. GPU Acceleration**
```jsx
// 🎮 Menggunakan transform properties untuk GPU acceleration
gsap.fromTo(element, 
  { opacity: 0, y: 30 },    // 🎮 transform: translateY() -> GPU
  { opacity: 1, y: 0 }      // 🐌 vs margin-top -> CPU
);
```

---

## 🎨 Easing Functions

### 🌟 **Primary Easing: `power2.out`**
- **✨ Karakteristik:** Smooth deceleration
- **🎯 Use Case:** General content animations
- **💫 Feel:** Professional, modern

### 🎪 **Alternative Easings:**
```jsx
"power1.out"     // 🌸 Subtle, gentle
"power2.out"     // ⭐ Standard (most used)
"power3.out"     // 🚀 More dramatic
"back.out(1.7)"  // 🎈 Bounce effect
"elastic.out"    // 🌊 Spring effect
```

---

## 📱 Responsive Considerations

### 📲 **Mobile Optimization:**
```jsx
// 📱 Reduced movement untuk mobile
const isMobile = window.innerWidth < 768;
const moveDistance = isMobile ? 15 : 30;

gsap.fromTo(element, 
  { opacity: 0, y: moveDistance },
  { opacity: 1, y: 0 }
);
```

---

## 🔧 Debugging & Development

### 🛠️ **GSAP DevTools (Development):**
```jsx
// 🔍 Add to index.html for debugging
<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js"></script>
```

### 📝 **Console Logging:**
```jsx
scrollTrigger: {
  trigger: element,
  start: "top 80%",
  onEnter: () => console.log("🎬 Animation triggered!"),
  once: true
}
```

---

## 📊 User Experience Timeline

```
🎬 Page Load
│
├─ 0.0s: 🏠 Hero title starts fading in
├─ 0.3s: 📝 Hero subtitle starts fading in  
├─ 0.6s: 🔘 Hero buttons start fading in
├─ 1.5s: ✅ Hero animations complete
│
📜 User Scrolls Down
│
├─ 👤 About section hits 80% → 0.8s animation
├─ 💼 Experience section hits 80% → 2.0s staggered animation
├─ 🛠️ Skills section hits 80% → 2.5s with progress bars
├─ 📞 Contact section hits 80% → 1.6s split animation
└─ 🦶 Footer hits 90% → 0.8s final animation
```

---

## 🎯 Best Practices Applied

| ✅ | 📋 Practice | 📖 Description |
|----|-------------|----------------|
| ✅ | **Predictable Triggers** | 80% viewport entry |
| ✅ | **Consistent Timing** | 0.8s base duration |
| ✅ | **Performance First** | `once: true`, GPU transforms |
| ✅ | **Fallback Safety** | Initial visible state |
| ✅ | **Smooth Easing** | `power2.out` throughout |
| ✅ | **Stagger Effects** | Delays untuk multiple elements |
| ✅ | **Mobile Friendly** | Reduced motion on small screens |

---

## 🚀 Implementation Guide

### 🏗️ **Adding New Animated Component:**

#### **1. 📝 Setup refs:**
```jsx
const sectionRef = useRef<HTMLDivElement>(null);
const elementRef = useRef<HTMLElement>(null);
```

#### **2. 🎬 Implement pattern:**
```jsx
useEffect(() => {
  if (sectionRef.current && elementRef.current) {
    // 🛡️ 1. Set fallback visible state
    gsap.set(elementRef.current, { opacity: 1, y: 0 });
    
    // 🎭 2. Animate with fromTo
    gsap.fromTo(elementRef.current, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        }
      }
    );
  }
}, []);
```

#### **3. 🎨 Apply to JSX:**
```jsx
<section ref={sectionRef}>
  <div ref={elementRef}>
    Content
  </div>
</section>
```

---

## 🎊 Quick Reference

### 🎯 **Common Animation Patterns:**

| 🎭 Effect | 📝 Code Pattern | ⏱️ Duration |
|-----------|----------------|-------------|
| **Fade In Up** | `{ opacity: 0, y: 30 }` → `{ opacity: 1, y: 0 }` | 0.8s |
| **Slide Left** | `{ opacity: 0, x: -30 }` → `{ opacity: 1, x: 0 }` | 0.8s |
| **Slide Right** | `{ opacity: 0, x: 30 }` → `{ opacity: 1, x: 0 }` | 0.8s |
| **Progress Bar** | `{ width: "0%" }` → `{ width: "${level}%" }` | 1.2s |

### 🎪 **Stagger Delays:**
- **Quick:** `index * 0.05` (0.05s between elements)
- **Normal:** `index * 0.1` (0.1s between elements)
- **Slow:** `index * 0.2` (0.2s between elements)

---

> 🎨 **Conclusion:** Dokumentasi ini menjelaskan complete GSAP animation system yang digunakan dalam portfolio website. Setiap animasi dirancang untuk memberikan user experience yang smooth dan engaging seperti website Apple. 🚀

---

*📚 Created with ❤️ for smooth web animations*
