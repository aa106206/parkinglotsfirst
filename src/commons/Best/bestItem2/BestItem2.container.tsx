import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
  IUseditem,
} from "../../types/generated/types";
import { MouseEvent } from "react";
import BestItem2Presenter from "./BestItem2.presenter";
import { gql, useQuery } from "@apollo/client";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      price
      tags
      images
      pickedCount
    }
  }
`;

interface IBestItem2Container {
  el: string;
}

export default function BestItem2Container(props: IBestItem2Container) {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: props.el,
    },
  });

  const onClickBest = (event: MouseEvent<HTMLInputElement>) => {
    console.log(data?.fetchUseditem);
    router.push(`/market/${data?.fetchUseditem._id}`);
  };

  return <BestItem2Presenter data={data} onClickBest={onClickBest} />;
}
