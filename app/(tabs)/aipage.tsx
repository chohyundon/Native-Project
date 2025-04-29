import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FormProvider, useForm } from "react-hook-form";
import AiInput from "@/components/Input/AiInput";
import { Colors } from "@/constants/Colors";
import { useAiChatData } from "@/store/signUpStore";
import React from "react";

function AiScreen() {
  const signUpForm = useForm({ defaultValues: { value: "" } });
  const aiChat = useAiChatData((state: any) => state.aiChatData);

  return (
    <FormProvider {...signUpForm}>
      <View style={styles.inputContainer}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.title}>Discover topics from AI</Text>
          <Text style={styles.subTitle}>This is experimental feature</Text>
          <Text style={styles.subTitle}>the texts won't be saved</Text>
        </View>
        <ScrollView style={styles.AiChatContainer}>
          {aiChat.map(
            (
              chat: { userInput: string; AiResponse: string },
              index: number
            ) => (
              <View key={index}>
                {chat.userInput && (
                  <Text style={styles.userInput}>{chat.userInput}</Text>
                )}
                {chat.AiResponse && (
                  <Text style={styles.AiResponse}>{chat.AiResponse}</Text>
                )}
              </View>
            )
          )}
        </ScrollView>
        <AiInput />
      </View>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 10,
    backgroundColor: "white",
  },

  title: {
    paddingTop: 25,
    fontSize: 25,
    textAlign: "center",
  },

  subTitleContainer: {
    paddingTop: 10,
  },

  subTitle: {
    textAlign: "center",
    color: Colors.red,
  },

  AiChatContainer: {
    height: "50%",
  },

  userInput: {
    display: "flex",
    width: "75%",
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 15,
  },

  AiResponse: {
    width: "70%",
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    alignSelf: "flex-end",
    marginBottom: 10,
  },
});

export default AiScreen;
