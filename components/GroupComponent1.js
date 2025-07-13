import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const GroupComponent1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupParent}>
      <Pressable
        style={[styles.groupWrapper, styles.groupPosition]}
        onPress={() => navigation.navigate("Frame1")}
      >
        <View style={[styles.groupWrapper, styles.groupPosition]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
        </View>
      </Pressable>
      <Text
        style={[styles.banjirKanal, styles.textFlexBox]}
      >{`Banjir kanal `}</Text>
      <Text style={[styles.mountains, styles.textFlexBox]}>Mountains</Text>
      <Text style={[styles.text, styles.textFlexBox]}>$230</Text>
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/group-42.png")}
      />
      <Image
        style={[styles.imgMysoorIcon, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/img-mysoor.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    top: 0,
    height: 200,
    width: 166,
  },
  groupChildLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    height: 200,
    width: 166,
  },
  groupWrapper: {
    position: "absolute",
  },
  banjirKanal: {
    top: 135,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    left: 8,
  },
  mountains: {
    top: 156,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray,
    left: 8,
  },
  text: {
    top: 173,
    left: 11,
    fontSize: FontSize.size_lg,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  groupItem: {
    top: 164,
    left: 129,
    width: 15,
    height: 15,
    position: "absolute",
  },
  imgMysoorIcon: {
    top: 6,
    width: 150,
    height: 120,
    left: 8,
  },
  groupParent: {
    top: 489,
    left: 16,
    height: 200,
    width: 166,
    position: "absolute",
  },
});

export default GroupComponent1;
