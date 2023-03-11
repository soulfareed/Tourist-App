import React, { cloneElement } from "react";
import { View, Text } from "react-native";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { images, SIZES, FONTS, COLORS } from "../constants";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
  //Render
  let navigation = useNavigation();
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

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{ alignContent: "center", marginHorizontal: SIZES.padding }}
        >
          <Text style={{ textAlign: "center", ...FONTS.h2 }}>
            {" "}
            Digital Tickets
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              marginTop: SIZES.padding,
              textAlign: "center",
              ...FONTS.body3,
            }}
          >
            Easy solutions to buy tickets for your travel, bussiness
            trips,transportation,lodging and culinary
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.shadow,
            {
              marginTop: SIZES.padding * 2,
              width: "70%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
          onPress={() => navigation.navigate("Home")}
        >
          <LinearGradient
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
            colors={["#46aeff", "#5884ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Start </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* <Text>Onboarding</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default Onboarding;
