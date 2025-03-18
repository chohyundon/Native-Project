import { Alert, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FixedButton from "@/components/button/FixedButton";
import { FormProvider, useForm } from "react-hook-form";
import LoginInput from "@/components/Input/LoginInput";
import LoginPasswordInput from "@/components/Input/LoginPasswordInput";
import CustomButton from "@/components/button/CustomButton";
import { matchUser } from "@/api/getDoc";
import { useUserData } from "@/store/signUpStore";

interface formValueProps {
  id: string;
  loginPassword: string;
}

function AuthScreen() {
  const signUpForm = useForm({
    defaultValues: {
      id: "",
      loginPassword: "",
    },
  });

  const updateUserStatusData = useUserData((state) => state.updateUserData);

  const handleLogin = async (formValues: formValueProps) => {
    try {
      const data = await matchUser(formValues.id);

      if (data.length === 0) {
        Alert.alert("알림", "로그인을 진행해주세요");
        return;
      }

      const user = data[0];
      if (
        user.email &&
        formValues.id &&
        user.password === formValues.loginPassword
      ) {
        Alert.alert("알림", "로그인을 성공했습니다", [
          {
            text: "확인",
            onPress: () => {
              updateUserStatusData(user);
              router.push("/");
            },
          },
        ]);
        // 로그인 성공 후 필요한 로직 추가
      } else {
        Alert.alert("알림", "정보가 일치하지 않습니다");
      }
    } catch (error) {
      console.error("로그인 오류:", error);
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <FormProvider {...signUpForm}>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <LoginInput />
          <LoginPasswordInput />
          <CustomButton
            label="로그인하기"
            onPress={signUpForm.handleSubmit(handleLogin)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <FixedButton
            label="계속하기"
            onPress={() => router.push("/auth/signup/signupFirstStep")}
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

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },

  inputContainer: {
    flex: 1.5,
  },

  buttonContainer: {
    flex: 2,
  },
});

export default AuthScreen;
