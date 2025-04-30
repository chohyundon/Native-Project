import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUserData } from "@/store/signUpStore";
import { saveUserData } from "@/api/setDoc";
import AntDesign from "@expo/vector-icons/AntDesign";
import { createAt } from "@/utils/today";
import { router } from "expo-router";

function SignUpFinish() {
  const getUserData = useUserData((state) => state.userData);
  const resetData = useUserData((state: any) => state.resetUserData);
  const createdAt = createAt;

  const handlePress = async () => {
    try {
      const userInfoData: any = {
        ...getUserData,
        createdAt: createdAt,
      };

      Alert.alert("알림", "회원가입을 성공했습니다", [
        {
          text: "확인",
          onPress: async () => {
            await saveUserData(userInfoData);

            setTimeout(() => {
              resetData();
              router.push("/auth");
            }, 1000);
          },
        },
      ]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <AntDesign name="checkcircleo" size={50} color="green" />
          <Text style={styles.title}>회원가입을 성공했습니다 🎊</Text>
        </View>
        <Pressable
          onPress={handlePress}
          style={({ pressed }) => [
            pressed && styles.pressed,
            styles.buttonContainer,
          ]}
        >
          <Text style={styles.font}>홈으로</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  buttonContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "black",
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  button: {
    width: "100%",
  },

  font: {
    color: "white",
  },

  pressed: {
    opacity: 0.8,
  },
});

export default SignUpFinish;
