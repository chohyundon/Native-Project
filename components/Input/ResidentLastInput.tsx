import { StyleSheet, Text, TextInput, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { lastResidentNumber } from "@/utils/Regx";
import { Controller, useFormContext } from "react-hook-form";
import { forwardRef } from "react";

// @ts-ignore
function LastResidentNumber() {
  const { control } = useFormContext();

  return (
    <Controller
      name="residentLast"
      control={control}
      rules={{
        validate: (data) => {
          if (!lastResidentNumber.test(data)) {
            return "생년월일을 다시 입력해주세요";
          }
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <View style={{ flexDirection: "row", width: "50%" }}>
          <TextInput
            ref={ref}
            value={value}
            onChangeText={onChange}
            style={styles.input}
            placeholder="1"
            maxLength={1}
          />
          {Array.from({ length: 5 }, (_, i) => (
            <Entypo key={i} name="dot-single" size={25} color="black" />
          ))}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    width: "15%",
    borderBottomWidth: 1,
    textAlign: "center",
  },
});

export default forwardRef(LastResidentNumber);
