import BoardCommentListContainer from "../../../src/components/units/marketComment/list/CommentList.container";
import BoardCommentWriteContainer from "../../../src/components/units/marketComment/write/CommentWrite.container";
import ItemDetailContainer from "../../../src/components/units/usedMarket/detail/ItemDetail.container";

export default function ItemPage() {
  return (
    <>
      <ItemDetailContainer />;
      <BoardCommentWriteContainer />
      <BoardCommentListContainer />
    </>
  );
}
