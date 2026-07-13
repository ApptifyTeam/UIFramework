---
# ════════════════════════════════════════════════════════════════
#  Apptify UI — DESIGN.md
#  Design system brief for AI coding agents
#  Spec: https://getdesign.md/what-is-design-md
# ════════════════════════════════════════════════════════════════

name: "Apptify UI Design System"
version: "1.0.6"
package: "@apptify-labs/ui"
foundation: "shadcn/ui + Radix UI + Tailwind CSS v3"

# ── Colors ──────────────────────────────────────────────────────
colors:
  # Brand — Primary & Secondary (flat keys for linter compatibility)
  primary: "#54C2DF" # Main brand — Sky Cyan
  primary-50: "#EEF9FB"
  primary-100: "#D5F0F6"
  primary-200: "#ABE1ED"
  primary-300: "#80D2E4"
  primary-400: "#54C2DF"
  primary-600: "#3AADC9" # Hover state
  primary-700: "#2D8FA6" # Pressed/active state
  primary-800: "#246F82"
  primary-900: "#1A4F5E"

  secondary: "#F3B255" # Main secondary — Warm Orange
  secondary-50: "#FEF7EC"
  secondary-100: "#FDECD0"
  secondary-200: "#FBDAA3"
  secondary-300: "#F7C77C"
  secondary-400: "#F3B255"
  secondary-600: "#DA9A3E" # Hover state
  secondary-700: "#B87E2F" # Pressed/active state
  secondary-800: "#946324"
  secondary-900: "#70491A"

  # Semantic
  success: "#10B981" # Emerald
  success-50: "#ECFDF5"
  success-100: "#D1FAE5"
  success-600: "#059669"
  success-700: "#047857"

  warning: "#F59E0B" # Amber
  warning-50: "#FFFBEB"
  warning-100: "#FEF3C7"
  warning-600: "#D97706"
  warning-700: "#B45309"

  danger: "#EF4444" # Rose-Red
  danger-50: "#FEF2F2"
  danger-100: "#FEE2E2"
  danger-600: "#DC2626"
  danger-700: "#B91C1C"

  info: "#0EA5E9" # Sky
  info-50: "#F0F9FF"
  info-100: "#E0F2FE"
  info-600: "#0284C7"
  info-700: "#0369A1"

  # Neutral scale (Sleek Slate)
  neutral-50: "#F8FAFC"
  neutral-100: "#F1F5F9"
  neutral-200: "#E2E8F0"
  neutral-300: "#CBD5E1"
  neutral-400: "#94A3B8"
  neutral-500: "#64748B"
  neutral-600: "#475569"
  neutral-700: "#334155"
  neutral-800: "#1E293B"
  neutral-900: "#0F172A"
  neutral-950: "#020617"

  # Theme surface & utility colors (Light)
  background: "#F8FAFC"
  foreground: "#030712"
  card: "#FFFFFF"
  border: "#E2E8F0"
  muted: "#F1F5F9"
  muted-foreground: "#64748B"
  destructive: "#EF4444"
  ring: "#54C2DF"
  accent-cyan: "#54C2DF"
  accent-orange: "#F3B255"

  # Theme surface & utility colors (Dark)
  dark:
    # Scale Inversions for Dark Mode Mapping
    primary-50: "#1A4F5E"
    primary-100: "#246F82"
    primary-200: "#2D8FA6"
    primary-300: "#3AADC9"
    primary-400: "#54C2DF"
    primary-600: "#80D2E4"
    primary-700: "#ABE1ED"
    primary-800: "#D5F0F6"
    primary-900: "#EEF9FB"

    secondary-50: "#70491A"
    secondary-100: "#946324"
    secondary-200: "#B87E2F"
    secondary-300: "#DA9A3E"
    secondary-400: "#F3B255"
    secondary-600: "#F7C77C"
    secondary-700: "#FBDAA3"
    secondary-800: "#FDECD0"
    secondary-900: "#FEF7EC"

    success-50: "#047857"
    success-100: "#059669"
    success-600: "#D1FAE5"
    success-700: "#ECFDF5"

    warning-50: "#B45309"
    warning-100: "#D97706"
    warning-600: "#FEF3C7"
    warning-700: "#FFFBEB"

    danger-50: "#B91C1C"
    danger-100: "#DC2626"
    danger-600: "#FEE2E2"
    danger-700: "#FEF2F2"

    info-50: "#0369A1"
    info-100: "#0284C7"
    info-600: "#E0F2FE"
    info-700: "#F0F9FF"

    neutral-50: "#020617"
    neutral-100: "#0F172A"
    neutral-200: "#1E293B"
    neutral-300: "#334155"
    neutral-400: "#475569"
    neutral-500: "#64748B"
    neutral-600: "#94A3B8"
    neutral-700: "#CBD5E1"
    neutral-800: "#E2E8F0"
    neutral-900: "#F1F5F9"
    neutral-950: "#F8FAFC"

    background: "#0B1437"
    foreground: "#F8FAFC"
    card: "#15224F"
    border: "#1E293B"
    muted: "#1E293B"
    muted-foreground: "#94A3B8"
    destructive: "#EF4444"
    ring: "#54C2DF"
    accent-cyan: "#54C2DF"
    accent-orange: "#F3B255"

