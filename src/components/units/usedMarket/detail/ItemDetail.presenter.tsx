import { Tooltip } from "antd";
import { getDate } from "../../../../commons/libraries/date";
import * as S from "./ItemDetail.styles";
import { IQuery } from "../../../../commons/types/generated/types";
import { formatPrice } from "../../../../commons/price/price";

interface IItemDetailPresenter {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  onClickHeartCount: () => void;
  onClickMoveToList: () => void;
}

export default function ItemDetailPresenter(props: IItemDetailPresenter) {
  return (
    <S.Wrapper>
      <S.Info>
        <S.Profile src="/images/profile.png" />
        <S.Writer_Date>
          <S.Writer>{props.data?.fetchUseditem.seller?.name}</S.Writer>
          <S.Date>{getDate(props.data?.fetchUseditem.createdAt)}</S.Date>
        </S.Writer_Date>
        <S.LinkTooltip src="/images/link-Tooltip.png" />
        <Tooltip
          placement="topRight"
          title={`${props.data?.fetchUseditem.useditemAddress?.address} ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
        >
          <S.LocationTooltip src="/images/location_Tooltip.png" />
        </Tooltip>
      </S.Info>
      <S.SplitLine />
      <S.Main1>
        <S.Main1Left>
          <S.Main1LeftRemark>
            {props.data?.fetchUseditem.remarks}
          </S.Main1LeftRemark>
          <S.Main1LeftName>{props.data?.fetchUseditem.name}</S.Main1LeftName>
        </S.Main1Left>
        <S.Main1Right onClick={props.onClickHeartCount}>
          <S.Main1RightImg src="/images/usedItemHeart.png" />
          <S.Main1RightCount>
            {props.data?.fetchUseditem.pickedCount}
          </S.Main1RightCount>
        </S.Main1Right>
      </S.Main1>
      <S.MainPrice>
        {formatPrice(props.data?.fetchUseditem.price ?? 0)}원
      </S.MainPrice>
      <S.MainCarousel arrows autoplay>
        <div>
          <S.ItemImg
            src={
              props.data?.fetchUseditem.images?.[0] === "" ||
              props.data?.fetchUseditem.images?.[0] === undefined
                ? "/images/no_img.jpg"
                : `https://storage.googleapis.com/${props.data?.fetchUseditem.images?.[0]}`
            }
          />
        </div>
        <div>
          <S.ItemImg
            src={
              props.data?.fetchUseditem.images?.[1] === "" ||
              props.data?.fetchUseditem.images?.[1] === undefined
                ? "/images/no_img.jpg"
                : `https://storage.googleapis.com/${props.data?.fetchUseditem.images?.[1]}`
            }
          />
        </div>
      </S.MainCarousel>
      <S.MainContents
        dangerouslySetInnerHTML={{
          __html: String(props.data?.fetchUseditem.contents),
        }}
      />
      <S.MainTags>#{props.data?.fetchUseditem.tags}</S.MainTags>
      <S.MainMap>
        <S.RealMainMap id="map" />
      </S.MainMap>
      <S.BtnLine>
        <S.Btn onClick={props.onClickMoveToList}>목록으로</S.Btn>
        <S.Btn>수정하기</S.Btn>
      </S.BtnLine>
    </S.Wrapper>
  );
}
