import { gql, useQuery } from "@apollo/client";
import PopoverContentLoginPresenter from "./popoverContentLogin.presenter";
import { IQuery } from "../types/generated/types";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  IsLogInState,
  // recentlyViewedState,
} from "../globalState";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "./popoverContentsLogin.queries";

export default function PopoverContentLoginContainer() {
  const router = useRouter();

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLogIn, setIsLogIn] = useRecoilState(IsLogInState);
  // const [recentlyViewed, setRecentlyViewed] =
  //   useRecoilState<string[]>(recentlyViewedState);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickMyPage = () => {
    router.push("/mypage/mymarket");
  };

  const onClickLogOut = () => {
    setAccessToken("");
    // setRecentlyViewed([]);
    localStorage.setItem("recentlyViewed", "");
    setIsLogIn(false);
    localStorage.setItem("accessToken", "");
    router.push("/boards");
  };

  return (
    <PopoverContentLoginPresenter
      onClickMyPage={onClickMyPage}
      data={data}
      onClickLogOut={onClickLogOut}
    />
  );
}
