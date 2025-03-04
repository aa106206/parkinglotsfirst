import { useQuery } from "@apollo/client";
import UsedMarketPresenter from "./useMarketList.presenter";
import { IQuery } from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEM_OF_THE_BEST,
} from "./usedMarketList.queries";
import _ from "lodash";
import { useRecoilState } from "recoil";
import { loadPage } from "../../../../commons/globalState";

export default function UsedMarketContainer() {
  const router = useRouter();
  const [selected, setSelected] = useState<string>("sell");
  const [keyword, setKeyword] = useState("");
  const [isModalOpen, setIsModalOpen] = useRecoilState(loadPage);

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

  const recentlyViewed = JSON.parse(
    localStorage.getItem("recentlyViewed") ?? "",
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
            ...(prev.fetchUseditems ?? []),
            ...(fetchMoreResult.fetchUseditems ?? []),
          ],
        };
      },
    });
  };

  const onClickMoveToWritePage = () => {
    router.push("/market/new");
  };

  const onClickMoveToDetailPage = (event: MouseEvent<HTMLDivElement>) => {
    const itemId = event.currentTarget.id;
    const storedItems = JSON.parse(
      localStorage.getItem("recentlyViewed") || "[]",
    );
    if (!storedItems.includes(itemId)) {
      storedItems.push(itemId);
      localStorage.setItem("recentlyViewed", JSON.stringify(storedItems));
    }
    router.push(`/market/${event.currentTarget.id}`); //이거 useEffect로 빼는게 나을듯?
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
      isModalOpen={isModalOpen}
      data={data}
      BestItem={BestItem}
      selected={selected}
      recentlyViewed={recentlyViewed}
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
