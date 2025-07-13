import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Bookings1 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.bookingsIcon}
      resizeMode="cover"
      source={require("../assets/bookings.png")}
    >
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Pressable
        style={[styles.bookingsChild, styles.bookingsLayout]}
        onPress={() => navigation.navigate("Home")}
      />
      <View style={[styles.bookingsItem, styles.bookingsLayout1]} />
      <Text
        style={[styles.bookingInProcess, styles.weWillLetTypo]}
      >{`Booking in Process `}</Text>
      <Text
        style={[styles.weWillLet, styles.weWillLetTypo]}
      >{`We will let you know 
once it is confirmed `}</Text>
      <Image
        style={[styles.bookingsInner, styles.bookingsLayout]}
        contentFit="cover"
        source={require("../assets/group-58.png")}
      />
      <Text
        style={[styles.backToHome, styles.weWillLetTypo]}
      >{`Back to Home `}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bookingsLayout: {
    height: 50,
    position: "absolute",
  },
  bookingsLayout1: {
    width: 343,
    left: 16,
  },
  weWillLetTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
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
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bookingsChild: {
    top: 732,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_200,
    width: 343,
    left: 16,
  },
  bookingsItem: {
    top: 129,
    borderRadius: 25,
    backgroundColor: "rgba(217, 217, 217, 0.8)",
    height: 250,
    position: "absolute",
  },
  bookingInProcess: {
    top: 225,
    left: 36,
    fontSize: 30,
    width: 306,
    height: 132,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  weWillLet: {
    top: 281,
    left: 40,
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  bookingsInner: {
    top: 153,
    left: 163,
    width: 50,
  },
  backToHome: {
    top: 748,
    left: 137,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  bookingsIcon: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Bookings1;
