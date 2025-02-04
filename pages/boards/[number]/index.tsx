import BoardDetailContainer from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentWriteContainer from "../../../src/components/units/comment/write/CommentWrite.container";
import BoardCommentListContainer from "../../../src/components/units/comment/list/CommentList.container";

export default function boardPage() {
  return (
    <>
      <BoardDetailContainer />
      <BoardCommentWriteContainer />
      <BoardCommentListContainer />
    </>
  );
}
