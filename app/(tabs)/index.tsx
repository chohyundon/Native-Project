import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { router, useRouter } from "expo-router";
import { useUserData } from "@/store/signUpStore";
import { SafeAreaView } from "react-native-safe-area-context";
import TinderSwiper from "@/components/swiper/Tinder";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/Colors";
import Swiper from "@/app/swiper/index";

function HomeScreen() {
  const resetUserStatus = useUserData((state) => state.resetUserData);
  const userData = useUserData((state) => state.userData);

  const router = useRouter();

  const handleMoveForm = () => {
    if (userData.email.trim() === "") {
      Alert.alert("경고", "로그인을 진행해주세요", [
        {
          text: "확인",
          onPress: () => router.push("/auth"),
        },
      ]);
    } else {
      router.push("/form");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Swiper />
        <TinderSwiper />
      </ScrollView>
      <View style={styles.iconContainer}>
        <Pressable onPress={handleMoveForm}>
          <AntDesign name="form" size={30} color={"white"} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },

  iconContainer: {
    position: "absolute",
    bottom: 10,
    right: 30,
    width: 50,
    height: 50,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 1,
      height: 2.5,
    },
  },
});

export default HomeScreen;
