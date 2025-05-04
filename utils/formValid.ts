import { getTopics } from "@/api/getDoc";
import { Alert } from "react-native";

export const FormValid = (topic: string, category: string | null) => {
  if (!topic.trim()) return Alert.alert("경고", "토픽 주제를 입력해주세요");
  if (category === null) Alert.alert("경고", "카테고리를 선택해주세요!");
};

export const isDuplicated = async (topic: string) => {
  const getData = await getTopics();
  const topics = getData.map((item) => item.topic);
  return topics.includes(topic.trim());
};
