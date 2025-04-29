import { Pressable, StyleSheet, View } from "react-native";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

function PrevButton() {
  return (
    <Pressable
      onPress={() => router.back()}
      style={({ pressed }) => [pressed && styles.pressButton, styles.button]}
    >
      <Ionicons name="chevron-back" size={24} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressButton: {
    opacity: 0.3,
  },

  button: {
    width: 30,
  },
});

export default PrevButton;
