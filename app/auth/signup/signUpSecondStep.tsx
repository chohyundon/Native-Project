import {Alert, StyleSheet, Text, View} from "react-native";
import { FormProvider, useForm, Controller } from "react-hook-form";
import UserNameInput from "@/components/Input/UserNameInput";
import { SafeAreaView } from "react-native-safe-area-context";
import FixedButton from "@/components/button/FixedButton";
import ResidentInput from "@/components/Input/ResidentInput";
import LastResidentNumber from "@/components/Input/ResidentLastInput";
import NickNameInput from "@/components/Input/NickNameInput";
import {router} from "expo-router";
import {useUserData} from "@/store/signUpStore";

interface FormValuesProps {
  name: string;
  nickname: string;
  residentFirst: string;
  residentLast: string;
}

function SignUpSecondStep() {
  const signUpForm = useForm<FormValuesProps>({
    defaultValues: {
      name: "",
      residentFirst: "",
      residentLast: "",
      nickname: "",
    },
  });

  const lastSignUpData = useUserData((state) => state.updateUserData)

  const onPress = (formValues: FormValuesProps) => {
    console.log(formValues)
    // @ts-ignore
    lastSignUpData(formValues);
    if(formValues) {
      router.push('/auth/signup/signUpFinish')
    }
  };

  return (
    <FormProvider {...signUpForm}>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <UserNameInput />
          <NickNameInput />
          <View style={styles.residentContainer}>
            <Text style={styles.title}>생년월일</Text>
            <View style={styles.resident}>
              <ResidentInput />
              <Text style={styles.dash}></Text>
              <LastResidentNumber />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <FixedButton
            label="계속하기"
            onPress={signUpForm.handleSubmit(onPress)}
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

  title: {
    fontSize: 14,
    color: "gray",
  },

  residentContainer: {
    width: "100%",
    flexDirection: "column",
  },

  resident: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
  },

  dash: {
    width: 20,
    borderWidth: 0.5,
    height: 1,
  },

  buttonContainer: {
    flex: 1,
  },
});

export default SignUpSecondStep;
