import { StyleSheet, View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import CustomTextInput from "@/components/Input/CustomInput";
import {nameRegx} from "@/utils/Regx";

function UserNameInput() {
  const { control } = useFormContext();

  return (
    <Controller
      name='name'
      control={control}
      rules={{
        required: '이름을 입력해주세요',
        validate: (data) => {
          if(!nameRegx.test(data)) {
            return '이름을 다시 입력해주세요'
          }
        }
      }}
      render={({ field: { value, onChange }, fieldState: {error} }) => (
        <CustomTextInput
          autoFocus
          value={value}
          onChangeText={onChange}
          label="이름"
          submitBehavior="submit"
          placeholder="이름을 입력해주세요"
          error={error?.message}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});

export default UserNameInput;
