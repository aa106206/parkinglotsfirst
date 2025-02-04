import { ChangeEvent, MouseEvent, useState } from "react";
import MyMarketPresenter from "./myMarket.presenter";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USEDITEMS_I_SOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      price
      createdAt
    }
  }
`;

export const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      price
      createdAt
    }
  }
`;

export const FETCH_USEDITEMS_COUNT_I_SOLD = gql`
  query {
    fetchUseditemsCountISold
  }
`;

export const FETCH_USED_ITEMS_COUNT_I_PICKED = gql`
  query {
    fetchUseditemsCountIPicked
  }
`;
export default function MyMarketContainer() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [selected, setSelected] = useState("ISold");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_USEDITEMS_I_SOLD, { variables: { search: "" } });

  const { data: iSoldItemCount, refetch: refetchISoldItemCount } = useQuery<
    Pick<IQuery, "fetchUseditemsCountISold">
  >(FETCH_USEDITEMS_COUNT_I_SOLD);

  const { data: IPick, refetch: IPickRefetch } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USED_ITEMS_I_PICKED, { variables: { search: "" } });

  const { data: iPickedItemCount, refetch: refetchIPickedItemCount } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIPicked">
  >(FETCH_USED_ITEMS_COUNT_I_PICKED);

  const onClickISold = async () => {
    await refetch();
    setSelected("ISold");
  };

  const onClickIPick = async () => {
    await IPickRefetch();
    setSelected("IPick");
  };

  const onClickTitle = (event: MouseEvent<HTMLDivElement>) => {};

  const getKeyword = _.debounce((value) => {
    if (selected === "ISold") {
      refetch({ search: value, page: 1 });
      refetchISoldItemCount({ search: value });
    } else {
      IPickRefetch({ search: value, page: 1 });
      refetchIPickedItemCount({ search: value });
    }

    setKeyword(value);
  }, 500);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    getKeyword(event.currentTarget.value);
  };

  return (
    <MyMarketPresenter
      data={data}
      selected={selected}
      onClickISold={onClickISold}
      onClickIPick={onClickIPick}
      onClickTitle={onClickTitle}
      IPick={IPick}
      refetch={refetch}
      IPickRefetch={IPickRefetch}
      iSoldItemCount={iSoldItemCount?.fetchUseditemsCountISold}
      iPickedItemCount={iPickedItemCount?.fetchUseditemsCountIPicked}
      keyword={keyword}
      onChangeInput={onChangeInput}
    />
  );
}
