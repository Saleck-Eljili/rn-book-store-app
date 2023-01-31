import { View, StyleSheet } from "react-native";
import React from "react";
import Header from "./Header";
import ButtonSection from "./ButtonSection";

export default function HeaderSection({ profile }) {
  return (
    <View style={styles.container}>
      <Header profile={profile} />
      <ButtonSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 200 },
});
