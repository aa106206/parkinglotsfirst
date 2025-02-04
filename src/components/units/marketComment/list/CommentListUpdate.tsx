import BoardCommentWriteContainer from "../write/CommentWrite.container";
import { useState } from "react";
import * as S from "./CommentList.styles";
import { getDate } from "../../../../commons/libraries/date";
import { Rate } from "antd";
import { MouseEvent } from "react";
import {
  IQuery,
  IUseditemQuestion,
} from "../../../../commons/types/generated/types";

interface ICommentListUpdate {
  el: IUseditemQuestion;
  loginId: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  onClickDeleteComment: (
    deleteCommentId: string,
  ) => (event: React.MouseEvent<HTMLImageElement>) => Promise<void>;
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
                  {props.el.user.name}
                </S.CommandListInfoHeadFrontWriter>
              </S.CommandListInfoHeadFront>
              {props.el.user._id === props.loginId?.fetchUserLoggedIn._id ? (
                <S.CommandListInfoHeadEnd>
                  <S.CommandListUpdateBtn
                    src="/images/update.png"
                    onClick={onClickUpdate}
                  />
                  <S.CommandListDeleteBtn
                    // id={props.el._id}
                    src="/images/delete.png"
                    onClick={props.onClickDeleteComment(props.el._id)}
                  ></S.CommandListDeleteBtn>
                </S.CommandListInfoHeadEnd>
              ) : (
                <></>
              )}
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
