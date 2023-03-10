import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Home = () => {
  let navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Onboarding");
        }}
      >
        <Text>Go to Home page </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
