import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";
import { MouseEvent, ChangeEvent } from "react";

export interface IBoardsListPresenterProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickTitle: (event: MouseEvent<HTMLDivElement>) => void;
  onClickBoardRegistBtn: () => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  boardsCount?: number;
  keyword: string;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  bestBoards: Pick<IQuery, "fetchBoardsOfTheBest"> | undefined;
}
