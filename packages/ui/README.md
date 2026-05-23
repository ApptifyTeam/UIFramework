# @apptify/ui

แพ็กเกจนี้คือ **Shared UI Framework** สำหรับใช้งานในแอปพลิเคชันและโปรเจกต์ต่างๆ 
โดยถูกพัฒนาต่อยอดมาจาก `shadcn/ui` และ `Tailwind CSS` เพื่อใช้เป็น **Enterprise Design System** แบบรวมศูนย์ 

> **สำคัญ:** แพ็กเกจนี้ถูกออกแบบให้ใช้งานในรูปแบบ **NPM Package** ที่มี Versioning ดังนั้นโค้ดของ Component ต่างๆ จะถูกล็อกอยู่ใน `node_modules` เพื่อรักษามาตรฐานและ Design ให้ตรงกันทุกโปรเจกต์ (Centralized Updates) จะแตกต่างจากการใช้งาน `shadcn/ui` แบบปกติที่คุณคัดลอกโค้ดมาปรับแต่งเองได้

---

## 📦 การติดตั้ง (Installation)

สำหรับการนำไปใช้ในโปรเจกต์ภายนอก ให้ทำการติดตั้งแพ็กเกจผ่าน Package Manager ที่คุณใช้งาน:

```bash
npm install @apptify/ui
# หรือ
pnpm add @apptify/ui
# หรือ
yarn add @apptify/ui
```

---

## 🚀 การตั้งค่าและเรียกใช้งาน (Setup & Usage)

เนื่องจาก `@apptify/ui` ใช้ Tailwind CSS เป็นแกนหลัก คุณจำเป็นต้องตั้งค่าโปรเจกต์ของคุณเล็กน้อย เพื่อให้แอปพลิเคชันของคุณอ่านคลาสต่างๆ ได้อย่างถูกต้อง

### 1. การตั้งค่า Tailwind CSS

คุณต้องเพิ่ม Path ของไฟล์จากแพ็กเกจนี้เข้าไปใน `content` ของไฟล์ `tailwind.config.js` ในโปรเจกต์ของคุณ เพื่อไม่ให้คลาสของ Component ถูกลบออก (Purge) ตอน Build

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    
    // สำคัญ: สแกนหา class จาก package @apptify/ui ที่ติดตั้งผ่าน npm
    "./node_modules/@apptify/ui/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2. การนำเข้า Styles (CSS)

ในไฟล์ CSS หลักของแอปคุณ (เช่น `globals.css` สำหรับ Next.js หรือ `index.css` สำหรับ React/Vite) ให้ทำการ import stylesheet ของ UI Framework เข้ามาด้วย:

```css
@import "@apptify/ui/styles.css";

/* โค้ด CSS เดิมของโปรเจกต์... */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. การเรียกใช้งาน Components

คุณสามารถ import components ต่างๆ ที่มีให้ใช้งานในแพ็กเกจ และนำไปใช้ได้ทันที:

```tsx
import { Card, CardHeader, CardTitle, CardContent, Input, Label } from "@apptify/ui";

export default function MyPage() {
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

---

## 🛠️ การแก้ไขและ Customization

- หากคุณต้องการปรับแต่งสไตล์ย่อยๆ ของ Component ในหน้าเว็บนั้นๆ สามารถส่ง Prop `className` เข้าไปเพื่อ Override คลาสผ่าน Tailwind ได้ (ระบบใช้ `tailwind-merge` จัดการคลาสที่ซ้ำซ้อนให้แล้ว)
- หากต้องการเปลี่ยนแปลงโครงสร้างหลัก หรือแก้บัคของ Component คุณจะต้องทำการแก้ไขที่ Source Code ของโปรเจกต์ `@apptify/ui` ต้นทาง ทำการ Build และ **Publish Version ใหม่** เพื่อให้โปรเจกต์อื่นๆ กดอัปเดตเวอร์ชันนำไปใช้งานต่อ

---

## 💻 สำหรับนักพัฒนาแพ็กเกจนี้ (Development & Publishing)

หากคุณเป็นผู้พัฒนา UI Framework ตัวนี้ และต้องการ Build โค้ดเพื่อ Publish:

1. ติดตั้ง Dependencies ใน Workspace: `pnpm install`
2. ทำการ Build ตัวแพ็กเกจ:
   ```bash
   pnpm run build --filter @apptify/ui
   ```
3. อัปเดตเลขเวอร์ชันใน `package.json` (เช่น `1.0.0` เป็น `1.0.1`)
4. สั่ง Publish ขึ้นสู่ NPM Registry หรือ Private Registry ขององค์กร:
   ```bash
   npm publish
   ```
