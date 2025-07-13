import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Frame1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame2}>
      <Image
        style={[styles.whatsappImage20240901At1, styles.rectangleViewLayout]}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240901-at-122946-d750a8fe-1.png")}
      />
      <Text style={[styles.mysorePalace, styles.mysoreTypo]}>
        Mysore Palace
      </Text>
      <View style={[styles.frame2Child, styles.frame2Layout]} />
      <View style={[styles.frame2Item, styles.frame2Layout]} />
      <View style={[styles.frame2Inner, styles.frame2Layout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={styles.groupParent}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/group-30.png")}
        />
        <Pressable
          style={[styles.rectangleParent, styles.groupItemLayout]}
          onPress={() => navigation.navigate("Bookings")}
        >
          <View style={[styles.groupItem, styles.groupItemLayout]} />
          <Text style={styles.bookNow}>{`Book now `}</Text>
        </Pressable>
      </View>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-36.png")}
      />
      <Image
        style={[styles.frame2Child1, styles.frame2ChildLayout]}
        contentFit="cover"
        source={require("../assets/group-37.png")}
      />
      <Image
        style={[styles.frame2Child2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-38.png")}
      />
      <Image
        style={[styles.frame2Child2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-38.png")}
      />
      <Text style={[styles.text, styles.hTypo]}>$230</Text>
      <Text style={[styles.h, styles.hTypo]}>5.4h</Text>
      <Text style={[styles.k, styles.hTypo]}>3.2k</Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-9.png")}
        />
      </Pressable>
      <Image
        style={[styles.ellipseIcon, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Image
        style={[styles.frame2Child4, styles.frame2ChildLayout]}
        contentFit="cover"
        source={require("../assets/group-40.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.mysorePalaceIs, styles.mysoreTypo]}>
        Mysore Palace is a magnificent royal residence in Karnataka, renowned
        for its stunning architecture, rich history, and vibrant illumination
        during the Dasara festival.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
    width: 375,
    position: "absolute",
  },
  mysoreTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  frame2Layout: {
    height: 110,
    width: 80,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_base,
    top: 518,
    position: "absolute",
  },
  groupItemLayout: {
    width: 231,
    top: 0,
    height: 50,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frame2ChildLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  hTypo: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_mini,
    top: 595,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  wrapperLayout: {
    height: 40,
    width: 40,
    top: 36,
    position: "absolute",
  },
  whatsappImage20240901At1: {
    top: 1,
    left: 2,
    borderBottomRightRadius: Border.br_21xl,
    borderBottomLeftRadius: Border.br_21xl,
    height: 439,
  },
  mysorePalace: {
    top: 480,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 16,
  },
  frame2Child: {
    left: 16,
    width: 80,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_base,
    top: 518,
  },
  frame2Item: {
    left: 148,
  },
  frame2Inner: {
    left: 279,
  },
  rectangleView: {
    top: 669,
    height: 143,
    left: 0,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  groupChild: {
    width: 50,
    top: 0,
    height: 50,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorCadetblue,
    left: 0,
  },
  bookNow: {
    right: 68,
    bottom: 13,
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rectangleParent: {
    left: 94,
  },
  groupParent: {
    top: 744,
    left: 28,
    width: 325,
    height: 50,
    position: "absolute",
  },
  groupIcon: {
    width: "3.47%",
    right: "48.27%",
    bottom: "31.65%",
    left: "48.27%",
    top: "66.13%",
    maxWidth: "100%",
    height: "2.22%",
  },
  frame2Child1: {
    top: 537,
    left: 41,
  },
  frame2Child2: {
    height: "2.34%",
    width: "5.33%",
    right: "12.27%",
    bottom: "31.53%",
    left: "82.4%",
    top: "66.13%",
    maxWidth: "100%",
  },
  text: {
    left: 35,
  },
  h: {
    left: 172,
  },
  k: {
    left: 303,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 32,
  },
  ellipseIcon: {
    left: 306,
  },
  frame2Child4: {
    top: 44,
    left: 40,
  },
  vectorIcon: {
    width: "3.73%",
    top: "5.79%",
    right: "11.2%",
    bottom: "92%",
    left: "85.07%",
    height: "2.22%",
  },
  mysorePalaceIs: {
    top: 644,
    left: 23,
    fontSize: FontSize.size_base,
    color: Color.colorSilver,
    width: 343,
  },
  frame2: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGainsboro_100,
  },
});

export default Frame1;
