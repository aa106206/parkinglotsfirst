import * as S from "./CommentList.styles";
import { IBoardCommentListPresenter } from "./CommentList.types";
import { Modal } from "antd";
import CommentListUpdate from "./CommentListUpdate";
import InfiniteScroll from "react-infinite-scroller";
import { IQuery } from "../../../../commons/types/generated/types";

export default function BoardCommentListPresenter(
  props: IBoardCommentListPresenter,
) {
  return (
    <div>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchUseditemQuestions.map((el) => (
          <CommentListUpdate
            key={el._id}
            el={el}
            loginId={props.loginId}
            onClickDeleteComment={props.onClickDeleteComment}
          />
        )) ?? <></>}
      </InfiniteScroll>
    </div>
  );
}
