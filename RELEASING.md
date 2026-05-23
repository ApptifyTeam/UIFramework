# Releasing

คู่มือการ release version ใหม่ของ `@apptify-labs/tokens` และ `@apptify-labs/ui`

## Overview

Release triggered โดย **git tag** ที่มี prefix `v*` — เช่น push tag `v1.0.3` จะให้ GitHub Actions publish ทั้ง 2 packages เป็น version `1.0.3` ขึ้น npm อัตโนมัติ

ทั้ง 2 packages share version เดียวกันเสมอ (lockstep release)

## Release Pipeline

`.github/workflows/release.yml` แยกเป็น 3 stages:

```
Lint → Build → Publish to npm
```

| Stage | ทำอะไร |
|---|---|
| **Lint** | `pnpm install` + `pnpm lint` (type-check) |
| **Build** | bump version จาก git tag → `pnpm build` → upload dist เป็น artifact |
| **Publish** | download artifact → `pnpm publish` ทั้ง 2 packages ขึ้น npm |

ถ้า stage ไหน fail จะหยุดทันที — packages จะไม่ถูก publish

## ขั้นตอน Release

### 1. ตรวจสอบให้แน่ใจว่าโค้ดพร้อม
- รวม PR เข้า main ครบแล้ว
- CI บน main เขียวหมด
- เลือก version ตาม [SemVer](https://semver.org/):
  - **Patch** (`1.0.0` → `1.0.1`): bug fix, ไม่มี breaking change
  - **Minor** (`1.0.0` → `1.1.0`): เพิ่ม feature, backward compatible
  - **Major** (`1.0.0` → `2.0.0`): breaking change

### 2. Bump version ใน package.json

แก้ทั้ง 2 ไฟล์ให้เป็น version ใหม่:
- [packages/ui/package.json](./packages/ui/package.json)
- [packages/tokens/package.json](./packages/tokens/package.json)

```jsonc
{
  "name": "@apptify-labs/ui",
  "version": "1.0.3",   // ← เปลี่ยนตรงนี้
  // ...
}
```

### 3. Commit + Tag + Push

```bash
git add packages/ui/package.json packages/tokens/package.json
git commit -m "chore: release v1.0.3"

git tag -a v1.0.3 -m "Release v1.0.3"

git push origin main --follow-tags
```

หรือถ้าอยากให้ CI บน main รันแยกจาก release (ดู workflow ทีละตัว):
```bash
git push origin main       # ยิง ci.yml
# รอ CI ผ่าน
git push origin v1.0.3     # ยิง release.yml
```

### 4. ตรวจผลที่ GitHub Actions

ไปที่ **Actions tab** ของ repo → ดู workflow run ของ tag — ทั้ง 3 stages ควรเขียวหมด

### 5. ยืนยันว่า publish ขึ้น npm สำเร็จ

```bash
npm view @apptify-labs/ui version
npm view @apptify-labs/tokens version
```

ทั้งคู่ควรเป็น version ใหม่ที่เพิ่ง tag

หรือดูที่:
- https://www.npmjs.com/package/@apptify-labs/ui
- https://www.npmjs.com/package/@apptify-labs/tokens

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

### Publish สำเร็จแค่บาง package
ถ้า `tokens` publish แล้วแต่ `ui` fail (เช่นที่เคยเกิดใน v1.0.1) — จะไม่สามารถ publish version เดิมซ้ำได้ ต้อง **bump เป็น version ถัดไป** แล้ว release ใหม่ (npm policy: ห้าม publish ทับ + unpublish ได้เฉพาะภายใน 72 ชม.)

### Version บน npm ไม่อัพเดท (ดูจากหน้าเว็บ)
หน้าเว็บ npmjs.com มี CDN cache ~5-10 นาที — ตรวจด้วย `npm view <package> versions` แทนจะแม่นกว่า

## ดูประวัติ Release

- Git tags: `git tag -l`
- GitHub Releases: https://github.com/ApptifyTeam/UIFramework/releases
- npm versions: `npm view @apptify-labs/ui versions`
