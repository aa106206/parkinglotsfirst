import BoardCommentWriteContainer from "../write/CommentWrite.container";
import { useState } from "react";
import * as S from "./CommentList.styles";
import { getDate } from "../../../../commons/libraries/date";
import { Rate } from "antd";
import { MouseEvent } from "react";

interface ICommentListUpdate {
  el: any;
  onClickDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
}

export default function CommentListUpdate(props: ICommentListUpdate) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickUpdate = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {!isEdit ? (
        <S.CommandList key={props.el._id}>
          <S.CommandProfile src="/images/profile.png" />
          <S.CommandListInfo>
            <S.CommandListInfoHead>
              <S.CommandListInfoHeadFront>
                <S.CommandListInfoHeadFrontWriter>
                  {props.el.writer}
                </S.CommandListInfoHeadFrontWriter>
                <Rate disabled allowHalf value={props.el.rating} />
              </S.CommandListInfoHeadFront>
              <S.CommandListInfoHeadEnd>
                <S.CommandListUpdateBtn
                  src="/images/update.png"
                  onClick={onClickUpdate}
                />
                <S.CommandListDeleteBtn
                  id={props.el._id}
                  onClick={props.onClickDeleteModal}
                  src="/images/delete.png"
                ></S.CommandListDeleteBtn>
              </S.CommandListInfoHeadEnd>
            </S.CommandListInfoHead>
            <S.CommandListInfoBody>{props.el.contents}</S.CommandListInfoBody>
            <S.CommandListInfoFoot>
              {getDate(props.el.createdAt)}
            </S.CommandListInfoFoot>
          </S.CommandListInfo>
        </S.CommandList>
      ) : (
        <BoardCommentWriteContainer
          isEdit={isEdit}
          el={props.el}
          setIsEdit={setIsEdit}
        />
      )}
    </div>
  );
}
