import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IBoardDetailPresenterProps {
  onClickBoards: () => void;
  onClickUpdate: () => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  data?: Pick<IQuery, "fetchBoard">;
  onClickLikeCount: (event: MouseEvent<HTMLDivElement>) => void;
  onClickDislikeCount: (event: MouseEvent<HTMLDivElement>) => void;
}
