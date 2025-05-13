import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { getUserName, matchUser } from "./getDoc";

export const updateDocRef = (id: string) => doc(db, "topic", id);

export const awaitUpdate = async (id: string) => {
  const userName = await getUserName();
  console.log(userName);

  await updateDoc(updateDocRef(id), {
    heart: 1,
  });
};
