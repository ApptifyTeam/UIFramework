# Releasing

คู่มือการ release version ใหม่ของ `@apptify-labs/ui`

## Overview

Release triggered โดย **git tag** ที่มี prefix `v*` — เช่น push tag `v1.0.3` จะให้ GitHub Actions publish `@apptify-labs/ui` เป็น version `1.0.3` ขึ้น npm อัตโนมัติ

## Release Pipeline

`.github/workflows/release.yml` แยกเป็น 3 stages:

```
Lint → Build → Publish to npm
```

| Stage | ทำอะไร |
|---|---|
| **Lint** | `pnpm install` + `pnpm lint` (type-check) |
| **Build** | bump version จาก git tag → `pnpm build` → upload dist เป็น artifact |
| **Publish** | download artifact → `pnpm publish` `@apptify-labs/ui` ขึ้น npm |

ถ้า stage ไหน fail จะหยุดทันที — package จะไม่ถูก publish

## ขั้นตอน Release

### 1. ตรวจสอบให้แน่ใจว่าโค้ดพร้อม
- รวม PR เข้า main ครบแล้ว
- CI บน main เขียวหมด
- เลือก version ตาม [SemVer](https://semver.org/):
  - **Patch** (`1.0.0` → `1.0.1`): bug fix, ไม่มี breaking change
  - **Minor** (`1.0.0` → `1.1.0`): เพิ่ม feature, backward compatible
  - **Major** (`1.0.0` → `2.0.0`): breaking change

### 2. รันคำสั่ง Release อัตโนมัติ

คุณสามารถรันคำสั่งเดียวเพื่ออัปเดตเวอร์ชัน, สร้าง commit/tag, และ push ไปที่ GitHub ทันที:

```bash
pnpm release <patch | minor | major | เวอร์ชันระบุตรงๆ>
# ตัวอย่าง:
pnpm release patch
# หรือ:
pnpm release 1.0.4
```

สคริปต์นี้จะทำงานดังนี้:
1. ตรวจสอบว่ากิ่งปัจจุบันคือ `main` และ git working directory สะอาด
2. รัน `npm version` เพื่อแก้เวอร์ชันใน `package.json` พร้อมทำ Git commit & tag
3. รัน `git push origin main --follow-tags` เพื่อส่งขึ้นรีโมทและยิง pipeline release ทันที

---

### สำหรับกรณีต้องการจัดการด้วยตัวเอง (Manual)

1. แก้ไขเวอร์ชันใหม่ใน [package.json](./package.json)
2. Commit + Tag + Push ด้วยคำสั่ง:
```bash
git add package.json
git commit -m "chore: release v1.0.3"

git tag -a v1.0.3 -m "Release v1.0.3"

git push origin main --follow-tags
```

### 4. ตรวจผลที่ GitHub Actions

ไปที่ **Actions tab** ของ repo → ดู workflow run ของ tag — ทั้ง 3 stages ควรเขียวหมด

### 5. ยืนยันว่า publish ขึ้น npm สำเร็จ

```bash
npm view @apptify-labs/ui version
```

ควรเป็น version ใหม่ที่เพิ่ง tag

หรือดูที่:
- https://www.npmjs.com/package/@apptify-labs/ui

## Configuration ที่ต้องตั้งครั้งเดียว

### npm Access Token

GitHub repo → Settings → Secrets and variables → Actions ต้องมี secret ชื่อ `NPM_TOKEN`

**สำคัญ:** ต้องเป็น **Automation Token** หรือ **Granular Access Token ที่อนุญาตให้ bypass 2FA** ไม่งั้น publish จะ fail ที่ OTP check

วิธีสร้าง token:
1. npmjs.com → Settings → Access Tokens → Generate New Token → Classic Token
2. เลือกแบบ **Automation** (จะ bypass 2FA ให้อัตโนมัติ)
3. Copy token แล้วเอาไปวางใน GitHub secret `NPM_TOKEN`

## Troubleshooting

### `ERR_PNPM_OTP_NON_INTERACTIVE`
Token ที่ใช้บังคับให้ใส่ OTP — สร้าง Automation token ใหม่ (ดูด้านบน)

### `ERR_PNPM_CANNOT_RESOLVE_WORKSPACE_PROTOCOL`
publish job ขาด `pnpm install` ทำให้ resolve `workspace:*` ไม่ได้ — ดูใน [release.yml](./.github/workflows/release.yml) ต้องมี step `pnpm install --frozen-lockfile` ก่อน publish

### Publish fail
หาก publish ล้มเหลว (เช่น ชื่อ version ชน หรือปัญหาเครือข่าย) จะไม่สามารถ publish version เดิมซ้ำได้ ต้อง **bump เป็น version ถัดไป** แล้ว release ใหม่ (npm policy: ห้าม publish ทับ + unpublish ได้เฉพาะภายใน 72 ชม.)

### Version บน npm ไม่อัพเดท (ดูจากหน้าเว็บ)
หน้าเว็บ npmjs.com มี CDN cache ~5-10 นาที — ตรวจด้วย `npm view <package> versions` แทนจะแม่นกว่า

## ดูประวัติ Release

- Git tags: `git tag -l`
- GitHub Releases: https://github.com/ApptifyTeam/UIFramework/releases
- npm versions: `npm view @apptify-labs/ui versions`
