import { IQuery, IQueryFetchBoardsArgs } from "../types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";

export interface IPaginationContainer {
  // refetch: (
  //   variables?: Partial<IQueryFetchBoardsArgs> | undefined,
  // ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetch: any;
  Count?: number;
}

export interface IPaginationPresenter {
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  startPage: number;
  lastPage: number;
}
