import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";
import MyPointLoadingPresenter from "./myPointSelling.presenter";
import MyPointSellingPresenter from "./myPointSelling.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($search: String, $page: Int) {
    fetchPointTransactionsOfSelling(search: $search, page: $page) {
      impUid
      amount
      status
      statusDetail
      useditem {
        soldAt
        name
        price
      }
      balance
    }
  }
`;

export default function MyPointSellingContainer() {
  const router = useRouter();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfSelling">
  >(FETCH_POINT_TRANSACTIONS_OF_SELLING);

  const onClickMoveToPage = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/mypage/mypoint/${event.currentTarget.id}`);
  };

  return (
    <MyPointSellingPresenter
      data={data}
      onClickMoveToPage={onClickMoveToPage}
    />
  );
}
