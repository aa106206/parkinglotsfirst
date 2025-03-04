import { gql, useMutation, useQuery } from "@apollo/client";
import ItemDetailPresenter from "./ItemDetail.presenter";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { MouseEvent, useEffect } from "react";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./ItemDetail.queries";

declare const window: typeof globalThis & { kakao: any };

export default function ItemDetailContainer() {
  const router = useRouter();

  const [usedItemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const [buyData] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: typeof router.query.id === "string" ? router.query.id : "",
    },
  });

  useEffect(() => {
    const script = document.createElement("script"); //<script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=83d1b7f43ac27b6339487759cbf23728";
    //카카오 지도 API 로드
    document.head.appendChild(script);

    script.onload = () => {
      const lat = data?.fetchUseditem.useditemAddress?.lat ?? 33.450701;
      const lng = data?.fetchUseditem.useditemAddress?.lng ?? 126.570667;
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴}
        const markerPosition = new window.kakao.maps.LatLng(lat, lng);
        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }, [data]);

  const onClickHeartCount = async () => {
    const pickCount = await usedItemPick({
      variables: {
        useditemId: router.query.id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: {
            useditemId:
              typeof router.query.id === "string" ? router.query.id : "",
          },
        },
      ],
    });
  };

  const onClickMoveToList = (event: MouseEvent<HTMLButtonElement>) => {
    router.push("/market");
  };

  const onClickBuy = async (event: MouseEvent<HTMLButtonElement>) => {
    const result = await buyData({
      variables: {
        useritemId: typeof router.query.id === "string" ? router.query.id : "",
      },
    });
    router.push("/market");
  };

  return (
    <ItemDetailPresenter
      data={data}
      onClickHeartCount={onClickHeartCount}
      onClickMoveToList={onClickMoveToList}
      onClickBuy={onClickBuy}
    />
  );
}
