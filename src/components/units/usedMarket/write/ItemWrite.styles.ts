import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export const Wrapper = styled.form`
  width: 1200px;
  height: 2000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px auto;
  border: 1px solid black;
`;

export const Wrap1 = styled.div`
  width: 100%;
  height: 52px;
  font-size: 36px;
  font-weight: 700;
  line-height: 53.28px;
  text-align: center;
  margin: 80px auto;
`;

export const Wrap2 = styled.div`
  width: 100%;
  height: 1584px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Wrap2Input = styled.div`
  width: 996px;
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrap2Input1 = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const Wrap2Input2 = styled.input`
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 0px 15px;
`;

export const Wrap2WebEditor = styled.div`
  width: 996px;
  height: 360px;
  display: flex;
  flex-direction: column;
`;

export const Wrap2WebEditor1 = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const Wrap2WebEditor2 = styled(ReactQuill)`
  width: 996px;
  height: 320px;
  .ql-container {
    height: calc(320px - 42px); /* 42px는 툴바(toolbar) 높이 */
  }
`;

export const Wrap2Location = styled.div`
  width: 996px;
  height: 292px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Wrap2LocationMap = styled.div`
  width: 384px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Wrap2LocationMap1 = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
export const Wrap2LocationMap2 = styled.div`
  width: 100%;
  height: 252px;
`;

export const Wrap2LocationRight = styled.div`
  width: 588px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrap2LocationRightGPS = styled.div`
  width: 350px;
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrap2LocationRightGPS1 = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const Wrap2LocationRightGPS2 = styled.div`
  width: 100%;
  height: 52px;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Wrap2LocationRightGPS2Block = styled.input`
  width: 150px;
  height: 52px;
  text-align: center;
`;

export const Wrap2LocationRightGPS2Img = styled.img`
  width: 24px;
  height: 24px;
`;

export const Wrap2LocationRightAddress = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrap2LocationRightAddress1 = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const Wrap2LocationRightAddress2 = styled.input`
  width: 100%;
  height: 52px;
  text-align: center;
  border: 1px solid black;
`;

export const Wrap2Upload = styled.div`
  width: 996px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrap2Upload1 = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const Wrap2Upload2 = styled.div`
  width: 340px;
  height: 180px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Wrap2MainImg = styled.div`
  width: 996px;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrap2MainImg1 = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const Wrap2MainImg2 = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
`;

export const Wrap2MainImg2Btn = styled.input`
  cursor: pointer;
  margin-right: 10px;
`;

export const Wrap2MainImg2BtnLabel = styled.label`
  font-size: 16px;
  cursor: pointer;
  margin-right: 30px;
  /* display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center; */
`;

export const Wrap3 = styled.div`
  width: 100%;
  height: 52px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrap3Btn = styled.button`
  width: 180px;
  height: 52px;
  /* background-color: #bdbdbd; */
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
`;