# ── Typography ──────────────────────────────────────────────────
typography:
  fontFamily:
    sans: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  fontSize:
    xs: "0.75rem" # 12px — captions, badges
    sm: "0.875rem" # 14px — secondary text, table cells
    base: "1rem" # 16px — body text
    lg: "1.125rem" # 18px — sub-headings
    xl: "1.25rem" # 20px — section titles
    2xl: "1.5rem" # 24px — page sub-titles
    3xl: "1.875rem" # 30px — page titles
    4xl: "2.25rem" # 36px — hero numbers / KPIs
    5xl: "3rem" # 48px — dashboard hero values
  fontWeight:
    light: 300
    regular: 400
    medium: 500
    semibold: 600
    bold: 700
    extrabold: 800
  lineHeight:
    none: "1"
    tight: "1.25"
    snug: "1.375"
    normal: "1.5"
    relaxed: "1.625"
    loose: "2"

# ── Spacing ─────────────────────────────────────────────────────
spacing:
  unit: "4px" # Base unit — all spacing is multiples of 4px
  scale:
    0: "0px"
    0.5: "0.125rem" # 2px
    1: "0.25rem" # 4px
    1.5: "0.375rem" # 6px
    2: "0.5rem" # 8px
    3: "0.75rem" # 12px
    4: "1rem" # 16px
    5: "1.25rem" # 20px
    6: "1.5rem" # 24px
    8: "2rem" # 32px
    10: "2.5rem" # 40px
    12: "3rem" # 48px
    16: "4rem" # 64px
    20: "5rem" # 80px
    24: "6rem" # 96px

# ── Border Radius ───────────────────────────────────────────────
rounded:
  none: "0px"
  xs: "0.125rem" # 2px
  sm: "0.25rem" # 4px
  md: "0.375rem" # 6px
  DEFAULT: "0.75rem" # 12px — default component radius
  lg: "0.5rem" # 8px
  xl: "0.75rem" # 12px
  2xl: "1rem" # 16px
  3xl: "1.5rem" # 24px
  full: "9999px" # Pills, circular avatars

# ── Shadows ─────────────────────────────────────────────────────
shadows:
  none: "none"
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)"
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
  2xl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)"

# ── Animations ──────────────────────────────────────────────────
animations:
  duration:
    fast: "150ms"
    default: "200ms"
    slow: "300ms"
  easing: "ease-out"
  keyframes:
    - accordion-down
    - accordion-up
    - fade-in
    - fade-out
    - slide-in-from-top
    - slide-in-from-bottom
---

## Overview

