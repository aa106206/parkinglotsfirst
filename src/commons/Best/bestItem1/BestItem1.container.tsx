import { useRouter } from "next/router";
import { IUseditem } from "../../types/generated/types";
import { MouseEvent } from "react";
import BestItem1Presenter from "./BestItem1.presenter";

interface IBestItem1Container {
  el?: IUseditem;
}

export default function BestItem1Container(props: IBestItem1Container) {
  const router = useRouter();

  const onClickBest = (event: MouseEvent<HTMLInputElement>) => {
    const itemId = event.currentTarget.id;
    const storedItems = JSON.parse(
      localStorage.getItem("recentlyViewed") || "[]",
    );
    if (!storedItems.includes(itemId)) {
      storedItems.push(itemId);
      localStorage.setItem("recentlyViewed", JSON.stringify(storedItems));
    }

    router.push(`/market/${event.currentTarget.id}`);
  };

  return <BestItem1Presenter el={props.el} onClickBest={onClickBest} />;
}
