import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./BoardWrite.types";
export const Wrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const HeadBlock = styled.span`
  margin: 60px 0px 20px 0px;
  font-size: 36px;
  font-weight: 700px;
`;

export const Check = styled.div`
  color: red;
  font-size: 16px;
`;

export const BodyRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Writer_Pw = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 486px;
  margin-top: 40px;
`;

export const BodyBlock = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
`;

export const BodyBlockTitle = styled.div`
  height: 24px;
  font-size: 16px;
  font-weight: 500px;
`;

export const BodyBlockBlank = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 10px;
`;

export const BodyBlockBlankContent = styled.textarea`
  width: 100%;
  height: 480px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  resize: none;
`;

export const BodyBlockAddress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 216px;
`;

export const BodyBlockAddressFirst = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 220px;
`;

export const BodyBlockBlankAddress = styled.input`
  box-sizing: border-box;
  width: 77px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
`;

export const BodyBlockBlankAddressBtn = styled.button`
  box-sizing: border-box;
  width: 124px;
  height: 52px;
  background-color: black;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const BodyBlockUploadLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 282px;
`;

export const RadioBtnLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
  margin-right: 10px;
`;

export const RadioButtonLabel = styled.label`
  font-size: 16px;
  cursor: pointer;
  margin-right: 30px;
`;

export const EndBlock = styled.div`
  margin-top: 40px;
`;

export const RegisterBtn = styled.button`
  width: 180px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#FFD600" : ""};
`;
