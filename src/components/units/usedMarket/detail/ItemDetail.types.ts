import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IItemDetailPresenter {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  onClickHeartCount: () => void;
  onClickMoveToList: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickBuy: (event: MouseEvent<HTMLButtonElement>) => void;
}
