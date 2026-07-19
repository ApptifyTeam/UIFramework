---
name: "Apptify UI - Example Consumer App"
version: "1.0.0"
package: "example-app"
description: "Reference implementation and templates for consuming @apptify-labs/ui"
---

# Overview

This `example` directory acts as a mock real-world application (a consumer) for the `@apptify-labs/ui` framework. Its primary goal is to serve as a comprehensive reference implementation so developers can easily copy design patterns, layouts, and page structures that are guaranteed to work correctly out-of-the-box.

By exploring this application, you can see exactly how to compose pages from the framework components, manage layouts, and handle routing using the Next.js App Router. This ensures that anyone consuming the framework can copy templates from here and achieve a pixel-perfect, consistent result immediately.

---

# Architectural Pattern: Atomic Design (Consumer Guidelines)

We strictly follow the **Atomic Design** philosophy to maintain clear boundaries between the UI library (the framework) and the application (the consumer).

### Strict Component Boundaries

1. **Framework Responsibilities (Atoms, Molecules, Organisms)**
   - **Atoms** (e.g., Buttons, Inputs, Badges), **Molecules** (e.g., Form Fields, SearchBars), and **Organisms** (e.g., Sidebars, DataTables, complex widget cards) **MUST** be created and maintained within the `@apptify-labs/ui` framework.
   - If a new UI element, widget, or layout component is needed, it must be added to the framework package to ensure design consistency and reusability across all projects.

2. **Application Responsibilities (Templates, Pages)**
   - **Templates** (Layouts, structural page skeletons) and **Pages** (Route-specific content views) **MUST** be created in this `example` application.
   - The application acts strictly as an orchestrator. It places Organisms and Molecules onto a Page.
   - **Do not** build complex compound UI components directly inside the `example` app using raw HTML/divs or basic primitives. If you find yourself composing complex interactive elements here, they should be extracted, generalized, and migrated to the framework as a Molecule or Organism.

---

# 🤖 Strict Rules for AI Coding Agents

To maintain a systemic and scalable architecture, all AI assistants and coding agents **MUST** adhere to the following rules when modifying or extending this `example` application:

### 1. The "Framework First" Mandate
- **DO NOT** create any new UI components (Atoms, Molecules, or Organisms) inside the `example/` folder.
- If the user asks for a new UI feature (e.g., a "Pricing Card" or a "User Avatar Stack"), you **must** build the component inside the `/framework/` package and export it, then import it into the `example` app.
- Every piece of the UI must be rendered using components imported from `@apptify-labs/ui`. Avoid using raw HTML tags (`<div>`, `<span>`) for complex UI structures in pages.

### 2. Absolute Visual Consistency
- **No Inline Styles or Custom Classes:** Do not invent new Tailwind classes that deviate from the design system. Never use arbitrary pixel values (e.g., `w-[325px]`, `text-[#ff0000]`).
- **Use Defined Tokens:** Always map spacing, colors, and typography to the framework's existing design tokens (e.g., `p-6`, `text-primary-500`, `rounded-xl`).
- Ensure that paddings, margins, grid gaps, and card styles are identical across every page in the application.

### 3. Systemic Thinking
- Before generating code for a page, **analyze the existing framework components**. Reuse existing abstractions rather than building bespoke solutions.
- If a requested page layout requires a complex structural element (like a multi-step form wizard), build the logic and styling inside the framework first, then consume it in the page.

---

# Design Token Consistency

Even though this is the consumer application, it must respect the design tokens (Colors, Typography, Spacing, Border Radius, and Shadows) established in the framework's `DESIGN.md`. 

- **No Custom Styles:** Do not introduce custom colors, arbitrary pixel values, or unapproved fonts.
- **Use the Theme:** Always use the predefined Tailwind CSS classes and CSS custom properties (e.g., `text-primary-500`, `bg-card`, `rounded-xl`, `p-6`) exposed by the framework.
- **Theme Switching:** The application relies on the framework's CSS variables to seamlessly switch between Light and Dark modes.

---

# How to Use This Example App

1. **Navigate the Routes**: Check the `/app/dashboard` folder to see how nested routing and page layouts are structured. We have mapped out all necessary dummy routes to match the framework's sidebar navigation.
2. **Copy Patterns**: Find a page that looks similar to what you need to build, copy the structure, and replace the data/content.
3. **Verify Compliance**: Ensure your new pages only import UI components from `@apptify-labs/ui` and do not contain inline styles or custom UI widgets that belong in the framework.

### Example Page Composition

To build a page in this application, simply import the required components from the framework and assemble them:

```tsx
import { Card, Typography, Button } from "@apptify-labs/ui";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <Typography variant="h1">Dashboard</Typography>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <Typography variant="h3">Welcome back</Typography>
          <Button variant="primary" className="mt-4">View Analytics</Button>
        </Card>
      </div>
    </div>
  );
}
```
