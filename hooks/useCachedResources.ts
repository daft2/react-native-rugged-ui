import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import { FontSource } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

type CacheResourcesType = {
  fonts?: Record<string, FontSource>;
};

export default function useCachedResources({ fonts }: CacheResourcesType) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "satoshi-bold": require("../assets/fonts/Satoshi-Bold.otf"),
          "switzer-light": require("../assets/fonts/Switzer-Light.otf"),
          "switzer-medium": require("../assets/fonts/Switzer-Medium.otf"),
          "switzer-regular": require("../assets/fonts/Switzer-Regular.otf"),
          ...fonts
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
