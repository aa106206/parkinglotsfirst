import MarketCommentWritePresenter from "./CommentWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./CommentWrite.queries";
import { FETCH_USED_ITEM_QUESTIONS } from "../list/CommentList.queries";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ChangeEvent } from "react";
import { IMarketCommentWriteContainer } from "./CommentWrite.types";
import { IUpdateBoardCommentInput } from "../../../../commons/types/generated/types";

export default function MarketCommentWriteContainer(
  props: IMarketCommentWriteContainer,
) {
  const router = useRouter();

  const [commentContents, setCommentContents] = useState("");

  const [createMarketComment] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateMarketComment] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const changeCommentContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContents(event.target.value);
  };

  const onClickCommandWriteInputBtn = async () => {
    if (commentContents === "") {
      alert("내용이 입력되지 않았습니다");
      return;
    }
    const result = await createMarketComment({
      variables: {
        createUseditemQuestionInput: {
          contents: commentContents,
        },
        useditemId: router.query.id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTIONS,
          variables: {
            useditemId: router.query.id,
          },
        },
      ],
    });
    setCommentContents("");
  };

  const onClickCommentUpdate = async () => {
    if (commentContents === "") {
      alert("내용이 수정되지 않았습니다");
      return;
    }
    // const updateBoardCommentInput: IUpdateBoardCommentInput = {};
    // if (commentContents !== "")
    //   updateBoardCommentInput.contents = commentContents;
    try {
      await updateMarketComment({
        variables: {
          updateUseditemQuestionInput: {
            contents: commentContents,
          },

          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: router.query.id,
            },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <MarketCommentWritePresenter
      changeCommentContents={changeCommentContents}
      onClickCommandWriteInputBtn={onClickCommandWriteInputBtn}
      onClickCommentUpdate={onClickCommentUpdate}
      commentContents={commentContents}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
