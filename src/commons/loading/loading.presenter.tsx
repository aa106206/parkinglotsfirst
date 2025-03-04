import { ChangeEvent, MouseEvent } from "react";
import * as S from "./loading.styles";

interface ILoadingPresenter {
  money: number;
  handleCloseModal: (event: MouseEvent<HTMLImageElement>) => void;
  onChangeLoad: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLoad: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function LoadingPresenter(props: ILoadingPresenter) {
  return (
    <>
      <S.Wrapper>
        <S.ExitLine>
          <S.Exit src="/images/delete.png" onClick={props.handleCloseModal} />
        </S.ExitLine>
        <S.Image src="/images/loading.png" />
        <S.Text>충전하실 금액을 입력해주세요!</S.Text>
        <S.LoadInput
          placeholder="금액 입력"
          type="number"
          onChange={props.onChangeLoad}
        />
        <S.LoadBtn onClick={props.onClickLoad} money={props.money}>
          충전하기
        </S.LoadBtn>
      </S.Wrapper>
    </>
  );
}
