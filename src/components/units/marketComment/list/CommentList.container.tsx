import BoardCommentListPresenter from "./CommentList.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_USED_ITEM_QUESTIONS,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  DELETE_USED_ITEM_QUESTION,
  FETCH_USER_LOGGED_IN,
} from "./CommentList.queries";
import { useRouter } from "next/router";
import { MouseEvent, ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardCommentListContainer() {
  const router = useRouter();
  const [deleteComment] = useMutation(DELETE_USED_ITEM_QUESTION);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.id),
    },
  });

  const { data: loginId } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickDeleteComment =
    (deleteCommentId: string) =>
    async (event: MouseEvent<HTMLImageElement>) => {
      try {
        console.log("삭제할 댓글의 아이디는 : ", deleteCommentId);
        await deleteComment({
          variables: {
            useditemQuestionId: deleteCommentId,
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
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    };

  const onLoadMore = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditemQuestions.length ?? 0) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <BoardCommentListPresenter
      onClickDeleteComment={onClickDeleteComment}
      onLoadMore={onLoadMore}
      data={data}
      loginId={loginId}
    />
  );
}
