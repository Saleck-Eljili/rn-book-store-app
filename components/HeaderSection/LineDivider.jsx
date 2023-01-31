import { View, StyleSheet } from "react-native";

import { COLORS } from "../../constants";
import React from "react";

export default function LineDivider() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: 1, paddingVertical: 18 },
  subContainer: {
    flex: 1,
    borderLeftColor: COLORS.lightGray,
    borderLeftWidth: 1,
  },
});
