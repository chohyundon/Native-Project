import { useState } from "react";

export const useUserLike = () => {
  const [isLike, setIsLike] = useState(false);

  const toggle = (id: string | string[]) => {
    console.log(id);
    setIsLike((prev) => !prev);
  };
  return { isLike, toggle };
};
