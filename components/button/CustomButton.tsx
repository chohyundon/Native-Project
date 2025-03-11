import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ButtonProps {
  label: string;
  variant?: "filled";
  onPress: () => void;
  size?: "medium" | "large";
}

function CustomButton({
  label,
  variant = "filled",
  onPress,
  size = "large",
}: ButtonProps) {
  const inserts = useSafeAreaInsets();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        styles[size],
        styles[variant],
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.labelText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  filled: {
    backgroundColor: "black",
  },

  large: {
    width: "100%",
    height: 44,
  },

  medium: {},

  labelText: {
    color: "white",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.7,
  },
});

export default CustomButton;
