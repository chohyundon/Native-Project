import { db } from "@/api/firebaseConfig";
import { collection, getDocs } from "@firebase/firestore";
import { query, where } from "firebase/firestore";

export const getUserEmail = async () => {
  const data = await getDocs(collection(db, "users"));
  return data.docs.map((doc) => doc.data().userInfo.email);
};

export const getUserPassword = async () => {
  const data = await getDocs(collection(db, "users"));
  return data.docs.map((doc) => doc.data().userInfo.password);
};

export const getUserName = async () => {
  const data = await getDocs(collection(db, "users"));
  return data.docs.map((doc) => doc.data().userInfo.name);
};

export const matchUser = async (value: string) => {
  const data = query(collection(db, "users"), where("userInfo.email", "==", value));
  const querySnapshot = await getDocs(data);
  return querySnapshot.docs.map((doc) => doc.data().userInfo)
};
