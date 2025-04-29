import { height, width } from "@/api/deviceSize";
import PrevButton from "@/components/button/PrevButton";
import WriteTopicsForm from "@/components/Input/WriteTopics";
import { Colors } from "@/constants/Colors";
import { FormProvider, useForm } from "react-hook-form";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CategoryList } from "../entities/Category";

function WriteTopicsFormMain() {
  const signUpForm = useForm({
    defaultValues: {
      textValue: "",
    },
  });

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.button}>
          <PrevButton />
        </View>
        <View style={styles.cardWrapper}>
          <FormProvider {...signUpForm}>
            <WriteTopicsForm />
          </FormProvider>
        </View>
        <View>
          <Text style={styles.title}>Category</Text>
          <View style={styles.categoryContainer}>
            {CategoryList.map((list, index) => (
              <View key={index}>
                <Text style={styles.category}>{list}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
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

  category: {
    padding: 9,
    borderRadius: 10,
    backgroundColor: Colors.primarySecond,
    fontSize: 15,
  },
});

export default WriteTopicsFormMain;
