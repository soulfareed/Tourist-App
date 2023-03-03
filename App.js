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

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme.colors,
  colors: {
    border: "transparent",
  },
};

function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DestinationDetail" component={DestinationDetail} /> */}
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: Colors.white,
            },
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: sizes.padding }}
                onPress={() => console.log("pressed")}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
