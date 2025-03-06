import { gql, useMutation } from "@apollo/client";
import SignUpPresenter from "./signup.presenter";
import { ChangeEvent, useState } from "react";
import { Router, useRouter } from "next/router";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;

export default function SignUpContainer() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signup] = useMutation(CREATE_USER);

  const onChangeID = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onClickSignUp = async () => {
    try {
      const result = await signup({
        variables: {
          createUserInput: {
            name,
            password,
            email,
          },
        },
      });
      router.push("/account/login");
    } catch (error) {
      if (error instanceof Error) alert("이미 존재하는 아이디입니다");
    }
  };

  return (
    <SignUpPresenter
      onChangeID={onChangeID}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickSignUp={onClickSignUp}
    />
  );
}
