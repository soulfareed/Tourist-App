import React from "react";
import { View, Text } from "react-native";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { images } from "../constants";

const Onboarding = () => {
  //Render

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={images.onboardingImage}
          resizeMode="contain"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>

      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      />
      <Text>Onboarding</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
export default Onboarding;
