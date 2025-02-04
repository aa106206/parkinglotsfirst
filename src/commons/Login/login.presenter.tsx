import { ChangeEvent } from "react";
import * as S from "./login.styles";

interface ILoginPresenter {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  MoveToSignUp: () => void;
}

export default function LoginPresenter(props: ILoginPresenter) {
  return (
    <>
      <S.Wrapper>
        <S.WordWrapper>
          <S.LoginWord>로그인</S.LoginWord>
        </S.WordWrapper>
        <S.Id>
          <S.IdImage>이메일</S.IdImage>
          <S.IdInput onChange={props.onChangeEmail} type="text" />
        </S.Id>
        <S.Id>
          <S.IdImage>비밀번호</S.IdImage>
          <S.IdInput onChange={props.onChangePassword} type="password" />
        </S.Id>
        <S.LoginButton onClick={props.onClickLogin}>LOGIN</S.LoginButton>
        <S.OptionWrapper>
          <S.Option>Forgot Password?</S.Option>
          <S.Option onClick={props.MoveToSignUp}>회원가입</S.Option>
        </S.OptionWrapper>
      </S.Wrapper>
    </>
  );
}
