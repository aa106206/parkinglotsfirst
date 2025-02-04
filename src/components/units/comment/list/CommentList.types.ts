import { MouseEvent, ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListPresenter {
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onToggleModal: () => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  onLoadMore: () => void;
  isModalOpen: boolean;
  data?: Pick<IQuery, "fetchBoardComments">;
}
