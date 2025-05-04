import { height, width } from "@/api/deviceSize";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import SwiperCategory from "./SwiperCategory";

function Swiper() {
  const [apiData, setApiData] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Topics</Text>
      <SwiperCategory />
      <PagerView style={styles.swiper}>
        <Text style={styles.cardFont}>hi</Text>
      </PagerView>
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

  swiper: {
    marginTop: 10,
    alignItems: "center",
    width: width - 80,
    minHeight: height * 0.45,
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },

  cardFont: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 10,
  },
});

export default Swiper;
