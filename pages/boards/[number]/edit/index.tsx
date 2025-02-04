import BoardWriteContainer from "../../../../src/components/units/board/write/BoardWrite.container";
import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardDetail.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function boardPageEdit() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.number },
  });
  return <BoardWriteContainer isEdit={true} data={data} />;
}
