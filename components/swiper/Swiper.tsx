import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

function Swiper() {
  const [apiData, setApiData] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Topics</Text>
      <PagerView style={styles.swiper}>
        <Text>hi</Text>
        <Text>hi</Text>
        <Text>hi</Text>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
  },

  swiper: {
    width: "100%",
    height: "50%",
  },
});

export default Swiper;
