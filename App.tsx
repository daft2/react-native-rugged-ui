import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import { ThemeProvider } from "./src/provider/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <StatusBar />
        <Navigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
