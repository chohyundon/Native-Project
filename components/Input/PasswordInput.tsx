import { StyleSheet, View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import CustomTextInput from "@/components/Input/CustomInput";
import {passwordRegx} from "@/utils/Regx";

function PasswordInput() {
  const { control, setFocus } = useFormContext();

  return (
    <Controller
      name="password"
      control={control}
      rules={{
        required: '비밀번호를 입력해주세요',
        validate: (data) => {
          if(!passwordRegx.test(data)) {
            return "비밀번호는 특수문자 포함, 6~15글자로 작성해주세요";
          }
        }
      }}
      render={({ field: { ref, value, onChange }, fieldState: { error }}) => (
        <CustomTextInput
          ref={ref}
          value={value}
          onChangeText={onChange}
          label='비밀번호'
          placeholder="비밀번호를 입력해주세요"
          textContentType='oneTimeCode'
          submitBehavior='submit'
          onSubmitEditing={() => setFocus('passwordConfirm')}
          secureTextEntry
          error={error?.message}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});

export default PasswordInput;
