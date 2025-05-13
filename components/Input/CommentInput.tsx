import { Controller, useForm, useFormContext } from "react-hook-form";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { height } from "@/api/deviceSize";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import { createUpdater, updateDocRef } from "@/api/updateDoc";
import { DataTypes } from "@/types/fireStoreDataTypes";
import { useUserData } from "@/store/signUpStore";

function CommentInput() {
  const { control, getValues } = useFormContext();
  const data: DataTypes = useLocalSearchParams();
  const userData = useUserData((state) => state.userData);

  const handlePress = async () => {
    const value = getValues("comment");
    const id = data.id;
    const userName = userData.name;

    if (id) {
      updateDocRef(id);
    }
    if (id && value && userName) {
      createUpdater(id, value, userName);
    }
  };

  return (
    <Controller
      name="comment"
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              placeholder="입력하세요"
            />
            <Pressable
              onPress={handlePress}
              style={({ pressed }) => [
                {
                  width: "10%",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: pressed ? 0.5 : 1,
                },
              ]}
            >
              <Ionicons
                name="send-outline"
                size={24}
                color={Colors.primary}
                style={styles.buttonFont}
              />
            </Pressable>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    paddingInline: 20,
    flexDirection: "row",
    width: "100%",
  },

  input: {
    width: "90%",
    backgroundColor: Colors.primarySecond,
    padding: 12,
    borderRadius: 8,
    marginRight: 10,
  },

  buttonFont: {
    fontWeight: "black",
  },
});

export default CommentInput;
