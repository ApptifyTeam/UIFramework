# Storybook & การจัดการ Components

คู่มือนี้จะอธิบายขั้นตอนการรัน Storybook รวมถึงการนำ Component ใหม่จาก Shadcn UI มาใช้งานใน `@apptify/ui` ตั้งแต่ขั้นตอนการดาวน์โหลด การปรับแต่ง จนถึงการเขียนเอกสาร (Docs) ลงใน Storybook ครับ

---

## 🏃‍♂️ การรัน Storybook

หากต้องการดู Document หรือทดสอบ UI Components สามารถรัน Storybook ได้ด้วยคำสั่ง:

```bash
cd packages/ui
pnpm run storybook
```
จากนั้นเปิดเบราว์เซอร์ไปที่ `http://localhost:6006`

---

## 📦 การนำ Component ใหม่เข้ามาใน Project

คุณสามารถนำ Component จาก Shadcn UI เข้ามาในโฟลเดอร์ `packages/ui/src/components` ได้ 2 วิธี:

### วิธีที่ 1: ผ่าน CLI (แนะนำ)
ถ้าคุณรันคำสั่งของ Shadcn ได้ในโปรเจ็กต์ ให้ใช้คำสั่ง:
```bash
npx shadcn-ui@latest add input
```
*(ระบบจะสร้างไฟล์และติดตั้ง Dependencies ของ Radix UI ให้ถ้าจำเป็น)*

### วิธีที่ 2: Copy & Paste แบบ Manual
1. ไปที่เว็บ [Shadcn UI](https://ui.shadcn.com/docs/components)
2. เลือก Component (เช่น Input, Label) แล้วกดคัดลอกโค้ด
3. สร้างโฟลเดอร์สำหรับ Component นั้น เช่น `src/components/input/`
4. สร้างไฟล์ `input.tsx` และวางโค้ดลงไป

> ⚠️ **ข้อควรระวังเรื่อง Import Path:**
> Shadcn UI จะตั้งค่าเริ่มต้นให้ Import ฟังก์ชัน `cn` จาก `@/lib/utils`
> แต่โครงสร้างของเราอยู่ที่ `../../utils/cn` ดังนั้นคุณต้องแก้ Import ให้ถูกต้องตามโครงสร้างของเรา:
> ```diff
> - import { cn } from "@/lib/utils"
> + import { cn } from "../../utils/cn"
> ```

---

## 📝 การสร้างไฟล์ Storybook สำหรับ Component

เมื่อคุณมีไฟล์ `input.tsx` แล้ว ขั้นตอนต่อไปคือการสร้างไฟล์ Story เพื่อให้ Component นั้นไปแสดงใน Storybook

1. สร้างไฟล์ชื่อ `input.stories.tsx` ในโฟลเดอร์เดียวกัน (เช่น `src/components/input/input.stories.tsx`)
2. วางโครงสร้างมาตรฐานสำหรับ Storybook ดังนี้:

```tsx
// src/components/input/input.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

// 1. ตั้งค่า Meta สำหรับ Component
const meta = {
  title: 'Components/Input', // ชื่อหมวดหมู่และชื่อ Component ใน Sidebar
  component: Input, // Component หลักที่เราจะทำ Docs
  parameters: {
    layout: 'centered', // จัดกึ่งกลางหน้าจอ
  },
  tags: ['autodocs'], // สร้างหน้า Docs ให้โดยอัตโนมัติ
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// 2. สร้าง Story รูปแบบต่างๆ (เช่น แบบ Default, Disabled, หรือมี Label)
export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Email address',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};
```

> **Tip:** `args` ใน Storybook คือการจำลองการส่ง `props` เข้าไปใน Component ของเรา คุณสามารถใส่ `className`, `disabled`, หรือ props อื่นๆ เพื่อจำลอง State แบบต่างๆ ได้เลย

---

## 🚀 การ Export Component เพื่อให้แอปพลิเคชันอื่นนำไปใช้ (สำคัญ)

หลังจากทำ Component และ Storybook เสร็จแล้ว อย่าลืม Export Component นั้นที่ไฟล์ `packages/ui/src/index.ts` เพื่อให้ Package หรือแอปพลิเคชันอื่นๆ ใน Monorepo มองเห็นและนำไปใช้งานได้

แก้ไขไฟล์ `src/index.ts`:
```ts
// Export แบบนี้สำหรับทุก Component ใหม่ที่คุณเพิ่มเข้ามา
export * from "./components/card/card";
export * from "./components/input/input";
export * from "./components/label/label";
export * from "./components/separator/separator";
// ...
```

---

## ✅ สรุป Workflow ในการทำงาน
1. **ดึงโค้ด** (จาก Shadcn) -> ใส่ใน `src/components/[ชื่อ]/`
2. **แก้ `cn`** -> เปลี่ยน `import { cn }` ให้ชี้ไปที่ `utils/cn` ของเรา
3. **เขียน Story** -> สร้างไฟล์ `.stories.tsx` คู่กัน
4. **Export** -> เอาไปใส่ใน `src/index.ts`
5. **ดูผลลัพธ์** -> รัน `pnpm run storybook` เพื่อตรวจสอบความเรียบร้อย
