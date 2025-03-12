import { StyleSheet, View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import CustomTextInput from "@/components/Input/CustomInput";

function PasswordInput() {
  const { control } = useFormContext();

  return (
    <Controller
      name="password"
      control={control}
      rules={{
        required: '비밀번호를 입력해주세요',
        minLength: {
          value: 6,
          message: '비밀번호는 최소 6글자 이상 작성해주세요'
        },
        maxLength: {
          value: 12,
          message: '비밀번호는 최대 12글자 이하로 작성해주세요'
        },
      }}
      render={({ field: { value, onChange }, fieldState: { error }}) => (
        <CustomTextInput
          value={value}
          onChangeText={onChange}
          label='비밀번호'
          placeholder="비밀번호를 입력해주세요"
          textContentType='oneTimeCode'
          secureTextEntry
          error={error?.message}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});

export default PasswordInput;
