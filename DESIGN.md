# My Portfolio Design System

## 1. Atmosphere & Identity

This portfolio opens like an editorial poster: mint-blue field, oversized serif type, and a calm amount of copy. The second viewport switches into a 작업물 showcase with large device mockups, compact project tabs, and a right-side detail panel. The final viewport keeps the same mint field and presents a translucent contact panel with a clear contact card.

## 2. Color

### Palette

| Role | Token | Value | Usage |
|------|-------|-------|-------|
| Brand green | --color-brand | #a6dce0 | First viewport background |
| Ink | --color-ink | #111111 | Main text and logo |
| Ink muted | --color-muted | #243126 | Helper text |
| Paper | --color-paper | #f7fff8 | Small contrast text |
| Focus | --color-focus | #ffffff | Keyboard focus ring |
| Glass panel | --color-panel | rgba(247, 255, 248, 0.48) | Works detail panel |
| Hairline | --color-line | rgba(17, 17, 17, 0.22) | Borders and chips |
| Monitor deep | --color-monitor-deep | #050505 | Monitor bezel depth |
| Monitor ink | --color-monitor-ink | #121516 | Monitor stand gradient |
| Monitor mid | --color-monitor-mid | #343c3d | Monitor stand highlight |
| Monitor light | --color-monitor-light | #394445 | Monitor bezel highlight |
| Screen | --color-screen | #0d0e0e | Screenshot screen fallback |
| Monitor rim | --color-monitor-rim | rgba(247, 255, 248, 0.38) | Outer bezel edge |
| Screen rim | --color-monitor-screen-rim | rgba(247, 255, 248, 0.34) | Inner screen edge |
| Monitor glow | --color-monitor-glow | rgba(166, 220, 224, 0.75) | Status-light glow |
| Page background | --page-background | Mint gradient stack | Shared background for all three viewports |
| Device shadow | --shadow-device | 0 26px 80px rgba(17, 17, 17, 0.28) | Mockup depth |

### Rules

- All three pages use the same mint gradient field so the full-page transition stays visually continuous.
- Black text carries the main hierarchy.
- White is used sparingly for focus and small contrast details.
- Works keeps the same mint field so page 2 feels connected to the hero.

## 3. Typography

### Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| Display | clamp(64px, 13vw, 190px) | 900 | 0.85 | 0 | PORTFOLIO title |
| Logo | 28px | 900 | 1 | 0 | Top-left mark |
| Body | clamp(16px, 1.4vw, 22px) | 500 | 1.55 | 0 | Intro and notes |
| Caption | 13px | 600 | 1.5 | 0 | Top note |
| Contact title | clamp(38px, 4vw, 56px) | 750 | normal | -0.04em | 연락처 heading |

### Font Stack

- Display: Georgia, "Times New Roman", serif
- Body: "Noto Sans KR", Arial, sans-serif

### Rules

- Display text can be huge, but must not require horizontal scrolling.
- Korean body text must avoid cramped line-height.

## 4. Spacing & Layout

### Base Unit

All spacing derives from 4px.

| Token | Value | Usage |
|-------|-------|-------|
| --space-2 | 8px | Small gaps |
| --space-4 | 16px | Inline rhythm |
| --space-6 | 24px | Header padding |
| --space-8 | 32px | Desktop page padding |
| --space-12 | 48px | Major gaps |
| --page-indicator-clearance | 80px | Right-side clearance for the page dots |

### Grid

- First page is a single full-viewport poster.
- Second page is a two-column 작업물 grid: compact visual mockup left, enlarged project detail panel right, with reserved space for the right-side page dots.
- Third page reuses the exact same mint gradient and centers a glass contact panel with a white contact card while retaining clearance for the right-side page dots.
- Header is fixed to the top edge.
- Main display copy sits near the bottom left.

## 5. Components

### Poster Header

- Structure: logo/mark on the left, note on the right.
- States: links and focusable controls use a white outline.
- Accessibility: note text remains readable over green.
- Motion: none.

