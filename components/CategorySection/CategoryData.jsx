import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";

import { COLORS, FONTS, SIZES, icons, images } from "../../constants";

export default function CategoryData({
  categories,
  selectedCategory,
  navigation,
}) {
  var books = [];

  let selectedCategoryBooks = categories.filter(
    (a) => a.id == selectedCategory
  );

  if (selectedCategoryBooks.length > 0) {
    books = selectedCategoryBooks[0].books;
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={styles.itemSubContainer}
          onPress={() => console.log("Navigation")}
        >
          {/* Book Cover */}
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={styles.coverImage}
          />

          <View style={styles.bookCover}>
            {/* Book name and author */}
            <View>
              <Text style={styles.bookName}>{item.bookName}</Text>
              <Text style={styles.author}>{item.author}</Text>
            </View>

            {/* Book Info */}
            <View style={styles.info}>
              <Image
                source={icons.page_filled_icon}
                resizeMode="contain"
                style={styles.infoImage}
              />
              <Text style={styles.pageNo}>{item.pageNo}</Text>

              <Image
                source={icons.read_icon}
                resizeMode="contain"
                style={styles.readedImage}
              />
              <Text style={styles.readed}>{item.readed}</Text>
            </View>

            {/* Genre */}
            <View style={styles.genre}>
              {item.genre.includes("Adventure") && (
                <View style={styles.adventure}>
                  <Text style={styles.adventureText}>Adventure</Text>
                </View>
              )}
              {item.genre.includes("Romance") && (
                <View style={styles.romance}>
                  <Text style={styles.romanceText}>Romance</Text>
                </View>
              )}
              {item.genre.includes("Drama") && (
                <View style={styles.drama}>
                  <Text style={styles.dramaText}>Drama</Text>
                </View>
              )}
            </View>
          </View>
        </TouchableOpacity>

        {/* Bookmark Button */}
        <TouchableOpacity
          style={styles.bookmark}
          onPress={() => console.log("Bookmark")}
        >
          <Image
            source={icons.bookmark_icon}
            resizeMode="contain"
            style={styles.bookmarkImage}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: { marginVertical: SIZES.base },
  itemSubContainer: { flex: 1, flexDirection: "row" },
  coverImage: { width: 100, height: 150, borderRadius: 10 },
  bookCover: { flex: 1, marginLeft: SIZES.radius },
  bookName: { paddingRight: SIZES.padding, ...FONTS.h2, color: COLORS.white },
  author: { ...FONTS.h3, color: COLORS.lightGray },
  info: { flexDirection: "row", marginTop: SIZES.radius },
  infoImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightGray,
  },
  pageNo: {
    ...FONTS.body4,
    color: COLORS.lightGray,
    paddingHorizontal: SIZES.radius,
  },
  readedImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightGray,
  },
  readed: {
    ...FONTS.body4,
    color: COLORS.lightGray,
    paddingHorizontal: SIZES.radius,
  },
  genre: { flexDirection: "row", flexWrap: "wrap", marginTop: SIZES.base },
  adventure: {
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.base,
    marginRight: SIZES.base,
    marginBottom: SIZES.base,
    backgroundColor: COLORS.darkGreen,
    height: 40,
    borderRadius: SIZES.radius,
  },
  adventureText: { ...FONTS.body3, color: COLORS.lightGreen },
  romance: {
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.base,
    marginRight: SIZES.base,
    backgroundColor: COLORS.darkRed,
    height: 40,
    borderRadius: SIZES.radius,
  },
  romanceText: { ...FONTS.body3, color: COLORS.lightRed },
  drama: {
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.base,
    marginRight: SIZES.base,
    backgroundColor: COLORS.darkBlue,
    height: 40,
    borderRadius: SIZES.radius,
  },
  dramaText: { ...FONTS.body3, color: COLORS.lightBlue },
  bookmark: { position: "absolute", top: 5, right: 15 },
  bookmarkImage: {
    width: 25,
    height: 25,
    tintColor: COLORS.lightGray,
  },
  container: { flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding },
});
