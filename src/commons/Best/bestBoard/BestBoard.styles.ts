import styled from "@emotion/styled";

export const BestBoard = styled.div`
  width: 280px;
  height: 250px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid black;
  overflow: hidden;
  cursor: pointer;
`;

export const ImageBlock = styled.img`
  width: 100%;
  height: 115px;
  border-bottom: 1px solid black;
`;

export const TextBlock = styled.div`
  /* width: 100%; */
  height: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  :hover {
    background-color: #ff9797;
  }
`;

export const BestBoardTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const BestBoardInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

export const BestBoardInfoLeft = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
`;

export const BestBoardUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BestBoardCreatedAt = styled.div`
  font-size: 12px;
  color: #828282;
`;

export const BestBoardLikeCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BestBoardInfoImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const BestBoardInfoText = styled.div`
  font-size: 16px;
  line-height: 23.68px;
`;
