import { gql, useLazyQuery, useQuery } from "@apollo/client";
import UsedMarketPresenter from "./useMarketList.presenter";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { Router, useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
// import { recentlyViewedState } from "../../../../commons/globalState";
import _ from "lodash";

const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      contents
      images
      remarks
      tags
      seller {
        picture
        name
      }
      pickedCount
      price
      buyer {
        _id
        name
      }
      seller {
        _id
        name
      }
      soldAt
    }
  }
`;

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
        createdAt
        updatedAt
        deletedAt
      }
      buyer {
        _id
        name
      }
      seller {
        _id
        name
      }
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

const FETCH_USED_ITEM_OF_THE_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      price
      pickedCount
      images
    }
  }
`;

export default function UsedMarketContainer() {
  console.log("맨 처음 실행");

  const router = useRouter();
  const [selected, setSelected] = useState<string>("sell");
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>();
  const [keyword, setKeyword] = useState("");

  const { data, fetchMore, refetch } = useQuery<Pick<IQuery, "fetchUseditems">>(
    FETCH_USED_ITEMS,
    {
      variables: {
        isSoldout: false,
      },
    },
  );

  const { data: BestItem } = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_USED_ITEM_OF_THE_BEST,
  );

  const onClickSoldoutFalse = (event: MouseEvent<HTMLDivElement>) => {
    refetch({
      isSoldout: false,
    });
    setSelected(event?.currentTarget.id);
  };

  const onClickSoldoutTrue = (event: MouseEvent<HTMLDivElement>) => {
    refetch({
      isSoldout: true,
    });
    setSelected(event?.currentTarget.id);
  };

  const onLoadMore = () => {
    if (data === undefined) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length ?? 10 / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickMoveToWritePage = () => {
    router.push("/market/new");
  };

  const onClickMoveToDetailPage = (event: MouseEvent<HTMLDivElement>) => {
    const viewedProducts = JSON.parse(
      localStorage.getItem("recentlyViewed") ?? "[]",
    );
    if (!viewedProducts.includes(event.currentTarget.id)) {
      setRecentlyViewed([...viewedProducts, event.currentTarget.id]);
    }
    router.push(`/market/${event.currentTarget.id}`);
  };

  const getKeyword = _.debounce((value) => {
    refetch({ search: value });
    setKeyword(value);
  }, 500);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    getKeyword(event.currentTarget.value);
  };

  // 날짜로 상품 게시글 찾는 코드였던걸로 기억함
  const handleRangeChange = (dates: any, dateStrings: any) => {
    console.log("Selected Dates: ", dates); // Moment 객체 배열
    console.log("Formatted Dates: ", dateStrings); // 문자열 배열
  };

  return (
    <UsedMarketPresenter
      data={data}
      BestItem={BestItem}
      selected={selected}
      onClickSoldoutFalse={onClickSoldoutFalse}
      onClickSoldoutTrue={onClickSoldoutTrue}
      onLoadMore={onLoadMore}
      onClickMoveToWritePage={onClickMoveToWritePage}
      onClickMoveToDetailPage={onClickMoveToDetailPage}
      onChangeInput={onChangeInput}
      handleRangeChange={handleRangeChange}
    />
  );
}
