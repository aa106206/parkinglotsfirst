import * as S from "./CommentWrite.styles";
import { IMarketCommentWritePresenter } from "./CommentWrite.types";
import { Rate } from "antd";

export default function MarketCommentWritePresenter(
  props: IMarketCommentWritePresenter,
) {
  return (
    <>
      <S.CommandWrapper>
        <S.CommandWrite>
          {props.isEdit ? (
            <></>
          ) : (
            <S.CommandWriteInfo>
              <S.CommandWriteInfoHeadLine>
                <S.CommandWriteInfoHeadLineImg src="/images/command.png" />
                문의하기
              </S.CommandWriteInfoHeadLine>
            </S.CommandWriteInfo>
          )}

          <S.CommandWriteWrapper>
            <S.CommandWriteInput
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={props.changeCommentContents}
              value={
                props.commentContents !== ""
                  ? props.commentContents
                  : (props.el?.contents ?? "")
              }
            />
            <S.CommandWriteInputBtnLine>
              <S.CommandWriteInputBtnLineLength>
                {props.commentContents.length}/100
              </S.CommandWriteInputBtnLineLength>
              <S.CommandWriteInputBtn
                onClick={
                  props.isEdit
                    ? props.onClickCommentUpdate
                    : props.onClickCommandWriteInputBtn
                }
              >
                {props.isEdit ? "답글등록" : "문의하기"}
              </S.CommandWriteInputBtn>
            </S.CommandWriteInputBtnLine>
          </S.CommandWriteWrapper>
        </S.CommandWrite>
      </S.CommandWrapper>
    </>
  );
}
