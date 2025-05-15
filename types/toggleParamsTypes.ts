import { SingUpUserDataTypes } from "./singUpUserDataTypes";

export interface ToggleParamsTypes {
  data: {
    category: string;
    createdAt: string;
    id: string;
    topic: string;
  };
  userInfo: SingUpUserDataTypes;
}
