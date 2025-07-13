import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Group = () => {
  return (
    <View style={styles.groupParent}>
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/group-21.png")}
      />
      <Image
        style={[styles.groupItem, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group-22.png")}
      />
      <Image
        style={[styles.groupInner, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group-44.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group-45.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group-45.png")}
      />
      <Image
        style={[styles.groupChild2, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group-47.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 24,
    width: 24,
    top: 15,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 124,
    width: 48,
    position: "absolute",
    height: 48,
  },
  groupItem: {
    left: 296,
  },
  groupInner: {
    left: 0,
  },
  groupIcon: {
    left: 65,
  },
  groupChild2: {
    left: 222,
  },
  groupParent: {
    width: 320,
    height: 48,
  },
});

export default Group;
