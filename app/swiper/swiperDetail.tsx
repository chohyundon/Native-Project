import { height, width } from "@/api/deviceSize";
import PrevButton from "@/components/button/PrevButton";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { translate } from "@/api/Ai";
import SwiperDetailComment from "./SwiperDetailComment";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function SwiperDetail() {
  const [isClick, setIsClick] = useState(false);
  const [translateTopicData, setTranslateTopicData] = useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isTranslated, setIsTranslated] = useState(false);
  const { topic } = useLocalSearchParams();

  const handleClick = () => {
    setIsClick((prev) => !prev);
  };

  const handleTranslate = async (topic: string | string[]) => {
    if (isTranslated) {
      setTranslateTopicData(null);
      setIsTranslated(false);
      return;
    }

    try {
      setIsLoading(true);
      const translateTopicData = await translate(topic);
      setTranslateTopicData(translateTopicData);
      setIsTranslated(true);
    } catch (e: any) {
      throw Error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          <View style={styles.iconContainer}>
            <PrevButton />
            <MaterialCommunityIcons
              name="dots-vertical"
              size={30}
              color="black"
              style={styles.dots}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.swiperDetailFont}>
              {translateTopicData ? translateTopicData : topic}
            </Text>
          </View>
          <View style={styles.userDetail}>
            <Pressable onPress={handleClick} style={styles.userButton}>
              <AntDesign
                name={isClick ? "heart" : "hearto"}
                size={24}
                color="red"
              />
              <Text style={styles.buttonClickCount}>1</Text>
            </Pressable>
            <Pressable style={styles.userButton}>
              <FontAwesome name="comments-o" size={30} color="black" />
              <Text style={styles.buttonClickCount}>1</Text>
            </Pressable>
            <Pressable
              onPress={() => handleTranslate(topic)}
              style={({ pressed }) => [
                pressed && styles.pressedFont,
                styles.translateContainer,
              ]}
            >
              {!isLoading ? (
                <Text>See Translate</Text>
              ) : (
                <Text>Translate...</Text>
              )}
            </Pressable>
          </View>
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
