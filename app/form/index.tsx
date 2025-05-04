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
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/api/firebaseConfig";
import uuid from "react-native-uuid";

function WriteTopicsFormMain() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const randomID = uuid.v4();

  const signUpForm = useForm({
    mode: "onSubmit",
    defaultValues: {
      topics: "",
    },
  });

  const onValid = async (formValues: any) => {
    console.log("✅ 제출 성공:", formValues);
    if (selectedCategory !== null) {
      await setDoc(doc(db, "topics", randomID), {
        topic: formValues,
        category: selectedCategory,
        createdAt: new Date(),
      });
    } else {
      Alert.alert("경고", "카테고리를 선택해주세요!");
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
