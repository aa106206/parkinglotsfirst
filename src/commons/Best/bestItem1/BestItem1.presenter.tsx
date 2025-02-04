import { MouseEvent } from "react";
import { formatPrice } from "../../price/price";
import { IUseditem } from "../../types/generated/types";
import * as S from "./BestItem1.styles";

interface IBestItem1Presenter {
  el?: IUseditem;
  onClickBest: (event: MouseEvent<HTMLInputElement>) => void;
}

export default function BestItem1Presenter(props: IBestItem1Presenter) {
  return (
    <S.Wrapper id={props.el?._id} onClick={props.onClickBest}>
      <S.ItemImage
        src={`https://storage.googleapis.com/${props.el?.images?.[0]}`}
      />
      <S.ItemInfo>
        <S.ItemLeft>
          <S.ItemLeftName>{props.el?.name}</S.ItemLeftName>
          <S.ItemLeftRemark>{props.el?.remarks}</S.ItemLeftRemark>
          <S.ItemLeftPrice>
            {formatPrice(props.el?.price ?? 0)}원
          </S.ItemLeftPrice>
        </S.ItemLeft>
        <S.ItemRight>
          <S.ItemRightCount>{props.el?.pickedCount}</S.ItemRightCount>
          <S.ItemRightImg src="/images/usedItemHeart.png" />
        </S.ItemRight>
      </S.ItemInfo>
    </S.Wrapper>
  );
}
