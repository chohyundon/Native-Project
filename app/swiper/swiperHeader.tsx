import PrevButton from "@/components/button/PrevButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { height, width } from "@/api/deviceSize";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useLocalSearchParams } from "expo-router";
import UserLikeToggle from "./userLikeToggle";
import { Colors } from "@/constants/Colors";

function SwiperHeader({ translateTopicData, isLoading, handleTranslate }: any) {
  const { topic } = useLocalSearchParams();

  return (
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
        <UserLikeToggle />
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
          {!isLoading ? <Text>See Translate</Text> : <Text>Translate...</Text>}
        </Pressable>
      </View>
    </View>
  );
}

export default SwiperHeader;

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
