import { height, width } from "@/api/deviceSize";
import { getTopics } from "@/api/getDoc";
import { Colors } from "@/constants/Colors";
import { createAt } from "@/utils/today";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
// import PagerView from "react-native-pager-view"; -> 이거 key를 줘도 안되는데 이유를 ... 모르겠다
import Carousel from "react-native-reanimated-carousel";

interface DataTypes {
  category: string;
  createdAt: string;
  topic: string;
  id: string;
}

function SwiperCategory() {
  const [selectedCategory, setSelectedCategory] = useState("Today");
  const categoryList = ["Today", "Latest", "Recommended"];
  const [data, setData] = useState<DataTypes[]>([]);
  const router = useRouter();

  useEffect(() => {
    handleCategoryPress("Today");
  }, []);

  const handleCategoryPress = async (category: string) => {
    const getTopic = await getTopics();
    const todayDate = createAt;

    if (category === "Today") {
      const filterTodayData = getTopic.filter(
        (item) => item.createdAt === todayDate
      );
      setData(filterTodayData);
    }

    setSelectedCategory(category);
  };

  const moveTopicDetail = () => {
    router.push("./swiperDetail");
  };

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
      <View style={styles.swiper}>
        {data?.length > 0 ? (
          <Carousel
            loop={true}
            data={data}
            width={width - 80}
            height={height * 0.45}
            renderItem={({ item }) => (
              <View style={styles.swiperList}>
                <Pressable onPress={moveTopicDetail} style={styles.cardButton}>
                  <Text style={styles.cardFont}>{item.topic}</Text>
                </Pressable>
              </View>
            )}
          />
        ) : (
          <View style={styles.swiperSkeleton}>
            <Text style={styles.cardFont}>데이터가 없습니다</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryList: {
    flexDirection: "row",
    gap: 10,
  },

  category: {
    padding: 11,
    backgroundColor: Colors.primarySecond,
    borderRadius: 20,
  },

  categoryActive: {
    backgroundColor: Colors.primary,
  },

  swiperList: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },

  cardButton: {
    backgroundColor: Colors.primary,
  },

  swiper: {
    marginTop: 10,
    alignItems: "center",
    width: width - 80,
    height: height * 0.45,
    backgroundColor: Colors.primary,
    borderRadius: 20,
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

export default SwiperCategory;
