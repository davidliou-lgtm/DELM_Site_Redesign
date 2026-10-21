# True Jesus Church (TJC) International Web Redesign
## Simplified Site Template Exploration & Review Suite (Identity Guidelines Aligned)

> **Official Standards Alignment**: [TJC Identity Guidelines](https://identity.tjc.org/)  
> **Baseline Domain**: `tjc.org`  
> **Target Deployment**: International root (`tjc.org/`) and global language portals (`tjc.org/zh`, `tjc.org/es`, `tjc.org/fr`, `tjc.org/de`, `tjc.org/ja`, `tjc.org/ko`, `tjc.org/id`, `tjc.org/vi`, `tjc.org/pt`, `tjc.org/ru`, `tjc.org/th`)

---

## 🎨 TJC Brand Identity Alignment Specification

All templates in this repository have been redesigned from the ground up to strictly comply with the official **True Jesus Church Identity Guidelines** ([identity.tjc.org](https://identity.tjc.org/)):

### 1. Theme Color System (Tekelet / Heavenly Blue)
*"The color blue (in Hebrew, tekelet) is heavenly. It represents the true church is of heaven and is preaching the complete gospel... Different versions of blue or teal should not be used." (Identity Guidelines p. 25)*

| Color Name | Color Standard | Hex Code | RGB | CMYK | Usage Role |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Navy** | Pantone 288 C | `#23356F` | `35, 53, 111` | `100, 91, 27, 15` | Major headers, navigation bars, primary branding anchors, footers |
| **Secondary Cyan** | Pantone 314 C | `#007DA4` | `0, 125, 164` | `87, 41, 22, 1` | Interactive elements, live stream badges, buttons, active focus |
| **Dove Tint 50%** | 50% Black | `#7F7F7F` | `127, 127, 127` | `0, 0, 0, 50` | Secondary icon facets and subtle borders |
| **Dove Tint 25%** | 25% Black | `#D1D5DB` | `209, 213, 219` | `0, 0, 0, 25` | Soft cards, divider lines, and card containers |
| **Location Tone** | 65K Tone | `#595959` | `89, 89, 89` | `0, 0, 0, 65` | Sub-titles, regional chapel location indicators |
| **Canvas Light** | Off-White / Surface | `#FFFFFF` / `#F8FAFC` | `255, 255, 255` | `0, 0, 0, 0` | Clean, high-legibility backgrounds |

### 2. Official Typographic Hierarchy
All typography follows the exact three typefaces designated in the TJC Identity Guidelines:

- **Primary Sans Serif — Source Sans 3 / Source Sans Pro**:
  - *Usage*: General communications, all web and online digital media, buttons, navigation, UI controls, search filters, and captions.
- **Primary Serif — Crimson Text**:
  - *Usage*: Formal communications, church letters and announcements, longform reading, doctrinal treatises, and scripture contemplation.
- **Secondary Serif — Playfair Display**:
  - *Usage*: Titling and headlines, heroic banners, and publication mastheads.

### 3. Official Logo & Asset Lockups
- Official vector-sharp 300dpi logo assets downloaded directly from `identity.tjc.org` are placed in [`assets/brand/`](assets/brand/):
  - `tjc_logotype_english_color_300dpi.png` (Full-color logo on white/light backgrounds)
  - `tjc_logotype_english_white_300dpi.png` (White reversed logo on Pantone 288 C backgrounds)
  - `TJC_Color Dove_Social Icon_400x400.png` (Official color Dove emblem)
  - `tjc_logotype_chinese_traditional_color_300dpi.png` & `white_300dpi.png` (Official Chinese Traditional lockups)
- Preserves the mandated **50% clear space** surrounding the Dove emblem and avoids generic center placement in accordance with brand rules.

---

## 🌟 Interactive Template Archetypes

### 1. [Option A — Minimalist Sanctuary](templates/option-a/index.html)
- **Concept**: Serene, contemplative sanctuary aesthetic with generous negative space and heavenly clarity.
- **Palette**: Pantone 288 C (`#23356F`), Pantone 314 C (`#007DA4`), Pure White (`#FFFFFF`), Soft Sky Mist (`#F8FAFC`).
- **Typography**: Titling in `Playfair Display`, scripture reflections in `Crimson Text`, functional UI in `Source Sans 3`.
- **Core Focus**: Three primary tranquil entry points (*Choose Your Language / 28 Global Sites*, *Find a Congregation*, *10 Basic Beliefs*), scripture contemplation banner, and an ultra-lightweight footprint (~24 KB).

### 2. [Option B — Editorial & Theological Journal](templates/option-b/index.html)
- **Concept**: Publication-grade digital journal and media console inspired by *Manna Magazine* and *eRhema*.
- **Palette**: Pantone 288 C (`#23356F`) masthead, Pantone 314 C (`#007DA4`) live stream indicators, clean white paper canvas.
- **Typography**: Longform doctrinal articles in `Crimson Text`, headlines in `Playfair Display`, metadata in `Source Sans 3`.
- **Core Focus**: Dual-hero centerpiece featuring an active Sabbath livestream console with a 5-language simultaneous audio interpretation selector alongside *Manna Magazine* Issue 114 cover story, categorized sermon vault, and faith testimonies.

### 3. [Option C — Utility & Community Hub](templates/option-c/index.html)
- **Concept**: Welcoming, highly practical portal prioritizing in-person fellowship and seeker onboarding.
- **Palette**: Pantone 288 C (`#23356F`), Pantone 314 C (`#007DA4`), Pure White (`#FFFFFF`).
- **Typography**: High-legibility `Source Sans 3` throughout, paired with `Playfair Display` section headers and `Crimson Text` scriptural truths.
- **Core Focus**: Interactive Church Locator search bar in the hero with regional quick-select chips, Friday evening & Saturday Sabbath worship schedules, and a 4-step first-time visitor guide ("What to Expect When You Visit").

---

## 📱 Reviewer Suite (`index.html`)

The root [`index.html`](index.html) provides an interactive presentation canvas for stakeholders:
- **Instant Archetype Toggling**: Switch between Option A, Option B, and Option C in real-time.
- **Brand Standards Inspector**: Built-in modal presenting the official TJC Identity Guidelines (Pantone colors, typography, brand house methodology, and direct links to `identity.tjc.org`).
- **Live Device Viewport Simulation**: Toggle between Desktop (1440px), Tablet (768px), and Mobile (390px).
- **Executive Comparison Matrix**: Side-by-side analysis of identity compliance, information density, translation complexity, maintenance overhead, and payload performance.

---

## 📸 Automated High-Resolution Screenshots

All templates have been verified with headless browser automation:
- **Option A**: [Desktop (1440px)](artifacts/screenshots/option-a-desktop.png) · [Mobile (390px)](artifacts/screenshots/option-a-mobile.png)
- **Option B**: [Desktop (1440px)](artifacts/screenshots/option-b-desktop.png) · [Mobile (390px)](artifacts/screenshots/option-b-mobile.png)
- **Option C**: [Desktop (1440px)](artifacts/screenshots/option-c-desktop.png) · [Mobile (390px)](artifacts/screenshots/option-c-mobile.png)
- **Reviewer Suite**: [Desktop Gallery](artifacts/screenshots/gallery-desktop.png)

---

## 🌐 Global Routing & Footer Specification

All templates implement the standardized language directory aligned with [`tjc.org/languages-04`](https://tjc.org/loisdev/languages-04/#Home) featuring 28 global language portals:
- Arabic (`العربية`)
- Bengali (`বাংলা`)
- Burmese (`မြန်မာဘာသာ`)
- Chinese, Simplified (`简体中文`)
- Chinese, Traditional (`繁體中文`)
- Dutch (`Nederlands`)
- English (`tjc.org/`)
- Farsi (`فارسی`)
- French (`Français`)
- German (`Deutsch`)
- Hindi (`हिन्दी`)
- Indonesian (`Bahasa Indonesia`)
- Italian (`Italiano`)
- Japanese (`日本語`)
- Khmer (`ភាសាខ្មែរ`)
- Korean (`한국어`)
- Marathi (`मराठी`)
- Polish (`Polski`)
- Portuguese (`Português`)
- Russian (`Русский`)
- Spanish (`Español`)
- Swahili (`Kiswahili`)
- Tamil (`தமிழ்`)
- Telugu (`తెలుగు`)
- Thai (`ภาษาไทย`)
- Turkish (`Türkçe`)
- Urdu (`اُردُو`)
- Vietnamese (`Tiếng Việt`)

---

## 🚀 Local Development

To run the local preview server:
```bash
python3 -m http.server 8080
```
Then navigate to `http://localhost:8080/` in your browser.

To regenerate automated high-resolution screenshots:
```bash
node capture_screenshots.js
```
