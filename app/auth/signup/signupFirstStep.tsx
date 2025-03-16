import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FixedButton from "@/components/button/FixedButton";
import { router } from "expo-router";
import { FormProvider, useForm } from "react-hook-form";
import EmailInput from "@/components/Input/EmailInput";
import PasswordInput from "@/components/Input/PasswordInput";
import PasswordConfirmInput from "@/components/Input/PasswordConfirmInput";
import { useUserData } from "@/store/signUpStore";

interface FormValuesProps {
  email: string;
  password: string;
  passwordConfirm?: string;
}

function SignUpFirstStep() {
  const signUpForm = useForm<FormValuesProps>({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const SignUpData = useUserData((state) => state.updateUserData);

  const handleNextStep = (formValues: FormValuesProps) => {
    const { passwordConfirm, ...filterData } = formValues;
    SignUpData(filterData);
    if (filterData) {
      router.push("/auth/signup/signUpSecondStep");
    }
  };

  return (
    <FormProvider {...signUpForm}>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <EmailInput />
          <PasswordInput />
          <PasswordConfirmInput />
        </View>
        <View style={styles.buttonContainer}>
          <FixedButton
            label="계속하기"
            onPress={signUpForm.handleSubmit(handleNextStep)}
          />
        </View>
      </SafeAreaView>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },

  inputContainer: {
    flex: 1,
  },

  buttonContainer: {
    flex: 1,
  },
});

export default SignUpFirstStep;
