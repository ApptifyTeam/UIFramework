# @apptify-labs/tokens

**Design Tokens** ของ Apptify Design System — ค่ามาตรฐานสำหรับสี, ระยะห่าง, typography, radius และ shadow ที่ใช้ร่วมกันในทุกโปรเจกต์ของทีม

## Installation

```bash
pnpm add @apptify-labs/tokens
# หรือ
npm install @apptify-labs/tokens
```

## Usage

```ts
import { colors, spacing, typography, radius, shadows } from "@apptify-labs/tokens";

const buttonStyle = {
  backgroundColor: colors.primary[500],   // "#4B76FF"
  padding: spacing[4],                     // "1rem"
  borderRadius: radius.md,
  boxShadow: shadows.sm,
  fontSize: typography.fontSize.base,
};
```

## What's Included

| Module | Description | Source |
|---|---|---|
| `colors` | Brand palette (primary, secondary) + semantic (success, warning, error, info) แต่ละสีมี shade `50` ถึง `900` | [src/colors.ts](./src/colors.ts) |
| `spacing` | สเกลระยะห่าง `0` - `96` (ตาม Tailwind convention) เช่น `spacing[4]` = `1rem` | [src/spacing.ts](./src/spacing.ts) |
| `typography` | Font family, font size, font weight, line height | [src/typography.ts](./src/typography.ts) |
| `radius` | Border radius (`sm`, `md`, `lg`, `xl`, `full`) | [src/radius.ts](./src/radius.ts) |
| `shadows` | Box shadow (`sm`, `md`, `lg`, `xl`) | [src/shadows.ts](./src/shadows.ts) |

## ใช้กับ Tailwind CSS

นำ tokens ไปขยาย Tailwind theme ได้:

```js
// tailwind.config.js
import { colors, spacing, radius } from "@apptify-labs/tokens";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors,
      spacing,
      borderRadius: radius,
    },
  },
};
```

> `@apptify-labs/ui` ใช้ tokens เหล่านี้อยู่แล้ว — ติดตั้ง `@apptify-labs/tokens` ตรงๆ เฉพาะตอนต้องการใช้งานในโปรเจกต์ที่ไม่ได้ใช้ component library

## Development

```bash
pnpm dev      # watch build
pnpm build    # one-shot build
```

## Release

ดู [RELEASING.md](../../RELEASING.md)
