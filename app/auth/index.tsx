import {StyleSheet, Text, View} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import PrevButton from "@/components/button/PrevButton";
import FixedButton from "@/components/button/FixedButton";
import {Ionicons} from "@expo/vector-icons";

function AuthScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <PrevButton />
      <View style={styles.logo}>
        <Ionicons name="logo-apple" size={60} color="black"  />
      </View>
      <View style={styles.buttonContainer}>
        <FixedButton label='계속하기' onPress={() => router.push("/auth/signup/SignUpSecondStep")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },

  logo: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    flex: 1,
  },
});

export default AuthScreen;
