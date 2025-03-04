import BoardCommentWritePresenter from "./CommentWrite.presenter";
import { CREATE_COMMENT, UPDATE_COMMENT } from "./CommentWrite.queries";
import { FETCH_COMMENTS } from "../list/CommentList.queries";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { ChangeEvent } from "react";
import { IBoardCommentWriteContainer } from "./CommentWrite.types";
import { IUpdateBoardCommentInput } from "../../../../commons/types/generated/types";

export default function BoardCommentWriteContainer(
  props: IBoardCommentWriteContainer,
) {
  const router = useRouter();

  const [commentWriter, setCommentWriter] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [commentContents, setCommentContents] = useState("");
  const [star, setStar] = useState(0);

  const [createBoardComment] = useMutation(CREATE_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_COMMENT);

  const changeCommentWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentWriter(event.target.value);
  };

  const changeCommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(event.target.value);
  };

  const changeCommentContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContents(event.target.value);
  };

  const onClickCommandWriteInputBtn = async () => {
    if (commentWriter === "") {
      alert("작성자가 입력되지 않았습니다");
      return;
    }
    if (commentPassword === "") {
      alert("비밀번호가 입력되지 않았습니다");
      return;
    }
    if (commentContents === "") {
      alert("내용이 입력되지 않았습니다");
      return;
    }
    const result = await createBoardComment({
      variables: {
        createBoardCommentInput: {
          writer: commentWriter,
          password: commentPassword,
          contents: commentContents,
          rating: star,
        },
        boardId: router.query.number,
      },
      refetchQueries: [
        {
          query: FETCH_COMMENTS,
          variables: {
            boardId: router.query.number,
          },
        },
      ],
    });
    setCommentWriter("");
    setCommentPassword("");
    setCommentContents("");
  };

  const onClickCommentUpdate = async () => {
    if (commentContents === "") {
      alert("내용이 수정되지 않았습니다");
      return;
    }
    if (commentPassword === "") {
      alert("비밀번호가 입력되지 않았습니다");
      return;
    }
    const updateBoardCommentInput: IUpdateBoardCommentInput = {};
    if (commentContents !== "")
      updateBoardCommentInput.contents = commentContents;
    if (star !== props.el?.rating) updateBoardCommentInput.rating = star;
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password: commentPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              boardId: router.query.number,
            },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickBack = (event: MouseEvent<HTMLImageElement>) => {
    props.setIsEdit?.(false);
  };

  return (
    <BoardCommentWritePresenter
      changeCommentWriter={changeCommentWriter}
      changeCommentPassword={changeCommentPassword}
      changeCommentContents={changeCommentContents}
      onClickCommandWriteInputBtn={onClickCommandWriteInputBtn}
      onClickCommentUpdate={onClickCommentUpdate}
      onClickBack={onClickBack}
      commentWriter={commentWriter}
      commentPassword={commentPassword}
      commentContents={commentContents}
      setStar={setStar}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
