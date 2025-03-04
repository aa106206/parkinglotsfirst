import * as S from "./myPointTotal.styled";
import PaginationContainer from "../../../../../commons/pagination/pagination.container";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../../commons/libraries/date";
import { IQuery } from "../../../../../commons/types/generated/types";
import { formatPrice } from "../../../../../commons/price/price";
import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent } from "react";

interface IMyPointTotalPresenter {
  data: Pick<IQuery, "fetchPointTransactions"> | undefined;
  onClickMoveToPage: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function MyPointTotalPresenter(props: IMyPointTotalPresenter) {
  return (
    <>
      <S.Wrapper>
        <S.Options>
          <S.SelectOption id="total" onClick={props.onClickMoveToPage}>
            전체내역
          </S.SelectOption>
          <S.OptionSplit />
          <S.Option id="loading" onClick={props.onClickMoveToPage}>
            충전내역
          </S.Option>
          <S.OptionSplit />
          <S.Option id="buying" onClick={props.onClickMoveToPage}>
            구매내역
          </S.Option>
          <S.OptionSplit />
          <S.Option id="selling" onClick={props.onClickMoveToPage}>
            판매내역
          </S.Option>
        </S.Options>
        <S.LineTable>
          <S.RowHeadLine>
            <S.ColumnNotTitle>날짜</S.ColumnNotTitle>
            <S.ColumnTitle>내용</S.ColumnTitle>
            <S.ColumnNotTitle>거래 및 충전 내역</S.ColumnNotTitle>
            <S.ColumnNotTitle>잔액</S.ColumnNotTitle>
          </S.RowHeadLine>
          {props.data?.fetchPointTransactions.map((el) => (
            <S.RowBodyLine key={el._id}>
              <S.ColumnNotTitle>
                {getDate(el.useditem?.soldAt || el.createdAt)}
              </S.ColumnNotTitle>
              <S.ColumnTitle>{el.status}</S.ColumnTitle>
              <S.ColumnNotTitle>
                {String(el.amount).includes("-") ? el.amount : "+" + el.amount}
              </S.ColumnNotTitle>
              <S.ColumnNotTitle>₩{formatPrice(el.balance)}</S.ColumnNotTitle>
            </S.RowBodyLine>
          ))}
        </S.LineTable>
      </S.Wrapper>
    </>
  );
}
