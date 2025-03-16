import { db } from "@/api/firebaseConfig";
import {collection, getDocs} from "@firebase/firestore";

export const getUserEmail = async () => {
  const data = await getDocs(collection(db, "users"));
  return data.docs.map((doc) => doc.data().userInfo.email );
};

export const getUserName = async () => {
  const data = await getDocs(collection(db, "users"));
  return data.docs.map((doc) => doc.data().userInfo.name);
}