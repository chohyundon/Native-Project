import { Pressable, StyleSheet, Text, View } from "react-native";
import { useUserData } from "@/store/signUpStore";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function MyPage() {
  const userData = useUserData((state) => state.userData);
  const userName = userData?.nickname;
  const genderData =
    typeof userData?.residentLast === "number" ? userData.residentLast : 0;

  console.log(userData);

  return (
    <SafeAreaView style={styles.myPageContainer}>
      <View style={styles.userContainer}>
        <View style={styles.iconContainer}>
          <Ionicons
            name={genderData % 2 === 1 ? "woman" : "man"}
            size={30}
            color="black"
            style={styles.icons}
          />
        </View>
        <View style={styles.userNameContainer}>
          <Text style={styles.userTitle}>
            {userName ? userName : "로그인을 진행해주세요"}
          </Text>
          <Text style={styles.userMoreInfo}>기본 정보 보기</Text>
        </View>
        <Pressable style={styles.buttonContainer}>
          <MaterialIcons name="navigate-next" size={24} color="black" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  myPageContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },

  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  userNameContainer: {
    alignSelf: "center",
    paddingLeft: 15,
    gap: 3,
  },

  userTitle: {
    fontSize: 20,
    fontWeight: "semibold",
  },

  userMoreInfo: {
    fontSize: 14,
    color: "#424242",
    fontFamily: "Pretendard",
  },

  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },

  icons: {
    width: 30,
    height: 30,
  },

  buttonContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default MyPage;
