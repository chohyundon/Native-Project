import { useUserLike } from "@/hooks/useUserLike";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

function UserLikeToggle() {
  const { isLike, toggle } = useUserLike();
  const { id } = useLocalSearchParams();
  const postId = Array.isArray(id) ? id[0] : id;

  return (
    <Pressable style={styles.userButton} onPress={() => toggle(postId)}>
      <AntDesign name={isLike ? "heart" : "hearto"} size={24} color="red" />
      <Text style={styles.buttonClickCount}>1</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  userButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  buttonClickCount: {
    fontSize: 15,
  },
});

export default UserLikeToggle;
