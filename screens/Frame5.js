import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Frame5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame2}>
      <View style={[styles.frame2Child, styles.frame2Layout]} />
      <View style={[styles.frame2Item, styles.frame2Layout]} />
      <View style={[styles.frame2Inner, styles.frame2Layout]} />
      <View style={styles.rectangleView} />
      <Text style={styles.vagamonIsA}>
        Vagamon is a tranquil hill station nestled near the border of Kottayam
        and Idukki districts in Kerala. Offering a serene retreat from the
        hustle and bustle of city life.
      </Text>
      <Pressable
        style={styles.groupParent}
        onPress={() => navigation.navigate("Bookings")}
      >
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/group-30.png")}
        />
        <View style={[styles.rectangleParent, styles.groupItemLayout]}>
          <View style={[styles.groupItem, styles.groupItemLayout]} />
          <Text style={styles.bookNow}>{`Book now `}</Text>
        </View>
      </Pressable>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-36.png")}
      />
      <Image
        style={styles.frame2Child1}
        contentFit="cover"
        source={require("../assets/group-37.png")}
      />
      <Image
        style={[styles.frame2Child2, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-38.png")}
      />
      <Image
        style={[styles.frame2Child2, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-38.png")}
      />
      <Text style={[styles.text, styles.hTypo]}>$230</Text>
      <Text style={[styles.h, styles.hTypo]}>5.4h</Text>
      <Text style={[styles.k, styles.hTypo]}>3.2k</Text>
      <Image
        style={[styles.whatsappImage20240901At1, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240901-at-112549-ccf8ff50-1.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-54.png")}
        />
      </Pressable>
      <Image
        style={[styles.frame2Child4, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/group-53.png")}
      />
      <Text style={styles.vagamon}>Vagamon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frame2Layout: {
    height: 110,
    width: 80,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_base,
    top: 512,
    position: "absolute",
  },
  groupChildPosition: {
    top: 0,
    position: "absolute",
  },
  groupItemLayout: {
    width: 231,
    top: 0,
    height: 50,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "65.39%",
    position: "absolute",
    overflow: "hidden",
  },
  hTypo: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_mini,
    top: 589,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  wrapperLayout: {
    height: 40,
    width: 40,
    top: 35,
    position: "absolute",
  },
  frame2Child: {
    left: 16,
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
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorGainsboro_100,
  },
  vagamonIsA: {
    top: 642,
    left: 18,
    fontSize: FontSize.size_base,
    color: Color.colorSilver,
    width: 343,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupChild: {
    width: 50,
    height: 50,
    left: 0,
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
    fontSize: FontSize.size_xl,
    textAlign: "left",
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
    height: "2.22%",
    width: "3.47%",
    right: "48.27%",
    bottom: "32.39%",
    left: "48.27%",
  },
  frame2Child1: {
    top: 531,
    left: 41,
    width: 24,
    height: 24,
    position: "absolute",
  },
  frame2Child2: {
    height: "2.34%",
    width: "5.33%",
    right: "12.27%",
    bottom: "32.27%",
    left: "82.4%",
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
  whatsappImage20240901At1: {
    left: -1,
    borderBottomRightRadius: Border.br_21xl,
    borderBottomLeftRadius: Border.br_21xl,
    height: 440,
    width: 375,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 29,
  },
  frame2Child4: {
    left: 304,
  },
  vagamon: {
    top: 475,
    left: 13,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  frame2: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGainsboro_100,
  },
});

export default Frame5;
