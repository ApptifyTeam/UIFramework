export const colors = {
  // Brand Colors
  primary: {
    50: "#EEF9FB",
    100: "#D5F0F6",
    200: "#ABE1ED",
    300: "#80D2E4",
    400: "#54C2DF",
    500: "#54C2DF", // Main brand - Sky Cyan (using 500 as default)
    600: "#3AADC9",
    700: "#2D8FA6",
    800: "#246F82",
    900: "#1A4F5E",
  },
  secondary: {
    50: "#FEF7EC",
    100: "#FDECD0",
    200: "#FBDAA3",
    300: "#F7C77C",
    400: "#F3B255",
    500: "#F3B255", // Main secondary - Warm Orange
    600: "#DA9A3E",
    700: "#B87E2F",
    800: "#946324",
    900: "#70491A",
  },

  // Semantic Colors
  success: {
    50: "#ECFDF5",
    100: "#D1FAE5",
    500: "#10B981", // Emerald
    600: "#059669",
    700: "#047857",
  },
  warning: {
    50: "#FFFBEB",
    100: "#FEF3C7",
    500: "#F59E0B", // Amber
    600: "#D97706",
    700: "#B45309",
  },
  danger: {
    50: "#FEF2F2",
    100: "#FEE2E2",
    500: "#EF4444", // Rose-Red
    600: "#DC2626",
    700: "#B91C1C",
  },
  info: {
    50: "#F0F9FF",
    100: "#E0F2FE",
    500: "#0EA5E9", // Sky
    600: "#0284C7",
    700: "#0369A1",
  },

  // Neutral Scales (Blue-Grey for Dark Theme Support)
  neutral: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#384C66", // Lighter border / UI elements
    800: "#27374D", // Adapted for card backgrounds in dark mode
    900: "#1F2C3D", // Adapted for main app background in dark mode
    950: "#151E2B", // Deepest dark for muted/hollow tracks
  }
} as const;
