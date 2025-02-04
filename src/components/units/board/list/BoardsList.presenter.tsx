import * as S from "./BoardsList.styles";
import { getDate } from "../../../../commons/libraries/date";
import { IBoardsListPresenterProps } from "./BoardList.types";
import PaginationContainer from "../../../../commons/pagination/pagination.container";
import { v4 as uuidv4 } from "uuid";
import BestBoardContainer from "../../../../commons/Best/bestBoard/BestBoard.container";
import SearchBar1 from "../../../../commons/searchbar/searchBar1/searchbar1";

export default function BoardsListPresenter(props: IBoardsListPresenterProps) {
  return (
    <>
      <S.Wrapper>
        <S.BestBoardsWrapper>
          <S.BestBoardsTitle>베스트 게시글</S.BestBoardsTitle>
          <S.BestBoardsMain>
            {props.bestBoards?.fetchBoardsOfTheBest.map((el) => (
              <BestBoardContainer el={el} key={el._id} />
            ))}
          </S.BestBoardsMain>
        </S.BestBoardsWrapper>
        <S.Main>
          <SearchBar1 onChangeInput={props.onChangeInput} />
          <S.LineTable>
            <S.RowHeadLine>
              <S.ColumnNotTitle>ID</S.ColumnNotTitle>
              <S.ColumnTitle>제목</S.ColumnTitle>
              <S.ColumnNotTitle>작성자</S.ColumnNotTitle>
              <S.ColumnNotTitle>날짜</S.ColumnNotTitle>
            </S.RowHeadLine>
            {props.data?.fetchBoards.map((el) => (
              <S.RowBodyLine key={el._id}>
                <S.ColumnNotTitle>
                  {el._id.substr(-4).toUpperCase()}
                </S.ColumnNotTitle>
                <S.ColumnTitle id={el._id} onClick={props.onClickTitle}>
                  {props.keyword === ""
                    ? el.title
                    : el.title
                        .replaceAll(props.keyword, `@#@${props.keyword}@#@`)
                        .split("@#@")
                        .map((qqq) => (
                          <span
                            key={uuidv4()}
                            style={{
                              color: qqq === props.keyword ? "red" : "black",
                            }}
                          >
                            {qqq}
                          </span>
                        ))}
                </S.ColumnTitle>
                <S.ColumnNotTitle>{el.writer}</S.ColumnNotTitle>
                <S.ColumnNotTitle>{getDate(el.createdAt)}</S.ColumnNotTitle>
              </S.RowBodyLine>
            ))}
          </S.LineTable>
        </S.Main>
        <S.Footer>
          <PaginationContainer
            refetch={props.refetch}
            Count={props.boardsCount}
          />
          <S.BoardRegistBtn onClick={props.onClickBoardRegistBtn}>
            <S.BoardRegistBtnImg src="/images/boardCreate.png" />
            <S.BoardRegistBtnWord>게시물 등록하기</S.BoardRegistBtnWord>
          </S.BoardRegistBtn>
        </S.Footer>
      </S.Wrapper>
    </>
  );
}
