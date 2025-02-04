import BoardDetailPresenter from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetailContainer() {
  const router = useRouter();
  if (!router || typeof router.query.number !== "string") return <></>;

  const [likeCount] = useMutation(LIKE_BOARD);
  const [dislikeCount] = useMutation(DISLIKE_BOARD);

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: router.query.number,
      },
    },
  );

  const onClickLikeCount = (event: MouseEvent<HTMLDivElement>) => {
    const result = likeCount({
      variables: {
        boardId: event.currentTarget.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.number,
          },
        },
      ],
    });
  };

  const onClickDislikeCount = (event: MouseEvent<HTMLDivElement>) => {
    const result = dislikeCount({
      variables: {
        boardId: event.currentTarget.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.number,
          },
        },
      ],
    });
  };

  const onClickBoards = () => {
    router.push(`/boards`);
  };

  const onClickUpdate = () => {
    router.push(`/boards/${router.query.number}/edit`);
  };

  const onClickDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof HTMLButtonElement) {
      console.log("삭제할 게시글 ID: " + event.target.id);
      await deleteBoard({
        variables: {
          boardId: event.target.id,
        },
      });
    }
    router.push(`/boards`);
  };

  return (
    <BoardDetailPresenter
      onClickBoards={onClickBoards}
      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
      data={data}
      onClickLikeCount={onClickLikeCount}
      onClickDislikeCount={onClickDislikeCount}
    />
  );
}
