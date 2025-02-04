import { IQuery } from "../../../../commons/types/generated/types";
import * as S from "./Mypage.styled";

interface IMypagePresenter {
  data: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  onClickMyMarket: () => void;
  onClickMyPoint: () => void;
  onClickMyProfile: () => void;
}

export default function MypagePresenter(props: IMypagePresenter) {
  return (
    <S.Wrapper>
      <S.SideBar>
        <S.MypageWord>MYPAGE</S.MypageWord>
        <S.MypageProfile src="/images/profile.png" />
        <S.MypageWord>{props.data?.fetchUserLoggedIn.name}</S.MypageWord>
        <S.MyPoint>
          <S.MyPointLeft src="/images/mypagePoint.png" />
          <S.MyPointRight>
            {props.data?.fetchUserLoggedIn.userPoint?.amount}
          </S.MyPointRight>
        </S.MyPoint>
        <S.MypageOption>
          <S.MypageOptionImg src="/images/mypageshoppingcart.png" />
          <S.MypageOptionBtn onClick={props.onClickMyMarket}>
            내 장터{" "}
          </S.MypageOptionBtn>
        </S.MypageOption>
        <S.MypageOption>
          <S.MypageOptionImg src="/images/popover1.png" />
          <S.MypageOptionBtn onClick={props.onClickMyPoint}>
            내 포인트
          </S.MypageOptionBtn>
        </S.MypageOption>
        <S.MypageOption>
          <S.MypageOptionImg src="/images/profile.png" />
          <S.MypageOptionBtn onClick={props.onClickMyProfile}>
            내 프로필
          </S.MypageOptionBtn>
        </S.MypageOption>
      </S.SideBar>
      {/* <S.MainPage></S.MainPage> */}
    </S.Wrapper>
  );
}
