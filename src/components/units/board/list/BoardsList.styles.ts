import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 1120px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  margin: 70px auto;
`;

export const BestBoardsWrapper = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 70px;
`;

export const BestBoardsTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const BestBoardsMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.div``;

export const LineTable = styled.div`
  width: 100%;
  height: 560px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const RowHeadLine = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  text-align: center;
  line-height: 300%;
`;

export const RowBodyLine = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  text-align: center;
  line-height: 300%;
  border-top: 1px solid #bdbdbd;
  :hover {
    color: blue;
  }
  margin: 0px;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  cursor: pointer;
`;

export const ColumnNotTitle = styled.div`
  width: 10%;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BoardRegistBtn = styled.button`
  width: 170px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
`;

export const BoardRegistBtnImg = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 10px;
`;

export const BoardRegistBtnWord = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
