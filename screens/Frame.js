import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.frame1Icon}
      resizeMode="cover"
      source={require("../assets/frame1.png")}
    >
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text
        style={[styles.exploreAndDiscover, styles.startYourJourneyFlexBox]}
      >{`Explore and
Discover new places `}</Text>
      <Pressable
        style={[styles.frame1Child, styles.registerPosition]}
        onPress={() => navigation.navigate("Frame2")}
      />
      <Text style={[styles.startYourJourney, styles.startYourJourneyFlexBox]}>
        Start your journey today with a smarter, safer, and more enriching
        travel experience. Let's make your trip to India unforgettable!"
      </Text>
      <Text style={[styles.register, styles.registerPosition]}>
        Get Started
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  startYourJourneyFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  registerPosition: {
    left: "50%",
    position: "absolute",
  },
  vectorIcon: {
    height: "0.49%",
    width: "1.07%",
    top: "-23.4%",
    right: "86.93%",
    bottom: "122.91%",
    left: "12%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  exploreAndDiscover: {
    height: "11.82%",
    top: "66.5%",
    left: "4.53%",
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.montaguSlab144ptRegular,
    width: "100%",
  },
  frame1Child: {
    marginTop: 322,
    marginLeft: -171.5,
    top: "50%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorGray_500,
    width: 343,
    height: 60,
    opacity: 0.5,
  },
  startYourJourney: {
    height: "12.32%",
    width: "89.33%",
    top: "77.83%",
    left: "5.33%",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
  },
  register: {
    height: "2.83%",
    marginLeft: -90.5,
    top: "91.63%",
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_600,
    textAlign: "center",
    width: 181,
  },
  frame1Icon: {
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default Frame;
