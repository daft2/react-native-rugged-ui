import { FontSource } from "expo-font";
import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import useCachedResources from "../hooks/useCachedResources";
import Theme from "../styles/Theme";

type ContextProps = {
  theme: "light" | "dark";
  spacing: typeof Theme["spacing"];
  colors: typeof Theme["colors"];
  fonts: typeof Theme["fonts"];
  setTheme?: (theme: "light" | "dark") => void;
  isDarkMode?: boolean;
};

type ThemeProviderProps = {
  children?: React.ReactNode;
  theme?: "light" | "dark";
  setTheme?: (theme: "light" | "dark") => void;
  isDarkMode?: boolean;
  customFonts?: Record<string, FontSource>;
};

const ThemeContext = React.createContext<ContextProps>({
  theme: "light",
  spacing: Theme.spacing,
  colors: Theme.colors,
  fonts: Theme.fonts
});

const useTheme = () => React.useContext(ThemeContext);

const ThemeProvider = ({
  children,
  customFonts,
  ...props
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ContextProps["theme"]>(
    props.theme || "light"
  );
  const isDarkMode = theme === "dark";

  const isLoadingComplete = useCachedResources({ fonts: customFonts });

  return (
    <ThemeContext.Provider
      value={{
        theme,
        spacing: Theme.spacing,
        colors: Theme.colors,
        fonts: Theme.fonts,
        isDarkMode,
        setTheme
      }}
    >
      {!isLoadingComplete && <LoadingScreen />}
      {isLoadingComplete && children}
    </ThemeContext.Provider>
  );
};

const LoadingScreen = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <ActivityIndicator size={"large"} />
  </View>
);

export { useTheme, ThemeProvider };
