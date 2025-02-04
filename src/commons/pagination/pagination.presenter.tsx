import { IPaginationPresenter } from "./pagination.types";

export default function PaginationPresenter(props: IPaginationPresenter) {
  return (
    <div>
      <span onClick={props.onClickPrevPage}>{"<"}</span>
      {new Array(10).fill(0).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <span
              key={index}
              id={String(props.startPage + index)}
              onClick={props.onClickPage}
              style={{ margin: "0px 10px" }}
            >
              {props.startPage + index}
            </span>
          ),
      )}
      <span onClick={props.onClickNextPage} style={{ cursor: "pointer" }}>
        {">"}
      </span>
    </div>
  );
}
