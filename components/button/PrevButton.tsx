import { Pressable, StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

function PrevButton() {
  return (
    <Pressable
      onPress={() => router.back()}
      style={({ pressed }) => [pressed && styles.pressButton, styles.button]}
    >
      <Ionicons name="arrow-back-outline" size={40} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressButton: {
    opacity: 0.3,
  },

  button: {
    width: 40,
  },
});

export default PrevButton;
