/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

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

export const Colors = {

  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },

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

