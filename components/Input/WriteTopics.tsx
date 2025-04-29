import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet, TextInput } from "react-native";

function WriteTopicsForm() {
  const { control, setFocus } = useFormContext();

  return (
    <Controller
      name="topics"
      control={control}
      rules={{
        required: "토픽 주제를 입력해주세요!",
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextInput
          maxLength={100}
          autoFocus
          onChangeText={onChange}
          value={value}
          placeholder="토픽 주제를 입력해주세요."
          style={styles.input}
          multiline={true}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default WriteTopicsForm;
