import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { createAt } from "@/utils/today";

export const updateDocRef = (id: string) => doc(db, "topics", id);

export const createUpdater = async (
  id: string,
  value: string,
  userName: string
) => {
  await updateDoc(updateDocRef(id), {
    comment: arrayUnion({ value, createAt, userName }),
  });
};
