import * as S from "./usedMarketList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { formatPrice } from "../../../../commons/price/price";
import { getDate } from "../../../../commons/libraries/date";
import BestItem1Container from "../../../../commons/Best/bestItem1/BestItem1.container";
import SearchBar2 from "../../../../commons/searchbar/searchBar2/searchbar2";
import { DatePicker, Space } from "antd";
import BestItem2Container from "../../../../commons/Best/bestItem2/BestItem2.container";
import { IUsedMarketPresenter } from "./useMarketList.types";
import LoadingContainer from "../../../../commons/loading/loading.container";
import HashtagConverter from "../../../../commons/HashTagConvert/HashtagConverter";

export default function UsedMarketPresenter(props: IUsedMarketPresenter) {
  const { RangePicker } = DatePicker;
  return (
    <>
      <S.BestUsedItem>
        <S.BestUsedItemTitle>베스트 상품</S.BestUsedItemTitle>
        <S.BestUsedItemMain>
          {props.BestItem?.fetchUseditemsOfTheBest.map((el) => (
            <BestItem1Container el={el} />
          ))}
        </S.BestUsedItemMain>
        <S.TodayWatchListWrapper style={{ height: "700px", overflow: "auto" }}>
          <S.TodayWatchListText>오늘 본 상품</S.TodayWatchListText>
          <div>
            <InfiniteScroll
              pageStart={0}
              loadMore={props.onLoadMore}
              hasMore={true}
              useWindow={false}
            >
              {props.recentlyViewed?.map((el) => (
                <BestItem2Container el={el} />
              ))}
            </InfiniteScroll>
          </div>
        </S.TodayWatchListWrapper>
      </S.BestUsedItem>

      <S.Wrapper>
        <S.Option>
          <S.Split>
            <S.OPtionDetail
              id="sell"
              onClick={props.onClickSoldoutFalse}
              isActive={props.selected === "sell"}
            >
              판매중상품
            </S.OPtionDetail>
            <S.OPtionDetail
              id="sold"
              onClick={props.onClickSoldoutTrue}
              isActive={props.selected === "sold"}
            >
              판매된상품
            </S.OPtionDetail>
          </S.Split>
          <S.Split>
            <SearchBar2 onChangeInput={props.onChangeInput} />
            <Space direction="vertical" size={12}>
              <RangePicker
                style={{ height: "52px", marginRight: "20px" }}
                onChange={props.handleRangeChange}
              />
            </Space>
            <S.SearchBtn>검색</S.SearchBtn>
          </S.Split>
        </S.Option>
        <S.List>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el) => (
              <S.UsedItem id={el._id} onClick={props.onClickMoveToDetailPage}>
                <S.UsedItemPart1
                  src={
                    el.images?.length === 0 || el.images?.[0] === ""
                      ? "/images/no_img.jpg"
                      : `https://storage.googleapis.com/${el.images?.[0]}`
                  }
                />
                <S.UsedItemPart2>
                  <S.Part2Name>{el.name}</S.Part2Name>
                  <S.Part2Remark>{el.remarks}</S.Part2Remark>
                  <S.Part2Tags>
                    {HashtagConverter(el.tags?.[0] ? `${el.tags}` : "")}
                  </S.Part2Tags>
                  <S.Part2Footer>
                    <S.Part2ImgAndText>
                      <S.Part2Img src="/images/profile.png" />
                      <S.Part2Text>{el.seller?.name}</S.Part2Text>
                    </S.Part2ImgAndText>
                    <S.Part2ImgAndText>
                      <S.Part2Img src="/images/usedItemHeart.png" />
                      <S.Part2Text>{el.pickedCount}</S.Part2Text>
                    </S.Part2ImgAndText>
                  </S.Part2Footer>
                </S.UsedItemPart2>
                <S.UsedItemPart3>
                  <S.UsedItemPart3_1>
                    <S.Price>{formatPrice(el.price || 0)}원</S.Price>
                    <S.PriceImg src="/images/price.png" />
                  </S.UsedItemPart3_1>
                  {el.buyer ? (
                    <>
                      <S.UsedItemPart3_2>
                        구매자: {el.buyer?.name ? el.buyer?.name : "이름없음"}
                      </S.UsedItemPart3_2>
                      <S.UsedItemPart3_2>
                        구매일자: {getDate(el.soldAt)}
                      </S.UsedItemPart3_2>
                    </>
                  ) : (
                    <></>
                  )}
                </S.UsedItemPart3>
              </S.UsedItem>
            ))}
          </InfiniteScroll>
        </S.List>
        <S.Footer>
          <S.Register onClick={props.onClickMoveToWritePage}>
            상품 등록하기
          </S.Register>
        </S.Footer>
      </S.Wrapper>
    </>
  );
}
