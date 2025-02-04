import * as S from "./signup.styles";
import { ChangeEvent } from "react";

interface ISignUpPresenter {
  onChangeID: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignUp: () => void;
}

export default function SignUpPresenter(props: ISignUpPresenter) {
  return (
    <>
      <S.Wrapper>
        <S.WordWrapper>
          <S.LoginWord>회원가입</S.LoginWord>
        </S.WordWrapper>
        <S.Id>
          <S.IdImage>이름</S.IdImage>
          <S.IdInput onChange={props.onChangeID} type="text" />
        </S.Id>
        <S.Id>
          <S.IdImage>이메일</S.IdImage>
          <S.IdInput onChange={props.onChangeEmail} type="text" />
        </S.Id>
        <S.Id>
          <S.IdImage>비밀번호</S.IdImage>
          <S.IdInput onChange={props.onChangePassword} type="password" />
        </S.Id>
        <S.LoginButton onClick={props.onClickSignUp}>SIGN UP</S.LoginButton>
      </S.Wrapper>
    </>
  );
}
