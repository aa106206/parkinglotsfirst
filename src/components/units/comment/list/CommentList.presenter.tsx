import * as S from "./CommentList.styles";
import { IBoardCommentListPresenter } from "./CommentList.types";
import { Modal } from "antd";
import CommentListUpdate from "./CommentListUpdate";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentListPresenter(
  props: IBoardCommentListPresenter,
) {
  return (
    <div>
      {props.isModalOpen && (
        <Modal
          title="비밀번호를 입력하세요"
          open={true}
          onOk={props.onClickDeleteComment}
          onCancel={props.onToggleModal}
        >
          <S.CommandListDeleteBtnPassword
            type="password"
            onChange={props.onChangeDeletePassword}
          />
        </Modal>
      )}
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el) => (
          <CommentListUpdate
            key={el._id}
            el={el}
            onClickDeleteModal={props.onClickDeleteModal}
          />
        )) ?? <></>}
      </InfiniteScroll>
    </div>
  );
}
