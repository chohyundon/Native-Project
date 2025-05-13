import { getTopics } from "@/api/getDoc";
import { createAt } from "@/utils/today";

export const handleCategoryPress = async (category: string) => {
  const getTopicData = await getTopics();
  const todayData = createAt;

  if (category === "Today") {
    const filterTodayData = getTopicData
      .filter((item) => item.createdAt === todayData)
      .map((item) => item);
    return filterTodayData;
  } else if (category === "Latest") {
    const filterLatestData = getTopicData.map((item) => item);
    return filterLatestData;
  }
};
