import * as S from "./CommentWrite.styles";
import { IBoardCommentWritePresenter } from "./CommentWrite.types";
import { Rate } from "antd";

export default function BoardCommentWritePresenter(
  props: IBoardCommentWritePresenter,
) {
  return (
    <>
      <S.CommandWrapper>
        <S.CommandWrite>
          <S.CommandWriteInfo>
            <S.CommandWriteInfoHeadLine>
              <div style={{ display: "flex", alignItems: "center" }}>
                <S.CommandWriteInfoHeadLineImg src="/images/command.png" />
                {props.isEdit ? "수정" : " 댓글"}
              </div>
              {props.isEdit && (
                <img
                  onClick={props.onClickBack}
                  style={{ cursor: "pointer" }}
                  src="/images/delete.png"
                />
              )}
            </S.CommandWriteInfoHeadLine>

            <S.CommandWriteInfoBodyLine>
              <S.CommandWriteInfoBodyInput
                placeholder="작성자"
                onChange={props.changeCommentWriter}
                value={
                  props.commentWriter !== ""
                    ? props.commentWriter
                    : (props.el?.writer ?? "")
                }
                readOnly={props.isEdit}
              />
              <S.CommandWriteInfoBodyInput
                type="password"
                placeholder="비밀번호"
                onChange={props.changeCommentPassword}
                value={props.commentPassword}
              />
              <Rate
                onChange={props.setStar}
                // defaultValue={props.el?.rating}
                allowHalf
              />
            </S.CommandWriteInfoBodyLine>
          </S.CommandWriteInfo>
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
                {props.isEdit ? "수정하기" : "등록하기"}
              </S.CommandWriteInputBtn>
            </S.CommandWriteInputBtnLine>
          </S.CommandWriteWrapper>
        </S.CommandWrite>
      </S.CommandWrapper>
    </>
  );
}
