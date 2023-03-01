import type { ColorsOptions } from "../types/index";

type ThemeProp = {
  spacing: {
    [key: string]: number | undefined;
  };
  colors: {
    [key in ColorsOptions]: string;
  };
  fonts: {
    [key: string]: string;
  };
};

const Theme: ThemeProp = {
  spacing: {
    none: undefined,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 20,
    xl: 28,
    "2xl": 38,
    "3xl": 48,
    "4xl": 50,
    "5xl": 62
  },
  colors: {
    // pastel
    red: "#ffadad",
    orange: "#ffd6a5",
    yellow: "#fdffb6",
    green: "#caffbf",
    blue: "#9bf6ff",
    violet: "#a0c4ff",
    purple: "#bdb2ff",
    pink: "#ffc6ff",
    // monochrome
    white: "#ffffff",
    black: "#000000",
    dark: "#25283d",
    neutral: "#fcfcfc",
    stone: "#fff9ec",
    charcoal: "#2e4057",
    // system
    info: "#083d77",
    danger: "#ff3c38",
    warning: "#F4D35E",
    success: "#64F58D",
    transparent: "transparent"
  },
  fonts: {
    Satoshi700: "satoshi-bold",
    Switzer100: "switzer-light",
    Switzer200: "switzer-medium",
    Switzer300: "switzer-regular"
  }
};

export default Theme;
