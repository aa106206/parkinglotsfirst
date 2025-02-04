import * as S from "./upload2.styles";
import { ChangeEvent, RefObject } from "react";

interface IUpload2Presenter {
  fileRef: RefObject<HTMLInputElement>;
  imageUrl: string;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickfileRef: () => void;
}

export default function Upload2Presenter(props: IUpload2Presenter) {
  return (
    <>
      <input
        style={{ display: "none" }}
        ref={props.fileRef}
        type="file"
        onChange={props.onChangeFile}
      ></input>
      <S.BodyBlockUpload type="button" onClick={props.onClickfileRef}>
        {props.imageUrl === "" ? (
          "+"
        ) : (
          <S.Image src={`https://storage.googleapis.com/${props.imageUrl}`} />
        )}
      </S.BodyBlockUpload>
    </>
  );
}
