import { gql, useQuery } from "@apollo/client";
import MyPointPresenter from "./myPointTotal.presenter";
import { IQuery } from "../../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import MyPointTotalPresenter from "./myPointTotal.presenter";
import { MouseEvent } from "react";

const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      useditem {
        soldAt
        name
        price
      }
      createdAt
    }
  }
`;

export default function MyPointTotalContainer() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchPointTransactions">>(
    FETCH_POINT_TRANSACTIONS,
  );
  console.log(data);

  const onClickMoveToPage = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/mypage/mypoint/${event.currentTarget.id}`);
  };

  return (
    <MyPointTotalPresenter data={data} onClickMoveToPage={onClickMoveToPage} />
  );
}
