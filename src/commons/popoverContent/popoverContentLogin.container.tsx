import { useQuery } from "@apollo/client";
import PopoverContentLoginPresenter from "./popoverContentLogin.presenter";
import { IQuery } from "../types/generated/types";
import { useRecoilState } from "recoil";
import { accessTokenState, IsLogInState, loadPage } from "../globalState";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "./popoverContentsLogin.queries";
import { MouseEvent, useState } from "react";

export default function PopoverContentLoginContainer() {
  const router = useRouter();

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLogIn, setIsLogIn] = useRecoilState(IsLogInState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(loadPage);
  console.log("cnffurasdfs");
  console.log(isModalOpen);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickMyPage = () => {
    router.push("/mypage/mymarket");
  };

  const onClickLogOut = () => {
    setAccessToken("");
    localStorage.setItem("recentlyViewed", "[]");
    setIsLogIn(false);
    localStorage.setItem("accessToken", "");
    router.push("/boards");
  };

  const handleOpenModal = (event: MouseEvent<HTMLDivElement>) =>
    setIsModalOpen(true);

  return (
    <PopoverContentLoginPresenter
      isModalOpen={isModalOpen}
      onClickMyPage={onClickMyPage}
      data={data}
      onClickLogOut={onClickLogOut}
      handleOpenModal={handleOpenModal}
    />
  );
}
