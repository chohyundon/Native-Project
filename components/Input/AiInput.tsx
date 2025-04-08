import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
  Button,
  Pressable,
  Text,
  Alert,
} from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { handleClick } from "@/api/Ai";
import { useAiChatData } from "@/store/signUpStore";

function AiInput() {
  const { control } = useFormContext();
  const inset = useSafeAreaInsets();
  const aiChatInput = useAiChatData((state: any) => state.updateAiChatData);

  const sendAiChatData = (value: any) => {
    if (value === undefined) {
      Alert.alert("Please enter a message");
      return;
    }

    aiChatInput({ userInput: value });
    handleClick(value, aiChatInput);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <View style={[styles.inner, { flexGrow: 1 }]}>
        <Controller
          name="Ai"
          control={control}
          render={({ field: { value, onChange } }) => (
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Feel free to ask AI"
                style={[{ marginBottom: inset.bottom }, styles.input]}
                value={value}
                onChangeText={onChange}
              />
              <Pressable
                onPress={() => sendAiChatData(value)}
                style={styles.icons}
              >
                <Ionicons name="send" size={24} color="black" />
              </Pressable>
            </View>
          )}
        />
      </View>
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

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
  },

  input: {
    flex: 1,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: Colors.lightGray,
    color: Colors.black,
  },

  icons: {
    paddingVertical: 10,
    color: Colors.lightGray,
  },
});

export default AiInput;
