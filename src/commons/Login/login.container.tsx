import { useRouter } from "next/router";
import LoginPresenter from "./login.presenter";
import { ChangeEvent, useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { accessTokenState, IsLogInState } from "../globalState";
import { useRecoilState } from "recoil";
import { access } from "fs";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginContainer() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLogIn, setIsLogIn] = useRecoilState(IsLogInState);

  const [login] = useMutation(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onClickLogin = async () => {
    const result = await login({
      variables: {
        email,
        password,
      },
    });
    const Token = result.data.loginUser.accessToken;

    setAccessToken(Token);
    setIsLogIn(true);
    localStorage.setItem("accessToken", Token);
    // router.push("/boards");
  };

  // isLogIn이 true로 변경된 후 라우팅 실행
  useEffect(() => {
    if (isLogIn) {
      router.push("/boards");
    }
  }, [isLogIn]);

  const MoveToSignUp = () => {
    router.push("/account/signup");
  };

  return (
    <LoginPresenter
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      MoveToSignUp={MoveToSignUp}
    />
  );
}
