import { StyleSheet, View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import CustomTextInput from "@/components/Input/CustomInput";

function LoginInput() {
  const { control, setFocus } = useFormContext();

  return (
    <Controller
      name="id"
      control={control}
      render={({ field: { value, onChange }}) => (
        <CustomTextInput
          value={value}
          onChangeText={onChange}
          placeholder='example12@nave.com'
          label='아이디'
          submitBehavior='submit'
          onSubmitEditing={() => setFocus('loginPassword')}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});

export default LoginInput;
