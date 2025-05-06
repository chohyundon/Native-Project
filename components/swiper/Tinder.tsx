import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { useUserData } from "@/store/signUpStore";
import TinderCard from "react-tinder-card";
import { Colors } from "@/constants/Colors";
import { Suspense, useEffect, useState } from "react";
import { getAiSwiperData } from "@/app/entities/getAiSwiperData";
import TinderSkeleton from "./TinderSkeleton";
import { height, width } from "@/api/deviceSize";

function TinderSwiper() {
  const resetUserStatus = useUserData((state) => state.resetUserData);
  const userData = useUserData((state) => state.userData);
  const [swiperData, setSwiperData] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAiSwiperData();
      setSwiperData(data);
      setCurrentIndex(0);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const onSwipe = (direction: string, item: string) => {
    console.log(`Swiped ${direction} on ${item}`);
    setCurrentIndex((prev) => (prev + 1) % swiperData.length);
  };

  const outOfFrame = (item: string) => {
    console.log(`${item} left the screen`);
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>Swiper Topics</Text>
      {isLoading ? (
        <TinderSkeleton />
      ) : (
        <View style={styles.cardWrapper}>
          {swiperData.length > 0 && (
            <TinderCard
              key={`${swiperData[currentIndex]}-${currentIndex}`}
              onSwipe={(dir) => onSwipe(dir, swiperData[currentIndex])}
              onCardLeftScreen={() => outOfFrame(swiperData[currentIndex])}
              preventSwipe={["up", "down"]}
            >
              <View style={styles.card}>
                <Text style={styles.cardFont}>{swiperData[currentIndex]}</Text>
              </View>
            </TinderCard>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
  },
  cardWrapper: {
    width: width - 80,
    minHeight: height * 0.5,
    position: "relative",
  },
  cardTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  card: {
    position: "absolute",
    maxWidth: 300,
    height: height * 0.45,
    width: "100%",
    justifyContent: "center",
    borderRadius: 20,
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

export default TinderSwiper;
