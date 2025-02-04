import { Popover } from "antd";
import * as S from "./LayoutHeader.styles";
import PopoverContentLoginContainer from "../../popoverContent/popoverContentLogin.container";

interface ILayoutHeaderPresenter {
  onClickHomeIcon: () => void;
  onClickLogin: () => void;
  onClickSingUp: () => void;
  isLogIn: boolean;
}

export default function LayoutHeaderPresenter(props: ILayoutHeaderPresenter) {
  return (
    <S.Wrapper>
      <S.HomeIcon
        src="/images/squidgame.jpeg"
        onClick={props.onClickHomeIcon}
      />
      {props.isLogIn ? (
        <S.LogInSuccess>
          <S.LoginProfile src="/images/loginProfile.png" />
          <Popover
            placement="bottomRight"
            content={<PopoverContentLoginContainer />}
          >
            <S.LoginDetail src="/images/loginDetail.png" />
          </Popover>
        </S.LogInSuccess>
      ) : (
        <S.LogInOut>
          <S.LogIn onClick={props.onClickLogin}>로그인</S.LogIn>
          <S.SignUp onClick={props.onClickSingUp}>회원가입</S.SignUp>
        </S.LogInOut>
      )}
    </S.Wrapper>
  );
}
