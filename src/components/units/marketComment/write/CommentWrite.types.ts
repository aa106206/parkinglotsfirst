import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IMarketCommentWriteContainer {
  isEdit?: boolean;
  el?: any;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
}

export interface IMarketCommentWritePresenter {
  changeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCommandWriteInputBtn: () => void;
  onClickCommentUpdate: () => void;
  commentContents: string;
  isEdit?: boolean;
  el?: any;
}
