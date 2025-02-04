import { IQuery } from "../../../../commons/types/generated/types";
import * as S from "./upload1.styles";
import { ChangeEvent, RefObject } from "react";

interface IUpload1Presenter {
  fileRef: RefObject<HTMLInputElement>;
  imageUrl: string;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickfileRef: () => void;
}

export default function Upload1Presenter(props: IUpload1Presenter) {
  return (
    <>
      <input
        style={{ display: "none" }}
        ref={props.fileRef}
        type="file"
        onChange={props.onChangeFile}
      ></input>
      <S.BodyBlockUpload onClick={props.onClickfileRef}>
        {props.imageUrl === "" ? (
          "+"
        ) : (
          <S.Image src={`https://storage.googleapis.com/${props.imageUrl}`} />
        )}
      </S.BodyBlockUpload>
    </>
  );
}
