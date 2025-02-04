import { getDate } from "../../libraries/date";
import { IBoard } from "../../types/generated/types";
import * as S from "./BestBoard.styles";

interface IBestBoardPresenter {
  el: IBoard;
  onClickBestBoard: () => void;
}

export default function BestBoardPresenter(props: IBestBoardPresenter) {
  return (
    <S.BestBoard onClick={props.onClickBestBoard}>
      <S.ImageBlock
        src={
          props.el.images?.[0]
            ? `https://storage.googleapis.com/${props.el.images?.[0]}`
            : "/images/no_img.jpg"
        }
      />
      <S.TextBlock>
        <S.BestBoardTitle>{props.el.title}</S.BestBoardTitle>
        <S.BestBoardInfo>
          <S.BestBoardInfoLeft>
            <S.BestBoardUser>
              <S.BestBoardInfoImg
                src={
                  props.el.user?.picture
                    ? `https://storage.googleapis.com/${props.el.user.picture}`
                    : "/images/profile.png"
                }
              />
              <S.BestBoardInfoText>{props.el.writer}</S.BestBoardInfoText>
            </S.BestBoardUser>
            <S.BestBoardCreatedAt>
              Date:{getDate(props.el.createdAt)}
            </S.BestBoardCreatedAt>
          </S.BestBoardInfoLeft>
          <S.BestBoardLikeCount>
            <S.BestBoardInfoImg src="/images/like.png" />
            <S.BestBoardInfoText>{props.el.likeCount}</S.BestBoardInfoText>
          </S.BestBoardLikeCount>
        </S.BestBoardInfo>
      </S.TextBlock>
    </S.BestBoard>
  );
}
