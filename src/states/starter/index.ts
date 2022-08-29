import { atom, selector } from "recoil";

export const nameState = atom({
  key: "name",
  default: "",
});

export const departmentState = atom({
  key: "department",
  default: "",
});

export const emailState = atom({
  key: "email",
  default: "",
});

export const passwordState = atom({
  key: "password",
  default: {
    password: "",
    confirmPassword: "",
  },
});

export const starterInputState = selector({
  key: "starterInput",
  get: ({ get }) => {
    const password = get(passwordState);
    return {
      name: get(nameState),
      department: get(departmentState),
      email: get(emailState),
      password: password.password,
    };
  },
});
