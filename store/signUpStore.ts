import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SingUpUserDataTypes } from "@/types/singUpUserDataTypes";

interface useUserDataProps {
  userData: SingUpUserDataTypes;
  updateUserData: (data: SingUpUserDataTypes) => void;
}

export const useUserData = create<useUserDataProps>()(
  persist(
    (set) => ({
      userData: {
        email: "",
        password: "",
      },

      updateUserData: (data) => {
        set((state) => ({
          userData: {
            ...state.userData,
            ...data,
          },
        }));
      },
    }),
    {
      name: "user-data",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);