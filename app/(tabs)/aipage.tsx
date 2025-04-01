import { KeyboardAvoidingView, Pressable, StyleSheet, Text, View } from "react-native";
import { FormProvider, useForm } from "react-hook-form";
import AiInput from "@/components/Input/AiInput";

function AiScreen() {
  const signUpForm = useForm({ defaultValues: { value: "" } });

  return (
    <FormProvider {...signUpForm}>
      <View style={styles.inputContainer}>
        <Text>Discover topics from AI</Text>
        <Text>This experimental feature</Text>
        <Text>the texts won't be saved</Text>
        <AiInput />
      </View>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default AiScreen;