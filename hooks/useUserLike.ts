import { updateLike } from "@/api/updateDoc";
import { ToggleParamsTypes } from "@/types/toggleParamsTypes";
import { useState } from "react";

export const useUserLike = () => {
  const [isLike, setIsLike] = useState(false);
  const [count, setCount] = useState(0);

  const toggle = async (toggleParams: ToggleParamsTypes) => {
    const next = !isLike;
    const newCount = next ? count + 1 : Math.max(count - 1, 0);

    setIsLike(next);
    setCount(newCount);

    updateLike(
      toggleParams.data.id,
      newCount,
      String(toggleParams.userInfo.name)
    );
  };

  return { isLike, toggle, count };
};
