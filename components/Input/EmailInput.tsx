import { StyleSheet, View } from "react-native";
import CustomTextInput from "@/components/Input/CustomInput";
import { Controller, useFormContext } from "react-hook-form";

function EmailInput() {
  const { control, setFocus } = useFormContext();
  const emailRegx = /^\w{3,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/;

  return (
    <Controller
      name="email"
      control={control}
      rules={{
        required: "이메일을 입력해주세요",
        validate: (data) => {
          if (!emailRegx.test(data)) {
            return "이메일을 다시 입력해주세요";
          }
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <CustomTextInput
          autoFocus
          label="이메일"
          onChangeText={onChange}
          inputMode="email"
          value={value}
          placeholder="이메일을 입력해주세요."
          submitBehavior="submit"
          onSubmitEditing={() => setFocus('password')}
          error={error?.message}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});

export default EmailInput;
