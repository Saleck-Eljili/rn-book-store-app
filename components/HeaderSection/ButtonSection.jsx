import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../../constants";
import LineDivider from "./LineDivider";

export default ButtonSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {/* Claim */}
        <Pressable style={{ flex: 1 }} onPress={() => console.log("Claim")}>
          <View style={styles.sectionView}>
            <Image
              source={icons.claim_icon}
              resizeMode="contain"
              style={styles.sectionImage}
            />
            <Text style={styles.claimText}>Claim</Text>
          </View>
        </Pressable>

        {/* Divider */}
        <LineDivider />

        {/* Get Point */}
        <Pressable style={{ flex: 1 }} onPress={() => console.log("Get Point")}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={icons.point_icon}
              resizeMode="contain"
              style={styles.sectionImage}
            />
            <Text style={styles.getpointText}>Get Point</Text>
          </View>
        </Pressable>

        {/* Divider */}
        <LineDivider />

        {/* My Card */}
        <Pressable style={{ flex: 1 }} onPress={() => console.log("My Card")}>
          <View style={styles.sectionView}>
            <Image
              source={icons.card_icon}
              resizeMode="contain"
              style={styles.sectionView}
            />
            <Text style={styles.mycardText}>My Card</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: SIZES.padding },
  subContainer: {
    flexDirection: "row",
    height: 70,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.radius,
  },
  sectionView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionImage: {
    width: 30,
    height: 30,
  },
  claimText: { marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white },
  getpointText: { marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white },
  mycardText: { marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white },
});
