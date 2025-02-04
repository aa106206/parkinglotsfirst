import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";
import MyPointLoadingPresenter from "./myPointLoading.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      impUid
      status
      statusDetail
      amount
      useditem {
        soldAt
        name
        price
      }
      balance
      createdAt
    }
  }
`;

export default function MyPointLoadingContainer() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchPointTransactionsOfLoading">>(
    FETCH_POINT_TRANSACTIONS_OF_LOADING,
  );
  console.log(data);

  const onClickMoveToPage = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/mypage/mypoint/${event.currentTarget.id}`);
  };

  return (
    <MyPointLoadingPresenter
      data={data}
      onClickMoveToPage={onClickMoveToPage}
    />
  );
}
