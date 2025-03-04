import { useEffect, useState } from "react";
import ItemWritePresenter from "./ItemWrite.presenter";
import { useRouter } from "next/router";
import { getAddressByCoords } from "../../../../commons/kakaomap/latlngaddress";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../commons/yup/schema";
import { CREATE_USED_ITEM } from "./ItemWrite.queries";
import { IFormData } from "./ItemWrite.types";

declare const window: typeof globalThis & { kakao: any };

export default function ItemWriteContainer() {
  const [lat, setLat] = useState(37.494515);
  const [lng, setLng] = useState(126.959695);
  const [address, setAddress] = useState("");

  const router = useRouter();

  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const [itemImageUrls, setItemImageUrls] = useState(["", ""]);
  const { register, handleSubmit, setValue, trigger, formState } =
    useForm<IFormData>({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onChangeImageUrls = (imageUrl: string, index: number) => {
    const newImageUrls = [...itemImageUrls];
    newImageUrls[index] = imageUrl;
    setItemImageUrls(newImageUrls);
  };

  useEffect(() => {
    const script = document.createElement("script"); //<script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=83d1b7f43ac27b6339487759cbf23728";
    //카카오 지도 API 로드
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.494515, 126.959695), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴}
        const markerPosition = new window.kakao.maps.LatLng(
          37.494515,
          126.959695,
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          draggable: true, // 드래그 가능하도록 설정
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        window.kakao.maps.event.addListener(marker, "dragend", function () {
          setLat(marker.getPosition().getLat()); // 위도
          setLng(marker.getPosition().getLng()); // 경도
          // console.log("현재 위치:", latitude, longitude);
        });
      });
    };
  }, []);

  const handleGetAddress = async () => {
    const result = await getAddressByCoords(lat, lng);
    setAddress(result ?? "");
  };
  handleGetAddress();

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickSubmit = async (data: any) => {
    const result = await createUsedItem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
          tags: data.tags,
          useditemAddress: {
            address: data.address,
            addressDetail: data.addressDetail,
            lat,
            lng,
          },
          images: [...itemImageUrls],
        },
      },
    });

    router.push(`/market/${result.data.createUseditem._id}`);
  };

  return (
    <ItemWritePresenter
      onChangeImageUrls={onChangeImageUrls}
      itemImageUrls={itemImageUrls}
      onClickSubmit={onClickSubmit}
      lat={lat}
      lng={lng}
      address={address}
      register={register}
      handleSubmit={handleSubmit}
      setValue={setValue}
      onChangeContents={onChangeContents}
      formState={formState}
    />
  );
}
