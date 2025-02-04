import * as S from "./myMarket.styled";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../commons/libraries/date";
import PaginationContainer from "../../../../commons/pagination/pagination.container";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent } from "react";
import { ApolloQueryResult } from "@apollo/client";
import SearchBar3 from "../../../../commons/searchbar/searchBar3/searchbar3";

interface IMyMarketPresenter {
  data: Pick<IQuery, "fetchUseditemsISold"> | undefined;
  selected: string;
  onClickISold: () => void;
  onClickIPick: () => void;
  onClickTitle: (event: MouseEvent<HTMLDivElement>) => void;
  IPick: Pick<IQuery, "fetchUseditemsIPicked"> | undefined;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsISoldArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsISold">>>;
  IPickRefetch: (
    variables?: Partial<IQueryFetchUseditemsIPickedArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIPicked">>>;
  iSoldItemCount: number | undefined;
  iPickedItemCount: number | undefined;
  keyword: string;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function MyMarketPresenter(props: IMyMarketPresenter) {
  return (
    <>
      <S.Wrapper>
        <S.Main>
          <S.Options>
            <S.Option
              onClick={props.onClickISold}
              isActive={"ISold" === props.selected}
            >
              나의 상품
            </S.Option>
            <S.Option
              onClick={props.onClickIPick}
              isActive={"IPick" === props.selected}
            >
              마이찜
            </S.Option>
            <SearchBar3 onChangeInput={props.onChangeInput} />
            <S.SearchBtn>검색</S.SearchBtn>
          </S.Options>
          <S.LineTable>
            <S.RowHeadLine>
              <S.ColumnNotTitle>번호</S.ColumnNotTitle>
              <S.ColumnTitle>상품명</S.ColumnTitle>
              <S.ColumnNotTitle>판매가격</S.ColumnNotTitle>
              <S.ColumnNotTitle>날짜</S.ColumnNotTitle>
            </S.RowHeadLine>
            {(props.selected === "ISold"
              ? props.data?.fetchUseditemsISold
              : props.IPick?.fetchUseditemsIPicked
            )?.map((el) => (
              <S.RowBodyLine key={el._id}>
                <S.ColumnNotTitle>
                  {el._id.substr(-4).toUpperCase()}
                </S.ColumnNotTitle>
                <S.ColumnTitle id={el._id} onClick={props.onClickTitle}>
                  {props.keyword === ""
                    ? el.name
                    : el.name
                        .replaceAll(props.keyword, `@#@${props.keyword}@#@`)
                        .split("@#@")
                        .map((qqq) => (
                          <span
                            key={uuidv4()}
                            style={{
                              color: qqq === props.keyword ? "red" : "black",
                            }}
                          >
                            {qqq}
                          </span>
                        ))}
                </S.ColumnTitle>
                <S.ColumnNotTitle>₩{el.price}</S.ColumnNotTitle>
                <S.ColumnNotTitle>{getDate(el.createdAt)}</S.ColumnNotTitle>
              </S.RowBodyLine>
            ))}
          </S.LineTable>
        </S.Main>
        <S.Footer>
          <PaginationContainer
            refetch={
              props.selected === "ISold" ? props.refetch : props.IPickRefetch
            }
            Count={
              props.selected === "ISold"
                ? props.iSoldItemCount
                : props.iPickedItemCount
            }
          />
        </S.Footer>
      </S.Wrapper>
    </>
  );
}
