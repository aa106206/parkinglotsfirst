import styled from "@emotion/styled";

export const BestBoard = styled.div`
  box-sizing: border-box;
  width: 280px;
  height: 250px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 5px 5px 10px 0px #0000001a;
  overflow: hidden;
  cursor: pointer;
  :hover {
    border: 1px solid #ff9797;
  }
`;

export const ImageBlock = styled.img`
  width: 100%;
  height: 115px;
`;

export const TextBlock = styled.div`
  height: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
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
