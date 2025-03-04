import styled from "@emotion/styled";

export const CommandWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const CommandWrite = styled.div`
  width: 1200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CommandWriteInfo = styled.div`
  width: 100%;
  height: 120px;
  // border:1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CommandWriteInfoHeadLine = styled.div`
  width: 1200px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
`;

export const CommandWriteInfoHeadLineImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const CommandWriteInfoBodyLine = styled.div`
  width: 1005;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CommandWriteInfoBodyInput = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  margin-right: 20px;
  padding-left: 20px;
`;

export const CommandWriteInfoBodyStar = styled.img`
  width: 24px;
  height: 24px;
`;

export const CommandWriteWrapper = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #bdbdbd;
  margin-top: 20px;
`;

export const CommandWriteInput = styled.textarea`
  width: 100%;
  height: 110px;
  font-size: 16px;
  font-weight: 500;
  padding: 20px;
  resize: none;
  box-sizing: border-box;
  border: none;
`;

export const CommandWriteInputBtnLine = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f2f2f2;
`;

export const CommandWriteInputBtnLineLength = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding-left: 20px;
  color: #bdbdbd;
`;

export const CommandWriteInputBtn = styled.button`
  width: 90px;
  height: 50px;
  display: block;
  color: white;
  background-color: black;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
