import * as S from "./myPointSelling.styled";
import PaginationContainer from "../../../../../commons/pagination/pagination.container";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../../commons/libraries/date";
import { IQuery } from "../../../../../commons/types/generated/types";
import { formatPrice } from "../../../../../commons/price/price";
import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent } from "react";

interface IMyPointSellingPresenter {
  data: Pick<IQuery, "fetchPointTransactionsOfSelling"> | undefined;
  onClickMoveToPage: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function MyPointSellingPresenter(
  props: IMyPointSellingPresenter,
) {
  return (
    <>
      <S.Wrapper>
        <S.Options>
          <S.Option id="total" onClick={props.onClickMoveToPage}>
            전체내역
          </S.Option>
          <S.OptionSplit />
          <S.Option id="loading" onClick={props.onClickMoveToPage}>
            충전내역
          </S.Option>
          <S.OptionSplit />
          <S.Option id="buying" onClick={props.onClickMoveToPage}>
            구매내역
          </S.Option>
          <S.OptionSplit />
          <S.SelectOption id="selling" onClick={props.onClickMoveToPage}>
            판매내역
          </S.SelectOption>
        </S.Options>
        <S.LineTable>
          <S.RowHeadLine>
            <S.ColumnNotTitle>거래일</S.ColumnNotTitle>
            <S.ColumnTitle>상품명</S.ColumnTitle>
            <S.ColumnNotTitle>거래내역</S.ColumnNotTitle>
            <S.ColumnNotTitle>거래 후 잔액</S.ColumnNotTitle>
          </S.RowHeadLine>
          {props.data?.fetchPointTransactionsOfSelling.map((el) => (
            <S.RowBodyLine key={el._id}>
              <S.ColumnNotTitle>
                {getDate(el.useditem?.soldAt)}
              </S.ColumnNotTitle>
              <S.ColumnTitle>{el.useditem?.name}</S.ColumnTitle>
              <S.ColumnNotTitle>+{el.amount}</S.ColumnNotTitle>
              <S.ColumnNotTitle>₩{formatPrice(el.balance)}</S.ColumnNotTitle>
            </S.RowBodyLine>
          ))}
        </S.LineTable>
      </S.Wrapper>
    </>
  );
}
