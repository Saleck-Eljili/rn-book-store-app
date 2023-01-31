import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../../constants";
import React from "react";

export default Header = ({ profile }) => {
  return (
    <View style={styles.container}>
      {/* Greetings */}
      <View style={{ flex: 1 }}>
        <View style={{ marginRight: SIZES.padding }}>
          <Text style={styles.goodmorningText}>Good Morning</Text>
          <Text style={styles.profilnameText}>{profile.name}</Text>
        </View>
      </View>

      {/* Points */}
      <TouchableOpacity
        style={styles.points}
        onPress={() => {
          console.log("Point");
        }}
      >
        <View style={styles.pointContainer}>
          <View style={styles.pointSubContainer}>
            <Image
              source={icons.plus_icon}
              resizeMode="contain"
              style={styles.pointImage}
            />
          </View>

          <Text style={styles.pointText}>{profile.point} point</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: SIZES.padding,
    alignItems: "center",
  },
  goodmorningText: { ...FONTS.h3, color: COLORS.white },
  profilnameText: { ...FONTS.h2, color: COLORS.white },
  points: {
    backgroundColor: COLORS.primary,
    height: 40,
    paddingLeft: 3,
    paddingRight: SIZES.radius,
    borderRadius: 20,
  },
  pointContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pointSubContainer: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  pointImage: {
    width: 20,
    height: 20,
  },
  pointText: { marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body3 },
});
