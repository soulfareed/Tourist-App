// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import DestinationDetail from "./screens/DestinationDetail";
import Onboarding from "./screens/Onboardin";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "./constants";
import { icons } from "./constants";
import { Image } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Tabs from "./navigation/tabs";

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme.colors,
  colors: {
    border: "transparent",
  },
};
SplashScreen.preventAutoHideAsync();

function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  React.useEffect(() => {
    onLayoutRootView();
    return () => {};
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer theme={theme}>
      <Tabs />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          title: null,
          headerStyle: {
            backgroundColor: COLORS.white,
          },
          headerLeft: null,
          headerRight: ({ onPress }) => (
            <TouchableOpacity
              style={{ marginRight: SIZES.padding }}
              onPress={() => console.log("Pressed")}
            >
              <Image
                source={icons.barMenu}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </NavigationContainer>
  );
}

export default App;
