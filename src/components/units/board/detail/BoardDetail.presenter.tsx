import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/date";
import { IBoardDetailPresenterProps } from "./BoardDetail.types";
import { Tooltip } from "antd";

export default function BoardDetailPresenter(
  props: IBoardDetailPresenterProps,
) {
  return (
    <>
      <S.Wrapper>
        <S.Board>
          <S.Info>
            <S.Profile src="/images/profile.png" />
            <S.Writer_Date>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.Date>{getDate(props.data?.fetchBoard?.createdAt)}</S.Date>
            </S.Writer_Date>
            <S.LinkTooltip src="/images/link-Tooltip.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard?.boardAddress?.address} ${props.data?.fetchBoard?.boardAddress?.addressDetail}`}
            >
              <S.LocationTooltip src="/images/location_Tooltip.png" />
            </Tooltip>
          </S.Info>
          <S.SplitLine></S.SplitLine>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          {props.data?.fetchBoard?.images?.map((el) =>
            el !== "" ? (
              <S.Image src={`https://storage.googleapis.com/${el}`} />
            ) : (
              <></>
            ),
          )}

          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
          {props.data?.fetchBoard?.youtubeUrl && (
            <S.Youtube url={`${props.data?.fetchBoard?.youtubeUrl}`} />
          )}

          <S.LikeOrDislike>
            <S.LikeBlock
              id={props.data?.fetchBoard._id}
              onClick={props.onClickLikeCount}
            >
              <S.LikeImage src="/images/like.png" />
              <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
            </S.LikeBlock>
            <S.DislikeBlock
              id={props.data?.fetchBoard._id}
              onClick={props.onClickDislikeCount}
            >
              <S.LikeImage src="/images/dislike.png" />
              <S.DislikeCount>
                {props.data?.fetchBoard.dislikeCount}
              </S.DislikeCount>
            </S.DislikeBlock>
          </S.LikeOrDislike>
        </S.Board>
        <S.SelectLine>
          <S.Btn onClick={props.onClickBoards}>목록으로</S.Btn>
          <S.Btn onClick={props.onClickUpdate}>수정하기</S.Btn>
          <S.Btn id={props.data?.fetchBoard?._id} onClick={props.onClickDelete}>
            삭제하기
          </S.Btn>
        </S.SelectLine>
      </S.Wrapper>
      <S.CommandBoardSplitLine />
    </>
  );
}
