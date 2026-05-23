# @apptify-labs/ui

**Shared UI Component Library** ของ Apptify — React components สร้างบน [Radix UI](https://www.radix-ui.com/) + [Tailwind CSS](https://tailwindcss.com/) ใช้ design tokens จาก [`@apptify-labs/tokens`](../tokens)

> ออกแบบให้ใช้งานในรูปแบบ **NPM Package** ที่มี versioning — โค้ด component ถูกล็อกใน `node_modules` เพื่อให้ทุกโปรเจกต์ของทีมใช้ design system เดียวกัน (centralized updates) แตกต่างจาก `shadcn/ui` ปกติที่ copy โค้ดมา customize เอง

## Installation

```bash
pnpm add @apptify-labs/ui
# หรือ
npm install @apptify-labs/ui
# หรือ
yarn add @apptify-labs/ui
```

## Setup

### 1. ตั้งค่า Tailwind CSS

เพิ่ม path ของ package เข้าใน `content` ของ `tailwind.config.js` เพื่อไม่ให้ class ถูก purge ตอน build:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@apptify-labs/ui/dist/**/*.{js,mjs}",
  ],
  theme: { extend: {} },
  plugins: [],
};
```

### 2. Import Styles

ในไฟล์ CSS หลัก (เช่น `globals.css` หรือ `index.css`):

```css
@import "@apptify-labs/ui/styles.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. ใช้งาน Components

```tsx
import { Card, CardHeader, CardTitle, CardContent, Input, Label } from "@apptify-labs/ui";

export default function LoginForm() {
  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>เข้าสู่ระบบ</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="email">อีเมล</Label>
          <Input id="email" placeholder="email@example.com" />
        </div>
      </CardContent>
    </Card>
  );
}
```

## Available Components

- `Card`, `CardHeader`, `CardTitle`, `CardContent` — ดูที่ [src/components/card](./src/components/card)
- `Input` — ดูที่ [src/components/input](./src/components/input)
- `Label` — ดูที่ [src/components/label](./src/components/label)
- `Separator` — ดูที่ [src/components/separator](./src/components/separator)

Utility:
- `cn(...classes)` — รวม class names พร้อม `tailwind-merge` (export จาก [src/utils/cn](./src/utils/cn))

## Customization

- ส่ง prop `className` เพื่อ override style ของแต่ละ component ได้ทันที — `tailwind-merge` จัดการ class ซ้ำซ้อนให้
- ถ้าต้องการเปลี่ยน design tokens (สี, spacing, ฯลฯ) แก้ที่ [`@apptify-labs/tokens`](../tokens) แล้วเปลี่ยน reference ใน [tailwind.config.js](./tailwind.config.js) ของ package นี้

## Development

ดู [คู่มือพัฒนา monorepo](../../README.md#development) สำหรับ setup พื้นฐาน

ภายในโฟลเดอร์นี้:
```bash
pnpm dev               # watch build
pnpm build             # one-shot build
pnpm lint              # type-check
pnpm storybook         # เปิด Storybook ที่ port 6006
pnpm build-storybook   # build static storybook
```

## Release

ดู [RELEASING.md](../../RELEASING.md) — ทุก release ปล่อยผ่าน GitHub Actions โดย push git tag
