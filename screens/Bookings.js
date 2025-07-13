import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Bookings = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.bookingsIcon}
      resizeMode="cover"
      source={require("../assets/bookings1.png")}
    >
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-271.png")}
        />
      </Pressable>
      <Image
        style={[styles.bookingsChild, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-71.png")}
      />
      <Image
        style={[styles.bookingsItem, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.bookingsInner, styles.bookingsChildLayout]} />
      <View style={[styles.rectangleView, styles.bookingsChildLayout]} />
      <View style={[styles.bookingsChild1, styles.bookingsChildLayout]} />
      <View style={[styles.bookingsChild2, styles.bookingsChildLayout]} />
      <Pressable
        style={[styles.rectanglePressable, styles.bookingsChildLayout]}
        onPress={() => navigation.navigate("Bookings1")}
      />
      <Text style={[styles.name, styles.nameTypo]}>{`Name `}</Text>
      <Text
        style={[styles.phoneNumber, styles.nameTypo]}
      >{`Phone Number `}</Text>
      <Text style={[styles.email, styles.nameTypo]}>{`Email `}</Text>
      <Text style={[styles.vehicle, styles.nameTypo]}>{`vehicle `}</Text>
      <Text
        style={[styles.continueToBook, styles.nameTypo]}
      >{`Continue to Book `}</Text>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-57.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  groupIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  bookingsChildLayout: {
    height: 50,
    width: 343,
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_3xs,
    left: 16,
    position: "absolute",
  },
  nameTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 26,
    left: 16,
    height: 40,
    width: 40,
  },
  bookingsChild: {
    top: 27,
    left: 319,
  },
  bookingsItem: {
    top: 35,
    left: 327,
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
  bookingsInner: {
    top: 128,
  },
  rectangleView: {
    top: 193,
  },
  bookingsChild1: {
    top: 258,
  },
  bookingsChild2: {
    top: 323,
  },
  rectanglePressable: {
    top: 732,
  },
  name: {
    top: 144,
    left: 43,
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  phoneNumber: {
    top: 209,
    left: 43,
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  email: {
    top: 274,
    left: 43,
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  vehicle: {
    top: 337,
    left: 43,
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  continueToBook: {
    top: 748,
    left: 124,
  },
  groupIcon: {
    top: 336,
    left: 321,
  },
  bookingsIcon: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Bookings;
