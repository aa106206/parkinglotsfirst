import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요"),
  remarks: yup.string().required("한줄요약을 입력해주세요"),
  contents: yup.string().required("상품설명을 입력해주세요"),
  price: yup.string().required("판매가격을 입력해주세요"),
  tags: yup.string().required("태그입력을 입력해주세요"),
  address: yup.string().required("지도의 마커를 이동시켜 위치를 입력해주세요"),
  addressDetail: yup.string().required("상세주소를 입력해주세요"),
});
