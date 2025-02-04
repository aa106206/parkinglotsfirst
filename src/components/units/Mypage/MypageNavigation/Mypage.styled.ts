import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 180px;
  height: 750px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 64px 30px 0px 0px;
  padding-right: 80px;
  border-right: 1px solid #f2f2f2;
`;

export const SideBar = styled.div`
  height: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MypageWord = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const MypageProfile = styled.img`
  width: 96px;
  height: 96px;
  margin: 40px auto;
`;

export const MyPoint = styled.div`
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px 70px 0px;
`;

export const MyPointLeft = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 7px 0px 0px;
`;

export const MyPointRight = styled.div`
  width: 62px;
  height: 24px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const MypageOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
  :hover {
    color: black;
    font-weight: 700;
  }
`;

export const MypageOptionImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const MypageOptionBtn = styled.div`
  height: 24px;
  font-size: 18px;
  color: #828282;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// export const MainPage = styled.div`
//   width: 75%;
//   height: 100%;
//   border-left: 1px solid #f2f2f2;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;
