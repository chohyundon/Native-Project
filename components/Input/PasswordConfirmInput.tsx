import { StyleSheet, View } from "react-native";
import {Controller, useFormContext, useWatch} from "react-hook-form";
import CustomTextInput from "@/components/Input/CustomInput";

function PasswordConfirmInput() {
  const { control } = useFormContext();
  const passwordValue = useWatch({name: 'password', control})

  return (
    <Controller
      name="passwordConfirm"
      control={control}
      rules={{
        validate : (value) => {
          if(value === passwordValue) {
            return
          } else {
            return '비밀번호 값이 일치하지 않습니다.'
          }
        }
      }}
      render={({field: {value, onChange}, fieldState: {error}}) => (
        <CustomTextInput
          label="비밀번호 확인"
          placeholder="비밀번호를 입력해주세요"
          value={value}
          onChangeText={onChange}
          textContentType='oneTimeCode'
          secureTextEntry
          error={error?.message}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});

export default PasswordConfirmInput;
