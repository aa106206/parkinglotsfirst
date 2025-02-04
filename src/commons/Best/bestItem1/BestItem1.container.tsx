import { useRouter } from "next/router";
import { IUseditem } from "../../types/generated/types";
import { MouseEvent, useEffect } from "react";
// import { recentlyViewedState } from "../../globalState";
import { useRecoilState } from "recoil";
import BestItem1Presenter from "./BestItem1.presenter";

interface IBestItem1Container {
  el?: IUseditem;
}

export default function BestItem1Container(props: IBestItem1Container) {
  const router = useRouter();
  // const [recentlyViewed, setRecentlyViewed] =
  //   useRecoilState<string[]>(recentlyViewedState);

  const onClickBest = (event: MouseEvent<HTMLInputElement>) => {
    router.push(`/market/${event.currentTarget.id}`);
  };

  return <BestItem1Presenter el={props.el} onClickBest={onClickBest} />;
}
