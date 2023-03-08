import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens";
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
    <Tab.Navigator>
      tabBarOption={tabBarOption}
      screenOptions=
      {({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColors = focused ? COLORS.white : COLORS.gray;

          switch (route.name) {
            case "Home":
              return (
                <Image
                  source={icons.Home}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColors,
                    height: 25,
                    width: 25,
                  }}
                />
              );
            case "Search":
              return (
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    height: 25,
                    width: 25,
                  }}
                />
              );
            case "Bookmark":
              return (
                <Image
                  source={icons.bookmark}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
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
                    tintColor: tintColor,
                    height: 25,
                    width: 25,
                  }}
                />
              );
          }
        },
      })}
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Bookmark" component={Search} />
      <Tab.Screen name="Account" component={Search} />
    </Tab.Navigator>
  );
};

export default Tabs;
