import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 70px auto;
`;

export const Main = styled.div``;

export const Options = styled.div`
  width: 100%;
  height: 52px;

  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

interface IOption {
  isActive: boolean;
}

export const Option = styled.div<IOption>`
  font-size: 16px;
  margin-right: 20px;
  cursor: pointer;
  font-weight: ${(props) => (props.isActive ? "500" : "400")};
  color: ${(props) => (props.isActive ? "ff9797" : "#4f4f4f")};
  border-bottom: ${(props) => (props.isActive ? "2px solid #ff9797" : "none")};
  :hover {
    color: black;
    font-weight: 500;
    border-bottom: 2px solid #ff9797;
  }
`;

export const SearchBtn = styled.button`
  width: 78px;
  height: 52px;
  background-color: black;
  font-size: 16px;
  font-weight: 500;
  color: white;
  margin-left: 10px;
`;

export const LineTable = styled.div`
  width: 100%;
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
  width: 55%;
  cursor: pointer;
`;

export const ColumnNotTitle = styled.div`
  width: 15%;
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
