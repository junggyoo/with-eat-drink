import { atom } from "recoil";

export const starterState = atom({
  key: "starterState",
  default: {
    name: "",
    department: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
});
