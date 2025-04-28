import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { useUserData } from "@/store/signUpStore";
import TinderCard from "react-tinder-card";

import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import { getAiSwiperData } from "../entities/getAiSwiperData";

function HomeScreen() {
  const resetUserStatus = useUserData((state) => state.resetUserData);
  const userData = useUserData((state) => state.userData);
  const [swiperData, setSwiperData] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState<string | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAiSwiperData();
      setSwiperData(data);
      setCurrentIndex(0);
    };
    fetchData();
  }, []);

  const onSwipe = (direction: string, item: string) => {
    console.log(`Swiped ${direction} on ${item}`);
    setLastDirection(direction);
    setCurrentIndex((prev) => (prev + 1) % swiperData.length);
  };

  const outOfFrame = (item: string) => {
    console.log(`${item} left the screen`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Swiper Topics</Text>
        <View style={styles.cardWrapper}>
          {swiperData.map((item, index) => (
            <TinderCard
              key={index}
              onSwipe={(dir) => onSwipe(dir, item)}
              onCardLeftScreen={() => outOfFrame(item)}
              preventSwipe={["up", "down"]}
            >
              <View style={styles.card}>
                <Text style={styles.cardFont}>{swiperData[currentIndex]}</Text>
              </View>
            </TinderCard>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
  },
  cardContainer: {
    alignItems: "center",
  },
  cardWrapper: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  card: {
    position: "absolute",
    maxWidth: 300,
    height: 350,
    width: "100%",
    justifyContent: "center",
    borderRadius: 20,
    shadowColor: "white",
    shadowOpacity: 0.2,
    shadowRadius: 20,
    backgroundColor: Colors.primary,
    alignItems: "center",
  },
  cardFont: {
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
