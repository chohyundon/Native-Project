import { StyleSheet, Text, TextInput, View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { residentNumber } from "@/utils/Regx";
import {forwardRef} from "react";

// @ts-ignore
function ResidentInput() {
  const { control, setFocus } = useFormContext();

  return (
    <>
      <Controller
        name="residentFirst"
        control={control}
        rules={{
          validate: (data) => {
            if (!residentNumber.test(data)) {
              return "생년월일을 다시 입력해주세요";
            }
          },
        }}
        render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
          <View style={styles.container}>
            <TextInput
              ref={ref}
              value={value}
              onChangeText={onChange}
              style={[styles.input]}
              placeholder="012345"
              maxLength={6}
              submitBehavior='submit'
              onSubmitEditing={() => setFocus('residentLast')}
            />
            {error && <Text style={styles.error}>{error?.message}</Text>}
          </View>
        )}
      />

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "35%",
    minHeight: 35,
  },

  input: {
    borderBottomWidth: 1,
    height: 30,
    fontSize: 16,
  },

  error: {
    position: "absolute",
    color: "red",
    width: 300,
    paddingVertical: 5,
    top: 30,
    paddingLeft: 3,
  },
});

export default forwardRef(ResidentInput);
