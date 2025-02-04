import { gql, useQuery } from "@apollo/client";
import MyPointPresenter from "./myPointBuying.presenter";
import { IQuery } from "../../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import MyPointTotalPresenter from "./myPointBuying.presenter";
import { MouseEvent } from "react";
import MyPointBuyingPresenter from "./myPointBuying.presenter";

const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String, $page: Int) {
    fetchPointTransactionsOfBuying(search: $search, page: $page) {
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
      user {
        name
      }
    }
  }
`;

export default function MyPointBuyingContainer() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchPointTransactionsOfBuying">>(
    FETCH_POINT_TRANSACTIONS_OF_BUYING,
  );

  const onClickMoveToPage = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/mypage/mypoint/${event.currentTarget.id}`);
  };

  return (
    <MyPointBuyingPresenter data={data} onClickMoveToPage={onClickMoveToPage} />
  );
}
