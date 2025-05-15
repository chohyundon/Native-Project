import { useUserLike } from "@/hooks/useUserLike";
import { useUserData } from "@/store/signUpStore";
import { DataTypes } from "@/types/fireStoreDataTypes";
import { ToggleParamsTypes } from "@/types/toggleParamsTypes";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

function UserLikeToggle() {
  const userInfo = useUserData((state) => state.userData);
  const { isLike, toggle, count } = useUserLike();
  const data: any = useLocalSearchParams();

  const toggleParams: ToggleParamsTypes = {
    data,
    userInfo,
  };

  console.log(count);

  return (
    <Pressable style={styles.userButton} onPress={() => toggle(toggleParams)}>
      <AntDesign name={isLike ? "heart" : "hearto"} size={24} color="red" />
      <Text style={styles.buttonClickCount}>{count}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  userButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  buttonClickCount: {
    fontSize: 15,
  },
});

export default UserLikeToggle;
