import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const IsLogInState = atom({
  key: "IsLogInState",
  default: false,
});

export const loadPage = atom({
  key: "loadPage",
  default: false,
});
