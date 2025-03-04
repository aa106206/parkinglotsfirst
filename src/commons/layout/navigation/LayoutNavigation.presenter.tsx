import * as S from "./LayoutNavigation.styles";
import { MouseEvent } from "react";

interface ILayoutNavigationPresenter {
  onClickOption: (event: MouseEvent<HTMLImageElement>) => void;
}

const navigation = [
  { id: "/boards", text: "자유게시판" },
  { id: "/market", text: "중고마켓" },
  { id: "/mypage/mymarket", text: "마이페이지" },
];

export default function LayoutNavigationPresenter(
  props: ILayoutNavigationPresenter,
) {
  return (
    <S.Wrapper>
      <S.Options>
        {navigation.map((el) => (
          <S.Option id={el.id} onClick={props.onClickOption} key={el.id}>
            {el.text}
          </S.Option>
        ))}
      </S.Options>
    </S.Wrapper>
  );
}
