import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../../constants";

export default function BookSection({ myBooks, navigation }) {
  const renderItem = ({ item, index }) => {
    return (
      <Pressable
        style={[
          styles.touch,
          {
            marginLeft: index == 0 ? SIZES.padding : 0,
          },
        ]}
        onPress={() => console.log("Navigation")}
      >
        {/* Book Cover */}
        <Image
          source={item.bookCover}
          resizeMode="cover"
          style={styles.cover}
        />

        {/* Book Info */}
        <View style={styles.info}>
          <Image source={icons.clock_icon} style={styles.imageInfo} />
          <Text style={styles.textInfo}>{item.lastRead}</Text>

          <Image source={icons.page_icon} style={styles.infoImage} />
          <Text style={styles.textInfo}>{item.completion}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.mybookText}>My Book</Text>

        <Pressable onPress={() => console.log("See More")}>
          <Text style={styles.seemoreText}>see more</Text>
        </Pressable>
      </View>

      {/* Books */}
      <View style={styles.books}>
        <FlatList
          data={myBooks}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  touch: {
    flex: 1,
    marginRight: SIZES.radius,
  },
  cover: {
    width: 180,
    height: 250,
    borderRadius: 20,
  },
  info: { marginTop: SIZES.radius, flexDirection: "row", alignItems: "center" },
  imageInfo: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightGray,
  },
  infoImage: {
    marginLeft: SIZES.radius,
    width: 20,
    height: 20,
    tintColor: COLORS.lightGray,
  },
  textInfo: { marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray },
  header: {
    paddingHorizontal: SIZES.padding,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mybookText: { ...FONTS.h2, color: COLORS.white },
  seemoreText: {
    ...FONTS.body3,
    color: COLORS.lightGray,
    alignSelf: "flex-start",
    textDecorationLine: "underline",
  },
  books: { flex: 1, marginTop: SIZES.padding },
});
