import { height, width } from "@/api/deviceSize";
import { Colors } from "@/constants/Colors";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import SwiperDetailComment from "./SwiperDetailComment";
import { useTranslateTopic } from "@/hooks/useTranslateTopic";
import SwiperHeader from "./swiperHeader";
import { useLocalSearchParams } from "expo-router";

function SwiperDetail() {
  const { translateTopicData, isLoading, handleTranslate } =
    useTranslateTopic();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          <SwiperHeader
            translateTopicData={translateTopicData}
            isLoading={isLoading}
            handleTranslate={handleTranslate}
          />
        </View>
        <Text style={styles.commentFont}>
          Leave the first comment and{`\n`} gain bragging rights!
        </Text>
        <SwiperDetailComment />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    paddingInline: 10,
  },

  container: {
    marginTop: 15,
    width: width,
    height: height * 0.55,
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },

  dots: {
    position: "absolute",
    right: 10,
  },

  swiperDetailFont: {
    fontSize: 25,
    paddingInline: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  userDetail: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingInline: 10,
    paddingVertical: 5,
  },

  userButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  buttonClickCount: {
    fontSize: 15,
  },

  translateContainer: {
    position: "absolute",
    right: 10,
  },

  pressedFont: {
    opacity: 0.7,
  },

  commentFont: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default SwiperDetail;
