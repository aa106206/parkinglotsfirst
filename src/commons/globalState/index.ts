import { atom } from "recoil";
import { IQuery } from "../types/generated/types";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const IsLogInState = atom({
  key: "IsLogInState",
  default: false,
});

// // const [recentlyViewed, setRecentlyViewed] = useState([]);

// export const recentlyViewedState = atom<string[]>({
//   key: "recentlyViewed",
//   default: [],
// });
