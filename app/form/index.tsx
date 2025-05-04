import { height, width } from "@/api/deviceSize";
import PrevButton from "@/components/button/PrevButton";
import WriteTopicsForm from "@/components/Input/WriteTopics";
import { Colors } from "@/constants/Colors";
import { FormProvider, useForm } from "react-hook-form";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CategoryList } from "../entities/Category";
import { useState } from "react";
import { Alert } from "react-native";
import uuid from "react-native-uuid";
import { getTopics } from "@/api/getDoc";
import { saveTopicsData } from "@/api/setDoc";

function WriteTopicsFormMain() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const signUpForm = useForm({
    mode: "onSubmit",
    defaultValues: {
      topics: "",
    },
  });

  const onValid = async (formValues: any) => {
    try {
      const inputTopic = formValues.topics?.trim();
      const getData = await getTopics();
      const topics = getData.map((item) => item.topic);
      const randomID = uuid.v4().toString();

      if (!selectedCategory) {
        Alert.alert("경고", "카테고리를 선택해주세요!");
        return;
      }

      if (!inputTopic) {
        Alert.alert("입력 오류", "토픽을 입력해주세요.");
        return;
      }

      if (topics.includes(inputTopic)) {
        Alert.alert("경고", "이미 같은 토픽 주제가 있습니다!");
        return;
      }

      await saveTopicsData(
        {
          topic: inputTopic,
          category: selectedCategory,
          createdAt: new Date().toString(),
        },
        randomID.toString()
      );

      Alert.alert("성공", "토픽 작성을 성공했습니다!");
    } catch (e) {
      console.log("🔥 오류 발생:", e);
      Alert.alert("오류", "토픽 저장 중 문제가 발생했습니다.");
    }
  };

  const onInvalid = (errors: any) => {
    if (errors.topics?.message) {
      Alert.alert("입력 오류", errors.topics.message);
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={styles.container}>
        <View style={styles.button}>
          <PrevButton />
        </View>
        <FormProvider {...signUpForm}>
          <View style={styles.cardWrapper}>
            <WriteTopicsForm />
          </View>
          <Text style={styles.title}>Category</Text>
          <View style={styles.categoryContainer}>
            {CategoryList.map((list, index) => (
              <Pressable
                style={[
                  styles.category,
                  selectedCategory === list && styles.categoryButtonPressed,
                ]}
                onPress={() => setSelectedCategory(list)}
                key={index}
              >
                <Text>{list}</Text>
              </Pressable>
            ))}
          </View>
          <Pressable
            onPress={signUpForm.handleSubmit(onValid, onInvalid)}
            style={({ pressed }) => [
              styles.completeButton,
              pressed && styles.pressedButton,
            ]}
          >
            <Text style={styles.buttonFont}>Complete</Text>
          </Pressable>
        </FormProvider>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
  },

  container: {
    paddingHorizontal: 40,
  },

  button: {
    marginBottom: 10,
  },

  cardWrapper: {
    width: width - 80,
    height: height * 0.45,
    shadowColor: "white",
    borderRadius: 20,
    backgroundColor: Colors.primary,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 10,
    marginTop: 20,
  },

  categoryContainer: {
    flexDirection: "row",
    height: height * 0.25,
    flexWrap: "wrap",
    gap: 10,
  },

  categoryButtonPressed: {
    backgroundColor: Colors.primary,
  },

  category: {
    padding: 9,
    borderRadius: 10,
    backgroundColor: Colors.primarySecond,
    fontSize: 15,
  },

  completeButton: {
    marginTop: height * 0.1,
    width: "60%",
    alignSelf: "center",
  },

  pressedButton: {
    opacity: 0.6,
  },

  buttonFont: {
    borderRadius: 20,
    backgroundColor: Colors.primary,
    width: "100%",
    height: height * 0.045,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    paddingTop: 8,
  },
});

export default WriteTopicsFormMain;
