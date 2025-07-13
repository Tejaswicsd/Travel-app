import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import RectangleComponent from "../components/RectangleComponent";
import GroupComponent from "../components/GroupComponent";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Frame4 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.vectorParent}
      resizeMode="cover"
      source={require("../assets/frame4.png")}
    >
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/rectangle-22.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.confirmPassword}>{`Confirm Password `}</Text>
        <Image
          style={styles.glyphssmalleyeIcon}
          contentFit="cover"
          source={require("../assets/glyphssmalleye.png")}
        />
        <RectangleComponent email="Name " emailTop={35} emailLeft={8} />
        <View style={[styles.groupItem, styles.groupItemPosition]} />
        <GroupComponent phoneNumber="Phone Number " />
        <GroupComponent phoneNumber="Password" propTop={168} />
        <View style={[styles.instanceWrapper, styles.rectangleGroupLayout]}>
          <View style={[styles.rectangleGroup, styles.rectangleGroupLayout]}>
            <View style={[styles.instanceChild, styles.groupItemPosition]} />
            <Text style={[styles.email, styles.emailTypo]}>Email</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.continue}
        onPress={() => navigation.navigate("Frame3")}
      >
        <Text style={[styles.continue1, styles.emailTypo]}>{`Continue `}</Text>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    width: 343,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    top: 0,
  },
  groupItemPosition: {
    backgroundColor: Color.colorGray_300,
    left: "0%",
    bottom: "0%",
    right: "0%",
    borderRadius: Border.br_3xs,
    position: "absolute",
    width: "100%",
  },
  rectangleGroupLayout: {
    height: 49,
    width: 326,
    position: "absolute",
  },
  emailTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  frameChild: {
    height: "6.03%",
    width: "86.93%",
    top: "116.07%",
    right: "10.4%",
    bottom: "-22.11%",
    left: "2.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: Border.br_3xs,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    borderRadius: Border.br_11xl,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    height: 311,
    width: 343,
    position: "absolute",
  },
  confirmPassword: {
    marginLeft: -149.5,
    top: 244,
    left: "50%",
    fontSize: FontSize.size_mid,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    textAlign: "left",
    color: Color.colorGainsboro_200,
    position: "absolute",
  },
  glyphssmalleyeIcon: {
    top: 180,
    left: 292,
    width: 24,
    height: 24,
    position: "absolute",
  },
  groupItem: {
    height: "12.56%",
    top: "87.44%",
  },
  instanceChild: {
    height: "100%",
    top: "0%",
  },
  email: {
    height: "38.78%",
    width: "17.48%",
    top: "32.65%",
    left: "4.91%",
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    display: "none",
    color: Color.colorGainsboro_200,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  instanceWrapper: {
    top: 231,
    left: 8,
  },
  rectangleParent: {
    top: 396,
    left: 16,
    height: 390,
  },
  continue1: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorWhite,
  },
  continue: {
    left: 146,
    top: 752,
    position: "absolute",
  },
  vectorParent: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame4;
