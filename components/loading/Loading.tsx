import { Colors } from "@/constants/Colors";
import { StyleSheet, Text } from "react-native";

function Loading() {
  return <Text style={styles.loading}>...Loading</Text>;
}

export default Loading;

const styles = StyleSheet.create({
  loading: {
    width: "70%",
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    alignSelf: "flex-end",
    marginBottom: 10,
  },
});
