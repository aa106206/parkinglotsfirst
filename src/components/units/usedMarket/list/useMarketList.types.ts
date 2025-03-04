import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IUsedMarketPresenter {
  isModalOpen: Boolean;
  data: Pick<IQuery, "fetchUseditems"> | undefined;
  BestItem: Pick<IQuery, "fetchUseditemsOfTheBest"> | undefined;
  selected: string;
  recentlyViewed: string[];
  onClickSoldoutFalse: (event: MouseEvent<HTMLDivElement>) => void;
  onClickSoldoutTrue: (event: MouseEvent<HTMLDivElement>) => void;
  onLoadMore: () => void;
  onClickMoveToWritePage: () => void;
  onClickMoveToDetailPage: (event: MouseEvent<HTMLDivElement>) => void;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleRangeChange: (dates: any, dateStrings: any) => void;
}
