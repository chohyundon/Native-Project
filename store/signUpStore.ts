import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SingUpUserDataTypes } from "@/types/singUpUserDataTypes";

interface useUserDataProps {
  userData: SingUpUserDataTypes;
  updateUserData: (data: SingUpUserDataTypes) => void;
  resetUserData: () => void
}

const initialUserData = {
  email: "",
  password: "",
  name: "",
  nickname: '',
  residentFirst: '',
  residentLast: '',
}

export const useUserData = create<useUserDataProps>()(
  persist(
    (set) => ({
      userData: initialUserData,

      updateUserData: (data) => {
        set((state) => ({
          userData: {
            ...state.userData,
            ...data,
          },
        }));
      },

      resetUserData: () => {
        set(() => ({
          userData: initialUserData,
        }))
      }
    }),
    {
      name: "user-data",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);