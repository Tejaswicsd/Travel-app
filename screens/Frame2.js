import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import RectangleComponent from "../components/RectangleComponent";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Frame2 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.rectangleParent}
      resizeMode="cover"
      source={require("../assets/frame3.png")}
    >
      <View style={[styles.frameChild, styles.frameLayout]} />
      <RectangleComponent email="Email" />
      <View style={[styles.instanceParent, styles.frameItemLayout]}>
        <View style={[styles.rectangleGroup, styles.frameItemLayout]}>
          <View style={styles.instanceChild} />
          <Text style={[styles.email, styles.emailTypo]}>Email</Text>
        </View>
        <Text style={[styles.password, styles.emailTypo]}>Password</Text>
        <Image
          style={[styles.glyphssmalleyeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/glyphssmalleye.png")}
        />
      </View>
      <Pressable
        style={[styles.frameItem, styles.frameItemLayout]}
        onPress={() => navigation.navigate("Home")}
      />
      <Text style={[styles.logIn, styles.logInClr]}>{`Log In `}</Text>
      <Pressable
        style={styles.notYetAContainer}
        onPress={() => navigation.navigate("Frame4")}
      >
        <Text style={styles.text}>
          <Text style={styles.notYetA}>Not yet a member?</Text>
          <Text style={styles.signTypo}>
            <Text style={styles.text1}>{` `}</Text>
            <Text style={styles.signUp1}>Sign Up</Text>
          </Text>
        </Text>
      </Pressable>
      <Image
        style={[styles.frameInner, styles.lineViewPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Text style={[styles.facebook, styles.googleTypo]}>Facebook</Text>
      <Image
        style={[styles.glyphssmallgoogleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/glyphssmallgoogle.png")}
      />
      <Text style={[styles.google, styles.googleTypo]}>Google</Text>
      <Image
        style={[styles.glyphssmallfacebookIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/glyphssmallfacebook.png")}
      />
      <View style={[styles.lineView, styles.lineViewPosition]} />
      <Text style={[styles.orSignUp, styles.signTypo]}>or sign up with</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 343,
    left: 16,
  },
  frameItemLayout: {
    width: 326,
    position: "absolute",
  },
  emailTypo: {
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGainsboro_200,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  logInClr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  lineViewPosition: {
    top: 749,
    position: "absolute",
  },
  googleTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  signTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  frameChild: {
    top: 420,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGray_200,
    height: 300,
    position: "absolute",
  },
  instanceChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_3xs,
    position: "absolute",
    width: "100%",
  },
  email: {
    height: "38.78%",
    width: "17.48%",
    top: "32.65%",
    left: "4.91%",
    display: "none",
    textAlign: "left",
    color: Color.colorGainsboro_200,
  },
  rectangleGroup: {
    top: 0,
    left: 0,
    height: 49,
  },
  password: {
    top: 16,
    left: 12,
    textAlign: "left",
    color: Color.colorGainsboro_200,
  },
  glyphssmalleyeIcon: {
    top: 11,
    left: 284,
  },
  instanceParent: {
    top: 526,
    height: 49,
    left: 24,
    width: 326,
  },
  frameItem: {
    top: 591,
    backgroundColor: Color.colorWhite,
    height: 48,
    borderRadius: Border.br_3xs,
    left: 24,
    width: 326,
  },
  logIn: {
    marginLeft: -28.5,
    top: 604,
    left: "50%",
    fontSize: FontSize.size_mid,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
  },
  notYetA: {
    fontFamily: FontFamily.robotoRegular,
    color: "rgba(217, 217, 217, 0.5)",
  },
  text1: {
    color: Color.colorGainsboro_200,
  },
  signUp1: {
    color: Color.colorGainsboro_100,
  },
  text: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  notYetAContainer: {
    top: 655,
    left: 69,
    position: "absolute",
  },
  frameInner: {
    height: 84,
    borderRadius: Border.br_3xs,
    width: 343,
    left: 16,
  },
  facebook: {
    left: 244,
    top: 762,
  },
  glyphssmallgoogleIcon: {
    left: 38,
    top: 762,
  },
  google: {
    top: 763,
    left: 69,
  },
  glyphssmallfacebookIcon: {
    top: 761,
    left: 212,
  },
  lineView: {
    left: 179,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderRightWidth: 1,
    width: 1,
    height: 49,
  },
  orSignUp: {
    top: 727,
    left: 128,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame2;
