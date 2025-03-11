import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrevButton from "@/components/button/PrevButton";
import FixedButton from "@/components/button/FixedButton";
import { router } from "expo-router";

function SignUpFirstStep() {
  return (
    <SafeAreaView style={styles.container}>
      <PrevButton />
      <Text>회원가입을 진행해주세요</Text>
      <View style={styles.buttonContainer}>
        <FixedButton
          label="계속하기"
          onPress={() => router.push("/auth/signup/SignUpSecondStep")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },

  buttonContainer: {
    flex: 1,
  },
});

export default SignUpFirstStep;
