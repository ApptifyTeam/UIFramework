# @apptify-labs/ui

**Shared UI Component Library** by Apptify — React components built on [Radix UI](https://www.radix-ui.com/) + [Tailwind CSS](https://tailwindcss.com/) with integrated design tokens (colors, spacing, typography, radius, shadows) for seamless usage.

This project uses the components and styling principles of [shadcn/ui](https://ui.shadcn.com/) as its base foundation.

> **Architectural Difference**: Traditionally, `shadcn/ui` is designed to have components copied and pasted directly into your repository for full customization. In contrast, `@apptify-labs/ui` packages these shadcn-based components into a versioned **NPM Package** to enforce design system consistency and enable centralized updates across multiple projects.

## Installation

```bash
pnpm add @apptify-labs/ui
# or
npm install @apptify-labs/ui
# or
yarn add @apptify-labs/ui
```

## Setup

### 1. Configure Tailwind CSS

Add the package path to the `content` array of your `tailwind.config.js` to prevent classes from being purged during build:

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

In your main CSS file (e.g., `globals.css` or `index.css`):

```css
@import "@apptify-labs/ui/styles.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Usage (Components and Design Tokens)

You can import both UI components and design tokens from the same package:

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
  Label,
  colors,
} from "@apptify-labs/ui";

export default function LoginForm() {
  return (
    <Card
      className="max-w-md mx-auto mt-10"
      style={{ borderColor: colors.primary[500] }}
    >
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="email@example.com" />
        </div>
      </CardContent>
    </Card>
  );
}
```

## Available Components

- `Card`, `CardHeader`, `CardTitle`, `CardContent` — See [src/components/card](./src/components/card)
- `Input` — See [src/components/input](./src/components/input)
- `Label` — See [src/components/label](./src/components/label)
- `Separator` — See [src/components/separator](./src/components/separator)

Utility:

- `cn(...classes)` — Merge class names using `tailwind-merge` (exported from [src/utils/cn](./src/utils/cn))

## Design Tokens

`@apptify-labs/ui` comes with built-in design tokens exported directly from the package:

| Module                                                    | Description                                                                                                   | Source                                                 |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `colors`                                                  | Brand palette (primary, secondary) + semantic (success, warning, danger, info) with shades from `50` to `900` | [src/tokens/colors.ts](./src/tokens/colors.ts)         |
| `spacing`                                                 | Spacing scale from `0` to `40` (following Tailwind convention) e.g., `spacing[4]` = `1rem`                    | [src/tokens/spacing.ts](./src/tokens/spacing.ts)       |
| `fontFamilies`, `fontSizes`, `fontWeights`, `lineHeights` | Typography configurations for fonts, sizes, weights, and line heights                                         | [src/tokens/typography.ts](./src/tokens/typography.ts) |
| `radius`                                                  | Border radius (`sm`, `md`, `lg`, `xl`, `full`)                                                                | [src/tokens/radius.ts](./src/tokens/radius.ts)         |
| `shadows`                                                 | Box shadow (`sm`, `md`, `lg`, `xl`)                                                                           | [src/tokens/shadows.ts](./src/tokens/shadows.ts)       |

### Using Design Tokens in Code

```ts
import { colors, spacing, radius, shadows, fontSizes } from "@apptify-labs/ui";

const buttonStyle = {
  backgroundColor: colors.primary[500], // "#4B76FF"
  padding: spacing[4], // "1rem"
  borderRadius: radius.md,
  boxShadow: shadows.sm,
  fontSize: fontSizes.base, // "1rem"
};
```

## Customization

- Pass a `className` prop to override any component style instantly — `tailwind-merge` will handle duplicate class conflicts.
- All design tokens (colors, spacing, etc.) are centralized in [src/tokens](./src/tokens) and loaded into `tailwind.config.js` via `jiti`, allowing you to customize them in a single place.

## Development

See the [monorepo development guide](../../README.md#development) for the basic setup.

Inside this folder:

```bash
pnpm dev               # watch build
pnpm build             # one-shot build
pnpm lint              # type-check
pnpm storybook         # run Storybook on port 6006
pnpm build-storybook   # build static storybook
pnpm release patch     # release new patch version
```

## Release

See [RELEASING.md](../../RELEASING.md) — Every release is triggered via GitHub Actions by pushing a git tag.
