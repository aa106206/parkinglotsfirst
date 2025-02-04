import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 240px;
  height: 220px;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
`;

export const MainLine = styled.div`
  width: 100%;
  height: 90px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MainProfileImg = styled.div`
  width: 48px;
  height: 48px;
  background-image: url("/images/loginProfile.png");
  position: relative;
  cursor: pointer;
`;

export const MainProfileSettingImg = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

export const MainProfileInfo = styled.div`
  width: 180px;
  height: 48px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const MainProfileInfoName = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const MainProfileInfoPoint = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

export const SecondLine = styled.div`
  width: 100%;
  height: 65px;
  border-top: 1px solid black;
  border-bottom: 1px solid #efefef;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ThirdLine = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LineImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const LineWord = styled.div`
  margin-left: 10px;
  color: #bdbdbd;
  cursor: pointer;
  :hover {
    color: black;
    font-weight: 700;
  }
`;
