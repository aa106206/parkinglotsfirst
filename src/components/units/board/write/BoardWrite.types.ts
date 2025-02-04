import { IQuery } from "../../../../commons/types/generated/types";
import { ChangeEvent } from "react";
// import { RefObject } from "react";

export interface IBoardWriteContainerProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWritePresenterProps {
  writerError: string;
  passwordError: string;
  titleError: string;
  contentError: string;
  isActive: boolean;
  changeWriterInput: (event: ChangeEvent<HTMLInputElement>) => void;
  changePasswordInput: (event: ChangeEvent<HTMLInputElement>) => void;
  changeTitleInput: (event: ChangeEvent<HTMLInputElement>) => void;
  changeContentInput: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  register: () => void;
  isEdit: boolean;
  onClickUpdate: () => void;
  data?: Pick<IQuery, "fetchBoard">;
  isModalOpen: boolean;
  onToggleModal: () => void;
  onCompleteAddressSearch: (data: any) => void;
  zipcode: string;
  address: string;
  onChangeDetailAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  imageUrls: string[];
  onChangeImageUrls: (imageUrl: string, index: number) => void;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
