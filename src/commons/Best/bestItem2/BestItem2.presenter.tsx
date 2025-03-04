import { MouseEvent } from "react";
import { formatPrice } from "../../price/price";
import { IQuery } from "../../types/generated/types";
import * as S from "./BestItem2.styles";
import HashtagConverter from "../../HashTagConvert/HashtagConverter";

interface IBestItem2Presenter {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  onClickBest: (event: MouseEvent<HTMLInputElement>) => void;
}

export default function BestItem2Presenter(props: IBestItem2Presenter) {
  return (
    <S.RecentItem onClick={props.onClickBest}>
      <S.Like>
        <S.LikeImg src="/images/usedItemHeart.png" />
        <S.LikeCnt>{props.data?.fetchUseditem.pickedCount}</S.LikeCnt>
      </S.Like>
      <S.ItemImage
        src={
          props.data?.fetchUseditem.images?.length === 0 ||
          props.data?.fetchUseditem.images?.[0] === ""
            ? "/images/no_img.jpg"
            : `https://storage.googleapis.com/${props.data?.fetchUseditem.images?.[0]}`
        }
      />
      <S.ItemName>{props.data?.fetchUseditem.name}</S.ItemName>
      <S.ItemRemarks>{props.data?.fetchUseditem.remarks}</S.ItemRemarks>
      <S.ItemPrice>
        {formatPrice(props.data?.fetchUseditem.price ?? 0)}원
      </S.ItemPrice>
      <S.ItemTags>
        {HashtagConverter(props.data?.fetchUseditem.tags?.[0] || "")}
      </S.ItemTags>
    </S.RecentItem>
  );
}
