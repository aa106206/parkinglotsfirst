import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 980px;
  height: 600px;
  display: flex;
  flex-direction: column;
  margin: 70px auto;
`;

export const Options = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Option = styled.div`
  font-size: 16px;
  color: #828282;
  cursor: pointer;
  :hover {
    color: black;
    font-weight: 500;
    border-bottom: 2px solid #ff9797;
  }
`;

export const SelectOption = styled.div`
  font-size: 16px;
  cursor: pointer;
  color: black;
  font-weight: 500;
  :hover {
    border-bottom: 2px solid #ff9797;
  }
`;

export const OptionSplit = styled.div`
  height: 16px;
  border: 1px solid #828282;
`;

export const SearchBar = styled.input`
  width: 776px;
  height: 52px;
  border: none;
  border-radius: 10px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  background-image: "../../../../images/search.png";
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
