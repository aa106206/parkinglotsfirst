import { useRecoilState } from "recoil";
import LoadingPresenter from "./loading.presenter";
import { loadPage } from "../globalState";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import * as PortOne from "@portone/browser-sdk/v2";
import { v4 as uuidv4 } from "uuid";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
} from "../types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../popoverContent/popoverContentsLogin.queries";
import Script from "next/script";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./loading.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function LoadingContainer() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(loadPage);
  const [money, setMoney] = useState<number>(0);

  const [loading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const handleCloseModal = (event: MouseEvent<HTMLImageElement>) =>
    setIsModalOpen(false);

  const onChangeLoad = (event: ChangeEvent<HTMLInputElement>) =>
    setMoney(Number(event.currentTarget.value));

  useEffect(() => {
    // 포트원 스크립트 로드 후 초기화
    if (typeof window !== "undefined" && window.IMP) {
      window.IMP.init("imp49910675"); // 포트원 가맹점 식별 코드 입력
    }
  }, []);

  const onClickLoad = async (event: MouseEvent<HTMLDivElement>) => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "kakaopay",
        pay_method: "card",
        name: "금액 충전",
        amount: money,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
      },
      async function (rsp: any) {
        // callback
        if (rsp.success) {
          alert("결제가 성공했습니다.");
          console.log(rsp);
          const result = await loading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          console.log(result);
        } else {
          alert("결제에 실패했습니다.");
          // 결제 실패 로직
        }
      },
    );
  };

  return (
    <>
      <Script
        // type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
        strategy="afterInteractive"
      />
      <Script
        // type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
        strategy="afterInteractive"
      />
      <LoadingPresenter
        money={money}
        handleCloseModal={handleCloseModal}
        onChangeLoad={onChangeLoad}
        onClickLoad={onClickLoad}
      />
    </>
  );
}
