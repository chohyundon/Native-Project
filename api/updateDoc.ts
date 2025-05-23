import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { createAt } from "@/utils/today";

export const updateDocRef = (id: string) => doc(db, "topics", id);

export const createUpdater = async (
  id: string,
  value: string | number,
  userName: string
) => {
  await updateDoc(updateDocRef(id), {
    "topicInfo.comment": arrayUnion({ value, createAt, userName }),
  });
};

export const updateLike = async (
  id: string,
  value: string | number,
  userName: string
) => {
  await updateDoc(updateDocRef(id), {
    "topicInfo.userLike": arrayUnion({ value, createAt, userName }),
  });
};
