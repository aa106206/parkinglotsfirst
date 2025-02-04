import { ChangeEvent } from "react";
import * as S from "./myProfile.styled";

interface IMyProfilePresenter {
  onChangePwInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePwCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickBtn: () => void;
}

export default function MyProfilePresenter(props: IMyProfilePresenter) {
  return (
    <S.Wrapper>
      <S.ChangeTitle>비밀번호 변경</S.ChangeTitle>
      <S.ChangeLine>
        {/* 현재 비밀번호가 맞는지 비교할수 있는 api 필요한거 아닌가?? */}
        {/* 현재 비밀번호 칠 이유가 없는듯 */}
        <S.ChangeWord>현재 비밀번호</S.ChangeWord>
        <S.ChangeInput
          placeholder="현재 비밀번호를 입력해주세요"
          type="password"
        />
      </S.ChangeLine>
      <S.ChangeLine>
        <S.ChangeWord>새 비밀번호</S.ChangeWord>
        <S.ChangeInput
          placeholder="새 비밀번호를 입력해주세요"
          type="password"
          onChange={props.onChangePwInput}
        ></S.ChangeInput>
      </S.ChangeLine>
      <S.ChangeLine>
        <S.ChangeWord>새 비밀번호 확인</S.ChangeWord>
        <S.ChangeInput
          placeholder="새 비밀번호를 확인해주세요"
          type="password"
          onChange={props.onChangePwCheck}
        ></S.ChangeInput>
      </S.ChangeLine>
      <S.BtnWrap>
        <S.ChangeBtn onClick={props.onClickBtn}>비밀번호 변경</S.ChangeBtn>
      </S.BtnWrap>
    </S.Wrapper>
  );
}
