import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({ phoneNumber, propTop }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.instanceParent, styles.parentLayout, groupViewStyle]}>
      <View style={[styles.rectangleParent, styles.parentLayout]}>
        <View style={styles.instanceChild} />
        <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      </View>
      <Text style={[styles.phoneNumber, styles.emailTypo]}>{phoneNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 49,
    width: 326,
    position: "absolute",
  },
  emailTypo: {
    textAlign: "left",
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  instanceChild: {
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
    display: "none",
  },
  rectangleParent: {
    top: 0,
    left: 0,
  },
  phoneNumber: {
    top: 16,
    left: 12,
  },
  instanceParent: {
    top: 101,
    left: 8,
  },
});

export default GroupComponent;
