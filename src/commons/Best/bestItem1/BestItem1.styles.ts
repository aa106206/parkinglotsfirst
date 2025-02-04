import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 280px;
  height: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  :hover {
    background-color: #ff9797;
  }
`;

export const ItemImage = styled.img`
  width: 240px;
  height: 240px;
  margin: 20px auto;
`;

export const ItemInfo = styled.div`
  width: 240px;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemLeft = styled.div`
  width: 100%-24px;
  display: flex;
  flex-direction: column;
`;

export const ItemLeftName = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 26.64px;
`;

export const ItemLeftRemark = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 17.76px;
  color: #4f4f4f;
`;

export const ItemLeftPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 26.64px;
`;

export const ItemRight = styled.div`
  width: 24px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export const ItemRightImg = styled.img``;

export const ItemRightCount = styled.div``;
