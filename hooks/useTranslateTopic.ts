import { translate } from "@/api/Ai";
import { useState } from "react";

export const useTranslateTopic = () => {
  const [translateTopicData, setTranslateTopicData] = useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isTranslated, setIsTranslated] = useState(false);

  const handleTranslate = async (topic: string | string[]) => {
    if (isTranslated) {
      setTranslateTopicData(null);
      setIsTranslated(false);
      return;
    }

    try {
      setIsLoading(true);
      const translateTopicData = await translate(topic);
      setTranslateTopicData(translateTopicData);
      setIsTranslated(true);
    } catch (e: any) {
      throw Error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    translateTopicData,
    isLoading,
    isTranslated,
    handleTranslate,
  };
};
