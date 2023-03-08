import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { Home } from "../screens";
import Home from "../screens/Home";
import DestinationDetail from "../screens/DestinationDetail";
import Onboarding from "../screens/Onboardin";
import { COLORS, icons } from "../constants";

const Tab = createBottomTabNavigator();

const tabBarOption = () => {
  showLabel: false;
  style: {
    height: 90;
    shadowColor: "#7F5DF0";
    shadowOffset: {
      width: 0;
      height: 10;
    }
    shadowOpacity: 0.53;
    shadowRadius: 13.97;

    elevation: 21;
  }
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOption={tabBarOption}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const tintColors = focused ? COLORS.black : COLORS.gray;

          switch (route.name) {
            case "Home":
              return (
                <Image
                  source={icons.home}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColors,
                    height: 25,
                    width: 25,
                  }}
                />
              );
            case "DestinationDetail":
              return (
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColors,
                    height: 25,
                    width: 25,
                  }}
                />
              );
            case "Onboarding":
              return (
                <Image
                  source={icons.bookmark}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColors,
                    height: 25,
                    width: 25,
                  }}
                />
              );
            case "Account":
              return (
                <Image
                  source={icons.user}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColors,
                    height: 25,
                    width: 25,
                  }}
                />
              );
          }
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="DestinationDetail" component={DestinationDetail} />
      <Tab.Screen name="Onboarding" component={Onboarding} />
      {/* <Tab.Screen name="Account" component={Search} /> */}
    </Tab.Navigator>
  );
};

export default Tabs;
