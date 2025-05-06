import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import SwiperCategory from "@/app/swiper/SwiperCategory";

function Swiper() {
  const [apiData, setApiData] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Topics</Text>
      <SwiperCategory />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
});

export default Swiper;
