import { topicsRegx } from "@/utils/Regx";
import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

function WriteTopicsForm() {
  const { control } = useFormContext();

  return (
    <Controller
      name="topics"
      control={control}
      rules={{
        required: "토픽 주제를 입력해주세요!",
        maxLength: { value: 100, message: "100자 이하로 입력해주세요" },
        validate: (data) => {
          if (!topicsRegx.test(data)) {
            return "토픽 주제를 다시 입력해주세요!";
          }
          return true;
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <View>
            <TextInput
              maxLength={100}
              autoFocus
              onChangeText={onChange}
              value={value}
              placeholder="토픽 주제를 입력해주세요."
              style={styles.input}
              multiline={true}
            />
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
  },

  errorFont: {},
});

export default WriteTopicsForm;