**Apptify UI** is a React component library that packages [shadcn/ui](https://ui.shadcn.com/) components into a versioned NPM package (`@apptify-labs/ui`) for design consistency across multiple products. It is built on top of **Radix UI** primitives, styled with **Tailwind CSS v3**, and uses the **CSS custom property (HSL)** theming approach from shadcn/ui.

### Design Philosophy

The design language is **"Clean Analytical Dashboard"** — a professional, data-rich aesthetic that communicates clarity and trustworthiness. It avoids visual excess in favour of generous white space, subtle borders, and a crisp typographic hierarchy. The overall feel is:

- **Clean & Airy**: White/light backgrounds with ample breathing room between components
- **Data-Forward**: Large KPI numbers, inline sparklines, and chart widgets are first-class citizens
- **Colour-Restrained**: Most of the interface is neutral. Colour is reserved for _data_, _status_, and _interaction_
- **Professional but Warm**: Rounded corners (`xl` = 12px default) and soft shadows keep the UI from feeling cold

### Visual DNA (derived from design references)

The reference designs show a **SaaS analytics / business intelligence** dashboard platform. Key visual characteristics:

1. **Three-column card grid** — Left sidebar (navigation), centre (main charts/data), right panel (summary KPIs)
2. **Dual brand palette** — Sky Cyan `#54C2DF` for primary data fills + Warm Orange `#F3B255` for secondary data / goals / CTA markers
3. **Interactive map visualisations** — Dot-map world views with circular markers sized by value, connected by vertical leader lines
4. **Stylised chart markers** — Concentric circles with a bullseye/target icon (⊙) used on line charts and map pins
5. **Pill badges for insights** — Rounded, borderless badges showing +/- percentage changes (green for positive, orange for negative)
6. **Card-based composition** — Every data widget lives inside a white card with a thin `neutral-200` border and `xl` radius
7. **Dual theme support** — Light mode (white surfaces) and Dark mode (deep navy `#0B1437` surfaces) with identical layout structure

---

## Colors

### Brand Palette

| Token           | Hex       | Usage                                                                                      |
| --------------- | --------- | ------------------------------------------------------------------------------------------ |
| `primary.500`   | `#54C2DF` | Main brand — Sky Cyan. Buttons, active links, focus rings, interactive states, chart fills |
| `primary.100`   | `#D5F0F6` | Hover/selected backgrounds for rows and list items                                         |
| `primary.700`   | `#2D8FA6` | Pressed/active state for primary buttons                                                   |
| `secondary.500` | `#F3B255` | Secondary brand — Warm Orange. CTAs, goal markers, upgrade banners, secondary chart data   |
| `secondary.100` | `#FDECD0` | Hover/selected backgrounds for secondary elements                                          |
| `secondary.700` | `#B87E2F` | Pressed/active state for secondary buttons                                                 |

### Semantic Palette

- **Success (`#10B981`)**: Positive metrics, confirmed status, "+X%" growth badges
- **Warning (`#F59E0B`)**: Alert badges, "at risk" indicators — note: distinct from `secondary` orange
- **Danger (`#EF4444`)**: Destructive actions, error states, negative percentage badges
- **Info (`#0EA5E9`)**: Informational banners — note: distinct from `primary` cyan; Info is a deeper sky-blue

### Brand Colours as Data-Vis Pair

The primary and secondary brand colours **double as the data visualisation accent pair**. This ensures visual unity between UI chrome and chart content:

| Role           | Colour      | Hex       | Usage                                                                                |
| -------------- | ----------- | --------- | ------------------------------------------------------------------------------------ |
| Primary data   | Sky Cyan    | `#54C2DF` | Bar charts, area fills, line charts, map markers, progress bars, timeline highlights |
| Secondary data | Warm Orange | `#F3B255` | Goal bars, comparison series, upgrade banners, tier-up indicators                    |

Because the brand colours are already used for data, avoid using `success`, `warning`, or `danger` as chart fill colours — reserve semantics for status indicators only.

### Theme Switching

The system uses HSL CSS custom properties on `:root` (light) and `.dark` (dark). All colour references in components go through `hsl(var(--token))` rather than hard-coded hex values. This ensures theme changes are a single class toggle.

---

## Typography

### Font Stack

- **Primary**: `Inter` — A geometric neo-grotesque optimised for screen readability. Always use Inter unless the user has explicitly loaded a brand font.
- **Monospace**: System monospace stack — Used exclusively for code blocks, OTP inputs, and technical identifiers.

### Hierarchy Rules

| Level         | Token  | Size | Weight           | Use                                            |
| ------------- | ------ | ---- | ---------------- | ---------------------------------------------- |
| Hero value    | `5xl`  | 48px | `bold (700)`     | Dashboard headline KPIs (e.g., "$347,500")     |
| Page title    | `3xl`  | 30px | `semibold (600)` | Page headings ("Sales Insights", "Comparison") |
| Section title | `xl`   | 20px | `semibold (600)` | Card titles, widget labels                     |
| Sub-heading   | `lg`   | 18px | `medium (500)`   | Card sub-categories, secondary titles          |
| Body          | `base` | 16px | `regular (400)`  | Paragraphs, descriptions, form labels          |
| Small         | `sm`   | 14px | `regular (400)`  | Table cells, sidebar nav items, metadata       |
| Caption       | `xs`   | 12px | `medium (500)`   | Badges, timestamps, chart axis labels          |

### Typography Constraints

- **Maximum two font weights per view** — Typically `regular` (400) for body and `semibold` (600) for headings
- **Line heights** — Use `normal` (1.5) for body text, `tight` (1.25) for headings
- **Letter spacing** — Default tracking. Never add custom letter-spacing except for ALL-CAPS labels, where `0.05em` tracking is acceptable

---

## Spacing & Layout

### Spacing Scale

All spacing follows a **4px base unit**. Use only tokens from the spacing scale — never arbitrary pixel values.

| Purpose                      | Token   | Value   |
| ---------------------------- | ------- | ------- |
| Tight element gap            | `1`     | 4px     |
| Input padding, badge padding | `2`     | 8px     |
| Intra-card element gap       | `3`     | 12px    |
| Standard component padding   | `4`     | 16px    |
| Card internal padding        | `5–6`   | 20–24px |
| Section gap (between cards)  | `6–8`   | 24–32px |
| Page section separation      | `12–16` | 48–64px |

### Background & Container Hierarchy

Apptify's layout uses a clean, border-driven hierarchy, but adapts between themes:
- **Light Mode**: Main Background and Card Backgrounds can be flat (same color), relying on subtle borders.
- **Dark Mode**: Uses a rich blue-grey aesthetic. **Cards MUST have a distinct, lighter background color** compared to the main app background to create depth. For example, Background is a deep blue-grey (`#263851`) while Cards are slightly lighter (`#2D4461`).
- No drop shadows are allowed on any standard structural elements.

### Layout Modules
- **Sidebar**: Clean, left-aligned sidebar. The active state MUST use a light tint of the primary color for the background pill (e.g. `bg-primary/10`) and solid primary color for the text/icon (`text-primary`).
- **Main Content & Cards**: Content is always organised in cards laid out on a responsive grid. Cards should have:
   - `padding: spacing[6]` (24px) internal
   - `gap: spacing[6]` (24px) between cards
   - `border: 1px solid rgba(0,0,0,0.05)` (Light) or `rgba(255,255,255,0.05)` (Dark)
   - `border-radius: radius.xl` (12px)
   - **No box-shadow.**

3. **Filters Bar** — Appears at the top of data views with dropdowns for date range, location, and search. Uses pill-shaped inputs with `radius.full`.

---

## Border Radius

The default component radius (`--radius`) is **0.75rem (12px)**. This gives a modern, approachable feel.

| Element            | Radius          |
| ------------------ | --------------- |
| Buttons            | `lg` (8px)      |
| Cards, Dialogs     | `xl` (12px)     |
| Inputs, Selects    | `lg` (8px)      |
| Badges             | `full` (pill)   |
| Avatars            | `full` (circle) |
| Filter chips       | `full` (pill)   |
| Charts/map markers | `full` (circle) |
| Tooltips           | `md` (6px)      |

---

## Shadows

Shadows are used **sparingly**. The design references show a largely flat aesthetic with borders preferred over elevation.

| Context                     | Shadow Token                               |
| --------------------------- | ------------------------------------------ |
| Default cards               | `none` or `sm` — prefer border over shadow |
| Elevated dialogs & popovers | `lg`                                       |
| Dropdowns & menus           | `md`                                       |
| Floating tooltip            | `md`                                       |
| Map marker callouts         | `md`                                       |
| Sidebar overlay (mobile)    | `xl`                                       |

---

## Component Architectural Pattern: Atomic Design

To maintain strict architectural boundaries, the framework and applications must adhere to the **Atomic Design** philosophy. This keeps the design system organized, modular, and maintainable.

### Layers

1. **Atoms (Base UI Components)**
   - These are the fundamental HTML tags or Radix primitives styled with our token system. They have a single responsibility and cannot be broken down further.
   - Examples: `Button`, `Input`, `Label`, `Icon`, `Checkbox`, `Badge`, `Skeleton`, `Kbd`, `Separator`.
   
2. **Molecules & Organisms (Compound UI Components)**
   - These are combinations of two or more Atoms or other Molecules designed to act as a unified, reusable control or widget.
   - Molecules are simple combinations of a few atoms (e.g., `Field` combining `Label` + `Input`, `DatePicker` combining `Button` + `Calendar` + `Popover`, `MultiSelect` combining `Popover` + `Command` + `Checkbox`, `SearchBar` with expand focus transition).
   - Organisms are more complex, distinct layout sections or widgets composed of multiple molecules and/or atoms (e.g., `Sidebar`, `DataTable`, `FilterPopover`).

### Strict Rules
- **Atoms** must not import or render **Molecules** or **Organisms**.
- **Molecules & Organisms** should build upon and compose **Atoms** rather than implementing custom layouts from raw divs/primitives.
- **Templates & Pages** (such as components inside the `example/` app) must only consume components from the framework. Direct composition of complex elements from raw buttons/popovers should be refactored into molecules/organisms within the framework to ensure design consistency and reusability.

---

## Component Rules

### Buttons

- **Primary**: `primary.500` background, dark text (e.g. `neutral.950` for minimum 4.5:1 contrast against bright cyan), `lg` radius. Hover: `primary.600`. Active: `primary.700`
- **Secondary/Outline**: White background, `neutral.200` border, `secondary.700` text
- **Ghost**: No background, no border. Appears on hover with `muted` background
- **Destructive**: `danger.500` background, white text
- **Icon-only**: Square aspect ratio with `lg` radius; use `secondary.500` icon colour, `muted` hover background
- **CTA (Upgrade)**: Uses accent orange `#F5A623` background, dark text — only for promotional call-to-action

### Cards

- White background (`card` token), ultra-faint border (`border-black/5` in light, `border-white/5` in dark), `xl` radius
- Shadow: Custom soft shadow `shadow-[0_4px_24px_rgba(0,0,0,0.04)]` in light mode, `shadow-none` in dark mode.
- Internal padding: `spacing[6]` (24px)
- Title at top-left, optional action/dropdown at top-right
- In dark mode: use the `card` dark token (`hsl(222.2 84% 4.9%)`) — never hard-code a dark background

### Inputs & Forms

- Height: `40px` (`spacing[10]`)
- Horizontal padding: `spacing[3]` (12px)
- Border: `input` token (light grey), `lg` radius
- Focus ring: 2px solid `ring` token (primary blue)
- Label: `sm` (14px), `medium` weight, placed above input with `spacing[1.5]` gap

### Navigation / Sidebar

- Fixed left sidebar with vertical icon + label nav
- Active item: `primary.500` text + `primary.50` background highlight
- Inactive: `secondary.500` text
- Bottom section: "Upgrade to Pro" CTA card with accent orange button

### Data Tables

- Header row: `muted` background, `xs` text, `medium` weight, uppercase
- Data cells: `sm` text, `regular` weight
- Row dividers: 1px `border` token
- Sortable columns: chevron icon, interactive header cells
- Hover row: `muted` background tint

### Charts & Data Visualisation

- **Bar charts**:
  - Standard/Inactive bars use a "hollow" style: A solid 2px stroke in the primary/secondary color, with a very light tinted fill (e.g., 10-20% opacity of the same color).
  - Active/Hover bars use a 100% solid fill in the primary/secondary color, often with a pill-shaped backdrop highlighting the column.
  - Bars have `lg` radius on top and bottom corners.
- **Line charts**: Thin (2px) stroke in `neutral.900`, with concentric circle markers (⊙) at data points. Highlight zones use a `cyan` or `orange` oval/pill overlay
- **Spider/Radar charts**: Filled `cyan` with 40% opacity, outlined with `cyan` stroke
- **Progress bars**: Thin horizontal bars with `full` radius. Use semantic colours (cyan for on-track, orange for at-risk)
- **Map visualisations**: Dotted world map background, circular markers sized by value, vertical leader lines connecting to labels

### Badges & Metrics

- Percentage badges: Inline `+X%` or `-X%` text — green (`success.500`) for positive, orange (`warning.500`) for negative
- No background fill by default — just coloured text next to the metric value
- Status badges (in cards): Pill shape, `full` radius, coloured background at opacity 10%, solid text

### Tooltips & Popovers

- `md` radius, `md` shadow
- Background: `popover` token (white in light, dark surface in dark mode)
- Text: `sm` size, `regular` weight
- Arrow/caret: Optional, consistent with Radix UI popover positioning

---

## Animations & Transitions

- **Default transition**: `200ms ease-out` for all interactive state changes (hover, focus, active)
- **Accordion expand/collapse**: `200ms ease-out` height animation
- **Fade in/out**: `200ms ease-out` opacity transition — used for mounting/unmounting overlays
- **Slide in**: `300ms ease-out` translate — used for sheets and drawers
- **Chart animations**: Data points should animate in with a subtle scale-up or fade-in sequence. No bouncy/spring animations
- **No animation on**: Page loads, card renders, static content. Animations are reserved for state changes only

---

## Iconography

- **Icon library**: [Hugeicons React](https://hugeicons.com/) (primary) and custom SVGs.
- **Icon size**: Default `20px` (`spacing[5]`). In compact contexts use `16px` (`spacing[4]`)
- **Icon style**: Stroke-based, 1.5–2px stroke width, matching the geometric clarity of Inter
- **Icon colour**: Inherits `currentColor`. Use `secondary.500` for decorative icons, `primary.500` for interactive icons

### Icon Variants & Styling

To maximise the utility of free, stroke-only icon sets (like HugeIcons), the UI framework defines standard variants to dynamically alter their appearance via CSS and wrapper components:

1. **Default (Outline/Stroke)**:
   - Base state. `fill: none; stroke: currentColor;`
2. **Solid (Simulated)**:
   - Fills the vector paths via CSS: `fill: currentColor; stroke: currentColor;`
   - *Note: This works well for simple, closed shapes (like circles, folders) but may look distorted on complex intersecting line-art.*
3. **Duotone (Soft Container)**:
   - Since true multi-color duotone is difficult on single-path SVGs, we simulate a "Duotone Apptify Style" by wrapping the stroke icon in a soft, tinted background pill/circle.
   - Example: Icon is `text-primary-600`, placed inside a container with `bg-primary-100 rounded-lg p-2`.
4. **Bold (Thick Stroke)**:
   - Increases visual weight by overriding the stroke width via CSS: `stroke-width: 2.5px;` or `3px;`.
5. **Glow (Neon Effect)**:
   - Adds a coloured drop shadow matching the text colour: `filter: drop-shadow(0 0 4px currentColor);`

---

## Responsive Behaviour

| Breakpoint            | Layout                                                                            |
| --------------------- | --------------------------------------------------------------------------------- |
| `< 768px` (mobile)    | Single column. Sidebar collapses to hamburger menu. Right panel stacks below main |
| `768–1024px` (tablet) | Two columns. Sidebar collapsed to icon-only rail. Right panel inline              |
| `> 1024px` (desktop)  | Full three-column layout as shown in design references                            |

- Cards should span full width on mobile and collapse gracefully
- Data tables should use horizontal scroll on narrow screens
- Chart widgets should maintain a 16:9 or 4:3 aspect ratio and resize with container queries

---

## Dark Mode & Theming

The system supports a full dual-theme architecture (Light and Dark mode) using CSS custom properties on `:root` and `.dark`. Dark mode is activated via the `.dark` class on the HTML element (managed by `next-themes`).

### Visual Contrast (Light vs. Dark)

As seen in the reference designs (`Dashboard 1 Ref Light.jpg` and `Dashboard 2 Ref Dark.jpg`), the two themes maintain identical layouts but shift dramatically in mood and surface treatments to ensure visual accessibility and aesthetic appeal:

- **Light Theme (`Dashboard 1 Ref Light.jpg`)**:
  - **Surfaces**: Crisp white (`#FFFFFF`) cards and backgrounds.
  - **Feel**: Airy, bright, and highly legible. It relies on subtle grey borders (`neutral-200`) and soft shadows (`sm`) to separate overlapping elements.
  - **Text**: Deep slate/black (`foreground` `#030712`) for high contrast.

- **Dark Theme (`Dashboard 2 Ref Dark.jpg`)**:
  - **Surfaces**: Deep navy and slate tones (e.g., `#0B1437` or `neutral-900`/`neutral-950`). Cards use slightly lighter elevated surfaces (`card` token) to stand out from the canvas.
  - **Feel**: Immersive, sleek, and focused. It reduces glare while keeping the data vibrant.
  - **Text**: White and light slate (`muted-foreground` `#94A3B8`) text.
  - **Borders & Shadows**: Shadows are minimized or removed entirely, replaced by very subtle, lighter borders (e.g., `hsl(217.2 32.6% 17.5%)` or `neutral-800`) to define edges and elevation.

### Dark Mode Rules

- **Surface colours**: Use CSS variable tokens only — never hard-code hex values for backgrounds. Rely on the `background`, `card`, and `popover` tokens.
- **Data Accents**: Brand and data colors (`cyan` `#54C2DF` and `orange` `#F3B255`) **remain exactly the same** across both themes. Their high luminosity ensures they pop against both white and deep navy backgrounds.
- **Text contrast**: Ensure minimum WCAG AA (4.5:1 for body text, 3:1 for large text).
- **Elevation**: Do not use dark drop-shadows to separate layers in dark mode. Instead, use a lighter border or a slightly lighter background color to indicate elevation.

---

## Do's and Don'ts

### ✅ DO

- Use the token system — reference `colors.primary[500]`, not a raw hex value
- Use Inter as the sole body/display font
- Keep cards flat — prefer borders over drop shadows
- Use cyan and orange as a data-vis pair, not as UI element colours
- Use `hsl(var(--token))` for any colour that must change between themes
- Space elements using the 4px base unit scale
- Use Radix UI primitives for all interactive components (dialog, popover, dropdown)
- Use `class-variance-authority` (CVA) for component variant definitions
- Use `tailwind-merge` via the `cn()` utility to merge class names
- Maintain a clear visual hierarchy: hero number → section title → body → caption

### ❌ DON'T

- Don't use gradient backgrounds on cards or buttons
- Don't use more than two font weights per view
- Don't use box shadows larger than `md` on cards — cards should feel flat
- Don't use colours outside the defined token palette
- Don't hard-code dark mode colours — always use CSS variables
- Don't add animations to initial page renders
- Don't use rounded corners larger than `xl` (12px) on rectanglar components (only `full` for pills/circles)
- Don't copy-paste shadcn/ui components directly — always use the `@apptify-labs/ui` packaged version
- Don't use Tailwind arbitrary values (`[14px]`, `[#ff0000]`) — map to the nearest token instead
- Don't use more than three semantic colours in a single card widget

---

## Tech Stack

| Layer           | Technology                                    |
| --------------- | --------------------------------------------- |
| Framework       | React ≥ 18                                    |
| Styling         | Tailwind CSS v3 + CSS custom properties (HSL) |
| Primitives      | Radix UI                                      |
| Variant system  | `class-variance-authority` (CVA)              |
| Class merging   | `tailwind-merge` via `cn()`                   |
| Charts          | Recharts                                      |
| Icons           | Hugeicons React                                |
| Carousel        | Embla Carousel                                |
| Date handling   | date-fns + react-day-picker                   |
| Toast           | Sonner                                        |
| Drawer          | Vaul                                          |
| Build           | tsup                                          |
| Testing         | Vitest + Storybook v10 + Playwright           |
| Package manager | pnpm                                          |

---

## Component Inventory (59 components)

### Primitives & Layout

`Separator` · `AspectRatio` · `ScrollArea` · `Resizable` · `Direction` · `Collapsible`

### Typography & Feedback

`Typography` · `Badge` · `Spinner` · `Skeleton` · `Empty` · `Kbd` · `Alert` · `Progress`

### Forms & Inputs

`Button` · `ButtonGroup` · `Input` · `InputGroup` · `InputOTP` · `Label` · `Textarea` · `Checkbox` · `Switch` · `Slider` · `RadioGroup` · `Toggle` · `ToggleGroup` · `NativeSelect` · `Select` · `Combobox` · `Calendar` · `DatePicker` · `Field`

### Navigation

`Breadcrumb` · `Tabs` · `Pagination` · `NavigationMenu` · `Menubar` · `Sidebar`

### Overlays & Popups

`Dialog` · `AlertDialog` · `Sheet` · `Drawer` · `DropdownMenu` · `ContextMenu` · `Popover` · `HoverCard` · `Tooltip` · `Command`

### Data Display

`Card` · `Table` · `DataTable` · `Accordion` · `Avatar` · `Item` · `Carousel` · `Chart`

### Notifications

`Toast` · `Sonner`

---

## File Structure

```
src/
├── components/       # 59 component directories — each is self-contained
│   ├── button/
│   ├── card/
│   ├── chart/
│   └── ...
├── hooks/            # Shared React hooks
├── tokens/           # Design token modules
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   ├── radius.ts
│   ├── shadows.ts
│   └── index.ts
├── utils/
│   └── cn.ts         # tailwind-merge utility
├── styles.css        # Global CSS variables (light & dark theme)
└── index.ts          # Public API barrel file
```
