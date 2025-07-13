import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent2 from "../components/GroupComponent2";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.groupParent}>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.groupInner, styles.homeChildLayout1]}
            contentFit="cover"
            source={require("../assets/group-14.png")}
          />
          <Text style={[styles.all, styles.allFlexBox]}>All</Text>
        </View>
        <View style={[styles.rectangleView, styles.groupChildLayout]} />
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <View style={[styles.groupChild3, styles.groupChildLayout]} />
        <Text style={[styles.mountains, styles.mountainsTypo]}>Mountains</Text>
        <Image
          style={[styles.image6Icon, styles.homeChildLayout1]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <Text
          style={[styles.theDesert, styles.mountainsTypo]}
        >{`The Desert `}</Text>
        <Image
          style={[styles.image7Icon, styles.homeChildLayout1]}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-16.png")}
        />
      </View>
      <Text style={[styles.topTrips, styles.exploreTypo]}>{`Top trips `}</Text>
      <Text style={[styles.explore, styles.exploreTypo]}>{`Explore `}</Text>
      <Image
        style={[styles.homeChild, styles.homeChildLayout1]}
        contentFit="cover"
        source={require("../assets/group-18.png")}
      />
      <Image
        style={styles.homeItem}
        contentFit="cover"
        source={require("../assets/group-21.png")}
      />
      <Image
        style={[styles.homeInner, styles.homeChildPosition1]}
        contentFit="cover"
        source={require("../assets/group-22.png")}
      />
      <Image
        style={[styles.homeChild1, styles.homeChild1Layout]}
        contentFit="cover"
        source={require("../assets/group-27.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.homeChild1Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={[styles.homeChild2, styles.homeChildLayout1]}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <Text
        style={[styles.categories, styles.exploreTypo]}
      >{`Categories `}</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.groupContainer, styles.groupLayout]}>
        <Image
          style={[styles.groupChild4, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-34.png")}
        />
        <LinearGradient
          style={[styles.rectangleLineargradient, styles.groupLayout]}
          locations={[0, 0.51, 0.94]}
          colors={[
            "#538078",
            "rgba(247, 251, 250, 0.23)",
            "rgba(83, 128, 120, 0.64)",
          ]}
        />
        <Text style={[styles.welcomeForTour, styles.allFlexBox]}>
          welcome for tour
        </Text>
      </View>
      <Image
        style={[styles.homeChild3, styles.homeChildPosition1]}
        contentFit="cover"
        source={require("../assets/group-44.png")}
      />
      <Image
        style={[styles.homeChild4, styles.homeChildPosition1]}
        contentFit="cover"
        source={require("../assets/group-45.png")}
      />
      <Image
        style={[styles.homeChild4, styles.homeChildPosition1]}
        contentFit="cover"
        source={require("../assets/group-45.png")}
      />
      <Image
        style={[styles.homeChild6, styles.homeChildPosition1]}
        contentFit="cover"
        source={require("../assets/group-47.png")}
      />
      <Image
        style={[styles.homeChild7, styles.homeChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={[styles.homeChild8, styles.homeChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <View style={[styles.homeChild9, styles.homeChildPosition]} />
      <GroupComponent1 />
      <GroupComponent2 />
    </View>
  );
};

const styles = StyleSheet.create({
  homeChildLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  allFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  groupChildLayout: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_102xl,
    width: 92,
    top: 0,
    height: 50,
    position: "absolute",
  },
  mountainsTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    top: 19,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  exploreTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  homeChildPosition1: {
    top: 739,
    height: 24,
    width: 24,
    position: "absolute",
  },
  homeChild1Layout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  groupLayout: {
    height: 210,
    width: 343,
    position: "absolute",
  },
  homeChildPosition: {
    height: 8,
    top: 293,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorCadetblue,
    borderRadius: Border.br_102xl,
    width: 92,
    left: 0,
    top: 0,
    height: 50,
    position: "absolute",
  },
  groupItem: {
    top: 7,
    left: 8,
    width: 35,
    height: 35,
    position: "absolute",
  },
  groupInner: {
    left: 14,
    top: 13,
    width: 24,
  },
  all: {
    top: 16,
    left: 52,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  rectangleParent: {
    width: 92,
    left: 0,
    top: 0,
    height: 50,
    position: "absolute",
  },
  rectangleView: {
    left: 110,
  },
  groupChild1: {
    left: 220,
  },
  groupChild3: {
    left: 330,
  },
  mountains: {
    left: 147,
    color: "rgba(0, 0, 0, 0.95)",
  },
  image6Icon: {
    left: 117,
    borderRadius: 79,
    top: 13,
    width: 24,
  },
  theDesert: {
    left: 255,
    color: Color.colorBlack,
  },
  image7Icon: {
    left: 227,
    borderRadius: 70,
    top: 13,
    width: 24,
  },
  groupIcon: {
    height: "40%",
    width: "4.74%",
    top: "28%",
    right: "15.64%",
    bottom: "32%",
    left: "79.62%",
  },
  groupParent: {
    top: 372,
    width: 422,
    height: 50,
    left: 16,
    position: "absolute",
  },
  topTrips: {
    top: 444,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 16,
  },
  explore: {
    top: 446,
    left: 272,
    color: Color.colorDimgray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  homeChild: {
    top: 447,
    left: 335,
  },
  homeItem: {
    top: 724,
    left: 163,
    width: 48,
    height: 48,
    position: "absolute",
  },
  homeInner: {
    left: 335,
  },
  homeChild1: {
    top: 26,
    left: 16,
  },
  ellipseIcon: {
    top: 27,
    left: 319,
  },
  homeChild2: {
    top: 35,
    left: 327,
  },
  categories: {
    top: 336,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    left: 16,
  },
  vectorIcon: {
    height: "0.49%",
    width: "1.07%",
    top: "-23.4%",
    right: "86.93%",
    bottom: "122.91%",
    left: "12%",
  },
  groupChild4: {
    left: 0,
    width: 343,
    top: 0,
  },
  rectangleLineargradient: {
    borderRadius: 15,
    backgroundColor: "transparent",
    left: 0,
    width: 343,
    top: 0,
  },
  welcomeForTour: {
    fontSize: 43,
    fontFamily: FontFamily.mervaleScript,
    left: 14,
    top: 0,
    textAlign: "left",
    color: Color.colorWhite,
  },
  groupContainer: {
    top: 96,
    left: 16,
  },
  homeChild3: {
    left: 39,
  },
  homeChild4: {
    left: 104,
  },
  homeChild6: {
    left: 261,
  },
  homeChild7: {
    left: 164,
    width: 8,
    height: 8,
    top: 293,
  },
  homeChild8: {
    left: 176,
    width: 8,
    height: 8,
    top: 293,
  },
  homeChild9: {
    left: 188,
    borderRadius: Border.br_16xl,
    width: 16,
    height: 8,
    top: 293,
    backgroundColor: Color.colorWhite,
  },
  home: {
    backgroundColor: "#eee",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Home;
