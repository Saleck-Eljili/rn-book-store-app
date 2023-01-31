import React from "react";
import { SafeAreaView, View, ScrollView } from "react-native";

import { COLORS, SIZES } from "../constants";

import {
  profile as profileData,
  myBooks as myBooksData,
  categories as categoriesData,
} from "../data";

import { BookSection, CategorySection, HeaderSection } from "../components";

const Home = () => {
  const [profile, setProfile] = React.useState(profileData);
  const [myBooks, setMyBooks] = React.useState(myBooksData);
  const [categories, setCategories] = React.useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = React.useState(1);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      {/* Header Section */}
      <HeaderSection profile={profile} />

      {/* Body Section */}
      <ScrollView style={{ marginTop: SIZES.radius }}>
        {/* Books Section */}
        <View>
          <BookSection myBooks={myBooks} />
        </View>

        {/* Categories Section */}
        <CategorySection
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
