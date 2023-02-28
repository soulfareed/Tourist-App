import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Home = () => {
  let navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.push("Onboarding");
        }}
      >
        <Text>Go To Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
