import styled from "@emotion/styled";

export const SearchBar = styled.div`
  width: 776px;
  height: 52px;
  border: none;
  border-radius: 10px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 10px 0px 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 20px;
  border: none;
  background-color: #f2f2f2;
  padding-left: 10px;
  :focus {
    outline: none;
  }
`;
