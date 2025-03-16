import { addDoc, collection } from "@firebase/firestore";
import { db } from "@/api/firebaseConfig";

interface userData {
  email: string;
  password: string;
  nickname: string
  residentFirst: string;
  residentLast: string;
  createdAt: string
}

export const saveUserData = async (userData:userData) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      userInfo: userData
    });
    console.log("User data saved successfully!", docRef.id);
  } catch (e) {
    console.error("Firestore error:", e);
  }
};