import { addDoc, collection, doc, setDoc } from "@firebase/firestore";
import { db } from "@/api/firebaseConfig";

interface userData {
  email: string;
  password: string;
  nickname: string;
  residentFirst: string;
  residentLast: string;
  createdAt: string;
}

interface topicData {
  topic: string;
  category: string;
  createdAt: string;
}

export const saveUserData = async (userData: userData) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      userInfo: userData,
    });
    console.log("User data saved successfully!", docRef.id);
  } catch (e) {
    console.error("Firestore error:", e);
  }
};

export const saveTopicsData = async (
  topicData: topicData,
  randomID: string
) => {
  try {
    await setDoc(doc(db, "topics", randomID), {
      topicInfo: topicData,
    });
  } catch (e: any) {
    console.error("error!");
    throw new Error(e);
  }
};
