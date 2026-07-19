<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 🚨 MUST READ: UI Framework & Atomic Design Rules

Whenever you (the AI agent) are asked to create a new page, build a new UI, or modify existing user interfaces within this `example` application, you **MUST** read and adhere to the guidelines specified in `DESIGN.md`.

**File to read before proceeding:** `DESIGN.md`

### Core Mandates:
1. **Framework First:** You are strictly **forbidden** from creating new component types (Atoms, Molecules, Organisms) directly within the `example` app. If a new UI component is needed, it must be created in the `@apptify-labs/ui` framework first.
2. **Page Composition:** This `example` app is only for creating **Templates** and **Pages**. You must build pages by importing and composing components strictly from the `@apptify-labs/ui` framework.
3. **Absolute Consistency:** You must strictly follow the Design Tokens (Colors, Typography, Spacing). Do not introduce inline styles, arbitrary pixel values, or raw HTML wrappers (`<div>`, `<span>`) where a framework component should be used.
