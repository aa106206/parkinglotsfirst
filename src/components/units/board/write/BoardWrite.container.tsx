import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWritePresenter from "./BoardWrite.presenter";
import { ChangeEvent, useEffect, useState } from "react";
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
// import { validationFile } from "../../../../commons/libraries/validationFile";

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

  // const fileRef1 = useRef<HTMLInputElement>(null);
  // const fileRef2 = useRef<HTMLInputElement>(null);
  // const fileRef3 = useRef<HTMLInputElement>(null);

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

    if (!router || typeof router.query.number !== "string") return <></>; //이 설명은 TS 포트폴리오 리뷰에 있음
    console.log("출력되나요1111??");
    console.log(updateBoardInput);

    const result = await updateBoard({
      variables: {
        boardId: router.query.number,
        password: password,
        updateBoardInput,
      },
    });
    console.log("출력되나요??");
    console.log(updateBoardInput);
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
      console.log("게시판 작성 후 result: ");
      console.log(result);

      router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error)
        alert("게시글 등록하는 과정에서 에러가 발생했습니다."); //TS 포트폴리오 리뷰에서 알려줌
    }
  };

  const onToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onCompleteAddressSearch = (data: Address) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    onToggleModal();
  };

  const onChangeDetailAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(event.target.value);
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  useEffect(() => {
    // console.log("혹시 무한루프");
    const images = props.data?.fetchBoard.images;
    // console.log(images);
    // console.log("왜 출력안되냐");
    if (images !== undefined && images !== null) setImageUrls([...images]);
  }, [props.data]);

  const onChangeImageUrls = (imageUrl: string, index: number) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = imageUrl;
    setImageUrls(newImageUrls);
  };
  // const onChangeFile1 = async (event: ChangeEvent<HTMLInputElement>) => {
  //   const image1 = event.target.files?.[0];

  //   if (!validationFile(image1)) return;

  //   const result = await uploadFile1({
  //     variables: { file: image1 },
  //   });

  //   setImageUrl1(result.data?.uploadFile.url ?? "");
  // };

  // const onChangeFile2 = async (event: ChangeEvent<HTMLInputElement>) => {
  //   const image2 = event.target.files?.[0];

  //   if (!validationFile(image2)) return;

  //   const result = await uploadFile2({
  //     variables: { file: image2 },
  //   });

  //   setImageUrl2(result.data?.uploadFile.url ?? "");
  // };

  // const onChangeFile3 = async (event: ChangeEvent<HTMLInputElement>) => {
  //   const image3 = event.target.files?.[0];

  //   if (!validationFile(image3)) return;

  //   const result = await uploadFile3({
  //     variables: { file: image3 },
  //   });

  //   setImageUrl3(result.data?.uploadFile.url ?? "");
  // };

  // const onClickfileRef1 = () => {
  //   fileRef1.current?.click();
  // };

  // const onClickfileRef2 = () => {
  //   fileRef2.current?.click();
  // };

  // const onClickfileRef3 = () => {
  //   fileRef3.current?.click();
  // };

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
      // fileRef1={fileRef1}
      // fileRef2={fileRef2}
      // fileRef3={fileRef3}
      // onChangeFile1={onChangeFile1}
      // onChangeFile2={onChangeFile2}
      // onChangeFile3={onChangeFile3}
      // onClickfileRef1={onClickfileRef1}
      // onClickfileRef2={onClickfileRef2}
      // onClickfileRef3={onClickfileRef3}
      imageUrls={imageUrls}
      onChangeImageUrls={onChangeImageUrls}
    />
  );
}
