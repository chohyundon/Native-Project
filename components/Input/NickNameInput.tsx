import { StyleSheet, View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import CustomTextInput from "@/components/Input/CustomInput";
import {forwardRef} from "react";
import {nickname} from "@/utils/Regx";

function NickNameInput() {
  const { control, setFocus } = useFormContext();

  return (
    <Controller
      name="nickname"
      control={control}
      rules={{
        validate: (data) => {
          if(!nickname.test(data)) {
            return '이름은 2~6글 한글 영어로만 작성해주세요'
          }
        }
      }}
      render={({ field: { ref, value, onChange }, fieldState: {error} }) => (
        <CustomTextInput
          ref={ref}
          value={value}
          onChangeText={onChange}
          label="닉네임"
          placeholder="닉네임을 작성해주세요"
          submitBehavior="submit"
          maxLength={6}
          onSubmitEditing={() => setFocus("residentFirst")}
          error={error?.message}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});

export default forwardRef(NickNameInput);
