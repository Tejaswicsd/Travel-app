import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RectangleComponent = ({ email, emailTop, emailLeft }) => {
  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", emailTop),
      ...getStyleValue("left", emailLeft),
    };
  }, [emailTop, emailLeft]);

  return (
    <View style={[styles.rectangleParent, rectangleViewStyle]}>
      <View style={styles.componentChild} />
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  componentChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  email: {
    height: "38.78%",
    width: "17.48%",
    top: "32.65%",
    left: "4.91%",
    fontSize: FontSize.size_base,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    color: Color.colorGainsboro_200,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 460,
    left: 24,
    width: 326,
    height: 49,
    position: "absolute",
  },
});

export default RectangleComponent;
