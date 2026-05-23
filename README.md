# Apptify UI Framework

Monorepo สำหรับ **Apptify Design System** — รวม Design Tokens และ React Component Library ที่ใช้ร่วมกันได้ในทุกโปรเจกต์ของทีม

## Packages

| Package | Version | Description |
|---|---|---|
| [`@apptify-labs/tokens`](./packages/tokens) | [![npm](https://img.shields.io/npm/v/@apptify-labs/tokens.svg)](https://www.npmjs.com/package/@apptify-labs/tokens) | Design tokens (colors, spacing, typography, radius, shadows) |
| [`@apptify-labs/ui`](./packages/ui) | [![npm](https://img.shields.io/npm/v/@apptify-labs/ui.svg)](https://www.npmjs.com/package/@apptify-labs/ui) | React component library ที่สร้างบน Radix UI + Tailwind CSS |

## ติดตั้งและใช้งาน

ดูคู่มือใช้งานในแต่ละ package:
- [คู่มือใช้งาน `@apptify-labs/ui`](./packages/ui/README.md)
- [คู่มือใช้งาน `@apptify-labs/tokens`](./packages/tokens/README.md)

## Development

### Requirements
- Node.js 22 (LTS) — ดู [.nvmrc](./.nvmrc)
- pnpm 11.1.3

### Setup
```bash
nvm use            # ใช้ Node ตามที่ระบุใน .nvmrc
pnpm install
```

### Commands
```bash
pnpm dev           # รัน watch mode ทุก package
pnpm build         # build ทุก package
pnpm lint          # type-check ทุก package
pnpm format        # format โค้ดด้วย Prettier
```

### Storybook
```bash
pnpm --filter @apptify-labs/ui storybook
```
เปิดที่ http://localhost:6006

## Release & Publishing

ทุก release ถูกปล่อยผ่าน GitHub Actions โดยใช้ git tag เป็น trigger — ดูรายละเอียดที่ [RELEASING.md](./RELEASING.md)

## โครงสร้างโปรเจกต์

```
.
├── packages/
│   ├── tokens/        # @apptify-labs/tokens
│   └── ui/            # @apptify-labs/ui
├── .github/workflows/
│   ├── ci.yml         # lint + build บน PR/push main
│   └── release.yml    # publish ขึ้น npm เมื่อ push tag v*
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

## License

MIT
