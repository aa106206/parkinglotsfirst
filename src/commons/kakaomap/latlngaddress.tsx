import axios from "axios";

const kakaoApi = axios.create({
  baseURL: "https://dapi.kakao.com/v2/local",
  headers: {
    Authorization: `KakaoAK d7c078fcf09119c85eb85cc85fcbf292`, // 발급받은 REST API 키
  },
});

// /**
// //  * 좌표로 주소 가져오기
// //  * @param latitude - 위도
// //  * @param longitude - 경도
// //  * @returns Promise<string | null>
// //  */
export const getAddressByCoords = async (
  latitude: number,
  longitude: number,
): Promise<string | null> => {
  try {
    const response = await kakaoApi.get("/geo/coord2address.json", {
      params: {
        x: longitude, // 경도
        y: latitude, // 위도
      },
    });

    // API 응답에서 주소 추출
    const documents = response.data.documents;
    if (documents.length > 0) {
      return documents[0].address.address_name; // 지번 주소 반환
    }
    return null;
  } catch (error) {
    console.error("주소 변환 에러:", error);
    return null;
  }
};
