import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import useCachedResources from "../hooks/useCachedResources";

type ContextProps = {
  theme: "light" | "dark";
  setTheme?: (theme: "light" | "dark") => void;
  isDarkMode?: boolean;
  fonts?: any;
};

type ThemeProviderProps = ContextProps & {
  children?: React.ReactNode;
};

const ThemeContext = React.createContext<ContextProps>({
  theme: "light"
});

const useTheme = () => React.useContext(ThemeContext);

const ThemeProvider = ({ children, fonts, ...props }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ContextProps["theme"]>(props.theme);
  const isDarkMode = theme === "dark";

  const isLoadingComplete = useCachedResources({ fonts: fonts });

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, setTheme }}>
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
