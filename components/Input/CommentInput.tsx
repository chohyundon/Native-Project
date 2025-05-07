import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { height } from "@/api/deviceSize";
import { Colors } from "@/constants/Colors";

function CommentInput() {
  const { control } = useForm();

  return (
    <Controller
      name="myInput"
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
              style={{
                flex: 0.1,
                justifyContent: "center",
                alignItems: "center",
              }}
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
  },

  input: {
    flex: 0.9,
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
