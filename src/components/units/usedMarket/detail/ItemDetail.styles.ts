import styled from "@emotion/styled";
import { Carousel } from "antd";

export const Wrapper = styled.div`
  width: 800px;
  margin: 80px auto;
  /* border: 1px solid black; */
`;

export const Info = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 120px;
`;

export const Profile = styled.img`
  width: 56px;
  height: 56px;
`;

export const Writer_Date = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const LinkTooltip = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 20px;
  cursor: pointer;
`;

export const LocationTooltip = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Writer = styled.div`
  width: 100%;
  height: 36px;
  font-size: 24px;
  font-weight: 500;
`;

export const Date = styled.div`
  width: 100%;
  height: 24px;
  font-size: 16px;
  font-weight: 400;
  color: #828282;
`;

export const SplitLine = styled.div`
  width: 800px;
  border-top: 1px solid #bdbdbd;
  margin-top: 20px;
`;

export const Main1 = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Main1Left = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
`;

export const Main1LeftRemark = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #bdbdbd;
`;

export const Main1LeftName = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #4f4f4f;
`;

export const Main1Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const Main1RightImg = styled.img`
  width: 36px;
  height: 36px;
`;

export const Main1RightCount = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const MainPrice = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

export const MainCarousel = styled(Carousel)`
  width: 300px;
  margin: 30px auto;
`;

export const ItemImg = styled.img`
  width: 300px;
  height: 300px;
`;

export const MainContents = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #4f4f4f;
`;

export const MainTags = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
  margin: 30px 0px;
`;

export const MainMap = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 540px;
  padding: 80px 0px;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
`;

export const RealMainMap = styled.div`
  width: 100%;
  height: 100%;
`;

export const BtnLine = styled.div`
  width: 100%;
  height: 52px;
  margin: 80px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Btn = styled.button`
  width: 180px;
  height: 52px;
  background-color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  margin: 0px 10px;
  cursor: pointer;
  :hover {
    background-color: #ff9797;
  }
`;
