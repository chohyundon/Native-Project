import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function SwipertCategory() {
  const [selectedCategory, setSelectedCategory] = useState("Today");
  const categoryList = ["Today", "Latest", "Recommended"];

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.categoryList}>
      {categoryList.map((category, index) => (
        <Pressable key={index} onPress={() => handleCategoryPress(category)}>
          <Text
            style={[
              styles.category,
              selectedCategory === category && styles.categoryActive,
            ]}
          >
            {category}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  categoryList: {
    flexDirection: "row",
    gap: 10,
    alignSelf: "flex-start",
  },

  category: {
    padding: 11,
    backgroundColor: Colors.primarySecond,
    borderRadius: 20,
  },

  categoryActive: {
    backgroundColor: Colors.primary,
  },
});

export default SwipertCategory;
