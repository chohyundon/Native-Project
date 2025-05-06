import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { useUserData } from "@/store/signUpStore";
import { Colors } from "@/constants/Colors";
import { Suspense, useEffect, useState } from "react";
import { getAiSwiperData } from "@/app/entities/getAiSwiperData";
import TinderSkeleton from "./TinderSkeleton";
import { height, width } from "@/api/deviceSize";
import Carousel from "react-native-reanimated-carousel";

function TinderSwiper() {
  const resetUserStatus = useUserData((state) => state.resetUserData);
  const userData = useUserData((state) => state.userData);
  const [swiperData, setSwiperData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAiSwiperData();
      setSwiperData(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>Swiper Topics</Text>
      {isLoading ? (
        <TinderSkeleton />
      ) : (
        <View style={styles.cardWrapper}>
          <Carousel
            {...{
              loop: true,
              width: width - 80,
              height: height * 0.45,
              data: swiperData,
              mode: "horizontal-stack",
              renderItem: ({ item }: { item: string }) => (
                <View style={styles.card}>
                  <Text style={styles.cardFont}>{item}</Text>
                </View>
              ),
              modeConfig: {
                snapDirection: "left",
                moveSize: width - 80,
                stackInterval: 30,
                scaleInterval: 0.08,
                rotateZDeg: 0,
              },
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    height: height * 0.6,
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
