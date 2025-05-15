import { updateLike } from "@/api/updateDoc";
import { ToggleParamsTypes } from "@/types/toggleParamsTypes";
import { useState } from "react";

export const useUserLike = () => {
  const [isLike, setIsLike] = useState(false);
  const [count, setCount] = useState(0);

  const toggle = async (toggleParams: ToggleParamsTypes) => {
    console.log(toggleParams.userInfo.name);

    setIsLike((prev) => {
      const next = !prev;

      setCount((prevCount) => {
        const newCount = next ? prevCount + 1 : Math.max(prevCount - 1, 0);
        updateLike(
          toggleParams.data.id,
          newCount,
          String(toggleParams.userInfo.name)
        );
        return newCount;
      });

      return next;
    });
  };

  return { isLike, toggle, count };
};
