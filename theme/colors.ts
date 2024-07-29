const customColors = {
  primary: "#00ff85",       // New primary color
  secondary: "#5c3e80",     // New secondary color
  accent: "#edff32",        // New accent color
  highlight: "#07f1ff",     // New highlight color
};

const tailwindColors = {
  black: "#000",
  white: "#fff",
};

export const colors = {
  drawerColor: "#5363df",
  primary: customColors.primary,
  secondary: customColors.secondary,
  text: "rgba(12, 13, 52, 0.7)",
  grey: "rgba(12, 13, 52, 0.05)",
  darkGrey: "#8A8D90",
  danger: "#FF0058",
  primaryLight: "#E7F9F7",
  default: "rgba(12, 13, 52, 0.05)",
  accent: customColors.accent,
  highlight: customColors.highlight,

  // Tailwind colors
  ...tailwindColors,
};

export const darkColors = {
  primary: customColors.primary,
  secondary: customColors.secondary,
  text: "rgba(255, 255, 255, 0.7)",
  grey: "#BEC1D2",
  darkGrey: "#8A8D90",
  danger: "#FF0058",
  primaryLight: "#E7F9F7",
  default: "rgba(12, 13, 52, 0.05)",
  accent: customColors.accent,
  highlight: customColors.highlight,

  // Tailwind colors
  ...tailwindColors,
};
