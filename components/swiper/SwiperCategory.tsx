import { height, width } from "@/api/deviceSize";
import { getTopics } from "@/api/getDoc";
import { Colors } from "@/constants/Colors";
import { createAt } from "@/utils/today";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

interface DataTypes {
  category: string;
  createdAt: string;
  topic: string;
  id: string;
}

function SwipertCategory() {
  const [selectedCategory, setSelectedCategory] = useState("Today");
  const categoryList = ["Today", "Latest", "Recommended"];
  const [data, setData] = useState<DataTypes[]>();

  const handleCategoryPress = async (category: string) => {
    const getTopic = await getTopics();
    const todayDate = createAt;

    //1. 카테고리 Today가 눌러졌을 떄, 생성된 날짜가 getTopics에 생성된 날짜와 같다면? 그 때 데이터를 보여줌
    if (category === "Today") {
      const filterTodayData = getTopic.filter(
        (item) => item.createdAt === todayDate
      );

      setData(filterTodayData);
    }

    setSelectedCategory(category);
  };

  console.log(data);

  return (
    <View>
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
      <PagerView style={styles.swiper} initialPage={0}>
        {data?.length ? (
          data?.map((item, index) => (
            <View key={index} style={styles.swiperList}>
              <Text style={styles.cardFont}>{item.topic}</Text>
            </View>
          ))
        ) : (
          <View style={styles.swiperSkeleton}>
            <Text style={styles.cardFont}>데이터가 없습니다</Text>
          </View>
        )}
      </PagerView>
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

  swiper: {
    marginTop: 10,
    alignItems: "center",
    width: width - 80,
    minHeight: height * 0.45,
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },

  swiperList: {
    justifyContent: "center",
  },

  swiperSkeleton: {
    justifyContent: "center",
    backgroundColor: Colors.skeleton,
    borderRadius: 20,
  },

  cardFont: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 10,
  },
});

export default SwipertCategory;
