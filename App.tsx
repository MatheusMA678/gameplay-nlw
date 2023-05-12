import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { Routes } from "./src/Routes";

export default function App() {
  const [isLoaded] = useFonts({
    Rajdhani: require("./src/fonts/Rajdhani/Rajdhani-Bold.ttf"),
    Inter: require("./src/fonts/Inter/Inter-Regular.ttf"),
  });

  if (!isLoaded) {
    return;
  }

  return (
    <NavigationContainer>
      <Routes />
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={"transparent"}
      />
    </NavigationContainer>
  );
}
