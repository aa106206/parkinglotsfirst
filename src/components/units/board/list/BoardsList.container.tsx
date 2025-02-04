import BoardsListPresenter from "./BoardsList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "./BoardsList.queries";
import { MouseEvent, ChangeEvent, useState } from "react";
import _ from "lodash";
import type {
  IQuery,
  IQueryFetchBoardsCountArgs,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardsListContainer() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: boardsCount, refetch: refetchBoardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const { data: bestBoards } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(
    FETCH_BOARDS_OF_THE_BEST,
  );

  const onClickBoardRegistBtn = () => {
    router.push("/boards/new");
  };

  const onClickTitle = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement)
      router.push(`/boards/${event.target.id}`);
  };

  const getKeyword = _.debounce((value) => {
    refetch({ search: value, page: 1 });
    refetchBoardCount({ search: value });
    setKeyword(value);
  }, 500);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    getKeyword(event.currentTarget.value);
  };

  return (
    <BoardsListPresenter
      data={data}
      onClickTitle={onClickTitle}
      onClickBoardRegistBtn={onClickBoardRegistBtn}
      refetch={refetch}
      boardsCount={boardsCount?.fetchBoardsCount}
      keyword={keyword}
      onChangeInput={onChangeInput}
      bestBoards={bestBoards}
    />
  );
}
