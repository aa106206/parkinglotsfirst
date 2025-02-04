import { gql, useMutation } from "@apollo/client";
import MyProfilePresenter from "./myProfile.presenter";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  IsLogInState,
} from "../../../../commons/globalState";
// resetUserPassword
const RESET_USER_PASSWORD = gql`
  mutation ($password: String!) {
    resetUserPassword(password: $password)
  }
`;

export default function MyProfileContainer() {
  const router = useRouter();

  const [pw1, setpw1] = useState("");
  const [pw2, setpw2] = useState("");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLogIn, setIsLogIn] = useRecoilState(IsLogInState);

  const [resetPw] = useMutation(RESET_USER_PASSWORD);

  const onChangePwInput = (event: ChangeEvent<HTMLInputElement>) => {
    setpw1(event.currentTarget.value);
  };

  const onChangePwCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setpw2(event.currentTarget.value);
  };

  const onClickBtn = async () => {
    if (pw1 !== pw2) {
      alert("비밀번호가 일치하지 않습니다");
    }
    const result = await resetPw({
      variables: {
        password: pw2,
      },
    });
    if (result) {
      alert("비밀번호가 성공적으로 변경되었습니다");
    } else {
      alert("비밀 변경 오류");
    }
    setAccessToken("");
    setIsLogIn(false);
    localStorage.setItem("accessToken", "");
    router.push("/account/login");
  };

  return (
    <MyProfilePresenter
      onChangePwInput={onChangePwInput}
      onChangePwCheck={onChangePwCheck}
      onClickBtn={onClickBtn}
    />
  );
}
