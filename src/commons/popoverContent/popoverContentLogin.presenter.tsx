import { IQuery } from "../types/generated/types";
import * as S from "./popoverContentLogin.styled";

interface IPopoverContentLoginPresenter {
  onClickMyPage: () => void;
  data: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  onClickLogOut: () => void;
}

export default function PopoverContentLoginPresenter(
  props: IPopoverContentLoginPresenter,
) {
  return (
    <S.Wrapper>
      <S.MainLine>
        <S.MainProfileImg onClick={props.onClickMyPage}>
          <S.MainProfileSettingImg src="/images/profileSetting.png" />
        </S.MainProfileImg>
        <S.MainProfileInfo>
          <S.MainProfileInfoName>
            {props.data?.fetchUserLoggedIn.name}
          </S.MainProfileInfoName>
          <S.MainProfileInfoPoint>
            {props.data?.fetchUserLoggedIn.userPoint?.amount}P
          </S.MainProfileInfoPoint>
        </S.MainProfileInfo>
      </S.MainLine>
      <S.SecondLine>
        <S.LineImg src="/images/popover1.png" />
        <S.LineWord>충전하기</S.LineWord>
      </S.SecondLine>
      <S.ThirdLine>
        <S.LineImg src="/images/popover2.png" />
        <S.LineWord onClick={props.onClickLogOut}>로그아웃</S.LineWord>
      </S.ThirdLine>
    </S.Wrapper>
  );
}
