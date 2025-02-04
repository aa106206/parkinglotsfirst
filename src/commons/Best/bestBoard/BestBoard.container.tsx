import { useRouter } from "next/router";
import { IBoard } from "../../types/generated/types";
import BestBoardPresenter from "./BestBoard.presenter";

interface IBestBoardContainer {
  el: IBoard;
}

export default function BestBoardContainer(props: IBestBoardContainer) {
  const router = useRouter();

  const onClickBestBoard = () => {
    router.push(`/boards/${props.el._id}`);
  };

  return (
    <BestBoardPresenter el={props.el} onClickBestBoard={onClickBestBoard} />
  );
}
