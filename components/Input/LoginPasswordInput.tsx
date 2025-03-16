import { StyleSheet, View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import CustomTextInput from "@/components/Input/CustomInput";
import { forwardRef } from "react";

function PasswordInput() {
  const { control } = useFormContext();

  return (
    <Controller
      name="loginPassword"
      control={control}
      render={({ field: { ref, value, onChange } }) => (
        <CustomTextInput
          ref={ref}
          value={value}
          onChangeText={onChange}
          placeholder="비밀번호를 입력해주세요"
          label="비밀번호"
          secureTextEntry
          textContentType="oneTimeCode"
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});

export default forwardRef(PasswordInput);
