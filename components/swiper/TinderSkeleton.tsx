import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

function TinderSkeleton() {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    maxWidth: 300,
    height: 350,
    width: "100%",
    justifyContent: "center",
    borderRadius: 20,
    shadowColor: "white",
    shadowOpacity: 0.2,
    shadowRadius: 20,
    backgroundColor: Colors.skeleton,
    alignItems: "center",
  },
});

export default TinderSkeleton;
