import styled from "@emotion/styled";

export const RecentItem = styled.div`
  box-sizing: border-box;
  width: 156px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #bdbdbd;
  margin: 10px auto;
  padding: 10px;
  cursor: pointer;
  :hover {
    background-color: #ff9797;
  }
`;

export const Like = styled.div`
  width: 30px;
  height: 18px;
  display: flex;
  /* flex-direction: row-reverse; */
  align-items: center;
  justify-content: space-between;
`;

export const LikeImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const LikeCnt = styled.div`
  font-weight: 500;
  font-size: 12px;
  text-align: center;
`;

export const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  margin: 0px auto;
`;

export const ItemName = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin: 5px 0px;
`;

export const ItemRemarks = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #4f4f4f;
`;

export const ItemPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: black;
`;

export const ItemTags = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: #bdbdbd;
`;
