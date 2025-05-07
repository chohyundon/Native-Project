import { doc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const docRef = doc(db, "topic");
