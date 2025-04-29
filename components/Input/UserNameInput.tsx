import { StyleSheet, View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import CustomTextInput from "@/components/Input/CustomInput";
import { nameRegx } from "@/utils/Regx";
import { getUserName } from "@/api/getDoc";

function UserNameInput() {
  const { control, setFocus } = useFormContext();

  return (
    <Controller
      name="name"
      control={control}
      rules={{
        required: "이름을 입력해주세요",
        validate: async (data) => {
          if (!nameRegx.test(data)) {
            return "이름을 다시 입력해주세요";
          }

          const userName = await getUserName();
          if (userName.includes(data)) {
            return "이미 가입한 이메일이 있습니다";
          }
        },
      }}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <CustomTextInput
          autoFocus
          value={value}
          onChangeText={onChange}
          label="이름"
          submitBehavior="submit"
          placeholder="이름을 입력해주세요"
          error={error?.message}
          onSubmitEditing={() => setFocus("nickname")}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});

export default UserNameInput;
