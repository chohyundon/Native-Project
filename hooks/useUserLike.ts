import { awaitUpdate, updateDocRef } from "@/api/updateDoc";
import { useState } from "react";

export const useUserLike = () => {
  const [isLike, setIsLike] = useState(false);

  const toggle = async (id: string) => {
    console.log(id);
    await awaitUpdate(id);
    setIsLike((prev) => !prev);
  };
  return { isLike, toggle };
};