### Hero Title

- Structure: two stacked display lines and an editable intro block.
- States: static.
- Accessibility: actual text is live DOM, not an image.
- Motion: subtle entrance animation only.

### Works Section

- Structure: an upper-right WORKS label, a large desktop mockup with a thicker lower bezel that contains its project tabs, and a compact detail panel.
- States: selected tab updates the mockup title, metadata, stack tags, named live-demo links, and a GitHub link placed last. Projects with multiple demos expose each destination as a separate external link.
- Accessibility: tab controls are real buttons with `aria-pressed`.
- Motion: only the project detail fades/rises on tab change.

### Contact Section

- Structure: the same shared mint background as the first two pages, contact title, translucent outer panel, and a white name/contact card.
- States: email opens the default mail client; GitHub opens in a new tab.
- Accessibility: all contact details are live DOM text and links use visible text labels.
- Motion: static surface; it relies on the page transition only.

### Full-Page Navigation

- Structure: three full-viewport layers for PORTFOLIO, 작업물, and 연락처; only one accepts pointer input at a time.
- States: mouse wheel, Arrow Up/Down, Page Up/Down, Space, and vertical swipe advance exactly one page.
- Motion: incoming page rises from one viewport below while the outgoing page moves one viewport upward; opacity and transform animate over 720ms with `cubic-bezier(0.16, 1, 0.3, 1)`.
- Accessibility: `prefers-reduced-motion` reduces the transition duration; keyboard navigation prevents browser scrolling only for page-navigation keys.
- Responsive behavior: desktop and tablet retain full-page transitions; on screens 760px and below, the active page scrolls internally so content is never cropped, while the page dots remain available for navigation.

### Page Indicator

- Structure: three small vertical dot buttons fixed to the right viewport center.
- States: active page is ink-filled; inactive page is outlined and muted; each dot is keyboard-focusable and selects its matching page.

### Device Mockup

- Structure: one refined desktop monitor frame that contains a real project capture selected by the active tab.
- Purpose: lets each project show its actual product surface while the consistent monitor frame keeps the WORKS page visually cohesive.
- Rules: project captures fill the screen with `object-fit: cover` and top alignment so any overflow is cropped only from the bottom. No phone mockup or decorative click hint competes with it.

## 6. Motion & Interaction

| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Emphasis | 700ms | cubic-bezier(0.16, 1, 0.3, 1) | First load title entrance |
| Detail change | 320ms | cubic-bezier(0.16, 1, 0.3, 1) | Works tab content |

Rules:

- Animate only transform and opacity.
- Respect prefers-reduced-motion.

## 7. Depth & Surface

Strategy: poster-flat first page, device depth second page, and a single glass surface on the final contact page.

The first page intentionally has no cards, shadows, or panels. The second page uses one glass panel and device shadows to make projects feel clickable. The final page repeats the exact shared mint gradient and uses its contact panel as the only focal surface.

## 8. ABOUT Page

- Order: PORTFOLIO, ABOUT, WORKS, Contact.
- Layout: a large editorial ABOUT heading on the left and a glass panel on the right.
- Content: one editable introduction, three interest labels, and compact technology tags.
- Profile details: editable developer name/role line and an optional education or certificate line.
- Background: uses the existing `--page-background` token to match every other page.
- Navigation: four right-side dots and the existing wheel, keyboard, and swipe transitions.

### Manufacturing AI Profile

- Hero copy: 김동환, Manufacturing AI Engineer | Process Data Analyst, and the message “공정을 이해하고, 데이터로 분석하며, AI로 개선합니다.”
- Competency table: Process Understanding, Data Analysis, Quality Improvement, and AI Application appear in a one-by-four desktop table with only shared horizontal and vertical divider lines, collapsing to two columns on mobile.
- Career goal: process data analysis and machine learning direction remains a primary About page section.
- Visual treatment: the shared mint gradient remains clean and uninterrupted so the ABOUT page stays consistent with the rest of the portfolio.
