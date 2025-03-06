import BoardCommentListPresenter from "./CommentList.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_COMMENTS, DELETE_COMMENT } from "./CommentList.queries";
import { useRouter } from "next/router";
import { MouseEvent, ChangeEvent, useState } from "react";

export default function BoardCommentListContainer() {
  const router = useRouter();
  const [deleteComment] = useMutation(DELETE_COMMENT);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [deleteCommentId, setDeleteCommentId] = useState("");

  const { data, fetchMore } = useQuery(FETCH_COMMENTS, {
    variables: {
      boardId: router.query.number,
    },
  });

  const onClickDeleteComment = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteComment({
        variables: {
          password: password,
          boardCommentId: deleteCommentId,
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

      setIsModalOpen(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onClickDeleteModal = (event: MouseEvent<HTMLImageElement>) => {
    setDeleteCommentId(event.currentTarget.id);
    setIsModalOpen(true);
  };

  const onLoadMore = () => {
    if (data === undefined) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult?.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <BoardCommentListPresenter
      onClickDeleteComment={onClickDeleteComment}
      onToggleModal={onToggleModal}
      onChangeDeletePassword={onChangeDeletePassword}
      onClickDeleteModal={onClickDeleteModal}
      onLoadMore={onLoadMore}
      isModalOpen={isModalOpen}
      data={data}
    />
  );
}
