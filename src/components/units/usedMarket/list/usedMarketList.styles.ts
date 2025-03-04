import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  //Layout 부분에서 사용되고 있음
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 기존 화면과 인터랙션 방지 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 최상위로 배치 */
`;

export const BestUsedItem = styled.div`
  width: 1200px;
  height: 475px;
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const BestUsedItemTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  line-height: 42.19px;
  text-align: center;
`;

export const BestUsedItemMain = styled.div`
  width: 100%;
  height: 390px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TodayWatchListWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 650px;
  left: 1250px;
  width: 200px;
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
`;

export const TodayWatchListText = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  padding: 10px 0px;
  position: sticky;
  top: 0;
  background-color: white;
  text-align: center;
`;

export const Wrapper = styled.div`
  width: 1200px;
  height: 1190px;
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Option = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Split = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface IOPtionDetail {
  isActive: boolean;
}

export const OPtionDetail = styled.div<IOPtionDetail>`
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  line-height: 26.64px;
  text-align: left;
  margin-right: 20px;
  font-weight: ${(props) => (props.isActive ? "500" : "400")};
  color: ${(props) => (props.isActive ? "ff9797" : "#4f4f4f")};
  border-bottom: ${(props) => (props.isActive ? "2px solid #ff9797" : "none")};
  cursor: pointer;
  :hover {
    color: black;
    font-weight: 500;
    border-bottom: 2px solid #ff9797;
  }
`;

export const SearchBtn = styled.button`
  width: 78px;
  height: 100%;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const List = styled.div`
  width: 100%;
  height: 1006px;
  overflow: auto;
`;

export const UsedItem = styled.div`
  width: 100%;
  height: 200px;
  border-top: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  :hover {
    background-color: #ff9797;
  }
`;

export const UsedItemPart1 = styled.img`
  width: 160px;
  height: 160px;
  margin-left: 20px;
`;

export const UsedItemPart2 = styled.div`
  width: 800px;
  height: 160px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* padding: 20px 0px; */
`;

export const Part2Name = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 35.52px;
  text-align: left;
`;

export const Part2Remark = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  text-align: left;
`;

export const Part2Tags = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  text-align: left;
  color: #bdbdbd;
`;

export const Part2Footer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 45px;
`;

export const Part2ImgAndText = styled.div`
  display: flex;
  margin-right: 20px;
`;

export const Part2Img = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

export const Part2Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
`;

export const UsedItemPart3 = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const UsedItemPart3_1 = styled.div`
  width: 180px;
  height: 36px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  margin-right: 20px;
`;

export const UsedItemPart3_2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 16px;
  color: #bdbdbd;
`;

export const PriceImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const Price = styled.div`
  height: 36px;
  font-size: 24px;
  font-weight: 700;
  /* line-height: 35.52px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row-reverse;
`;

export const Register = styled.button`
  width: 124px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  :hover {
    background-color: #ff9797;
  }
`;
