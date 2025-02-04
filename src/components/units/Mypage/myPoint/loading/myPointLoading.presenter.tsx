import * as S from "./myPointLoading.styled";
import PaginationContainer from "../../../../../commons/pagination/pagination.container";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../../commons/libraries/date";
import { IQuery } from "../../../../../commons/types/generated/types";
import { formatPrice } from "../../../../../commons/price/price";
import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent } from "react";

interface IMyPointLoadingPresenter {
  data: Pick<IQuery, "fetchPointTransactionsOfLoading"> | undefined;
  onClickMoveToPage: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function MyPointLoadingPresenter(
  props: IMyPointLoadingPresenter,
) {
  return (
    <>
      <S.Wrapper>
        <S.Options>
          <S.Option id="total" onClick={props.onClickMoveToPage}>
            전체내역
          </S.Option>
          <S.OptionSplit />
          <S.SelectOption id="loading" onClick={props.onClickMoveToPage}>
            충전내역
          </S.SelectOption>
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
            <S.ColumnNotTitle>충전일</S.ColumnNotTitle>
            <S.ColumnTitle>결제 ID</S.ColumnTitle>
            <S.ColumnNotTitle>충전내역</S.ColumnNotTitle>
            <S.ColumnNotTitle>충전 후 잔액</S.ColumnNotTitle>
          </S.RowHeadLine>
          {props.data?.fetchPointTransactionsOfLoading.map((el) => (
            <S.RowBodyLine key={el._id}>
              <S.ColumnNotTitle>{getDate(el.createdAt)}</S.ColumnNotTitle>
              <S.ColumnTitle>{el.impUid}</S.ColumnTitle>
              <S.ColumnNotTitle>+{el.amount}</S.ColumnNotTitle>
              <S.ColumnNotTitle>₩{formatPrice(el.balance)}</S.ColumnNotTitle>
            </S.RowBodyLine>
          ))}
        </S.LineTable>
      </S.Wrapper>
    </>
  );
}
