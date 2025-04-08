import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { useUserData } from "@/store/signUpStore";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen() {
  const resetUserStatus = useUserData((state) => state.resetUserData);
  const userData = useUserData((state) => state.userData);

  const loginStatusHandle = async () => {
    if (userData?.email) {
      resetUserStatus();
      return;
    } else {
      router.push("/auth");
    }
  };

  return (
    <SafeAreaView>
      <Pressable onPress={loginStatusHandle} style={styles.button}>
        {userData.email ? <Text>로그아웃</Text> : <Text>로그인</Text>}
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
  },
});

export default HomeScreen;
