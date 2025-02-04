import { useState } from "react";
import { MouseEvent } from "react";
import PageinationPresenter from "./pagination.presenter";
import { IPaginationContainer } from "./pagination.types";

export default function PaginationContainer(props: IPaginationContainer) {
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    props.refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage(startPage + 10);
    props.refetch({ page: startPage + 10 });
  };

  const lastPage = Math.ceil((props.Count ?? 10) / 10);

  return (
    <PageinationPresenter
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
    />
  );
}
