import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  margin: 70px 0px 0px 100px;
`;

export const ChangeTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const ChangeLine = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ChangeWord = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 700;
  line-height: 23.68px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const ChangeInput = styled.input`
  width: 690px;
  height: 100%;
  background-color: #e0e0e0;
  border: none;
  padding-left: 10px;
  :focus {
    outline: none;
  }
`;

export const ChangeBtn = styled.button`
  width: 180px;
  height: 52px;
  font-size: 16px;
  font-weight: 700;
  background-color: #bdbdbd;
  color: #4f4f4f;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #ff9797;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;
