import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWritePresenter from "./BoardWrite.presenter";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import { IBoardWriteContainerProps } from "./BoardWrite.types";
import { Address } from "react-daum-postcode";

export default function BoardWriteContainer(props: IBoardWriteContainerProps) {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [imageUrls, setImageUrls] = useState(["", "", ""]);

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const changeWriterInput = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value != "") {
      setWriterError("");
    }
    if (event.target.value && password && title && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const changePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value != "") {
      setPasswordError("");
    }
    if (writer && event.target.value && title && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const changeTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value != "") {
      setTitleError("");
    }
    if (writer && password && event.target.value && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const changeContentInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
    if (event.target.value != "") {
      setContentError("");
    }
    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickUpdate = async () => {
    const currentUrls = JSON.stringify(imageUrls);
    const pastUrls = JSON.stringify(props.data?.fetchBoard.images);
    const notChangeImageUrls = currentUrls === pastUrls;

    const updateBoardInput: IUpdateBoardInput = {};
    if (title) {
      updateBoardInput.title = title;
    }
    if (content) {
      updateBoardInput.contents = content;
    }
    if (youtubeUrl !== "") {
      updateBoardInput.youtubeUrl = youtubeUrl;
    }
    if (zipcode !== "" || address !== "" || detailAddress !== "") {
      updateBoardInput.boardAddress = {};
      if (zipcode !== "") {
        updateBoardInput.boardAddress.zipcode = zipcode;
      }
      if (address !== "") {
        updateBoardInput.boardAddress.address = address;
      }
      if (detailAddress !== "") {
        updateBoardInput.boardAddress.addressDetail = detailAddress;
      }
    }
    if (!notChangeImageUrls) {
      updateBoardInput.images = imageUrls;
    }

    if (!router || typeof router.query.number !== "string") return <></>;

    const result = await updateBoard({
      variables: {
        boardId: router.query.number,
        password: password,
        updateBoardInput,
      },
    });
    router.push(`/boards/${result.data?.updateBoard._id}`);
  };

  const register = async () => {
    if (writer === "") setWriterError("작성자를 입력하지 않았습니다.");
    else setWriterError("");
    if (password === "") setPasswordError("비밀번호를 입력하지 않았습니다.");
    else setPasswordError("");
    if (title === "") setTitleError("제목을 입력하지 않았습니다.");
    else setTitleError("");
    if (content === "") setContentError("내용을 입력하지 않았습니다.");
    else setContentError("");

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            images: [...imageUrls],
            contents: content,
            youtubeUrl: youtubeUrl,
            boardAddress: {
              zipcode: zipcode,
              address: address,
              addressDetail: detailAddress,
            },
          },
        },
      });

      router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error)
        alert("게시글 등록하는 과정에서 에러가 발생했습니다.");
    }
  };

  const onToggleModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIsModalOpen(!isModalOpen);
  };

  const onCompleteAddressSearch = (data: Address) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    setIsModalOpen(!isModalOpen);
  };

  const onChangeDetailAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(event.target.value);
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  useEffect(() => {
    const images = props.data?.fetchBoard.images;
    if (images !== undefined && images !== null) setImageUrls([...images]);
  }, [props.data]);

  const onChangeImageUrls = (imageUrl: string, index: number) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = imageUrl;
    setImageUrls(newImageUrls);
  };

  return (
    <BoardWritePresenter
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentError={contentError}
      isActive={isActive}
      changeWriterInput={changeWriterInput}
      changePasswordInput={changePasswordInput}
      changeTitleInput={changeTitleInput}
      changeContentInput={changeContentInput}
      register={register}
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
      data={props.data}
      isModalOpen={isModalOpen}
      onToggleModal={onToggleModal}
      onCompleteAddressSearch={onCompleteAddressSearch}
      zipcode={zipcode}
      address={address}
      onChangeDetailAddress={onChangeDetailAddress}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      imageUrls={imageUrls}
      onChangeImageUrls={onChangeImageUrls}
    />
  );
}
