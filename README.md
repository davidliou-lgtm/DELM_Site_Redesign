# True Jesus Church (TJC) International Web Redesign
## Simplified Site Template Exploration & Review Suite

> Baseline Domain: `tjc.org`  
> Target Deployment: International root (`tjc.org/`) and global language portals (`tjc.org/zh`, `tjc.org/es`, `tjc.org/fr`, `tjc.org/de`, `tjc.org/ja`, `tjc.org/ko`, etc.)

This repository contains **3 simplified, modern, accessible, and translation-friendly front-end site template archetypes** designed for the international web presence of the True Jesus Church, paired with an interactive multi-device reviewer gallery.

---

## 🌟 Interactive Template Archetypes

### 1. [Option A — Minimalist Portal](templates/option-a/index.html)
- **Concept**: Serene, contemplative sanctuary aesthetic with generous negative space.
- **Palette**: Warm Alabaster (`#FAF9F5`), Deep Slate Navy (`#0F1E36`), Brushed Gold (`#C5A059`).
- **Typography**: Classical serif (`Playfair Display`) paired with clean sans-serif (`Plus Jakarta Sans`).
- **Core Focus**: Three primary tranquil entry points (*Live Sabbath Worship*, *Find a Congregation*, *10 Basic Beliefs*), scripture contemplation banner, and an ultra-lightweight footprint (~28 KB).

### 2. [Option B — Editorial / Media-First](templates/option-b/index.html)
- **Concept**: Publication-grade digital journal and media console.
- **Palette**: Editorial Slate (`#111827`), Warm Parchment (`#F9F8F5`), Terracotta / Crimson accent (`#C23A22`), Gold (`#C59B27`).
- **Typography**: Journalistic serif (`Newsreader` & `Fraunces`) paired with modern sans (`Inter`).
- **Core Focus**: Dual-hero centerpiece with an active Sabbath livestream console (with simultaneous audio interpretation selector) alongside a featured *Manna Magazine* cover story, categorized sermon library, and first-person testimonies.

### 3. [Option C — Utility & Community Hub](templates/option-c/index.html)
- **Concept**: Welcoming, highly practical portal prioritizing in-person fellowship and seeker onboarding.
- **Palette**: Coastal Navy (`#0A2540`), Vibrant Azure (`#0066FF`), Emerald (`#059669`).
- **Typography**: High-legibility humanist sans (`Plus Jakarta Sans` & `JetBrains Mono`).
- **Core Focus**: Interactive Church Locator search bar in the hero, Friday evening & Saturday Sabbath worship schedules, and a 4-step first-time visitor guide ("What to Expect").

---

## 📱 Reviewer Suite (`index.html`)

The root [`index.html`](index.html) provides an interactive presentation canvas for stakeholders:
- **Instant Archetype Toggling**: Switch between Option A, Option B, and Option C in real-time.
- **Live Device Viewport Simulation**: Toggle between Desktop (1440px), Tablet (768px), and Mobile (390px).
- **Executive Comparison Matrix**: Side-by-side analysis of information density, translation complexity, maintenance overhead, and payload performance.

---

## 📸 Automated High-Resolution Screenshots

All templates have been verified with headless browser automation:
- **Option A**: [Desktop (1440px)](artifacts/screenshots/option-a-desktop.png) · [Mobile (390px)](artifacts/screenshots/option-a-mobile.png)
- **Option B**: [Desktop (1440px)](artifacts/screenshots/option-b-desktop.png) · [Mobile (390px)](artifacts/screenshots/option-b-mobile.png)
- **Option C**: [Desktop (1440px)](artifacts/screenshots/option-c-desktop.png) · [Mobile (390px)](artifacts/screenshots/option-c-mobile.png)
- **Reviewer Suite**: [Desktop Gallery](artifacts/screenshots/gallery-desktop.png)

---

## 🌐 Global Routing & Footer Specification

All templates implement the standardized URL routing convention in a prominent footer directory:
- `tjc.org/` — English (Global Root)
- `tjc.org/zh` — 中文 (Chinese)
- `tjc.org/es` — Español
- `tjc.org/fr` — Français
- `tjc.org/de` — Deutsch
- `tjc.org/ja` — 日本語
- `tjc.org/ko` — 한국어
- `tjc.org/id` — Bahasa Indonesia
- `tjc.org/vi` — Tiếng Việt
- `tjc.org/pt` — Português
- `tjc.org/ru` — Русский
- `tjc.org/th` — ภาษาไทย

---

## 🚀 Local Development

To run the local preview server:
```bash
python3 -m http.server 8080
```
Then navigate to `http://localhost:8080/` in your browser.
