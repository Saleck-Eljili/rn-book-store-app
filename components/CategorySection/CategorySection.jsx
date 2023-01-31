import { View, StyleSheet } from "react-native";
import React from "react";
import { SIZES } from "../../constants";
import CategoryData from "./CategoryData";
import CategoryHeader from "./CategoryHeader";

export default function CategorySection({
  categories,
  selectedCategory,
  navigation,
  setSelectedCategory,
}) {
  return (
    <View style={styles.container}>
      <View>
        <CategoryHeader
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </View>
      <View>
        <CategoryData
          categories={categories}
          selectedCategory={selectedCategory}
          navigation={navigation}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: SIZES.padding },
});
