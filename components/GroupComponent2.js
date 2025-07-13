import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const GroupComponent2 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.rectangleParent, styles.groupChildLayout1]}
      onPress={() => navigation.navigate("Frame5")}
    >
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Text style={[styles.jatibarang, styles.lakePosition]}>Jatibarang</Text>
      <Text style={[styles.lake, styles.lakePosition]}>Lake</Text>
      <Text style={[styles.text, styles.lakePosition]}>$160</Text>
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/group-42.png")}
      />
      <Image
        style={[styles.image11Icon, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChildLayout1: {
    height: 200,
    width: 166,
  },
  groupChildLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  lakePosition: {
    textAlign: "left",
    left: 7,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
    height: 200,
    width: 166,
  },
  jatibarang: {
    top: 135,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    left: 7,
  },
  lake: {
    top: 155,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 7,
  },
  text: {
    top: 172,
    fontSize: FontSize.size_lg,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    left: 7,
  },
  groupItem: {
    top: 164,
    left: 137,
    width: 15,
    height: 15,
    position: "absolute",
  },
  image11Icon: {
    top: 6,
    left: 8,
    width: 150,
    height: 120,
  },
  rectangleParent: {
    top: 489,
    left: 193,
    position: "absolute",
  },
});

export default GroupComponent2;
