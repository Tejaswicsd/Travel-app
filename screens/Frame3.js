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
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Frame3 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.frame1Icon}
      resizeMode="cover"
      source={require("../assets/frame11.png")}
    >
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={styles.accountCreatedSucessfully}>{`Account Created 
sucessfully `}</Text>
      <Pressable
        style={[styles.frame1Child, styles.registerPosition]}
        onPress={() => navigation.navigate("Home")}
      />
      <Text
        style={[styles.register, styles.registerPosition]}
      >{`Start Exploring `}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  accountCreatedSucessfully: {
    height: "11.82%",
    top: "66.5%",
    left: "4.53%",
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    fontFamily: FontFamily.montaguSlab144ptSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
    width: "100%",
  },
  frame1Child: {
    marginTop: 278,
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
  register: {
    height: "2.83%",
    marginLeft: -90.5,
    top: "86.33%",
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
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame3;
