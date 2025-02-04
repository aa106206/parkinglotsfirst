import { MouseEvent, ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListPresenter {
  onClickDeleteComment: (
    deleteCommentId: string,
  ) => (event: React.MouseEvent<HTMLImageElement>) => Promise<void>;
  onLoadMore: () => void;
  data?: Pick<IQuery, "fetchUseditemQuestions"> | undefined;
  loginId: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
}
