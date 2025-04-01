import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView, Button, Pressable, Text,
} from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "@/constants/Colors";

function AiInput() {
  const { control } = useFormContext();
  const inset = useSafeAreaInsets()

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.inner}>
          <Controller
            name="Ai"
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextInput
                placeholder="Feel free to ask to AI"
                style={[{marginBottom: inset.bottom}, styles.input]}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Pressable style={styles.icons}>
            <Ionicons name="send" size={24} color="black" />
          </Pressable>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  inner: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
  },

  input: {
    width: "88%",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: Colors.lightGray,
    color: Colors.black,
  },

  icons: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    color: Colors.lightGray,
  },
});

export default AiInput;