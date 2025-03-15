import CustomTextInput from "@/components/Input/CustomInput";
import { Controller, useFormContext } from "react-hook-form";
import {emailRegx} from "@/utils/Regx";

function EmailInput() {
  const { control, setFocus } = useFormContext();

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


export default EmailInput;
