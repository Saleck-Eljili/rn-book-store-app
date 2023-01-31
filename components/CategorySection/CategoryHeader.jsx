import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";

import { COLORS, FONTS, SIZES, icons, images } from "../../constants";

export default function CategoryHeader({
  categories,
  setSelectedCategory,
  selectedCategory,
}) {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => setSelectedCategory(item.id)}
      >
        {selectedCategory == item.id && (
          <Text style={styles.selectedCat}>{item.categoryName}</Text>
        )}
        {selectedCategory != item.id && (
          <Text style={styles.selectedCatOff}>{item.categoryName}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: { flex: 1, marginRight: SIZES.padding },
  selectedCat: { ...FONTS.h2, color: COLORS.white },
  selectedCatOff: { ...FONTS.h2, color: COLORS.lightGray },
  container: { flex: 1, paddingLeft: SIZES.padding },
});
