import { useRouter } from "next/router";
import { IUseditem } from "../../types/generated/types";
import { MouseEvent, useEffect } from "react";
import { recentlyViewedState } from "../../globalState";
import { useRecoilState } from "recoil";
import BestItem2Presenter from "./BestItem2.presenter";

interface IBestItem2Container {
  el: string;
}

export default function BestItem2Container(props: IBestItem2Container) {
  const router = useRouter();
  const [recentlyViewed, setRecentlyViewed] =
    useRecoilState<string[]>(recentlyViewedState);

  const onClickBest = (event: MouseEvent<HTMLInputElement>) => {
    const viewedProducts = JSON.parse(
      localStorage.getItem("recentlyViewed") ?? "",
    );
    if (!viewedProducts.includes(event.currentTarget.id)) {
      setRecentlyViewed([...viewedProducts, event.currentTarget.id]);
      localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
    }
    router.push(`/market/${event.currentTarget.id}`);
  };

  useEffect(() => {
    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  return <BestItem2Presenter el={props.el} onClickBest={onClickBest} />;
}
