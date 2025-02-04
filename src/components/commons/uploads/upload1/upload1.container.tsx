import { ChangeEvent, useRef } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import Upload1Presenter from "./upload1.presenter";

interface IUpload1Container {
  imageUrl: string;
  index: number;
  onChangeImageUrls: (imageUrl: string, index: number) => void;
  data?: Pick<IQuery, "fetchBoard">;
}

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function Upload1Container(props: IUpload1Container) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0];
    const result = await uploadFile({
      variables: { file: image },
    });
    props.onChangeImageUrls(result.data?.uploadFile.url ?? "", props.index);
  };

  const onClickfileRef = () => {
    fileRef.current?.click();
  };

  return (
    <Upload1Presenter
      fileRef={fileRef}
      imageUrl={props.imageUrl}
      onChangeFile={onChangeFile}
      onClickfileRef={onClickfileRef}
    />
  );
}
