import { height } from "@/api/deviceSize";
import CommentInput from "@/components/Input/CommentInput";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function SwiperDetailComment() {
  const insets = useSafeAreaInsets();
  const signUpForm = useForm({
    defaultValues: { comment: "" },
  });

  return (
    <View style={[styles.container, { paddingBottom: insets.top }]}>
      <FormProvider {...signUpForm}>
        <View style={styles.formContainer}>
          <CommentInput />
        </View>
      </FormProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
  },

  formContainer: {
    width: "100%",
  },
});

export default SwiperDetailComment;
