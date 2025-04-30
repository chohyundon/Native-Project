import CustomTextInput from "@/components/Input/CustomInput";
import { Controller, useFormContext } from "react-hook-form";
import { emailRegx } from "@/utils/Regx";
import { getUserEmail } from "@/api/getDoc";

function EmailInput() {
  const { control, setFocus } = useFormContext();

  return (
    <Controller
      name="email"
      control={control}
      rules={{
        required: "이메일을 입력해주세요",
        validate: async (data) => {
          if (!emailRegx.test(data)) {
            return "이메일을 다시 입력해주세요";
          }

          const userEmail = await getUserEmail();
          if (userEmail.includes(data)) {
            return "이미 가입된 이메일 입니다";
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
          onSubmitEditing={() => setFocus("password")}
          error={error?.message}
        />
      )}
    />
  );
}

export default EmailInput;
