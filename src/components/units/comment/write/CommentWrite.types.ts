import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

export interface IBoardCommentWriteContainer {
  isEdit?: boolean;
  el?: any;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
}

export interface IBoardCommentWritePresenter {
  changeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  changeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  changeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCommandWriteInputBtn: () => void;
  onClickCommentUpdate: () => void;
  onClickBack: (event: MouseEvent<HTMLImageElement>) => void;
  commentWriter: string;
  commentPassword: string;
  commentContents: string;
  setStar: Dispatch<SetStateAction<number>>;
  isEdit?: boolean;
  el?: any;
}
